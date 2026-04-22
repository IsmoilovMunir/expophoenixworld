package com.phoenix.backend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class RateLimitFilter extends OncePerRequestFilter {

    private static final long WINDOW_MS = 15 * 60 * 1000L;
    private static final int MAX_REQUESTS = 20;

    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        boolean targetEndpoint = "/api/applications".equals(request.getRequestURI())
                && "POST".equalsIgnoreCase(request.getMethod());

        if (!targetEndpoint) {
            filterChain.doFilter(request, response);
            return;
        }

        String key = clientKey(request);
        long now = Instant.now().toEpochMilli();
        Bucket bucket = buckets.computeIfAbsent(key, ignored -> new Bucket(now, new AtomicInteger(0)));

        synchronized (bucket) {
            if (now - bucket.windowStart > WINDOW_MS) {
                bucket.windowStart = now;
                bucket.counter.set(0);
            }
            if (bucket.counter.incrementAndGet() > MAX_REQUESTS) {
                response.setStatus(429);
                response.setContentType("application/json");
                response.getWriter().write("{\"message\":\"Too many requests\"}");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }

    private static String clientKey(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return forwarded.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    private static final class Bucket {
        private long windowStart;
        private final AtomicInteger counter;

        private Bucket(long windowStart, AtomicInteger counter) {
            this.windowStart = windowStart;
            this.counter = counter;
        }
    }
}

package com.phoenix.backend.application;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ApplicationController {

    private final ApplicationEmailService applicationEmailService;

    public ApplicationController(ApplicationEmailService applicationEmailService) {
        this.applicationEmailService = applicationEmailService;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok");
    }

    @PostMapping("/api/applications")
    public ResponseEntity<Map<String, Boolean>> submit(@Valid @RequestBody ApplicationRequest request) {
        applicationEmailService.sendApplication(request);
        return ResponseEntity.ok(Map.of("success", true));
    }
}

FROM node:20-alpine AS builder
WORKDIR /app

# Public API base URL baked into the client (e.g. https://expophoenix.com when nginx proxies /api).
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY infra/frontend.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

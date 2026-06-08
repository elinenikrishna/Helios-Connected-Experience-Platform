# Architecture

Frontend: Next.js + TypeScript + React Three Fiber + Framer Motion.
Backend: Java 21 + Spring Boot 3 REST APIs.
Streaming: Kafka topics for telemetry, commands and alerts.
Data: PostgreSQL for core device records; Redis can be added for cache/session state.
DevOps: Docker, Kubernetes and GitHub Actions.

Flow:
Device → API Gateway → Device Service → Kafka → Telemetry/Analytics/Notification Services → Dashboard/Digital Twin UI

# Helios Connected Experience Platform — CGP3

A premium, recruiter-ready Connected Services and IoT ecosystem built for Java/Spring Boot microservices roles. The project combines a Tesla-grade / Apple-style 3D product storytelling website with Java 21 Spring Boot APIs, Kafka-oriented event streaming design, Docker, Kubernetes and cloud-native architecture.

## Why this project exists
This project is aligned to Cognizant Junior Java Engineer requirements: Java, Spring Boot, REST APIs, microservices, Kafka/messaging, distributed systems, connected services, IoT ecosystems, Docker, Kubernetes, SDLC and cloud-native development.

## Features
- Premium Next.js product website with React Three Fiber 3D product scenes
- Scroll-based product storytelling for EV, wearable, camera, thermostat and energy hub
- Digital Twin section showing battery, temperature, firmware, connectivity and last events
- Command Center visualizing real-time Kafka-style event flows
- Java 21 Spring Boot backend with REST APIs for devices, telemetry and commands
- Kafka-ready publisher design and Docker Compose infrastructure
- Kubernetes manifests and GitHub Actions CI

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000` or the port shown in terminal.

## Run Backend
```bash
cd backend
mvn spring-boot:run
```
APIs run on `http://localhost:8080`.

## Run Kafka/Postgres
```bash
docker compose up -d
```

## APIs
- `GET /api/devices`
- `GET /api/devices/{id}`
- `GET /api/telemetry/{id}`
- `POST /api/devices/{id}/command`
- `GET /api/events`

## Resume Entry
**Helios Connected Experience Platform** — Java, Spring Boot, Kafka, PostgreSQL, Docker, Kubernetes, Next.js, Three.js
- Built a cloud-native Connected Services and IoT platform for monitoring and controlling smart products through Java Spring Boot REST APIs and event-driven architecture.
- Developed Kafka-oriented telemetry and command workflows to simulate real-time communication between connected products and backend microservices.
- Created a premium 3D product experience using Next.js, React Three Fiber and Apple-style scroll storytelling for digital twin visualization.
- Designed backend APIs for device registration, telemetry access, command execution and event monitoring with Docker/Kubernetes deployment support.

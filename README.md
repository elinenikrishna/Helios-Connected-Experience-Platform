# Helios Connected Device Cloud

A premium cloud-native Connected Services and IoT platform built with Java Spring Boot microservices, Kafka-style event streaming, Docker, Kubernetes-ready architecture, PostgreSQL, Redis-ready caching, and a high-end 3D React/Next.js product experience website.

This project is designed to demonstrate enterprise backend engineering, real-time platforms, connected products, distributed systems fundamentals, and premium product storytelling for roles focused on Java, Spring Boot, microservices, Kafka, cloud-native engineering, and IoT ecosystems.

## Why This Project Exists

Helios simulates the kind of Connected Services platform used by smart product companies to monitor, control, and analyze connected devices such as smart EVs, thermostats, cameras, watches, speakers, and energy meters.

The project includes:

- Premium 3D product website with scroll-driven storytelling
- Connected product gallery
- Digital twin dashboard
- Real-time telemetry simulation
- Java Spring Boot REST APIs
- Kafka-style event design
- Dockerized frontend and backend
- Kubernetes-ready deployment manifests
- ATS-focused architecture documentation

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Three.js
- React Three Fiber
- Framer Motion
- Tailwind-style premium CSS
- Scroll-based product storytelling

### Backend

- Java 21
- Spring Boot 3
- REST APIs
- Microservices-style layered architecture
- PostgreSQL-ready persistence model
- Kafka event design
- Docker
- Maven

### DevOps

- Docker Compose
- GitHub Actions
- Kubernetes manifests

## Project Structure

```text
helios-connected-device-cloud/
├── frontend/                 # Premium 3D product experience website
├── backend/                  # Java Spring Boot connected device API
├── docs/                     # Architecture and resume documentation
├── k8s/                      # Kubernetes deployment examples
├── docker-compose.yml
└── README.md
```

## Core Features

### Premium 3D Website

The website is not a simple dashboard. It is a high-end product showcase inspired by Tesla, Apple, Mercedes-Benz, Google Nest, and Samsung SmartThings.

It includes:

- Cinematic full-screen 3D hero
- Scroll-based product movement and feature reveals
- Floating product cards
- Glassmorphism sections
- Device command center
- Digital twin product views
- Kafka event stream visualization
- Architecture showcase

### Connected Device Platform

Backend APIs support:

- Device registration
- Product inventory
- Real-time telemetry ingestion
- Device health monitoring
- Command execution
- Alert generation
- Event stream simulation

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/devices` | List connected devices |
| GET | `/api/devices/{id}` | Get device by ID |
| POST | `/api/devices` | Register a new device |
| POST | `/api/telemetry` | Ingest telemetry event |
| GET | `/api/events/recent` | View recent device events |
| POST | `/api/commands` | Send command to device |

## Local Setup

### Run Backend

```bash
cd backend
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

### Run With Docker Compose

```bash
docker compose up --build
```

## Resume Bullet

**Helios Connected Device Cloud** — Java, Spring Boot, Kafka, PostgreSQL, Docker, Kubernetes, React, Three.js, AWS

- Developed a cloud-native Connected Services platform for monitoring and managing IoT products through Java Spring Boot microservices and event-driven architecture.
- Built REST APIs for device registration, telemetry ingestion, command execution, health monitoring, and real-time event visualization.
- Designed Kafka-based streaming workflows for asynchronous telemetry processing between distributed services.
- Created a premium 3D React/Three.js product experience website with scroll-driven product storytelling and digital twin visualization.
- Containerized frontend and backend services using Docker and prepared Kubernetes deployment manifests for cloud-native deployment.

## ATS Keywords Covered

Java, Spring Boot, Microservices, REST APIs, Kafka, RabbitMQ, Event-Driven Architecture, Distributed Systems, Docker, Kubernetes, Cloud Native, PostgreSQL, Redis, IoT, Connected Services, Real-Time Platform, CI/CD, GitHub Actions, API Integration, SDLC, Agile, Unit Testing, Debugging.

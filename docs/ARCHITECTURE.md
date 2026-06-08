# Architecture

Helios Connected Device Cloud follows a cloud-native, event-driven architecture designed for Connected Services and IoT ecosystems.

## High-Level Flow

```text
Premium 3D Product Website
        |
        v
Spring Boot REST API Layer
        |
        +--> Device Service
        +--> Telemetry Service
        +--> Command Service
        +--> Analytics Service
        |
        v
Kafka Event Topics
        |
        v
PostgreSQL / Redis / Analytics Store
```

## Microservices Mapping

| Service | Responsibility |
|---|---|
| Device Service | Register devices, fetch product fleet data, maintain status |
| Telemetry Service | Ingest sensor events and update last known device state |
| Command Service | Send remote commands to devices |
| Analytics Service | Calculate fleet health and real-time insight metrics |
| Notification Service | Generate alerts for degraded/offline devices |

## Kafka Topics

| Topic | Purpose |
|---|---|
| `helios.telemetry.received` | Raw telemetry events from devices |
| `helios.command.sent` | Commands issued from the platform to devices |
| `helios.alert.generated` | Device health and operational alerts |
| `helios.firmware.updated` | Firmware status updates |

## JD Alignment

This project directly aligns with roles requiring:

- Java development
- Spring Boot microservices
- REST API development
- Event-driven architecture
- Kafka or messaging systems
- Distributed systems fundamentals
- Connected systems and IoT ecosystems
- Cloud-native development
- Docker and Kubernetes exposure
- End-to-end software development lifecycle

package com.helios.devicecloud.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.Instant;
import java.util.Map;
import java.util.UUID;

public record TelemetryEvent(
        @NotNull UUID deviceId,
        @NotBlank String eventType,
        @NotNull Map<String, Object> payload,
        Instant receivedAt
) {}

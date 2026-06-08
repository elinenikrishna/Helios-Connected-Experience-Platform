package com.helios.devicecloud.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.Map;
import java.util.UUID;

public record CommandRequest(
        @NotNull UUID deviceId,
        @NotBlank String command,
        Map<String, Object> parameters
) {}

package com.helios.devicecloud.dto;

import jakarta.validation.constraints.NotBlank;

public record DeviceRequest(
        @NotBlank String productName,
        @NotBlank String category,
        @NotBlank String firmwareVersion
) {}

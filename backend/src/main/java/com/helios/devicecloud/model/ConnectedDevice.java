package com.helios.devicecloud.model;

import java.time.Instant;
import java.util.UUID;

public class ConnectedDevice {
    private UUID id;
    private String productName;
    private String category;
    private DeviceStatus status;
    private int healthScore;
    private String firmwareVersion;
    private Instant lastEventAt;

    public ConnectedDevice() {}

    public ConnectedDevice(UUID id, String productName, String category, DeviceStatus status, int healthScore, String firmwareVersion, Instant lastEventAt) {
        this.id = id;
        this.productName = productName;
        this.category = category;
        this.status = status;
        this.healthScore = healthScore;
        this.firmwareVersion = firmwareVersion;
        this.lastEventAt = lastEventAt;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public DeviceStatus getStatus() { return status; }
    public void setStatus(DeviceStatus status) { this.status = status; }
    public int getHealthScore() { return healthScore; }
    public void setHealthScore(int healthScore) { this.healthScore = healthScore; }
    public String getFirmwareVersion() { return firmwareVersion; }
    public void setFirmwareVersion(String firmwareVersion) { this.firmwareVersion = firmwareVersion; }
    public Instant getLastEventAt() { return lastEventAt; }
    public void setLastEventAt(Instant lastEventAt) { this.lastEventAt = lastEventAt; }
}

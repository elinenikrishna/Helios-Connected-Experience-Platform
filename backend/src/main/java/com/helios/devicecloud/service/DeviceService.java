package com.helios.devicecloud.service;

import com.helios.devicecloud.dto.DeviceRequest;
import com.helios.devicecloud.model.ConnectedDevice;
import com.helios.devicecloud.model.DeviceStatus;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class DeviceService {
    private final Map<UUID, ConnectedDevice> devices = new ConcurrentHashMap<>();

    public DeviceService() {
        seed("Helios EV", "Smart Mobility", "v12.8", 97);
        seed("Aura Thermostat", "Smart Home", "v3.4", 94);
        seed("Nova Watch", "Wearable", "v4.2", 91);
        seed("Sentinel Camera", "Security", "v9.1", 99);
    }

    public List<ConnectedDevice> findAll() {
        return new ArrayList<>(devices.values());
    }

    public ConnectedDevice findById(UUID id) {
        ConnectedDevice device = devices.get(id);
        if (device == null) {
            throw new IllegalArgumentException("Device not found: " + id);
        }
        return device;
    }

    public ConnectedDevice register(DeviceRequest request) {
        ConnectedDevice device = new ConnectedDevice(
                UUID.randomUUID(),
                request.productName(),
                request.category(),
                DeviceStatus.ONLINE,
                100,
                request.firmwareVersion(),
                Instant.now()
        );
        devices.put(device.getId(), device);
        return device;
    }

    public void markEventReceived(UUID deviceId) {
        ConnectedDevice device = findById(deviceId);
        device.setLastEventAt(Instant.now());
        device.setStatus(DeviceStatus.ONLINE);
    }

    private void seed(String name, String category, String firmware, int healthScore) {
        ConnectedDevice device = new ConnectedDevice(UUID.randomUUID(), name, category, DeviceStatus.ONLINE, healthScore, firmware, Instant.now());
        devices.put(device.getId(), device);
    }
}

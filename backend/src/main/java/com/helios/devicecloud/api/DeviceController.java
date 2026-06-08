package com.helios.devicecloud.api;

import com.helios.devicecloud.dto.DeviceRequest;
import com.helios.devicecloud.model.ConnectedDevice;
import com.helios.devicecloud.service.DeviceService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/devices")
@CrossOrigin(origins = "*")
public class DeviceController {
    private final DeviceService deviceService;

    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping
    public List<ConnectedDevice> getDevices() {
        return deviceService.findAll();
    }

    @GetMapping("/{id}")
    public ConnectedDevice getDevice(@PathVariable UUID id) {
        return deviceService.findById(id);
    }

    @PostMapping
    public ConnectedDevice registerDevice(@Valid @RequestBody DeviceRequest request) {
        return deviceService.register(request);
    }
}

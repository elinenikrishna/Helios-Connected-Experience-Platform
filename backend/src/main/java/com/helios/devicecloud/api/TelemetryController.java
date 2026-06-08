package com.helios.devicecloud.api;

import com.helios.devicecloud.dto.CommandRequest;
import com.helios.devicecloud.dto.TelemetryEvent;
import com.helios.devicecloud.service.EventStreamService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TelemetryController {
    private final EventStreamService eventStreamService;

    public TelemetryController(EventStreamService eventStreamService) {
        this.eventStreamService = eventStreamService;
    }

    @PostMapping("/telemetry")
    public Map<String, Object> ingestTelemetry(@Valid @RequestBody TelemetryEvent event) {
        return eventStreamService.ingestTelemetry(event);
    }

    @PostMapping("/commands")
    public Map<String, Object> sendCommand(@Valid @RequestBody CommandRequest request) {
        return eventStreamService.sendCommand(request);
    }

    @GetMapping("/events/recent")
    public List<Map<String, Object>> recentEvents() {
        return eventStreamService.recentEvents();
    }
}

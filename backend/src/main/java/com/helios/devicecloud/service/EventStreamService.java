package com.helios.devicecloud.service;

import com.helios.devicecloud.dto.CommandRequest;
import com.helios.devicecloud.dto.TelemetryEvent;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.List;
import java.util.Map;

@Service
public class EventStreamService {
    private final Deque<Map<String, Object>> recentEvents = new ArrayDeque<>();
    private final DeviceService deviceService;

    public EventStreamService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    public Map<String, Object> ingestTelemetry(TelemetryEvent event) {
        deviceService.markEventReceived(event.deviceId());
        Map<String, Object> storedEvent = Map.of(
                "topic", "helios.telemetry.received",
                "deviceId", event.deviceId(),
                "eventType", event.eventType(),
                "payload", event.payload(),
                "receivedAt", event.receivedAt() == null ? Instant.now() : event.receivedAt()
        );
        addEvent(storedEvent);
        return storedEvent;
    }

    public Map<String, Object> sendCommand(CommandRequest commandRequest) {
        Map<String, Object> commandEvent = Map.of(
                "topic", "helios.command.sent",
                "deviceId", commandRequest.deviceId(),
                "command", commandRequest.command(),
                "parameters", commandRequest.parameters() == null ? Map.of() : commandRequest.parameters(),
                "sentAt", Instant.now()
        );
        addEvent(commandEvent);
        return commandEvent;
    }

    public List<Map<String, Object>> recentEvents() {
        return recentEvents.stream().toList();
    }

    private void addEvent(Map<String, Object> event) {
        recentEvents.addFirst(event);
        while (recentEvents.size() > 20) {
            recentEvents.removeLast();
        }
    }
}

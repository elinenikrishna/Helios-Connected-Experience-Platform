package com.helios.platform.model;import java.time.Instant;public record TelemetryEvent(String deviceId,String eventType,double value,String unit,Instant timestamp){}

package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class Servis2 {
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    public Servis2(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @KafkaListener(topics = "request-topic")
    public void listenAndHash(String message) {
        String hashedString = hashString(message);
        kafkaTemplate.send("result-topic", hashedString);
        System.out.println("Servis2 - Hashlenmiş string gönderildi: " + hashedString);
    }

    private String hashString(String input) {
        return input;
    }
}

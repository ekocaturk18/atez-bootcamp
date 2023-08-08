package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class Servis1 {
    private final KafkaTemplate<String, String> kafkaTemplate;
    private int counter = 0;
    private static final String randomString = "helloWorld";
    @Autowired
    public Servis1(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void produceRandomString() {
        kafkaTemplate.send("request-topic", randomString+counter);
        System.out.println("Servis1 - Random String gönderildi: " + randomString+counter);
        counter += 1;
    }

    private String generateRandomString() {

        return "random-string";
    }
}

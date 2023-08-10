package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.config.KafkaListenerEndpointRegistry;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class BenchmarkServis {
    private double  averageResponseTime = 0 ;
    public double  requestMessageCount = 0 ;

    private double resultedMessageCount = 0 ;
    private double totalResponseTime = 0 ;

    private final Map<String,Long> requestTimestamps = new ConcurrentHashMap<String, Long>();
    private final Map<String,Long> resultTimestamps = new ConcurrentHashMap<String,Long>();

    @Autowired
    private KafkaListenerEndpointRegistry endpointRegistry;

    @KafkaListener(
            id = "listener-2",
            topics = "request-topic",
            groupId = "benchmark-group",
            autoStartup = "false",
            containerFactory = "benchmarkKafkaListenerContainerFactory")
    public void collectRequestTimeStamp(@Payload String message,
                                        org.apache.kafka.clients.consumer.ConsumerRecord<?,?> record) {
        long timestamp = record.timestamp();
        requestTimestamps.put(message,timestamp);
    }


    @KafkaListener(
            id = "listener-1",
            topics = "result-topic",
            groupId = "benchmark-group",
            autoStartup = "false",
            containerFactory = "benchmarkKafkaListenerContainerFactory")
    public void collectResultTimeStamp(@Payload String message,
                                        org.apache.kafka.clients.consumer.ConsumerRecord<?,?> record) {
        Long timestamp = record.timestamp();
        resultTimestamps.put(message,timestamp);
    }


    public void collectAndCompareMessages() {
         requestTimestamps.forEach((k,v)-> {
             if (requestTimestamps.get(k) != null && resultTimestamps.get(k)!= null) {
                 totalResponseTime += resultTimestamps.get(k)-requestTimestamps.get(k);
                 resultedMessageCount += 1;
             }
             requestMessageCount +=1;
         });
         averageResponseTime = totalResponseTime / resultedMessageCount;
         System.out.println("Average Response Time : " +averageResponseTime);
         System.out.println("Total request : " + requestMessageCount);
         System.out.println("Total result : " + resultedMessageCount);
    }
    public void startListener(){
        endpointRegistry.getListenerContainer("listener-2").start();
        endpointRegistry.getListenerContainer("listener-1").start();
    }
}

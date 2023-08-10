package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.DependsOn;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(DemoApplication.class, args);

		Servis1 servis1 = context.getBean(Servis1.class);
		Servis2 servis2 = context.getBean(Servis2.class);
		System.out.println("Enter duration in milis");


		long durationMillis = 10 * 1000;
		long intervalMillis = 1 * 10;
		long startTime = System.currentTimeMillis();

		while (System.currentTimeMillis() - startTime < durationMillis) {
			servis1.produceRandomString();
			try {
				Thread.sleep(intervalMillis);
			} catch (InterruptedException e) {
				Thread.currentThread().interrupt();
				break;
			}
		}
		servis2.stopListener();
		BenchmarkServis benchmarkService = context.getBean(BenchmarkServis.class);
		benchmarkService.startListener();
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
		benchmarkService.collectAndCompareMessages();
	}
}



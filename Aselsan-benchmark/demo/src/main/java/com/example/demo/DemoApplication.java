package com.example.demo;

import com.example.demo.Servis1;
import com.example.demo.Servis2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(DemoApplication.class, args);

		Servis1 servis1 = context.getBean(Servis1.class);


		// 3 dakika boyunca işlemleri her 5 saniyede bir tekrarla
		long durationMillis = 3 * 60 * 1000; // 3 dakika
		long intervalMillis = 5 * 100; // 5 saniye
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

		// Uygulama sonlandığında context'i kapat
		context.close();
	}
}

package com.dlarocco.artworksAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ArtworksApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArtworksApiApplication.class, args);
	}

}

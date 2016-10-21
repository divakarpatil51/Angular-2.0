/**
 *
 */
package com.angular2;

import javax.sql.DataSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author dipatil
 *
 */
@SpringBootApplication
@PropertySource("classpath:application.properties")
@EnableJpaRepositories
public class Application extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(Application.class);
    }
    
    //programmatically creating datasource. No need of properties in application.properties file
    @Bean
    public DataSource getDataSource(){
        return DataSourceBuilder.create()
                .username("postgres")
                .password("root")
                .url("jdbc:postgresql://localhost:5432/Angular2.0")
                .build();
    }
}

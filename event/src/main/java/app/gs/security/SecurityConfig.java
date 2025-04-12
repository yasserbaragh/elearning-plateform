package app.gs.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtAuthenticationFilter jwtFilter; // Assure-toi que tu as bien un filtre JWT

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // à désactiver si tu utilises Postman
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/register", "/auth/login","/api/videos","/api/videos/{id}","/api/follower","/api/follower/{id}","/api/utilisateurs","/api/utilisateurs/{id}","/api/responses","/api/responses/{id}","/api/rates","/api/rates/{id}","/api/quizzes","/api/quizzes/{id}","/api/questions/{id}","/api/profiles/{id}","/api/follower/{id}", "/api/questions").permitAll() // autoriser les routes de login et register
                .anyRequest().authenticated() // toutes les autres routes doivent être authentifiées
            )
            .userDetailsService(userDetailsService)
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class); // Ajouter le filtre JWT avant l'authentification standard

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
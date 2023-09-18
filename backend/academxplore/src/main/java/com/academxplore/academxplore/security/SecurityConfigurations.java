package com.academxplore.academxplore.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.academxplore.academxplore.services.AuthorizationService;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.beans.factory.annotation.Autowired;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
public class SecurityConfigurations {
  
  @Autowired
  private AuthorizationService authorizationService;

  @Autowired
  private JwtAuthenticationFilter jwtAuthenticationFilter;

  @Bean
  PasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
  }

  @Bean
  DaoAuthenticationProvider authProvider(){
    DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
    authProvider.setUserDetailsService(authorizationService);
    authProvider.setPasswordEncoder(passwordEncoder());
    return authProvider;
  }

  @Bean
  AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
    return http.getSharedObject(AuthenticationManagerBuilder.class)
               .authenticationProvider(authProvider())
               .build();
  }

  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
    return httpSecurity
            .cors(withDefaults()).csrf(csrf -> csrf.disable())
            .exceptionHandling(withDefaults())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authorize -> authorize
              .requestMatchers(HttpMethod.POST, PERMIT_ALL).permitAll()
              .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
  }

  private static final String[] PERMIT_ALL = {
    "/auth/login",
    "/usuario/cadastro"
  };

  // private static final String[] PERMIT_ALUNO = {
  //   "/aluno/equipes/**"
  // };

  // private static final String[] PERMIT_AUTENTICATED = {
  //   "/area-interesse/pesquisa",
  //   "/projeto/ativo",
  //   "/projeto/detalhes/**",
  //   "/projeto/equipes/**",
  //   "/projeto/pesquisa",
  //   "/notificacao/usuario/**",
  //   "/notificacao/**",
  //   "/notificacao/**",
  //   "/usuario/**",
  //   "/usuario"
  // };

  // private static final String[] PERMIT_PROFESSOR = {
  //   "/projeto/candidaturas/**",
  //   "/projeto/cadastro",
  //   "/professor/projetos/**",
  //   "/professor/coorientador"
  // };
}

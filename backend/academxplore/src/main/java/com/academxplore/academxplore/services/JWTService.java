package com.academxplore.academxplore.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.models.Usuario;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

@Service
public class JWTService {
  @Value("${SECRET_KEY}")
  private String chavePrivadaJWT;

  public String gerarToken(Authentication authentication) {
    try{

      Usuario usuario = (Usuario) authentication.getPrincipal();
  
      Date dataAtual = new Date();
      int tempoExpiracao = 86400000; // 1 dia em milisegundos
      Date dataExpiracao = new Date(new Date().getTime() + tempoExpiracao);
      Algorithm algorithm = Algorithm.HMAC256(chavePrivadaJWT);
      String token = JWT.create()
                      .withSubject(usuario.getId())
                      .withIssuedAt(dataAtual)
                      .withExpiresAt(dataExpiracao)
                      .sign(algorithm);
      return token;
    }catch(Exception e){
      System.out.println("#########" + e.getMessage() + "#########");
      return e.getMessage();
    }

  }
  public Optional<String> getUserId(String jwt) {
    try {
      DecodedJWT decodedJWT = parse(jwt);
      return Optional.ofNullable(decodedJWT.getSubject());
    } catch (Exception ex) {
      return Optional.empty();
    }
  }
  private DecodedJWT parse(String jwt) {
    Algorithm algorithm = Algorithm.HMAC256(chavePrivadaJWT);
    return JWT.require(algorithm).build().verify(jwt);
  }
}

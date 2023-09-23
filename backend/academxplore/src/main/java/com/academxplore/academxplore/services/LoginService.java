package com.academxplore.academxplore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.LoginResponse;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class LoginService {
  private static final String headerPrefix = "Bearer ";

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Autowired
  private JWTService jwtService;

  public LoginResponse login(String email, String senha) throws Exception{
    try {

      Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, senha));
      SecurityContextHolder.getContext().setAuthentication(authentication);
      Usuario usuario = usuarioRepository.findByEmail(email).get();
      String token = headerPrefix + jwtService.gerarToken(authentication);
      LoginResponse response = new LoginResponse(usuario, token);
      return response;

    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

}

package com.academxplore.academxplore.dto;

import com.academxplore.academxplore.enums.PerfilUsuario;
import com.academxplore.academxplore.models.Usuario;

import lombok.Data;

@Data
public class LoginResponse {
  private String id;
  private PerfilUsuario perfil;
  private String accessToken;

  public LoginResponse(Usuario usuario, String accessToken) {
    this.id = usuario.getId();
    this.perfil = usuario.getPerfil();
    this.accessToken = accessToken;
  }
}

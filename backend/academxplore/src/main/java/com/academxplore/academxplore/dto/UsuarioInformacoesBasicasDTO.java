package com.academxplore.academxplore.dto;

import com.academxplore.academxplore.models.Usuario;

import lombok.Data;

@Data
public class UsuarioInformacoesBasicasDTO {
  private String id;
  private String nome;
  private String foto;


  public UsuarioInformacoesBasicasDTO(Usuario usuario) {
    this.id = usuario.getId();
    this.nome = usuario.getNome();
    this.foto = usuario.getFoto();
  }


  public static UsuarioInformacoesBasicasDTO mapUsuarioInformacoesBasicasDTO(Usuario usuario){
    return new UsuarioInformacoesBasicasDTO(usuario);
  }
}

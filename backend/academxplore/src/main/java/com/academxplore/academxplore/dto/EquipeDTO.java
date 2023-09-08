package com.academxplore.academxplore.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.academxplore.academxplore.models.Equipe;

import lombok.Data;

@Data
public class EquipeDTO {
  
  private String id;
  private String nome;
  private List<UsuarioInformacoesBasicasDTO> alunos;

  public EquipeDTO(Equipe equipe) {
    this.id = equipe.getId();
    this.nome = equipe.getNome();
    this.alunos = equipe.getUsuarios().stream().map(entity -> UsuarioInformacoesBasicasDTO.mapUsuarioInformacoesBasicasDTO(entity)).collect(Collectors.toList());
  }

  public static EquipeDTO mapEquipeDTO(Equipe equipe){
    return new EquipeDTO(equipe);
  }
}

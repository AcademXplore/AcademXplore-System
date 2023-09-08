package com.academxplore.academxplore.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.academxplore.academxplore.models.Projeto;

import lombok.Data;

@Data
public class ProjetoEquipesDTO {
  private List<EquipeDTO> equipes;

  public ProjetoEquipesDTO(Projeto projeto) {
    this.equipes = projeto.getEquipes().stream().map(entity -> EquipeDTO.mapEquipeDTO(entity)).collect(Collectors.toList());
  }
 
}

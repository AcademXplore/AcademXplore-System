package com.academxplore.academxplore.dto;

import com.academxplore.academxplore.models.Equipe;

import lombok.Data;

@Data
public class EquipesUsuario {
  private String id;
  private String nome;
  private ProjetoTimelineDTO projeto;
  
  public EquipesUsuario(Equipe equipe) {
    this.id = equipe.getId();
    this.nome = equipe.getNome();
    this.projeto = ProjetoTimelineDTO.mapProjetoTimeline(equipe.getProjeto());
  }
}

package com.academxplore.academxplore.dto;

import com.academxplore.academxplore.models.AreaInteresse;

import lombok.Data;

@Data
public class AreasInteresseDTO {
  private String id;
  private String nome;
  public AreasInteresseDTO(AreaInteresse areaInteresse) {
    this.id = areaInteresse.getId();
    this.nome = areaInteresse.getNome();
  }
}

package com.academxplore.academxplore.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.models.AreaInteresse;
import com.academxplore.academxplore.models.Projeto;

import lombok.Data;

@Data
public class ProjetoTimelineDTO {
  private String id;
  private String titulo;
  private String banner;
  private Status status;
  private List<AreasInteresseDTO> areasInteresse;

  public ProjetoTimelineDTO(String id, String titulo, String banner, Status status, List<AreaInteresse> areasInteresse) {
    this.id = id;
    this.titulo = titulo;
    this.banner = banner;
    this.status = status;
    this.areasInteresse = areasInteresse.stream().map(entity -> new AreasInteresseDTO(entity)).collect(Collectors.toList());
  }

  public static ProjetoTimelineDTO mapProjetoTimeline(Projeto projeto){
    return new ProjetoTimelineDTO(projeto.getId(), projeto.getTitulo(), projeto.getBanner(), projeto.getStatus(), projeto.getAreasInteresse());
  }
}

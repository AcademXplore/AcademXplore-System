package com.academxplore.academxplore.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "area_interesse")
@JsonIdentityInfo(
  generator = ObjectIdGenerators.PropertyGenerator.class,
  property = "id"
)
public class AreaInteresse {
  
  @Id
  @GeneratedValue(strategy=GenerationType.UUID)
  private String id;
  private String nome;
  @OneToMany(cascade=CascadeType.ALL)
  @JoinTable(
      name = "projeto_areas_interesse",
      joinColumns = {@JoinColumn(name = "areas_interesse_id", referencedColumnName = "id")},
      inverseJoinColumns = {@JoinColumn(name = "projeto_id", referencedColumnName="id")}
  )
  private List<Projeto> projetos;
  public AreaInteresse() {
  }
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public String getNome() {
    return nome;
  }
  public void setNome(String nome) {
    this.nome = nome;
  }
  public List<Projeto> getProjetos() {
    return projetos;
  }
  public void setProjetos(List<Projeto> projetos) {
    this.projetos = projetos;
  }
}

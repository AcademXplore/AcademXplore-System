package com.academxplore.academxplore.models;

import java.util.List;

import com.academxplore.academxplore.enums.Status;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="projetos")
@JsonIdentityInfo(
  generator = ObjectIdGenerators.PropertyGenerator.class,
  property = "id"
)
public class Projeto {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;
    @Column(nullable = false)
    private String titulo;
    private String banner; //aqui seria uma imagem
    @Column(nullable = false)
    private String descricao;
    @Column(nullable = false)
    private String objetivos;
    @Column(nullable = false)
    private String cronograma;
    @Column(nullable = false, name = "recursos_necessarios")
    private String recursosNecessarios;
    private Status status;
    @ManyToOne
    @JoinColumn(name = "professor_id")
    private Usuario professor;
    @ManyToOne
    @JoinColumn(name = "coorientador_id")
    private Usuario coorientador;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "projeto")
    private List<Candidatura> candidaturas;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "projeto")
    private List<Equipe> equipes;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "projeto")
    private List<Notificacao> notificacoes;
    @ManyToMany(mappedBy ="projetos")
    private List<AreaInteresse> areasInteresse;
    public Projeto(){}
    public Projeto(String titulo, String banner, String descricao, String objetivos,
            String cronograma, Status status, String recursosNecessarios) {
        this.titulo = titulo;
        this.banner = banner;
        this.descricao = descricao;
        this.objetivos = objetivos;
        this.cronograma = cronograma;
        this.status = status;
        this.recursosNecessarios = recursosNecessarios;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getBanner() {
        return banner;
    }
    public void setBanner(String banner) {
        this.banner = banner;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public String getObjetivos() {
        return objetivos;
    }
    public void setObjetivos(String objetivos) {
        this.objetivos = objetivos;
    }
    public String getCronograma() {
        return cronograma;
    }
    public void setCronograma(String cronograma) {
        this.cronograma = cronograma;
    }
    public Status getStatus() {
        return status;
    }
    public void setStatus(Status status) {
        this.status = status;
    }
     public Usuario getProfessor() {
        return professor;
    }
    public void setProfessor(Usuario professor) {
        this.professor = professor;
    }
    
    public Usuario getCoorientador() {
        return coorientador;
    }
    public void setCoorientador(Usuario coorientador) {
        this.coorientador = coorientador;
    }
    
     public List<Candidatura> getCandidaturas() {
        return candidaturas;
    }
    public void setCandidaturas(List<Candidatura> candidaturas) {
        this.candidaturas = candidaturas;
    }
    
    public List<Notificacao> getNotificacoes() {
        return notificacoes;
    }
    public void setNotificacoes(List<Notificacao> notificacoes) {
        this.notificacoes = notificacoes;
    }
    
    public List<AreaInteresse> getAreasInteresse() {
        return areasInteresse;
    }
    public void setAreasInteresse(List<AreaInteresse> areasInteresse) {
        this.areasInteresse = areasInteresse;
    }
    
    public List<Equipe> getEquipes() {
        return equipes;
    }
    public void setEquipes(List<Equipe> equipes) {
        this.equipes = equipes;
    }
    public String getRecursosNecessarios() {
        return recursosNecessarios;
    }
    public void setRecursosNecessarios(String recursosNecessarios) {
        this.recursosNecessarios = recursosNecessarios;
    }
}

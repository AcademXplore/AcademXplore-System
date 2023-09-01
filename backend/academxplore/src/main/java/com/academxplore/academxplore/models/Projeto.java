package com.academxplore.academxplore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="projetos")
public class Projeto {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String idProjeto;
    @Column(nullable = false)
    private String titulo;
    private String banner; //aqui seria uma imagem
    @Column(nullable = false)
    private String descricao;
    @Column(nullable = false)
    private String objetivos;
    @Column(nullable = false)
    private String cronograma;
    private String status;

    public Projeto(){}
    public Projeto(String idProjeto, String titulo, String banner, String descricao, String objetivos,
            String cronograma, String status) {
        this.idProjeto = idProjeto;
        this.titulo = titulo;
        this.banner = banner;
        this.descricao = descricao;
        this.objetivos = objetivos;
        this.cronograma = cronograma;
        this.status = status;
    }
    public String getIdProjeto() {
        return idProjeto;
    }
    public void setIdProjeto(String idProjeto) {
        this.idProjeto = idProjeto;
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
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    
}

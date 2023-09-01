package com.academxplore.academxplore.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="notificacoes")
public class Notificacao {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String idNotif;
    @Column(nullable = false)
    private String titulo;
    @Column(nullable = false)
    private String descricao;
    @Column(nullable = false)
    private Date dataCriacao;
    private String tipo;
    @Column(nullable = false)
    private String status;

    public Notificacao(){}

    public Notificacao(String idNotif, String titulo, String descricao, Date dataCriacao, String tipo, String status) {
        this.idNotif = idNotif;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.tipo = tipo;
        this.status = status;
    }
    public String getIdNotif() {
        return idNotif;
    }
    public void setIdNotif(String idNotif) {
        this.idNotif = idNotif;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public Date getDataCriacao() {
        return dataCriacao;
    }
    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}

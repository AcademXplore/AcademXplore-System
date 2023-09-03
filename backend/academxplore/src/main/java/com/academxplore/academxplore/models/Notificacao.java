package com.academxplore.academxplore.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="notificacoes")
public class Notificacao {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;
    @Column(nullable = false)
    private String titulo;
    @Column(nullable = false)
    private String descricao;
    @Column(nullable = false)
    private Date dataCriacao;
    private String tipo;
    @Column(nullable = false)
    private String status;
    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Notificacao(){}

    public Notificacao(String id, String titulo, String descricao, Date dataCriacao, String tipo, String status) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.tipo = tipo;
        this.status = status;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
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
    public Projeto getProjeto() {
        return projeto;
    }

    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }
}

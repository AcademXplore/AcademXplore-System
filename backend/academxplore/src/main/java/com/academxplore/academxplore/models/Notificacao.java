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
import lombok.Data;

import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.enums.TipoNotificacao;

@Entity
@Data
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
    private TipoNotificacao tipo;
    @Column(nullable = false)
    private Status status;
    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "candidatura_id")
    private Candidatura candidatura;

    public Notificacao(){}

    public Notificacao(String titulo, String descricao, Date dataCriacao, TipoNotificacao tipo, Status status, Projeto projeto, Usuario usuario, Candidatura candidatura) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.tipo = tipo;
        this.status = status;
        this.projeto = projeto;
        this.usuario = usuario;
        this.candidatura = candidatura;
    }
}

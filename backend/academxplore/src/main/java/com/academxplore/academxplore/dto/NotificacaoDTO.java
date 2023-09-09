package com.academxplore.academxplore.dto;

import java.util.Date;

import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.enums.TipoNotificacao;
import com.academxplore.academxplore.models.Notificacao;

import lombok.Data;

@Data
public class NotificacaoDTO {
  private String id;
  private String titulo;
  private String descricao;
  private Date dataCriacao;
  private TipoNotificacao tipo;
  private Status status;
  private String projetoId;
  private String projetoTitulo;

  public NotificacaoDTO(Notificacao notificacao) {
    this.id = notificacao.getId();
    this.titulo = notificacao.getTitulo();
    this.descricao = notificacao.getDescricao();
    this.dataCriacao = notificacao.getDataCriacao();
    this.tipo = notificacao.getTipo();
    this.status = notificacao.getStatus();
    this.projetoId = notificacao.getProjeto().getId();
    this.projetoTitulo = notificacao.getProjeto().getTitulo();
  }

}

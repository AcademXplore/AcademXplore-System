package com.academxplore.academxplore.enums;

public enum TipoNotificacao {
  CANDIDATURA(0), ACEITO(1), RECUSA(2), CRIACAO(3), ENCERRAMENTO(4);

  private final int tipo;
  TipoNotificacao(int tipo){
    this.tipo = tipo;
  }
  public int getTipo(){
    return tipo;  
  }
}

package com.academxplore.academxplore.enums;

public enum PerfilUsuario {
  ALUNO(0), PROFESSOR(1);

  private int tipo;

  PerfilUsuario(int tipo){
    this.tipo = tipo;
  }
  public int getTipo(){
    return tipo;  
  }
}

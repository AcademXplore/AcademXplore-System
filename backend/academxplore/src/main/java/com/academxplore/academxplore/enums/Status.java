package com.academxplore.academxplore.enums;

public enum Status {
  Ativo(0),  Inativo(1), Aceito(2), Recusado(3);

  private final int status;
  Status(int status){
    this.status = status;
  }
  public int getStatus(){
    return status;  
  }
}

package com.academxplore.academxplore.dto;

import lombok.Data;

@Data
public class QuantidadeProjetosRequest {
    private int projetosAtivos;
    private int projetosInativos;
    public QuantidadeProjetosRequest() {
        this.projetosAtivos = 0;
        this.projetosInativos = 0;
    }
}

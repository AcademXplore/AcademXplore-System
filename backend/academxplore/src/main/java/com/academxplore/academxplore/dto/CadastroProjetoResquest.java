package com.academxplore.academxplore.dto;

import java.util.List;

public record CadastroProjetoResquest(String banner, String titulo, String descricao, String objetivo, String cronograma, List<String> areasInteresse, String emailCoorientador, String recursosNecessarios, List<String> equipes, String professor) {
  
}

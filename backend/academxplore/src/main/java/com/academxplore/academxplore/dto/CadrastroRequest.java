package com.academxplore.academxplore.dto;

import com.academxplore.academxplore.enums.PerfilUsuario;

public record CadrastroRequest(String nome, String cpf, String email, String instituicao, PerfilUsuario perfil, String matricula, String senha) {

}

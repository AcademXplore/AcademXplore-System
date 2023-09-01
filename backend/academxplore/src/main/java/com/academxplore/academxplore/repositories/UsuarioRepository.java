package com.academxplore.academxplore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.academxplore.academxplore.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>{

}

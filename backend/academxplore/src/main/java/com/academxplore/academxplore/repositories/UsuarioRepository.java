package com.academxplore.academxplore.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.academxplore.academxplore.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>{

  @Query("SELECT u FROM Usuario u WHERE u.email LIKE %?1% AND u.perfil = 1")
  List<Usuario> findByEmail(String email);

}

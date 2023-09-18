package com.academxplore.academxplore.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;

import com.academxplore.academxplore.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>{

  @Query("SELECT u FROM Usuario u WHERE u.email LIKE %?1% AND u.perfil = 1")
  List<Usuario> findByEmailProfessor(String email);

  Optional<Usuario> findByEmail(String email);

  @Query("SELECT u FROM Usuario u WHERE u.email = ?1")
  Optional<UserDetails> findByLogin(String email);

}

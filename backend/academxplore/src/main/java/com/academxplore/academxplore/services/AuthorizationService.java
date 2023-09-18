package com.academxplore.academxplore.services;

import java.util.Optional;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class AuthorizationService implements UserDetailsService{

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<UserDetails> usuario = usuarioRepository.findByLogin(username);
    if (usuario.isPresent()) {
      return usuario.get();
    }

    throw new UsernameNotFoundException("Dados inválidos!");
  }

   public UserDetails loadUserById(String id) {
    Usuario user = getUser(() -> usuarioRepository.findById(id));
    return user;
  }

  private Usuario getUser(Supplier<Optional<Usuario>> supplier) {
      return supplier.get().orElseThrow(() ->
              new UsernameNotFoundException("Usuário não cadastrado")
      );
  }
  
}

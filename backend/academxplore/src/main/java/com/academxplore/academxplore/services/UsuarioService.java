package com.academxplore.academxplore.services;

import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.UsuarioDTO;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  public UsuarioDTO buscarUsuario(String id) throws Exception {
    try {
      Optional<Usuario> usuario = usuarioRepository.findById(id);
      if(!usuario.isPresent())
      {
        throw new Exception("Não possui usuario com o ID indicado!");
      }
      return new UsuarioDTO(usuario.get());
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public void atualizarUsuario(UsuarioDTO usuario) throws Exception {
    try {
      Optional<Usuario> usuarioBase = usuarioRepository.findById(usuario.getId());
       if(!usuarioBase.isPresent())
      {
        throw new Exception("Não possui usuario com o ID indicado!");
      }
      Usuario usuarioAtualizado = usuarioBase.get();
      if (!Objects.equals(usuarioAtualizado.getNome(), usuario.getNome())) {
        usuarioAtualizado.setNome(usuario.getNome());
      }
      if (!Objects.equals(usuarioAtualizado.getCpf(), usuario.getCpf())) {
        usuarioAtualizado.setCpf(usuario.getCpf());
      }
      if (!Objects.equals(usuarioAtualizado.getEmail(), usuario.getEmail())) {
        usuarioAtualizado.setEmail(usuario.getEmail());
      }
      if (!Objects.equals(usuarioAtualizado.getInstituicao(), usuario.getInstituicao())) {
        usuarioAtualizado.setInstituicao(usuario.getInstituicao());
      }
      if (!Objects.equals(usuarioAtualizado.getPerfil(), usuario.getPerfil())) {
        usuarioAtualizado.setPerfil(usuario.getPerfil());
      }
      if (!Objects.equals(usuarioAtualizado.getMatricula(), usuario.getMatricula())) {
        usuarioAtualizado.setMatricula(usuario.getMatricula());
      }
      if (!Objects.equals(usuarioAtualizado.getLattes(), usuario.getLattes())) {
        usuarioAtualizado.setLattes(usuario.getLattes());
      }
      if (!Objects.equals(usuarioAtualizado.getLinkedin(), usuario.getLinkedin())) {
        usuarioAtualizado.setLinkedin(usuario.getLinkedin());
      }
      if (!Objects.equals(usuarioAtualizado.getTelefone(), usuario.getTelefone())) {
        usuarioAtualizado.setTelefone(usuario.getTelefone());
      }
      if (!Objects.equals(usuarioAtualizado.getCurso(), usuario.getCurso())) {
        usuarioAtualizado.setCurso(usuario.getCurso());
      }
      if (!Objects.equals(usuarioAtualizado.getSobreVoce(), usuario.getSobreVoce())) {
        usuarioAtualizado.setSobreVoce(usuario.getSobreVoce());
      }
      if (!Objects.equals(usuarioAtualizado.getFormacao(), usuario.getFormacao())) {
        usuarioAtualizado.setFormacao(usuario.getFormacao());
      }
      if (!Objects.equals(usuarioAtualizado.getDataInicio(), usuario.getDataInicio())) {
        usuarioAtualizado.setDataInicio(usuario.getDataInicio());
      }
      if (!Objects.equals(usuarioAtualizado.getDataFim(), usuario.getDataFim())) {
        usuarioAtualizado.setDataFim(usuario.getDataFim());
      }

      usuarioRepository.save(usuarioAtualizado);

    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

}

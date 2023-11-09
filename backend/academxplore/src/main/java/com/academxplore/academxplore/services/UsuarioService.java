package com.academxplore.academxplore.services;

import java.util.Date;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.CadrastroRequest;
import com.academxplore.academxplore.dto.UsuarioDTO;
import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.enums.TipoNotificacao;
import com.academxplore.academxplore.models.Notificacao;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.NotificacaoRepository;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class UsuarioService {

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Autowired
  private NotificacaoRepository notificacaoRepository;

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
      if (!Objects.equals(usuarioAtualizado.getFoto(), usuario.getFoto())) {
        usuarioAtualizado.setFoto(usuario.getFoto());
      }
      if (!Objects.equals(usuarioAtualizado.getBanner(), usuario.getBanner())) {
        usuarioAtualizado.setBanner(usuario.getBanner());
      }

      usuarioRepository.save(usuarioAtualizado);

    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public void cadastrarUsuario(CadrastroRequest cadastroRequest) throws Exception {
    if(usuarioRepository.findByEmail(cadastroRequest.email()).isPresent()){
      throw new Exception("Usuário já cadastrado!");
    }
    Usuario usuario = new Usuario();
    usuario.setNome(cadastroRequest.nome());
    usuario.setCpf(cadastroRequest.cpf());
    usuario.setEmail(cadastroRequest.email());
    usuario.setInstituicao(cadastroRequest.instituicao());
    usuario.setPerfil(cadastroRequest.perfil());
    usuario.setMatricula(cadastroRequest.matricula());
    usuario.setSenha(passwordEncoder.encode(cadastroRequest.senha()));

    Usuario usuarioCriado = usuarioRepository.save(usuario);

    String titulo = "Bem-vindo ao AcademXplore";
    String descricao = "Seja muito bem-vindo a nossa plataforma de participação de projetos acadêmicos, aproveite a lista de projetos disponivel em nossa tela inicial!!!";
    Date dataCriacao = new Date();
    TipoNotificacao tipoNotificacao = TipoNotificacao.CRIACAO;
    Status statusNotificacao = Status.Ativo;

    Notificacao notificacaoProfessor = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao, statusNotificacao, null, usuarioCriado, null);
    notificacaoRepository.save(notificacaoProfessor);
  }

}

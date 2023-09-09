package com.academxplore.academxplore.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.models.Notificacao;
import com.academxplore.academxplore.repositories.NotificacaoRepository;

import com.academxplore.academxplore.dto.NotificacaoDTO;
import com.academxplore.academxplore.enums.Status;

@Service
public class NotificacaoService {

  @Autowired
  private NotificacaoRepository notificacaoRepository;

  public List<NotificacaoDTO> buscarNotificacaoUsuario(String id) throws Exception {
    try {

      List<Notificacao> notificacoes = notificacaoRepository.findByUsuario(id);

      return notificacoes.stream().map(entity -> new NotificacaoDTO(entity)).collect(Collectors.toList());

    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public NotificacaoDTO buscarNotificacaoPorId(String id) throws Exception {
     try {

      Optional<Notificacao> notificacao = notificacaoRepository.findById(id);
      if(!notificacao.isPresent()){
        throw new Exception("Não possui usuario com o ID indicado!");
      }
      return new NotificacaoDTO(notificacao.get());

    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public void atualizarStatusNotificacao(String id) throws Exception {
    try {
      Optional<Notificacao> notificacaoBase = notificacaoRepository.findById(id);
      if(!notificacaoBase.isPresent()){
        throw new Exception("Não possui usuario com o ID indicado!");
      }
      Notificacao notificacao = notificacaoBase.get();
      if(notificacao.getStatus() == Status.Inativo){
        return;
      }
      notificacao.setStatus(Status.Inativo);

      notificacaoRepository.save(notificacao);

    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

}

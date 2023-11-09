package com.academxplore.academxplore.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.ProjetoTimelineDTO;
import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.enums.TipoNotificacao;
import com.academxplore.academxplore.models.Candidatura;
import com.academxplore.academxplore.models.Equipe;
import com.academxplore.academxplore.models.Notificacao;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.CandidaturaRepository;
import com.academxplore.academxplore.repositories.EquipeRepository;
import com.academxplore.academxplore.repositories.NotificacaoRepository;
import com.academxplore.academxplore.repositories.ProjetoRepository;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class CandidaturaService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private CandidaturaRepository candidaturaRepository;
    @Autowired
    private ProjetoRepository projetoRepository;
    @Autowired 
    private NotificacaoRepository notificacaoRepository;
    @Autowired
    private EquipeRepository equipeRepository;

    public void criarCandidatura(String usuarioId, String projetoId, String equipeId) throws Exception {
        

        try {
            Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
            if (!usuario.isPresent()) {
                throw new Exception("Não possui usuario com o ID indicado!");
            }

            Optional<Projeto> projeto = projetoRepository.findById(projetoId);
            if (!projeto.isPresent()) {
                throw new Exception("Não possui projeto com o ID indicado!");
            }

            Optional<Equipe> equipe = equipeRepository.findById(equipeId);
            if (!equipe.isPresent()) {
                throw new Exception("Não possui equipe com o ID indicado!");
            }

            Candidatura candidatura = new Candidatura(projeto.get(), usuario.get(), equipe.get(), Status.Ativo);

            candidatura = candidaturaRepository.save(candidatura);

            String titulo = "Nova Candidatura";
            String descricao = usuario.get().getNome().split(" ")[0]+ " se candidatou ao projeto \""+ projeto.get().getTitulo() + "\".";
            Date dataCriacao = new Date();
            TipoNotificacao tipoNotificacao = TipoNotificacao.CANDIDATURA;
            Status statusNotificacao = Status.Ativo;

            Notificacao notificacaoProfessor = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao, statusNotificacao, projeto.get(), projeto.get().getProfessor(), candidatura);
            notificacaoRepository.save(notificacaoProfessor);

            descricao = "Você se inscreveu no projeto \"" + projeto.get().getTitulo() + "\" em breve receberá a resposta do professor para sua candidatura.";
            Notificacao notificacaoAluno = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao, statusNotificacao, projeto.get(), usuario.get(), candidatura);
            notificacaoRepository.save(notificacaoAluno);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public void aceitarCandidatura(String id) throws Exception {
        try {
            Optional<Candidatura> candidaturaBase = candidaturaRepository.findById(id);
            if (!candidaturaBase.isPresent()) {
                throw new Exception("Não possui candidaturas com o ID indicado!");
            }
            Candidatura candidaturaAtualizado = candidaturaBase.get();

            String tituloProjeto = candidaturaBase.get().getProjeto().getTitulo();

            candidaturaAtualizado.setMensagem("Parabéns! Você foi aceito no projeto \"" + tituloProjeto + "\".");

            candidaturaAtualizado.setStatus(Status.Aceito);

            candidaturaAtualizado = candidaturaRepository.save(candidaturaAtualizado);

            Equipe equipeAtualizada = candidaturaAtualizado.getEquipe();

            List<Usuario> usuariosEquipe = equipeAtualizada.getUsuarios();

            usuariosEquipe.add(candidaturaAtualizado.getAluno());

            equipeAtualizada.setUsuarios(usuariosEquipe);

            equipeRepository.save(equipeAtualizada);

            String titulo = "Candidatura Aceita";
            String descricao = "Parabéns! Você foi aceito no projeto \"" + tituloProjeto + "\".";
            Date dataCriacao = new Date();
            TipoNotificacao tipoNotificacao = TipoNotificacao.ACEITO;
            Status statusNotificacao = Status.Ativo;

            Notificacao notificacaoAluno = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao, statusNotificacao, candidaturaBase.get().getProjeto(), candidaturaBase.get().getAluno(), candidaturaAtualizado);
            notificacaoRepository.save(notificacaoAluno);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public void recusarCandidatura(String id, String mensagem) throws Exception{
        try {
            Optional<Candidatura> candidaturaBase = candidaturaRepository.findById(id);
            if (!candidaturaBase.isPresent()) {
                throw new Exception("Não possui candidaturas com o ID indicado!");
            }
            Candidatura candidaturaAtualizado = candidaturaBase.get();

            String tituloProjeto = candidaturaBase.get().getProjeto().getTitulo();

            candidaturaAtualizado.setMensagem(mensagem);

            candidaturaAtualizado.setStatus(Status.Recusado);

            candidaturaAtualizado = candidaturaRepository.save(candidaturaAtualizado);

            String titulo = "Candidatura Recusada";
            String descricao = "Infelizmente você não foi aceito no projeto \"" + tituloProjeto + "\". Clique aqui para saber mais.";
            Date dataCriacao = new Date();
            TipoNotificacao tipoNotificacao = TipoNotificacao.RECUSA;
            Status statusNotificacao = Status.Ativo;

            Notificacao notificacaoAluno = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao, statusNotificacao, candidaturaBase.get().getProjeto(), candidaturaBase.get().getAluno(), candidaturaAtualizado);
            notificacaoRepository.save(notificacaoAluno);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public boolean confirmarCandidatura(String usuarioID, String projetoID) throws Exception {
        try {
            List<Candidatura> candidaturaBase = candidaturaRepository.saberSeUsuarioJaSeCandidatouNumProjeto(usuarioID, projetoID);
            if(candidaturaBase.size() == 0){
                return false;
            }
            else{
                return true;
            }
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public List<ProjetoTimelineDTO> buscarCandidaturasDoUsuario(String usuarioId) throws Exception {
      try {
            Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new Exception("Usuário não encontrado com o ID indicado."));
            List<Candidatura> candidaturas = usuario.getCandidaturas();
            List<ProjetoTimelineDTO> projetos = new ArrayList<ProjetoTimelineDTO>();
            for(Candidatura candidatura : candidaturas){
                if(candidatura.getStatus() == Status.Ativo){
                    projetos.add(ProjetoTimelineDTO.mapProjetoTimeline(candidatura.getProjeto()));
                }
            }
            return projetos;

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}

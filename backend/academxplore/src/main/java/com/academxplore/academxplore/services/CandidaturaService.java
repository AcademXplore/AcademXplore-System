package com.academxplore.academxplore.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.academxplore.academxplore.models.Candidatura;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.CandidaturaRepository;
import com.academxplore.academxplore.repositories.ProjetoRepository;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class CandidaturaService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    private CandidaturaRepository candidaturaRepository;
    private ProjetoRepository projetoRepository;

    public void criarCandidatura(String usuarioId, String projetoId) throws Exception {
        Candidatura candidatura = new Candidatura();

        try {
            Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
            if (!usuario.isPresent()) {
                throw new Exception("Não possui usuario com o ID indicado!");
            }

            Optional<Projeto> projeto = projetoRepository.findById(projetoId);

            if (!projeto.isPresent()) {
                throw new Exception("Não possui projeto com o ID indicado!");
            }
            candidatura.setAluno(usuario.get());
            candidatura.setProjeto(projeto.get());

            candidatura = candidaturaRepository.save(candidatura);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}

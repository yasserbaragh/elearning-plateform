package app.gs.services;

import app.gs.entites.utilisateur;
import app.gs.repositories.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public List<utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    public Optional<utilisateur> getUtilisateurById(Long id) {
        return utilisateurRepository.findById(id);
    }

    public utilisateur createUtilisateur(utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    public utilisateur updateUtilisateur(Long id, utilisateur updatedUtilisateur) {
        return utilisateurRepository.findById(id)
            .map(u -> {
                u.setNom(updatedUtilisateur.getNom());
                u.setPrenom(updatedUtilisateur.getPrenom());
                u.setMotDePasse(updatedUtilisateur.getMotDePasse());
                u.setEmail(updatedUtilisateur.getEmail());
                u.setNumTel(updatedUtilisateur.getNumTel());
                return utilisateurRepository.save(u);
            })
            .orElseThrow(() -> new RuntimeException("Utilisateur not found with id " + id));
    }

    public void deleteUtilisateur(Long id) {
        utilisateurRepository.deleteById(id);
    }
}

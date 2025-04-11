package app.gs.repositories;

import app.gs.entites.utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UtilisateurRepository extends JpaRepository<utilisateur, Long> {

    Optional<utilisateur> findByUsername(String username); // ✅ à ajouter
    boolean existsByUsername(String username);              // déjà utilisé dans ton service d’inscription
}

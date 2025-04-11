package app.gs.services;

import app.gs.entites.utilisateur;
import app.gs.repositories.UtilisateurRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private final UtilisateurRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public RegisterService(UtilisateurRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public utilisateur register(utilisateur user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Nom d'utilisateur déjà utilisé !");
        }

        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        return userRepository.save(user);
    }
}


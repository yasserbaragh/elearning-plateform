package app.gs.controlleurs;

import app.gs.entites.utilisateur;
import app.gs.repositories.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String registerUser(@RequestBody utilisateur user) {
        if (utilisateurRepository.existsByUsername(user.getUsername())) {
            return "Nom d'utilisateur déjà pris";
        }

        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        utilisateurRepository.save(user);
        return "Utilisateur enregistré avec succès. Vous pouvez maintenant vous connecter.";
    }
}

package app.gs.controlleurs;

import app.gs.entites.utilisateur;
import app.gs.repositories.UtilisateurRepository;
import app.gs.security.JwtUtil;

import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public String registerUser(@RequestBody utilisateur user) {
        if (utilisateurRepository.existsByUsername(user.getUsername())) {
            return "Nom d'utilisateur déjà pris";
        }
        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        utilisateurRepository.save(user);
        return "Utilisateur enregistré avec succès. Vous pouvez maintenant vous connecter.";
    }
    
    
    @PostMapping("/login")
    public ResponseEntity<utilisateur> login(@RequestBody utilisateur user) {
        Optional<utilisateur> userOpt = utilisateurRepository.findByUsername(user.getUsername());

        if (userOpt.isPresent()) {
            utilisateur foundUser = userOpt.get();
            if (passwordEncoder.matches(user.getMotDePasse(), foundUser.getMotDePasse())) {
                //foundUser.setMotDePasse(null);
                foundUser.setToken(jwtUtil.createToken(foundUser.getUsername()));
                return ResponseEntity.ok(foundUser);
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    


	public AuthController(UtilisateurRepository utilisateurRepository, PasswordEncoder passwordEncoder,
			JwtUtil jwtUtil) {
		super();
		this.utilisateurRepository = utilisateurRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtUtil = jwtUtil;
	}
}
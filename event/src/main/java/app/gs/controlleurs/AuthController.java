package app.gs.controlleurs;

import app.gs.entites.utilisateur;
import app.gs.repositories.UtilisateurRepository;

import jakarta.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    // ======= LOGIN =======
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
    	try {
    		System.out.println("Login request received"); 
    		 Authentication authentication = authenticationManager.authenticate(
    	                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
    	        );

    	        // Set the authentication context for further requests
    	        SecurityContextHolder.getContext().setAuthentication(authentication);

    	        // Get the authenticated user details
    	        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    	        String username = userDetails.getUsername();

    	        // Get the session ID

    	        // Respond with the session ID and username
    	        return "dd" + username + " ";
            
        }  catch (Exception e) {
        	e.printStackTrace();
            Map<String, String> error = new HashMap<>();
            error.put("error", "An unexpected error occurred: " + e.getMessage());
            return "error: " + e.getMessage();
        }
    }

    // ======= REGISTER =======
    @PostMapping("/register")
    public String registerUser(@RequestBody utilisateur user) {
        if (utilisateurRepository.existsByUsername(user.getUsername())) {
            return "Nom d'utilisateur déjà pris";
        }

        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        utilisateurRepository.save(user);
        return "Utilisateur enregistré avec succès. Vous pouvez maintenant vous connecter.";
    }

    // ======= DTOs =======
    static class LoginRequest {
        private String username;
        private String password;

        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }

        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    static class LoginResponse {
        private String username;
        private String sessionId;

        public LoginResponse(String username, String sessionId) {
            this.username = username;
            this.sessionId = sessionId;
        }

        public String getUsername() { return username; }
        public String getSessionId() { return sessionId; }
    }
}

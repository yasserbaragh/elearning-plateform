package app.gs.security;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;

@Component
public class JwtUtil {
 
    private final String SECRET = "dnlLbWNkYVR5YWRhM3ZQRGdZcXVjR3lyU0JNa3VaL0c="; // stocke-le mieux en prod

    // Crée un token
    public String createToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new java.util.Date())
                .setExpiration(new java.util.Date(System.currentTimeMillis() + 86400000)) // 1 jour
                .signWith(SignatureAlgorithm.HS256, SECRET)
                .compact();
    }

    // Extraire le nom d'utilisateur du token
    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    // Extraire les claims (informations) du token
    private Claims extractClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Vérifier la validité du token
    public boolean validateToken(String token, String username) {
        return (username.equals(extractUsername(token)) && !isTokenExpired(token));
    }

    // Vérifier si le token a expiré
    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new java.util.Date());
    }
}

package app.gs.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="utilisateur")
public class utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    private String nom;
    private String prenom;
    private String motDePasse;
    private String username;
    private String email;
    private String numTel;

    // Gamification fields with default initialization
    private int xp = 0;
    private int lvl = 0;
    private String badges = null; // Explicitly null (optional, default behavior)

    public utilisateur(Long idUser, String nom, String prenom, String motDePasse, String username, String email,
                       String numTel, int xp, int lvl, String badges) {
        super();
        this.idUser = idUser;
        this.nom = nom;
        this.prenom = prenom;
        this.motDePasse = motDePasse;
        this.username = username;
        this.email = email;
        this.numTel = numTel;
        this.xp = xp;
        this.lvl = lvl;
        this.badges = badges;
    }

    public utilisateur() {
        super();
        this.xp = 0;
        this.lvl = 0;
        this.badges = null;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumTel() {
        return numTel;
    }

    public void setNumTel(String numTel) {
        this.numTel = numTel;
    }

    public int getXp() {
        return xp;
    }

    public void setXp(int xp) {
        this.xp = xp;
    }

    public int getLvl() {
        return lvl;
    }

    public void setLvl(int lvl) {
        this.lvl = lvl;
    }

    public String getBadges() {
        return badges;
    }

    public void setBadges(String badges) {
        this.badges = badges;
    }
}

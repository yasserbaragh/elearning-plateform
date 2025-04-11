package app.gs.entites;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "video")
public class Video {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
private String descrption ;
private String titre;

public Video(String descrption, String titre) {
	super();
	this.descrption = descrption;
	this.titre = titre;
}
public Video() {
	super();
}
public String getDescrption() {
	return descrption;
}
public void setDescrption(String descrption) {
	this.descrption = descrption;
}
public String getTitre() {
	return titre;
}
public void setTitre(String titre) {
	this.titre = titre;
}

}

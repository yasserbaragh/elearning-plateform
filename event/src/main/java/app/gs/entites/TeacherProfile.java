package app.gs.entites;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "TeacherProfile")
public class TeacherProfile {
	
	private String rating ;
	private String budget ;
	private Double Rip;
	public TeacherProfile(String rating, String budget, Double rip, Long idUser) {
		super();
		this.rating = rating;
		this.budget = budget;
		Rip = rip;
		this.idUser = idUser;
	}
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
	
	public TeacherProfile() {
		super();
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getBudget() {
		return budget;
	}

	public void setBudget(String budget) {
		this.budget = budget;
	}

	public Double getRip() {
		return Rip;
	}

	public void setRip(Double rip) {
		Rip = rip;
	}

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}
	
    

}

package app.gs.entites;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ProfileUser")
public class ProfileUser {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    private int level;
    private long expetation;
	public Long getIdUser() {
		return idUser;
	}
	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public long getExpetation() {
		return expetation;
	}
	public void setExpetation(long expetation) {
		this.expetation = expetation;
	}
	public ProfileUser(Long idUser, int level, long expetation) {
		super();
		this.idUser = idUser;
		this.level = level;
		this.expetation = expetation;
	}
	public ProfileUser() {
		super();
	}
    
}

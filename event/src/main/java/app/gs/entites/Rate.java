package app.gs.entites;


import jakarta.persistence.*;

@Entity
@Table(name = "rates")
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rate;

    private String comment;

    private Long idTeacher;

    private Long idStudent;

    // Constructors
    public Rate() {}

    public Rate(int rate, String comment, Long idTeacher, Long idStudent) {
        this.rate = rate;
        this.comment = comment;
        this.idTeacher = idTeacher;
        this.idStudent = idStudent;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getIdTeacher() {
        return idTeacher;
    }

    public void setIdTeacher(Long idTeacher) {
        this.idTeacher = idTeacher;
    }

    public Long getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(Long idStudent) {
        this.idStudent = idStudent;
    }

	public void setId(Long id2) {
		// TODO Auto-generated method stub
		
	}
}

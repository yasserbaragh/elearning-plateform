package app.gs.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "response")
public class Reponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String response;

    private boolean correct;


    private Long id_question;

    public Reponse() {
        super();
    }

    public Reponse(Long id, Long id_question, String response, boolean correct) {
        super();
        this.id = id;
        this.id_question = id_question;
        this.response = response;
        this.correct = correct;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdQuestion() {
        return id_question;
    }

    public void setIdQuestion(Long id_question) {
        this.id_question = id_question;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

	public void setText(String text) {
		// TODO Auto-generated method stub
		
	}
}


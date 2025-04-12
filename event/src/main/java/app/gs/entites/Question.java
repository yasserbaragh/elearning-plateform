package app.gs.entites;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long idQuizz;

    private String question;

    public Question() {
        super();
    }

    public Question(Long id, Long idQuizz, String question) {
        super();
        this.id = id;
        this.idQuizz = idQuizz;
        this.question = question;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdQuizz() {
        return idQuizz;
    }

    public void setIdQuizz(Long id_quizz) {
        this.idQuizz = id_quizz;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}


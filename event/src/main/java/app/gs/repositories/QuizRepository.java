package app.gs.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import app.gs.entites.Question;
import app.gs.entites.Quizz;

public interface QuizRepository extends JpaRepository<Quizz, Long>{

}

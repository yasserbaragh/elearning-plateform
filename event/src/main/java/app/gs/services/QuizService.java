package app.gs.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import app.gs.entites.Quizz;
import app.gs.repositories.QuizRepository;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public Quizz saveQuiz(Quizz quiz) {
        return quizRepository.save(quiz);
    }

    public List<Quizz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Optional<Quizz> getQuizzById(Long id) {
        return quizRepository.findById(id);
    }

    public boolean deleteQuizz(Long id) {
        if (quizRepository.existsById(id)) {
            quizRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

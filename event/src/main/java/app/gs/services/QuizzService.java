package app.gs.services;

import app.gs.entites.Quizz;
import app.gs.repositories.QuizzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizzService {

    @Autowired
    private QuizzRepository quizzRepository;
    
    public QuizzService(QuizzRepository quizzRepository) {
    	this.quizzRepository=quizzRepository;
    }

    public List<Quizz> getAllQuizzes() {
        return quizzRepository.findAll();
    }

    public Optional<Quizz> getQuizzById(Long id) {
        return quizzRepository.findById(id);
    }

    public Quizz createQuizz(Quizz quizz) {
        return quizzRepository.save(quizz);
    }

    public Quizz updateQuizz(Long id, Quizz quizz) {
        if (quizzRepository.existsById(id)) {
            quizz.setId(id);
            return quizzRepository.save(quizz);
        }
        return null; // Or throw exception
    }

    public boolean deleteQuizz(Long id) {
        if (quizzRepository.existsById(id)) {
            quizzRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

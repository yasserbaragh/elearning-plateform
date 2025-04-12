package app.gs.controlleurs;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import app.gs.entites.Quizz;
import app.gs.services.QuizService;

@RestController
@RequestMapping("/api/quizzes")
public class QuizzController {

    private final QuizService quizzService;

    public QuizzController(QuizService quizzService) {
        this.quizzService = quizzService;
    }

    @PostMapping
    public ResponseEntity<Quizz> addQuizz(@RequestBody Quizz quizz) {
        Quizz saved = quizzService.saveQuiz(quizz);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<Quizz>> getAllQuizzes() {
        return ResponseEntity.ok(quizzService.getAllQuizzes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quizz> getQuizzById(@PathVariable Long id) {
        Optional<Quizz> quiz = quizzService.getQuizzById(id);
        return quiz.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuizz(@PathVariable Long id) {
        boolean deleted = quizzService.deleteQuizz(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

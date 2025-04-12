package app.gs.controlleurs;

import app.gs.entites.Quizz;
import app.gs.services.QuizzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/quizz")
public class QuizzController {

    @Autowired
    private QuizzService quizzService;

    @GetMapping
    public List<Quizz> getAllQuizzes() {
        return quizzService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quizz> getQuizzById(@PathVariable Long id) {
        Optional<Quizz> quizz = quizzService.getQuizzById(id);
        return quizz.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Quizz> createQuizz(@RequestBody Quizz quizz) {
        Quizz createdQuizz = quizzService.createQuizz(quizz);
        return ResponseEntity.ok(createdQuizz);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Quizz> updateQuizz(@PathVariable Long id, @RequestBody Quizz quizz) {
        Quizz updatedQuizz = quizzService.updateQuizz(id, quizz);
        return updatedQuizz != null ? ResponseEntity.ok(updatedQuizz) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuizz(@PathVariable Long id) {
        return quizzService.deleteQuizz(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}

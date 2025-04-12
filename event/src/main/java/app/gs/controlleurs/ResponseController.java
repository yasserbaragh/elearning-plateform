package app.gs.controlleurs;

import app.gs.entites.Reponse;
import app.gs.services.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/responses")
public class ResponseController {

    @Autowired
    private ResponseService reponseService;

    @GetMapping
    public List<Reponse> getAllResponses() {
        return reponseService.getAllResponses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reponse> getResponseById(@PathVariable Long id) {
        Optional<Reponse> response = reponseService.getResponseById(id);
        return response.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Reponse> createResponse(@RequestBody Reponse response) {
        Reponse createdResponse = reponseService.createResponse(response);
        return ResponseEntity.ok(createdResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reponse> updateResponse(@PathVariable Long id, @RequestBody Reponse response) {
        Reponse updatedResponse = reponseService.updateResponse(id, response);
        return updatedResponse != null ? ResponseEntity.ok(updatedResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResponse(@PathVariable Long id) {
        return reponseService.deleteResponse(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}

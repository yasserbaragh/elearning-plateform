package app.gs.controlleurs;

import app.gs.entites.Rate;
import app.gs.services.RateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rates")
public class RateController {

    @Autowired
    private RateService rateService;

    @GetMapping
    public List<Rate> getAllRates() {
        return rateService.getAllRates();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rate> getRateById(@PathVariable Long id) {
        Optional<Rate> rate = rateService.getRateById(id);
        return rate.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Rate> createRate(@RequestBody Rate rate) {
        Rate created = rateService.createRate(rate);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rate> updateRate(@PathVariable Long id, @RequestBody Rate rate) {
        Rate updated = rateService.updateRate(id, rate);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRate(@PathVariable Long id) {
        return rateService.deleteRate(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}

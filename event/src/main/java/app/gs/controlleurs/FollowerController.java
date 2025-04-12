package app.gs.controlleurs;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import app.gs.entites.Follower;
import app.gs.services.FollowerService;

@RestController
@RequestMapping("/api/followers")
public class FollowerController {

    private final FollowerService followerService;

    public FollowerController(FollowerService followerService) {
        this.followerService = followerService;
    }

    @PostMapping
    public ResponseEntity<Follower> addFollower(@RequestBody Follower follower) {
        return ResponseEntity.ok(followerService.saveFollower(follower));
    }

    @GetMapping
    public ResponseEntity<List<Follower>> getAllFollowers() {
        return ResponseEntity.ok(followerService.getAllFollowers());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFollower(@PathVariable Long id) {
        boolean deleted = followerService.deleteFollower(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}


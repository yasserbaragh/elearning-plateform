package app.gs.controlleurs;

import app.gs.entites.Video;
import app.gs.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/videos")
public class VideoController {

    @Autowired
    private VideoService videoService;

    // Récupérer toutes les vidéos
    @GetMapping
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }

    // Récupérer une vidéo par son ID
    @GetMapping("/{id}")
    public Optional<Video> getVideoById(@PathVariable Long id) {
        return videoService.getVideoById(id);
    }

    // Créer une nouvelle vidéo
    @PostMapping
    public Video createVideo(@RequestBody Video video) {
        return videoService.createVideo(video);
    }

    // Mettre à jour une vidéo existante
    @PutMapping("/{id}")
    public Video updateVideo(@PathVariable Long id, @RequestBody Video video) {
        return videoService.updateVideo(id, video);
    }

    // Supprimer une vidéo par son ID
    @DeleteMapping("/{id}")
    public void deleteVideo(@PathVariable Long id) {
        videoService.deleteVideo(id);
    }
}


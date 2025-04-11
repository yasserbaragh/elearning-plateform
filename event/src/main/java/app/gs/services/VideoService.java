package app.gs.services;

import app.gs.entites.Video;
import app.gs.repositories.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    // Méthode pour récupérer toutes les vidéos
    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    // Méthode pour récupérer une vidéo par son ID
    public Optional<Video> getVideoById(Long id) {
        return videoRepository.findById(id);
    }

    // Méthode pour créer une nouvelle vidéo
    public Video createVideo(Video video) {
        return videoRepository.save(video);
    }

    // Méthode pour mettre à jour une vidéo existante
    public Video updateVideo(Long id, Video videoDetails) {
        return videoRepository.findById(id)
            .map(video -> {
                video.setDescrption(videoDetails.getDescrption());
                video.setTitre(videoDetails.getTitre());
                return videoRepository.save(video);
            })
            .orElseThrow(() -> new RuntimeException("Video not found with id " + id));
    }

    // Méthode pour supprimer une vidéo par son ID
    public void deleteVideo(Long id) {
        videoRepository.deleteById(id);
    }
}


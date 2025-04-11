package app.gs.repositories;

import app.gs.entites.Video;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<Video, Long> {
    // Tu peux ajouter des méthodes personnalisées ici si nécessaire
}


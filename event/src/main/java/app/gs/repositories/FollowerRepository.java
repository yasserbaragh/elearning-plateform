package app.gs.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import app.gs.entites.Follower;

public interface FollowerRepository extends JpaRepository<Follower, Long> {
    // You can add custom queries here if needed
}

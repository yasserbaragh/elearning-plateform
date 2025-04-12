package app.gs.services;

import java.util.List;

import org.springframework.stereotype.Service;
import app.gs.entites.Follower;
import app.gs.repositories.FollowerRepository;

@Service
public class FollowerService {

    private final FollowerRepository followerRepository;

    public FollowerService(FollowerRepository followerRepository) {
        this.followerRepository = followerRepository;
    }

    public Follower saveFollower(Follower follower) {
        return followerRepository.save(follower);
    }

    public List<Follower> getAllFollowers() {
        return followerRepository.findAll();
    }

    public boolean deleteFollower(Long id) {
        if (followerRepository.existsById(id)) {
            followerRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

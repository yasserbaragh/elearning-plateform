package app.gs.services;

import app.gs.entites.ProfileUser;
import app.gs.repositories.ProfileUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileUserService {

    @Autowired
    private ProfileUserRepository profileUserRepository;

    public List<ProfileUser> getAllProfiles() {
        return profileUserRepository.findAll();
    }

    public Optional<ProfileUser> getProfileById(Long id) {
        return profileUserRepository.findById(id);
    }

    public ProfileUser createProfile(ProfileUser profileUser) {
        return profileUserRepository.save(profileUser);
    }

    public ProfileUser updateProfile(Long id, ProfileUser updatedProfile) {
        return profileUserRepository.findById(id)
            .map(profile -> {
                profile.setLevel(updatedProfile.getLevel());
                profile.setExpetation(updatedProfile.getExpetation());
                return profileUserRepository.save(profile);
            })
            .orElseThrow(() -> new RuntimeException("ProfileUser not found with id " + id));
    }

    public void deleteProfile(Long id) {
        profileUserRepository.deleteById(id);
    }
}

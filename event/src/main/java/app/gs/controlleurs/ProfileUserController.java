package app.gs.controlleurs;

import app.gs.entites.ProfileUser;
import app.gs.services.ProfileUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/profiles")
public class ProfileUserController {

    @Autowired
    private ProfileUserService profileUserService;

    @GetMapping
    public List<ProfileUser> getAllProfiles() {
        return profileUserService.getAllProfiles();
    }

    @GetMapping("/{id}")
    public Optional<ProfileUser> getProfileById(@PathVariable Long id) {
        return profileUserService.getProfileById(id);
    }

    @PostMapping
    public ProfileUser createProfile(@RequestBody ProfileUser profileUser) {
        return profileUserService.createProfile(profileUser);
    }

    @PutMapping("/{id}")
    public ProfileUser updateProfile(@PathVariable Long id, @RequestBody ProfileUser profileUser) {
        return profileUserService.updateProfile(id, profileUser);
    }

    @DeleteMapping("/{id}")
    public void deleteProfile(@PathVariable Long id) {
        profileUserService.deleteProfile(id);
    }
}

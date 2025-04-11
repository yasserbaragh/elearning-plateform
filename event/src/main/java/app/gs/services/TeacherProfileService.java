/*package app.gs.services;

import app.gs.entites.TeacherProfile;
import app.gs.repositories.TeacherProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherProfileService {

    @Autowired
    private TeacherProfileRepository teacherProfileRepository;

    public List<TeacherProfile> getAllTeacherProfiles() {
        return teacherProfileRepository.findAll();
    }

    public Optional<TeacherProfile> getTeacherProfileById(Long id) {
        return teacherProfileRepository.findById(id);
    }

    public TeacherProfile createTeacherProfile(TeacherProfile teacherProfile) {
        return teacherProfileRepository.save(teacherProfile);
    }

    public TeacherProfile updateTeacherProfile(Long id, TeacherProfile updatedProfile) {
        return teacherProfileRepository.findById(id)
            .map(profile -> {
                profile.setRating(updatedProfile.getRating());
                profile.setBudget(updatedProfile.getBudget());
                return teacherProfileRepository.save(profile);
            })
            .orElseThrow(() -> new RuntimeException("TeacherProfile not found with id " + id));
    }

    public void deleteTeacherProfile(Long id) {
        teacherProfileRepository.deleteById(id);
    }
}
*/
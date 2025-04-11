/*package app.gs.controlleurs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import app.gs.entites.TeacherProfile;
import app.gs.services.TeacherProfileService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teacher-profiles")
public class TeacherProfileController {

    @Autowired
    private TeacherProfileService teacherProfileService;

    @GetMapping
    public List<TeacherProfile> getAllTeacherProfiles() {
        return teacherProfileService.getAllTeacherProfiles(); // ✅ Utilisation correcte de l’instance
    }

    @GetMapping("/{id}")
    public Optional<TeacherProfile> getTeacherProfileById(@PathVariable Long id) {
        return teacherProfileService.getTeacherProfileById(id);
    }

    @PostMapping
    public TeacherProfile createTeacherProfile(@RequestBody TeacherProfile teacherProfile) {
        return teacherProfileService.createTeacherProfile(teacherProfile);
    }

    @PutMapping("/{id}")
    public TeacherProfile updateTeacherProfile(@PathVariable Long id, @RequestBody TeacherProfile teacherProfile) {
        return teacherProfileService.updateTeacherProfile(id, teacherProfile);
    }

    @DeleteMapping("/{id}")
    public void deleteTeacherProfile(@PathVariable Long id) {
        teacherProfileService.deleteTeacherProfile(id);
    }
}*/

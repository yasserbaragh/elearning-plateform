package app.gs.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import app.gs.entites.TeacherProfile;

public interface TeacherProfileRepository extends JpaRepository<TeacherProfile, Long> {
}


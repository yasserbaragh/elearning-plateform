package app.gs.repositories;

	import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
	import app.gs.entites.ProfileUser;

	public interface ProfileUserRepository extends JpaRepository<ProfileUser, Long> {
		  
	}



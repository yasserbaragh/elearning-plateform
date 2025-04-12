package app.gs.services;

import app.gs.entites.Reponse;
import app.gs.repositories.ReponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResponseService {

    @Autowired
    private ReponseRepository reponseRepository;

    public List<Reponse> getAllResponses() {
        return reponseRepository.findAll();
    }

    public Optional<Reponse> getResponseById(Long id) {
        return reponseRepository.findById(id);
    }

    public Reponse createResponse(Reponse response) {
        return reponseRepository.save(response);
    }

    public Reponse updateResponse(Long id, Reponse response) {
        if (reponseRepository.existsById(id)) {
            response.setId(id);
            return reponseRepository.save(response);
        }
        return null;
    }

    public boolean deleteResponse(Long id) {
        if (reponseRepository.existsById(id)) {
            reponseRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

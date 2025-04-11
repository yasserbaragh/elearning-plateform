package app.gs.services;

import app.gs.entites.Rate;
import app.gs.repositories.RateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RateService {

    @Autowired
    private RateRepository rateRepository;

    public List<Rate> getAllRates() {
        return rateRepository.findAll();
    }

    public Optional<Rate> getRateById(Long id) {
        return rateRepository.findById(id);
    }

    public Rate createRate(Rate rate) {
        return rateRepository.save(rate);
    }

    public Rate updateRate(Long id, Rate rate) {
        if (rateRepository.existsById(id)) {
            rate.setId(id);
            return rateRepository.save(rate);
        }
        return null;
    }

    public boolean deleteRate(Long id) {
        if (rateRepository.existsById(id)) {
            rateRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

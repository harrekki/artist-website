package com.dlarocco.artworksAPI.service;

import com.dlarocco.artworksAPI.repository.ArtworkRepository;
import com.dlarocco.artworksAPI.repository.entity.Artwork;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArtworkServiceMySql implements ArtworkService {
    private final ArtworkRepository artworkRepository;

    public ArtworkServiceMySql(ArtworkRepository artworkRepository) {
        this.artworkRepository = artworkRepository;
    }

    @Override
    public Artwork save(Artwork artwork) {
        return artworkRepository.save(artwork);
    }

    @Override
    public void delete(int artworkId) {
        artworkRepository.deleteById(artworkId);
    }

    @Override
    public List<Artwork> all() {
        return new ArrayList<>(artworkRepository.findAll());
    }

    @Override
    public Optional<Artwork> findById(int artworkId) {
        return artworkRepository.findById(artworkId);
    }
}

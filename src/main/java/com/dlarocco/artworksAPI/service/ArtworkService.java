package com.dlarocco.artworksAPI.service;

import com.dlarocco.artworksAPI.repository.entity.Artwork;
import java.util.List;
import java.util.Optional;

public interface ArtworkService {
    Artwork save(Artwork artwork);
    void delete(int artworkId);
    List<Artwork> all();
    Optional<Artwork> findById(int artworkId);
}

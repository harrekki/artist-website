package com.dlarocco.artworksAPI.controller;

import com.dlarocco.artworksAPI.repository.ArtworkRepository;
import com.dlarocco.artworksAPI.repository.entity.Artwork;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/artwork")
public class ArtworkController {
    final ArtworkRepository artworkRepository;

    public ArtworkController(ArtworkRepository artworkRepository) {
        this.artworkRepository = artworkRepository;
    }

    @GetMapping("/all")
    public Iterable<Artwork> getArtworks() {
        return artworkRepository.findAll();
    }

    //TODO GetMapping method for single item

    //TODO PostMapping method

    //TODO PutMapping method

    //TODO DeleteMapping method
}

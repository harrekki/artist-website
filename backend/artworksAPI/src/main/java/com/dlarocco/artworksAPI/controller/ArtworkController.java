package com.dlarocco.artworksAPI.controller;

import com.dlarocco.artworksAPI.controller.dto.ArtworkDto;
import com.dlarocco.artworksAPI.repository.entity.Artwork;
import com.dlarocco.artworksAPI.service.ArtworkServiceMySql;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/artwork")
public class ArtworkController {
    final private ArtworkServiceMySql artworkServiceMySql;

    public ArtworkController(ArtworkServiceMySql artworkServiceMySql) {
        this.artworkServiceMySql = artworkServiceMySql;
    }

    @GetMapping("/all")
    public List<Artwork> getArtworks() {return artworkServiceMySql.all();}

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Artwork> findArtworkById(@PathVariable Integer id) { return artworkServiceMySql.findById(id);}

    @CrossOrigin
    @PostMapping
    public Artwork save(@RequestBody ArtworkDto artworkDto) {
        return artworkServiceMySql.save(new Artwork(artworkDto));
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public Artwork update(@RequestBody ArtworkDto artworkDto, @PathVariable Integer id) {
        return artworkServiceMySql.findById(id)
                .map(newArtwork -> {
                    newArtwork.setTitle(artworkDto.getTitle());
                    newArtwork.setImageUrl(artworkDto.getImageUrl());
                    newArtwork.setSeries(artworkDto.getSeries());
                    newArtwork.setFormat(artworkDto.getFormat());
                    newArtwork.setMedia(artworkDto.getMedia());
                    newArtwork.setWidth(artworkDto.getWidth());
                    newArtwork.setHeight(artworkDto.getHeight());
                    newArtwork.setDescription(artworkDto.getDescription());
                    return artworkServiceMySql.save(newArtwork);
                }).orElseGet(() -> artworkServiceMySql.save(new Artwork(artworkDto)));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) { artworkServiceMySql.delete(id); }

}

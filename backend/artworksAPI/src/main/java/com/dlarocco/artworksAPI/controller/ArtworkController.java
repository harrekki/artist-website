package com.dlarocco.artworksAPI.controller;

import com.dlarocco.artworksAPI.controller.dto.ArtworkDto;
import com.dlarocco.artworksAPI.repository.entity.Artwork;
import com.dlarocco.artworksAPI.service.ArtworkServiceMySql;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/artwork")
public class ArtworkController {
    final private ArtworkServiceMySql artworkServiceMySql;

    public ArtworkController(ArtworkServiceMySql artworkServiceMySql) {
        this.artworkServiceMySql = artworkServiceMySql;
    }

    @GetMapping("/all")
    public List<Artwork> getArtworks() {return artworkServiceMySql.all();}

    @GetMapping("/{id}")
    public Optional<Artwork> findArtworkById(@PathVariable Integer id) { return artworkServiceMySql.findById(id);}

    //TODO PostMapping method
    @PostMapping
    public Artwork save(@RequestBody ArtworkDto artworkDto, @PathVariable Integer id) {
        return artworkServiceMySql.save(new Artwork(artworkDto));
    }

    @PutMapping("/{id}")
    public Artwork update(@RequestBody ArtworkDto artworkDto, @PathVariable Integer id) {
        //TODO PutMapping method
        return null;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) { artworkServiceMySql.delete(id); }


}

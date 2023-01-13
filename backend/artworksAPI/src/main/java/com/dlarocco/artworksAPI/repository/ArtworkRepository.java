package com.dlarocco.artworksAPI.repository;

import com.dlarocco.artworksAPI.repository.entity.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ArtworkRepository extends JpaRepository<Artwork, Integer> {
}

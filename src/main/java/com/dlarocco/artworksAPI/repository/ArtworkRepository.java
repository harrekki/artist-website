package com.dlarocco.artworksAPI.repository;

import com.dlarocco.artworksAPI.repository.entity.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtworkRepository extends JpaRepository<Artwork, Integer> {
}

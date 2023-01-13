package com.dlarocco.artworksAPI.repository.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Artwork {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private String imageUrl;
    private String series;
    private String format;
    private String media;
    private Integer width;
    private Integer height;
    private Double price;
    private String description;

    // Constructors -----------------------------------------------------

    public Artwork() {
    }

    public Artwork(String title, String imageUrl, String series, String format, String media, Integer width, Integer height, Double price, String description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.series = series;
        this.format = format;
        this.media = media;
        this.width = width;
        this.height = height;
        this.price = price;
        this.description = description;
    }

    // Getters and Setters --------------------------------------------------

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Other Methods

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Artwork artwork = (Artwork) o;
        return Objects.equals(id, artwork.id) && Objects.equals(title, artwork.title) && Objects.equals(imageUrl, artwork.imageUrl) && Objects.equals(series, artwork.series) && Objects.equals(format, artwork.format) && Objects.equals(media, artwork.media) && Objects.equals(width, artwork.width) && Objects.equals(height, artwork.height) && Objects.equals(price, artwork.price) && Objects.equals(description, artwork.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, imageUrl, series, format, media, width, height, price, description);
    }

    @Override
    public String toString() {
        return "Artwork{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", series='" + series + '\'' +
                ", format='" + format + '\'' +
                ", media='" + media + '\'' +
                ", width=" + width +
                ", height=" + height +
                ", price=" + price +
                ", description='" + description + '\'' +
                '}';
    }
}

package com.dlarocco.artworksAPI.controller.dto;

public class ArtworkDto {
    private String title;
    private String imageUrl;
    private String series;
    private String format;
    private String media;
    private Integer width;
    private Integer height;
    private Double price;
    private String description;

    public ArtworkDto(String title, String imageUrl, String series, String format, String media, Integer width, Integer height, Double price, String description) {
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
}

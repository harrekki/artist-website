class ArtworkController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addArtwork(title, imageUrl, series, format, media, width, height, price, description) {
        const artwork = {
            id: this.currentId++,
            title: title,
            imageUrl: imageUrl,
            series: series,
            format: format,
            media: media,
            width: width,
            height: height,
            price: price,
            description: description
        };
        
        this.items.push(artwork);
    }
    
}

let artworkController = new ArtworkController();

artworkController.addArtwork('Rosette #1', '/images/rosette1.jpg', 'Rosettes', 'canvas', 
    ['acrylic', 'collage'], 24, 48, 500, 
    'This is a an incredibly pretentious description of the piece being displayed that goes on way longer than it should.');

artworkController.addArtwork('Messages in Water #1', '/images/messageWater1.jpg', 'Messages in Water', 'canvas', 
    'acrylic', 24, 48, 500, 
    'This is a another incredibly pretentious description of the piece being displayed that goes on way longer than it should.');
    
console.log(artworkController.items);
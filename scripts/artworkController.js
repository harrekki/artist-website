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
    
   loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if(storageItems) {
                const items = JSON.parse(storageItems)
                for(let i = 0; i < items.length; i++) {
                    this.items.push(items[i]);
                }
        }
    }
}

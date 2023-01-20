class ArtworkController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    async addArtwork(title, imageUrl, series, format, media, width, height, price, description) {
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
        localStorage.setItem("items", JSON.stringify(this.items));
        let artworkData = await this.save({title, imageUrl, series, format, media, width, height, price, description});
        return artworkData;
    }
    
    save({title, imageUrl, series, format, media, width, height, price, description}) {
        const data = {title, imageUrl, series, format, media, width, height, price, description};

        let result = fetch('http://localhost:8080/api/artwork', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if(response.ok)
                return response.json()
            else    
                return "Request failed"
        })
        .catch(error => {
            console.error('Error: ', error);
        });
        return result;
    }

    update(id, {title, imageUrl, series, format, media, width, height, price, description}) {
        const data = {title, imageUrl, series, format, media, width, height, price, description};
        let result = fetch(`http://localhost:8080/api/artwork/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if(response.ok)
                return response.json();
            else
                return "Resource not available";
        })
        .catch(error => {
            console.error('Error: ', error);
        });

        return result;
    }

    delete(id) {
        let result = fetch(`http://localhost:8080/api/artwork/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if(response.status == 500)
                return 'Item not found';
            else {
                console.log("Item deleted.")
                return ''
            }
        })
        .catch(error => console.log('Error: ', error));

        return result;
    }

    findById(id) {
        let result = fetch(`http://localhost:8080/api/artwork/${id}`)
        .then(response => { 
            if(response.ok)
                return response.json() 
            else 
                return "Item not found"
        })
        .catch(error => {
            console.error('Error: ', error);
        });
        
        return result;
        
    }

    findAll() {
        let result = fetch(`http://localhost:8080/api/artwork/all`)
        .then(response => {
            if(response.ok)
                return response.json();
            else 
                return "Resource not available"
        })
        .catch(error => {
            console.log(error);
        });

        return result;
    }
}

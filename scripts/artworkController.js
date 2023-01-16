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
        localStorage.setItem("items", JSON.stringify(this.items));
        this.save({title, imageUrl, series, format, media, width, height, price, description});
    }
    
    save({title, imageUrl, series, format, media, width, height, price, description}) {
        const data = {title, imageUrl, series, format, media, width, height, price, description};

        fetch('http://localhost:8080/api/artwork', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(jsonResponse => {
            console.log('Success: ', jsonResponse);
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    }

    update(id, {title, imageUrl, series, format, media, width, height, price, description}) {
        //TODO implement
        const data = {title, imageUrl, series, format, media, width, height, price, description};
        fetch(`http://localhost:8080/api/artwork/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(jsonResponse => {
            console.log('Success: ', jsonResponse);
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    }

    delete(id) {
        //TODO implement
        fetch(`http://localhost:8080/api/artwork/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(jsonResponse => {
            console.log('Success: ', jsonResponse);
        })
        .catch(error => {
            console.error('Error: ', error);
        });

    }

    findById(id) {
        let result = fetch(`http://localhost:8080/api/artwork/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log('Success: ', data);
            return data;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
        return result;
    }
}

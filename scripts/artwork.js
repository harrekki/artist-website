const artworkController = new ArtworkController();

updateArtworkPage();

async function updateArtworkPage() {
    const artworkArr = await artworkController.findAll();
    console.log(artworkArr);

    artworkArr.forEach(element => {
        addArtworkCard(element);
    });
}

function addArtworkCard(artwork) {
    
    const newCard = '<div class="col">\n' +
    '   <div class="card shadow-sm">\n' +
    '       <img src="' + artwork.imageUrl + '" alt="" class="card-img-top img-thumbnail">\n\n' +
    '       <div class="card-body">\n' +
    '           <h4 class="card-title" id="card-title">' + artwork.title + '</h4>\n' +
    '           <p class="card-subtitle mb-2 text-muted"><span id="card-media">' + artwork.media  + '</span> on <span id="card-format">' + artwork.format +'</span></p>\n' +
    '           <p class="card-text description" id="card-description" >' + artwork.description + '</p>\n' +
    '           <p class="card-text series">From the <span id="card-series">' + artwork.series + '</span> series.</p>\n' +
    '           <div class="d-flex justify-content-between align-items-center">\n' +
    '               <div class="btn-group">\n' +
    '                   <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#artworkModal" data-title="' + artwork.title + '" data-source="' + artwork.imageUrl + '">View</button>\n' +
    '               </div>\n' +
    '               <small class="text-muted" id="card-size"><span id="card-width">' + artwork.width + '</span> x <span id="card-height">' + artwork.height + '</span> inches</small>\n' +
    '               <small class="text-muted">$<span id="card-price">' + artwork.price + '</span></small>\n' +
    '           </div>\n' +
    '       </div>\n\n' +
    '   </div>\n' +
    '</div>\n';

    const itemContainer = document.getElementById('list-items');
    itemContainer.innerHTML += newCard;
}

// *This code uses localStorage to simulate API calls
// **Leaving in place to help JFS learners during Sprint 2

// function loadStorageSampleData() {
//     if(!localStorage.getItem("items")) {
//         const sampleArtworks = [
//             {
//                 'title': 'Collage Etude #7',
//                 'imageUrl': '/images/art-study7.jpg',
//                 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//                 'series': 'Etudes',
//                 'media': ['collage', 'ink', 'acrylic'],
//                 'format': ['framed', 'paper'],
//                 'width': 24,
//                 'height': 48,
//                 'price': 200.00
//             },
//             {
//                 'title': 'Messages #1',
//                 'imageUrl': '/images/messages1.jpg',
//                 'description': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//                 'series': 'Messages in Water',
//                 'media': ['acrylic'],
//                 'format': ['unframed', 'canvas'],
//                 'width': 48,
//                 'height': 36,
//                 'price': 1000.00
//             } 
//         ];

//         localStorage.setItem("items", JSON.stringify(sampleArtworks));
//     }
// }

// function loadItemsFromItemController() {
//     for(let i = 0; i < artworkController.items.length; i++) {
//         const artwork = artworkController.items[i];
//         addArtworkCard(artwork);
//     }
// }


// loadStorageSampleData();
// artworkController.loadItemsFromLocalStorage();
// console.log(artworkController.items);
// loadItemsFromItemController();
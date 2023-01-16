const artworkController= new ArtworkController();
const addItemMessage = document.getElementById('message-add-item');

// Add Item Form ----------------------------------------------
const addItemForm = document.getElementById('form-addItem');
const viewItemForm = document.getElementById('form-viewItem';)


addItemForm.addEventListener('submit', addNewItemFromForm);

function addNewItemFromForm(event) {
    event.preventDefault();

    // get input elements from form
    const inputTitle = document.getElementById('inputTitle');
    const inputImageUrl = document.getElementById('inputImageUrl');
    const inputSeries = document.getElementById('inputSeries');
    const inputFormat = document.getElementById('inputFormat');
    const inputMedia = document.getElementById('inputMedia');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');
    const inputPrice = document.getElementById('inputPrice');
    const inputDesc = document.getElementById('inputDesc');

    // get values from inputs
    const title = inputTitle.value;
    const imageUrl = inputImageUrl.value;
    const series = inputSeries.value;
    const format = inputFormat.value;
    const media = inputMedia.value;
    const width = inputWidth.value;
    const height = inputHeight.value;
    const price = inputPrice.value;
    const description = inputDesc.value;

    // add artwork to ArtworkController.items
    artworkController.addArtwork(title, imageUrl, series, format, media, width, height, price, description);
    alert("Success!  New item has been added.");

    displayArtworkInfo(addItemMessage);
    
    // Clear form
    addItemForm.reset();
}



// Display item information
function displayArtworkInfo(messageContainer) {

    // get last object entered from items array
    let lastElem = artworkController.items.length - 1;
    const storedArtwork = artworkController.items[lastElem];

    // get artwork info
    const itemNumber = storedArtwork.id;
    const title = storedArtwork.title;
    const imageUrl = storedArtwork.imageUrl;
    const series = storedArtwork.series;
    const format = storedArtwork.format;
    const media = storedArtwork.media;
    const width = storedArtwork.width;
    const height = storedArtwork.height;
    const price = storedArtwork.price;
    const description = storedArtwork.description;

    // get message display elements
    const displayItemNum = document.getElementById('displayItemNum');
    const displayTitle = document.getElementById('displayTitle');
    const displayImageUrl = document.getElementById('displayImageUrl');
    const displaySeries = document.getElementById('displaySeries');
    const displayFormat = document.getElementById('displayFormat');
    const displayMedia = document.getElementById('displayMedia');
    const displayWidth = document.getElementById('displayWidth');
    const displayHeight = document.getElementById('displayHeight');
    const displayPrice = document.getElementById('displayPrice');
    const displayDesc = document.getElementById('displayDescription');

    
    displayItemNum.innerHTML = itemNumber;
    displayTitle.innerHTML = title;
    displayImageUrl.innerHTML = imageUrl;
    displaySeries.innerHTML = series;
    displayFormat.innerHTML = format;
    displayMedia.innerHTML = media;
    displayWidth.innerHTML = width;
    displayHeight.innerHTML = height;
    displayPrice.innerHTML = price;
    displayDesc.innerHTML = description;
    
    messageContainer.removeAttribute("hidden");
}

const artworkController= new ArtworkController();

// item forms  ----------------------------------------------
const addItemForm = document.getElementById('form-addItem');
const viewItemForm = document.getElementById('form-viewItem');
const updateItemForm = document.getElementById('form-updateItem');
const deleteItemForm = document.getElementById('form-deleteItem');

// event listeners----------------------------------------------
addItemForm.addEventListener('submit', addNewItemFromForm);
viewItemForm.addEventListener('submit', viewItemFromForm);
updateItemForm.addEventListener('submit', updateItemFromForm);
deleteItemForm.addEventListener('submit', deleteItemFromForm);

/* ################################################################
                            Event Handlers
   ################################################################ */

// -------------------add item event handler ----------------------
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

    // Access last element pushed to items array and display info
    const addItemMessage = document.getElementById('message-add-item');
    const elem = artworkController.items.length - 1;
    const artworkData = artworkController.items[elem];

    displayArtworkInfo(artworkData,addItemMessage);
    
    // Clear form
    addItemForm.reset();
}

// ------------------- view item event handler ---------------------------
async function viewItemFromForm(event) {
    event.preventDefault();

    // get artwork id # from form
    const inputId = document.getElementById('inputViewItemNumber');
    const id = inputId.value;

    // retrieve item from API
    const artworkData = await artworkController.findById(id);

    // display item info
    const viewItemMessage = document.getElementById('message-view-item');
    displayArtworkInfo(artworkData, viewItemMessage);

    // reset form
    viewItemForm.reset();

}

// ----------------- Update Item Event Handler ---------------------------
async function updateItemFromForm(event) {
    //TODO implement
}

// ----------------- Delete Item Event Handler ------------------------------
function deleteItemFromForm(event) {

}


// Display item information function -----------------------------------------
function displayArtworkInfo(artData, messageContainer) {

    $(messageContainer).find(".displayItemNum").text(artData.id);
    $(messageContainer).find(".displayTitle").text(artData.title);
    $(messageContainer).find(".displayImageUrl").text(artData.imageUrl);
    $(messageContainer).find(".displaySeries").text(artData.series);
    $(messageContainer).find(".displayFormat").text(artData.format);
    $(messageContainer).find(".displayMedia").text(artData.media);
    $(messageContainer).find(".displayWidth").text(artData.width);
    $(messageContainer).find(".displayHeight").text(artData.height);
    $(messageContainer).find(".displayPrice").text(artData.price);
    $(messageContainer).find(".displayDescription").text(artData.description);

    messageContainer.removeAttribute("hidden");
}

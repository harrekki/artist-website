const artworkController= new ArtworkController();

// item forms and buttons ----------------------------------------------
const addItemForm = document.getElementById('form-addItem');
const viewItemForm = document.getElementById('form-viewItem');
const updateItemForm = document.getElementById('form-updateItem');
const deleteItemForm = document.getElementById('form-deleteItem');
const updateFindBtn = document.getElementById('button-addon2');

// event listeners----------------------------------------------
addItemForm.addEventListener('submit', addNewItemFromForm);
viewItemForm.addEventListener('submit', viewItemFromForm);
updateItemForm.addEventListener('submit', updateItemFromForm);
deleteItemForm.addEventListener('submit', deleteItemFromForm);
updateFindBtn.addEventListener('click', updateFindItem);

/* ################################################################
                            Event Handlers
   ################################################################ */

// -------------------add item event handler ----------------------
async function addNewItemFromForm(event) {
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
    let artData = await artworkController.addArtwork(title, imageUrl, series, format, media, width, height, price, description);
    console.log(artData);

    // Display artwork info
    const addItemMessage = document.getElementById('message-add-item');
    if(artData instanceof String || typeof artData === 'string')
        alert("Error: " + artData);
    else
    {
        alert("Success: New item created")
        displayArtworkInfo(artData,addItemMessage);
    }
    
    // Clear form
    addItemForm.reset();
}

// ------------------- view item event handler ---------------------------
async function viewItemFromForm(event) {
    event.preventDefault();

    // get artwork id # from form
    const inputId = document.getElementById('inputViewItemNumber');
    const id = inputId.value;
    //const id = $('#inputViewItemNumber').prop('value');

    // retrieve item from API
    const artworkData = await artworkController.findById(id);

    // display item info
    const viewItemMessage = document.getElementById('message-view-item');
    if(!artworkData)
        alert("Error: Item not found");
    else
    {
        displayArtworkInfo(artworkData, viewItemMessage);
    }

    // reset form
    viewItemForm.reset();

}

// ----------------- Find Item Button Event Handler -------------------------
async function updateFindItem() {
   const id = document.getElementById("inputUpdateItemNumber").value;
   const data = await artworkController.findById(id);

   $('#inputUpdateItemId').prop('value', data.id);
   $('#inputUpdateTitle').prop('value', data.title);
   $('#inputUpdateImageUrl').prop('value', data.imageUrl);
   $('#inputUpdateSeries').prop('value', data.series);
   $('#inputUpdateFormat').prop('value', data.format);
   $('#inputUpdateMedia').prop('value', data.media);
   $('#inputUpdateWidth').prop('value', data.width);
   $('#inputUpdateHeight').prop('value', data.height);
   $('#inputUpdatePrice').prop('value', data.price);
   $('#inputUpdateDesc').prop('value', data.description);

   const fieldset = document.getElementById("updateFieldset");
   fieldset.removeAttribute("disabled");
    
}

// ---------------- Checkbox Event Handler -------------------------------
const checkboxes = document.querySelectorAll("input[type=checkbox]");
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", toggleReadOnly);
});

function toggleReadOnly() {
        console.log(this);
        const inputElem = this.closest(".input-group").lastElementChild;
        console.log(this.value);
        if(this.checked)
            // remove 'readonly' attribute from associated input
            inputElem.removeAttribute('readonly');
        else
            // apply 'readonly' attribute to asscociated input
            inputElem.setAttribute('readonly','');
 }


// ----------------- Update Item Event Handler ---------------------------
async function updateItemFromForm(event) {
    //TODO implement
    event.preventDefault();

    const id = $('#inputUpdateItemId').prop('value');
    const title = $('#inputUpdateTitle').prop('value');
    const imageUrl = $('#inputUpdateImageUrl').prop('value');
    const series = $('#inputUpdateSeries').prop('value');
    const format = $('#inputUpdateFormat').prop('value');
    const media = $('#inputUpdateMedia').prop('value');
    const width = $('#inputUpdateWidth').prop('value');
    const height = $('#inputUpdateHeight').prop('value');
    const price = $('#inputUpdatePrice').prop('value');
    const description = $('#inputUpdateDesc').prop('value');
    
    
    artworkController.update(id, {title, imageUrl, series, format, media, width, height, price, description});
    
    // display update item info
    const messageContainer = document.querySelector("#message-update-item");
    const artworkData = {
        id: id, 
        title: title, 
        imageUrl: imageUrl, 
        series: series, 
        format: format,
        media: media,
        width: height,
        price: price,
        description: description
    }
    displayArtworkInfo(artworkData, messageContainer);

    updateItemForm.reset();
    // const findId = document.getElementById("inputUpdateItemNumber").value;
    // findId = '';
    $('#updateSearch').reset();

}

// ----------------- Delete Item Event Handler ------------------------------
async function deleteItemFromForm(event) {
    event.preventDefault();

    // Get artwork id# from form
    const inputId = document.getElementById('inputDeleteItemNumber');
    const id = inputId.value;

    // Call api to delete from database
    const response = await artworkController.delete(id);
    if(!response)
        alert("Success: Item " + id + " has been deleted");
    else
        alert("Error: " + response);

    deleteItemForm.reset();

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



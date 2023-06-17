$(document).ready(() => {
    const artworkController= new ArtworkController();
    
    // -------------------add item event listener ----------------------
    async function addNewItemFromForm(event) {
        event.preventDefault();
    
        // get values from form inputs
        const title = $('#inputTitle').prop('value');
        const imageUrl = $('#inputImageUrl').prop('value');
        const series = $('#inputSeries').prop('value');
        const format = $('#inputFormat').prop('value');
        const media = $('#inputMedia').prop('value');
        const width = $('#inputWidth').prop('value');
        const height = $('#inputHeight').prop('value');
        const price = $('#inputPrice').prop('value');
        const description = $('#inputDesc').prop('value');
    
        // add artwork to ArtworkController.items
        let artData = await artworkController.addArtwork(title, imageUrl, series, format, media, width, height, price, description);
        console.log(artData);
        
        // Display artwork info
        const addItemMessage = document.getElementById('message-add-item');
        if(artData instanceof String || typeof artData === 'string')
        alert("Error: " + artData);
        else {
            alert("Success: New item created")
            displayArtworkInfo(artData,addItemMessage);
        }
        
        $('#form-addItem').reset();
    }

    $('#form-addItem').on('submit', addNewItemFromForm);

    // ------------------- view item event handler ---------------------------
    async function viewItemFromForm(event) {
        event.preventDefault();
        
        const id = $('#inputViewItemNumber').prop('value');
        
        // retrieve item from API
        const artworkData = await artworkController.findById(id);
        
        // display item info
        const viewItemMessage = document.getElementById('message-view-item');
        !artworkData
            ? alert("Error: Item not found")
            : displayArtworkInfo(artworkData, viewItemMessage);
        
        $('#form-viewItem').reset();
    }

    $('#form-viewItem').on('submit', viewItemFromForm);


    // ----------------- Find Item Button Event Handler -------------------------
    async function updateFindItem(event) {
        event.preventDefault();
    
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

    $('#button-addon2').on('click', updateFindItem);

    // ---------------- Checkbox Event Handler -------------------------------
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", toggleReadOnly);
    });

    function toggleReadOnly() {
        const inputElem = this.closest(".input-group").lastElementChild;
        this.checked
            ? inputElem.removeAttribute('readonly')
            : inputElem.setAttribute('readonly','');
        }
        
        
    // ----------------- Update Item Event Handler ---------------------------
    async function updateItemFromForm(event) {
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
        
        let artworkData = await artworkController.update(id, {title, imageUrl, series, format, media, width, height, price, description});
        console.log(artworkData);
        
        // display update item info
        const messageContainer = document.querySelector("#message-update-item");
        displayArtworkInfo(artworkData, messageContainer);
        
        $('#form-updateItem').reset();

        // apply readonly attribute to all text inputs
        const inputs = $('#form-updateItem').querySelectorAll(".form-control");
        inputs.forEach(elem => elem.setAttribute('readonly',''));
        $('#updateSearch').reset();
    }

    $('#form-updateItem').on('submit', updateItemFromForm);

    // ----------------- Delete Item Event Handler ------------------------------
    async function deleteItemFromForm(event) {
        event.preventDefault();
        
        const id = $('#inputDeleteItemNumber').prop('value');
        
        // Call api to delete from database
        const response = await artworkController.delete(id);
        !response
            ? alert("Success: Item " + id + " has been deleted")
            : alert("Error: " + response);

        $('#form-deleteItem').reset();
    }

    $('#form-deleteItem').on('submit', deleteItemFromForm);


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

        messageContainer.removeAttribute('hidden');
    }

    // Hide message when 'Clear' button is clicked
    $('.hide-btn').on('click', event => {
        $(event.currentTarget).parents('.message').fadeOut(300);
    });


});

$('#artworkModal').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget) // Button that triggered the modal
    let title = button.data('title') // Extract info from data-* attributes
    let url = button.data('source')
    let modal = $(this)
    modal.find('.modal-title').text(title)
    modal.find('.modal-body img').prop("src", url)
  })
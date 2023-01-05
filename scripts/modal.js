$('#artworkModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var title = button.data('title') // Extract info from data-* attributes
    var url = button.data('source')
    var modal = $(this)
    modal.find('.modal-title').text(title)
    modal.find('.modal-body img').prop("src", url)
  })
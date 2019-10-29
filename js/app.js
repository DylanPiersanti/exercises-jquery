$(function() {
  $('#navbarDropdown').click(function() {
    $(".dropdown-menu").toggle()
  })  

  $('a').removeClass('disabled')

  $('[name=search]').keyup(function() {
    $('#searchResult').html($('[name=search]').val())
  })
});

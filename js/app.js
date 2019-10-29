$(function() {
  $('#navbarDropdown').click(function() {
    $(".dropdown-menu").toggle()
  })  // menu dropDown

  $('a').removeClass('disabled') // supprime class disabled

  $('[name=search]').keyup(function() {
    $('#searchResult').html($(this).val())
  }) // keyUp

  $('#replaceTitle').click(function() {
    $('.display-4').text("Web Developer " + Math.floor(Math.random() * 51))
  }) // replaceTitle + Math.random()

  $('.list-group-item').click(function() {
    $(this).addClass('active').siblings().removeClass('active')
  }) // change active list

});

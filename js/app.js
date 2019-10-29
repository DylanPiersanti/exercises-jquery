$(function () {
  $('#navbarDropdown').click(function () {
    $(".dropdown-menu").toggle()
  })  // menu dropDown

  $('a').removeClass('disabled') // supprime class disabled

  $('[name=search]').keyup(function () {
    $('#searchResult').html($(this).val())
  }) // keyUp

  $('#replaceTitle').click(function () {
    $('.display-4').text("Web Developer " + Math.floor(Math.random() * 51))
  }) // replaceTitle + Math.random()

  $('.list-group-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  }) // change active list

  $('#playVideo').click(function () {
    $('#video').trigger('play')
    setTimeout(function () {
      $('#video').get(0).pause()
    }, 11000)
  }) // start video and pause at 10s

  $('.nav-tabs a').click(function () {
    $(this).tab('show')
  })

  $('#showModal').click(function () {
    $('#modal').show()
  })

  $('.close, #closeBtn').click(function () {
    $('#modal').hide()
  }) // afficher la modal

  $('#showPop').click(function () {
    $('[data-content]').popover()
  }) // afficher le popover

  /*var progress = 0;
  var interval = setInterval(function () {
    progress += 5;
    $("#progressBar")
      .css("width", progress + "%")
      .attr("aria-valuenow", progress)
      .text(progress + "%");
    if (progress >= 100) {
      clearInterval(interval);
    }
  })*/ // progressBar


  var progressBar = $("#progressBar");

  setInterval(function () {
    var width = parseInt(progressBar[0].style.getPropertyValue('width'))

    if (width >= 100) {
      progressBar.css('width', 0)
    } else {
      progressBar.css('width', '100%') //width + 5 + '%'
    }
  }, 1000)

  setInterval(function () {
    $('#spinner').css("animation-play-state", "paused")
  }, 4000);
  setInterval(function () {
    $('#spinner').css("animation-play-state", "running")
  }, 9000)



});

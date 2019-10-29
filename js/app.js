$(function () {
  $('#navbarDropdown').click(function () {
    $(".dropdown-menu").toggle()
  })  // menu dropDown

  $('#navbarSupportedContent a').removeClass('disabled') // supprime class disabled

  $('[name=search]').on("change keyup", function () {
    $('#searchResult').html($(this).val())
  }) // keyUp

  $('#replaceTitle').click(function () {
    var randomNum = Math.floor(Math.random() * 51);
    $('.display-4').text("Web Developer " + randomNum)
  }) // replaceTitle + Math.random()

  $('.list-group-item').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
  }) // change active list

  $('#playVideo').click(function () {
    var maVideo = $('#video').get(0);
    maVideo.play()
    setTimeout(function () {
      maVideo.pause()
    }, 11000)
  }) // start video and pause at 10s

  $('.nav-tabs a').click(function () {
    $(this).tab('show')
  }) // 

  /* var tabs = $('[data-tabs]');
      tabs.find('.nav-link').click(function() {
        var name = $(this).getAttribute('href');
        // name = "#profile"

        + name.replace('#', '').show()
      })
  */

  $('#showModal').click(function () {
    $('#modal').show()
    $('.close, #closeBtn').one('click', function () {
      $('#modal').hide()
    })
  })



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

  var isPlayed = true;

  setInterval(function () {
    if (isPlayed) {
      $('#spinner').css("animation-play-state", "paused")
      isPlayed = false;
    } else {
      $('#spinner').css("animation-play-state", "running")
      isPlayed = true;
    }
  }, 5000);


});

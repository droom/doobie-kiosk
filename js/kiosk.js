$( document ).ready(function() {

  var bgOn = "rgba(0, 0, 0, 0.1";
  var bgOff = "rgba(0, 0, 0, 0";

  $( 'a[href="#"]' ).click( function(e) {
    e.preventDefault();
  } );

  // DRY THIS OUT!

  function backgroundReset(){
    $(".guide .column-1:nth-child(2)").css("background-color", bgOff);
    $(".guide .column-1:nth-child(3)").css("background-color", bgOff);
    $(".guide .column-1:nth-child(4)").css("background-color", bgOff);
    $(".guide .column-1:nth-child(5)").css("background-color", bgOff);
  };

  $('.change-step-1').click(function() {
    backgroundReset();
    $(".guide .column-1:nth-child(2)").css("background-color", bgOn);
  });


  $('.change-step-2').click(function() {
    backgroundReset();
    $(".guide .column-1:nth-child(3)").css("background-color", bgOn);
  });

  $('.change-step-3').click(function() {
    backgroundReset();
    $(".guide .column-1:nth-child(4)").css("background-color", bgOn);
    $(this).addClass('step-active');

  });

  $('.change-step-4').click(function() {
    backgroundReset();
    $(".guide .column-1:nth-child(5)").css("background-color", bgOn);
    $(".checkout").addClass('show');

  });

  $('.checkout-close').click(function() {
    $(".checkout").removeClass('show');
  });






});



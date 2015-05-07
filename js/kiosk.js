$( document ).ready(function() {

  var bgOn = "rgba(0, 0, 0, 0.1";
  var bgOff = "rgba(0, 0, 0, 0";

  $( 'a[href="#"]' ).click( function(e) {
    e.preventDefault();
  } );

  function backgroundReset(){
    $(".guide > .background-cell").css("background-color", bgOff);
  };

  $('.change-step').click(function() {
    var step = parseInt($(this).data('step')) + 1;
    backgroundReset();

    $(".guide .column-1:nth-child(" + step + ")").css("background-color", bgOn);

    if (step == 4) {
      $(this).addClass('step-active');
    } else if (step == 5) {
      $(".checkout").addClass('show');
    }
  });

  $('.checkout-close').click(function() {
    $(".checkout").removeClass('show');
  });

  $('.ui.dropdown').dropdown();
});

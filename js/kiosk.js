$( document ).ready(function() {

  var bgOn = "rgba(0, 0, 0, 0.1";
  var bgOff = "rgba(0, 0, 0, 0";

  $( 'a[href="#"]' ).click( function(e) {
    e.preventDefault();
  } );


  function backgroundReset(){
    $(".guide .column-1:nth-child(2)").css("background-color", bgOff);
      $(".guide .column-1:nth-child(3)").css("background-color", bgOff);
        $(".guide .column-1:nth-child(4)").css("background-color", bgOff);
      }

      $('.change-step-1').click(function() {
        backgroundReset();
        $(this).addClass('step-active');
        $(".guide .column-1:nth-child(2)").css("background-color", bgOn);
      });


      $('.change-step-2').click(function() {
        backgroundReset();
        $(this).addClass('step-active');
        $(".guide .column-1:nth-child(3)").css("background-color", bgOn);
      });

      $('.change-step-3').click(function() {
        backgroundReset();
        $(this).addClass('step-active');
        $(".guide .column-1:nth-child(4)").css("background-color", bgOn);
      });


    });



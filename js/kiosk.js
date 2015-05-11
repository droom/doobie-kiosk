$(document).ready(function() {

  var bgOn = "rgba(0, 0, 0, 0.1";
    var bgOff = "rgba(0, 0, 0, 0";

      $( 'a[href="#"]' ).click( function(e) {
        e.preventDefault();
      });

      function backgroundReset(){
        $(".guide > .background-cell").css("background-color", bgOff);
        $(".svg-step").css("fill", "#333333");
        $(".copy-step").css("color", "#333333");
      };


      $('.change-step').click(function() {
        var step = parseInt($(this).data('step')) + 1;
        backgroundReset();
        $(".guide .column-1:nth-child(" + step + ")").css("background-color", bgOn);

        $(this).children().css( "fill", "white" );
        $(this).children().css( "color", "white" );

        if (step == 5) {
          $(".checkout-wrap").addClass('show');
          $('body').scrollTop(0);
        }
      });

      $('.checkout-close').click(function() {
        $(".checkout-wrap").removeClass('show');
      });

      $('.ui.dropdown').dropdown();

      $('.help').click(function(){

        console.log($(this).data('help'));
        var helpme = $(this).data('help');


        if (helpme === false){
          console.log("Show tooltips");
          $(this).data('help', true);
          $(this).children().css( "fill", "white" );

          $('.tooltips .column-1').addClass('show');


        } else{
          console.log("Hide tooltips");
          $(this).data('help', false);
          $(this).children().css( "fill", "#333" );

          $('.tooltips .column-1').removeClass('show');

        }

      });


    });

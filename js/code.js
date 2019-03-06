$(document).ready( function(){

  var controlador = new ScrollMagic.Controller();
  var cena = new ScrollMagic.Scene({
    triggerElement: ".abilities-hide"
  }).setClassToggle(".abilities-hide","abilities-show").addTo(controlador);

   
    
    console.log($(".abilites-show").length);
});

if ($(".abilites-show").length > 0){
      var contador = $('.contador').each(function() {
        var $this = $(this), countTo = $this.attr('data-count');
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },

        {
          duration: 5000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum)+"%");
          },
          complete: function() {
            $this.text(this.countNum+"%");
            //alert('finished');
          }
        });  
      });
    };




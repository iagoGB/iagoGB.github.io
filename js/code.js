$(document).ready( function(){
  var controlador = new ScrollMagic.Controller();
  var cena = new ScrollMagic.Scene({
    triggerElement: ".javaScript"
  }).on('start',function(){
    var contador = $('.contador').each(function() {
      var $this = $(this), countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 3000,
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
  }).addTo(controlador);
});






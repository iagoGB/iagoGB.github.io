var target = $(".project-items");
var move = 'move';


$(document).ready( function(){
  //Funcção para animar as porcentagens das barras
  function animatePercent(){
    var controlador = new ScrollMagic.Controller();
    var cena = new ScrollMagic.Scene({
      triggerElement: ".abilities-hide"
    }).reverse(false).on('start',function(){
      var contador = $('.contador').each(function() {
        var $this = $(this), countTo = $this.attr('data-count');
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },

        {
          duration: 2700,
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
  }
 

  // Função para animar os projetos
  function animateAtScroll(){
    var documentTop = $(document).scrollTop();
    var offset = ($(window).height() * 3/4 ) * 1.8;

    target.each(function(){
      var itemTop = $(this).offset().top;
      console.log("DocumentTop: " + documentTop);
      console.log("itemTop: " + itemTop);


      if (documentTop > itemTop - offset){
        console.log("valha");
        $(this).addClass(move);
      } else {
        $(this).removeClass(move);
      }
    });
  };

  $(document).scroll(function(){
      animateAtScroll();
    });
  animatePercent();
});





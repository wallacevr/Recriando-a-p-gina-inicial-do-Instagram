$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$("#btn-assistir").click(function () {

    var videoSRC = $(this).attr("data-url");
 
  $("#exibir").html(videoSRC);
  $("#exibir").show();
  $("#filme-principal").hide();
  });

  $(".box-filme").click(function(){
    $("#exibir").hide();
    $("#filme-principal").show();
  });
    
    
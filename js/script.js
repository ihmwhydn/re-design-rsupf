$(document).ready(function(){

  $('.carousel').carousel({
    interval: 3000
  })

  $('#myModal-3').modal({
    backdrop: true
  })

  $('.loadMore').loadMoreResults({
    displayedItems: 4,
    showItems: 2
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            autoplay: false
        },
        992:{
            items:2
        },
        1400:{
            items:3
        },
    }
})



});
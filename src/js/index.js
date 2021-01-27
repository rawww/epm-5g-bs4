//init bs4 tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//datatables

$(document).ready(function() {
    $('#example').DataTable( {
        // "scrollY": 305,
        "scrollX": true,
        "searching": true,
        "dom": '<<t><"row table-nav"<"col-md-4"i><"col-md-4"l><"col-md-4"p>>>',
        "pagingType": "full",
        "infoCallback": function( settings, start, end, max, total, pre ) {
  return "Displaying " + "<b>" + start + "</b>" + " of <b>"+ end + " entries</b>";
},
    } );
} );

//jquery ui

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#sortable-filter-by" ).sortable();
    $( "#sortable-filter-by" ).disableSelection();
});

//swiper

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Default parameters
  slidesPerView: 3,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 4,
      spaceBetween: 60
    }
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
  el: '.swiper-pagination',
  clickable: 'true'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    snapOnRelease: 'true'
  },
})

//sidebar

//close sidebar toggle

$( ".close-sidebar" ).click(function() {

  $(".col-sidebar").toggleClass( "flex-width-0" )

  $(".open-sidebar-icon").toggleClass( "show" )

  $(".close-sidebar-icon").toggleClass( "show" )

  $( ".col-main-content" ).toggleClass( "col-md-12" )

})

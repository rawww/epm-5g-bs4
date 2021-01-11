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
        "pagingType": "simple",
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


//sidebar

//close sidebar


$( ".close-sidebar" ).click(function() {

  $(".col-sidebar").toggleClass( "flex-width-0" )

  $( ".col-main-content" ).toggleClass( "col-md-12" )

})

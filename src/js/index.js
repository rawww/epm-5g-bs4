//init bs4 tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//datatables

$(document).ready(function() {
    $('#example').DataTable( {
        "scrollY": 360,
        "scrollX": true,
        "searching": true,
        "dom": '<<t><"row table-nav"<"col-md-4"i><"col-md-4"l><"col-md-4"p>>>',
        "pagingType": "simple"
    } );
} );

//jquery ui

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

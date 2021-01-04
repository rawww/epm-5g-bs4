$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    $('#example').DataTable( {
        "scrollY": 320,
        "scrollX": true,
        "searching": true, 
        "dom": '<<t><"row table-nav"<"col-md-4"i><"col-md-4"l><"col-md-4"p>>>',
        "pagingType": "simple"
    } );
} );

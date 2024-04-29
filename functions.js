$(function() {
	var table = $('#theTable');

 var count = 0;
 
 //returns new row count
 function addRow(table) {
 	var row = $('<tr class="row' + count + '">').appendTo(table);
 	for(var cell = 0; cell<=9; cell++) {
  	switch(cell) {
    	case 0:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="date" name="chkbox[]"/></td>');
      	break;
      case 1:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="text" name="chkbox[]"/></td>');
      	break;
      case 2:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="number" name="chkbox[]"/></td>');
      	break;
      case 3:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="text" name="chkbox[]"/></td>');
      	break;
      case 4:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="text" name="chkbox[]"/></td>');
      	break;
      case 5:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="text" name="chkbox[]"/></td>');
      	break;
      case 6:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="text" name="chkbox[]"/></td>');
      	break;
      case 7:
      	$('<td class="cell' + cell + '">').appendTo(row).append('<input type="text" name="txtbox[]"/></td>');
      	break;
      case 8:
      	$('<td class="cell' + cell + '"><A href="#" class="edit edit' + count + '">edit</a></td>').appendTo(row);
        break;
      case 9:
      	$('<td class="cell' + cell + '"><A href="#" class="delt del' + count + '">X</a></td>').appendTo(row);
    }
  }
  return ++count;
 }
 
 $(document).on('click', '.edit', function(e) {
 		var parent = $(e.target).parent();
    $(e.target).remove();
    $(parent).append('<input type="text" class="editThis"/>');
 });
 
 
 $(document).on('click', '.delt', function(e) {
 	e.preventDefault();
  var cls = 		 $(e.target).parent().parent().remove();
 });
	
  $('#addIt').on('click', function(e) {
  	e.preventDefault();
    addRow(table);
  });
  
});
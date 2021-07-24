$(document).ready( function() {
  $('ul .qea .answer').hide();
  
  $('ul .qea .question').click( function () {
    $(this).next('.qea .answer').slideToggle(250);
  })
}); // end ready
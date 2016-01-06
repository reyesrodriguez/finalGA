

$(document).on('click',function(){
  $('.collapse').collapse('hide');
});

$(document).on('click','.navbar-collapse',function(e){
  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle'){
  $(this).collapse('hide');
}
});
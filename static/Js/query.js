
   // what we do section
$("#movies").click( () => {
    $("#watch").toggle();
});
$("#walk").click( () => {
    $("#walking").toggle();
})
$("#musicz").click( () => {
    $("#music").toggle();
})


$("#music").click(function(){
    $("#music-image").slideDown('1500').hide('1000');
    $("#music").show('1500');
  });
$("#music").click(function(){
    $("#music").slideUp('1500');
    $("#music-image").slideDown('1500');
  });

  $("#walk").click(function(){
    $("#walk").slideDown('1500').hide('1000');
    $("#walk").show('1500');
  });
$("#walking").click(function(){
    $("#walking").slideUp('1500');
    $("#-image").slideDown('1500');
  });
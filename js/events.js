//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}
function frameIt(){
  $(document).on('load', function(){
    $('img').addClass('tasty')
  })
}
function pressIt(){
  $('text').on('keydown', function(key){
    if(key.which == 71){
      alert('G was pressed')
    }
  })
}
$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});

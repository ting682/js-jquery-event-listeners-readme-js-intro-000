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
  $(document).on('keydown', function(){
    if(key.which == 82){
      alert('r was pressed')
    }
  })
}
$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});

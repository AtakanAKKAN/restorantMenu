/*$(".burger-list").slideUp();*/ 

/*$(".burgercontrolbutton").on("click", () => {
    $(".burger-list").slideToggle();
    $(".listcontrol").addClass("flashcontrolbutton");
    setTimeout(function(){$(".listcontrol").removeClass("flashcontrolbutton");}, 200);
});

$(".coffecontrolbutton").on("click", () => {
    $(".coffe-list").slideToggle();
    $(".listcontrol").addClass("flashcontrolbutton");
    setTimeout(function(){$(".listcontrol").removeClass("flashcontrolbutton");}, 200);
});

$(".colddrinkcontrolbutton").on("click", () => {
    $(".colddrink-list").slideToggle();
    $(".listcontrol").addClass("flashcontrolbutton");
    setTimeout(function(){$(".listcontrol").removeClass("flashcontrolbutton");}, 200);
});*/

$('.listbuttoncss').on("click", function(evt) {
  evt.preventDefault();
  
  let _this = $(this),
      ct = _this.next('.list-items');
  
  // check if clicked title has active class
  if(_this.hasClass('a')){
  
    _this.removeClass('a');
    ct.slideUp();
    
  } else {
    $('.listbuttoncss.a').removeClass('a');
    _this.addClass('a');
    ct.slideDown();
    
  }

});





console.log(document.querySelector(".listcontrolbutton"));


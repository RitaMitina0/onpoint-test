


let inScroll = false;

const setActiveItem = itemEq =>{
  $(".pagination__item").eq(itemEq)
  .addClass('pagination__item--active')
  .siblings()
  .removeClass('pagination__item--active');
}


//определение секции
const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;
  if (inScroll == false){
    inScroll = true;
    $(".maincontent").css({
      transform: `translateY(${position})`
    });
  
    $(".section").eq(sectionEq)
    .addClass('active')
    .siblings()
    .removeClass('active');
    switch(sectionEq){
      case 0:
        $(".down").css({
          "display":"block"
        });
        break;
      case 1:
        $(".down").css({
          "display":"block"
        });

        break;
      case 2:
      $(".down").css({
        "display":"none"
      });
    }
    setTimeout(() => {
      inScroll = false;
      setActiveItem(sectionEq);

    }, 1000+300);  //энерция мыши
  }
};




// скролл секций
const scrollToSection = direction => {
  
  const activeSection = $(".section").filter('.active');
  const prevSection = activeSection.prev();
  const nextSection = activeSection.next();
  var activeAnimate = $(".pathogenesis__content__piece");

  if (direction == "up" && prevSection.length){
    performTransition(prevSection.index());

    $(".pathogenesis__content__piece").removeClass('pathogenesis__content__piece--animate-down')
    .addClass('pathogenesis__content__piece--animate-up').removeClass('pathogenesis__content__piece--animate-down');
  
  }

  if (direction == "down" && nextSection.length){
   
    performTransition(nextSection.index());
    
    $(".pathogenesis__content__piece").removeClass('pathogenesis__content__piece--animate-up')
    .addClass('pathogenesis__content__piece--animate-down').removeClass('pathogenesis__content__piece--animate-up');
  //  if($(".pathogenesis__content__pieces .pathogenesis__content__piece:not(.pathogenesis__content__piece--animate-down)")
  //              .addClass('pathogenesis__content__piece--animate-down');
    
  
  }
}


//обработчик скролла
$(document).on("wheel", e => {

  const deltaY = e.originalEvent.deltaY;
  if (deltaY > 0 ){
    
    scrollToSection("down");
 
  
  }
  if (deltaY < 0 ){
    // $(".pathogenesis__content__piece").css({"margin-top":"+=30px"});
    scrollToSection("up");
  
    // $(".pathogenesis__content__piece").css({"margin-top":"0px"});
  }
});


$(document).swipe( {

  swipe:function(
    
    event,
    direction,
    distance,
    duration,
    fingerCount,
    fingerData
         )
         
          {
    const scrollDirection = direction == "down" ? "up" : "down"
    scrollToSection(scrollDirection);
   
  }
});
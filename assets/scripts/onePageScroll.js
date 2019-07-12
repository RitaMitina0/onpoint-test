

// const sections = $(".section");
// const display = $(".maincontent");
// let inScroll = false;

// const setActiveItem = itemEq =>{
//   $(".pagination__item").eq(itemEq)
//   .addClass('pagination__item--active')
//   .siblings()
//   .removeClass('pagination__item--active');
// }


// //определение секции
// const performTransition = sectionEq => {
//   const position = `${sectionEq * -100}%`;
//   if (inScroll == false){
//     inScroll = true;
//     $(".maincontent").css({
//       transform: `translateY(${position})`
//     });
  
//     $(".section").eq(sectionEq)
//     .addClass('active')
//     .siblings()
//     .removeClass('active');

//     setTimeout(() => {
//       inScroll = false;
//       setActiveItem(sectionEq);
//     }, 1000+300);  //энерция мыши
//   }
// };

// $('[data-scroll-to]').on('click', e=>{
//   e.preventDefault;
//   console.log("333");
//   const target = $(e.currentTarget).attr('data-scroll-to');
//   performTransition(target);
// });



// // скролл секций
// const scrollToSection = direction => {
//   const activeSection = $(".section").filter('.active');
//   const prevSection = activeSection.prev();
//   const nextSection = activeSection.next();

//   if (direction == "up" && prevSection.length){
//     performTransition(prevSection.index());
//   }

//   if (direction == "down" && nextSection.length){
//     performTransition(nextSection.index());
//   }
// }


// //обработчик скролла
// $(document).on("wheel", e => {

//   const deltaY = e.originalEvent.deltaY;
//   if (deltaY > 0 ){
//     console.log("Вниз");
//     scrollToSection("down");
//   }
//   if (deltaY < 0 ){
//     //вверх
//     scrollToSection("up");

//   }
// });







var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;


document.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
}, false);

document.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGesure();
}, false); 

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        alert(swiped + 'left!');
    }
    if (touchendX > touchstartX) {
        alert(swiped + 'right!');
    }
    if (touchendY < touchstartY) {
        alert(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        alert(swiped + 'left!');
    }
    if (touchendY == touchstartY) {
        alert('tap!');
    }
}
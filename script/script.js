AOS.init();
const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




// let btn= document.querySelector('.w-nav-button')

// btn.addEventListener('click',(e)=>{
//   let navOverlay= document.querySelector('.w-nav-overlay')
// navOverlay.style.display="block"
// if (!navOverlay.contains(e.target) && !box.contains(e.target) ) {
//   menu_icon_box.classList.remove("active");
//   box.classList.remove("active_box");
// }
// })


let menu_icon_box = document.querySelector(".w-nav-button");
let box = document.querySelector(".w-nav-overlay");


menu_icon_box.onclick = function(){
    // menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
    box.style.transition = "all 2s";
}

document.onclick = function(e){
  if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
      menu_icon_box.classList.remove("active");
      box.classList.remove("active_box");
  }
}





let accordian= document.querySelectorAll('.faq-accordion');

accordian.forEach((k)=>{
  k.addEventListener('click',()=>{
let faq_answer= k.querySelector('.faq-answer')
  faq_answer.classList.toggle('height')
  })
})

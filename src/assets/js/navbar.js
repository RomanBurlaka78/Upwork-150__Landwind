function menuBurger() {
    //  Burger Toggle menu

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__menu');
const navLink = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');
const navBtns = document.querySelector('.nav__btns');

navMenu.addEventListener("click", ()=> {
    if(navMenu.classList.contains("active")) {
        navMenu.classList.toggle('active'); 
        burger.classList.toggle('active');
        body.classList.toggle("locked");
        navBtns.classList.toggle('active');
        
        
    }
   
 })

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle("locked");
    navBtns.classList.toggle('active');
    

   
   
})
navLink.forEach((item)=> {
    item.addEventListener('click', ()=> {
        if(window.innerWidth<992) {
              burger.classList.remove('active');
              navMenu.classList.remove('active');
        body.classList.add("active");
        navBtns.classList.toggle('active');
        }
        
       
    })

})

window.addEventListener("resize", ()=> {
    if(window.innerWidth<992) {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove("active");
        navBtns.classList.remove("active");

    }
})




}

//menuBurger-call
menuBurger();
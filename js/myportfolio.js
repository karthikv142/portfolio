const burger=document.querySelector(".burger");
const nav=document.querySelector(".my-nav-links");
const navlinks=document.querySelectorAll('.my-nav-links li');
const bannerarea=document.querySelector('.banner-area');

function disp_nav(){
  nav.classList.toggle('nav-active');
  navlinks.forEach((links, i) => {
    if(links.style.animation){
        links.style.animation='';
    }
    else{
      links.style.animation=`navLinkFade 0.5s ease forwards ${i/1.5}s`;
    }
  });

}

function navslide(){

    burger.addEventListener('click',disp_nav);

}


navslide();

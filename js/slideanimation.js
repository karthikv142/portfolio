
function element(){
    var h = window.innerHeight;
     document.getElementById('About-me').style.height = h+"px";
     document.getElementById('experience').style.height = h+"px";
     document.getElementById('projects').style.height = h+"px";
     document.getElementById('gallery').style.height = h+"px";
     document.getElementById('contact').style.height = h+"px";


}

function slideAnimate() {
  var i = document.getElementById('span');
  var h = window.innerHeight;
  var x = 2*h;
  var y = 3*h;
  var Yoffset  = window.pageYOffset;
  var Xoffset  = window.pageXOffset;

 if(Yoffset < h){
     i.style.left = "600px";
 }
  else if(Yoffset < (2*h)) {
      i.style.left = "750px";
  }
  else if(Yoffset < (3*h)) {
      i.style.left = "900px";
  }
  else if (Yoffset < (4*h)){
       i.style.left = "1050px";
  }
  else if(Yoffset < (5*h)) {
      i.style.left = "1200px";
  }


}
window.addEventListener('scroll',slideAnimate);
window.addEventListener('load', element);
window.addEventListener('resize', element);

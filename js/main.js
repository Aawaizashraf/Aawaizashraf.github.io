document.addEventListener("DOMContentLoaded", function(){
     window.addEventListener('scroll', function() {
         if (window.scrollY > 300) {           
             document.getElementById('navbar_top').classList.add('custCss-navbar');
           // add padding top to show content behind navbar
           // navbar_height = document.querySelector('.navbar').offsetHeight;
           // document.body.style.paddingTop = navbar_height + 'px';
         } else {
           document.getElementById('navbar_top').classList.remove('custCss-navbar');
           // remove padding top from body
           // document.body.style.paddingTop = '0';
         } 
     });
   }); 


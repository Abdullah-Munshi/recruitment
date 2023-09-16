document.addEventListener('DOMContentLoaded', function(){

  
    // Testimonial Activation for Splide js plugin 
    let testimonial = new Splide("#testimonialCarousel", {
        speed: 1000,
        type: "loop",
        perPage: 4,
        gap: 30,
        rewind: true,
        centerMode: true,
        pagination: false,
        breakpoints: {
          1024: {
            perPage: 2,
          },
          480: {
            perPage: 1,
            gap: 16,
            autoHeight: true,
          },
        },
      });
    
      testimonial.mount();



      // Mobile Menu Activation
      if(document.getElementById('toggle-bar') !== null) {
        document.getElementById('toggle-bar').addEventListener('click', function(){
          document.getElementById('mobile-menu').classList.add('show')
          document.querySelector('.overlay').classList.add('show')
        })
        document.querySelector('#mobile-menu .close-mobile-menu').addEventListener('click', function(){
          document.getElementById('mobile-menu').classList.remove('show')
          document.querySelector('.overlay').classList.remove('show')
        })
        document.querySelector('.overlay').addEventListener('click', function(){
          document.getElementById('mobile-menu').classList.remove('show')
          document.querySelector('.overlay').classList.remove('show')
        })
      }
})

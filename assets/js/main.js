document.addEventListener('DOMContentLoaded', function(){
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

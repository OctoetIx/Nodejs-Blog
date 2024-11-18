document.addEventListener('DOMContentLoaded', function(){

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
  
    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].addEventListener('click', function() {
        searchBar.style.visibility = 'visible';
        searchBar.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        searchInput.focus();
      });
    }
  
    searchClose.addEventListener('click', function() {
      searchBar.style.visibility = 'hidden';
      searchBar.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    });
  
  
  });

document.addEventListener('DOMContentLoaded',()=>{
  const login = document.querySelector('.login');
  const signUp = document.querySelector('.sign-up');
  const register = document.querySelector('#signup');
  const log_in = document.querySelector('#login');
  
  register.addEventListener('click',()=>{
    signUp.style.display= 'block';
    login.style.display="none"
  })
  log_in.addEventListener('click',()=>{
    signUp.style.display= 'none';
    login.style.display="block";
  })
  
})

  

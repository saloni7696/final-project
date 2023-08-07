document.addEventListener('DOMContentLoaded', () => {
    // Get the elements after they are loaded into the DOM
    const per = document.querySelector('.per');
    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('.nav-list');
    const rightNav = document.querySelector('.rightNav');
  
    // Add the event listener for the per icon
    per.addEventListener('click', () => {
      rightNav.classList.toggle('v');
      navList.classList.toggle('v');
      navbar.classList.toggle('h');
    });
  });
  
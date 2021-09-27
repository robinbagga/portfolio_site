const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () =>{
        //  TOGGLE NAV
        nav.classList.toggle('nav-active');

        // ANIMATED LINKS(includes delay between each added link)
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        })
        //BURGER ANIMATION
        burger.classList.toggle('toggle');
    })
    
}

navSlide();

// const app = () => {           <---USE THIS IF THE APP IS BIGGER WITH MORE FUNCTIONS TO CALL ALL FUNCTIONS
//     navSlide();
// }
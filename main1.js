//change nav style
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY> 0);
})


// CONTACT BUTTON OR CIRCULAR BUTTON

const textButton = document.querySelectorAll('.contact_btn');

textButton.forEach(textButton => {
    let text = textButton.querySelector('p')

text.innerHTML = text.innerHTML.split('').map((character , index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

// SWIPER JS (GALLERY SECTION)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
         599: {
            slidesPerView: 2,
            spaceBetween: 40
         },
         1023: {
            slidesPerView: 3,
            spaceBetween: 60
         }
    }
  });




  const nav = document.querySelector('.nav_links');
  const openNavBtn = document.querySelector('#nav_toggle-open');
  const closeNavBtn = document.querySelector('#nav_toggle-close');

  const openNav = () => {
    nav.style.display = 'flex';
    // nav.style.opacity="1";
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
  }

  openNavBtn.addEventListener('click', openNav);


  const closeNav = () => {
    nav.style.display = 'none';
    // nav.style.opacity="0";
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
  }

  closeNavBtn.addEventListener('click', closeNav);


  // Close na menu on click of menu link
if(document.body.clientWidth < 799) {
    nav.querySelectorAll('li a').forEach(navLink => {
      navLink.addEventListener('click', closeNav);
  })
}
  
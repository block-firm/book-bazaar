// search

const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

// menu show

if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

// search hidden

if(searchClose){
    searchClose.addEventListener('click', ()=> {
        searchContent.classList.remove('show-search')
    })
}

// login

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')
 
// login show

if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

// login hidden

if(loginClose){
    loginClose.addEventListener('click', ()=> {
        loginContent.classList.remove('show-login')
    })
}

// shadow header

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When scroll is > than 50 viewport height. add the shadow
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// swiper

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  });

  let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false, 
        }
    }
  });

  // new swiper

  let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3, 
        }
    }
  });

  // testimonial swiper

  let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false, 
        }
    }
  });

  // scroll

  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
        // When scroll is higher than 350 viewport height
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('.show-scroll')
  }
  window.addEventListener('scroll', scrollUp);

  // active link

  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () => {
    const scrollDown = window.scrollY

   sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }else{
        sectionsClass.classList.remove('active-link')
    }
   }) 
  }
  window.addEventListener('scroll', scrollActive);

  // theme

  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'ri-sun-line'

  // if previously selected
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  //get current theme 
  const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

  // validate if user previously chose
  if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }

  // active/deactive theme w/ button
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save current theme + icon
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })

  // scroll reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true,

})

sr.reveal('.home__data, .featured__container, .new__container, .join__data, .testimonial__container')
sr.reveal('.home__images', {delay: 300})
sr.reveal('.services__card', {interval: 100})
sr.reveal('.discount__data', {origin: 'left'})
sr.reveal('.discount__images', {origin: 'right'});


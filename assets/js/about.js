// SHOW MENU
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// ADD SHADOW HEADER
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove("shadow-header")
}

window.addEventListener('scroll', shadowHeader)


// SWIPER POPULAR

const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto'
})



// SHOW SCROLL UP
const ScrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', ScrollUp)

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



// SCROLL REVEAL ANIMATION 

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

//home 
ScrollReveal().reveal(".home__title", {
    ...scrollRevealOption,
    origin: "left",
    delay: 100
});
ScrollReveal().reveal(".home__description", {
    ...scrollRevealOption,
    origin: "left",
    delay: 200
});
ScrollReveal().reveal(".home__button", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.8,
    delay: 100
});
ScrollReveal().reveal(".home__pizza", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.8,
    delay: 100
});

ScrollReveal().reveal(".home__board", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.8,
    delay: 500
});
ScrollReveal().reveal(".home__ingredient", {
    ...scrollRevealOption,
    origin: "top",
    scale: 0.5
});

ScrollReveal().reveal(".home__board", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.8
});
ScrollReveal().reveal(".home__stricker-1", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.8
});
ScrollReveal().reveal(".home__stricker-2", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.8
});

// popular 
ScrollReveal().reveal(".section__title", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".popular__description", {
    ...scrollRevealOption,
    origin: "top",
    scale: 0.8
});

ScrollReveal().reveal(".popular__dish", {
    ...scrollRevealOption,
    origin: "bottom",
});
//about 
ScrollReveal().reveal(".about__description", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about__button", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".about__img", {
    ...scrollRevealOption,
    origin: "left",
    scale: 0.5
});

//dish 
ScrollReveal().reveal(".recipe__name", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".recipe__description", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".recipe__image", {
    ...scrollRevealOption,
    origin: "left",
    scale: 0.5
});
ScrollReveal().reveal(".recipe__img", {
    ...scrollRevealOption,
    origin: "top",
    scale: 0.6
});
//food
ScrollReveal().reveal(".products__card", {
    ...scrollRevealOption,
    origin: "bottoom",
    scale: 0.4
});
ScrollReveal().reveal(".products__name", {
    ...scrollRevealOption,
    origin: "left",
    scale: 0.5
});
// contact
ScrollReveal().reveal(".contact__title", {
    ...scrollRevealOption,
    origin: "left",
    scale: 0.5
});
ScrollReveal().reveal(".contact__address", {
    ...scrollRevealOption,
    origin: "right",
    scale: 0.5
});
ScrollReveal().reveal(".contact__img", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.5
});
ScrollReveal().reveal(".contact__stricker-1", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".contact__stricker-2", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".contact__stricker-3", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".contact__container", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.5
});
// footer 
ScrollReveal().reveal(".footer__logo", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".footer__title", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".footer__link", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".footer__copy", {
    ...scrollRevealOption,
    origin: "bottom",
    scale: 0.5
});
























ScrollReveal().reveal(".footer__logo", {
    ...scrollRevealOption,
});
ScrollReveal().reveal('.footer__copy', { scale: 0.85 });
ScrollReveal().reveal('.footer__social', { scale: 0.85 });


const body = document.body;
const html = document.documentElement;

// Отключение / включение скролла на странице
const bodyScrollControls = {
  scrollBarWidth: window.innerWidth - body.clientWidth,

  disable() {
    body.style.marginRight = `${this.scrollBarWidth}px`;
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      body.style.marginRight = null;
    }
    html.classList.add('stop-scroll');
  },

  enable() {
    body.style.marginRight = null;
    html.classList.remove('stop-scroll');
  }
}

// Burger
const burger = document.querySelector('.burger-common');
const closeBtn = document.querySelector('.menu__burger');
const overlay = document.querySelector('.header__overlay');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.nav__link');

function enableAndDisableBurgerMenu() {
    burger.addEventListener('click', function () {
        overlay.classList.add('overlay--active');
        menu.classList.add('menu--active');
        bodyScrollControls.disable();
    });
    
    closeBtn.addEventListener('click', function () {
        overlay.classList.remove('overlay--active');
        menu.classList.remove('menu--active');
        bodyScrollControls.enable();
    });
    
    menuLinks.forEach(function (menuLink) {
        menuLink.onclick = function () {
            overlay.classList.remove('header__overlay--active');
            menu.classList.remove('menu--active');
            bodyScrollControls.enable();
        }
    })
    
    document.addEventListener( 'click', (e) => {
        const withinBoundaries1 = e.composedPath().includes(menuLinks);
        const withinBoundaries2 = e.composedPath().includes(closeBtn);
        const withinBoundaries3 = e.composedPath().includes(burger);
     
        if ( ! withinBoundaries1 && ! withinBoundaries2 && ! withinBoundaries3 ) {
            overlay.classList.remove('overlay--active');
            menu.classList.remove('menu--active');
            bodyScrollControls.enable();
        }
    })
}

// Smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Language selecting form
const currentLanguage = document.querySelector('.header__lang');
const currentLanguageValue = document.querySelector('.lang__value');
const currentLanguageIcon = document.querySelector('.lang__icon');
const arrow = document.querySelector('.lang__arrow');
const languageForm = document.querySelector('.lang-options');
const languageItems = document.querySelectorAll('.lang-options__item');

function selectLanguage() {
    // При клике на выбранный язык открывается окно для выбора другого языка
    currentLanguage.onclick = function () {
        languageForm.classList.toggle('lang-options--active');
        arrow.classList.toggle('lang__arrow--active');
    }

    // При клике на какой-либо из вариантов языка меняется иконка и название языка в панели выше
    languageItems.forEach(languageItem => {
        languageItem.onclick = function (event) {
            document.querySelector('.lang-options__item--active').classList.remove('lang-options__item--active');
            languageItem.classList.add('lang-options__item--active');

            let newLanguageValue = event.target.textContent;
            currentLanguageValue.textContent = newLanguageValue;
            

            // let newLanguage = event.target.parentElement.querySelector(`[xlink:href]`);
            // // let newLanguageIcon = newLanguage
            // console.log(newLanguage)
            // currentLanguageIcon.xlinkHref = '#ua';

            languageForm.classList.remove('lang-options--active');
        }
    })

    // При клике на свободную область, форма выбора языка скрывается
    document.addEventListener( 'click', (e) => {
        const withinBoundaries1 = e.composedPath().includes(languageItems);
        const withinBoundaries2 = e.composedPath().includes(currentLanguage);
        // const withinBoundaries3 = e.composedPath().includes(burger);
     
        if ( ! withinBoundaries1 && ! withinBoundaries2 ) {
            languageForm.classList.remove('lang-options--active');
            arrow.classList.remove('lang__arrow--active');
        }
    })
}

selectLanguage();

// Popups
// Hero popup
const heroBtn = document.querySelector('.hero__btn');
const heroPopup = document.querySelector('.hero__popup');
const heroOverlay = document.querySelector('.hero__overlay');
const heroPopupCloseBtn = document.querySelector('.hero-popup__closebtn');

heroBtn.onclick = function () {
    heroOverlay.classList.add('overlay--active');
    heroPopup.classList.add('popup--active');
    bodyScrollControls.disable();
}

heroPopupCloseBtn.onclick = function () {
    heroOverlay.classList.remove('overlay--active');
    heroPopup.classList.remove('popup--active');
    bodyScrollControls.enable();
}


// Accordion

$(function () {
    $("#accordion").accordion({
      collapsible: true,
    //   active: false,
      heightStyle: "content"
    });
  });

// Map

const maps = [
  {
    target: 'ru',
    mapURL: 'url(../img/map_ru.png)'
  },
  {
    target: 'by',
    mapURL: 'url(../img/map_by.png)'
  },
  {
    target: 'ua',
    mapURL: 'url(../img/map_ua.png)'
  },
  {
    target: 'tr',
    mapURL: 'url(../img/map_tr.png)'
  },
  {
    target: 'kz',
    mapURL: 'url(../img/map_kz.png)'
  },
]

const activeCountryClass = 'countries__item--active';
const countriesTabs = Array.from(document.querySelectorAll('.countries__item'));

countriesTabs[0].classList.add(activeCountryClass);
let path = countriesTabs[0].dataset.path;

function addMapBackground(path) {
  const mapContainer = document.querySelector('.geo__bg');

  for (let map of maps) {
    if (map.target === path) {
      mapContainer.style.backgroundImage = map.mapURL
    }
  }
}


countriesTabs.forEach(tab => {
  tab.onclick = function (event) {
    path = tab.dataset.path;

    for (let tab of countriesTabs) {
      tab.classList.remove(activeCountryClass);
    }

    tab.classList.add(activeCountryClass)

    addMapBackground(path)
  }
})

enableAndDisableBurgerMenu();
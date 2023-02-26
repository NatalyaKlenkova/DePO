const body = document.body;
const html = document.documentElement;

// Отключение / включение скролла на странице
let bodyScrollControls = {
  scrollBarWidth: (window.innerWidth - body.clientWidth),

  disable: function () {
    body.style.marginRight = `${this.scrollBarWidth}px`;
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      body.style.marginRight = null;
    }
    html.classList.add('stop-scroll');
  },

  enable: function () {
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

function enableBurger() {
  overlay.classList.add('overlay--active');
  menu.classList.add('menu--active');
  bodyScrollControls.disable();
}

function disableBurger() {
  overlay.classList.remove('overlay--active');
  menu.classList.remove('menu--active');
  bodyScrollControls.enable();
}

burger.addEventListener('click', function () {
  enableBurger();
});

closeBtn.addEventListener('click', function () {
  disableBurger();
});

menuLinks.forEach(function (menuLink) {
  menuLink.onclick = function () {
    disableBurger();
  }
})

overlay.addEventListener('click', () => {
  disableBurger();
})

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

// Language selecting
const currentLanguage = document.querySelector('.header__lang');
const currentLanguageValue = document.querySelector('.lang__value');
const currentLanguageIcon = document.querySelector('.lang__icon');
const arrow = document.querySelector('.lang__arrow');
const languageForm = document.querySelector('.lang-options');
const languageItems = document.querySelectorAll('.lang-options__item');

const burgerLanguageItems = document.querySelectorAll('.menu__lang-item');

function selectLanguage() {
  // Выбор языка в верхней панели
  // При клике на выбранный язык открывается окно для выбора другого языка
  currentLanguage.onclick = function () {
    languageForm.classList.toggle('lang-options--active');
    arrow.classList.toggle('lang__arrow--active');
  }

  // Функция, которая меняет язык в верхней панели на выбранный
  function changeLanguage(event) {
    let newLanguageValue = event.target.textContent;
      currentLanguageValue.textContent = newLanguageValue;


      // let newLanguage = event.target.parentElement.querySelector(`[xlink:href]`);
      // // let newLanguageIcon = newLanguage
      // console.log(newLanguage)
      // currentLanguageIcon.xlinkHref = '#ua';
  }

  // При клике на какой-либо из вариантов языка меняется иконка и название языка в панели выше
  languageItems.forEach(languageItem => {
    languageItem.onclick = function (event) {
      document.querySelector('.lang-options__item--active').classList.remove('lang-options__item--active');
      languageItem.classList.add('lang-options__item--active');

      changeLanguage(event);

      languageForm.classList.remove('lang-options--active');
    }
  })

  // При клике на свободную область, форма выбора языка скрывается
  document.addEventListener('click', (e) => {
    const withinBoundaries1 = e.composedPath().includes(languageItems);
    const withinBoundaries2 = e.composedPath().includes(currentLanguage);

    if (!withinBoundaries1 && !withinBoundaries2) {
      languageForm.classList.remove('lang-options--active');
      arrow.classList.remove('lang__arrow--active');
    }
  })

  // Панель выбора языков в бургер меню
  burgerLanguageItems.forEach(burgerLanguageItem => {
    burgerLanguageItem.onclick = function (event) {
      document.querySelector('.menu__lang-item--active').classList.remove('menu__lang-item--active');
      burgerLanguageItem.classList.add('menu__lang-item--active');

      changeLanguage(event);

      disableBurger();
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

function disableHeroOverlay() {
  heroOverlay.classList.remove('overlay--active');
  heroPopup.classList.remove('popup--active');
  bodyScrollControls.enable();
}

heroBtn.onclick = function () {
  heroOverlay.classList.add('overlay--active');
  heroPopup.classList.add('popup--active');
  bodyScrollControls.disable();
}

heroPopupCloseBtn.onclick = function () {
  disableHeroOverlay();
}

heroOverlay.onclick = function () {
  disableHeroOverlay();
}

// Custom select (geo popup form)
const element = document.querySelector('.form__select');
const choices = new Choices(element, {
  searchEnabled: false,
  placeholder: true,
  placeholderValue: 'Выберите страну',
  shouldSort: false,
  classNames: {
    selectedState: 'is-selected',
  }
});

// Geo popups
const geoPopupFirst = document.querySelector('.geo__popup-1');
const geoPopupSecond = document.querySelector('.geo__popup-2');
const geoOverlay = document.querySelector('.geo__overlay');
const geoConnectBtn = document.querySelector('.geo__btn-connect');
const geoSendBtn = document.querySelector('.geo-popup__btn-send');
const geoOkBtn = document.querySelector('.geo-popup__btn-ok');
const geoCloseBtns = document.querySelectorAll('.geo-popup__closebtn');

// Переиспользуемая функция, скрывающая попап
function disableGeoPopup() {
  geoOverlay.classList.remove('overlay--active');

  geoPopupFirst.style.visibility = 'hidden';
  geoPopupSecond.style.visibility = 'hidden';

  setTimeout(() => {
    geoOverlay.style.transform = 'translateX(0)';
    bodyScrollControls.enable();
  }, 1000);
}

// При нажатии на кнопку "Подлкючить мою страну" появляется попап
geoConnectBtn.onclick = function () {
  geoOverlay.classList.add('overlay--active');
  // 'Проскальзываем' на второй экран
  geoOverlay.style.transform = 'translateX(-33.33%)';

  geoPopupFirst.style.visibility = 'visible';
  geoPopupSecond.style.visibility = 'visible';

  bodyScrollControls.disable();
}

// При нажатии на крестик, попап исчезает
geoCloseBtns.forEach(function (closeBtn) {
  closeBtn.addEventListener('click', function () {
    disableGeoPopup();
  })
})

// При нажатии на кнопку "Отправить" в первом окне, перемещаемся на третий экран
geoSendBtn.onclick = function (evt) {
  evt.preventDefault();
  geoOverlay.style.transform = 'translateX(-66.66%)';
}

// При нажатии на кнопку "Понятно" попап скрывается
geoOkBtn.onclick = function () {
  disableGeoPopup();
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
const activeCountryClass = 'countries__item--active';
const countriesTabs = Array.from(document.querySelectorAll('.countries__item'));
const maps = document.querySelectorAll('.geo-map__country');

countriesTabs[0].classList.add(activeCountryClass);
let path = countriesTabs[0].dataset.path;

function addMapBackground(path) {
  for (let map of maps) {
    map.style.opacity = '0.5';
    if (map.dataset.target === path) {
      map.style.opacity = '1';
    }
  }
}

countriesTabs.forEach(tab => {
  tab.onclick = function () {
    path = tab.dataset.path;

    for (let tab of countriesTabs) {
      tab.classList.remove(activeCountryClass);
    }

    tab.classList.add(activeCountryClass);

    addMapBackground(path);
  }
})
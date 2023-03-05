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
const languages = [
  {
    name: 'ru',
    value: 'Русский',
    svgKey: '#ru'
  },
  {
    name: 'ua',
    value: 'English',
    svgKey: '#ua'
  }
]

// Текущий язык в верхней панели
const currentLanguage = document.querySelector('.header__lang');
const currentLanguageValue = document.querySelector('.lang__value');
const currentLanguageIcon = document.querySelector('.lang__icon').firstElementChild;
const arrow = document.querySelector('.lang__arrow');

// Язык в форме выбора
const languageForm = document.querySelector('.lang-options');
const languageFormItems = document.querySelectorAll('.lang-options__item');

// Язык в бургер-меню
const burgerLanguageItems = document.querySelectorAll('.menu__lang-item');

function selectLanguage() {
  // Выбор языка в верхней панели
  // При клике на выбранный язык открывается окно для выбора другого языка
  currentLanguage.onclick = function () {
    languageForm.classList.toggle('lang-options--active');
    arrow.classList.toggle('lang__arrow--active');
  }

  // Функция, которая меняет язык в верхней панели, в форме и в бургер-меню на выбранный
  function changeLanguage(event) {
    // Получаем data-lang элемента, на котором произошел клик
    let lang = event.target.dataset.lang;

    // Меняем выбранный язык в верхней панели
    for (let language of languages) {
      if (language.name === lang) {
        currentLanguageValue.textContent = language.value;
        currentLanguageIcon.setAttribute('xlink:href', language.svgKey);
      }
    }

    // Меняем активный язык в форме
    document.querySelector('.lang-options__item--active').classList.remove('lang-options__item--active');

    for (let languageFormItem of languageFormItems) {
      if (languageFormItem.querySelector('.lang-options__value').dataset.lang === lang) {
        languageFormItem.classList.add('lang-options__item--active');
      }
    }

    // Меняем активный язык в бургер меню
    document.querySelector('.menu__lang-item--active').classList.remove('menu__lang-item--active');

    for (let burgerLanguageItem of burgerLanguageItems) {
      if (burgerLanguageItem.querySelector('.menu__lang-value').dataset.lang === lang) {
        burgerLanguageItem.classList.add('menu__lang-item--active');
      }
    }
  }

  // При клике на какой-либо из вариантов языка в форме вызывается функция смены языка
  languageFormItems.forEach(languageFormItem => {
    languageFormItem.onclick = function (event) {
      changeLanguage(event);
    }
  })

  // При клике на свободную область, форма выбора языка скрывается
  document.addEventListener('click', (e) => {
    const withinBoundaries1 = e.composedPath().includes(languageFormItems);
    const withinBoundaries2 = e.composedPath().includes(currentLanguage);

    if (!withinBoundaries1 && !withinBoundaries2) {
      languageForm.classList.remove('lang-options--active');
      arrow.classList.remove('lang__arrow--active');
    }
  })

  // Панель выбора языка в бургер меню. При клике на элемент вызывается фнкция смены языка
  burgerLanguageItems.forEach(burgerLanguageItem => {
    burgerLanguageItem.onclick = function (event) {
      changeLanguage(event);
      disableBurger();
    }
  })
}
selectLanguage();

// Hero scroll или "Листайте вниз"
const heroScroll = document.querySelector('.hero__scroll');

heroScroll.onclick = function () {
  var about = document.getElementById('about');
  about.scrollIntoView({behavior: 'smooth'}, true);
}

// Popups
/// Launch App Popup
const heroPopup = document.querySelector('.hero__popup');
const heroOverlay = document.querySelector('.hero__overlay');
const heroPopupCloseBtn = document.querySelector('.hero-popup__closebtn');

function enableLaunchPopup() {
  heroOverlay.classList.add('overlay--active');
  heroPopup.classList.add('popup--active');
  bodyScrollControls.disable();
}

function disableLaunchPopup() {
  heroOverlay.classList.remove('overlay--active');
  heroPopup.classList.remove('popup--active');
  bodyScrollControls.enable();
}

/// Header popup
const headerBtn = document.querySelector('.header__btn');

headerBtn.onclick = function () {
  enableLaunchPopup();
}

/// Hero popup
const heroBtn = document.querySelector('.hero__btn');

heroBtn.onclick = function () {
  enableLaunchPopup();
}

/// Geo popup
const geoBtn = document.querySelector('.geo__btn');

geoBtn.onclick = function () {
  enableLaunchPopup();
}

/// App popup
const appBtn = document.querySelector('.app__btn');

appBtn.onclick = function () {
  enableLaunchPopup();
}

/// Disable launch app popup
heroPopupCloseBtn.onclick = function () {
  disableLaunchPopup();
}

heroOverlay.onclick = function () {
  disableLaunchPopup();
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
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
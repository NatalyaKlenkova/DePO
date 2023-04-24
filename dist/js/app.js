"use strict";function _createForOfIteratorHelper(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var body=document.body,html=document.documentElement,bodyScrollControls={scrollBarWidth:window.innerWidth-body.clientWidth,disable:function(){body.style.marginRight="".concat(this.scrollBarWidth,"px"),/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&(body.style.marginRight=null),html.classList.add("stop-scroll")},enable:function(){body.style.marginRight=null,html.classList.remove("stop-scroll")}},burger=document.querySelector(".burger-common"),closeBtn=document.querySelector(".menu__burger"),overlay=document.querySelector(".header__overlay"),menu=document.querySelector(".menu"),menuLinks=document.querySelectorAll(".nav__link");function enableBurger(){overlay.classList.add("overlay--active"),menu.classList.add("menu--active"),bodyScrollControls.disable()}function disableBurger(){overlay.classList.remove("overlay--active"),menu.classList.remove("menu--active"),bodyScrollControls.enable()}burger.addEventListener("click",(function(){enableBurger()})),closeBtn.addEventListener("click",(function(){disableBurger()})),menuLinks.forEach((function(e){e.onclick=function(){disableBurger()}})),overlay.addEventListener("click",(function(){disableBurger()}));var _step,anchors=document.querySelectorAll('a[href*="#"]'),_iterator=_createForOfIteratorHelper(anchors);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(t){t.preventDefault();var o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var languages=[{name:"ru",value:"Русский",svgKey:"#ru"},{name:"ua",value:"English",svgKey:"#ua"}],currentLanguage=document.querySelector(".header__lang"),currentLanguageValue=document.querySelector(".lang__value"),currentLanguageIcon=document.querySelector(".lang__icon").firstElementChild,arrow=document.querySelector(".lang__arrow"),languageForm=document.querySelector(".lang-options"),languageFormItems=document.querySelectorAll(".lang-options__item"),burgerLanguageItems=document.querySelectorAll(".menu__lang-item");function selectLanguage(){function e(e){for(var t=e.target.dataset.lang,o=0,r=languages;o<r.length;o++){var n=r[o];n.name===t&&(currentLanguageValue.textContent=n.value,currentLanguageIcon.setAttribute("xlink:href",n.svgKey))}document.querySelector(".lang-options__item--active").classList.remove("lang-options__item--active");var a,l=_createForOfIteratorHelper(languageFormItems);try{for(l.s();!(a=l.n()).done;){var c=a.value;c.querySelector(".lang-options__value").dataset.lang===t&&c.classList.add("lang-options__item--active")}}catch(e){l.e(e)}finally{l.f()}document.querySelector(".menu__lang-item--active").classList.remove("menu__lang-item--active");var u,i=_createForOfIteratorHelper(burgerLanguageItems);try{for(i.s();!(u=i.n()).done;){var s=u.value;s.querySelector(".menu__lang-value").dataset.lang===t&&s.classList.add("menu__lang-item--active")}}catch(e){i.e(e)}finally{i.f()}}currentLanguage.onclick=function(){languageForm.classList.toggle("lang-options--active"),arrow.classList.toggle("lang__arrow--active")},languageFormItems.forEach((function(t){t.onclick=function(t){e(t)}})),document.addEventListener("click",(function(e){var t=e.composedPath().includes(languageFormItems),o=e.composedPath().includes(currentLanguage);t||o||(languageForm.classList.remove("lang-options--active"),arrow.classList.remove("lang__arrow--active"))})),burgerLanguageItems.forEach((function(t){t.onclick=function(t){e(t),disableBurger()}}))}selectLanguage();var heroWrapper=document.querySelector(".parallax__inner"),heroLayers=document.querySelectorAll(".parallax__layer"),handleParallax=function(e){var t=heroWrapper.getBoundingClientRect().left,o=heroWrapper.getBoundingClientRect().top,r=e.clientX-t-.5*heroWrapper.offsetWidth,n=e.clientY-o-.5*heroWrapper.offsetHeight;heroLayers.forEach((function(e){var t=e.dataset.speed,o=-(r*t).toFixed(2),a=-(n*t).toFixed(2);e.setAttribute("style","transform: translate(".concat(o,"px, ").concat(a,"px);"))}))},reset=function(){heroLayers.forEach((function(e){e.removeAttribute("style")}))};heroWrapper.addEventListener("mousemove",handleParallax),heroWrapper.addEventListener("mouseout",reset);var heroScroll=document.querySelector(".hero__scroll");heroScroll.onclick=function(){document.getElementById("about").scrollIntoView({behavior:"smooth"},!0)};var heroPopup=document.querySelector(".hero__popup"),heroOverlay=document.querySelector(".hero__overlay"),heroPopupCloseBtn=document.querySelector(".hero-popup__closebtn");function enableLaunchPopup(){heroOverlay.classList.add("overlay--active"),heroPopup.classList.add("popup--active"),bodyScrollControls.disable()}function disableLaunchPopup(){heroOverlay.classList.remove("overlay--active"),heroPopup.classList.remove("popup--active"),bodyScrollControls.enable()}var headerBtn=document.querySelector(".header__btn");headerBtn.onclick=function(){enableLaunchPopup()};var heroBtn=document.querySelector(".hero__btn");heroBtn.onclick=function(){enableLaunchPopup()};var geoBtn=document.querySelector(".geo__btn");geoBtn.onclick=function(){enableLaunchPopup()};var appBtn=document.querySelector(".app__btn");appBtn.onclick=function(){enableLaunchPopup()},heroPopupCloseBtn.onclick=function(){disableLaunchPopup()},heroOverlay.onclick=function(){disableLaunchPopup()};var element=document.querySelector(".form__select"),choices=new Choices(element,{searchEnabled:!1,placeholder:!0,placeholderValue:"Выберите страну",shouldSort:!1,classNames:{selectedState:"is-selected"}}),geoPopupFirst=document.querySelector(".geo__popup-1"),geoPopupSecond=document.querySelector(".geo__popup-2"),geoOverlay=document.querySelector(".geo__overlay"),geoConnectBtn=document.querySelector(".geo__btn-connect"),geoSendBtn=document.querySelector(".geo-popup__btn-send"),geoOkBtn=document.querySelector(".geo-popup__btn-ok"),geoCloseBtns=document.querySelectorAll(".geo-popup__closebtn");function disableGeoPopup(){geoOverlay.classList.remove("overlay--active"),geoPopupFirst.style.visibility="hidden",geoPopupSecond.style.visibility="hidden",setTimeout((function(){geoOverlay.style.transform="translateX(0)",bodyScrollControls.enable()}),1e3)}geoConnectBtn.onclick=function(){geoOverlay.classList.add("overlay--active"),geoOverlay.style.transform="translateX(-33.33%)",geoPopupFirst.style.visibility="visible",geoPopupSecond.style.visibility="visible",bodyScrollControls.disable()},geoCloseBtns.forEach((function(e){e.addEventListener("click",(function(){disableGeoPopup()}))})),geoSendBtn.onclick=function(e){e.preventDefault(),geoOverlay.style.transform="translateX(-66.66%)"},geoOkBtn.onclick=function(){disableGeoPopup()},$((function(){$("#accordion").accordion({collapsible:!0,heightStyle:"content"})}));var activeCountryClass="countries__item--active",countriesTabs=Array.from(document.querySelectorAll(".countries__item")),maps=document.querySelectorAll(".geo-map__country");countriesTabs[0].classList.add(activeCountryClass);var path=countriesTabs[0].dataset.path;function addMapBackground(e){var t,o=_createForOfIteratorHelper(maps);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.style.opacity="0.5",r.dataset.target===e&&(r.style.opacity="1")}}catch(e){o.e(e)}finally{o.f()}}countriesTabs.forEach((function(e){e.onclick=function(){path=e.dataset.path;for(var t=0,o=countriesTabs;t<o.length;t++){o[t].classList.remove(activeCountryClass)}e.classList.add(activeCountryClass),addMapBackground(path)}}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImJvZHlTY3JvbGxDb250cm9scyIsInNjcm9sbEJhcldpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiZGlzYWJsZSIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJjb25jYXQiLCJ0aGlzIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNsYXNzTGlzdCIsImFkZCIsImVuYWJsZSIsInJlbW92ZSIsImJ1cmdlciIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZUJ0biIsIm92ZXJsYXkiLCJtZW51IiwibWVudUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVuYWJsZUJ1cmdlciIsImRpc2FibGVCdXJnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsIm1lbnVMaW5rIiwib25jbGljayIsIl9zdGVwIiwiYW5jaG9ycyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX2xvb3AiLCJhbmNob3IiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJsb2NrSUQiLCJnZXRBdHRyaWJ1dGUiLCJzdWJzdHIiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInMiLCJuIiwiZG9uZSIsImVyciIsImYiLCJsYW5ndWFnZXMiLCJuYW1lIiwic3ZnS2V5IiwiY3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlVmFsdWUiLCJjdXJyZW50TGFuZ3VhZ2VJY29uIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhcnJvdyIsImxhbmd1YWdlRm9ybSIsImxhbmd1YWdlRm9ybUl0ZW1zIiwiYnVyZ2VyTGFuZ3VhZ2VJdGVtcyIsInNlbGVjdExhbmd1YWdlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJldmVudCIsImxhbmciLCJ0YXJnZXQiLCJkYXRhc2V0IiwiX2kiLCJfbGFuZ3VhZ2VzIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJsYW5ndWFnZUZvcm1JdGVtIiwiX3N0ZXAzIiwiX2l0ZXJhdG9yMyIsImJ1cmdlckxhbmd1YWdlSXRlbSIsInRvZ2dsZSIsIndpdGhpbkJvdW5kYXJpZXMxIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJ3aXRoaW5Cb3VuZGFyaWVzMiIsImhlcm9XcmFwcGVyIiwiaGVyb0xheWVycyIsImhhbmRsZVBhcmFsbGF4IiwiZXZ0IiwicGFyYWxsYXhMZWZ0T2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInBhcmFsbGF4VG9wT2Zmc2V0IiwidG9wIiwiY29vcmRYIiwiY2xpZW50WCIsIm9mZnNldFdpZHRoIiwiY29vcmRZIiwiY2xpZW50WSIsIm9mZnNldEhlaWdodCIsImhlcm9MYXllciIsImxheWVyU3BlZWQiLCJzcGVlZCIsIngiLCJ0b0ZpeGVkIiwieSIsInJlc2V0IiwicmVtb3ZlQXR0cmlidXRlIiwiaGVyb1Njcm9sbCIsImhlcm9Qb3B1cCIsImhlcm9PdmVybGF5IiwiaGVyb1BvcHVwQ2xvc2VCdG4iLCJlbmFibGVMYXVuY2hQb3B1cCIsImRpc2FibGVMYXVuY2hQb3B1cCIsImhlYWRlckJ0biIsImhlcm9CdG4iLCJnZW9CdG4iLCJhcHBCdG4iLCJlbGVtZW50IiwiY2hvaWNlcyIsIkNob2ljZXMiLCJzZWFyY2hFbmFibGVkIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclZhbHVlIiwic2hvdWxkU29ydCIsImNsYXNzTmFtZXMiLCJzZWxlY3RlZFN0YXRlIiwiZ2VvUG9wdXBGaXJzdCIsImdlb1BvcHVwU2Vjb25kIiwiZ2VvT3ZlcmxheSIsImdlb0Nvbm5lY3RCdG4iLCJnZW9TZW5kQnRuIiwiZ2VvT2tCdG4iLCJnZW9DbG9zZUJ0bnMiLCJkaXNhYmxlR2VvUG9wdXAiLCJ2aXNpYmlsaXR5Iiwic2V0VGltZW91dCIsInRyYW5zZm9ybSIsIiQiLCJhY2NvcmRpb24iLCJjb2xsYXBzaWJsZSIsImhlaWdodFN0eWxlIiwiYWN0aXZlQ291bnRyeUNsYXNzIiwiY291bnRyaWVzVGFicyIsIkFycmF5IiwiZnJvbSIsIm1hcHMiLCJwYXRoIiwiYWRkTWFwQmFja2dyb3VuZCIsIl9zdGVwNCIsIl9pdGVyYXRvcjQiLCJtYXAiLCJvcGFjaXR5IiwidGFiIiwiX2kyIiwiX2NvdW50cmllc1RhYnMiXSwibWFwcGluZ3MiOiJvcENBQUEsSUFBTUEsS0FBT0MsU0FBU0QsS0FDaEJFLEtBQU9ELFNBQVNFLGdCQUdsQkMsbUJBQXFCLENBQ3ZCQyxlQUFpQkMsT0FBT0MsV0FBYVAsS0FBS1EsWUFFMUNDLFFBQVMsV0FDUFQsS0FBS1UsTUFBTUMsWUFBVyxHQUFBQyxPQUFNQyxLQUFLUixlQUFjLE1BQzNDLDRCQUE0QlMsS0FBS0MsVUFBVUMsYUFDN0NoQixLQUFLVSxNQUFNQyxZQUFjLE1BRTNCVCxLQUFLZSxVQUFVQyxJQUFJLGNBQ3JCLEVBRUFDLE9BQVEsV0FDTm5CLEtBQUtVLE1BQU1DLFlBQWMsS0FDekJULEtBQUtlLFVBQVVHLE9BQU8sY0FDeEIsR0FJSUMsT0FBU3BCLFNBQVNxQixjQUFjLGtCQUNoQ0MsU0FBV3RCLFNBQVNxQixjQUFjLGlCQUNsQ0UsUUFBVXZCLFNBQVNxQixjQUFjLG9CQUNqQ0csS0FBT3hCLFNBQVNxQixjQUFjLFNBQzlCSSxVQUFZekIsU0FBUzBCLGlCQUFpQixjQUU1QyxTQUFTQyxlQUNQSixRQUFRUCxVQUFVQyxJQUFJLG1CQUN0Qk8sS0FBS1IsVUFBVUMsSUFBSSxnQkFDbkJkLG1CQUFtQkssU0FDckIsQ0FFQSxTQUFTb0IsZ0JBQ1BMLFFBQVFQLFVBQVVHLE9BQU8sbUJBQ3pCSyxLQUFLUixVQUFVRyxPQUFPLGdCQUN0QmhCLG1CQUFtQmUsUUFDckIsQ0FFQUUsT0FBT1MsaUJBQWlCLFNBQVMsV0FDL0JGLGNBQ0YsSUFFQUwsU0FBU08saUJBQWlCLFNBQVMsV0FDakNELGVBQ0YsSUFFQUgs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QVUsSUFFeEIsQ0FBQyxPQUFBdkcsR0FBQXFHLEVBQUFqSCxFQUFBWSxFQUFBLFNBQUFxRyxFQUFBcEcsR0FBQSxDQUNILENBRUE2RixjQUFjcEgsU0FBUSxTQUFBOEgsR0FDcEJBLEVBQUk1SCxRQUFVLFdBQ1pzSCxLQUFPTSxFQUFJdEYsUUFBUWdGLEtBRW5CLFFBQUFPLEVBQUEsRUFBQUMsRUFBZ0JaLGNBQWFXLEVBQUFDLEVBQUFyRixPQUFBb0YsSUFBRSxDQUFuQkMsRUFBQUQsR0FDTjdJLFVBQVVHLE9BQU84SCxtQkFDdkIsQ0FFQVcsRUFBSTVJLFVBQVVDLElBQUlnSSxvQkFFbEJNLGlCQUFpQkQsS0FDbkIsQ0FDRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbi8vINCe0YLQutC70Y7Rh9C10L3QuNC1IC8g0LLQutC70Y7Rh9C10L3QuNC1INGB0LrRgNC+0LvQu9CwINC90LAg0YHRgtGA0LDQvdC40YbQtVxubGV0IGJvZHlTY3JvbGxDb250cm9scyA9IHtcbiAgc2Nyb2xsQmFyV2lkdGg6ICh3aW5kb3cuaW5uZXJXaWR0aCAtIGJvZHkuY2xpZW50V2lkdGgpLFxuXG4gIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICBib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7dGhpcy5zY3JvbGxCYXJXaWR0aH1weGA7XG4gICAgaWYgKC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICBib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzdG9wLXNjcm9sbCcpO1xuICB9LFxuXG4gIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgIGJvZHkuc3R5bGUubWFyZ2luUmlnaHQgPSBudWxsO1xuICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwnKTtcbiAgfVxufVxuXG4vLyBCdXJnZXJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItY29tbW9uJyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXJnZXInKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19vdmVybGF5Jyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKTtcblxuZnVuY3Rpb24gZW5hYmxlQnVyZ2VyKCkge1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktLWFjdGl2ZScpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtLWFjdGl2ZScpO1xuICBib2R5U2Nyb2xsQ29udHJvbHMuZGlzYWJsZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQnVyZ2VyKCkge1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktLWFjdGl2ZScpO1xuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLWFjdGl2ZScpO1xuICBib2R5U2Nyb2xsQ29udHJvbHMuZW5hYmxlKCk7XG59XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgZW5hYmxlQnVyZ2VyKCk7XG59KTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGRpc2FibGVCdXJnZXIoKTtcbn0pO1xuXG5tZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbiAobWVudUxpbmspIHtcbiAgbWVudUxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBkaXNhYmxlQnVyZ2VyKCk7XG4gIH1cbn0pXG5cbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc2FibGVCdXJnZXIoKTtcbn0pXG5cbi8vIFNtb290aCBzY3JvbGxcblxuY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZio9XCIjXCJdJylcblxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcbiAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICBibG9jazogJ3N0YXJ0J1xuICAgIH0pXG4gIH0pXG59XG5cbi8vIExhbmd1YWdlIHNlbGVjdGluZ1xuY29uc3QgbGFuZ3VhZ2VzID0gW1xuICB7XG4gICAgbmFtZTogJ3J1JyxcbiAgICB2YWx1ZTogJ9Cg0YPRgdGB0LrQuNC5JyxcbiAgICBzdmdLZXk6ICcjcnUnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndWEnLFxuICAgIHZhbHVlOiAnRW5nbGlzaCcsXG4gICAgc3ZnS2V5OiAnI3VhJ1xuICB9XG5dXG5cbi8vINCi0LXQutGD0YnQuNC5INGP0LfRi9C6INCyINCy0LXRgNGF0L3QtdC5INC/0LDQvdC10LvQuFxuY29uc3QgY3VycmVudExhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbGFuZycpO1xuY29uc3QgY3VycmVudExhbmd1YWdlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ19fdmFsdWUnKTtcbmNvbnN0IGN1cnJlbnRMYW5ndWFnZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ19faWNvbicpLmZpcnN0RWxlbWVudENoaWxkO1xuY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ19fYXJyb3cnKTtcblxuLy8g0K/Qt9GL0Log0LIg0YTQvtGA0LzQtSDQstGL0LHQvtGA0LBcbmNvbnN0IGxhbmd1YWdlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5nLW9wdGlvbnMnKTtcbmNvbnN0IGxhbmd1YWdlRm9ybUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmctb3B0aW9uc19faXRlbScpO1xuXG4vLyDQr9C30YvQuiDQsiDQsdGD0YDQs9C10YAt0LzQtdC90Y5cbmNvbnN0IGJ1cmdlckxhbmd1YWdlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9fbGFuZy1pdGVtJyk7XG5cbmZ1bmN0aW9uIHNlbGVjdExhbmd1YWdlKCkge1xuICAvLyDQktGL0LHQvtGAINGP0LfRi9C60LAg0LIg0LLQtdGA0YXQvdC10Lkg0L/QsNC90LXQu9C4XG4gIC8vINCf0YDQuCDQutC70LjQutC1INC90LAg0LLRi9Cx0YDQsNC90L3Ri9C5INGP0LfRi9C6INC+0YLQutGA0YvQstCw0LXRgtGB0Y8g0L7QutC90L4g0LTQu9GPINCy0YvQsdC+0YDQsCDQtNGA0YPQs9C+0LPQviDRj9C30YvQutCwXG4gIGN1cnJlbnRMYW5ndWFnZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGxhbmd1YWdlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdsYW5nLW9wdGlvbnMtLWFjdGl2ZScpO1xuICAgIGFycm93LmNsYXNzTGlzdC50b2dnbGUoJ2xhbmdfX2Fycm93LS1hY3RpdmUnKTtcbiAgfVxuXG4gIC8vINCk0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQvNC10L3Rj9C10YIg0Y/Qt9GL0Log0LIg0LLQtdGA0YXQvdC10Lkg0L/QsNC90LXQu9C4LCDQsiDRhNC+0YDQvNC1INC4INCyINCx0YPRgNCz0LXRgC3QvNC10L3RjiDQvdCwINCy0YvQsdGA0LDQvdC90YvQuVxuICBmdW5jdGlvbiBjaGFuZ2VMYW5ndWFnZShldmVudCkge1xuICAgIC8vINCf0L7Qu9GD0YfQsNC10LwgZGF0YS1sYW5nINGN0LvQtdC80LXQvdGC0LAsINC90LAg0LrQvtGC0L7RgNC+0Lwg0L/RgNC+0LjQt9C+0YjQtdC7INC60LvQuNC6XG4gICAgbGV0IGxhbmcgPSBldmVudC50YXJnZXQuZGF0YXNldC5sYW5nO1xuXG4gICAgLy8g0JzQtdC90Y/QtdC8INCy0YvQsdGA0LDQvdC90YvQuSDRj9C30YvQuiDQsiDQstC10YDRhdC90LXQuSDQv9Cw0L3QtdC70LhcbiAgICBmb3IgKGxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXMpIHtcbiAgICAgIGlmIChsYW5ndWFnZS5uYW1lID09PSBsYW5nKSB7XG4gICAgICAgIGN1cnJlbnRMYW5ndWFnZVZhbHVlLnRleHRDb250ZW50ID0gbGFuZ3VhZ2UudmFsdWU7XG4gICAgICAgIGN1cnJlbnRMYW5ndWFnZUljb24uc2V0QXR0cmlidXRlKCd4bGluazpocmVmJywgbGFuZ3VhZ2Uuc3ZnS2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDQnNC10L3Rj9C10Lwg0LDQutGC0LjQstC90YvQuSDRj9C30YvQuiDQsiDRhNC+0YDQvNC1XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctb3B0aW9uc19faXRlbS0tYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnbGFuZy1vcHRpb25zX19pdGVtLS1hY3RpdmUnKTtcblxuICAgIGZvciAobGV0IGxhbmd1YWdlRm9ybUl0ZW0gb2YgbGFuZ3VhZ2VGb3JtSXRlbXMpIHtcbiAgICAgIGlmIChsYW5ndWFnZUZvcm1JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5sYW5nLW9wdGlvbnNfX3ZhbHVlJykuZGF0YXNldC5sYW5nID09PSBsYW5nKSB7XG4gICAgICAgIGxhbmd1YWdlRm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnbGFuZy1vcHRpb25zX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDQnNC10L3Rj9C10Lwg0LDQutGC0LjQstC90YvQuSDRj9C30YvQuiDQsiDQsdGD0YDQs9C10YAg0LzQtdC90Y5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGFuZy1pdGVtLS1hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19sYW5nLWl0ZW0tLWFjdGl2ZScpO1xuXG4gICAgZm9yIChsZXQgYnVyZ2VyTGFuZ3VhZ2VJdGVtIG9mIGJ1cmdlckxhbmd1YWdlSXRlbXMpIHtcbiAgICAgIGlmIChidXJnZXJMYW5ndWFnZUl0ZW0ucXVlcnlTZWxlY3RvcignLm1lbnVfX2xhbmctdmFsdWUnKS5kYXRhc2V0LmxhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgYnVyZ2VyTGFuZ3VhZ2VJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2xhbmctaXRlbS0tYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g0J/RgNC4INC60LvQuNC60LUg0L3QsCDQutCw0LrQvtC5LdC70LjQsdC+INC40Lcg0LLQsNGA0LjQsNC90YLQvtCyINGP0LfRi9C60LAg0LIg0YTQvtGA0LzQtSDQstGL0LfRi9Cy0LDQtdGC0YHRjyDRhNGD0L3QutGG0LjRjyDRgdC80LXQvdGLINGP0LfRi9C60LBcbiAgbGFuZ3VhZ2VGb3JtSXRlbXMuZm9yRWFjaChsYW5ndWFnZUZvcm1JdGVtID0+IHtcbiAgICBsYW5ndWFnZUZvcm1JdGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNoYW5nZUxhbmd1YWdlKGV2ZW50KTtcbiAgICB9XG4gIH0pXG5cbiAgLy8g0J/RgNC4INC60LvQuNC60LUg0L3QsCDRgdCy0L7QsdC+0LTQvdGD0Y4g0L7QsdC70LDRgdGC0YwsINGE0L7RgNC80LAg0LLRi9Cx0L7RgNCwINGP0LfRi9C60LAg0YHQutGA0YvQstCw0LXRgtGB0Y9cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHdpdGhpbkJvdW5kYXJpZXMxID0gZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhsYW5ndWFnZUZvcm1JdGVtcyk7XG4gICAgY29uc3Qgd2l0aGluQm91bmRhcmllczIgPSBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGN1cnJlbnRMYW5ndWFnZSk7XG5cbiAgICBpZiAoIXdpdGhpbkJvdW5kYXJpZXMxICYmICF3aXRoaW5Cb3VuZGFyaWVzMikge1xuICAgICAgbGFuZ3VhZ2VGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xhbmctb3B0aW9ucy0tYWN0aXZlJyk7XG4gICAgICBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdsYW5nX19hcnJvdy0tYWN0aXZlJyk7XG4gICAgfVxuICB9KVxuXG4gIC8vINCf0LDQvdC10LvRjCDQstGL0LHQvtGA0LAg0Y/Qt9GL0LrQsCDQsiDQsdGD0YDQs9C10YAg0LzQtdC90Y4uINCf0YDQuCDQutC70LjQutC1INC90LAg0Y3Qu9C10LzQtdC90YIg0LLRi9C30YvQstCw0LXRgtGB0Y8g0YTQvdC60YbQuNGPINGB0LzQtdC90Ysg0Y/Qt9GL0LrQsFxuICBidXJnZXJMYW5ndWFnZUl0ZW1zLmZvckVhY2goYnVyZ2VyTGFuZ3VhZ2VJdGVtID0+IHtcbiAgICBidXJnZXJMYW5ndWFnZUl0ZW0ub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY2hhbmdlTGFuZ3VhZ2UoZXZlbnQpO1xuICAgICAgZGlzYWJsZUJ1cmdlcigpO1xuICAgIH1cbiAgfSlcbn1cbnNlbGVjdExhbmd1YWdlKCk7XG5cbi8vIEhlcm8gcGFyYWxsYXhcbmNvbnN0IGhlcm9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4X19pbm5lcicpO1xuY29uc3QgaGVyb0xheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbGxheF9fbGF5ZXInKTtcblxuY29uc3QgaGFuZGxlUGFyYWxsYXggPSAoZXZ0KSA9PiB7XG4gLy/RgNCw0LfQvNC10YAg0L7QsdC70LDRgdGC0Lgg0L/RgNC+0YHQvNC+0YLRgNCwXG4gIGNvbnN0IHBhcmFsbGF4TGVmdE9mZnNldCA9IGhlcm9XcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gIGNvbnN0IHBhcmFsbGF4VG9wT2Zmc2V0ID0gaGVyb1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gIC8vINC60L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDRjdC60YDQsNC90LBcbiAgY29uc3QgY29vcmRYID0gZXZ0LmNsaWVudFggLSBwYXJhbGxheExlZnRPZmZzZXQgLSAwLjUgKiBoZXJvV3JhcHBlci5vZmZzZXRXaWR0aDtcbiAgY29uc3QgY29vcmRZID0gZXZ0LmNsaWVudFkgLSBwYXJhbGxheFRvcE9mZnNldCAtIDAuNSAqICBoZXJvV3JhcHBlci5vZmZzZXRIZWlnaHQ7XG4gICAgXG4gIGhlcm9MYXllcnMuZm9yRWFjaCgoaGVyb0xheWVyKT0+e1xuICAgIGNvbnN0IGxheWVyU3BlZWQgPSBoZXJvTGF5ZXIuZGF0YXNldC5zcGVlZDtcbiAgICBjb25zdCB4ID0gLSAoY29vcmRYICogbGF5ZXJTcGVlZCkudG9GaXhlZCgyKTtcbiAgICBjb25zdCB5ID0gLSAoY29vcmRZICogbGF5ZXJTcGVlZCkudG9GaXhlZCgyKTtcbiAgICBoZXJvTGF5ZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weCk7YClcbiAgfSk7XG59O1xuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgaGVyb0xheWVycy5mb3JFYWNoKChoZXJvTGF5ZXIpPT57XG4gICAgaGVyb0xheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgfSk7XG59XG4gXG5oZXJvV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVQYXJhbGxheCk7XG5oZXJvV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJlc2V0KTtcblxuXG5cbi8vIEhlcm8gc2Nyb2xsINC40LvQuCBcItCb0LjRgdGC0LDQudGC0LUg0LLQvdC40LdcIlxuY29uc3QgaGVyb1Njcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zY3JvbGwnKTtcblxuaGVyb1Njcm9sbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgYWJvdXQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30sIHRydWUpO1xufVxuXG4vLyBQb3B1cHNcbi8vLyBMYXVuY2ggQXBwIFBvcHVwXG5jb25zdCBoZXJvUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fcG9wdXAnKTtcbmNvbnN0IGhlcm9PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX292ZXJsYXknKTtcbmNvbnN0IGhlcm9Qb3B1cENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tcG9wdXBfX2Nsb3NlYnRuJyk7XG5cbmZ1bmN0aW9uIGVuYWJsZUxhdW5jaFBvcHVwKCkge1xuICBoZXJvT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LS1hY3RpdmUnKTtcbiAgaGVyb1BvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLS1hY3RpdmUnKTtcbiAgYm9keVNjcm9sbENvbnRyb2xzLmRpc2FibGUoKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUxhdW5jaFBvcHVwKCkge1xuICBoZXJvT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LS1hY3RpdmUnKTtcbiAgaGVyb1BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwLS1hY3RpdmUnKTtcbiAgYm9keVNjcm9sbENvbnRyb2xzLmVuYWJsZSgpO1xufVxuXG4vLy8gSGVhZGVyIHBvcHVwXG5jb25zdCBoZWFkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idG4nKTtcblxuaGVhZGVyQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGVuYWJsZUxhdW5jaFBvcHVwKCk7XG59XG5cbi8vLyBIZXJvIHBvcHVwXG5jb25zdCBoZXJvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2J0bicpO1xuXG5oZXJvQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGVuYWJsZUxhdW5jaFBvcHVwKCk7XG59XG5cbi8vLyBHZW8gcG9wdXBcbmNvbnN0IGdlb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9fX2J0bicpO1xuXG5nZW9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgZW5hYmxlTGF1bmNoUG9wdXAoKTtcbn1cblxuLy8vIEFwcCBwb3B1cFxuY29uc3QgYXBwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcF9fYnRuJyk7XG5cbmFwcEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBlbmFibGVMYXVuY2hQb3B1cCgpO1xufVxuXG4vLy8gRGlzYWJsZSBsYXVuY2ggYXBwIHBvcHVwXG5oZXJvUG9wdXBDbG9zZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkaXNhYmxlTGF1bmNoUG9wdXAoKTtcbn1cblxuaGVyb092ZXJsYXkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgZGlzYWJsZUxhdW5jaFBvcHVwKCk7XG59XG5cbi8vIEN1c3RvbSBzZWxlY3QgKGdlbyBwb3B1cCBmb3JtKVxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zZWxlY3QnKTtcbmNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhlbGVtZW50LCB7XG4gIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICBwbGFjZWhvbGRlcjogdHJ1ZSxcbiAgcGxhY2Vob2xkZXJWYWx1ZTogJ9CS0YvQsdC10YDQuNGC0LUg0YHRgtGA0LDQvdGDJyxcbiAgc2hvdWxkU29ydDogZmFsc2UsXG4gIGNsYXNzTmFtZXM6IHtcbiAgICBzZWxlY3RlZFN0YXRlOiAnaXMtc2VsZWN0ZWQnLFxuICB9XG59KTtcblxuLy8gR2VvIHBvcHVwc1xuY29uc3QgZ2VvUG9wdXBGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9fX3BvcHVwLTEnKTtcbmNvbnN0IGdlb1BvcHVwU2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fcG9wdXAtMicpO1xuY29uc3QgZ2VvT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9fX292ZXJsYXknKTtcbmNvbnN0IGdlb0Nvbm5lY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VvX19idG4tY29ubmVjdCcpO1xuY29uc3QgZ2VvU2VuZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW8tcG9wdXBfX2J0bi1zZW5kJyk7XG5jb25zdCBnZW9Pa0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW8tcG9wdXBfX2J0bi1vaycpO1xuY29uc3QgZ2VvQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdlby1wb3B1cF9fY2xvc2VidG4nKTtcblxuLy8g0J/QtdGA0LXQuNGB0L/QvtC70YzQt9GD0LXQvNCw0Y8g0YTRg9C90LrRhtC40Y8sINGB0LrRgNGL0LLQsNGO0YnQsNGPINC/0L7Qv9Cw0L9cbmZ1bmN0aW9uIGRpc2FibGVHZW9Qb3B1cCgpIHtcbiAgZ2VvT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LS1hY3RpdmUnKTtcblxuICBnZW9Qb3B1cEZpcnN0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgZ2VvUG9wdXBTZWNvbmQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGdlb092ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuICAgIGJvZHlTY3JvbGxDb250cm9scy5lbmFibGUoKTtcbiAgfSwgMTAwMCk7XG59XG5cbi8vINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyBcItCf0L7QtNC70LrRjtGH0LjRgtGMINC80L7RjiDRgdGC0YDQsNC90YNcIiDQv9C+0Y/QstC70Y/QtdGC0YHRjyDQv9C+0L/QsNC/XG5nZW9Db25uZWN0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGdlb092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS0tYWN0aXZlJyk7XG4gIC8vICfQn9GA0L7RgdC60LDQu9GM0LfRi9Cy0LDQtdC8JyDQvdCwINCy0YLQvtGA0L7QuSDRjdC60YDQsNC9XG4gIGdlb092ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTMzLjMzJSknO1xuXG4gIGdlb1BvcHVwRmlyc3Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgZ2VvUG9wdXBTZWNvbmQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICBib2R5U2Nyb2xsQ29udHJvbHMuZGlzYWJsZSgpO1xufVxuXG4vLyDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutGA0LXRgdGC0LjQuiwg0L/QvtC/0LDQvyDQuNGB0YfQtdC30LDQtdGCXG5nZW9DbG9zZUJ0bnMuZm9yRWFjaChmdW5jdGlvbiAoY2xvc2VCdG4pIHtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZGlzYWJsZUdlb1BvcHVwKCk7XG4gIH0pXG59KVxuXG4vLyDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgXCLQntGC0L/RgNCw0LLQuNGC0YxcIiDQsiDQv9C10YDQstC+0Lwg0L7QutC90LUsINC/0LXRgNC10LzQtdGJ0LDQtdC80YHRjyDQvdCwINGC0YDQtdGC0LjQuSDRjdC60YDQsNC9XG5nZW9TZW5kQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBnZW9PdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC02Ni42NiUpJztcbn1cblxuLy8g0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIFwi0J/QvtC90Y/RgtC90L5cIiDQv9C+0L/QsNC/INGB0LrRgNGL0LLQsNC10YLRgdGPXG5nZW9Pa0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkaXNhYmxlR2VvUG9wdXAoKTtcbn1cblxuLy8gQWNjb3JkaW9uXG5cbiQoZnVuY3Rpb24gKCkge1xuICAkKFwiI2FjY29yZGlvblwiKS5hY2NvcmRpb24oe1xuICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIC8vICAgYWN0aXZlOiBmYWxzZSxcbiAgICBoZWlnaHRTdHlsZTogXCJjb250ZW50XCJcbiAgfSk7XG59KTtcblxuLy8gTWFwXG5jb25zdCBhY3RpdmVDb3VudHJ5Q2xhc3MgPSAnY291bnRyaWVzX19pdGVtLS1hY3RpdmUnO1xuY29uc3QgY291bnRyaWVzVGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50cmllc19faXRlbScpKTtcbmNvbnN0IG1hcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2VvLW1hcF9fY291bnRyeScpO1xuXG5jb3VudHJpZXNUYWJzWzBdLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ291bnRyeUNsYXNzKTtcbmxldCBwYXRoID0gY291bnRyaWVzVGFic1swXS5kYXRhc2V0LnBhdGg7XG5cbmZ1bmN0aW9uIGFkZE1hcEJhY2tncm91bmQocGF0aCkge1xuICBmb3IgKGxldCBtYXAgb2YgbWFwcykge1xuICAgIG1hcC5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgaWYgKG1hcC5kYXRhc2V0LnRhcmdldCA9PT0gcGF0aCkge1xuICAgICAgbWFwLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuICB9XG59XG5cbmNvdW50cmllc1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICB0YWIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBwYXRoID0gdGFiLmRhdGFzZXQucGF0aDtcblxuICAgIGZvciAobGV0IHRhYiBvZiBjb3VudHJpZXNUYWJzKSB7XG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDb3VudHJ5Q2xhc3MpO1xuICAgIH1cblxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNvdW50cnlDbGFzcyk7XG5cbiAgICBhZGRNYXBCYWNrZ3JvdW5kKHBhdGgpO1xuICB9XG59KSJdfQ==

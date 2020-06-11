/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_itemInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/itemInformation */ "./src/js/modules/itemInformation.js");
/* harmony import */ var _modules_personInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/personInformation */ "./src/js/modules/personInformation.js");



window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])(".slider_about .slider__item", ".slider_about .slider__inner", ".slider_about .slider__dots", ".slider_about .slider__wrapper", false);
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])(".slider_team .slider__item", ".slider_team .slider__inner", ".slider_team .slider__dots", ".slider_team .slider__wrapper", false, ".slider__next", ".slider__prev");
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])(".slider_inform .slider__item", ".slider_inform .slider__inner", ".slider_team .slider__dots", ".slider_inform .slider__wrapper", false, ".slider__next", ".slider__prev");
  Object(_modules_itemInformation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_personInformation__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/itemInformation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/itemInformation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const itemInformation = () => {
  const trigger = document.querySelectorAll("[data-show-inf]"),
        moreInform = document.querySelectorAll(".service__item-add"),
        closeInform = document.querySelectorAll(".service__item-button_black");
  trigger.forEach((item, i) => {
    item.addEventListener("click", () => {
      moreInform.forEach(elem => {
        elem.classList.remove("show");
      });
      moreInform[i].classList.add("show");
    });
  });
  closeInform.forEach((item, i) => {
    item.addEventListener("click", () => {
      moreInform[i].classList.remove("show");
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (itemInformation);

/***/ }),

/***/ "./src/js/modules/personInformation.js":
/*!*********************************************!*\
  !*** ./src/js/modules/personInformation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const personInformation = () => {
  const elems = document.querySelectorAll(".team__item");
  const itemWrapper = document.querySelector(".team__wrapper");
  const inform = document.querySelectorAll(".team__inform-wrapper");
  itemWrapper.addEventListener("click", e => {
    const target = e.target;

    if (target && target.classList.contains("team__item")) {
      inform.forEach(item => {
        item.style = "none";
      });
      elems.forEach((item, i) => {
        if (item == target) {
          let targetCoords = item.getBoundingClientRect();
          let xCoord = e.clientX - targetCoords.left;
          let yCoord = e.clientY - targetCoords.top;
          inform[i].style.cssText = `
					        display: block;
					        left:${xCoord}px;
                            top:${yCoord}px `;

          if (document.body.offsetWidth < document.body.scrollWidth) {
            inform[i].style.cssText = `
					        display: block;
					        left:${xCoord - (document.body.scrollWidth - document.body.offsetWidth + 20)}px;
                            top:${yCoord}px `;
          }
        }
      });
    }
  });
  elems.forEach(item => {
    item.addEventListener("mouseleave", () => {
      inform.forEach(item => {
        item.style = "none";
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (personInformation);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (contentSelector, innerSelector, dWrapperSelector = "", wrapperSelector, auto = true, nextSelector = "", prevSelector = "") => {
  const content = document.querySelectorAll(contentSelector),
        inner = document.querySelector(innerSelector),
        wrapper = document.querySelector(wrapperSelector),
        width = window.getComputedStyle(wrapper).width;
  let dotsWrapper,
      slideIndex = 1,
      margin = 0,
      dots = [];
  inner.style.cssText = `
        width: ${100 * content.length}%;
        transition: 0.4s all;
        `;

  const selectDot = () => {
    dots.forEach(item => {
      item.classList.remove("slider__dot_active");
    });
    dots[slideIndex - 1].classList.add("slider__dot_active");
  };

  const nextSlide = () => {
    if (margin == +width.slice(0, width.length - 2) * (content.length - 1)) {
      margin = 0;
    } else {
      margin += +width.slice(0, width.length - 2);
    }

    inner.style.transform = `translateX(-${margin}px)`;

    if (slideIndex == content.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    selectDot();
  };

  const prevSlide = () => {
    if (margin == 0) {
      margin = +width.slice(0, width.length - 2) * (content.length - 1);
    } else {
      margin -= +width.slice(0, width.length - 2);
    }

    inner.style.transform = `translateX(-${margin}px)`;

    if (slideIndex == 1) {
      slideIndex = content.length;
    } else {
      slideIndex--;
    }

    selectDot();
  };

  if (auto) {
    const timerInterval = setInterval(nextSlide, 4000);
  }

  if (nextSelector != "" && prevSelector != "") {
    const prev = document.querySelector(prevSelector),
          next = document.querySelector(nextSelector);
    prev.addEventListener("click", () => {
      prevSlide();
    });
    next.addEventListener("click", () => {
      nextSlide();
    });
  }

  if (contentSelector == ".slider_inform .slider__item") {
    dotsWrapper = document.querySelector(dWrapperSelector);
    dots = dotsWrapper.querySelectorAll(".slider__dot");
    dotsWrapper.addEventListener("click", e => {
      const target = e.target;
      dots.forEach((item, i) => {
        if (item == target) {
          slideIndex = i + 1;
          margin = +width.slice(0, width.length - 2) * i;
          inner.style.transform = `translateX(-${margin}px)`;
        }
      });
    });
    return;
  }

  dotsWrapper = document.querySelector(dWrapperSelector);

  for (let i = 0; i < content.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("data-slide-to", i + 1);
    div.classList.add("slider__dot");
    dotsWrapper.appendChild(div);
    dots.push(div);

    if (i == 0) {
      div.classList.add("slider__dot_active");
    }
  }

  dotsWrapper.addEventListener("click", e => {
    const target = e.target;
    dots.forEach((item, i) => {
      if (item == target) {
        slideIndex = i + 1;
        selectDot();
        margin = +width.slice(0, width.length - 2) * i;
        inner.style.transform = `translateX(-${margin}px)`;
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
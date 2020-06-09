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

window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])(".slider_about .slider__item", ".slider_about .slider__inner", ".slider_about .slider__dots", ".slider_about .slider__wrapper", false);
});

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (contentSelector, innerSelector, dWrapperSelector, wrapperSelector, auto = true, nextSelector = "", prevSelector = "") => {
  const content = document.querySelectorAll(contentSelector),
        inner = document.querySelector(innerSelector),
        dotsWrapper = document.querySelector(dWrapperSelector),
        wrapper = document.querySelector(wrapperSelector),
        width = window.getComputedStyle(wrapper).width;
  let slideIndex = 1,
      margin = 0,
      dots = [];
  inner.style.cssText = `
        width: ${100 * content.length}%;
        transition: 0.5s all;
        `;

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
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties */ \"./src/properties.js\");\n/* harmony import */ var _terrarium_terrarium_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terrarium/terrarium_view */ \"./src/terrarium/terrarium_view.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    let canvas = document.getElementById('vivari');\n    let ctx = canvas.getContext(\"2d\");\n    let terrarium = new _terrarium_terrarium_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas);\n    terrarium.start();\n\n    //testing on the window//\n    window.terrarium = terrarium;\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/objects/physics_object.js":
/*!***************************************!*\
  !*** ./src/objects/physics_object.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../properties */ \"./src/properties.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nclass PhysicsObject {\n\n    constructor(options) {\n\n        this.sprite = options.sprite;\n        this.clip = options.clip || {x: 0, y: 0};\n        this.pos = options.pos;\n        this.vel = {x: 0, y: 0};\n        this.size = options.size;\n        this.imgsize = options.imgsize || this.size;\n        this.imgpos = options.imgpos || {x: 0, y: 0};\n        this.age = 0;\n\n        this.held = false;\n    }\n\n    draw(ctx) {\n        ctx.drawImage(\n            this.sprite, \n            this.clip.x, \n            this.clip.y, \n            this.imgsize.x,\n            this.imgsize.y,\n            (this.pos.x + this.imgpos.x),\n            (this.pos.y + this.imgpos.y),\n            this.imgsize.x,\n            this.imgsize.y\n        );\n    }\n\n    move() {\n        if (!this.held) {\n            this.applyGravity();\n            this.deflect();\n            this.pos = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addVectors(this.pos, this.vel);\n        }\n        this.age++;\n    }\n\n    applyGravity() {\n        if ((this.pos.y + this.size.y) < _properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].terrarium.groundHeight) {\n            this.vel = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addVectors(this.vel, _properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].physics.gravity)\n        } else if ((this.pos.y + this.size.y) > _properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].terrarium.groundHeight) {\n            this.pos.y = (_properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].terrarium.groundHeight - this.size.y);\n            this.vel.y = 0;\n        }\n    }\n\n    deflect() {\n        if (this.pos.x <= 0 || (this.pos.x + this.size.x) >= _properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].terrarium.width) {\n            this.vel.x = -(this.vel.x/_properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].physics.impact);\n        } else if (this.pos.y <= 0 || (this.pos.y + this.size.y) >= _properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].terrarium.groundHeight) {\n            this.vel.y = -(this.vel.y/_properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"].physics.impact);\n        };\n    }\n\n    accelerate(vector) {\n        this.vel = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addVectors(this.vel, vector)\n    }\n\n    beDragged(prevPos, posChange) {\n        this.pos = {x: prevPos.x + posChange.x, y: prevPos.y + posChange.y};\n        this.vel = posChange;\n    }\n\n    startDrag() {\n        console.log(\"beep\");\n        this.held = true;\n    }\n\n    endDrag() {\n        this.held = false;\n    }\n\n    doesContainPoint(point) {\n        let top = this.pos.y;\n        let bottom = this.pos.y + this.size.y;\n        let left =  this.pos.x;\n        let right = this.pos.x + this.size.x;\n        if (\n            top <= point.y && bottom >= point.y &&\n            left <= point.x && right >= point.x\n        ) {\n            return true\n        } else {\n            return false\n        }\n    }\n\n}\n\n\nlet coinImage = new Image();\ncoinImage.src = \"http://i.imgur.com/2e9Fvrk.gif\"\nwindow.coin = new PhysicsObject({sprite: coinImage, pos:{x: 200, y: 200}, size:{x: 152, y: 150}});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhysicsObject);\n\n//# sourceURL=webpack:///./src/objects/physics_object.js?");

/***/ }),

/***/ "./src/properties.js":
/*!***************************!*\
  !*** ./src/properties.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst properties = {\n    game: {\n        offset: {\n            x: 2,\n            y: 2\n        }\n    },\n    terrarium: {\n        height: 500,\n        width: 800,\n        groundHeight: 400,\n    },\n    physics: {\n        gravity: { x: 0, y: 4 },\n        impact: 2,\n    },\n    sidebar: {\n        width: 200,\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (properties);\n\n//# sourceURL=webpack:///./src/properties.js?");

/***/ }),

/***/ "./src/terrarium/terrarium.js":
/*!************************************!*\
  !*** ./src/terrarium/terrarium.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects_physics_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/physics_object */ \"./src/objects/physics_object.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nclass Terrarium {\n    constructor() {\n        this.physicsObjects = [];\n        this.dragPos = {x: null, y: null};\n        this.heldObj = null;\n\n        this.addPhysicsObject = this.addPhysicsObject.bind(this);\n    }\n\n    draw(ctx) {\n        this.physicsObjects.forEach((obj) => {\n            obj.draw(ctx);\n        });\n    }\n\n    move() {\n        this.physicsObjects.forEach((obj) => {\n            obj.move();\n        });\n    }\n\n    addPhysicsObject(obj) {\n        this.physicsObjects.push(obj);\n    }\n\n    handleMouseDown(mousePos) {\n        let that = this;\n        this.dragPos = mousePos;\n        let target = this.physicsObjects.find((obj) => \n            obj.doesContainPoint(mousePos)\n        )\n        if (target) {\n            target.startDrag();\n            that.heldObj = target;\n        }\n    }\n\n    handleMouseUp() {\n        if (this.heldObj) {\n            this.heldObj.endDrag();\n            this.heldObj = null;\n        }\n    }\n\n    handleDrag(mousePos) {\n        let posChange = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findVector(this.dragPos, mousePos);\n        this.dragPos = mousePos;\n        if (this.heldObj) {\n            let prevPos = this.heldObj.pos;\n            this.heldObj.beDragged(prevPos, posChange);\n        }\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Terrarium);\n\n//# sourceURL=webpack:///./src/terrarium/terrarium.js?");

/***/ }),

/***/ "./src/terrarium/terrarium_view.js":
/*!*****************************************!*\
  !*** ./src/terrarium/terrarium_view.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _terrarium__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrarium */ \"./src/terrarium/terrarium.js\");\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties */ \"./src/properties.js\");\n\n\n\nclass TerrariumView {\n    constructor(ctx, canvas) {\n        this.terrarium = new _terrarium__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.mousePos = {x: null, y: null};\n        this.mouseDown = false;\n\n        this.setupMouse.bind(this);\n    }\n\n    start() {\n        setInterval(() => {\n            this.ctx.clearRect(0, 0, _properties__WEBPACK_IMPORTED_MODULE_1__[\"default\"].terrarium.width, _properties__WEBPACK_IMPORTED_MODULE_1__[\"default\"].terrarium.height);\n            this.terrarium.move();\n            this.terrarium.draw(this.ctx);\n        }, 20);\n        this.setupMouse();\n    }\n\n    setupMouse() {\n        this.canvas.addEventListener('mousemove', (e) => {\n            this.mousePos.x = e.clientX - _properties__WEBPACK_IMPORTED_MODULE_1__[\"default\"].game.offset.x;\n            this.mousePos.y = e.clientY - _properties__WEBPACK_IMPORTED_MODULE_1__[\"default\"].game.offset.y;\n            if (this.mouseDown = true) {\n                this.terrarium.handleDrag(this.mousePos);\n            }\n        })\n        this.canvas.addEventListener('mousedown', (e) => {\n            this.terrarium.handleMouseDown(this.mousePos);\n            this.mouseDown = true;\n        })\n        this.canvas.addEventListener('mouseup', (e) => {\n            this.terrarium.handleMouseUp(this.mousePos);\n            this.mouseDown = false;\n        })\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TerrariumView);\n\n//# sourceURL=webpack:///./src/terrarium/terrarium_view.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n    addVectors: (vec1, vec2) => {\n        return {x: ((vec1.x + vec2.x)), y: ((vec1.y+vec2.y))}\n    },\n    findVector: (point1, point2) => {\n        return {x: point2.x-point1.x, y: point2.y-point1.y}\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
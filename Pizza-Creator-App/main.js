(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-choices></app-choices>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _choices_choices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choices/choices.component */ "./src/app/choices/choices.component.ts");
/* harmony import */ var _pizza_pizza_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pizza/pizza.component */ "./src/app/pizza/pizza.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _choices_choices_component__WEBPACK_IMPORTED_MODULE_3__["ChoicesComponent"],
                _pizza_pizza_component__WEBPACK_IMPORTED_MODULE_4__["PizzaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_pizza_pizza_component__WEBPACK_IMPORTED_MODULE_4__["PizzaComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/choices/choices.component.css":
/*!***********************************************!*\
  !*** ./src/app/choices/choices.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px;\n}\n\n.name {\n  width: calc(14% - 24px);\n  padding: 1%;\n  text-align: center;\n  background-color: gold;\n  margin: 4px;\n  border-radius: 8px;\n  box-shadow: 2px 2px 1px 1px #ffd701d4;\n}\n\n.name:hover {\n  cursor: pointer;\n  background-color: goldenrod;\n}\n\n.icon {\n   display: inherit;\n   height: 20px;\n}\n\n.createPizza {\n  margin: 0 auto;\n  display: flex;\n}\n"

/***/ }),

/***/ "./src/app/choices/choices.component.html":
/*!************************************************!*\
  !*** ./src/app/choices/choices.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"name\" *ngFor= \"let topping of toppings\">\n    <div (click)= selectToppings(topping)>\n        <span class=\" icon {{topping}}\"></span>\n        <span>\n          {{topping}}\n        </span>\n    </div>\n  </div>\n</div>\n<div class=\"createPizza\">\n    <button (click)= createPizza() >Create Pizza</button>\n</div>\n\n<div #pizza></div>\n"

/***/ }),

/***/ "./src/app/choices/choices.component.ts":
/*!**********************************************!*\
  !*** ./src/app/choices/choices.component.ts ***!
  \**********************************************/
/*! exports provided: ChoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesComponent", function() { return ChoicesComponent; });
/* harmony import */ var _pizza_pizza_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pizza/pizza.component */ "./src/app/pizza/pizza.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChoicesComponent = /** @class */ (function () {
    function ChoicesComponent(resolver) {
        this.resolver = resolver;
        this.selectedToppings = [];
        this.toppings = ['anchovy', 'bacon', 'basil', 'chili', 'mozzarella',
            'mushroom', 'olive', 'onion', 'pepper', 'pepperoni',
            'prawn', 'sweetcorn', 'tomato'];
    }
    ChoicesComponent.prototype.selectToppings = function (topping) {
        console.log(topping);
        if (this.selectedToppings.indexOf(topping) === -1) {
            this.selectedToppings.push(topping);
        }
        else {
            this.selectedToppings.splice(this.selectedToppings.indexOf(topping), 1);
        }
    };
    ChoicesComponent.prototype.createPizza = function () {
        var pizzaFactory = this.resolver.resolveComponentFactory(_pizza_pizza_component__WEBPACK_IMPORTED_MODULE_0__["PizzaComponent"]);
        var pizza = this.pizza.createComponent(pizzaFactory);
        this.selectedToppings = [];
        pizza.instance.toppings = this.selectedToppings;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pizza', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], ChoicesComponent.prototype, "pizza", void 0);
    ChoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choices',
            template: __webpack_require__(/*! ./choices.component.html */ "./src/app/choices/choices.component.html"),
            styles: [__webpack_require__(/*! ./choices.component.css */ "./src/app/choices/choices.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], ChoicesComponent);
    return ChoicesComponent;
}());



/***/ }),

/***/ "./src/app/pizza/pizza.component.css":
/*!*******************************************!*\
  !*** ./src/app/pizza/pizza.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pizza {\n  background-image: url('/assets/images/base.svg');\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.toppings {\n  position: absolute;\n  z-index: 100;\n  top: 7%;\n  left: 50%;\n}\n\n.content {\n  height: 30px;\n  width: 30px;\n  margin: 15px;\n  -webkit-transform-origin: -80px 0px;\n          transform-origin: -80px 0px;\n}\n\n.spacer {\n  position: absolute;\n}\n\n.anchovy, .bacon, .basil, .chili, .mushroom, .olive, .onion, .pepper, .pepperoni, .prawn, .sweetcorn, .tomato, .mozzarella {\n  background-repeat: no-repeat;\n}\n"

/***/ }),

/***/ "./src/app/pizza/pizza.component.html":
/*!********************************************!*\
  !*** ./src/app/pizza/pizza.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pizza\">\n  <div class=\"toppings\" *ngFor=\"let topping of toppings; let i = index\">\n    <div class = \"spacer\">\n    </div>\n    <div class=\"content {{topping}}\" [ngStyle] = \"getMyStyles(i)\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pizza/pizza.component.ts":
/*!******************************************!*\
  !*** ./src/app/pizza/pizza.component.ts ***!
  \******************************************/
/*! exports provided: PizzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaComponent", function() { return PizzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PizzaComponent = /** @class */ (function () {
    function PizzaComponent() {
    }
    PizzaComponent.prototype.ngOnInit = function () {
        console.log(this.toppings);
    };
    PizzaComponent.prototype.getMyStyles = function (i) {
        console.log(this.translate(i));
        var myStyles = {
            'transform': this.translate(i),
        };
        return myStyles;
    };
    PizzaComponent.prototype.translate = function (i) {
        var x = -30 + Math.round((50 * Math.cos(i * (2 * Math.PI / 15)))) + 'px';
        var y = 20 + Math.round((26 * Math.sin(i * (2 * Math.PI / 15)))) + 'px';
        var val = "translate(" + x + ", " + y + ")";
        return val;
    };
    PizzaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pizza',
            template: __webpack_require__(/*! ./pizza.component.html */ "./src/app/pizza/pizza.component.html"),
            styles: [__webpack_require__(/*! ./pizza.component.css */ "./src/app/pizza/pizza.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PizzaComponent);
    return PizzaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aayusharora/Desktop/pizza/myapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
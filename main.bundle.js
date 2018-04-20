webpackJsonp([1,4],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(322);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageContentComponent = (function () {
    function PageContentComponent(route) {
        this.route = route;
        this.pages = [
            { id: 1, name: 'Main' },
            { id: 2, name: 'About' },
            { id: 3, name: 'Projects' },
            { id: 4, name: 'Resume' }
        ];
    }
    PageContentComponent.prototype.ngOnInit = function () {
        this.defaultPage = this.pages[0];
        this.selectedPage = this.pages[0];
    };
    PageContentComponent.prototype.onSelect = function (page) {
        this.selectedPage = page;
    };
    PageContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-page-content',
            template: __webpack_require__(666),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], PageContentComponent);
    return PageContentComponent;
    var _a;
}());
//# sourceMappingURL=X:/code/Website/erikhoffman-github-angular/src/page-content.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=X:/code/Website/erikhoffman-github-angular/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_content_page_content_component__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__page_content_page_content_component__["a" /* PageContentComponent */], data: { section: 'Home' } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__page_content_page_content_component__["a" /* PageContentComponent */], data: { section: 'About' } },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_2__page_content_page_content_component__["a" /* PageContentComponent */], data: { section: 'Portfolio' } },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_2__page_content_page_content_component__["a" /* PageContentComponent */], data: { section: 'Resume' } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=X:/code/Website/erikhoffman-github-angular/src/app-routing.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Erik Hoffman Website!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(665),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=X:/code/Website/erikhoffman-github-angular/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_content_page_content_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(506);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_content_page_content_component__["a" /* PageContentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=X:/code/Website/erikhoffman-github-angular/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=X:/code/Website/erikhoffman-github-angular/src/environment.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<app-page-content><router-outlet></router-outlet></app-page-content>\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"navbar\">\n    <ul class=\"header-list\">\n      <li *ngFor=\"let page of pages\">\n        <a class=\"header-link\"\n        [class.selected]=\"page === selectedPage || (page === defaultPage && !selectedPage)\"\n        (click)=\"onSelect(page)\" routerLink=\"/{page.name}\">\n        {{page.name}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"centre\">\n  <div class=\"dialog\">\n    <div class=\"curtain\">\n      <div class=\"curtain__panel curtain__panel--left\">\n      </div>\n      <div class=\"curtain__panel curtain__panel--right\">\n      </div>\n    </div>\n    <div class=\"dialog-text\">\n      <div id=\"main-text\" *ngIf=\"selectedPage.id === 1\">\n        <br><br>\n        <h1 id=\"main-name\">Erik Hoffman</h1>\n        <br>\n        Welcome to my website and portfolio.\n        <br><br>\n        Currently employed by:\n        <br><br>\n        <b>CIBC as an Intermediate Application Developer (Full Stack)</b>\n        <br><br>\n        Currently learning:\n        <br><br>\n        <b>Amazon Web Services through Linuxacademy.com</b>\n        <br><br><br><br>\n        <div class=\"portfolio-section\">\n          <a class=\"linkind\" href=\"toughCardGameSimulator/toughCardGameSimulator.html\">\n            <div id=\"cardGameLink\"><font size=\"6\">Current Side Project</font></div>\n          </a>\n        </div>\n        <br><br>\n      </div>\n\n\n\n      <div id=\"about-text\" *ngIf=\"selectedPage.id === 2\">\n        <br><br>I entered the Computer Science Honours program at University of Guelph in Fall 2012. <br><br> I have a minor\n        in mathematics and have completed a large variety of electives in Computer Science. Some of my favourites include artificial\n        intelligence and information organization and retrieval. <br><br>I graduated in Winter 2016.<br><br><br>\n      </div>\n\n\n\n\n      <div id=\"portfolio-text\" *ngIf=\"selectedPage.id === 3\">\n        <br><br>\n        <div class=\"portfolio-section\">\n          <a class=\"link-portfolio\" href=\"https://bitbucket.org/ErikHoffman/connect-four-elixir\">Functional Connect Four in Elixir</a>\n          <br>\n          <p>Created in a functional programming study group during my final semester at University of Guelph.<br><br>\n          Used the Elixir programming language to create a connect four game to communicate over IRC with other members of the class.\n          Learned about the advantages of functional as well\n          as the hurdles one must overcome (mutability, recursion, etc.).\n        </div>\n\n        <div class=\"portfolio-section\">\n          <a class=\"link-portfolio\" href=\"../stateM_creator/stateM_creator.html\">\n            State Machine Creator\n          </a>\n          <p>\n          A UI made in phaserJS that lets you create simple state machines and save them to a file.\n          <br>This is a work in progress as I want to keep up to date with javascript and also try different 2d engines for web.<br>\n          <p>\n        </div>\n\n        <div class=\"portfolio-section\">\n          <a class=\"link-portfolio\" href=\"https://bitbucket.org/benbaird/truform\">Truform App</a>\n          <p>\n            An app made in a team for a course at University of Guelph. The entire course followed the development of\n            this app and was graded along the way during meetings with the professor.\n            Myself and three others created this using an Arduino computer with a gyroscope and accelerometer\n            linked to a smartphone to measure workout form from a user.\n            <br><br>My major role in the project involved creating the algorithm that would measure the data of\n            the workout and give output on whether or not the form of the\n            workout was performed well.\n          </p>\n        </div>\n        <br><br><br>\n      </div>\n\n      <div class=\"resume-text\" *ngIf=\"selectedPage.id === 4\">\n        <a class=\"linkind\">Download as PDF</a>\n      </div>\n    </div>\n\n    <div class=\"footer\">\n      <br>This website is hosted on github pages <a class=\"link-orange\" href=\"https://github.com/ErikHoffman?tab=repositories\"><div id=\"github\">Here</div></a>\n      <br>Contact Me:<br>\n      Email: erik_hoffman@outlook.com<br>\n      <a href=\"https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button\">\n      <img class=\"bounce-image\" id =\"linkedinlogo\" src=\"../../assets/linkedin.png\" title=\"Link to my linkedin profile\" style=\"height:45px;width:45px;position:relative;\"></a>\n      <a href=\"https://bitbucket.org/ErikHoffman/profile/repositories?visibility=all\">\n      <img class=\"bounce-image\" id =\"bitbucketlogo\" src=\"../../assets/bitbucket_new_logo.png\" title=\"Link to my bitbucket\" style=\"width:45px;height:45px;position:relative;\"></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ })

},[699]);
//# sourceMappingURL=main.bundle.map
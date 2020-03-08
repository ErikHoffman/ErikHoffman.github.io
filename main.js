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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_content_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-content/page */ "./src/app/page-content/page.ts");
/* harmony import */ var _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-content/page-content.component */ "./src/app/page-content/page-content.component.ts");
/* harmony import */ var _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/osmosisSolitaire/osmosis-solitaire-component */ "./src/app/projects/osmosisSolitaire/osmosis-solitaire-component.ts");
/* harmony import */ var _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/stateMachineCreator/state-machine-creator-component */ "./src/app/projects/stateMachineCreator/state-machine-creator-component.ts");
/* harmony import */ var _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/birthdayCard/birthday-card-component */ "./src/app/projects/birthdayCard/birthday-card-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__["PageContentComponent"], data: { page: _page_content_page__WEBPACK_IMPORTED_MODULE_2__["pages"][0] } },
    { path: 'projects', component: _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__["PageContentComponent"], data: { page: _page_content_page__WEBPACK_IMPORTED_MODULE_2__["pages"][1] }, children: [
            { path: 'osmosis-solitaire', component: _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_4__["OsmosisSolitaireComponent"] },
            { path: 'state-machine-creator', component: _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_5__["StateMachineComponent"] },
            { path: 'happybirthday', component: _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_6__["BirthdayCardComponent"] }
        ] },
    { path: 'resume', component: _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__["PageContentComponent"], data: { page: _page_content_page__WEBPACK_IMPORTED_MODULE_2__["pages"][2] } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-content/page-content.component */ "./src/app/page-content/page-content.component.ts");
/* harmony import */ var _directives_portfolio_content_portfolio_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/portfolio-content/portfolio-content.component */ "./src/app/directives/portfolio-content/portfolio-content.component.ts");
/* harmony import */ var _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/osmosisSolitaire/osmosis-solitaire-component */ "./src/app/projects/osmosisSolitaire/osmosis-solitaire-component.ts");
/* harmony import */ var _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/stateMachineCreator/state-machine-creator-component */ "./src/app/projects/stateMachineCreator/state-machine-creator-component.ts");
/* harmony import */ var _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/birthdayCard/birthday-card-component */ "./src/app/projects/birthdayCard/birthday-card-component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_5__["PageContentComponent"],
                _directives_portfolio_content_portfolio_content_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioContentComponent"],
                _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_7__["OsmosisSolitaireComponent"],
                _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_8__["StateMachineComponent"],
                _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_9__["BirthdayCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/portfolio-content/portfolio-content.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/directives/portfolio-content/portfolio-content.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-section\">\r\n    <div class=\"portfolio-section-header\">\r\n        <!-- routerLink does not work for external links -->\r\n        <a *ngIf=\"localLink.length != 0\" class=\"portfolio-section-link\" routerLink=\"{{localLink}}\">\r\n            <div>{{name}}<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"right-arrow\" viewBox=\"0 0 24 24\">\r\n\t\t<path d=\"M24 12l-12-8v5h-12v6h12v5z\"/></svg></div>\r\n        </a>\r\n        <a *ngIf=\"link.length != 0\" target=\"_blank\" class=\"portfolio-section-link\" href=\"{{link}}\">\r\n            <div>{{name}}<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"right-arrow\" viewBox=\"0 0 24 24\">\r\n\t\t<path d=\"M24 12l-12-8v5h-12v6h12v5z\"/></svg></div>\r\n        </a>\r\n    </div>\r\n    <div class=\"portfolio-section-date\">{{dates}}</div>\r\n    <br>\r\n    <div class=\"portfolio-section-description\">\r\n        <div [innerHTML]=\"description\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/directives/portfolio-content/portfolio-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/directives/portfolio-content/portfolio-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PortfolioContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioContentComponent", function() { return PortfolioContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PortfolioContentComponent = /** @class */ (function () {
    function PortfolioContentComponent() {
    }
    PortfolioContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-section',
            inputs: ['name', 'description', 'dates', 'localLink', 'link'],
            template: __webpack_require__(/*! ./portfolio-content.component.html */ "./src/app/directives/portfolio-content/portfolio-content.component.html")
        })
    ], PortfolioContentComponent);
    return PortfolioContentComponent;
}());



/***/ }),

/***/ "./src/app/directives/portfolio-content/portfolio.ts":
/*!***********************************************************!*\
  !*** ./src/app/directives/portfolio-content/portfolio.ts ***!
  \***********************************************************/
/*! exports provided: projects, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var projects = [
    { id: 1,
        name: 'State Machine Creator',
        description: 'A UI that lets you create simple state machines and save them to a file.' +
            '<br><br>I enjoy using state machines to create very basic workflows in order to plan applications or algorithms' +
            ' so making this tool seemed to make sense.',
        dates: '2015 - Ongoing',
        localLink: '../projects/state-machine-creator',
        link: ''
    },
    { id: 2,
        name: 'Osmosis Solitaire Simulator',
        description: 'Osmosis is a very tough Solitaire variation that is nothing more than a test' +
            ' of patience to see how many games you can attempt before you give up.' +
            '<br><br>No strategy is involved but I was interested in the win ratio to see if this game is even worth' +
            ' playing, so I coded the game rules into typescript and ran it over many simulations to find the win ratio' +
            ' is between 0.007 and 0.008 percent. Doesn\'t sound very worth it to me!',
        dates: '2016 - 2018',
        localLink: '../projects/osmosis-solitaire',
        link: ''
    },
    { id: 3,
        name: 'Functional Connect Four in Elixir',
        description: 'Created in a functional programming study group during my final semester at University of Guelph.' +
            '<br><br>Used the Elixir programming language to create a connect four game to communicate over IRC with other members of the class.' +
            ' Learned about the advantages of functional as well as the hurdles one must overcome (mutability, recursion, etc.).',
        dates: '2016',
        localLink: '',
        link: 'https://bitbucket.org/ErikHoffman/connect-four-elixir'
    },
    { id: 4,
        name: 'A* Search in Python',
        description: 'Finding optimal paths for movement in a 2D space in Python.' +
            '<br><br>Done while studying movement algorithms and implementation for RTS games.',
        dates: '2016',
        localLink: '',
        link: 'https://bitbucket.org/ErikHoffman/a-search-rts/src/master/'
    },
    { id: 5,
        name: 'Truform - Android Workout App',
        description: 'Group project for a course at University of Guelph that followed the development of' +
            ' an Android app which was developed using agile methods.' +
            '<br><br>Created using an Arduino computer with a gyroscope and accelerometer' +
            ' linked to a smartphone to measure workout form.' +
            ' My role in the project was creating the algorithm that measures the data of' +
            ' the workout and gives output on whether or not the form of the' +
            ' workout was performed well.',
        dates: '2015',
        localLink: '',
        link: 'https://bitbucket.org/benbaird/truform'
    }
];
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/page-content/page-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/page-content/page-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-portfolio-wrapper {\r\n    position: absolute;\r\n    /* background-color: #9BB1D0; */\r\n    background-color: #0F1626;\r\n    padding: 20px;\r\n    right: -3px;\r\n    z-index: 1;\r\n    border: 1px solid black;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.go-to-top {\r\n    display: none;\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.dialog-top-nav {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 141px;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .dialog-top-nav {\r\n        width: 90%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/page-content/page-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/page-content/page-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-content\" (wheel)=\"onScroll($event)\" *ngIf=\"selectedPage.id >= 0 && !this.routedPage.includes('projects/')\"> -->\r\n<div class=\"page-content\" *ngIf=\"!this.routedPage.includes('projects/')\">\r\n    <div class=\"background-image\" *ngIf=\"!this.routedPage.includes('projects/')\"></div>\r\n    <div class=\"header\">\r\n        <div class=\"navbar\">\r\n            <ul class=\"header-list\">\r\n                <li *ngFor=\"let page of pagesList\">\r\n                    <a class=\"header-link\" [class.selected]=\"page === selectedPage || (page === defaultPage && !selectedPage)\" (click)=\"onSelect(page)\">\r\n                        <div class=\"header-link-row\">\r\n                            <div [class]=\"page.class\"></div>\r\n                            <a>{{page.name}}</a>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"mobile-header\">\r\n                <div class=\"mobile-navigation\">\r\n                    <div class=\"container\" id=\"hamburger\" (click)=\"hamburgerClick()\">\r\n                        <div class=\"bar1\"></div>\r\n                        <div class=\"bar2\"></div>\r\n                        <div class=\"bar3\"></div>\r\n                    </div>\r\n                    <h1 class=\"mobile-header-title\">Erik Hoffman</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [style.display]=\"getDropdownStatus()\" id=\"mobile-dropdown-main\" class=\"mobile-dropdown\">\r\n            <div *ngFor=\"let page of pagesList\">\r\n                <button (click)=\"onSelect(page, 'true')\" class=\"mobile-dropdown-option\">\r\n              <div class=\"header-link-row\">\r\n                <img src={{page.imgUrl}} class=\"header-link-image\">\r\n                {{page.name}}\r\n              </div>\r\n            </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"centre\">\r\n        <div class=\"dialog-top-nav\">\r\n            <div class=\"about-portfolio-wrapper\">\r\n                <div class=\"portfolio-section\" style=\"display: flex;\">\r\n                    <div routerLink=\"../projects/state-machine-creator\" class=\"portfolio-section-link main-page-link\">\r\n                        Current Side Project\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"right-arrow\" viewBox=\"0 0 24 24\">\r\n\t\t\t\t\t\t\t<path d=\"M24 12l-12-8v5h-12v6h12v5z\"/></svg>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"dialog\">\r\n            <div class=\"curtain\">\r\n                <div class=\"curtain__panel curtain__panel--left\">\r\n                </div>\r\n                <div class=\"curtain__panel curtain__panel--right\">\r\n                </div>\r\n            </div>\r\n            <div class=\"dialog-text\">\r\n                <div #maintext id=\"main-text\" *ngIf=\"selectedPage.id === 1\">\r\n                    <h1 class=\"page-title\">About Me</h1>\r\n                    -Computer Science Graduate-<br>-Full Stack Developer-<br><br> Welcome to my website and portfolio.<br><br> My name is Erik Hoffman and I'm a software developer who enjoys using code to solve problems and create cool stuff! See my projects\r\n                    to check out my personal work or view my resume for my professional experience.\r\n                    <br><br>\r\n                </div>\r\n\r\n                <div #portfoliotext id=\"portfolio-text\" *ngIf=\"selectedPage.id === 2\">\r\n                    <h1 class=\"page-title\">Projects</h1>\r\n\r\n                    <div class=\"portfolio-wrapper\">\r\n                        <div *ngFor=\"let project of projectsList\">\r\n                            <app-portfolio-section name={{project.name}} description={{project.description}} dates={{project.dates}} localLink={{project.localLink}} link={{project.link}}>\r\n                            </app-portfolio-section>\r\n                        </div>\r\n                    </div>\r\n                    <br><br><br>\r\n                </div>\r\n\r\n                <div #resumetext class=\"resume-text\" *ngIf=\"selectedPage.id === 3\">\r\n                    <h1 class=\"page-title\">Resume</h1>\r\n                    <a class=\"uncontained-link\" target=\"_blank\" href=\"assets/Erik_CIS_Resume.pdf\">Download as PDF</a>\r\n                    <!-- <a id=\"sorted-area\">List</a>\r\n          <button (click)=\"startsort()\">Sort me</button> -->\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <br>\r\n                <a class=\"link-orange\" target=\"_blank\" href=\"https://github.com/ErikHoffman?tab=repositories\">\r\n                    <div id=\"github\">This website is hosted on github pages</div>\r\n                </a><br>\r\n                <a class=\"link-orange\" target=\"_blank\" href=\"https://bitbucket.org/ErikHoffman/erik-hoffman-website-angular-4\">\r\n                    <div id=\"bitbucket\">Check out the unbuilt Angular code!</div>\r\n                </a>\r\n                <br>Contact Me:<br> Email: erik_hoffman@outlook.com<br>\r\n                <a href=\"https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button\">\r\n                    <img class=\"bounce-image\" id=\"linkedinlogo\" src=\"../../assets/linkedin.png\" title=\"Link to my linkedin profile\" style=\"height:45px;width:45px;position:relative;\"></a>\r\n                <a href=\"https://bitbucket.org/ErikHoffman/profile/repositories?visibility=all\">\r\n                    <img class=\"bounce-image\" id=\"bitbucketlogo\" src=\"../../assets/bitbucket_new_logo.png\" title=\"Link to my bitbucket\" style=\"width:45px;height:45px;position:relative;\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<button class=\"button go-to-top\">^ Back To Top ^</button>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/page-content/page-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/page-content/page-content.component.ts ***!
  \********************************************************/
/*! exports provided: PageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentComponent", function() { return PageContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/app/page-content/page.ts");
/* harmony import */ var _directives_portfolio_content_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/portfolio-content/portfolio */ "./src/app/directives/portfolio-content/portfolio.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageContentComponent = /** @class */ (function () {
    function PageContentComponent(zone, router, location) {
        this.zone = zone;
        this.router = router;
        this.location = location;
        this.selectedPage = {
            id: -1,
            name: 'unrouted',
            route: 'unrouted',
            class: ''
        };
        this.defaultPage = _page__WEBPACK_IMPORTED_MODULE_2__["pages"][0];
        this.pagesList = _page__WEBPACK_IMPORTED_MODULE_2__["pages"];
        this.projectsList = _directives_portfolio_content_portfolio__WEBPACK_IMPORTED_MODULE_3__["projects"];
        this.showDropdown = false;
    }
    PageContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                _this.routeToPage(e);
            }
        });
        this.routeToPage(null);
    };
    PageContentComponent.prototype.routeToPage = function (event) {
        var _this = this;
        this.routedPage = event ? event.url.slice(1) : window.location.hash.slice(2);
        console.log(this.routedPage);
        Object.keys(this.pagesList).forEach(function (key) {
            if (_this.pagesList[key].route.toUpperCase() === _this.routedPage.toUpperCase()) {
                _this.selectedPage = _this.pagesList[key];
            }
        });
        if (this.selectedPage.id === -1) {
            this.selectedPage = this.defaultPage;
        }
        console.log(this.selectedPage);
    };
    PageContentComponent.prototype.getDropdownStatus = function () {
        if (this.showDropdown) {
            return "block";
        }
        else {
            return "none";
        }
    };
    PageContentComponent.prototype.hamburgerClick = function () {
        this.showDropdown = !this.showDropdown;
        document.getElementById('hamburger').classList.toggle('change');
    };
    PageContentComponent.prototype.onSelect = function (page, dropdown) {
        this.selectedPage = page;
        this.showDropdown = false;
        document.getElementById('hamburger').classList.toggle('change');
        if (dropdown) {
            document.getElementById('mobile-dropdown-main').style.display = 'none';
        }
        //this.router.navigateByUrl('/' + this.selectedPage.route.toLowerCase());
        this.location.go('/' + this.selectedPage.route.toLowerCase());
    };
    PageContentComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    PageContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-content',
            template: __webpack_require__(/*! ./page-content.component.html */ "./src/app/page-content/page-content.component.html"),
            styles: [__webpack_require__(/*! ./page-content.component.css */ "./src/app/page-content/page-content.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PageContentComponent);
    return PageContentComponent;
}());



/***/ }),

/***/ "./src/app/page-content/page.ts":
/*!**************************************!*\
  !*** ./src/app/page-content/page.ts ***!
  \**************************************/
/*! exports provided: pages, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var pages = [
    { id: 1, name: 'About Me', route: 'Home', class: 'about-icon' },
    { id: 2, name: 'Projects', route: 'Projects', class: 'projects-icon' },
    { id: 3, name: 'Resume', route: 'Resume', class: 'resume-icon' }
];
var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/projects/birthdayCard/birthday-card-component.ts":
/*!******************************************************************!*\
  !*** ./src/app/projects/birthdayCard/birthday-card-component.ts ***!
  \******************************************************************/
/*! exports provided: BirthdayCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayCardComponent", function() { return BirthdayCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BirthdayCardComponent = /** @class */ (function () {
    function BirthdayCardComponent() {
        this.nextBirthday = new Date('12/22/2019');
    }
    BirthdayCardComponent.prototype.ngOnInit = function () {
        this.findRemainingTime();
    };
    BirthdayCardComponent.prototype.findRemainingTime = function () {
        var _this = this;
        setTimeout(function () {
            var currentTime = new Date();
            var totalSecondsTime = (_this.nextBirthday.getTime() - currentTime.getTime()) / 1000;
            var days = Math.floor(totalSecondsTime / 86400);
            totalSecondsTime = totalSecondsTime - (days * 86400);
            var hours = Math.floor(totalSecondsTime / 3600);
            totalSecondsTime = totalSecondsTime - (hours * 3600);
            var minutes = Math.floor(totalSecondsTime / 60);
            totalSecondsTime = Math.floor(totalSecondsTime - (minutes * 60));
            _this.remainingTime = days + ' days, ' + hours + ' hours ' + minutes + ' minutes and ' + totalSecondsTime + ' seconds!';
            _this.findRemainingTime();
        }, 1000);
    };
    BirthdayCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-birthday-card',
            styles: [__webpack_require__(/*! ./birthday-card.css */ "./src/app/projects/birthdayCard/birthday-card.css")],
            template: __webpack_require__(/*! ./birthday-card.html */ "./src/app/projects/birthdayCard/birthday-card.html")
        })
    ], BirthdayCardComponent);
    return BirthdayCardComponent;
}());



/***/ }),

/***/ "./src/app/projects/birthdayCard/birthday-card.css":
/*!*********************************************************!*\
  !*** ./src/app/projects/birthdayCard/birthday-card.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-area {\r\n    display: block;\r\n    font: 400 50px 'Merienda One', Helvetica, sans-serif;\r\n    color: rgba(0,0,0,0.7);\r\n\tmargin: 0 auto;\r\n    width: 70%;\r\n    height: auto;\r\n    overflow: auto;\r\n    height: auto;\r\n\tbackground: #F8ECC2;  /* fallback for old browsers */\r\n\t/*background: -webkit-linear-gradient(to right, #4CA1AF, #375E6F);  /* Chrome 10-25, Safari 5.1-6 */\r\n\t/*background: linear-gradient(to right, #4CA1AF, #375E6F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    border:3px solid #000000;\r\n    padding: 25px 25px 25px 25px;\r\n\tposition: relative;\r\n\topacity: 100;\r\n\ttop: 150px;\r\n\tmargin-bottom: 200px;\r\n\ttext-align:center;\r\n}\r\n\r\n.image-left {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.card-text-right {\r\n    height: 100%;\r\n    float: right;\r\n    padding-top: 25px;\r\n    font-size: 22px;\r\n    width: 50%;\r\n    vertical-align: middle;\r\n    margin: 0 auto;\r\n}\r\n\r\n.robyn-holding-rat {\r\n    height: 600px;\r\n}"

/***/ }),

/***/ "./src/app/projects/birthdayCard/birthday-card.html":
/*!**********************************************************!*\
  !*** ./src/app/projects/birthdayCard/birthday-card.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='http://fonts.googleapis.com/css?family=Merienda+One' rel='stylesheet' type='text/css'>\r\n<div class=\"birthday-card-container\">\r\n    <div class=\"card-area\">\r\n        <div class=\"image-left\">\r\n            <!-- <img class=\"robyn-holding-rat\" src='../assets/robyn_holding_rat.svg'> -->\r\n            <p>Happy Birthday Robyn!</p>\r\n            <svg id=\"Robyn\" height=\"600px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 228.67 746.08\"><defs><style>.cls-1,.cls-10{fill:#603813;}.cls-1,.cls-13,.cls-14,.cls-15,.cls-19,.cls-2,.cls-3,.cls-5{stroke:#231f20;}.cls-1,.cls-11,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-19,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-linecap:round;}.cls-1,.cls-11,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-2,.cls-20,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-miterlimit:10;}.cls-2,.cls-6,.cls-9{fill:#ecc19c;}.cls-4{fill:#fbb03b;}.cls-16,.cls-17,.cls-18,.cls-4,.cls-6,.cls-7,.cls-8{stroke:#000;}.cls-5{fill:#333;}.cls-14,.cls-20,.cls-7{fill:none;}.cls-7{stroke-width:2px;}.cls-11,.cls-13,.cls-21,.cls-8{fill:#e6e7e8;}.cls-8{stroke-width:0.5px;}.cls-9{stroke:#a67c52;}.cls-11,.cls-20{stroke:#fff;}.cls-12{fill:red;}.cls-15{fill:#c69c6d;}.cls-16,.cls-19{fill:#ff7bac;}.cls-17{fill:#999;}.cls-18{fill:#ccc;}</style></defs><title>robyn_holding_rat</title><g id=\"CurlsL\"><path class=\"cls-1\" d=\"M884.9,277.82a3.25,3.25,0,0,0,0,.92,14.38,14.38,0,0,1,0,3.69c-.59,1.53-3.87,1.19-7.18,2.5-4.87,1.94-9.61,7.37-9.37,10.84.11,1.67,1.37,2.76,3.65,4.73s4.45,2.82,4.09,4.18a2.2,2.2,0,0,1-.89,1.12c-1.56,1-2.81-1-5.41-.66a7.14,7.14,0,0,0-4.48,2.84,6,6,0,0,0-1.32,4.44,3.31,3.31,0,0,0,1.83,2.37c2,.81,5-.75,5.39-2.11a1.34,1.34,0,0,0-.92-1.65c-.59-.07-1.34.5-1.34.76,0,.08.06.1.45.36s.47.32.45.36a1.43,1.43,0,0,1-1.35-.16,1.76,1.76,0,0,1-.47-2.2c.62-.88,2.14.12,4.95-.63a7.8,7.8,0,0,0,4-2.28,7,7,0,0,0,1.75-5c-.18-2.19-1.65-2.09-2.29-4.57-.41-1.57-.55-4.38.85-5.73s3,.2,5.85-.83c4.11-1.48,6.39-6.77,6.69-7.47,1.33-3.09,2.24-8,.37-8.85C888.74,274.06,885.32,276.07,884.9,277.82Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M885.82,281a3,3,0,0,0,.12.91,14.86,14.86,0,0,1,.49,3.65c-.41,1.6-3.7,1.66-6.83,3.38-4.59,2.52-8.63,8.49-8,11.9.32,1.64,1.7,2.56,4.21,4.25s4.76,2.24,4.57,3.64a2.12,2.12,0,0,1-.75,1.22c-1.42,1.22-2.91-.65-5.45,0a7.12,7.12,0,0,0-4.1,3.36,6,6,0,0,0-.75,4.57,3.24,3.24,0,0,0,2.1,2.12c2.1.57,4.88-1.36,5.09-2.75a1.33,1.33,0,0,0-1.12-1.52c-.59,0-1.27.65-1.24.92,0,.07.08.08.5.3s.5.26.49.3a1.45,1.45,0,0,1-1.36,0,1.77,1.77,0,0,1-.74-2.13c.51-1,2.14-.14,4.84-1.24a7.75,7.75,0,0,0,3.72-2.75,7,7,0,0,0,1.13-5.18c-.45-2.15-1.89-1.87-2.83-4.26-.6-1.5-1.08-4.27.14-5.78s3-.17,5.7-1.54c3.9-2,5.51-7.5,5.73-8.24.94-3.23,1.24-8.19-.72-8.83C889.17,276.83,886,279.24,885.82,281Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M888.57,297.34a3.63,3.63,0,0,0,.29.87,14.65,14.65,0,0,1,1.14,3.5c-.1,1.65-3.33,2.31-6.09,4.56-4.06,3.32-6.94,9.93-5.66,13.16.61,1.56,2.13,2.21,4.9,3.41s5.1,1.34,5.16,2.75a2.16,2.16,0,0,1-.51,1.33c-1.17,1.47-3-.1-5.36,1A7.15,7.15,0,0,0,879,332a6,6,0,0,0,.09,4.63,3.26,3.26,0,0,0,2.45,1.71c2.17.17,4.56-2.23,4.5-3.64a1.33,1.33,0,0,0-1.37-1.29c-.58.1-1.13.87-1.05,1.13,0,.07.09.07.54.2s.54.17.54.21a1.46,1.46,0,0,1-1.34.25,1.76,1.76,0,0,1-1.11-2c.33-1,2.08-.52,4.53-2.09a7.75,7.75,0,0,0,3.16-3.39,7.08,7.08,0,0,0,.17-5.3c-.84-2-2.21-1.49-3.57-3.66-.86-1.37-1.84-4-.92-5.72s2.92-.71,5.33-2.55c3.47-2.65,4-8.38,4.13-9.15.33-3.34-.28-8.28-2.32-8.55C891.1,292.6,888.45,295.54,888.57,297.34Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M903.5,285.5c-.14.25-.25.32-1,1-2.52,2.28-3.78,3.42-4,4-.84,2.19,3.94,4.67,7,9,4.49,6.36,5,16.42,1,20-1.94,1.72-4.8,1.82-10,2s-9-.8-10,1a2.48,2.48,0,0,0,0,2c1,2.5,4.86,1.35,8,4a8.89,8.89,0,0,1,3,7c0,.66-.17,4.08-3,6a6.61,6.61,0,0,1-5,1c-3.59-.86-6-5.19-5-7a2.51,2.51,0,0,1,3-1c.87.43,1.28,1.71,1,2-.08.09-.2.05-1,0s-1-.06-1,0,.9.95,2,1c1.34.07,2.93-.95,3-2,.11-1.51-3-1.73-6-5a10,10,0,0,1-3-6,8.77,8.77,0,0,1,3-7c2.6-2.23,4.46-.85,8-3,2.23-1.36,5.43-4.31,5-7s-4.26-2.4-7-6c-4-5.19-1.35-13-1-14,1.52-4.53,5.55-10.66,9-10C902.35,278.05,904.81,283.22,903.5,285.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M884.9,261.82a3.25,3.25,0,0,0,0,.92,14.38,14.38,0,0,1,0,3.69c-.59,1.53-3.87,1.19-7.18,2.5-4.87,1.94-9.61,7.37-9.37,10.84.11,1.67,1.37,2.76,3.65,4.73s4.45,2.82,4.09,4.18a2.2,2.2,0,0,1-.89,1.12c-1.56,1-2.81-1-5.41-.66a7.14,7.14,0,0,0-4.48,2.84,6,6,0,0,0-1.32,4.44,3.31,3.31,0,0,0,1.83,2.37c2,.81,5-.75,5.39-2.11a1.34,1.34,0,0,0-.92-1.65c-.59-.07-1.34.5-1.34.76,0,.08.06.1.45.36s.47.32.45.36a1.43,1.43,0,0,1-1.35-.16,1.76,1.76,0,0,1-.47-2.2c.62-.88,2.14.12,4.95-.63a7.8,7.8,0,0,0,4-2.28,7,7,0,0,0,1.75-5c-.18-2.19-1.65-2.09-2.29-4.57-.41-1.57-.55-4.38.85-5.73s3,.2,5.85-.83c4.11-1.48,6.39-6.77,6.69-7.47,1.33-3.09,2.24-8,.37-8.85C888.74,258.06,885.32,260.07,884.9,261.82Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M896.08,273a4,4,0,0,0,0,1.12c0,2.68,0,4-.17,4.51-.81,1.89-4.74,1.54-8.81,3.22-6,2.48-12,9.22-11.92,13.46.05,2,1.5,3.34,4.14,5.71s5.2,3.34,4.69,5a2.9,2.9,0,0,1-1.13,1.39c-2,1.31-3.34-1.16-6.5-.68a9.3,9.3,0,0,0-5.56,3.57c-.36.47-2.23,2.9-1.84,5.46a3.7,3.7,0,0,0,2.07,2.85c2.38.95,6.09-1,6.62-2.7a1.53,1.53,0,0,0-1-2,1.9,1.9,0,0,0-1.67,1c0,.09.08.12.53.43s.55.38.52.43a1.68,1.68,0,0,1-1.62-.17,2.11,2.11,0,0,1-.44-2.68c.8-1.09,2.58.1,6-.88a10,10,0,0,0,5-2.87,9.19,9.19,0,0,0,2.41-6.16c-.1-2.67-1.87-2.51-2.51-5.54-.4-1.9-.41-5.34,1.35-7s3.61.18,7.11-1.14c5-1.9,8.08-8.41,8.49-9.29,1.78-3.8,3.15-9.8,1-10.83C900.93,268.27,896.69,270.8,896.08,273Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M900.06,285.42a5.09,5.09,0,0,1-1.18.79c-2.9,1.75-4.36,2.63-4.69,3.16-1.25,2,3,5.34,5.15,10.17,3.19,7.1,1.81,17.08-2.84,19.82-2.24,1.32-5.07.87-10.2.05s-8.7-2.51-10-.93a2.52,2.52,0,0,0-.38,2c.49,2.64,4.51,2.26,7.09,5.46a8.9,8.9,0,0,1,1.6,7.44,7.58,7.58,0,0,1-4.09,5.32,6.56,6.56,0,0,1-5.1,0c-3.36-1.53-4.86-6.23-3.57-7.82a2.52,2.52,0,0,1,3.14-.41c.77.59.93,1.92.6,2.15-.1.07-.21,0-1-.19s-1-.24-1-.19.71,1.1,1.77,1.37c1.3.32,3.06-.38,3.33-1.39.39-1.46-2.63-2.28-4.93-6.06a9.92,9.92,0,0,1-1.8-6.46,8.78,8.78,0,0,1,4.29-6.3c3-1.69,4.54,0,8.42-1.41,2.45-.91,6.16-3.19,6.25-5.92s-3.72-3.17-5.72-7.23c-2.89-5.85,1.15-13,1.69-13.93,2.36-4.16,7.49-9.4,10.75-8.09C900.35,277.88,901.78,283.43,900.06,285.42Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M894.34,295.38a3.63,3.63,0,0,0-.09,1.09c-.06,2.6-.1,3.9-.33,4.36-.85,1.74-4.7.94-8.76,2.1-5.95,1.7-12.1,7.55-12.17,11.67,0,2,1.34,3.42,3.84,6s5,3.85,4.43,5.42a2.55,2.55,0,0,1-1.17,1.21c-2,1.05-3.22-1.51-6.34-1.42a8.36,8.36,0,0,0-5.59,2.81c-.37.42-2.29,2.57-2,5.09a4,4,0,0,0,1.92,3c2.31,1.2,6-.29,6.59-1.85a1.6,1.6,0,0,0-.92-2.05c-.68-.16-1.64.42-1.66.73,0,.1.07.13.5.48s.52.44.5.49a1.76,1.76,0,0,1-1.59-.36,2.1,2.1,0,0,1-.33-2.66c.82-1,2.52.41,5.92-.15a9.06,9.06,0,0,0,5-2.2,8.23,8.23,0,0,0,2.58-5.7c0-2.61-1.74-2.66-2.26-5.67-.32-1.9-.2-5.24,1.58-6.66s3.54.59,7-.28c5-1.25,8.24-7.23,8.67-8,1.89-3.49,3.45-9.15,1.33-10.41C899.26,291.41,895,293.37,894.34,295.38Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M906.9,306.82a3.25,3.25,0,0,0,0,.92,14.38,14.38,0,0,1,0,3.69c-.59,1.53-3.87,1.19-7.18,2.5-4.87,1.94-9.61,7.37-9.37,10.84.11,1.67,1.37,2.76,3.65,4.73s4.45,2.82,4.09,4.18a2.2,2.2,0,0,1-.89,1.12c-1.56,1-2.81-1-5.41-.66a7.14,7.14,0,0,0-4.48,2.84,6,6,0,0,0-1.32,4.44,3.31,3.31,0,0,0,1.83,2.37c2,.81,5-.75,5.39-2.11a1.34,1.34,0,0,0-.92-1.65c-.59-.07-1.34.5-1.34.76,0,.08.06.1.45.36s.47.32.45.36a1.43,1.43,0,0,1-1.35-.16,1.76,1.76,0,0,1-.47-2.2c.62-.88,2.14.12,4.95-.63a7.8,7.8,0,0,0,4-2.28,7,7,0,0,0,1.75-5c-.18-2.19-1.65-2.09-2.29-4.57-.41-1.57-.55-4.38.85-5.73s3,.2,5.85-.83c4.11-1.48,6.39-6.77,6.69-7.47,1.33-3.09,2.24-8,.37-8.85C910.74,303.06,907.32,305.07,906.9,306.82Z\" transform=\"translate(-809.83 -201.65)\"/></g><g id=\"CurlsR\"><path class=\"cls-1\" d=\"M967.36,289.55a2.7,2.7,0,0,1-.37.85,14,14,0,0,0-1.48,3.37c-.06,1.64,3.08,2.62,5.61,5.14,3.71,3.7,5.92,10.56,4.33,13.65-.76,1.49-2.35,2-5.22,2.91s-5.2.83-5.41,2.22a2.18,2.18,0,0,0,.38,1.38c1,1.57,3,.19,5.23,1.54a7.13,7.13,0,0,1,3,4.37c.1.46.67,2.85-.55,4.6a3.3,3.3,0,0,1-2.61,1.46c-2.18-.05-4.32-2.68-4.12-4.07a1.32,1.32,0,0,1,1.49-1.15c.57.16,1,1,.94,1.23,0,.07-.1.06-.56.15s-.56.11-.56.15a1.43,1.43,0,0,0,1.3.39,1.78,1.78,0,0,0,1.31-1.84c-.23-1.06-2-.73-4.3-2.54a7.7,7.7,0,0,1-2.81-3.68,7,7,0,0,1,.36-5.29c1-1.94,2.34-1.27,3.91-3.29,1-1.28,2.23-3.81,1.48-5.6s-2.84-1-5.05-3.07c-3.19-3-3.19-8.74-3.2-9.51,0-3.36,1.1-8.21,3.16-8.28C965.32,284.58,967.67,287.78,967.36,289.55Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M968,288.23a3.54,3.54,0,0,1,.08.92,14.8,14.8,0,0,0,.3,3.67c.74,1.47,4,.83,7.39,1.84,5,1.48,10.24,6.45,10.33,9.92,0,1.67-1.11,2.87-3.2,5.05s-4.17,3.21-3.69,4.53a2.2,2.2,0,0,0,1,1c1.65.89,2.7-1.26,5.33-1.15a7.1,7.1,0,0,1,4.72,2.41,6,6,0,0,1,1.72,4.3,3.3,3.3,0,0,1-1.6,2.53c-1.93,1-5.07-.29-5.56-1.61a1.32,1.32,0,0,1,.76-1.72,1.45,1.45,0,0,1,1.41.63c0,.08-.06.1-.42.4s-.44.37-.42.4a1.43,1.43,0,0,0,1.33-.28,1.76,1.76,0,0,0,.27-2.24c-.7-.82-2.12.32-5-.17a7.74,7.74,0,0,1-4.23-1.9,7,7,0,0,1-2.21-4.82c0-2.19,1.45-2.23,1.87-4.76.26-1.59.14-4.41-1.38-5.62s-3,.47-5.9-.29c-4.23-1.09-7-6.15-7.35-6.82-1.61-3-3-7.74-1.19-8.78C963.83,284.85,967.42,286.53,968,288.23Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M978.36,291a3.05,3.05,0,0,1,0,.92,14.73,14.73,0,0,0-.15,3.68c.55,1.55,3.83,1.31,7.11,2.73,4.81,2.08,9.37,7.66,9,11.12-.17,1.66-1.45,2.71-3.79,4.61s-4.54,2.68-4.22,4.05a2.24,2.24,0,0,0,.85,1.15c1.53,1.08,2.84-.92,5.43-.49a7.14,7.14,0,0,1,4.4,3,6.05,6.05,0,0,1,1.17,4.48,3.24,3.24,0,0,1-1.89,2.31c-2,.76-5-.9-5.33-2.27a1.33,1.33,0,0,1,1-1.62c.59-.05,1.33.54,1.32.8,0,.08-.07.1-.46.35s-.48.3-.47.34a1.43,1.43,0,0,0,1.36-.12,1.76,1.76,0,0,0,.54-2.18c-.6-.91-2.15,0-4.93-.79a7.75,7.75,0,0,1-4-2.39,7.06,7.06,0,0,1-1.6-5.06c.25-2.18,1.71-2,2.44-4.5.45-1.55.68-4.35-.68-5.75s-3,.11-5.82-1c-4.06-1.61-6.18-7-6.46-7.68-1.24-3.13-2-8-.1-8.86C974.63,287.09,978,289.19,978.36,291Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M969.15,308.19a3.35,3.35,0,0,1-.2.89,14.66,14.66,0,0,0-.82,3.6c.26,1.62,3.53,2,6.49,4,4.35,2.92,7.82,9.24,6.85,12.58-.46,1.6-1.92,2.4-4.57,3.84s-4.95,1.81-4.89,3.21a2.17,2.17,0,0,0,.64,1.29c1.3,1.34,3-.38,5.43.51a7.1,7.1,0,0,1,3.77,3.72,6,6,0,0,1,.34,4.62,3.26,3.26,0,0,1-2.29,1.93c-2.14.37-4.74-1.8-4.81-3.21a1.32,1.32,0,0,1,1.24-1.41c.59.05,1.21.77,1.15,1,0,.08-.08.09-.52.26s-.52.21-.52.26a1.5,1.5,0,0,0,1.36.13,1.78,1.78,0,0,0,.93-2.06c-.42-1-2.12-.33-4.71-1.67a7.74,7.74,0,0,1-3.46-3.08,7.05,7.05,0,0,1-.65-5.26c.65-2.1,2.06-1.69,3.21-4,.74-1.44,1.47-4.16.39-5.77s-3-.45-5.54-2.06c-3.7-2.32-4.8-8-5-8.72-.65-3.3-.49-8.27,1.52-8.73C966.19,303.7,969.11,306.39,969.15,308.19Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M955.19,297.59c.16.24.27.3,1.09.91,2.71,2,4.07,3.05,4.35,3.61,1,2.11-3.5,5-6.14,9.61-3.89,6.74-3.51,16.81.85,20,2.09,1.53,4.95,1.37,10.14,1.06s8.91-1.62,10,.08a2.5,2.5,0,0,1,.18,2c-.75,2.58-4.72,1.8-7.6,4.72a8.91,8.91,0,0,0-2.34,7.25,7.63,7.63,0,0,0,3.54,5.7,6.57,6.57,0,0,0,5.07.53c3.5-1.19,5.46-5.72,4.34-7.43a2.52,2.52,0,0,0-3.08-.72c-.83.51-1.12,1.82-.81,2.08.09.08.2,0,1-.09s1-.15,1-.09-.81,1-1.9,1.18c-1.33.19-3-.68-3.17-1.72-.25-1.49,2.85-2,5.51-5.53a9.85,9.85,0,0,0,2.43-6.25,8.75,8.75,0,0,0-3.63-6.69c-2.79-2-4.52-.43-8.24-2.25-2.35-1.15-5.81-3.79-5.62-6.51s4-2.78,6.41-6.62c3.46-5.54.15-13-.29-14-1.93-4.38-6.51-10.11-9.89-9.13C955.65,290.07,953.67,295.44,955.19,297.59Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M966.48,291.7a3.54,3.54,0,0,1,.08.92,14.8,14.8,0,0,0,.3,3.67c.74,1.47,4,.83,7.39,1.84,5,1.48,10.24,6.45,10.33,9.92,0,1.67-1.11,2.87-3.2,5.05s-4.17,3.21-3.69,4.53a2.2,2.2,0,0,0,1,1c1.65.89,2.71-1.26,5.33-1.15a7.1,7.1,0,0,1,4.72,2.41,6,6,0,0,1,1.72,4.3,3.3,3.3,0,0,1-1.6,2.53c-1.93,1-5.07-.29-5.56-1.61a1.32,1.32,0,0,1,.76-1.72,1.45,1.45,0,0,1,1.41.63c0,.08-.06.1-.42.4s-.44.37-.42.4a1.45,1.45,0,0,0,1.34-.28,1.77,1.77,0,0,0,.26-2.24c-.7-.82-2.12.32-5-.17a7.74,7.74,0,0,1-4.23-1.9,7,7,0,0,1-2.21-4.82c0-2.19,1.45-2.23,1.87-4.76.26-1.6.14-4.41-1.38-5.62s-3,.47-5.9-.29c-4.23-1.09-7-6.15-7.35-6.83-1.61-2.95-3-7.73-1.19-8.77C962.31,288.32,965.9,290,966.48,291.7Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M968.16,283.94a3.57,3.57,0,0,1,.15,1.12c.22,2.66.33,4,.59,4.47,1,1.81,4.85,1.1,9.07,2.4,6.18,1.91,12.8,8.07,13.1,12.3.14,2-1.18,3.46-3.59,6.06s-4.88,3.81-4.21,5.43a2.91,2.91,0,0,0,1.26,1.28c2.05,1.12,3.21-1.46,6.4-1.28a9.34,9.34,0,0,1,5.87,3c.4.44,2.49,2.69,2.33,5.27a3.69,3.69,0,0,1-1.79,3c-2.29,1.17-6.17-.46-6.84-2.08a1.52,1.52,0,0,1,.82-2.07,1.88,1.88,0,0,1,1.75.8c0,.09-.07.12-.49.48s-.51.43-.48.47a1.7,1.7,0,0,0,1.6-.31,2.12,2.12,0,0,0,.19-2.72c-.9-1-2.55.34-6.06-.32a10.08,10.08,0,0,1-5.24-2.4,9.16,9.16,0,0,1-3-5.9c-.15-2.68,1.63-2.68,2-5.75.23-1.94-.08-5.36-2-6.87s-3.58.51-7.18-.48c-5.19-1.43-8.83-7.63-9.32-8.46-2.12-3.63-4-9.47-1.94-10.7C962.9,279.74,967.36,281.86,968.16,283.94Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M954.81,305.46c.2.2.32.24,1.24.68,3.05,1.48,4.58,2.22,5,2.71,1.43,1.87-2.47,5.59-4.19,10.61-2.52,7.36-.22,17.17,4.66,19.47,2.35,1.11,5.12.4,10.16-.89s8.43-3.3,9.88-1.85a2.5,2.5,0,0,1,.56,1.92c-.25,2.68-4.28,2.67-6.55,6.09a8.85,8.85,0,0,0-.91,7.56,7.56,7.56,0,0,0,4.56,4.91,6.5,6.5,0,0,0,5.08-.44c3.2-1.84,4.26-6.66,2.83-8.12a2.5,2.5,0,0,0-3.16-.12c-.71.66-.75,2-.4,2.2.11.06.21,0,1-.28s.93-.33,1-.28-.6,1.16-1.64,1.52c-1.26.44-3.07-.09-3.44-1.08-.52-1.41,2.42-2.5,4.36-6.48a9.94,9.94,0,0,0,1.19-6.6,8.76,8.76,0,0,0-4.85-5.88c-3.12-1.41-4.52.44-8.52-.63-2.52-.67-6.42-2.61-6.76-5.31s3.41-3.5,5-7.73c2.33-6.09-2.35-12.81-3-13.71-2.73-3.93-8.31-8.68-11.44-7.07C953.82,298,952.91,303.64,954.81,305.46Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M965.22,306.59a3.57,3.57,0,0,1,.19,1.08c.3,2.58.46,3.87.73,4.3,1,1.66,4.76.51,8.91,1.29,6.09,1.14,12.75,6.4,13.2,10.5.22,2-1,3.53-3.27,6.35s-4.61,4.3-3.91,5.81a2.52,2.52,0,0,0,1.28,1.1c2,.86,3.07-1.81,6.18-2a8.33,8.33,0,0,1,5.83,2.29c.4.38,2.52,2.34,2.46,4.88a4,4,0,0,1-1.64,3.18c-2.18,1.41-6,.27-6.73-1.23a1.61,1.61,0,0,1,.72-2.13c.67-.22,1.68.27,1.73.57,0,.1-.06.13-.45.53s-.48.48-.46.53a1.79,1.79,0,0,0,1.55-.5,2.11,2.11,0,0,0,.09-2.68c-.91-.89-2.48.63-5.91.39a9,9,0,0,1-5.19-1.73,8.2,8.2,0,0,1-3.1-5.43c-.24-2.6,1.49-2.81,1.73-5.86.15-1.92-.28-5.23-2.19-6.48s-3.47.91-7,.37c-5.1-.79-8.87-6.44-9.37-7.2-2.2-3.29-4.28-8.79-2.28-10.24C960,303.09,964.36,304.65,965.22,306.59Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M969.75,263.92a3.47,3.47,0,0,1,.08.92,14.8,14.8,0,0,0,.3,3.67c.74,1.47,4,.83,7.39,1.83,5,1.48,10.24,6.46,10.33,9.93,0,1.67-1.11,2.87-3.2,5.05s-4.17,3.21-3.69,4.53a2.2,2.2,0,0,0,1,1c1.65.89,2.71-1.26,5.33-1.15a7.1,7.1,0,0,1,4.72,2.41,6,6,0,0,1,1.72,4.3,3.29,3.29,0,0,1-1.6,2.52c-1.93,1-5.07-.28-5.56-1.6a1.33,1.33,0,0,1,.76-1.72c.58-.13,1.39.37,1.41.63,0,.08-.06.1-.42.4s-.44.36-.42.4a1.44,1.44,0,0,0,1.34-.29,1.76,1.76,0,0,0,.26-2.23c-.7-.82-2.12.32-5-.17a7.85,7.85,0,0,1-4.23-1.9,7.09,7.09,0,0,1-2.21-4.82c0-2.19,1.45-2.23,1.87-4.76.26-1.6.14-4.41-1.38-5.62s-3,.47-5.9-.29c-4.22-1.1-7-6.15-7.35-6.83-1.61-2.95-3-7.73-1.19-8.78C965.58,260.53,969.17,262.21,969.75,263.92Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M970.93,266.57a3.3,3.3,0,0,1-.36.85,15.07,15.07,0,0,0-1.4,3.4c0,1.65,3.15,2.55,5.74,5,3.8,3.61,6.17,10.41,4.66,13.54-.73,1.51-2.3,2.05-5.15,3s-5.18.95-5.36,2.35a2.26,2.26,0,0,0,.41,1.37c1.06,1.54,3,.12,5.27,1.41a7.1,7.1,0,0,1,3.1,4.3,6.06,6.06,0,0,1-.43,4.61,3.3,3.3,0,0,1-2.58,1.52c-2.17,0-4.38-2.57-4.21-4a1.32,1.32,0,0,1,1.46-1.18c.57.15,1.06,1,1,1.2,0,.07-.1.07-.56.17s-.56.12-.56.16a1.47,1.47,0,0,0,1.32.36,1.77,1.77,0,0,0,1.26-1.87c-.25-1-2-.69-4.36-2.43a7.73,7.73,0,0,1-2.9-3.62,7,7,0,0,1,.23-5.3c1-2,2.31-1.32,3.83-3.38,1-1.3,2.14-3.86,1.35-5.63s-2.86-.94-5.12-3c-3.26-2.9-3.41-8.66-3.43-9.43-.09-3.36.9-8.23,2.95-8.35C968.76,261.65,971.19,264.78,970.93,266.57Z\" transform=\"translate(-809.83 -201.65)\"/></g><path class=\"cls-2\" d=\"M882.64,288.5c.56,6.89-.14,7.77,1,11,1,2.78,3.32,7.32,5,7,2.47-.48,1.57-11.1.83-19.9-.2-2.43-.56-5.72-3-7.4-1-.66-2.74-1.41-3.83-.7C881.23,279.42,882.11,282,882.64,288.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-2\" d=\"M975.5,290.5c-.56,6.89.14,7.77-1,11-1,2.78-3.32,7.32-5,7-2.47-.48-1.57-11.1-.83-19.9.2-2.43.56-5.72,3-7.4,1-.66,2.74-1.41,3.83-.7C976.91,281.42,976,284,975.5,290.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-2\" d=\"M880.5,402.5c-1.51-5.69-1.37-10.16-.74-18.34,1.78-23,2.49-35,7.74-38.66,2.93-2,7.06-3.44,9-8,2.12-5-.36-9.15,1-10,3.32-2.08,15.74,24,32,25,13.72.84,24.89-22.11,28-20,1.53,1-1.61,6,1,11,2,3.78,5.89,4.95,8,6,9.51,4.72,11.07,21.2,12,31,1.87,19.74,4,42-12,56-17.32,15.19-42.23,8.76-45,8-19.61-5.38-29.69-20.85-35-29A44.22,44.22,0,0,1,880.5,402.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-3\" d=\"M921.5,857.5c4.28,7.82,5.22,16.2-2,56-4.93,27.18-6.84,31.35-11,33-8.86,3.51-23.57-6.14-28-18-4.15-11.13-.17-22.22,4-33,5.1-13.19,8.77-12.6,13-25,5.34-15.67,2.45-25.35,7-27S917.1,849.45,921.5,857.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-3\" d=\"M932.5,843.5c-3.76,3.1-4.63,7.73-5,10-4.38,26.82,2.54,58,2.54,58,6.06,27.32,9.34,29.32,11.46,30,8.43,2.7,21.53-8.06,25-20,3-10.49-1.65-20.83-4-26-4-8.75-6.8-8.22-10-17-2.4-6.57-3.13-13.21-4-21-1.16-10.42-.55-14-3.46-16C941.65,839.19,935.92,840.69,932.5,843.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-4\" d=\"M906.5,708.5c24.38-11,67.86-14.16,75-1,1.36,2.51.16,3.32-4,24,0,0-2.7,13.44-5,28-2,12.94-1.58,13.07-4,29-2,13-3,19.6-5,27-3.39,12.53-4.4,10.21-7,21-2.68,11.13-2.71,18.17-8,21a11.89,11.89,0,0,1-7,1c-7.31-.78-11.32-7-12-8-2.76-4.25-3-8.52-3-14-.1-12.5.67-19.22,1-27,.46-11-.18-18.94-1-29-.53-6.51-1.52-19-3-19-.61,0-1.26,2.12-2,7-2.69,17.61-.38,29.4,0,50,.25,13.45-.65,12.39,0,21,.82,10.74,2.35,14.08,0,18-3.65,6.08-14.08,9.26-21,6-6.08-2.87-6.08-9.15-12-29-7.53-25.28-10.36-24.61-13-40-.22-1.31-.34-4.61-1.12-9.25-.82-4.87-1.44-6.3-1.88-9.75-.66-5.17.23-5.87,0-11-.16-3.73-.51-5.3-7-28h0c-3-10.77-4.77-16.24-2-19,2.56-2.55,7.08-.85,12.48-.3C888.86,718.5,898,712.35,906.5,708.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-5\" d=\"M992.5,533.5c1.34,2.39,1.56,8.93,2,22,.46,13.62-.38,16.91,0,26,.61,14.58,2.84,18.18,5,34,2.09,15.32,3.1,24.16,2,36-1.22,13.11-4.52,22.85-10,39-4.4,13-6.6,19.45-9,22-11.53,12.23-25.4,1.61-60,9-17.67,3.78-25.57,9-42,7-13-1.59-19-6.22-21-8-5.74-5-7.71-10.7-12-24-7-21.73-10.51-32.59-11-35-5.18-25.68-1.65-47.06,2-68,7.07-40.58,10.61-60.87,25-70,11.59-7.35,16.22-.44,64,1C965.64,525.65,986,522,992.5,533.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-3\" d=\"M961.5,495.5c-1.62-.24-4.26-.37-19,11-6.74,5.2-10.12,7.81-11,8-12.4,2.71-21.59-18.71-32-16-5.54,1.44-8.46,8.93-12,18-4.79,12.26-2,14.91-6,20-7.72,9.93-27.42,11-41,4-5.11-2.64-9.84-5.08-12-10-10-22.79,56.31-51.61,57-103,.17-12.67-3.54-26.84,0-28,4.3-1.41,17.5,16.95,34,33,1.65,1.61,5.24,5,10,5s8.47-3.52,10-5c14.19-13.71,32.49-29.16,34-28,1.14.87-8.35,10.34-6,20,1.61,6.61,9.34,8.93,11,12,9.83,18.19,38.3,31.72,46,49,12.06,27-2.6,55.32-7,56a45,45,0,0,0-9,2h0c-4.34,1.42-7.56.71-13,0-15.69-2-23.58-.73-24-3-.24-1.32,2.45-1.6,5-5,5.13-6.82,3.22-16,3-17-.87-3.73-2.37-6-5-10C969.48,501,966.32,496.21,961.5,495.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-5\" d=\"M894.5,337.5c.91,1.17-2.16,4.89-3,6-8.24,10.89-2,34,10,74,6.24,20.73,11,35.92,21,55,5.8,11.07,8.76,16.62,12,17,22.54,2.66,46.8-134,34-139-1-.41-5.63-1.22-8-5-1.07-1.7-1.86-4.28-1-5,1.54-1.3,7.09,4.5,15,9s11.65,4,21,7c8.18,2.59,24.1,7.63,33,19,3.94,5,6.09,10.77,8,29,2.47,23.63,1,34,1,60,.07,32.6,2.51,41-4,56-5.68,13.07-14.17,21.94-16,21-2.53-1.3,10-20.22,3-32,0,0-2.52-3.53-28-10,1.31.53,1.9.75,1.9.73s-14.78-9-31.9-8.73c-5.85.08-19.79.27-26,9-2.6,3.65-4,9-7,9-1.31,0-2.07-1-4-3a59,59,0,0,0-11-9c-3.44-2.05-6.49-2.43-11-3-15.17-1.9-19.92,4.33-34,2a38.39,38.39,0,0,0-8-1,30.69,30.69,0,0,0-15,4c-6.61,3.87-13.75,11.85-14,21-.31,11.24,10,17.61,8,20-2.1,2.57-16.28-2-24-13-5.8-8.27-6-17.34-6-23-.23-39.22-.22-58.82,0-62,4.19-61.73,12.26-76.37,23-82,.24-.13-.08.05,18.06-6.81,17.87-6.75,26.81-10.13,26.94-10.19C887.85,339.37,893.44,336.13,894.5,337.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-6\" d=\"M964.5,244.5c8.35,11.57,7.45,23.8,6,46-.44,6.73-.21,13.37-2.19,21.36a64.69,64.69,0,0,1-6.81,17.64c-6,10.06-20.85,26.62-37,24-9.47-1.54-15.47-9.07-21-16-3.86-4.84-11.58-15.85-15-35-1.44-8.05-9.76-54.68,16-71,11.18-7.08,24.08-5.49,28-5C935.29,226.84,953.6,229.39,964.5,244.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M965.5,214.5c6,7.34,13.46,24.74,14,26,.25.59.6,1.43,1.14,2.47.44.85.81,1.45.86,1.53,4.19,7,2,19,2,19-2.66,14.36-11.29,27.72-13,27-.93-.39,1.19-4.54,1-13-.15-6.62-.29-11-3-15-3.49-5.2-7.44-4.9-14.26-12.35a25.07,25.07,0,0,1-2.74-3.65c-3.5-5.58-1.75-6.37-5-10-4.51-5-12.09-8.24-19.76-8.2-.53,0-.9,0-1.24,0-7.76.29-17.85,3.21-24,7.74-11.75,8.65-13.19,25.3-14,34.42-1.06,12,1.4,19.17-1,20-2.66.92-8.79-6.86-11-15-.81-3-.88-5.67-1-11a109.83,109.83,0,0,1,1.1-16.35,65.12,65.12,0,0,1,1.9-9.65c1.16-4.09,2.82-9.92,7-15,3.7-4.49,7.88-6.58,16-10,17.56-7.41,26.34-11.11,31-11.31C934.05,202.08,954.84,201.45,965.5,214.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-7\" d=\"M942,279a15.58,15.58,0,0,1,3-2c1.47-.75,4.92-2.5,9-1.5a11.7,11.7,0,0,1,6.5,4.5l-2,2\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-7\" d=\"M915.5,279a15.58,15.58,0,0,0-3-2c-1.47-.75-4.92-2.5-9-1.5A11.7,11.7,0,0,0,897,280l2,2\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-8\" d=\"M906.59,275c5.95-.14,12,4.49,11.37,7.34s-7.35,4.18-12.51,3.14c-3-.61-7.93-2.57-8-5.24S902.41,275.1,906.59,275Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-9\" d=\"M934.5,284.5c-.14,3.24-.11,5.95,0,8a15.06,15.06,0,0,0,1,5.05,13.46,13.46,0,0,0,1,1.95c1.93,3.25,3.23,3.82,3,5-.18.94-1.18,1.52-2,2-1.26.74-1.42.34-3,1-1.37.57-1.91,1.25-3,1.68a5,5,0,0,1-2,.32\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-10\" d=\"M963.5,270.5c-.4.37-2.6-3.09-7-4-2.4-.49-4.8.16-9.5,1.5-5.85,1.66-9,3.24-9.5,2.5-.34-.56,1.08-2.06,1.5-2.5a9,9,0,0,1,3-2,14.13,14.13,0,0,1,3-1c7-1.49,10.57-2.39,12.5-1.5C961.86,265.51,963.92,270.11,963.5,270.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-10\" d=\"M895.5,270.5c.4.37,2.6-3.09,7-4,2.4-.49,4.8.16,9.5,1.5,5.85,1.66,9,3.24,9.5,2.5.34-.56-1.08-2.06-1.5-2.5a9,9,0,0,0-3-2,14.13,14.13,0,0,0-3-1c-7-1.49-10.57-2.39-12.5-1.5C897.14,265.51,895.08,270.11,895.5,270.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-11\" d=\"M941.5,320.5c.46,1.33-3.44,4.84-8,6-9.37,2.38-19.48-5.71-19-7,.1-.26.57-.08,5,0h8c4.83,0,4.83,0,6,0C938.65,319.62,941.22,319.69,941.5,320.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-12\" d=\"M923,317c2.54.21,2.52.92,5,1,3,.09,3.29-.94,6-1,3.42-.08,3.76,1.56,8,2,3.63.38,5.8-.57,6,0s-2.13,2.66-5,3c-3.31.39-4-1.87-8-2-3-.1-3.4,1.14-7,1-2.11-.08-1.83-.51-5-1-4.29-.67-5.78-.05-10-1-1.28-.29-3-.77-3-1s2.08.14,5,0C919.32,317.8,919.84,316.74,923,317Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-12\" d=\"M936,323c2.11-.77,2.66-1.48,5-2,.47-.1,3.63-.8,4,0s-3.2,3.45-4,4c-3.81,2.63-7.18,5-12,5-3.65,0-6.1-1.31-11-4,0,0-5.69-3.12-7-7-.1-.3-.22-.74,0-1s1.28-.33,6,2c4.1,2,4.12,2.37,6,3a20.52,20.52,0,0,0,6,1A18.38,18.38,0,0,0,936,323Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-2\" d=\"M891.38,502.5a39.7,39.7,0,0,0-6.88,12c-1,3-1.4,6.66-2.12,14-.44,4.56-.46,7,1,8s3.52-.35,5.12,1,.39,3.22,2,5c1.37,1.52,2.59.53,5,2,2.89,1.76,2.46,4,5,5,1.77.72,2.14-.31,5,0,3.24.35,4.06,1.8,7.88,3a20.56,20.56,0,0,0,6.12,1c7.08-.08,11.16-5.46,13-4,1.21,1-.53,3.3,1,6,1.29,2.28,4.36,3.85,6,3,2-1,1.61-5.48,1-8-1.29-5.37-4.43-5.52-7-11-1.92-4.1-2-8-2.12-14-.14-7.06,1.1-7.52,0-11-.27-.86-2.34-7.09-7.88-10-2-1.07-3.49-1.14-6-3-2.3-1.7-2.49-2.69-4-4-3.6-3.11-9.62-3.67-14.12-2C896.22,496.68,894.56,498.67,891.38,502.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-2\" d=\"M970.5,498.5c3.81,4.29,6.43,7.25,8,12,1.16,3.51-.2,2.13,1,14,.35,3.48.74,6.33-1,8-1.24,1.19-2.36.64-4,2-2.19,1.82-1.42,3.81-3,6-2.26,3.14-6.09.61-10,4-1.41,1.22-1.31,1.82-3,3a9.93,9.93,0,0,1-6,2c-2-.09-2.08-.92-4-1-2.6-.1-3.17,1.4-6,2s-6.56.15-8-2c-.88-1.31-.1-2.17-1-5a15,15,0,0,0-2-4c-2.37-3.72-.8-7.56-1-18-.14-7-.88-7.7,0-11a22.26,22.26,0,0,1,5-9,29.12,29.12,0,0,1,12-8c4.54-1.85,9.74-4,15-2C965.19,492.51,967,494.51,970.5,498.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M908.13,279.5c1.93,0,4.12,1.19,4.59,3a2.64,2.64,0,0,1-.22,2c-.61,1-2,1-4.37,1s-4,0-4.63-1a2.51,2.51,0,0,1,0-2A5,5,0,0,1,908.13,279.5Z\" transform=\"translate(-809.83 -201.65)\"/><path d=\"M908.48,282.3a2.19,2.19,0,0,1,2,1.56,1.31,1.31,0,0,1-.41,1.2c-.33.26-.67.14-1.66.08-1.62-.1-2.1.14-2.34-.2s.17-1.13.31-1.36A2.4,2.4,0,0,1,908.48,282.3Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-8\" d=\"M950.91,275c-5.95-.14-12,4.49-11.37,7.34s7.35,4.18,12.51,3.14c3-.61,7.93-2.57,8-5.24S955.09,275.1,950.91,275Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-1\" d=\"M949.37,279.5a5.24,5.24,0,0,0-4.59,3,2.46,2.46,0,0,0-.28,2c.5,1.08,2.4,1,4.87,1,2.19,0,3.41-.07,4.13-1a2.72,2.72,0,0,0,.47-2C953.66,280.71,951.35,279.5,949.37,279.5Z\" transform=\"translate(-809.83 -201.65)\"/><path d=\"M949.13,282.29a2.24,2.24,0,0,0-2.1,1.43c-.08.18-.35.85,0,1.28.14.19.37.29,2,.3s1.81-.09,2-.3a1.32,1.32,0,0,0,.12-1.13A2.18,2.18,0,0,0,949.13,282.29Z\" transform=\"translate(-809.83 -201.65)\"/><ellipse class=\"cls-13\" cx=\"972.5\" cy=\"302.96\" rx=\"3.31\" ry=\"1.89\" transform=\"translate(-535.29 843.19) rotate(-64.05)\"/><ellipse class=\"cls-13\" cx=\"886.5\" cy=\"301.96\" rx=\"1.89\" ry=\"3.31\" transform=\"translate(-842.05 282.05) rotate(-30)\"/><path class=\"cls-14\" d=\"M945.81,548.31a6.76,6.76,0,0,1-6.31-4.81,6.51,6.51,0,0,1,1-5,5.28,5.28,0,0,1,2-2c2-1.11,4.75-.69,7,1\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M962.5,543.5a30,30,0,0,0-7-2c-2-.3-3.07-.18-4-1-1.51-1.32-1.36-4-1-6a12,12,0,0,1,4-3,13.75,13.75,0,0,1,7-1,19.23,19.23,0,0,1,5,1\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M933.5,542.5a5.79,5.79,0,0,1,3-2,5.73,5.73,0,0,1,3,0\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M978.5,531.5a5.51,5.51,0,0,1-2,2,5.72,5.72,0,0,1-3.84.64,12.05,12.05,0,0,1-3.88-3.15,13.74,13.74,0,0,1-2.66-6.55c-.51-2.73.28-2.79-.24-5.09-.63-2.77-1.69-2.84-2.38-5.85a8.54,8.54,0,0,1,0-5,7.46,7.46,0,0,1,2-3\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M899.5,518.5a18.76,18.76,0,0,0-4,7c-1,3.33-.48,5.36-2.06,7.64a9.19,9.19,0,0,1-4.94,3.36\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M898.5,534.5a53.32,53.32,0,0,0,11-1,8.71,8.71,0,0,1,5,0c1.68.6,4,2.16,4,4,0,2.52-4.21,4.36-8,6a25.9,25.9,0,0,1-7,2,24.28,24.28,0,0,1-6,0\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M918.5,538.5a9.33,9.33,0,0,1,5,0c1.61.46,4.84,1.89,5,4,.19,2.54-4.24,4.67-7,6a20.92,20.92,0,0,1-7,2,20.32,20.32,0,0,1-4,0\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M927.5,540.5a5.36,5.36,0,0,1,4,1,5,5,0,0,1,0,8\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-15\" d=\"M906.94,483.74c-.4,2.14-2.23,4.73-4.71,4.71-2.19,0-3.81-2.06-4.41-3.58-.44-1.14-.13-1.48.2-6,.24-3.3.16-4.4.77-4.63s1.06.57,2.89,2.13c3.11,2.63,4.33,2.67,5,4.43A5.29,5.29,0,0,1,906.94,483.74Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-16\" d=\"M961.92,477.24c8.91-15.22,7-28.41,12.22-30.29,5.58-2,12.65,11.21,12,12.12-.52.73-5.41-7.08-10-5.17-5.43,2.27-3.3,15.21-11.2,27.26-6.68,10.21-16.72,13.94-17.22,12.93S955.28,488.6,961.92,477.24Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-17\" d=\"M966,488.15c.66,2.45.57,5,.39,10.23-.21,6,.36,7.49-.77,8.49-1.9,1.67-4.35-.8-8.3.58-2.38.82-2.48,2.06-6.56,5.79-1.16,1.06-3.48,2.76-8.11,6.17-5.81,4.28-8.76,6.27-9.46,5.6s.86-2.67,0-3.47c-.45-.42-1.18-.14-2.31,0h0a24.2,24.2,0,0,1-5-.58c-3.67-.91-3.76-3.83-6.95-4.06H912.3c-3.46.16-3.89,2.1-7.14,2.13-2.74,0-4.44,0-5.6-1.16-1-1-1-2.28-1-6.56s.13-6.51.19-7.72a72.44,72.44,0,0,1,2.12-14.48c1.24-4.78,2.34-6.71,4.06-8.1a14.69,14.69,0,0,1,3.66-1.93c4.37-1.95,7.2-2.58,8.49-3.48,6.8-4.66,7.07-5.57,9.46-6.94,6.36-3.67,14.8-3.23,20.84-.58,3.68,1.61,6.09,4.19,11,9.26C962.49,481.54,964.85,484,966,488.15Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-18\" d=\"M902,517.16c1.48-.06,2-.65,3.92-1.22a24,24,0,0,1,3.18-.55c4.25-.93,4.94-7.2,7-7.17,2.42,0,1.87,8.34,7.33,11.58,2.56,1.52,5.47,1.36,9.07,1.16a24.69,24.69,0,0,0,8.69-1.93c3.09-1.34,5.12-3,8.68-6s3.61-3.56,5.6-4.63c3.22-1.73,8.13-2.83,9.07-1.35,1.68,2.62-8.49,14.32-14.86,14.28-4.34,0-5.39.4-7.53,1.16-2.87,1-2.83,1.88-5.79,2.7-3.41.95-4.68.11-7.52,1.55-2,1-2.52,2-4.44,2.31-2.25.41-5.16-.16-5.6-1.54s2.41-2.89,1.93-4.44c-.4-1.27-2.73-1.58-5.4-1.93a13,13,0,0,0-6,.39,6,6,0,0,0-2,1c-2.75,2.2-.88,6.33-3,7.72-1.53,1-4.47.09-5.41-1.54-.59-1,0-1.69.2-4.25.36-4.34-.9-6.92.19-7.53C900,516.56,900.36,517.23,902,517.16Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-19\" d=\"M949,526a.73.73,0,0,0-.58,0c-.37.11-.44.37-.77.57s-.33.14-1,.2c-1.64.15-1.8.13-1.93,0-.27-.29,0-.68-.19-1-.49-.59-2.27.39-2.51,0-.14-.21.33-.68,1-1.54,1-1.29.89-1.58,1.35-2.12,1.23-1.48,2.69-.57,5.4-1.93,1.5-.76,1.22-1.12,3.09-2.13,1.24-.67,3.57-1.93,4.44-1.16s.46,2.81-.39,4.06a3,3,0,0,0-.77,1.54c0,.16,0,.27,0,1.35v.58c0,1.32,0,2.14-.39,2.32s-1.53-.61-1.93-1a1.33,1.33,0,0,0-.58-.38,1.51,1.51,0,0,0-1.15.19c-.9.54-.59,1.57-1.35,1.93a1.25,1.25,0,0,1-1.36-.19C949,526.91,949.34,526.21,949,526Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-19\" d=\"M919.05,531.19c-.58.56-2,.21-2.12-.2,0-.13.12-.18.39-.58.08-.11.59-.89.38-1.15s-.55-.06-.77,0a2.65,2.65,0,0,0-1.35,1c-.29.36-.2.4-.39.58a1.8,1.8,0,0,1-2.31,0,1.45,1.45,0,0,1-.39-1.54c.17-.32.4-.23,1.16-.78.45-.32.43-.4,1-.77.36-.25.7-.42.86-.53a3.75,3.75,0,0,1,.49-.24,13.06,13.06,0,0,1,2.12-.77c1.59-.21,1.73,1,4.44,1.54.74.17,1.47.24,1.73.77a3.85,3.85,0,0,1,.2,1.36,2.16,2.16,0,0,0,0,.57c.09.61.47.84.38,1s-1.24.12-1.93-.58c-.36-.37-.24-.53-.58-.77a2.21,2.21,0,0,0-2.12,0,2.71,2.71,0,0,0-.58.38C919.26,530.75,919.27,531,919.05,531.19Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-19\" d=\"M900.14,533.5a1.06,1.06,0,0,1-.77-.38c-.34-.43-.09-.85-.39-1.16a1.16,1.16,0,0,0-1-.19c-.93.09-1.09.7-1.93.77-.1,0-.85.06-1.16-.39-.18-.25-.12-.56,0-1.16a3.09,3.09,0,0,1,.58-1.54,3,3,0,0,1,1.35-.77,13.43,13.43,0,0,1,2.12-.77c1.59-.22,1.73.94,4.44,1.54.75.16,1.48.24,1.74.77a4,4,0,0,1,.19,1.35,3.7,3.7,0,0,0,0,.58c.1.61.47.84.39,1s-1.23-.24-1.93-.58a11.35,11.35,0,0,0-1.16-.58c-.38-.15-1.3-.5-1.54-.19s.07.36,0,.77A1.19,1.19,0,0,1,900.14,533.5Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M915.18,504.46a54.8,54.8,0,0,1,37.36,6.75\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M916.16,505.59a54.79,54.79,0,0,1,35.24,14.12\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M915.23,505.87a55.29,55.29,0,0,1,20.54,7.68,54.7,54.7,0,0,1,12.59,10.87\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M919.15,508.32a38,38,0,0,1,16.4,9.38,37.53,37.53,0,0,1,7.15,9.72\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M914.41,505a25,25,0,0,1,6.48-6.15A27,27,0,0,1,931.12,495a34.18,34.18,0,0,1,8.68-.58\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M916.25,509.81a14.25,14.25,0,0,1,10.26,4A23.41,23.41,0,0,1,932,522\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M908.47,505a54.74,54.74,0,0,0-37.32-6.93\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M907.16,505.7a54.73,54.73,0,0,0-38,.72\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M907.92,506.3a54.76,54.76,0,0,0-37.54,5.59\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M903.39,507.19a38,38,0,0,0-18.66,3,37.38,37.38,0,0,0-10.12,6.56\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M909,505.78a25.11,25.11,0,0,0-3.88-8,27.21,27.21,0,0,0-8.19-7.23,34.57,34.57,0,0,0-7.92-3.62\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-20\" d=\"M905.58,509.61a14.31,14.31,0,0,0-11,.07,23.28,23.28,0,0,0-8,5.81\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-13\" d=\"M914.42,488.53c2,.56-.45,6.49,2.9,14.48,1.65,3.94,3.39,5.26,2.7,7.53-1,3.14-5.79,5.5-7.72,4.63a4.72,4.72,0,0,0-2.51-.58c-.5,0-.62.15-1,.19-1.7.22-3.31-1.81-3.86-2.51a7.54,7.54,0,0,1-1.93-4.44c-.08-1.83.74-2.7,2.31-6s1.22-3.41,2.32-5.6C909,493.54,912.47,488,914.42,488.53Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-19\" d=\"M913.65,508.22a3.93,3.93,0,0,1-.77,2.89c-.18.19-.85.9-1.55.78a2.5,2.5,0,0,0-1-.2,1.78,1.78,0,0,0-.58.2,2.24,2.24,0,0,1-1.74-.39c-.9-.61-1-1.8-1.15-3.28-.12-1.29,0-2.49.19-2.51s.2,1.26,1.16,1.93a2.44,2.44,0,0,0,1.54.39,3.63,3.63,0,0,0,2.32-1.16c.64-.66.71-1.19,1-1.16C913.49,505.76,913.66,507.27,913.65,508.22Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-15\" d=\"M927.74,486.22c-.3,3.12,1.25,6.64,2.89,6.75.61,0,.79-.41,2.13-1.35,2.49-1.75,3.35-1.2,4.63-2.31,2.35-2,1.92-6,1.74-7.72-.16-1.46-.37-3.37-1.55-3.86-.33-.14-.89-.24-3.67,1.35s-4.3,2.47-5.21,4.05A7.74,7.74,0,0,0,927.74,486.22Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-3\" d=\"M919.83,492.2a6.36,6.36,0,0,0-.78,1.93c-.16.76-.06,1,0,1.13v0a2.72,2.72,0,0,0,1.55,1.16,2.44,2.44,0,0,0,1.93-.39,4.7,4.7,0,0,0,.38-1.54,4.54,4.54,0,0,0-.19-1.74,1.66,1.66,0,0,0-1.54-1.35A1.72,1.72,0,0,0,919.83,492.2Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-3\" d=\"M903.65,492a5,5,0,0,0-.64,1.49c-.13.59,0,.8,0,.87v0a2.52,2.52,0,0,0,1.18,1.08,2,2,0,0,0,1.7-.48,3.4,3.4,0,0,0,.16-2.53,1.35,1.35,0,0,0-1.28-1A1.46,1.46,0,0,0,903.65,492Z\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-21\" d=\"M920.14,493.28a1.59,1.59,0,0,0-.19.52c0,.21,0,.28,0,.31h0c0,.06.2.38.45.4a.52.52,0,0,0,.39-.2,1.19,1.19,0,0,0,.09-.41,1.23,1.23,0,0,0,0-.47.41.41,0,0,0-.38-.37A.4.4,0,0,0,920.14,493.28Z\" transform=\"translate(-809.83 -201.65)\"/><ellipse class=\"cls-21\" cx=\"95.46\" cy=\"291.65\" rx=\"0.53\" ry=\"0.64\"/><path class=\"cls-14\" d=\"M944.53,525.59c.44-.35.89-.73,1.35-1.16s1.09-1,1.54-1.54\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M948.68,526a10.89,10.89,0,0,0,.72-1.06,8.06,8.06,0,0,0,.63-1.35\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M953.6,525.4a3.48,3.48,0,0,0-.39-1.16,3.53,3.53,0,0,0-.77-1\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M899.05,532c0-.19.09-.47.13-.81,0-.17.12-.78.14-1\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M897.25,532a8.58,8.58,0,0,1,.57-1.35,9.2,9.2,0,0,1,.58-1\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M901,531.81a7.29,7.29,0,0,0-.05-.82c0-.16,0-.79-.06-1\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M903.17,532.14a7.62,7.62,0,0,0-.29-.76c-.07-.16-.28-.74-.35-.9\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M917.58,529.1a2.81,2.81,0,0,1,.12-.81,1.88,1.88,0,0,1,.39-.77c.51-.5,1.45-.22,1.54-.19\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M922.4,530.07a1.86,1.86,0,0,1-.26-.81,2,2,0,0,1,.19-1\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-14\" d=\"M919.83,530a3,3,0,0,1,.38-.77,3.53,3.53,0,0,1,.77-.78\" transform=\"translate(-809.83 -201.65)\"/><path class=\"cls-9\" d=\"M924.53,284.5c.14,3.24.11,5.95,0,8a15.31,15.31,0,0,1-1,5.05,13.4,13.4,0,0,1-1,1.95c-1.93,3.25-3.23,3.82-3,5,.18.94,1.17,1.52,2,2,1.26.74,1.42.34,3,1,1.37.57,1.91,1.25,3,1.68a5,5,0,0,0,2,.32\" transform=\"translate(-809.83 -201.65)\"/></svg>\r\n        </div>\r\n\r\n\r\n        <div class=\"card-text-right\">\r\n            \r\n            <p style=\"text-align: left\">Welcome to the digital version of your birthday celebration which\r\n            is immortalized on the internet for you to come and enjoy whenever you want!</p>\r\n\r\n            <p style=\"text-align: left\">I hope your 23rd birthday and 2nd year together with me was everything you wanted it to be, because for me, I couldn't\r\n            have asked for anything better!\r\n            </p>\r\n\r\n            <p>I love you so much</p>\r\n            <p>-Erik</p>\r\n\r\n            <p>Countdown to 24:</p>\r\n            <div class=\"countdown-to-birthday\">{{remainingTime}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/osmosisSolitaire/card-class.ts":
/*!*********************************************************!*\
  !*** ./src/app/projects/osmosisSolitaire/card-class.ts ***!
  \*********************************************************/
/*! exports provided: cardClass, pile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClass", function() { return cardClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pile", function() { return pile; });
var cardClass = /** @class */ (function () {
    function cardClass(suitName, numberSymbolName) {
        this.suit = suitName;
        this.numberSymbol = numberSymbolName;
    }
    return cardClass;
}());

var pile = /** @class */ (function () {
    function pile() {
        this.cards = [];
    }
    pile.prototype.shuffle = function () {
        var count = this.cards.length, randomnumber, temp;
        while (count) {
            randomnumber = Math.random() * count-- | 0;
            temp = this.cards[count];
            this.cards[count] = this.cards[randomnumber];
            this.cards[randomnumber] = temp;
        }
    };
    /* Checks incoming card against the numbers already placed in this suit */
    pile.prototype.numberMatch = function (card) {
        for (var i = 0; i < this.cards.length; i++) {
            if (card.numberSymbol === this.cards[i].numberSymbol) {
                return true;
            }
        }
        return false;
    };
    return pile;
}());



/***/ }),

/***/ "./src/app/projects/osmosisSolitaire/osmosis-solitaire-component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/projects/osmosisSolitaire/osmosis-solitaire-component.ts ***!
  \**************************************************************************/
/*! exports provided: OsmosisSolitaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsmosisSolitaireComponent", function() { return OsmosisSolitaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-class */ "./src/app/projects/osmosisSolitaire/card-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OsmosisSolitaireComponent = /** @class */ (function () {
    function OsmosisSolitaireComponent(zone) {
        this.zone = zone;
        /* Dropdown, default to 1000 games */
        this.gamesOptions = [
            { id: 100, name: "100 Games" },
            { id: 1000, name: "1000 Games" },
            { id: 10000, name: "10000 Games" },
            { id: 100000, name: "100000 Games" },
            { id: 1000000, name: "1000000 Games" }
        ];
        this.selectedValue = this.gamesOptions[1];
        /*************/
        this.suitsChars = ['S', 'C', 'H', 'D'];
        this.numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        /* Statistics */
        this.wins = 0;
        this.gamesRan = 0;
        this.highestSuitCount = 0;
        /**************/
        this.piles = [];
        this.elementNames = [
            'suitOne',
            'suitTwo',
            'suitThree',
            'suitFour'
        ];
        this.gamesRunning = false;
        /*
         * Piles represent the piles you begin with on the left
         * Suits are the piles you build using matching cards from previous suits
         *
        */
        this.suits = [];
        this.stack = [];
        this.countSuits = function (accumulator, currentVal) {
            if (accumulator instanceof _card_class__WEBPACK_IMPORTED_MODULE_1__["pile"]) {
                accumulator = accumulator.cards.length;
            } // Initialize, don't want to reduce whole object
            return accumulator + currentVal.cards.length;
        };
    }
    OsmosisSolitaireComponent.prototype.toggleRunning = function (toggle) {
        this.gamesRunning = toggle;
    };
    OsmosisSolitaireComponent.prototype.resetGame = function () {
        this.deck = new _card_class__WEBPACK_IMPORTED_MODULE_1__["pile"]();
        this.piles = [];
        this.suits = [];
        for (var i = 0; i < 4; i++) {
            this.suits[i] = new _card_class__WEBPACK_IMPORTED_MODULE_1__["pile"]();
        }
        this.stackFlipped = new _card_class__WEBPACK_IMPORTED_MODULE_1__["pile"]();
    };
    OsmosisSolitaireComponent.prototype.placeFromPile = function (pile) {
        while (pile.length > 0) {
            var check = true;
            var placed = false;
            var i = 0;
            while (i < 4 && check) { // Now we loop through the 4 suits, but if check is false do not continue
                if (i === 0 && pile[pile.length - 1].suit === this.suits[0].cards[0].suit && pile.length > 0) { // Handle first suit, which has no rules except the suit must match
                    this.suits[0].cards.push(pile.pop());
                    placed = true;
                }
                else if (i > 0 && this.suits[i].cards.length === 0 && this.suits[i - 1].cards.length > 0 &&
                    check && pile.length > 0) { // Empty suit check for 2, 3, 4, only check if previous suit is not empty
                    if (this.suits[i].cards.length === 0 && pile[pile.length - 1].numberSymbol === this.suits[i - 1].cards[0].numberSymbol) {
                        // If the suit of the card matches that of the first spot of the previous suit we can place 
                        this.suits[i].cards.push(pile.pop());
                        placed = true;
                    }
                }
                else if (i > 0 && this.suits[i].cards.length > 0 && check && pile.length > 0) { // If suit is not empty
                    if (pile[pile.length - 1].suit === this.suits[i].cards[0].suit) {
                        // If the suit matches we can place, doesn't need to match order after first
                        this.suits[i].cards.push(pile.pop());
                        placed = true;
                    }
                }
                /* This function runs when the card number already exists in a previous suit and it can
                  then be checked in a lower set */
                if (i < 3 && this.suits[i].cards.length > 0 && pile.length > 0) {
                    check = this.suits[i].numberMatch(pile[pile.length - 1]);
                }
                i++;
            }
            if (!placed) { // Checked card against all 4 piles and could not place, return here since it would run infinitely
                return { placed: placed, pile: pile };
            }
        }
        return { placed: placed, pile: pile }; // Out of cards in the pile so return status
    };
    /* Run DOM manipulation after a win is found */
    OsmosisSolitaireComponent.prototype.handleWin = function (gameNum, deckCopy) {
        this.resetWinningSuitsDivs();
        for (var s = 0; s < 4; s++) {
            if (this.suits[s].cards.length > 0) {
                this.appendCardElement(s, this.elementNames[s], true);
            }
        }
        this.wins++;
        document.getElementById('winloss').innerHTML = '' + this.wins + ' WIN(S)!';
        var winningDeckTag = document.createElement('p');
        winningDeckTag.innerHTML = 'Deck ' + this.wins + ' on run ' + (gameNum + this.gamesRan + 1);
        document.getElementById('winningDecks').insertBefore(winningDeckTag, document.getElementById('winningDecks').childNodes[0]);
        var winningDeckList = document.createElement("div");
        for (var _i = 0, deckCopy_1 = deckCopy; _i < deckCopy_1.length; _i++) {
            var card = deckCopy_1[_i];
            var winningDeckImg = document.createElement('img');
            winningDeckImg.setAttribute('style', 'height:20px;');
            winningDeckImg.setAttribute('src', '../assets/Vector-Playing-Cards-master/cards-svg/' + card.numberSymbol + card.suit + '.svg');
            winningDeckList.appendChild(winningDeckImg);
        }
        document.getElementById('winningDecks').insertBefore(winningDeckList, document.getElementById('winningDecks').childNodes[1]);
    };
    OsmosisSolitaireComponent.prototype.gameLoop = function (gameNum) {
        this.resetGame();
        /*Create the deck*/
        for (var j = 0; j < this.suitsChars.length; j++) {
            for (var k = 0; k < this.numbers.length; k++) {
                var card = void 0;
                card = new _card_class__WEBPACK_IMPORTED_MODULE_1__["cardClass"](this.suitsChars[j], this.numbers[k]);
                this.deck.cards.push(card);
            }
        }
        this.deck.shuffle();
        var deckCopy = this.deck.cards.map(function (x) { return x; }); // Use at end to show untouched winning deck
        for (var j = 0; j < 4; j++) {
            this.piles[j] = new _card_class__WEBPACK_IMPORTED_MODULE_1__["pile"]();
            for (var k = 0; k < 4; k++) {
                this.piles[j].cards.push(this.deck.cards.pop());
            }
        }
        this.suits[0].cards.push(this.deck.cards.pop());
        var placeCheck, numPlaced;
        while (this.suits.reduce(this.countSuits) <= 52) {
            numPlaced = 0;
            for (var j = 0; j < 4; j++) {
                /* Loop through the 4 piles */
                if (this.piles[j].cards.length > 0) { // Place from non-empty piles
                    placeCheck = this.placeFromPile(this.piles[j].cards);
                    if (placeCheck.placed) {
                        numPlaced++;
                        this.piles[j].cards = placeCheck.pile;
                    }
                }
            }
            /* Try and place from the deck first */
            if (this.deck.cards.length > 0) {
                placeCheck = this.placeFromPile(this.deck.cards);
                if (placeCheck.placed) {
                    numPlaced++;
                    this.deck.cards = placeCheck.pile;
                }
                else {
                    // Push onto the flipped card pile
                    this.stackFlipped.cards.push(this.deck.cards.pop());
                }
            }
            /* Then try the pile of flipped cards */
            if (this.stackFlipped.cards.length > 0) {
                placeCheck = this.placeFromPile(this.stackFlipped.cards);
                if (placeCheck.placed) {
                    numPlaced++;
                    this.stackFlipped.cards = placeCheck.pile;
                } // No else needed here, the card stays at top of flipped pile
            }
            if (this.suits.reduce(this.countSuits) === 52 || (numPlaced === 0 && this.deck.cards.length === 0)) {
                /* Either we have run out of cards to play or the suits are full */
                break;
            }
        }
        /* game has ended
          Check if the best score has been beaten */
        if ((this.highestSuitCount === 0) || (this.suits.reduce(this.countSuits) > this.highestSuitCount)) {
            this.highestSuitCount = this.suits.reduce(this.countSuits);
        }
        if (this.suits.reduce(this.countSuits) === 52) {
            this.handleWin(gameNum, deckCopy);
        }
    };
    /* Main entry point when "Run" button is clicked */
    OsmosisSolitaireComponent.prototype.runGames = function () {
        var _this = this;
        this.toggleRunning(true);
        this.runPercent = 0;
        setTimeout(function () {
            var _loop_1 = function (x) {
                _this.gameLoop(x);
                setTimeout(function () {
                    _this.runPercent = Math.floor((x / _this.selectedValue.id) * 100);
                }, 0);
            };
            for (var x = 0; x < _this.selectedValue.id; x++) {
                _loop_1(x);
            }
            /* Once games have run, turn loading off */
            _this.toggleRunning(false);
            /* Update statistic on the simulation(s):
              total games ran, highest num of cards placed into suits and win % */
            _this.gamesRan += _this.selectedValue.id;
            var gameCounter = document.getElementById('gameCounter');
            gameCounter.innerHTML = '' + (_this.gamesRan);
            var suitCount = document.getElementById('suitCount');
            suitCount.innerHTML = '' + (_this.highestSuitCount);
            var winPercentage = _this.wins / _this.gamesRan * 100;
            document.getElementById('winPercentage').innerHTML = '' + winPercentage + '%';
        }, 0);
    };
    /* resetWinningSuitsDivs - empties the divs where the cards are placed */
    OsmosisSolitaireComponent.prototype.resetWinningSuitsDivs = function () {
        for (var i = 0; i < 4; i++) {
            var suitNode = document.getElementById(this.elementNames[i]);
            while (suitNode.firstChild) {
                suitNode.removeChild(suitNode.firstChild);
            }
        }
    };
    /* appendCardElement - Show the cards that the player won with
     * @suitNum - which suit pile to check
     * @suitStr - the suit that the pile is
     * @endGame - if it's the end of the game and need to display
    */
    OsmosisSolitaireComponent.prototype.appendCardElement = function (suitNum, suitStr, endGame) {
        var suitChar = this.suits[suitNum].cards[0].suit;
        var suitElem;
        if (endGame) {
            for (var _i = 0, _a = this.suits[suitNum].cards; _i < _a.length; _i++) {
                var i = _a[_i];
                suitElem = document.createElement('img');
                suitElem.setAttribute('style', 'height:100px;width:14.28%;');
                suitElem.setAttribute('src', '../assets/Vector-Playing-Cards-master/cards-svg/'
                    + i.numberSymbol + suitChar + '.svg');
                document.getElementById(suitStr).appendChild(suitElem);
            }
        }
    };
    OsmosisSolitaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-osmosis-solitaire',
            styles: [__webpack_require__(/*! ./osmosis-solitaire.css */ "./src/app/projects/osmosisSolitaire/osmosis-solitaire.css")],
            template: __webpack_require__(/*! ./osmosis-solitaire.html */ "./src/app/projects/osmosisSolitaire/osmosis-solitaire.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OsmosisSolitaireComponent);
    return OsmosisSolitaireComponent;
}());



/***/ }),

/***/ "./src/app/projects/osmosisSolitaire/osmosis-solitaire.css":
/*!*****************************************************************!*\
  !*** ./src/app/projects/osmosisSolitaire/osmosis-solitaire.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: Ubuntu;\r\n}\r\n\r\n.osmosis-container {\r\n    margin-top: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.osmosis-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.play-game {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n}\r\n\r\n/* .play-game >* {\r\n\tflex: 1 1;\r\n} */\r\n\r\n.play-game>div {\r\n    margin: 10px;\r\n}\r\n\r\n.ngames-dropdown {\r\n    height: 50px;\r\n    width: 150px;\r\n    overflow: hidden;\r\n}\r\n\r\n.button {\r\n    background-color: #88BBD6;\r\n    border: 1px solid #000;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n}\r\n\r\n.suits {\r\n    background: #0F1626;\r\n    color: #F5F5F5;\r\n    /* fallback for old browsers */\r\n    border: 3px solid #000000;\r\n    width: 45%;\r\n    margin: 1% 1% 1% 1%;\r\n    padding: 1% 1% 1% 1%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.suit {\r\n    border: 1px solid #000000;\r\n    width: 100%;\r\n    min-height: 100px;\r\n    background-color: #000;\r\n}\r\n\r\n.suitTitle {\r\n    height: 25px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.info {\r\n    margin: 1% 1% 1% 1%;\r\n    padding: 1% 1% 1% 1%;\r\n    width: 45%;\r\n    background: #0F1626;\r\n    color: #A5A5A5;\r\n    border: 3px solid #000000;\r\n}"

/***/ }),

/***/ "./src/app/projects/osmosisSolitaire/osmosis-solitaire.html":
/*!******************************************************************!*\
  !*** ./src/app/projects/osmosisSolitaire/osmosis-solitaire.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"osmosis-container\">\r\n  <div class=\"info\" id=\"info\">\r\n    About: A simple application that runs this very hard version of solitaire (known as Osmosis Solitaire) through simulations\r\n    to find out just how hard it is to win. There is no strategy to the game so making an algorithm was\r\n    fairly straightforward.\r\n    <div class=\"osmosis-buttons\">\r\n      <a routerLink=\"/projects\" class=\"router-link\" style=\"text-decoration:none;\">\r\n        <button class=\"button\">Home</button>\r\n      </a>\r\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Osmosis_(solitaire)\" style=\"text-decoration:none;\">\r\n        <button class=\"button\">The Game Rules</button>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"play-game\">\r\n      <div>Games to play</div>\r\n      <div>\r\n        <select class=\"ngames-dropdown\" [(ngModel)]=\"selectedValue\">\r\n          <option *ngFor=\"let g of gamesOptions\" [ngValue]=\"g\">{{g.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"osmosis-buttons\">\r\n        <button class=\"button\" [disabled]=\"gamesRunning\" (click)=\"runGames()\">Run </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>Games Ran: <div id=\"gameCounter\"></div>\r\n    <br>Highest All Suits Count (closeness to winning): <div id=\"suitCount\"></div>\r\n    <br>Win Percentage: <div id=\"winPercentage\"></div>\r\n    <br> <div id=\"winloss\"></div>\r\n    Winning decks (bottom card is first):\r\n    <div id=\"winningDecks\"></div>\r\n  </div>\r\n  <div class=\"suits\" id=\"suits\">\r\n    <div *ngIf=\"gamesRunning\" id=\"loading-area\" class=\"loading-area\">\r\n      <p><b>Loading...</b></p>\r\n      <div class=\"runPercent\">{{runPercent}} %</div>\r\n      <svg class=\"spinner\" viewBox=\"25 25 50 50\">\r\n          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\r\n      </svg>\r\n    </div>\r\n    <div [hidden]=\"gamesRunning\">\r\n      Last Winning Suit Set\r\n      <div class=\"suitTitle\">Suit 1</div>\r\n      <div class=\"suit\" id=\"suitOne\"></div>\r\n\r\n      <div class=\"suitTitle\">Suit 2</div>\r\n      <div class=\"suit\" id=\"suitTwo\"></div>\r\n\r\n      <div class=\"suitTitle\">Suit 3</div>\r\n      <div class=\"suit\" id=\"suitThree\"></div>\r\n\r\n      <div class=\"suitTitle\">Suit 4</div>\r\n      <div class=\"suit\" id=\"suitFour\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/stateMachineCreator/state-machine-creator-component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/projects/stateMachineCreator/state-machine-creator-component.ts ***!
  \*********************************************************************************/
/*! exports provided: StateMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachineComponent", function() { return StateMachineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StateMachineComponent = /** @class */ (function () {
    function StateMachineComponent() {
        this.showCreateStateWindow = false;
        this.showStateMenu = false;
        this.menuPos = { x: '0px', y: '0px' };
        this.colours = [
            { label: 'Blue', hex: '#335DFF' },
            { label: 'Green', hex: '#10A314' },
            { label: 'Red', hex: '#DA2A1F' },
            { label: 'Yellow', hex: '#E3E90C' },
            { label: 'Purple', hex: '#7613A4' },
            { label: 'White', hex: '#FFFFFF' },
            { label: 'Black', hex: '#000000' }
        ];
    }
    StateMachineComponent.prototype.toggleStateMenu = function (event) {
        this.showStateMenu = !this.showStateMenu;
        if (this.showStateMenu) {
            this.focusedState = event.target.id.split(',');
            this.menuPos.x = event.clientX + 'px';
            this.menuPos.y = event.clientY + 'px';
        }
    };
    StateMachineComponent.prototype.createStateOption = function () {
        this.showStateMenu = !this.showStateMenu;
        this.showCreateStateWindow = !this.showCreateStateWindow;
    };
    StateMachineComponent.prototype.createState = function () {
    };
    StateMachineComponent.prototype.createEdgeOption = function () {
    };
    StateMachineComponent.prototype.deleteStateOption = function () {
    };
    StateMachineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state-machine',
            styles: [__webpack_require__(/*! ./state-machine-creator.scss */ "./src/app/projects/stateMachineCreator/state-machine-creator.scss")],
            template: __webpack_require__(/*! ./state-machine-creator.html */ "./src/app/projects/stateMachineCreator/state-machine-creator.html")
        })
    ], StateMachineComponent);
    return StateMachineComponent;
}());



/***/ }),

/***/ "./src/app/projects/stateMachineCreator/state-machine-creator.html":
/*!*************************************************************************!*\
  !*** ./src/app/projects/stateMachineCreator/state-machine-creator.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.display]=\"showCreateStateWindow ? 'block' : 'none'\" [style.top]=\"menuPos.y\" [style.left]=\"menuPos.x\" class=\"creation-window\">\r\n    <div class=\"create-state-title\">Create State</div>\r\n    <label class=\"input-area\">\r\n    Name:\r\n    <input class=\"input-box\" type=\"text\" name=\"nameInput\" placeholder=\"State\">\r\n  </label>\r\n    <label class=\"input-area\">\r\n    State Symbol:\r\n    <input class=\"input-box state-symbol\" type=\"text\" name=\"stateSymbolInput\" maxlength=\"1\" placeholder=\"A\">\r\n  </label>\r\n    <label class=\"input-area checkbox-area\">\r\n    Accept State:\r\n    <input class=\"input-box-hidden\" type=\"checkbox\" name=\"acceptStateInput\">\r\n    <span class=\"input-box-styled\"></span>\r\n  </label>\r\n    <label class=\"input-area dropdown-area\">\r\n    Colour:\r\n    <select class=\"input-colorpicker\" [(ngModel)]=\"selectedColour\" [style.background-color]=\"selectedColour?.hex\">\r\n      <option class=\"input-colorpicker-option\" [style.background-color]=\"c.hex\" *ngFor=\"let c of colours\" [ngValue]=\"c\">\r\n      </option>\r\n    </select>\r\n  </label>\r\n    <div class=\"input-area\">\r\n        <button (click)=\"showCreateStateWindow = !showCreateStateWindow\" class=\"button\">Cancel</button>\r\n        <button class=\"button\" (click)=\"createState()\">Create State</button>\r\n    </div>\r\n</div>\r\n<div [style.display]=\"showStateMenu ? 'block' : 'none'\" [style.top]=\"menuPos.y\" [style.left]=\"menuPos.x\" class=\"state-menu\">\r\n    <div class=\"state-menu-option\" (click)=\"createStateOption()\"><span>Create State</span></div>\r\n    <div class=\"state-menu-option\" (click)=\"createEdgeOption()\"><span>Create Edge</span></div>\r\n    <div class=\"state-menu-option\" (click)=\"deleteStateOption()\"><span>Delete State</span>\r\n    </div>\r\n</div>\r\n<div class=\"smc-area\">\r\n    <div class=\"creator-wrapper\">\r\n        <div class=\"info\">\r\n            <a routerLink=\"/home\" class=\"router-link\">\r\n                <button class=\"button\">Home</button>\r\n            </a>\r\n            <div>State Machine Creator</div>\r\n            Left click on a square to show menu.<br><br> Left click on created state and select \"Create Edge\" to create edge between states.\r\n        </div>\r\n        <div class=\"state-area\">\r\n            <div class=\"state-row\" *ngFor=\"let rows of ' '.repeat(100).split(''); let y = index\" [attr.data-index]=\"y\">\r\n                <div class=\"state-square\" (click)=\"toggleStateMenu($event)\" *ngFor=\"let number of ' '.repeat(100).split(''); let x = index\" [attr.data-index]=\"x\" [id]=\"y+','+x\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/stateMachineCreator/state-machine-creator.scss":
/*!*************************************************************************!*\
  !*** ./src/app/projects/stateMachineCreator/state-machine-creator.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin: 0; }\n\n.creation-window {\n  position: fixed;\n  background-color: #688388;\n  border: 2px solid #000;\n  color: #000; }\n\n.create-state-title {\n  text-align: center;\n  margin: 10px 0 10px 0; }\n\n.input-area {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.input-box.state-symbol {\n  width: 26px;\n  height: 24px;\n  text-align: center; }\n\n.input-box-hidden {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n  margin: 0;\n  opacity: 0; }\n\n.input-box-styled {\n  padding: 0px;\n  margin-left: 10px;\n  height: 23px;\n  width: 25px;\n  background-color: #FFF;\n  border: 2px solid #FFF;\n  -moz-appearance: textarea;\n       appearance: textarea;\n  -webkit-appearance: textarea; }\n\n.input-box-styled:hover {\n  background-color: #ccc; }\n\n.input-box-styled:after {\n  content: \"\";\n  position: relative;\n  display: none; }\n\n.checkbox-area input:checked ~ .input-box-styled {\n  background-color: #88BBD6; }\n\n.checkbox-area input:checked ~ .input-box-styled:after {\n  display: block; }\n\n.checkbox-area .input-box-styled:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.input-colorpicker {\n  width: 55px;\n  height: 28px; }\n\n.input-colorpicker-option {\n  height: 28px; }\n\n.smc-area {\n  width: 96vw;\n  margin: 0 auto;\n  margin-top: 2vh;\n  background-color: #CDCDCD;\n  color: #000;\n  padding: 15px 15px 15px 15px;\n  height: 100%; }\n\n.state-menu {\n  background-color: #688388;\n  position: absolute;\n  border: 1px solid black; }\n\n.state-menu .state-menu-option {\n    border: 1px solid black;\n    padding: 10px 10px 10px 10px; }\n\n.state-menu .state-menu-option span {\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n\n.state-menu .state-menu-option:hover {\n    background-color: white;\n    color: black; }\n\n/* .home-button {\r\n} */\n\n.creator-wrapper {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #000;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden; }\n\n.info {\n  width: 20%;\n  border: 1px solid #000;\n  padding: 10px; }\n\n.state-area {\n  max-width: 80%;\n  max-height: 90vh;\n  -ms-grid-row-align: center;\n      align-self: center;\n  overflow: scroll; }\n\n.state-row {\n  display: inline-flex;\n  vertical-align: top;\n  width: 100%;\n  top: 0; }\n\n.state-square {\n  align-self: flex-start;\n  border: 1px solid #000;\n  width: 50px;\n  height: 50px;\n  flex-shrink: 0;\n  /* //padding-bottom: 100px; */ }\n\n.state-square:hover {\n  background-color: #FF7F27; }\n"

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
setTimeout(function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
}, 1000);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Code\Website\erikhoffman-github-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
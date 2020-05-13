(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_content_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-content/page */ "./src/app/page-content/page.ts");
/* harmony import */ var _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-content/page-content.component */ "./src/app/page-content/page-content.component.ts");
/* harmony import */ var _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/osmosisSolitaire/osmosis-solitaire-component */ "./src/app/projects/osmosisSolitaire/osmosis-solitaire-component.ts");
/* harmony import */ var _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/stateMachineCreator/state-machine-creator-component */ "./src/app/projects/stateMachineCreator/state-machine-creator-component.ts");
/* harmony import */ var _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/birthdayCard/birthday-card-component */ "./src/app/projects/birthdayCard/birthday-card-component.ts");









const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__["PageContentComponent"], data: { page: _page_content_page__WEBPACK_IMPORTED_MODULE_2__["pages"][0] } },
    { path: 'projects', component: _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__["PageContentComponent"], data: { page: _page_content_page__WEBPACK_IMPORTED_MODULE_2__["pages"][1] }, children: [
            { path: 'osmosis-solitaire', component: _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_4__["OsmosisSolitaireComponent"] },
            { path: 'state-machine-creator', component: _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_5__["StateMachineComponent"] },
            { path: 'happybirthday', component: _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_6__["BirthdayCardComponent"] }
        ] },
    { path: 'resume', component: _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_3__["PageContentComponent"], data: { page: _page_content_page__WEBPACK_IMPORTED_MODULE_2__["pages"][2] } },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.title = 'Erik Hoffman Portfolio Site';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.metaService.addTags([
            { name: 'keywords', content: 'Angular, Universal, Portfolio, ErikHoffman' },
            { name: 'description', content: 'Angular Universal ErikHoffman Portfolio' },
            { name: 'robots', content: 'index, follow' }
        ]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-content/page-content.component */ "./src/app/page-content/page-content.component.ts");
/* harmony import */ var _directives_portfolio_content_portfolio_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/portfolio-content/portfolio-content.component */ "./src/app/directives/portfolio-content/portfolio-content.component.ts");
/* harmony import */ var _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/osmosisSolitaire/osmosis-solitaire-component */ "./src/app/projects/osmosisSolitaire/osmosis-solitaire-component.ts");
/* harmony import */ var _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/stateMachineCreator/state-machine-creator-component */ "./src/app/projects/stateMachineCreator/state-machine-creator-component.ts");
/* harmony import */ var _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/birthdayCard/birthday-card-component */ "./src/app/projects/birthdayCard/birthday-card-component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_4__["PageContentComponent"],
        _directives_portfolio_content_portfolio_content_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioContentComponent"],
        _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_6__["OsmosisSolitaireComponent"],
        _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_7__["StateMachineComponent"],
        _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_8__["BirthdayCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_4__["PageContentComponent"],
                    _directives_portfolio_content_portfolio_content_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioContentComponent"],
                    _projects_osmosisSolitaire_osmosis_solitaire_component__WEBPACK_IMPORTED_MODULE_6__["OsmosisSolitaireComponent"],
                    _projects_stateMachineCreator_state_machine_creator_component__WEBPACK_IMPORTED_MODULE_7__["StateMachineComponent"],
                    _projects_birthdayCard_birthday_card_component__WEBPACK_IMPORTED_MODULE_8__["BirthdayCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function PortfolioContentComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r0.localLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
} }
function PortfolioContentComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.name);
} }
class PortfolioContentComponent {
}
PortfolioContentComponent.ɵfac = function PortfolioContentComponent_Factory(t) { return new (t || PortfolioContentComponent)(); };
PortfolioContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioContentComponent, selectors: [["app-portfolio-section"]], inputs: { name: "name", description: "description", dates: "dates", localLink: "localLink", link: "link" }, decls: 9, vars: 4, consts: [[1, "portfolio-section"], [1, "portfolio-section--header"], ["class", "text-link text-link--dark-bkrnd", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "class", "text-link text-link--dark-bkrnd", 3, "href", 4, "ngIf"], [1, "portfolio-section--date"], [1, "portfolio-section--description"], [3, "innerHTML"], [1, "text-link", "text-link--dark-bkrnd", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "arrow", "arrow--right"], ["d", "M24 12l-12-8v5h-12v6h12v5z"], ["target", "_blank", 1, "text-link", "text-link--dark-bkrnd", 3, "href"]], template: function PortfolioContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioContentComponent_a_2_Template, 5, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioContentComponent_a_3_Template, 5, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localLink.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@media only screen and (max-width: 1001px) {\n  .portfolio-section[_ngcontent-%COMP%] {\n    min-width: 0px;\n  }\n}\n.portfolio-section--header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  float: left;\n}\n.portfolio-section--description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  align-items: center;\n  text-align: left;\n}\n.portfolio-section--date[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.portfolio-section--chevron[_ngcontent-%COMP%] {\n  height: 50px;\n  min-width: 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0aXZlcy9wb3J0Zm9saW8tY29udGVudC9DOlxcQ29kZVxcV2Vic2l0ZVxcZXJpay1ob2ZmbWFuLXdlYnNpdGUtYW5ndWxhci9zcmNcXGFwcFxcZGlyZWN0aXZlc1xccG9ydGZvbGlvLWNvbnRlbnRcXHBvcnRmb2xpby1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXJlY3RpdmVzL3BvcnRmb2xpby1jb250ZW50L3BvcnRmb2xpby1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0M7SUFDQyxjQUFBO0VDQUE7QUFDRjtBRElDO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FESUM7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBRElDO0VBQ0MsZ0JBQUE7QUNGRjtBRElDO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9kaXJlY3RpdmVzL3BvcnRmb2xpby1jb250ZW50L3BvcnRmb2xpby1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbG91cnMuc2Nzcyc7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMXB4KSB7XHJcblx0LnBvcnRmb2xpby1zZWN0aW9uIHtcclxuXHRcdG1pbi13aWR0aDogMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLnBvcnRmb2xpby1zZWN0aW9uIHtcclxuXHQmLS1oZWFkZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHR9XHJcblx0Ji0tZGVzY3JpcHRpb24ge1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHQmLS1kYXRlIHtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0fVxyXG5cdCYtLWNoZXZyb24ge1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0bWluLXdpZHRoOiA1MHB4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMXB4KSB7XG4gIC5wb3J0Zm9saW8tc2VjdGlvbiB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cbi5wb3J0Zm9saW8tc2VjdGlvbi0taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnBvcnRmb2xpby1zZWN0aW9uLS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucG9ydGZvbGlvLXNlY3Rpb24tLWRhdGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBvcnRmb2xpby1zZWN0aW9uLS1jaGV2cm9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-section',
                inputs: ['name', 'description', 'dates', 'localLink', 'link'],
                templateUrl: './portfolio-content.component.html',
                styleUrls: ['./portfolio-content.component.scss']
            }]
    }], null, null); })();


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
const projects = [
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
        description: 'Osmosis or Treasure Trove is a very easy to play but also hard to win Solitaire variation that is essentially a test' +
            ' of observation to see if you can not miss any potential moves.' +
            '<br><br>According to sites that gather data on the game and some test games played myself, the human win ratio sits around 10% while the simulator' +
            ' finds that the ratio is actually around 17% if every move is noticed.',
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
class Project {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/app/page-content/page.ts");
/* harmony import */ var _directives_portfolio_content_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/portfolio-content/portfolio */ "./src/app/directives/portfolio-content/portfolio.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_portfolio_content_portfolio_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/portfolio-content/portfolio-content.component */ "./src/app/directives/portfolio-content/portfolio-content.component.ts");









function PageContentComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContentComponent_div_0_li_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const page_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onSelect(page_r6, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", page_r6 === ctx_r1.selectedPage || page_r6 === ctx_r1.defaultPage && !ctx_r1.selectedPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](page_r6.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r6.name);
} }
function PageContentComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContentComponent_div_0_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const page_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onSelect(page_r9, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](page_r9.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9.name, " ");
} }
function PageContentComponent_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " -Computer Science Graduate-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-Full Stack Developer-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome to my website and portfolio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " My name is Erik Hoffman and I'm a software developer who enjoys using code to solve problems and create cool stuff! See my projects to check out my personal work or view my resume for my professional experience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageContentComponent_div_0_div_28_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-portfolio-section", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", project_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("description", project_r15.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("dates", project_r15.dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("localLink", project_r15.localLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("link", project_r15.link);
} }
function PageContentComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageContentComponent_div_0_div_28_div_5_Template, 2, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.projectsList);
} }
function PageContentComponent_div_0_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Download as PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageContentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageContentComponent_div_0_li_4_Template, 6, 5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContentComponent_div_0_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.hamburgerClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Erik Hoffman");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PageContentComponent_div_0_div_14_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Current Side Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PageContentComponent_div_0_div_27_Template, 15, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PageContentComponent_div_0_div_28_Template, 9, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PageContentComponent_div_0_div_29_Template, 6, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " This website is hosted on github pages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Check out the unbuilt Angular code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contact Me:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Email: erik_hoffman@outlook.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pagesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.showDropdown ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pagesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedPage.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedPage.id === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedPage.id === 3);
} }
class PageContentComponent {
    constructor(zone, router, location, platformLocation) {
        this.zone = zone;
        this.router = router;
        this.location = location;
        this.platformLocation = platformLocation;
        this.selectedPage = {
            id: -1,
            name: 'unrouted',
            route: 'unrouted',
            class: ''
        };
        this.defaultPage = _page__WEBPACK_IMPORTED_MODULE_1__["pages"][0];
        this.pagesList = _page__WEBPACK_IMPORTED_MODULE_1__["pages"];
        this.projectsList = _directives_portfolio_content_portfolio__WEBPACK_IMPORTED_MODULE_2__["projects"];
        this.showDropdown = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"];
        this.subscriptions.add(this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.routeToPage(e);
            }
        }));
        /* Subscribe to backbutton since it does not trigger router event */
        this.subscriptions.add(this.platformLocation.onPopState(() => {
            this.routeToPage();
        }));
        this.routeToPage();
    }
    ngOnInit() {
    }
    routeToPage(event) {
        this.routedPage = event ? event.url.slice(1) : window.location.hash.slice(2);
        Object.keys(this.pagesList).forEach(key => {
            if (this.pagesList[key].route.toUpperCase() === this.routedPage.toUpperCase()) {
                this.selectedPage = this.pagesList[key];
            }
        });
        if (this.selectedPage.id === -1) {
            this.selectedPage = this.defaultPage;
        }
    }
    hamburgerClick() {
        this.showDropdown = !this.showDropdown;
        document.getElementById('hamburger').classList.toggle('change');
    }
    onSelect(page, dropdown) {
        this.selectedPage = page;
        this.showDropdown = false;
        if (dropdown) {
            document.getElementById('hamburger').classList.toggle('change');
            document.getElementById('mobile-dropdown-main').style.display = 'none';
        }
        // this.router.navigateByUrl(`/${this.selectedPage.route.toLowerCase}`)
        this.location.go(`/${this.selectedPage.route.toLowerCase()}`);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
PageContentComponent.ɵfac = function PageContentComponent_Factory(t) { return new (t || PageContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"])); };
PageContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageContentComponent, selectors: [["app-page-content"]], decls: 4, vars: 1, consts: [["class", "page-content", 4, "ngIf"], [1, "button", "go-to-top"], [1, "page-content"], [1, "header"], [1, "navbar"], [1, "header-list"], [4, "ngFor", "ngForOf"], [1, "mobile-header"], [1, "mobile-navigation"], ["id", "hamburger", 1, "container", 3, "click"], [1, "bar1"], [1, "bar2"], [1, "bar3"], [1, "mobile-header-title"], ["id", "mobile-dropdown-main", 1, "mobile-dropdown"], [1, "centre"], [1, "dialog-top-nav"], [1, "about-portfolio-wrapper"], ["routerLink", "../projects/state-machine-creator", 1, "text-link", "text-link--dark-bkrnd"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "arrow", "arrow--right"], ["d", "M24 12l-12-8v5h-12v6h12v5z"], [1, "dialog"], [1, "curtain"], [1, "curtain--panel", "curtain--panel--left"], [1, "curtain--panel", "curtain--panel--right"], [1, "dialog-text"], ["id", "main-text", 4, "ngIf"], ["id", "portfolio-text", 4, "ngIf"], ["class", "resume-text", 4, "ngIf"], [1, "footer"], ["target", "_blank", "href", "https://github.com/ErikHoffman?tab=repositories", 1, "text-link", "text-link--light-bkrnd"], ["target", "_blank", "href", "https://bitbucket.org/ErikHoffman/erik-hoffman-website-angular", 1, "text-link", "text-link--light-bkrnd"], [1, "footer--icons-row"], ["title", "Linkedin", "href", "https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"], [1, "footer--icon", "linkedin-icon"], ["title", "Bitbucket", "href", "https://bitbucket.org/ErikHoffman/profile/repositories?visibility=all"], [1, "footer--icon", "bitbucket-icon"], [1, "header-link", 3, "click"], [1, "header-link-row", "full"], [1, "mobile-dropdown-option", 3, "click"], [1, "header-link-row"], ["id", "main-text"], ["maintext", ""], [1, "page-title"], ["id", "portfolio-text"], ["portfoliotext", ""], [1, "portfolio-wrapper"], ["class", "portfolio-flex-item", 4, "ngFor", "ngForOf"], [1, "portfolio-flex-item"], [3, "name", "description", "dates", "localLink", "link"], [1, "resume-text"], ["resumetext", ""], ["target", "_blank", "href", "assets/Erik_CIS_Resume.pdf", 1, "uncontained-link"]], template: function PageContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageContentComponent_div_0_Template, 51, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "^ Back To Top ^");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.routedPage.includes("projects/"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _directives_portfolio_content_portfolio_content_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioContentComponent"]], styles: [".about-portfolio-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #0F1626;\n  padding: 20px;\n  right: -3px;\n  z-index: 1;\n  border: 1px solid black;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.go-to-top[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.dialog-top-nav[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n  position: relative;\n  top: 141px;\n}\n\n@media only screen and (max-width: 700px) {\n  .dialog-top-nav[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n.portfolio-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.portfolio-wrapper[_ngcontent-%COMP%]   .portfolio-flex-item[_ngcontent-%COMP%] {\n  margin-right: 1%;\n  margin-left: 1%;\n  margin-top: 20px;\n  padding: 30px 30px 30px 30px;\n  background: #0F1626;\n  border: 1px solid #F5F5F5;\n  width: 25%;\n}\n\n@media only screen and (max-width: 1600px) {\n  .portfolio-wrapper[_ngcontent-%COMP%]   .portfolio-flex-item[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n@media only screen and (max-width: 1100px) {\n  .portfolio-wrapper[_ngcontent-%COMP%]   .portfolio-flex-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.footer--link[_ngcontent-%COMP%]:hover {\n  color: #F5F5F5;\n}\n\n.footer--link[_ngcontent-%COMP%]:hover   .arrow-right[_ngcontent-%COMP%] {\n  fill: #F5F5F5;\n  -webkit-animation: move-right ease 0.5s forwards;\n          animation: move-right ease 0.5s forwards;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: auto;\n  background-color: #EBD5B3;\n  border: 1px solid #EBD5B3;\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n  clear: both;\n  font-weight: bold;\n  font-size: 25px;\n  text-align: center;\n  color: #010203;\n}\n\n.footer--icon[_ngcontent-%COMP%] {\n  margin: 0 5px 0 0;\n  width: 45px;\n  height: 45px;\n}\n\n.footer--icons-row[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.footer[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n\n@media only screen and (max-width: 1001px) {\n  .footer[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .footer[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jb250ZW50L0M6XFxDb2RlXFxXZWJzaXRlXFxlcmlrLWhvZmZtYW4td2Vic2l0ZS1hbmd1bGFyL3NyY1xcYXBwXFxwYWdlLWNvbnRlbnRcXHBhZ2UtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS1jb250ZW50L0M6XFxDb2RlXFxXZWJzaXRlXFxlcmlrLWhvZmZtYW4td2Vic2l0ZS1hbmd1bGFyL3NyY1xcc3R5bGVzXFxjb2xvdXJzLnNjc3MiLCJzcmMvYXBwL3BhZ2UtY29udGVudC9wYWdlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxrQkFBQTtFQUNBLHlCQ0ZNO0VER04sYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FFQUQ7O0FGR0E7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRUFEOztBRkdBO0VBQ0MsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUVBRDs7QUZHQTtFQUNDO0lBQ0MsVUFBQTtFRUFBO0FBQ0Y7O0FGR0E7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FFREQ7O0FGRUM7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUVBRjs7QUZFQztFQUNDO0lBQ0MsVUFBQTtFRUFEO0FBQ0Y7O0FGRUM7RUFDQztJQUNDLFdBQUE7RUVBRDtBQUNGOztBRklBO0VBQ0MsY0M1RGE7QUMyRGQ7O0FGRUM7RUFDQyxhQzlEWTtFRCtEWixnREFBQTtVQUFBLHdDQUFBO0FFQUY7O0FGSUE7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkM5RFc7RUQrRFgseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRUREOztBRkVDO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRUFGOztBRkVDO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUVBRjs7QUZFQztFQUNDLGtCQUFBO0FFQUY7O0FGSUE7RUFDQztJQUNDLGVBQUE7RUVEQTtBQUNGOztBRklBO0VBQ0M7SUFDQyxlQUFBO0VFRkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtY29udGVudC9wYWdlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29sb3Vycy5zY3NzJztcclxuLmFib3V0LXBvcnRmb2xpby13cmFwcGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJG5hdnk7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRyaWdodDogLTNweDtcclxuXHR6LWluZGV4OiAxO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5nby10by10b3Age1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMDtcclxuXHRyaWdodDogMDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRpYWxvZy10b3AtbmF2IHtcclxuXHR3aWR0aDogNzAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDE0MXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcblx0LmRpYWxvZy10b3AtbmF2IHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0fVxyXG59XHJcblxyXG4ucG9ydGZvbGlvLXdyYXBwZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC5wb3J0Zm9saW8tZmxleC1pdGVtIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMSU7XHJcblx0XHRtYXJnaW4tbGVmdDogMSU7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0cGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcclxuXHRcdGJhY2tncm91bmQ6ICMwRjE2MjY7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAkd2hpdGUtc21va2U7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG5cdFx0LnBvcnRmb2xpby1mbGV4LWl0ZW0ge1xyXG5cdFx0XHR3aWR0aDogMzUlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG5cdFx0LnBvcnRmb2xpby1mbGV4LWl0ZW0ge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5mb290ZXItLWxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAkd2hpdGUtc21va2U7XHJcblx0LmFycm93LXJpZ2h0IHtcclxuXHRcdGZpbGw6ICR3aGl0ZS1zbW9rZTtcclxuXHRcdGFuaW1hdGlvbjogbW92ZS1yaWdodCBlYXNlIDAuNXMgZm9yd2FyZHM7XHJcblx0fVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHBhcmNobWVudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAkcGFyY2htZW50O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG5cdGNsZWFyOiBib3RoO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICMwMTAyMDM7XHJcblx0Ji0taWNvbiB7XHJcblx0XHRtYXJnaW46IDAgNXB4IDAgMDtcclxuXHRcdHdpZHRoOiA0NXB4O1xyXG5cdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdH1cclxuXHQmLS1pY29ucy1yb3cge1xyXG5cdFx0bWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQudGV4dC1saW5rIHtcclxuXHRcdG1hcmdpbjogMCAwIDIwcHggMDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMXB4KSB7XHJcblx0LmZvb3RlciB7XHJcblx0XHRmb250LXNpemU6IDIwcHhcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuXHQuZm9vdGVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHR9XHJcbn0iLCIkd2hpdGUtc21va2U6ICNGNUY1RjU7XHJcbiRuYXZ5OiAjMEYxNjI2O1xyXG4kbGltZS1ncmVlbjogIzcwQzk4OTtcclxuJGRhcmtlci1saW1lOiAjNDVCNjY0O1xyXG4kZGFya2VyLWxpbWUtc2F0dXJhdGVkOiAjMzdDNDVFO1xyXG4kZGFya2VyLWxpbWUtbGlnaHRlcjogIzcxQzk4OTtcclxuJG5pY2UtZGFyay1ibHVlOiAjMDExNzJEO1xyXG4kbmljZS1ncmV5LWJsdWU6ICMwRDQyNTQ7XHJcbiRwYXJjaG1lbnQ6ICNFQkQ1QjM7IiwiLmFib3V0LXBvcnRmb2xpby13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYxNjI2O1xuICBwYWRkaW5nOiAyMHB4O1xuICByaWdodDogLTNweDtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uZ28tdG8tdG9wIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kaWFsb2ctdG9wLW5hdiB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTQxcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRpYWxvZy10b3AtbmF2IHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4ucG9ydGZvbGlvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBvcnRmb2xpby13cmFwcGVyIC5wb3J0Zm9saW8tZmxleC1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMEYxNjI2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xuICB3aWR0aDogMjUlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLnBvcnRmb2xpby13cmFwcGVyIC5wb3J0Zm9saW8tZmxleC1pdGVtIHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAucG9ydGZvbGlvLXdyYXBwZXIgLnBvcnRmb2xpby1mbGV4LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5mb290ZXItLWxpbms6aG92ZXIge1xuICBjb2xvcjogI0Y1RjVGNTtcbn1cbi5mb290ZXItLWxpbms6aG92ZXIgLmFycm93LXJpZ2h0IHtcbiAgZmlsbDogI0Y1RjVGNTtcbiAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0IGVhc2UgMC41cyBmb3J3YXJkcztcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkQ1QjM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkQ1QjM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMTAyMDM7XG59XG4uZm9vdGVyLS1pY29uIHtcbiAgbWFyZ2luOiAwIDVweCAwIDA7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uZm9vdGVyLS1pY29ucy1yb3cge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb3RlciAudGV4dC1saW5rIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDFweCkge1xuICAuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-content',
                templateUrl: './page-content.component.html',
                styleUrls: ['./page-content.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"] }]; }, null); })();


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
const pages = [
    { id: 1, name: 'About Me', route: 'Home', class: 'header-icon about-icon' },
    { id: 2, name: 'Projects', route: 'Projects', class: 'header-icon projects-icon' },
    { id: 3, name: 'Resume', route: 'Resume', class: 'header-icon resume-icon' }
];
class Page {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BirthdayCardComponent {
    constructor() {
        this.nextBirthday = new Date('12/22/2019');
    }
    ngOnInit() {
        this.findRemainingTime();
    }
    findRemainingTime() {
        setTimeout(() => {
            let currentTime = new Date();
            let totalSecondsTime = (this.nextBirthday.getTime() - currentTime.getTime()) / 1000;
            let days = Math.floor(totalSecondsTime / 86400);
            totalSecondsTime = totalSecondsTime - (days * 86400);
            let hours = Math.floor(totalSecondsTime / 3600);
            totalSecondsTime = totalSecondsTime - (hours * 3600);
            let minutes = Math.floor(totalSecondsTime / 60);
            totalSecondsTime = Math.floor(totalSecondsTime - (minutes * 60));
            this.remainingTime = days + ' days, ' + hours + ' hours ' + minutes + ' minutes and ' + totalSecondsTime + ' seconds!';
            this.findRemainingTime();
        }, 1000);
    }
}
BirthdayCardComponent.ɵfac = function BirthdayCardComponent_Factory(t) { return new (t || BirthdayCardComponent)(); };
BirthdayCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirthdayCardComponent, selectors: [["app-birthday-card"]], decls: 121, vars: 1, consts: [["href", "http://fonts.googleapis.com/css?family=Merienda+One", "rel", "stylesheet", "type", "text/css"], [1, "birthday-card-container"], [1, "card-area"], [1, "image-left"], ["id", "Robyn", "height", "600px", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 228.67 746.08"], ["id", "CurlsL"], ["d", "M884.9,277.82a3.25,3.25,0,0,0,0,.92,14.38,14.38,0,0,1,0,3.69c-.59,1.53-3.87,1.19-7.18,2.5-4.87,1.94-9.61,7.37-9.37,10.84.11,1.67,1.37,2.76,3.65,4.73s4.45,2.82,4.09,4.18a2.2,2.2,0,0,1-.89,1.12c-1.56,1-2.81-1-5.41-.66a7.14,7.14,0,0,0-4.48,2.84,6,6,0,0,0-1.32,4.44,3.31,3.31,0,0,0,1.83,2.37c2,.81,5-.75,5.39-2.11a1.34,1.34,0,0,0-.92-1.65c-.59-.07-1.34.5-1.34.76,0,.08.06.1.45.36s.47.32.45.36a1.43,1.43,0,0,1-1.35-.16,1.76,1.76,0,0,1-.47-2.2c.62-.88,2.14.12,4.95-.63a7.8,7.8,0,0,0,4-2.28,7,7,0,0,0,1.75-5c-.18-2.19-1.65-2.09-2.29-4.57-.41-1.57-.55-4.38.85-5.73s3,.2,5.85-.83c4.11-1.48,6.39-6.77,6.69-7.47,1.33-3.09,2.24-8,.37-8.85C888.74,274.06,885.32,276.07,884.9,277.82Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M885.82,281a3,3,0,0,0,.12.91,14.86,14.86,0,0,1,.49,3.65c-.41,1.6-3.7,1.66-6.83,3.38-4.59,2.52-8.63,8.49-8,11.9.32,1.64,1.7,2.56,4.21,4.25s4.76,2.24,4.57,3.64a2.12,2.12,0,0,1-.75,1.22c-1.42,1.22-2.91-.65-5.45,0a7.12,7.12,0,0,0-4.1,3.36,6,6,0,0,0-.75,4.57,3.24,3.24,0,0,0,2.1,2.12c2.1.57,4.88-1.36,5.09-2.75a1.33,1.33,0,0,0-1.12-1.52c-.59,0-1.27.65-1.24.92,0,.07.08.08.5.3s.5.26.49.3a1.45,1.45,0,0,1-1.36,0,1.77,1.77,0,0,1-.74-2.13c.51-1,2.14-.14,4.84-1.24a7.75,7.75,0,0,0,3.72-2.75,7,7,0,0,0,1.13-5.18c-.45-2.15-1.89-1.87-2.83-4.26-.6-1.5-1.08-4.27.14-5.78s3-.17,5.7-1.54c3.9-2,5.51-7.5,5.73-8.24.94-3.23,1.24-8.19-.72-8.83C889.17,276.83,886,279.24,885.82,281Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M888.57,297.34a3.63,3.63,0,0,0,.29.87,14.65,14.65,0,0,1,1.14,3.5c-.1,1.65-3.33,2.31-6.09,4.56-4.06,3.32-6.94,9.93-5.66,13.16.61,1.56,2.13,2.21,4.9,3.41s5.1,1.34,5.16,2.75a2.16,2.16,0,0,1-.51,1.33c-1.17,1.47-3-.1-5.36,1A7.15,7.15,0,0,0,879,332a6,6,0,0,0,.09,4.63,3.26,3.26,0,0,0,2.45,1.71c2.17.17,4.56-2.23,4.5-3.64a1.33,1.33,0,0,0-1.37-1.29c-.58.1-1.13.87-1.05,1.13,0,.07.09.07.54.2s.54.17.54.21a1.46,1.46,0,0,1-1.34.25,1.76,1.76,0,0,1-1.11-2c.33-1,2.08-.52,4.53-2.09a7.75,7.75,0,0,0,3.16-3.39,7.08,7.08,0,0,0,.17-5.3c-.84-2-2.21-1.49-3.57-3.66-.86-1.37-1.84-4-.92-5.72s2.92-.71,5.33-2.55c3.47-2.65,4-8.38,4.13-9.15.33-3.34-.28-8.28-2.32-8.55C891.1,292.6,888.45,295.54,888.57,297.34Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M903.5,285.5c-.14.25-.25.32-1,1-2.52,2.28-3.78,3.42-4,4-.84,2.19,3.94,4.67,7,9,4.49,6.36,5,16.42,1,20-1.94,1.72-4.8,1.82-10,2s-9-.8-10,1a2.48,2.48,0,0,0,0,2c1,2.5,4.86,1.35,8,4a8.89,8.89,0,0,1,3,7c0,.66-.17,4.08-3,6a6.61,6.61,0,0,1-5,1c-3.59-.86-6-5.19-5-7a2.51,2.51,0,0,1,3-1c.87.43,1.28,1.71,1,2-.08.09-.2.05-1,0s-1-.06-1,0,.9.95,2,1c1.34.07,2.93-.95,3-2,.11-1.51-3-1.73-6-5a10,10,0,0,1-3-6,8.77,8.77,0,0,1,3-7c2.6-2.23,4.46-.85,8-3,2.23-1.36,5.43-4.31,5-7s-4.26-2.4-7-6c-4-5.19-1.35-13-1-14,1.52-4.53,5.55-10.66,9-10C902.35,278.05,904.81,283.22,903.5,285.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M884.9,261.82a3.25,3.25,0,0,0,0,.92,14.38,14.38,0,0,1,0,3.69c-.59,1.53-3.87,1.19-7.18,2.5-4.87,1.94-9.61,7.37-9.37,10.84.11,1.67,1.37,2.76,3.65,4.73s4.45,2.82,4.09,4.18a2.2,2.2,0,0,1-.89,1.12c-1.56,1-2.81-1-5.41-.66a7.14,7.14,0,0,0-4.48,2.84,6,6,0,0,0-1.32,4.44,3.31,3.31,0,0,0,1.83,2.37c2,.81,5-.75,5.39-2.11a1.34,1.34,0,0,0-.92-1.65c-.59-.07-1.34.5-1.34.76,0,.08.06.1.45.36s.47.32.45.36a1.43,1.43,0,0,1-1.35-.16,1.76,1.76,0,0,1-.47-2.2c.62-.88,2.14.12,4.95-.63a7.8,7.8,0,0,0,4-2.28,7,7,0,0,0,1.75-5c-.18-2.19-1.65-2.09-2.29-4.57-.41-1.57-.55-4.38.85-5.73s3,.2,5.85-.83c4.11-1.48,6.39-6.77,6.69-7.47,1.33-3.09,2.24-8,.37-8.85C888.74,258.06,885.32,260.07,884.9,261.82Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M896.08,273a4,4,0,0,0,0,1.12c0,2.68,0,4-.17,4.51-.81,1.89-4.74,1.54-8.81,3.22-6,2.48-12,9.22-11.92,13.46.05,2,1.5,3.34,4.14,5.71s5.2,3.34,4.69,5a2.9,2.9,0,0,1-1.13,1.39c-2,1.31-3.34-1.16-6.5-.68a9.3,9.3,0,0,0-5.56,3.57c-.36.47-2.23,2.9-1.84,5.46a3.7,3.7,0,0,0,2.07,2.85c2.38.95,6.09-1,6.62-2.7a1.53,1.53,0,0,0-1-2,1.9,1.9,0,0,0-1.67,1c0,.09.08.12.53.43s.55.38.52.43a1.68,1.68,0,0,1-1.62-.17,2.11,2.11,0,0,1-.44-2.68c.8-1.09,2.58.1,6-.88a10,10,0,0,0,5-2.87,9.19,9.19,0,0,0,2.41-6.16c-.1-2.67-1.87-2.51-2.51-5.54-.4-1.9-.41-5.34,1.35-7s3.61.18,7.11-1.14c5-1.9,8.08-8.41,8.49-9.29,1.78-3.8,3.15-9.8,1-10.83C900.93,268.27,896.69,270.8,896.08,273Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M900.06,285.42a5.09,5.09,0,0,1-1.18.79c-2.9,1.75-4.36,2.63-4.69,3.16-1.25,2,3,5.34,5.15,10.17,3.19,7.1,1.81,17.08-2.84,19.82-2.24,1.32-5.07.87-10.2.05s-8.7-2.51-10-.93a2.52,2.52,0,0,0-.38,2c.49,2.64,4.51,2.26,7.09,5.46a8.9,8.9,0,0,1,1.6,7.44,7.58,7.58,0,0,1-4.09,5.32,6.56,6.56,0,0,1-5.1,0c-3.36-1.53-4.86-6.23-3.57-7.82a2.52,2.52,0,0,1,3.14-.41c.77.59.93,1.92.6,2.15-.1.07-.21,0-1-.19s-1-.24-1-.19.71,1.1,1.77,1.37c1.3.32,3.06-.38,3.33-1.39.39-1.46-2.63-2.28-4.93-6.06a9.92,9.92,0,0,1-1.8-6.46,8.78,8.78,0,0,1,4.29-6.3c3-1.69,4.54,0,8.42-1.41,2.45-.91,6.16-3.19,6.25-5.92s-3.72-3.17-5.72-7.23c-2.89-5.85,1.15-13,1.69-13.93,2.36-4.16,7.49-9.4,10.75-8.09C900.35,277.88,901.78,283.43,900.06,285.42Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M894.34,295.38a3.63,3.63,0,0,0-.09,1.09c-.06,2.6-.1,3.9-.33,4.36-.85,1.74-4.7.94-8.76,2.1-5.95,1.7-12.1,7.55-12.17,11.67,0,2,1.34,3.42,3.84,6s5,3.85,4.43,5.42a2.55,2.55,0,0,1-1.17,1.21c-2,1.05-3.22-1.51-6.34-1.42a8.36,8.36,0,0,0-5.59,2.81c-.37.42-2.29,2.57-2,5.09a4,4,0,0,0,1.92,3c2.31,1.2,6-.29,6.59-1.85a1.6,1.6,0,0,0-.92-2.05c-.68-.16-1.64.42-1.66.73,0,.1.07.13.5.48s.52.44.5.49a1.76,1.76,0,0,1-1.59-.36,2.1,2.1,0,0,1-.33-2.66c.82-1,2.52.41,5.92-.15a9.06,9.06,0,0,0,5-2.2,8.23,8.23,0,0,0,2.58-5.7c0-2.61-1.74-2.66-2.26-5.67-.32-1.9-.2-5.24,1.58-6.66s3.54.59,7-.28c5-1.25,8.24-7.23,8.67-8,1.89-3.49,3.45-9.15,1.33-10.41C899.26,291.41,895,293.37,894.34,295.38Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M906.9,306.82a3.25,3.25,0,0,0,0,.92,14.38,14.38,0,0,1,0,3.69c-.59,1.53-3.87,1.19-7.18,2.5-4.87,1.94-9.61,7.37-9.37,10.84.11,1.67,1.37,2.76,3.65,4.73s4.45,2.82,4.09,4.18a2.2,2.2,0,0,1-.89,1.12c-1.56,1-2.81-1-5.41-.66a7.14,7.14,0,0,0-4.48,2.84,6,6,0,0,0-1.32,4.44,3.31,3.31,0,0,0,1.83,2.37c2,.81,5-.75,5.39-2.11a1.34,1.34,0,0,0-.92-1.65c-.59-.07-1.34.5-1.34.76,0,.08.06.1.45.36s.47.32.45.36a1.43,1.43,0,0,1-1.35-.16,1.76,1.76,0,0,1-.47-2.2c.62-.88,2.14.12,4.95-.63a7.8,7.8,0,0,0,4-2.28,7,7,0,0,0,1.75-5c-.18-2.19-1.65-2.09-2.29-4.57-.41-1.57-.55-4.38.85-5.73s3,.2,5.85-.83c4.11-1.48,6.39-6.77,6.69-7.47,1.33-3.09,2.24-8,.37-8.85C910.74,303.06,907.32,305.07,906.9,306.82Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["id", "CurlsR"], ["d", "M967.36,289.55a2.7,2.7,0,0,1-.37.85,14,14,0,0,0-1.48,3.37c-.06,1.64,3.08,2.62,5.61,5.14,3.71,3.7,5.92,10.56,4.33,13.65-.76,1.49-2.35,2-5.22,2.91s-5.2.83-5.41,2.22a2.18,2.18,0,0,0,.38,1.38c1,1.57,3,.19,5.23,1.54a7.13,7.13,0,0,1,3,4.37c.1.46.67,2.85-.55,4.6a3.3,3.3,0,0,1-2.61,1.46c-2.18-.05-4.32-2.68-4.12-4.07a1.32,1.32,0,0,1,1.49-1.15c.57.16,1,1,.94,1.23,0,.07-.1.06-.56.15s-.56.11-.56.15a1.43,1.43,0,0,0,1.3.39,1.78,1.78,0,0,0,1.31-1.84c-.23-1.06-2-.73-4.3-2.54a7.7,7.7,0,0,1-2.81-3.68,7,7,0,0,1,.36-5.29c1-1.94,2.34-1.27,3.91-3.29,1-1.28,2.23-3.81,1.48-5.6s-2.84-1-5.05-3.07c-3.19-3-3.19-8.74-3.2-9.51,0-3.36,1.1-8.21,3.16-8.28C965.32,284.58,967.67,287.78,967.36,289.55Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M968,288.23a3.54,3.54,0,0,1,.08.92,14.8,14.8,0,0,0,.3,3.67c.74,1.47,4,.83,7.39,1.84,5,1.48,10.24,6.45,10.33,9.92,0,1.67-1.11,2.87-3.2,5.05s-4.17,3.21-3.69,4.53a2.2,2.2,0,0,0,1,1c1.65.89,2.7-1.26,5.33-1.15a7.1,7.1,0,0,1,4.72,2.41,6,6,0,0,1,1.72,4.3,3.3,3.3,0,0,1-1.6,2.53c-1.93,1-5.07-.29-5.56-1.61a1.32,1.32,0,0,1,.76-1.72,1.45,1.45,0,0,1,1.41.63c0,.08-.06.1-.42.4s-.44.37-.42.4a1.43,1.43,0,0,0,1.33-.28,1.76,1.76,0,0,0,.27-2.24c-.7-.82-2.12.32-5-.17a7.74,7.74,0,0,1-4.23-1.9,7,7,0,0,1-2.21-4.82c0-2.19,1.45-2.23,1.87-4.76.26-1.59.14-4.41-1.38-5.62s-3,.47-5.9-.29c-4.23-1.09-7-6.15-7.35-6.82-1.61-3-3-7.74-1.19-8.78C963.83,284.85,967.42,286.53,968,288.23Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M978.36,291a3.05,3.05,0,0,1,0,.92,14.73,14.73,0,0,0-.15,3.68c.55,1.55,3.83,1.31,7.11,2.73,4.81,2.08,9.37,7.66,9,11.12-.17,1.66-1.45,2.71-3.79,4.61s-4.54,2.68-4.22,4.05a2.24,2.24,0,0,0,.85,1.15c1.53,1.08,2.84-.92,5.43-.49a7.14,7.14,0,0,1,4.4,3,6.05,6.05,0,0,1,1.17,4.48,3.24,3.24,0,0,1-1.89,2.31c-2,.76-5-.9-5.33-2.27a1.33,1.33,0,0,1,1-1.62c.59-.05,1.33.54,1.32.8,0,.08-.07.1-.46.35s-.48.3-.47.34a1.43,1.43,0,0,0,1.36-.12,1.76,1.76,0,0,0,.54-2.18c-.6-.91-2.15,0-4.93-.79a7.75,7.75,0,0,1-4-2.39,7.06,7.06,0,0,1-1.6-5.06c.25-2.18,1.71-2,2.44-4.5.45-1.55.68-4.35-.68-5.75s-3,.11-5.82-1c-4.06-1.61-6.18-7-6.46-7.68-1.24-3.13-2-8-.1-8.86C974.63,287.09,978,289.19,978.36,291Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M969.15,308.19a3.35,3.35,0,0,1-.2.89,14.66,14.66,0,0,0-.82,3.6c.26,1.62,3.53,2,6.49,4,4.35,2.92,7.82,9.24,6.85,12.58-.46,1.6-1.92,2.4-4.57,3.84s-4.95,1.81-4.89,3.21a2.17,2.17,0,0,0,.64,1.29c1.3,1.34,3-.38,5.43.51a7.1,7.1,0,0,1,3.77,3.72,6,6,0,0,1,.34,4.62,3.26,3.26,0,0,1-2.29,1.93c-2.14.37-4.74-1.8-4.81-3.21a1.32,1.32,0,0,1,1.24-1.41c.59.05,1.21.77,1.15,1,0,.08-.08.09-.52.26s-.52.21-.52.26a1.5,1.5,0,0,0,1.36.13,1.78,1.78,0,0,0,.93-2.06c-.42-1-2.12-.33-4.71-1.67a7.74,7.74,0,0,1-3.46-3.08,7.05,7.05,0,0,1-.65-5.26c.65-2.1,2.06-1.69,3.21-4,.74-1.44,1.47-4.16.39-5.77s-3-.45-5.54-2.06c-3.7-2.32-4.8-8-5-8.72-.65-3.3-.49-8.27,1.52-8.73C966.19,303.7,969.11,306.39,969.15,308.19Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M955.19,297.59c.16.24.27.3,1.09.91,2.71,2,4.07,3.05,4.35,3.61,1,2.11-3.5,5-6.14,9.61-3.89,6.74-3.51,16.81.85,20,2.09,1.53,4.95,1.37,10.14,1.06s8.91-1.62,10,.08a2.5,2.5,0,0,1,.18,2c-.75,2.58-4.72,1.8-7.6,4.72a8.91,8.91,0,0,0-2.34,7.25,7.63,7.63,0,0,0,3.54,5.7,6.57,6.57,0,0,0,5.07.53c3.5-1.19,5.46-5.72,4.34-7.43a2.52,2.52,0,0,0-3.08-.72c-.83.51-1.12,1.82-.81,2.08.09.08.2,0,1-.09s1-.15,1-.09-.81,1-1.9,1.18c-1.33.19-3-.68-3.17-1.72-.25-1.49,2.85-2,5.51-5.53a9.85,9.85,0,0,0,2.43-6.25,8.75,8.75,0,0,0-3.63-6.69c-2.79-2-4.52-.43-8.24-2.25-2.35-1.15-5.81-3.79-5.62-6.51s4-2.78,6.41-6.62c3.46-5.54.15-13-.29-14-1.93-4.38-6.51-10.11-9.89-9.13C955.65,290.07,953.67,295.44,955.19,297.59Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M966.48,291.7a3.54,3.54,0,0,1,.08.92,14.8,14.8,0,0,0,.3,3.67c.74,1.47,4,.83,7.39,1.84,5,1.48,10.24,6.45,10.33,9.92,0,1.67-1.11,2.87-3.2,5.05s-4.17,3.21-3.69,4.53a2.2,2.2,0,0,0,1,1c1.65.89,2.71-1.26,5.33-1.15a7.1,7.1,0,0,1,4.72,2.41,6,6,0,0,1,1.72,4.3,3.3,3.3,0,0,1-1.6,2.53c-1.93,1-5.07-.29-5.56-1.61a1.32,1.32,0,0,1,.76-1.72,1.45,1.45,0,0,1,1.41.63c0,.08-.06.1-.42.4s-.44.37-.42.4a1.45,1.45,0,0,0,1.34-.28,1.77,1.77,0,0,0,.26-2.24c-.7-.82-2.12.32-5-.17a7.74,7.74,0,0,1-4.23-1.9,7,7,0,0,1-2.21-4.82c0-2.19,1.45-2.23,1.87-4.76.26-1.6.14-4.41-1.38-5.62s-3,.47-5.9-.29c-4.23-1.09-7-6.15-7.35-6.83-1.61-2.95-3-7.73-1.19-8.77C962.31,288.32,965.9,290,966.48,291.7Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M968.16,283.94a3.57,3.57,0,0,1,.15,1.12c.22,2.66.33,4,.59,4.47,1,1.81,4.85,1.1,9.07,2.4,6.18,1.91,12.8,8.07,13.1,12.3.14,2-1.18,3.46-3.59,6.06s-4.88,3.81-4.21,5.43a2.91,2.91,0,0,0,1.26,1.28c2.05,1.12,3.21-1.46,6.4-1.28a9.34,9.34,0,0,1,5.87,3c.4.44,2.49,2.69,2.33,5.27a3.69,3.69,0,0,1-1.79,3c-2.29,1.17-6.17-.46-6.84-2.08a1.52,1.52,0,0,1,.82-2.07,1.88,1.88,0,0,1,1.75.8c0,.09-.07.12-.49.48s-.51.43-.48.47a1.7,1.7,0,0,0,1.6-.31,2.12,2.12,0,0,0,.19-2.72c-.9-1-2.55.34-6.06-.32a10.08,10.08,0,0,1-5.24-2.4,9.16,9.16,0,0,1-3-5.9c-.15-2.68,1.63-2.68,2-5.75.23-1.94-.08-5.36-2-6.87s-3.58.51-7.18-.48c-5.19-1.43-8.83-7.63-9.32-8.46-2.12-3.63-4-9.47-1.94-10.7C962.9,279.74,967.36,281.86,968.16,283.94Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M954.81,305.46c.2.2.32.24,1.24.68,3.05,1.48,4.58,2.22,5,2.71,1.43,1.87-2.47,5.59-4.19,10.61-2.52,7.36-.22,17.17,4.66,19.47,2.35,1.11,5.12.4,10.16-.89s8.43-3.3,9.88-1.85a2.5,2.5,0,0,1,.56,1.92c-.25,2.68-4.28,2.67-6.55,6.09a8.85,8.85,0,0,0-.91,7.56,7.56,7.56,0,0,0,4.56,4.91,6.5,6.5,0,0,0,5.08-.44c3.2-1.84,4.26-6.66,2.83-8.12a2.5,2.5,0,0,0-3.16-.12c-.71.66-.75,2-.4,2.2.11.06.21,0,1-.28s.93-.33,1-.28-.6,1.16-1.64,1.52c-1.26.44-3.07-.09-3.44-1.08-.52-1.41,2.42-2.5,4.36-6.48a9.94,9.94,0,0,0,1.19-6.6,8.76,8.76,0,0,0-4.85-5.88c-3.12-1.41-4.52.44-8.52-.63-2.52-.67-6.42-2.61-6.76-5.31s3.41-3.5,5-7.73c2.33-6.09-2.35-12.81-3-13.71-2.73-3.93-8.31-8.68-11.44-7.07C953.82,298,952.91,303.64,954.81,305.46Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M965.22,306.59a3.57,3.57,0,0,1,.19,1.08c.3,2.58.46,3.87.73,4.3,1,1.66,4.76.51,8.91,1.29,6.09,1.14,12.75,6.4,13.2,10.5.22,2-1,3.53-3.27,6.35s-4.61,4.3-3.91,5.81a2.52,2.52,0,0,0,1.28,1.1c2,.86,3.07-1.81,6.18-2a8.33,8.33,0,0,1,5.83,2.29c.4.38,2.52,2.34,2.46,4.88a4,4,0,0,1-1.64,3.18c-2.18,1.41-6,.27-6.73-1.23a1.61,1.61,0,0,1,.72-2.13c.67-.22,1.68.27,1.73.57,0,.1-.06.13-.45.53s-.48.48-.46.53a1.79,1.79,0,0,0,1.55-.5,2.11,2.11,0,0,0,.09-2.68c-.91-.89-2.48.63-5.91.39a9,9,0,0,1-5.19-1.73,8.2,8.2,0,0,1-3.1-5.43c-.24-2.6,1.49-2.81,1.73-5.86.15-1.92-.28-5.23-2.19-6.48s-3.47.91-7,.37c-5.1-.79-8.87-6.44-9.37-7.2-2.2-3.29-4.28-8.79-2.28-10.24C960,303.09,964.36,304.65,965.22,306.59Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M969.75,263.92a3.47,3.47,0,0,1,.08.92,14.8,14.8,0,0,0,.3,3.67c.74,1.47,4,.83,7.39,1.83,5,1.48,10.24,6.46,10.33,9.93,0,1.67-1.11,2.87-3.2,5.05s-4.17,3.21-3.69,4.53a2.2,2.2,0,0,0,1,1c1.65.89,2.71-1.26,5.33-1.15a7.1,7.1,0,0,1,4.72,2.41,6,6,0,0,1,1.72,4.3,3.29,3.29,0,0,1-1.6,2.52c-1.93,1-5.07-.28-5.56-1.6a1.33,1.33,0,0,1,.76-1.72c.58-.13,1.39.37,1.41.63,0,.08-.06.1-.42.4s-.44.36-.42.4a1.44,1.44,0,0,0,1.34-.29,1.76,1.76,0,0,0,.26-2.23c-.7-.82-2.12.32-5-.17a7.85,7.85,0,0,1-4.23-1.9,7.09,7.09,0,0,1-2.21-4.82c0-2.19,1.45-2.23,1.87-4.76.26-1.6.14-4.41-1.38-5.62s-3,.47-5.9-.29c-4.22-1.1-7-6.15-7.35-6.83-1.61-2.95-3-7.73-1.19-8.78C965.58,260.53,969.17,262.21,969.75,263.92Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M970.93,266.57a3.3,3.3,0,0,1-.36.85,15.07,15.07,0,0,0-1.4,3.4c0,1.65,3.15,2.55,5.74,5,3.8,3.61,6.17,10.41,4.66,13.54-.73,1.51-2.3,2.05-5.15,3s-5.18.95-5.36,2.35a2.26,2.26,0,0,0,.41,1.37c1.06,1.54,3,.12,5.27,1.41a7.1,7.1,0,0,1,3.1,4.3,6.06,6.06,0,0,1-.43,4.61,3.3,3.3,0,0,1-2.58,1.52c-2.17,0-4.38-2.57-4.21-4a1.32,1.32,0,0,1,1.46-1.18c.57.15,1.06,1,1,1.2,0,.07-.1.07-.56.17s-.56.12-.56.16a1.47,1.47,0,0,0,1.32.36,1.77,1.77,0,0,0,1.26-1.87c-.25-1-2-.69-4.36-2.43a7.73,7.73,0,0,1-2.9-3.62,7,7,0,0,1,.23-5.3c1-2,2.31-1.32,3.83-3.38,1-1.3,2.14-3.86,1.35-5.63s-2.86-.94-5.12-3c-3.26-2.9-3.41-8.66-3.43-9.43-.09-3.36.9-8.23,2.95-8.35C968.76,261.65,971.19,264.78,970.93,266.57Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M882.64,288.5c.56,6.89-.14,7.77,1,11,1,2.78,3.32,7.32,5,7,2.47-.48,1.57-11.1.83-19.9-.2-2.43-.56-5.72-3-7.4-1-.66-2.74-1.41-3.83-.7C881.23,279.42,882.11,282,882.64,288.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-2"], ["d", "M975.5,290.5c-.56,6.89.14,7.77-1,11-1,2.78-3.32,7.32-5,7-2.47-.48-1.57-11.1-.83-19.9.2-2.43.56-5.72,3-7.4,1-.66,2.74-1.41,3.83-.7C976.91,281.42,976,284,975.5,290.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-2"], ["d", "M880.5,402.5c-1.51-5.69-1.37-10.16-.74-18.34,1.78-23,2.49-35,7.74-38.66,2.93-2,7.06-3.44,9-8,2.12-5-.36-9.15,1-10,3.32-2.08,15.74,24,32,25,13.72.84,24.89-22.11,28-20,1.53,1-1.61,6,1,11,2,3.78,5.89,4.95,8,6,9.51,4.72,11.07,21.2,12,31,1.87,19.74,4,42-12,56-17.32,15.19-42.23,8.76-45,8-19.61-5.38-29.69-20.85-35-29A44.22,44.22,0,0,1,880.5,402.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-2"], ["d", "M921.5,857.5c4.28,7.82,5.22,16.2-2,56-4.93,27.18-6.84,31.35-11,33-8.86,3.51-23.57-6.14-28-18-4.15-11.13-.17-22.22,4-33,5.1-13.19,8.77-12.6,13-25,5.34-15.67,2.45-25.35,7-27S917.1,849.45,921.5,857.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-3"], ["d", "M932.5,843.5c-3.76,3.1-4.63,7.73-5,10-4.38,26.82,2.54,58,2.54,58,6.06,27.32,9.34,29.32,11.46,30,8.43,2.7,21.53-8.06,25-20,3-10.49-1.65-20.83-4-26-4-8.75-6.8-8.22-10-17-2.4-6.57-3.13-13.21-4-21-1.16-10.42-.55-14-3.46-16C941.65,839.19,935.92,840.69,932.5,843.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-3"], ["d", "M906.5,708.5c24.38-11,67.86-14.16,75-1,1.36,2.51.16,3.32-4,24,0,0-2.7,13.44-5,28-2,12.94-1.58,13.07-4,29-2,13-3,19.6-5,27-3.39,12.53-4.4,10.21-7,21-2.68,11.13-2.71,18.17-8,21a11.89,11.89,0,0,1-7,1c-7.31-.78-11.32-7-12-8-2.76-4.25-3-8.52-3-14-.1-12.5.67-19.22,1-27,.46-11-.18-18.94-1-29-.53-6.51-1.52-19-3-19-.61,0-1.26,2.12-2,7-2.69,17.61-.38,29.4,0,50,.25,13.45-.65,12.39,0,21,.82,10.74,2.35,14.08,0,18-3.65,6.08-14.08,9.26-21,6-6.08-2.87-6.08-9.15-12-29-7.53-25.28-10.36-24.61-13-40-.22-1.31-.34-4.61-1.12-9.25-.82-4.87-1.44-6.3-1.88-9.75-.66-5.17.23-5.87,0-11-.16-3.73-.51-5.3-7-28h0c-3-10.77-4.77-16.24-2-19,2.56-2.55,7.08-.85,12.48-.3C888.86,718.5,898,712.35,906.5,708.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-4"], ["d", "M992.5,533.5c1.34,2.39,1.56,8.93,2,22,.46,13.62-.38,16.91,0,26,.61,14.58,2.84,18.18,5,34,2.09,15.32,3.1,24.16,2,36-1.22,13.11-4.52,22.85-10,39-4.4,13-6.6,19.45-9,22-11.53,12.23-25.4,1.61-60,9-17.67,3.78-25.57,9-42,7-13-1.59-19-6.22-21-8-5.74-5-7.71-10.7-12-24-7-21.73-10.51-32.59-11-35-5.18-25.68-1.65-47.06,2-68,7.07-40.58,10.61-60.87,25-70,11.59-7.35,16.22-.44,64,1C965.64,525.65,986,522,992.5,533.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-5"], ["d", "M961.5,495.5c-1.62-.24-4.26-.37-19,11-6.74,5.2-10.12,7.81-11,8-12.4,2.71-21.59-18.71-32-16-5.54,1.44-8.46,8.93-12,18-4.79,12.26-2,14.91-6,20-7.72,9.93-27.42,11-41,4-5.11-2.64-9.84-5.08-12-10-10-22.79,56.31-51.61,57-103,.17-12.67-3.54-26.84,0-28,4.3-1.41,17.5,16.95,34,33,1.65,1.61,5.24,5,10,5s8.47-3.52,10-5c14.19-13.71,32.49-29.16,34-28,1.14.87-8.35,10.34-6,20,1.61,6.61,9.34,8.93,11,12,9.83,18.19,38.3,31.72,46,49,12.06,27-2.6,55.32-7,56a45,45,0,0,0-9,2h0c-4.34,1.42-7.56.71-13,0-15.69-2-23.58-.73-24-3-.24-1.32,2.45-1.6,5-5,5.13-6.82,3.22-16,3-17-.87-3.73-2.37-6-5-10C969.48,501,966.32,496.21,961.5,495.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-3"], ["d", "M894.5,337.5c.91,1.17-2.16,4.89-3,6-8.24,10.89-2,34,10,74,6.24,20.73,11,35.92,21,55,5.8,11.07,8.76,16.62,12,17,22.54,2.66,46.8-134,34-139-1-.41-5.63-1.22-8-5-1.07-1.7-1.86-4.28-1-5,1.54-1.3,7.09,4.5,15,9s11.65,4,21,7c8.18,2.59,24.1,7.63,33,19,3.94,5,6.09,10.77,8,29,2.47,23.63,1,34,1,60,.07,32.6,2.51,41-4,56-5.68,13.07-14.17,21.94-16,21-2.53-1.3,10-20.22,3-32,0,0-2.52-3.53-28-10,1.31.53,1.9.75,1.9.73s-14.78-9-31.9-8.73c-5.85.08-19.79.27-26,9-2.6,3.65-4,9-7,9-1.31,0-2.07-1-4-3a59,59,0,0,0-11-9c-3.44-2.05-6.49-2.43-11-3-15.17-1.9-19.92,4.33-34,2a38.39,38.39,0,0,0-8-1,30.69,30.69,0,0,0-15,4c-6.61,3.87-13.75,11.85-14,21-.31,11.24,10,17.61,8,20-2.1,2.57-16.28-2-24-13-5.8-8.27-6-17.34-6-23-.23-39.22-.22-58.82,0-62,4.19-61.73,12.26-76.37,23-82,.24-.13-.08.05,18.06-6.81,17.87-6.75,26.81-10.13,26.94-10.19C887.85,339.37,893.44,336.13,894.5,337.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-5"], ["d", "M964.5,244.5c8.35,11.57,7.45,23.8,6,46-.44,6.73-.21,13.37-2.19,21.36a64.69,64.69,0,0,1-6.81,17.64c-6,10.06-20.85,26.62-37,24-9.47-1.54-15.47-9.07-21-16-3.86-4.84-11.58-15.85-15-35-1.44-8.05-9.76-54.68,16-71,11.18-7.08,24.08-5.49,28-5C935.29,226.84,953.6,229.39,964.5,244.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-6"], ["d", "M965.5,214.5c6,7.34,13.46,24.74,14,26,.25.59.6,1.43,1.14,2.47.44.85.81,1.45.86,1.53,4.19,7,2,19,2,19-2.66,14.36-11.29,27.72-13,27-.93-.39,1.19-4.54,1-13-.15-6.62-.29-11-3-15-3.49-5.2-7.44-4.9-14.26-12.35a25.07,25.07,0,0,1-2.74-3.65c-3.5-5.58-1.75-6.37-5-10-4.51-5-12.09-8.24-19.76-8.2-.53,0-.9,0-1.24,0-7.76.29-17.85,3.21-24,7.74-11.75,8.65-13.19,25.3-14,34.42-1.06,12,1.4,19.17-1,20-2.66.92-8.79-6.86-11-15-.81-3-.88-5.67-1-11a109.83,109.83,0,0,1,1.1-16.35,65.12,65.12,0,0,1,1.9-9.65c1.16-4.09,2.82-9.92,7-15,3.7-4.49,7.88-6.58,16-10,17.56-7.41,26.34-11.11,31-11.31C934.05,202.08,954.84,201.45,965.5,214.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M942,279a15.58,15.58,0,0,1,3-2c1.47-.75,4.92-2.5,9-1.5a11.7,11.7,0,0,1,6.5,4.5l-2,2", "transform", "translate(-809.83 -201.65)", 1, "cls-7"], ["d", "M915.5,279a15.58,15.58,0,0,0-3-2c-1.47-.75-4.92-2.5-9-1.5A11.7,11.7,0,0,0,897,280l2,2", "transform", "translate(-809.83 -201.65)", 1, "cls-7"], ["d", "M906.59,275c5.95-.14,12,4.49,11.37,7.34s-7.35,4.18-12.51,3.14c-3-.61-7.93-2.57-8-5.24S902.41,275.1,906.59,275Z", "transform", "translate(-809.83 -201.65)", 1, "cls-8"], ["d", "M934.5,284.5c-.14,3.24-.11,5.95,0,8a15.06,15.06,0,0,0,1,5.05,13.46,13.46,0,0,0,1,1.95c1.93,3.25,3.23,3.82,3,5-.18.94-1.18,1.52-2,2-1.26.74-1.42.34-3,1-1.37.57-1.91,1.25-3,1.68a5,5,0,0,1-2,.32", "transform", "translate(-809.83 -201.65)", 1, "cls-9"], ["d", "M963.5,270.5c-.4.37-2.6-3.09-7-4-2.4-.49-4.8.16-9.5,1.5-5.85,1.66-9,3.24-9.5,2.5-.34-.56,1.08-2.06,1.5-2.5a9,9,0,0,1,3-2,14.13,14.13,0,0,1,3-1c7-1.49,10.57-2.39,12.5-1.5C961.86,265.51,963.92,270.11,963.5,270.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-10"], ["d", "M895.5,270.5c.4.37,2.6-3.09,7-4,2.4-.49,4.8.16,9.5,1.5,5.85,1.66,9,3.24,9.5,2.5.34-.56-1.08-2.06-1.5-2.5a9,9,0,0,0-3-2,14.13,14.13,0,0,0-3-1c-7-1.49-10.57-2.39-12.5-1.5C897.14,265.51,895.08,270.11,895.5,270.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-10"], ["d", "M941.5,320.5c.46,1.33-3.44,4.84-8,6-9.37,2.38-19.48-5.71-19-7,.1-.26.57-.08,5,0h8c4.83,0,4.83,0,6,0C938.65,319.62,941.22,319.69,941.5,320.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-11"], ["d", "M923,317c2.54.21,2.52.92,5,1,3,.09,3.29-.94,6-1,3.42-.08,3.76,1.56,8,2,3.63.38,5.8-.57,6,0s-2.13,2.66-5,3c-3.31.39-4-1.87-8-2-3-.1-3.4,1.14-7,1-2.11-.08-1.83-.51-5-1-4.29-.67-5.78-.05-10-1-1.28-.29-3-.77-3-1s2.08.14,5,0C919.32,317.8,919.84,316.74,923,317Z", "transform", "translate(-809.83 -201.65)", 1, "cls-12"], ["d", "M936,323c2.11-.77,2.66-1.48,5-2,.47-.1,3.63-.8,4,0s-3.2,3.45-4,4c-3.81,2.63-7.18,5-12,5-3.65,0-6.1-1.31-11-4,0,0-5.69-3.12-7-7-.1-.3-.22-.74,0-1s1.28-.33,6,2c4.1,2,4.12,2.37,6,3a20.52,20.52,0,0,0,6,1A18.38,18.38,0,0,0,936,323Z", "transform", "translate(-809.83 -201.65)", 1, "cls-12"], ["d", "M891.38,502.5a39.7,39.7,0,0,0-6.88,12c-1,3-1.4,6.66-2.12,14-.44,4.56-.46,7,1,8s3.52-.35,5.12,1,.39,3.22,2,5c1.37,1.52,2.59.53,5,2,2.89,1.76,2.46,4,5,5,1.77.72,2.14-.31,5,0,3.24.35,4.06,1.8,7.88,3a20.56,20.56,0,0,0,6.12,1c7.08-.08,11.16-5.46,13-4,1.21,1-.53,3.3,1,6,1.29,2.28,4.36,3.85,6,3,2-1,1.61-5.48,1-8-1.29-5.37-4.43-5.52-7-11-1.92-4.1-2-8-2.12-14-.14-7.06,1.1-7.52,0-11-.27-.86-2.34-7.09-7.88-10-2-1.07-3.49-1.14-6-3-2.3-1.7-2.49-2.69-4-4-3.6-3.11-9.62-3.67-14.12-2C896.22,496.68,894.56,498.67,891.38,502.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-2"], ["d", "M970.5,498.5c3.81,4.29,6.43,7.25,8,12,1.16,3.51-.2,2.13,1,14,.35,3.48.74,6.33-1,8-1.24,1.19-2.36.64-4,2-2.19,1.82-1.42,3.81-3,6-2.26,3.14-6.09.61-10,4-1.41,1.22-1.31,1.82-3,3a9.93,9.93,0,0,1-6,2c-2-.09-2.08-.92-4-1-2.6-.1-3.17,1.4-6,2s-6.56.15-8-2c-.88-1.31-.1-2.17-1-5a15,15,0,0,0-2-4c-2.37-3.72-.8-7.56-1-18-.14-7-.88-7.7,0-11a22.26,22.26,0,0,1,5-9,29.12,29.12,0,0,1,12-8c4.54-1.85,9.74-4,15-2C965.19,492.51,967,494.51,970.5,498.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-2"], ["d", "M908.13,279.5c1.93,0,4.12,1.19,4.59,3a2.64,2.64,0,0,1-.22,2c-.61,1-2,1-4.37,1s-4,0-4.63-1a2.51,2.51,0,0,1,0-2A5,5,0,0,1,908.13,279.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M908.48,282.3a2.19,2.19,0,0,1,2,1.56,1.31,1.31,0,0,1-.41,1.2c-.33.26-.67.14-1.66.08-1.62-.1-2.1.14-2.34-.2s.17-1.13.31-1.36A2.4,2.4,0,0,1,908.48,282.3Z", "transform", "translate(-809.83 -201.65)"], ["d", "M950.91,275c-5.95-.14-12,4.49-11.37,7.34s7.35,4.18,12.51,3.14c3-.61,7.93-2.57,8-5.24S955.09,275.1,950.91,275Z", "transform", "translate(-809.83 -201.65)", 1, "cls-8"], ["d", "M949.37,279.5a5.24,5.24,0,0,0-4.59,3,2.46,2.46,0,0,0-.28,2c.5,1.08,2.4,1,4.87,1,2.19,0,3.41-.07,4.13-1a2.72,2.72,0,0,0,.47-2C953.66,280.71,951.35,279.5,949.37,279.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-1"], ["d", "M949.13,282.29a2.24,2.24,0,0,0-2.1,1.43c-.08.18-.35.85,0,1.28.14.19.37.29,2,.3s1.81-.09,2-.3a1.32,1.32,0,0,0,.12-1.13A2.18,2.18,0,0,0,949.13,282.29Z", "transform", "translate(-809.83 -201.65)"], ["cx", "972.5", "cy", "302.96", "rx", "3.31", "ry", "1.89", "transform", "translate(-535.29 843.19) rotate(-64.05)", 1, "cls-13"], ["cx", "886.5", "cy", "301.96", "rx", "1.89", "ry", "3.31", "transform", "translate(-842.05 282.05) rotate(-30)", 1, "cls-13"], ["d", "M945.81,548.31a6.76,6.76,0,0,1-6.31-4.81,6.51,6.51,0,0,1,1-5,5.28,5.28,0,0,1,2-2c2-1.11,4.75-.69,7,1", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M962.5,543.5a30,30,0,0,0-7-2c-2-.3-3.07-.18-4-1-1.51-1.32-1.36-4-1-6a12,12,0,0,1,4-3,13.75,13.75,0,0,1,7-1,19.23,19.23,0,0,1,5,1", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M933.5,542.5a5.79,5.79,0,0,1,3-2,5.73,5.73,0,0,1,3,0", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M978.5,531.5a5.51,5.51,0,0,1-2,2,5.72,5.72,0,0,1-3.84.64,12.05,12.05,0,0,1-3.88-3.15,13.74,13.74,0,0,1-2.66-6.55c-.51-2.73.28-2.79-.24-5.09-.63-2.77-1.69-2.84-2.38-5.85a8.54,8.54,0,0,1,0-5,7.46,7.46,0,0,1,2-3", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M899.5,518.5a18.76,18.76,0,0,0-4,7c-1,3.33-.48,5.36-2.06,7.64a9.19,9.19,0,0,1-4.94,3.36", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M898.5,534.5a53.32,53.32,0,0,0,11-1,8.71,8.71,0,0,1,5,0c1.68.6,4,2.16,4,4,0,2.52-4.21,4.36-8,6a25.9,25.9,0,0,1-7,2,24.28,24.28,0,0,1-6,0", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M918.5,538.5a9.33,9.33,0,0,1,5,0c1.61.46,4.84,1.89,5,4,.19,2.54-4.24,4.67-7,6a20.92,20.92,0,0,1-7,2,20.32,20.32,0,0,1-4,0", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M927.5,540.5a5.36,5.36,0,0,1,4,1,5,5,0,0,1,0,8", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M906.94,483.74c-.4,2.14-2.23,4.73-4.71,4.71-2.19,0-3.81-2.06-4.41-3.58-.44-1.14-.13-1.48.2-6,.24-3.3.16-4.4.77-4.63s1.06.57,2.89,2.13c3.11,2.63,4.33,2.67,5,4.43A5.29,5.29,0,0,1,906.94,483.74Z", "transform", "translate(-809.83 -201.65)", 1, "cls-15"], ["d", "M961.92,477.24c8.91-15.22,7-28.41,12.22-30.29,5.58-2,12.65,11.21,12,12.12-.52.73-5.41-7.08-10-5.17-5.43,2.27-3.3,15.21-11.2,27.26-6.68,10.21-16.72,13.94-17.22,12.93S955.28,488.6,961.92,477.24Z", "transform", "translate(-809.83 -201.65)", 1, "cls-16"], ["d", "M966,488.15c.66,2.45.57,5,.39,10.23-.21,6,.36,7.49-.77,8.49-1.9,1.67-4.35-.8-8.3.58-2.38.82-2.48,2.06-6.56,5.79-1.16,1.06-3.48,2.76-8.11,6.17-5.81,4.28-8.76,6.27-9.46,5.6s.86-2.67,0-3.47c-.45-.42-1.18-.14-2.31,0h0a24.2,24.2,0,0,1-5-.58c-3.67-.91-3.76-3.83-6.95-4.06H912.3c-3.46.16-3.89,2.1-7.14,2.13-2.74,0-4.44,0-5.6-1.16-1-1-1-2.28-1-6.56s.13-6.51.19-7.72a72.44,72.44,0,0,1,2.12-14.48c1.24-4.78,2.34-6.71,4.06-8.1a14.69,14.69,0,0,1,3.66-1.93c4.37-1.95,7.2-2.58,8.49-3.48,6.8-4.66,7.07-5.57,9.46-6.94,6.36-3.67,14.8-3.23,20.84-.58,3.68,1.61,6.09,4.19,11,9.26C962.49,481.54,964.85,484,966,488.15Z", "transform", "translate(-809.83 -201.65)", 1, "cls-17"], ["d", "M902,517.16c1.48-.06,2-.65,3.92-1.22a24,24,0,0,1,3.18-.55c4.25-.93,4.94-7.2,7-7.17,2.42,0,1.87,8.34,7.33,11.58,2.56,1.52,5.47,1.36,9.07,1.16a24.69,24.69,0,0,0,8.69-1.93c3.09-1.34,5.12-3,8.68-6s3.61-3.56,5.6-4.63c3.22-1.73,8.13-2.83,9.07-1.35,1.68,2.62-8.49,14.32-14.86,14.28-4.34,0-5.39.4-7.53,1.16-2.87,1-2.83,1.88-5.79,2.7-3.41.95-4.68.11-7.52,1.55-2,1-2.52,2-4.44,2.31-2.25.41-5.16-.16-5.6-1.54s2.41-2.89,1.93-4.44c-.4-1.27-2.73-1.58-5.4-1.93a13,13,0,0,0-6,.39,6,6,0,0,0-2,1c-2.75,2.2-.88,6.33-3,7.72-1.53,1-4.47.09-5.41-1.54-.59-1,0-1.69.2-4.25.36-4.34-.9-6.92.19-7.53C900,516.56,900.36,517.23,902,517.16Z", "transform", "translate(-809.83 -201.65)", 1, "cls-18"], ["d", "M949,526a.73.73,0,0,0-.58,0c-.37.11-.44.37-.77.57s-.33.14-1,.2c-1.64.15-1.8.13-1.93,0-.27-.29,0-.68-.19-1-.49-.59-2.27.39-2.51,0-.14-.21.33-.68,1-1.54,1-1.29.89-1.58,1.35-2.12,1.23-1.48,2.69-.57,5.4-1.93,1.5-.76,1.22-1.12,3.09-2.13,1.24-.67,3.57-1.93,4.44-1.16s.46,2.81-.39,4.06a3,3,0,0,0-.77,1.54c0,.16,0,.27,0,1.35v.58c0,1.32,0,2.14-.39,2.32s-1.53-.61-1.93-1a1.33,1.33,0,0,0-.58-.38,1.51,1.51,0,0,0-1.15.19c-.9.54-.59,1.57-1.35,1.93a1.25,1.25,0,0,1-1.36-.19C949,526.91,949.34,526.21,949,526Z", "transform", "translate(-809.83 -201.65)", 1, "cls-19"], ["d", "M919.05,531.19c-.58.56-2,.21-2.12-.2,0-.13.12-.18.39-.58.08-.11.59-.89.38-1.15s-.55-.06-.77,0a2.65,2.65,0,0,0-1.35,1c-.29.36-.2.4-.39.58a1.8,1.8,0,0,1-2.31,0,1.45,1.45,0,0,1-.39-1.54c.17-.32.4-.23,1.16-.78.45-.32.43-.4,1-.77.36-.25.7-.42.86-.53a3.75,3.75,0,0,1,.49-.24,13.06,13.06,0,0,1,2.12-.77c1.59-.21,1.73,1,4.44,1.54.74.17,1.47.24,1.73.77a3.85,3.85,0,0,1,.2,1.36,2.16,2.16,0,0,0,0,.57c.09.61.47.84.38,1s-1.24.12-1.93-.58c-.36-.37-.24-.53-.58-.77a2.21,2.21,0,0,0-2.12,0,2.71,2.71,0,0,0-.58.38C919.26,530.75,919.27,531,919.05,531.19Z", "transform", "translate(-809.83 -201.65)", 1, "cls-19"], ["d", "M900.14,533.5a1.06,1.06,0,0,1-.77-.38c-.34-.43-.09-.85-.39-1.16a1.16,1.16,0,0,0-1-.19c-.93.09-1.09.7-1.93.77-.1,0-.85.06-1.16-.39-.18-.25-.12-.56,0-1.16a3.09,3.09,0,0,1,.58-1.54,3,3,0,0,1,1.35-.77,13.43,13.43,0,0,1,2.12-.77c1.59-.22,1.73.94,4.44,1.54.75.16,1.48.24,1.74.77a4,4,0,0,1,.19,1.35,3.7,3.7,0,0,0,0,.58c.1.61.47.84.39,1s-1.23-.24-1.93-.58a11.35,11.35,0,0,0-1.16-.58c-.38-.15-1.3-.5-1.54-.19s.07.36,0,.77A1.19,1.19,0,0,1,900.14,533.5Z", "transform", "translate(-809.83 -201.65)", 1, "cls-19"], ["d", "M915.18,504.46a54.8,54.8,0,0,1,37.36,6.75", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M916.16,505.59a54.79,54.79,0,0,1,35.24,14.12", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M915.23,505.87a55.29,55.29,0,0,1,20.54,7.68,54.7,54.7,0,0,1,12.59,10.87", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M919.15,508.32a38,38,0,0,1,16.4,9.38,37.53,37.53,0,0,1,7.15,9.72", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M914.41,505a25,25,0,0,1,6.48-6.15A27,27,0,0,1,931.12,495a34.18,34.18,0,0,1,8.68-.58", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M916.25,509.81a14.25,14.25,0,0,1,10.26,4A23.41,23.41,0,0,1,932,522", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M908.47,505a54.74,54.74,0,0,0-37.32-6.93", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M907.16,505.7a54.73,54.73,0,0,0-38,.72", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M907.92,506.3a54.76,54.76,0,0,0-37.54,5.59", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M903.39,507.19a38,38,0,0,0-18.66,3,37.38,37.38,0,0,0-10.12,6.56", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M909,505.78a25.11,25.11,0,0,0-3.88-8,27.21,27.21,0,0,0-8.19-7.23,34.57,34.57,0,0,0-7.92-3.62", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M905.58,509.61a14.31,14.31,0,0,0-11,.07,23.28,23.28,0,0,0-8,5.81", "transform", "translate(-809.83 -201.65)", 1, "cls-20"], ["d", "M914.42,488.53c2,.56-.45,6.49,2.9,14.48,1.65,3.94,3.39,5.26,2.7,7.53-1,3.14-5.79,5.5-7.72,4.63a4.72,4.72,0,0,0-2.51-.58c-.5,0-.62.15-1,.19-1.7.22-3.31-1.81-3.86-2.51a7.54,7.54,0,0,1-1.93-4.44c-.08-1.83.74-2.7,2.31-6s1.22-3.41,2.32-5.6C909,493.54,912.47,488,914.42,488.53Z", "transform", "translate(-809.83 -201.65)", 1, "cls-13"], ["d", "M913.65,508.22a3.93,3.93,0,0,1-.77,2.89c-.18.19-.85.9-1.55.78a2.5,2.5,0,0,0-1-.2,1.78,1.78,0,0,0-.58.2,2.24,2.24,0,0,1-1.74-.39c-.9-.61-1-1.8-1.15-3.28-.12-1.29,0-2.49.19-2.51s.2,1.26,1.16,1.93a2.44,2.44,0,0,0,1.54.39,3.63,3.63,0,0,0,2.32-1.16c.64-.66.71-1.19,1-1.16C913.49,505.76,913.66,507.27,913.65,508.22Z", "transform", "translate(-809.83 -201.65)", 1, "cls-19"], ["d", "M927.74,486.22c-.3,3.12,1.25,6.64,2.89,6.75.61,0,.79-.41,2.13-1.35,2.49-1.75,3.35-1.2,4.63-2.31,2.35-2,1.92-6,1.74-7.72-.16-1.46-.37-3.37-1.55-3.86-.33-.14-.89-.24-3.67,1.35s-4.3,2.47-5.21,4.05A7.74,7.74,0,0,0,927.74,486.22Z", "transform", "translate(-809.83 -201.65)", 1, "cls-15"], ["d", "M919.83,492.2a6.36,6.36,0,0,0-.78,1.93c-.16.76-.06,1,0,1.13v0a2.72,2.72,0,0,0,1.55,1.16,2.44,2.44,0,0,0,1.93-.39,4.7,4.7,0,0,0,.38-1.54,4.54,4.54,0,0,0-.19-1.74,1.66,1.66,0,0,0-1.54-1.35A1.72,1.72,0,0,0,919.83,492.2Z", "transform", "translate(-809.83 -201.65)", 1, "cls-3"], ["d", "M903.65,492a5,5,0,0,0-.64,1.49c-.13.59,0,.8,0,.87v0a2.52,2.52,0,0,0,1.18,1.08,2,2,0,0,0,1.7-.48,3.4,3.4,0,0,0,.16-2.53,1.35,1.35,0,0,0-1.28-1A1.46,1.46,0,0,0,903.65,492Z", "transform", "translate(-809.83 -201.65)", 1, "cls-3"], ["d", "M920.14,493.28a1.59,1.59,0,0,0-.19.52c0,.21,0,.28,0,.31h0c0,.06.2.38.45.4a.52.52,0,0,0,.39-.2,1.19,1.19,0,0,0,.09-.41,1.23,1.23,0,0,0,0-.47.41.41,0,0,0-.38-.37A.4.4,0,0,0,920.14,493.28Z", "transform", "translate(-809.83 -201.65)", 1, "cls-21"], ["cx", "95.46", "cy", "291.65", "rx", "0.53", "ry", "0.64", 1, "cls-21"], ["d", "M944.53,525.59c.44-.35.89-.73,1.35-1.16s1.09-1,1.54-1.54", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M948.68,526a10.89,10.89,0,0,0,.72-1.06,8.06,8.06,0,0,0,.63-1.35", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M953.6,525.4a3.48,3.48,0,0,0-.39-1.16,3.53,3.53,0,0,0-.77-1", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M899.05,532c0-.19.09-.47.13-.81,0-.17.12-.78.14-1", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M897.25,532a8.58,8.58,0,0,1,.57-1.35,9.2,9.2,0,0,1,.58-1", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M901,531.81a7.29,7.29,0,0,0-.05-.82c0-.16,0-.79-.06-1", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M903.17,532.14a7.62,7.62,0,0,0-.29-.76c-.07-.16-.28-.74-.35-.9", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M917.58,529.1a2.81,2.81,0,0,1,.12-.81,1.88,1.88,0,0,1,.39-.77c.51-.5,1.45-.22,1.54-.19", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M922.4,530.07a1.86,1.86,0,0,1-.26-.81,2,2,0,0,1,.19-1", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M919.83,530a3,3,0,0,1,.38-.77,3.53,3.53,0,0,1,.77-.78", "transform", "translate(-809.83 -201.65)", 1, "cls-14"], ["d", "M924.53,284.5c.14,3.24.11,5.95,0,8a15.31,15.31,0,0,1-1,5.05,13.4,13.4,0,0,1-1,1.95c-1.93,3.25-3.23,3.82-3,5,.18.94,1.17,1.52,2,2,1.26.74,1.42.34,3,1,1.37.57,1.91,1.25,3,1.68a5,5,0,0,0,2,.32", "transform", "translate(-809.83 -201.65)", 1, "cls-9"], [1, "card-text-right"], [2, "text-align", "left"], [1, "countdown-to-birthday"]], template: function BirthdayCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Happy Birthday Robyn!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".cls-1,.cls-10{fill:#603813;}.cls-1,.cls-13,.cls-14,.cls-15,.cls-19,.cls-2,.cls-3,.cls-5{stroke:#231f20;}.cls-1,.cls-11,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-19,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-linecap:round;}.cls-1,.cls-11,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-2,.cls-20,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-miterlimit:10;}.cls-2,.cls-6,.cls-9{fill:#ecc19c;}.cls-4{fill:#fbb03b;}.cls-16,.cls-17,.cls-18,.cls-4,.cls-6,.cls-7,.cls-8{stroke:#000;}.cls-5{fill:#333;}.cls-14,.cls-20,.cls-7{fill:none;}.cls-7{stroke-width:2px;}.cls-11,.cls-13,.cls-21,.cls-8{fill:#e6e7e8;}.cls-8{stroke-width:0.5px;}.cls-9{stroke:#a67c52;}.cls-11,.cls-20{stroke:#fff;}.cls-12{fill:red;}.cls-15{fill:#c69c6d;}.cls-16,.cls-19{fill:#ff7bac;}.cls-17{fill:#999;}.cls-18{fill:#ccc;}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "robyn_holding_rat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "ellipse", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "ellipse", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "ellipse", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Welcome to the digital version of your birthday celebration which is immortalized on the internet for you to come and enjoy whenever you want!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "I hope your 23rd birthday and 2nd year together with me was everything you wanted it to be, because for me, I couldn't have asked for anything better! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "I love you so much");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "-Erik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Countdown to 24:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.remainingTime);
    } }, styles: [".card-area[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font: 400 50px 'Merienda One', Helvetica, sans-serif;\r\n    color: rgba(0,0,0,0.7);\r\n\tmargin: 0 auto;\r\n    width: 70%;\r\n    height: auto;\r\n    overflow: auto;\r\n    height: auto;\r\n\tbackground: #F8ECC2;  \r\n\t\r\n\t\r\n    border:3px solid #000000;\r\n    padding: 25px 25px 25px 25px;\r\n\tposition: relative;\r\n\topacity: 100;\r\n\ttop: 150px;\r\n\tmargin-bottom: 200px;\r\n\ttext-align:center;\r\n}\r\n\r\n.image-left[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.card-text-right[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    float: right;\r\n    padding-top: 25px;\r\n    font-size: 22px;\r\n    width: 50%;\r\n    vertical-align: middle;\r\n    margin: 0 auto;\r\n}\r\n\r\n.robyn-holding-rat[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYmlydGhkYXlDYXJkL2JpcnRoZGF5LWNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9EQUFvRDtJQUNwRCxzQkFBc0I7Q0FDekIsY0FBYztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7Q0FDZixtQkFBbUIsR0FBRyw4QkFBOEI7Q0FDcEQsbUdBQW1HO0NBQ25HLGdJQUFnSTtJQUM3SCx3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQy9CLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osVUFBVTtDQUNWLG9CQUFvQjtDQUNwQixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9iaXJ0aGRheUNhcmQvYmlydGhkYXktY2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1hcmVhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udDogNDAwIDUwcHggJ01lcmllbmRhIE9uZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblx0YmFja2dyb3VuZDogI0Y4RUNDMjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuXHQvKmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNENBMUFGLCAjMzc1RTZGKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcblx0LypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Q0ExQUYsICMzNzVFNkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweCAyNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvcGFjaXR5OiAxMDA7XHJcblx0dG9wOiAxNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0LXJpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnJvYnluLWhvbGRpbmctcmF0IHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirthdayCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-birthday-card',
                styleUrls: ['./birthday-card.css'],
                templateUrl: './birthday-card.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/osmosisSolitaire/card-class.ts":
/*!*********************************************************!*\
  !*** ./src/app/projects/osmosisSolitaire/card-class.ts ***!
  \*********************************************************/
/*! exports provided: Card, Pile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pile", function() { return Pile; });
class Card {
    constructor(suitName, numberSymbolName) {
        this.suit = suitName;
        this.numberSymbol = numberSymbolName;
    }
}
class Pile {
    constructor() {
        this.cards = [];
    }
    shuffle() {
        var count = this.cards.length, randomnumber, temp;
        while (count) {
            randomnumber = Math.random() * count-- | 0;
            temp = this.cards[count];
            this.cards[count] = this.cards[randomnumber];
            this.cards[randomnumber] = temp;
        }
    }
    /* Checks incoming card against the numbers already placed in this suit */
    numberMatch(card) {
        for (let i = 0; i < this.cards.length; i++) {
            if (card.numberSymbol === this.cards[i].numberSymbol) {
                return true;
            }
        }
        return false;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _card_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-class */ "./src/app/projects/osmosisSolitaire/card-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function OsmosisSolitaireComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", g_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r2.name);
} }
function OsmosisSolitaireComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.runPercent, " %");
} }
class OsmosisSolitaireComponent {
    constructor() {
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
        this.averageLosingSuitCountAccumulator = 0;
        this.averageLoopsThroughDeckAccumulator = 0;
        /**************/
        this.elementNames = [
            'suitOne',
            'suitTwo',
            'suitThree',
            'suitFour'
        ];
        this.gamesRunning = false;
        this.countSuits = (accumulator, currentVal) => {
            if (accumulator instanceof _card_class__WEBPACK_IMPORTED_MODULE_2__["Pile"]) {
                accumulator = accumulator.cards.length;
            } // Initialize, don't want to reduce whole object
            return accumulator + currentVal.cards.length;
        };
    }
    toggleRunning(toggle) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.gamesRunning = toggle;
                resolve(true);
            });
        });
    }
    /* Main entry point when "Run" button is clicked */
    runGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.runPercent = 0;
            this.toggleRunning(true)
                .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                for (let x = 0; x < this.selectedValue.id; x++) {
                    yield this.gameLoop(x);
                }
                /* Once games have run, turn loading off */
                this.toggleRunning(false);
                this.handleWin(this.lastWinningSuits);
                /* Update statistic on the simulation(s):
                    total games ran, highest num of cards placed into suits and win % */
                this.gamesRan += this.selectedValue.id;
                this.averageLosingSuitCount = Math.floor(this.averageLosingSuitCountAccumulator / this.gamesRan);
                this.averageLoopsThroughDeck = Math.floor(this.averageLoopsThroughDeckAccumulator / this.gamesRan);
                this.winPercentage = this.wins / this.gamesRan * 100;
            }));
        });
    }
    gameLoop(gameNum) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let deck = new _card_class__WEBPACK_IMPORTED_MODULE_2__["Pile"]();
                let piles = [];
                let suits = [];
                for (let i = 0; i < 4; i++) {
                    suits[i] = new _card_class__WEBPACK_IMPORTED_MODULE_2__["Pile"]();
                }
                let stackFlipped = new _card_class__WEBPACK_IMPORTED_MODULE_2__["Pile"]();
                /* Setup the game */
                /* Create the deck */
                for (let i = 0; i < this.suitsChars.length; i++) {
                    for (let j = 0; j < this.numbers.length; j++) {
                        let card;
                        card = new _card_class__WEBPACK_IMPORTED_MODULE_2__["Card"](this.suitsChars[i], this.numbers[j]);
                        deck.cards.push(card);
                    }
                }
                deck.shuffle();
                // let deckCopy = deck.cards.map(function (x) { return x; }); // Use at end to show untouched winning deck
                /* Create the 4 piles */
                for (let i = 0; i < 4; i++) {
                    piles[i] = new _card_class__WEBPACK_IMPORTED_MODULE_2__["Pile"]();
                    for (let j = 0; j < 4; j++) {
                        piles[i].cards.push(deck.cards.pop());
                    }
                }
                /* Take the very top card of the deck and use that as our base for the first suit */
                suits[0].cards.push(deck.cards.pop());
                /* Game is now setup and commences */
                /* Flip 3 cards into the flip pile to start */
                for (let i = 0; i < 3; i++) {
                    stackFlipped.cards.push(deck.cards.pop());
                }
                let numPlacedThisDeckLoop = 0;
                let loopsThroughDeck = 0;
                while (true) {
                    let numPlaced = 0;
                    for (let i = 0; i < 4; i++) {
                        /* Loop through the 4 non-deck piles. If they are not already empty, try to place */
                        if (piles[i].cards.length > 0) {
                            let numPlacedFromPile = this.placeFromPile(piles[i], suits);
                            if (numPlacedFromPile > 0) {
                                numPlacedThisDeckLoop += numPlacedFromPile;
                                numPlaced += numPlacedFromPile;
                            }
                        }
                    }
                    /* If we placed anything, loop back to check the piles again before moving on to the flip pile */
                    if (numPlaced > 0) {
                        continue;
                    }
                    /* If there are any cards in the flip pile, try to place from the top first */
                    if (stackFlipped.cards.length > 0) {
                        let numPlacedFromPile = this.placeFromPile(stackFlipped, suits);
                        if (numPlacedFromPile > 0) {
                            numPlacedThisDeckLoop += numPlacedFromPile;
                            continue;
                        }
                    }
                    if (deck.cards.length > 0) {
                        /* Flip 3 (or 2 or 1 if only that many cards remain in the deck) cards into the flip pile */
                        for (let i = 0; i < (deck.cards.length >= 3 ? 3 : deck.cards.length); i++) {
                            stackFlipped.cards.push(deck.cards.pop());
                        }
                        /* Give those last cards a chance at being placed before ending the game */
                        if (deck.cards.length === 0) {
                            continue;
                        }
                    }
                    if (suits.reduce(this.countSuits) === 52) {
                        /* Suits are full, this is a win */
                        break;
                    }
                    if (deck.cards.length === 0) { /* The deck is empty, take the flipped pile and turn it back into the deck */
                        if (numPlacedThisDeckLoop == 0) {
                            break;
                        }
                        loopsThroughDeck++;
                        numPlacedThisDeckLoop = 0; /* Reset this number, if we make it through the entire next deck without placing a card from it or the 4 piles,
                            the game is a loss */
                        while (stackFlipped.cards.length > 0) {
                            deck.cards.push(stackFlipped.cards.pop());
                        }
                        /* Flip 1-3 cards onto the flip pile to start it off again */
                        for (let i = 0; i < (deck.cards.length >= 3 ? 3 : deck.cards.length); i++) {
                            stackFlipped.cards.push(deck.cards.pop());
                        }
                    }
                }
                if (suits.reduce(this.countSuits) === 52) {
                    this.lastWinningSuits = suits;
                    this.wins++;
                }
                else {
                    this.averageLosingSuitCountAccumulator += suits.reduce(this.countSuits);
                    this.averageLoopsThroughDeckAccumulator += loopsThroughDeck;
                }
                if (gameNum % (this.selectedValue.id / 100) === 0) {
                    setTimeout(() => {
                        this.runPercent = Math.floor((gameNum / this.selectedValue.id) * 100);
                        resolve(true);
                    });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    placeFromPile(pile, suits) {
        let numPlaced = 0;
        while (pile.cards.length > 0) {
            let cardNumExistsInPrevSuit = true;
            let cardSuit = pile.cards[pile.cards.length - 1].suit;
            // Now we loop through the 4 suits, trying to place the card
            for (let suitIndex = 0; suitIndex < 4; suitIndex++) {
                if (suitIndex === 0 && cardSuit === suits[0].cards[0].suit) { // Handle first suit, which has no rules except the card must match the suit
                    suits[0].cards.push(pile.cards.pop());
                    numPlaced++;
                    break;
                }
                else if (suitIndex > 0 && suits[suitIndex].cards.length === 0 && suits[suitIndex - 1].cards.length > 0 &&
                    cardNumExistsInPrevSuit) { // Empty suit check for 2, 3, 4, only check if previous suit is not empty
                    suits[suitIndex].cards.push(pile.cards.pop());
                    numPlaced++;
                    break;
                }
                else if (suitIndex > 0 && suits[suitIndex].cards.length > 0 &&
                    cardNumExistsInPrevSuit && (cardSuit === suits[suitIndex].cards[0].suit)) { // If suit is not empty
                    suits[suitIndex].cards.push(pile.cards.pop());
                    numPlaced++;
                    break;
                }
                /* This checks if the card's number is found in the current suit, even though the suit doesn't match.
                    If it is, that means it can then be placed in a subsequent suit */
                if (suitIndex < 3 && suits[suitIndex].cards.length > 0 && pile.cards.length > 0) {
                    cardNumExistsInPrevSuit = suits[suitIndex].numberMatch(pile.cards[pile.cards.length - 1]);
                }
                else {
                    /* No point in continuing, card is not placeable, return */
                    return numPlaced;
                }
            }
        }
        return numPlaced; // Out of cards in the pile so return status
    }
    /* Run DOM manipulation after a win is found */
    handleWin(suits) {
        this.resetWinningSuitsDivs();
        for (let s = 0; s < 4; s++) {
            if (suits[s].cards.length > 0) {
                this.appendCardElement(s, this.elementNames[s], true, suits);
            }
        }
        this.wins++;
    }
    /* resetWinningSuitsDivs - empties the divs where the cards are placed */
    resetWinningSuitsDivs() {
        for (let i = 0; i < 4; i++) {
            var suitNode = document.getElementById(this.elementNames[i]);
            while (suitNode.firstChild) {
                suitNode.removeChild(suitNode.firstChild);
            }
        }
    }
    /* appendCardElement - Show the cards that the player won with
     * @suitNum - which suit pile to check
     * @suitStr - the suit that the pile is
     * @endGame - if it's the end of the game and need to display */
    appendCardElement(suitNum, suitStr, endGame, suits) {
        let suitChar = suits[suitNum].cards[0].suit;
        if (endGame) {
            for (let i of suits[suitNum].cards) {
                let suitElem = document.createElement('img');
                suitElem.setAttribute('style', 'position:relative;width:7.5%;height:auto');
                suitElem.setAttribute('src', '../assets/Vector-Playing-Cards-master/cards-svg/'
                    + i.numberSymbol + suitChar + '.svg');
                document.getElementById(suitStr).appendChild(suitElem);
            }
        }
    }
}
OsmosisSolitaireComponent.ɵfac = function OsmosisSolitaireComponent_Factory(t) { return new (t || OsmosisSolitaireComponent)(); };
OsmosisSolitaireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OsmosisSolitaireComponent, selectors: [["app-osmosis-solitaire"]], decls: 68, vars: 10, consts: [[1, "osmosis-container"], ["id", "info", 1, "info"], ["routerLink", "/projects", 1, "text-link", "text-link--dark-bkrnd", "home-link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "arrow", "arrow--left"], ["d", "M24 12l-12-8v5h-12v6h12v5z"], ["target", "_blank", "href", "https://www.solsuite.com/games/osmosis.htm", 1, "text-link", "text-link--dark-bkrnd", "rules-link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "arrow", "arrow--right"], [1, "play-game"], [1, "ngames-dropdown", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "osmosis-buttons"], [1, "button", 3, "disabled", "click"], ["id", "gameCounter"], ["id", "suitCount"], ["id", "winPercentage"], ["id", "winloss"], ["id", "suits", 1, "suits"], [1, "suits-area-sub-wrapper"], ["id", "loading-area", "class", "loading-area-cards", 4, "ngIf"], [2, "height", "100%", 3, "hidden"], [1, "suitTitle"], ["id", "suitOne", 1, "suit"], ["id", "suitTwo", 1, "suit"], ["id", "suitThree", 1, "suit"], ["id", "suitFour", 1, "suit"], [3, "ngValue"], ["id", "loading-area", 1, "loading-area-cards"], [1, "runPercent"], ["viewBox", "25 25 50 50", 1, "spinner"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke-width", "2", "stroke-miterlimit", "10", 1, "path"]], template: function OsmosisSolitaireComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " About: An application that runs this very straightforward but hard to win version of Solitaire known as Osmosis, Treasure Trove or Peek through simulations. There are not really any strategies involved so as of now the simulator loops through the available piles looking for cards to place, eliminating human error that results in lost games. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Game Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Games to play");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OsmosisSolitaireComponent_Template_select_ngModelChange_20_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OsmosisSolitaireComponent_option_21_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsmosisSolitaireComponent_Template_button_click_23_listener() { return ctx.runGames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Run ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Games ran:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Average # of cards placed into suits in losing games:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Average # of loops through deck in losing games:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Win Rate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Wins:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, OsmosisSolitaireComponent_div_53_Template, 8, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Last Winning Suit Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Suit 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Suit 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Suit 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Suit 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gamesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.gamesRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.gamesRan, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.averageLosingSuitCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.averageLoopsThroughDeck, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.winPercentage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.wins, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gamesRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.gamesRunning);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".home-link[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  font-size: 18px;\n}\n\n.rules-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block;\n  margin-bottom: 1em;\n}\n\n.osmosis-container[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n  height: 95vh;\n  display: flex;\n  justify-content: center;\n}\n\n.play-game[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #000;\n}\n\n.play-game[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.ngames-dropdown[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 150px;\n  overflow: hidden;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #88BBD6;\n  border: 1px solid #000;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.suits[_ngcontent-%COMP%] {\n  background: #0F1626;\n  color: #F5F5F5;\n  \n  border: 3px solid #000000;\n  width: 45%;\n  margin: 1% 1% 1% 1%;\n  padding: 1% 1% 1% 1%;\n  overflow-x: hidden;\n}\n\n.suits-area-sub-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.suit[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid #000000;\n  margin: 0 auto;\n  height: 15%;\n  display: flex;\n  background-color: #000;\n}\n\n.suitTitle[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.info[_ngcontent-%COMP%], .suits[_ngcontent-%COMP%] {\n  margin: 1% 1% 1% 1%;\n  padding: 1% 1% 1% 1%;\n  width: 45%;\n  background: #0F1626;\n  border: 3px solid #000000;\n  overflow-y: auto;\n}\n\n@media only screen and (max-width: 1000px) {\n  .info[_ngcontent-%COMP%], .suits[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .ngames-dropdown[_ngcontent-%COMP%] {\n    font-size: 13px;\n    height: 40px;\n    width: 120px;\n    overflow: hidden;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    padding: 11px 15px;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .info[_ngcontent-%COMP%], .suits[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .ngames-dropdown[_ngcontent-%COMP%] {\n    font-size: 12px;\n    height: 30px;\n    width: 90px;\n    overflow: hidden;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    padding: 6px 15px;\n  }\n}\n\n.loading-area-cards[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n}\n\n.loading-area-cards[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  transform-origin: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.loading-area-cards[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvb3Ntb3Npc1NvbGl0YWlyZS9DOlxcQ29kZVxcV2Vic2l0ZVxcZXJpay1ob2ZmbWFuLXdlYnNpdGUtYW5ndWxhci9zcmNcXGFwcFxccHJvamVjdHNcXG9zbW9zaXNTb2xpdGFpcmVcXG9zbW9zaXMtc29saXRhaXJlLnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL29zbW9zaXNTb2xpdGFpcmUvb3Ntb3Npcy1zb2xpdGFpcmUuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvb3Ntb3Npc1NvbGl0YWlyZS9DOlxcQ29kZVxcV2Vic2l0ZVxcZXJpay1ob2ZmbWFuLXdlYnNpdGUtYW5ndWxhci9zcmNcXHN0eWxlc1xcY29sb3Vycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDREQ7O0FESUE7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0REOztBRElBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNERDs7QURJQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDREQ7O0FESUE7RUFDQyxZQUFBO0FDREQ7O0FESUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREQ7O0FESUE7RUFDQyx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0REOztBRElBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNERDs7QURJQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0REOztBRElBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDREQ7O0FESUE7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0REOztBRElBO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNERDs7QURJQTtFQUNDO0lBQ0MsZUFBQTtFQ0RBOztFRElEO0lBQ0MsZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNEQTs7RURJRDtJQUNDLGtCQUFBO0VDREE7QUFDRjs7QURJQTtFQUNDO0lBQ0MsZUFBQTtFQ0ZBOztFREtEO0lBQ0MsZUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNGQTs7RURLRDtJQUNDLGlCQUFBO0VDRkE7QUFDRjs7QURLQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hEOztBREtDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDSEY7O0FES0U7RUFDQyx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUV2Slc7QURvSmQiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9vc21vc2lzU29saXRhaXJlL29zbW9zaXMtc29saXRhaXJlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG91cnMuc2Nzc1wiO1xyXG5cclxuLmhvbWUtbGluayB7XHJcblx0bWFyZ2luLXRvcDogMC41ZW07XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucnVsZXMtbGluayB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5vc21vc2lzLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogMXZoO1xyXG5cdGhlaWdodDogOTV2aDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGxheS1nYW1lIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5wbGF5LWdhbWU+ZGl2IHtcclxuXHRtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5uZ2FtZXMtZHJvcGRvd24ge1xyXG5cdGhlaWdodDogNTBweDtcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzg4QkJENjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxNnB4IDMycHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uc3VpdHMge1xyXG5cdGJhY2tncm91bmQ6ICMwRjE2MjY7XHJcblx0Y29sb3I6ICNGNUY1RjU7XHJcblx0LyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHRtYXJnaW46IDElIDElIDElIDElO1xyXG5cdHBhZGRpbmc6IDElIDElIDElIDElO1xyXG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnN1aXRzLWFyZWEtc3ViLXdyYXBwZXIge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWl0IHtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0aGVpZ2h0OiAxNSU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uc3VpdFRpdGxlIHtcclxuXHRoZWlnaHQ6IDI1cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLCAuc3VpdHMge1xyXG5cdG1hcmdpbjogMSUgMSUgMSUgMSU7XHJcblx0cGFkZGluZzogMSUgMSUgMSUgMSU7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHRiYWNrZ3JvdW5kOiAjMEYxNjI2O1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuXHQuaW5mbywgLnN1aXRzIHtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHR9XHJcblxyXG5cdC5uZ2FtZXMtZHJvcGRvd24ge1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0d2lkdGg6IDEyMHB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC5idXR0b24ge1xyXG5cdFx0cGFkZGluZzogMTFweCAxNXB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG5cdC5pbmZvLCAuc3VpdHMge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHJcblx0Lm5nYW1lcy1kcm9wZG93biB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHR3aWR0aDogOTBweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uIHtcclxuXHRcdHBhZGRpbmc6IDZweCAxNXB4O1xyXG5cdH1cclxufVxyXG5cclxuLmxvYWRpbmctYXJlYS1jYXJkcyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHQuc3Bpbm5lciB7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0d2lkdGg6IDIwMHB4O1xyXG5cdFx0YW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHJcblx0XHQucGF0aCB7XHJcblx0XHRcdHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcclxuXHRcdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcblx0XHRcdGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG5cdFx0XHRzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcblx0XHRcdHN0cm9rZTogJHdoaXRlLXNtb2tlO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi5ob21lLWxpbmsge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucnVsZXMtbGluayB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5vc21vc2lzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgaGVpZ2h0OiA5NXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBsYXktZ2FtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5wbGF5LWdhbWUgPiBkaXYge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5uZ2FtZXMtZHJvcGRvd24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OEJCRDY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zdWl0cyB7XG4gIGJhY2tncm91bmQ6ICMwRjE2MjY7XG4gIGNvbG9yOiAjRjVGNUY1O1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XG4gIHdpZHRoOiA0NSU7XG4gIG1hcmdpbjogMSUgMSUgMSUgMSU7XG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5zdWl0cy1hcmVhLXN1Yi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1aXQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5zdWl0VGl0bGUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8sIC5zdWl0cyB7XG4gIG1hcmdpbjogMSUgMSUgMSUgMSU7XG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xuICB3aWR0aDogNDUlO1xuICBiYWNrZ3JvdW5kOiAjMEYxNjI2O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaW5mbywgLnN1aXRzIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAubmdhbWVzLWRyb3Bkb3duIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTFweCAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5pbmZvLCAuc3VpdHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5uZ2FtZXMtZHJvcGRvd24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICB9XG59XG4ubG9hZGluZy1hcmVhLWNhcmRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxvYWRpbmctYXJlYS1jYXJkcyAuc3Bpbm5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmxvYWRpbmctYXJlYS1jYXJkcyAuc3Bpbm5lciAucGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZTogI0Y1RjVGNTtcbn0iLCIkd2hpdGUtc21va2U6ICNGNUY1RjU7XHJcbiRuYXZ5OiAjMEYxNjI2O1xyXG4kbGltZS1ncmVlbjogIzcwQzk4OTtcclxuJGRhcmtlci1saW1lOiAjNDVCNjY0O1xyXG4kZGFya2VyLWxpbWUtc2F0dXJhdGVkOiAjMzdDNDVFO1xyXG4kZGFya2VyLWxpbWUtbGlnaHRlcjogIzcxQzk4OTtcclxuJG5pY2UtZGFyay1ibHVlOiAjMDExNzJEO1xyXG4kbmljZS1ncmV5LWJsdWU6ICMwRDQyNTQ7XHJcbiRwYXJjaG1lbnQ6ICNFQkQ1QjM7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OsmosisSolitaireComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-osmosis-solitaire',
                styleUrls: ['./osmosis-solitaire.scss'],
                templateUrl: './osmosis-solitaire.html'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/projects/stateMachineCreator/state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function StateMachineComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 26);
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", c_r3.hex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", c_r3);
} }
function StateMachineComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateMachineComponent_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.createStateOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StateMachineComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateMachineComponent_div_47_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.toggleStateMenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r10 = ctx.index;
    const y_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", y_r7 + "," + x_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", x_r10);
} }
function StateMachineComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StateMachineComponent_div_47_div_1_Template, 1, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(50).split(""));
} }
class StateMachineComponent {
    constructor() {
        this.createStateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            symbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            accept: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            colour: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.showCreateStateWindow = false;
        this.showStateMenu = false;
        this.menuPos = { x: '0px', y: '0px' };
        this.states = [];
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
    toggleStateMenu(event) {
        if (!this.showCreateStateWindow) {
            this.showStateMenu = !this.showStateMenu;
            if (this.showStateMenu && !this.showCreateStateWindow) {
                this.focusedStateId = event.target.id;
                this.menuPos.x = event.clientX + 'px';
                this.menuPos.y = event.clientY + 'px';
            }
        }
    }
    createStateOption() {
        this.showStateMenu = !this.showStateMenu;
        this.showCreateStateWindow = !this.showCreateStateWindow;
    }
    createState() {
        document.getElementById(this.focusedStateId).style.backgroundColor = this.createStateForm.value.colour.hex;
        this.showCreateStateWindow = !this.showCreateStateWindow;
        let state = new _state__WEBPACK_IMPORTED_MODULE_1__["State"]();
        state.setCoordinatesFromId(this.focusedStateId);
        state.name = this.createStateForm.value.name;
        state.symbol = this.createStateForm.value.symbol;
        state.accept = this.createStateForm.value.accept;
        state.colour = this.createStateForm.value.colour;
        this.states.push(state);
    }
    createEdgeOption() {
    }
    deleteStateOption() {
    }
    stateDoesNotExist() {
        let doesNotExist = true;
        this.states.forEach((s) => {
            if (s.getCoordinatesAsId() === this.focusedStateId) {
                doesNotExist = false;
            }
        });
        return doesNotExist;
    }
}
StateMachineComponent.ɵfac = function StateMachineComponent_Factory(t) { return new (t || StateMachineComponent)(); };
StateMachineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateMachineComponent, selectors: [["app-state-machine"]], decls: 48, vars: 18, consts: [[1, "creation-window"], [3, "formGroup", "ngSubmit"], [1, "create-state-title"], [1, "input-area"], ["type", "text", "formControlName", "name", "placeholder", "State", 1, "input-box"], ["type", "text", "formControlName", "symbol", "maxlength", "1", "placeholder", "A", 1, "input-box", "state-symbol"], [1, "input-area", "checkbox-area"], ["type", "checkbox", "formControlName", "accept", 1, "input-box-hidden"], [1, "input-box-styled"], [1, "input-area", "dropdown-area"], ["formControlName", "colour", 1, "input-colourpicker"], ["class", "input-colourpicker-option", 3, "background-color", "ngValue", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], ["type", "submit", 1, "button"], [1, "state-menu"], ["class", "state-menu-option", 3, "click", 4, "ngIf"], [1, "state-menu-option", 3, "click"], [1, "flex-wrapper"], [1, "smc-area"], [1, "creator-wrapper"], [1, "info"], ["routerLink", "/home", 1, "text-link", "text-link--dark-bkrnd"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "arrow", "arrow--left"], ["d", "M24 12l-12-8v5h-12v6h12v5z"], [1, "state-area"], ["class", "state-row", 4, "ngFor", "ngForOf"], [1, "input-colourpicker-option", 3, "ngValue"], [1, "state-row"], ["class", "state-square", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "state-square", 3, "id", "click"]], template: function StateMachineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StateMachineComponent_Template_form_ngSubmit_1_listener() { return ctx.createState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " State Symbol: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Accept State: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Colour: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StateMachineComponent_option_17_Template, 1, 3, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateMachineComponent_Template_button_click_19_listener() { return ctx.showCreateStateWindow = !ctx.showCreateStateWindow; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Create State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StateMachineComponent_div_24_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateMachineComponent_Template_div_click_25_listener() { return ctx.createEdgeOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateMachineComponent_Template_div_click_28_listener() { return ctx.deleteStateOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delete State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "State Machine Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Left click on a square to show menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Left click on created state and select \"Create Edge\" to create edge between states. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, StateMachineComponent_div_47_Template, 2, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showCreateStateWindow ? "block" : "none")("top", ctx.menuPos.y)("left", ctx.menuPos.x);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createStateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.createStateForm.controls["colour"] == null ? null : ctx.createStateForm.controls["colour"].value.hex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showStateMenu ? "block" : "none")("top", ctx.menuPos.y)("left", ctx.menuPos.x);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.states ? ctx.stateDoesNotExist() : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(50).split(""));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["div[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.flex-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1em 1em 1em 1em;\n}\n\n.creation-window[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: #688388;\n  border: 2px solid #000;\n  color: #000;\n  box-shadow: 10px 10px black;\n}\n\n.state-menu[_ngcontent-%COMP%] {\n  background-color: #688388;\n  position: absolute;\n  border: 1px solid black;\n  box-shadow: 10px 10px black;\n}\n\n.state-menu[_ngcontent-%COMP%]   .state-menu-option[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 10px 10px 10px 10px;\n}\n\n.state-menu[_ngcontent-%COMP%]   .state-menu-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.state-menu[_ngcontent-%COMP%]   .state-menu-option[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n}\n\n.create-state-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0 10px 0;\n}\n\n.input-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  height: 24px;\n}\n\n.input-box.state-symbol[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 24px;\n  text-align: center;\n}\n\n.input-box-hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n  margin: 0;\n  opacity: 0;\n}\n\n.input-box-styled[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-left: 10px;\n  height: 23px;\n  width: 25px;\n  background-color: #FFF;\n  border: 2px solid #FFF;\n  -moz-appearance: textarea;\n       appearance: textarea;\n  -webkit-appearance: textarea;\n}\n\n.input-box-styled[_ngcontent-%COMP%]:hover {\n  background-color: #ccc;\n}\n\n.input-box-styled[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: relative;\n  display: none;\n}\n\n.checkbox-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .input-box-styled[_ngcontent-%COMP%] {\n  background-color: #88BBD6;\n}\n\n.checkbox-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .input-box-styled[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n.checkbox-area[_ngcontent-%COMP%]   .input-box-styled[_ngcontent-%COMP%]:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.input-colourpicker[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 28px;\n}\n\n.smc-area[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background-color: #CDCDCD;\n  color: #000;\n  padding: 15px 15px 15px 15px;\n  height: 100%;\n  width: 100%;\n}\n\n.creator-wrapper[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #000;\n  display: flex;\n}\n\n.info[_ngcontent-%COMP%] {\n  width: 20%;\n  border: 1px solid #000;\n  padding: 10px;\n}\n\n.state-area[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 90vh;\n  align-self: center;\n  overflow: scroll;\n}\n\n.state-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: top;\n  width: 100%;\n  top: 0;\n}\n\n.state-square[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  border: 1px solid #000;\n  width: 50px;\n  height: 50px;\n  flex-shrink: 0;\n}\n\n.state-square[_ngcontent-%COMP%]:hover {\n  border-color: #FF7F27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvc3RhdGVNYWNoaW5lQ3JlYXRvci9DOlxcQ29kZVxcV2Vic2l0ZVxcZXJpay1ob2ZmbWFuLXdlYnNpdGUtYW5ndWxhci9zcmNcXGFwcFxccHJvamVjdHNcXHN0YXRlTWFjaGluZUNyZWF0b3JcXHN0YXRlLW1hY2hpbmUtY3JlYXRvci5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9zdGF0ZU1hY2hpbmVDcmVhdG9yL3N0YXRlLW1hY2hpbmUtY3JlYXRvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsU0FBQTtBQ0FEOztBREdBO0VBQ0MsZ0JBQUE7QUNBRDs7QURHQTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDQUQ7O0FER0E7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0FEOztBREdBO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNBRDs7QURDQztFQUNDLHVCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURBRTtFQUNDLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDRUg7O0FEQ0M7RUFDQyx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNDLGtCQUFBO0VBQ0EscUJBQUE7QUNBRDs7QURHQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUQ7O0FER0E7RUFDQyxZQUFBO0FDQUQ7O0FER0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUQ7O0FER0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBRDs7QURHQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO09BQUEsb0JBQUE7RUFDQSw0QkFBQTtBQ0FEOztBREdBO0VBQ0Msc0JBQUE7QUNBRDs7QURHQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBRDs7QURHQTtFQUNDLHlCQUFBO0FDQUQ7O0FER0E7RUFDQyxjQUFBO0FDQUQ7O0FER0E7RUFDQyxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0FDQUQ7O0FER0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0FEOztBREdBO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRDs7QURHQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNBRDs7QURHQTtFQUNDLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNBRDs7QURHQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRDs7QURHQTtFQUNDLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0FEOztBREdBO0VBQ0Msc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FEOztBREdBO0VBQ0MscUJBQUE7QUNBRCIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3N0YXRlTWFjaGluZUNyZWF0b3Ivc3RhdGUtbWFjaGluZS1jcmVhdG9yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG91cnMuc2Nzc1wiO1xyXG5kaXYge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZsZXgtd3JhcHBlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxZW0gMWVtIDFlbSAxZW07XHJcbn1cclxuXHJcbi5jcmVhdGlvbi13aW5kb3cge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjg4Mzg4O1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IGJsYWNrO1xyXG59XHJcblxyXG4uc3RhdGUtbWVudSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzY4ODM4ODtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IGJsYWNrO1xyXG5cdC5zdGF0ZS1tZW51LW9wdGlvbiB7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHRcdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcblx0XHRzcGFuIHtcclxuXHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zdGF0ZS1tZW51LW9wdGlvbjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdGNvbG9yOiBibGFjaztcclxuXHR9XHJcbn1cclxuXHJcbi5jcmVhdGUtc3RhdGUtdGl0bGUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1hcmVhIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYm94IHtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3guc3RhdGUtc3ltYm9sIHtcclxuXHR3aWR0aDogMjZweDtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtYm94LWhpZGRlbiB7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdGhlaWdodDogMHB4O1xyXG5cdHdpZHRoOiAwcHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3gtc3R5bGVkIHtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0aGVpZ2h0OiAyM3B4O1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI0ZGRjtcclxuXHRhcHBlYXJhbmNlOiB0ZXh0YXJlYTtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRhcmVhO1xyXG59XHJcblxyXG4uaW5wdXQtYm94LXN0eWxlZDpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmlucHV0LWJveC1zdHlsZWQ6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGVja2JveC1hcmVhIGlucHV0OmNoZWNrZWR+LmlucHV0LWJveC1zdHlsZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM4OEJCRDY7XHJcbn1cclxuXHJcbi5jaGVja2JveC1hcmVhIGlucHV0OmNoZWNrZWR+LmlucHV0LWJveC1zdHlsZWQ6YWZ0ZXIge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2hlY2tib3gtYXJlYSAuaW5wdXQtYm94LXN0eWxlZDphZnRlciB7XHJcblx0bGVmdDogOXB4O1xyXG5cdHRvcDogNXB4O1xyXG5cdHdpZHRoOiA1cHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdGJvcmRlcjogc29saWQgIzAwMDtcclxuXHRib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uaW5wdXQtY29sb3VycGlja2VyIHtcclxuXHR3aWR0aDogNTVweDtcclxuXHRoZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5zbWMtYXJlYSB7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0NEQ0RDRDtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNyZWF0b3Itd3JhcHBlciB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmluZm8ge1xyXG5cdHdpZHRoOiAyMCU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc3RhdGUtYXJlYSB7XHJcblx0bWF4LXdpZHRoOiA4MCU7XHJcblx0bWF4LWhlaWdodDogOTB2aDtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0b3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnN0YXRlLXJvdyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0b3A6IDA7XHJcbn1cclxuXHJcbi5zdGF0ZS1zcXVhcmUge1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0ZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5zdGF0ZS1zcXVhcmU6aG92ZXIge1xyXG5cdGJvcmRlci1jb2xvcjogI0ZGN0YyNztcclxufSIsImRpdiB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mbGV4LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gMWVtO1xufVxuXG4uY3JlYXRpb24td2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg4Mzg4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBjb2xvcjogIzAwMDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IGJsYWNrO1xufVxuXG4uc3RhdGUtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODgzODg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCBibGFjaztcbn1cbi5zdGF0ZS1tZW51IC5zdGF0ZS1tZW51LW9wdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuLnN0YXRlLW1lbnUgLnN0YXRlLW1lbnUtb3B0aW9uIHNwYW4ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5zdGF0ZS1tZW51IC5zdGF0ZS1tZW51LW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jcmVhdGUtc3RhdGUtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn1cblxuLmlucHV0LWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pbnB1dC1ib3gge1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5pbnB1dC1ib3guc3RhdGUtc3ltYm9sIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtYm94LWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmlucHV0LWJveC1zdHlsZWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICBhcHBlYXJhbmNlOiB0ZXh0YXJlYTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0YXJlYTtcbn1cblxuLmlucHV0LWJveC1zdHlsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uaW5wdXQtYm94LXN0eWxlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94LWFyZWEgaW5wdXQ6Y2hlY2tlZCB+IC5pbnB1dC1ib3gtc3R5bGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4QkJENjtcbn1cblxuLmNoZWNrYm94LWFyZWEgaW5wdXQ6Y2hlY2tlZCB+IC5pbnB1dC1ib3gtc3R5bGVkOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveC1hcmVhIC5pbnB1dC1ib3gtc3R5bGVkOmFmdGVyIHtcbiAgbGVmdDogOXB4O1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkICMwMDA7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5pbnB1dC1jb2xvdXJwaWNrZXIge1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uc21jLWFyZWEge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NEQ0RDRDtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jcmVhdG9yLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5mbyB7XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdGF0ZS1hcmVhIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnN0YXRlLXJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xufVxuXG4uc3RhdGUtc3F1YXJlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zdGF0ZS1zcXVhcmU6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNGRjdGMjc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateMachineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-state-machine',
                styleUrls: ['./state-machine-creator.scss'],
                templateUrl: './state-machine-creator.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/stateMachineCreator/state.ts":
/*!*******************************************************!*\
  !*** ./src/app/projects/stateMachineCreator/state.ts ***!
  \*******************************************************/
/*! exports provided: State, Edge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return Edge; });
class State {
    constructor() {
        this.coordinates = { x: null, y: null };
    }
    getCoordinatesAsId() {
        return `${this.coordinates.x},${this.coordinates.y}`;
    }
    ;
    setCoordinatesFromId(id) {
        this.coordinates.x = parseInt(id.split(',')[0]);
        this.coordinates.y = parseInt(id.split(',')[1]);
    }
}
;
class Edge {
}
;


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
setTimeout(() => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Website\erik-hoffman-website-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roma/github/autosale/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GYPg":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/roadmap/roadmap.component.ts ***!
  \****************************************************************/
/*! exports provided: RoadmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapComponent", function() { return RoadmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RoadmapComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoadmapComponent.ɵfac = function RoadmapComponent_Factory(t) { return new (t || RoadmapComponent)(); };
RoadmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapComponent, selectors: [["app-roadmap"]], decls: 2, vars: 0, template: function RoadmapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "roadmap works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JvYWRtYXAvcm9hZG1hcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap',
                templateUrl: './roadmap.component.html',
                styleUrls: ['./roadmap.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/top-navigation/top-navigation.component */ "pLOs");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/banner/banner.component */ "biqx");
/* harmony import */ var _shared_components_work_list_work_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/work-list/work-list.component */ "Vb+N");
/* harmony import */ var _shared_components_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/feedback-form/feedback-form.component */ "dhGk");
/* harmony import */ var _shared_components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/roadmap/roadmap.component */ "GYPg");
/* harmony import */ var _shared_components_want_to_sell_want_to_sell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/want-to-sell/want-to-sell.component */ "x1Z5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");










class AppComponent {
    constructor() {
        this.title = 'autosale';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-work-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-feedback-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-want-to-sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } }, directives: [_shared_components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_1__["TopNavigationComponent"], _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _shared_components_work_list_work_list_component__WEBPACK_IMPORTED_MODULE_3__["WorkListComponent"], _shared_components_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackFormComponent"], _shared_components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_5__["RoadmapComponent"], _shared_components_want_to_sell_want_to_sell_component__WEBPACK_IMPORTED_MODULE_6__["WantToSellComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "Vb+N":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/work-list/work-list.component.ts ***!
  \********************************************************************/
/*! exports provided: WorkListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkListComponent", function() { return WorkListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function WorkListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.text);
} }
class WorkListComponent {
    constructor() {
        this.workList = [
            {
                img: '',
                title: 'Срочный выкуп авто',
                text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
                isMobile: true
            },
            {
                img: '',
                title: 'Срочный выкуп авто',
                text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
                isMobile: true
            },
            {
                img: '',
                title: 'Срочный выкуп авто',
                text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
                isMobile: true
            },
            {
                img: '',
                title: 'Срочный выкуп авто',
                text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
                isMobile: true
            },
            {
                img: '',
                title: 'Срочный выкуп авто',
                text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
                isMobile: true
            },
            {
                img: '',
                title: 'Срочный выкуп авто',
                text: 'Быстрый выкуп авто - это удобно, деньги у Вас буквально через пару часов.',
                isMobile: true
            },
        ];
    }
    ngOnInit() {
    }
}
WorkListComponent.ɵfac = function WorkListComponent_Factory(t) { return new (t || WorkListComponent)(); };
WorkListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkListComponent, selectors: [["app-work-list"]], decls: 5, vars: 1, consts: [[1, "work"], [1, "work__title"], [1, "work-list"], ["class", "work-list__item", 4, "ngFor", "ngForOf"], [1, "work-list__item"], ["alt", "", 1, "work-list__item-icon", 3, "src"], [1, "work-list__item-title"], [1, "work-list__item-text"]], template: function WorkListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkListComponent_li_4_Template, 6, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".work[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 64px 15%;\n}\n.work[_ngcontent-%COMP%]   .work__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 64px;\n  color: #18191F;\n  margin: 0 0 48px 0;\n  text-align: center;\n}\n.work-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 30%);\n  grid-template-rows: repeat(3, auto);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9hdXRvc2FsZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3dvcmstbGlzdC93b3JrLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3dvcmstbGlzdC93b3JrLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRElBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3dvcmstbGlzdC93b3JrLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNjRweCAxNSU7XG5cbiAgJiAmX190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgY29sb3I6ICMxODE5MUY7XG4gICAgbWFyZ2luOiAwIDAgNDhweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5cbi53b3JrLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbn1cbiIsIi53b3JrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2NHB4IDE1JTtcbn1cbi53b3JrIC53b3JrX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIGNvbG9yOiAjMTgxOTFGO1xuICBtYXJnaW46IDAgMCA0OHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53b3JrLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-list',
                templateUrl: './work-list.component.html',
                styleUrls: ['./work-list.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/top-navigation/top-navigation.component */ "pLOs");
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/banner/banner.component */ "biqx");
/* harmony import */ var _shared_components_work_list_work_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/work-list/work-list.component */ "Vb+N");
/* harmony import */ var _shared_components_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/feedback-form/feedback-form.component */ "dhGk");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");
/* harmony import */ var _shared_components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/roadmap/roadmap.component */ "GYPg");
/* harmony import */ var _shared_components_want_to_sell_want_to_sell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/want-to-sell/want-to-sell.component */ "x1Z5");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_4__["TopNavigationComponent"],
        _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"],
        _shared_components_work_list_work_list_component__WEBPACK_IMPORTED_MODULE_6__["WorkListComponent"],
        _shared_components_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackFormComponent"],
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _shared_components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_9__["RoadmapComponent"],
        _shared_components_want_to_sell_want_to_sell_component__WEBPACK_IMPORTED_MODULE_10__["WantToSellComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_4__["TopNavigationComponent"],
                    _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"],
                    _shared_components_work_list_work_list_component__WEBPACK_IMPORTED_MODULE_6__["WorkListComponent"],
                    _shared_components_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackFormComponent"],
                    _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _shared_components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_9__["RoadmapComponent"],
                    _shared_components_want_to_sell_want_to_sell_component__WEBPACK_IMPORTED_MODULE_10__["WantToSellComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "biqx":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/banner/banner.component.ts ***!
  \**************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 10, vars: 0, consts: [[1, "banner"], [1, "banner__content"], [1, "banner__content-title"], [1, "banner__content-region"], [1, "banner__content-text"], ["href", "tel:+375339140576", 1, "banner__content-phone"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u042B\u041A\u0423\u041F \u0410\u0412\u0422\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u041E \u0412\u0421\u0415\u0419 \u0411\u0415\u041B\u0410\u0420\u0423\u0421\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0432\u044B\u043A\u0443\u043F \u0430\u0432\u0442\u043E, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044F \u0432\u044B\u0433\u043E\u0434\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u043C\u0430\u0448\u0438\u043D\u0443 \u0441 \u043F\u0440\u043E\u0431\u0435\u0433\u043E\u043C \u0432 \u043B\u044E\u0431\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u043F\u043E \u0440\u044B\u043D\u043E\u0447\u043D\u043E\u0439 \u0446\u0435\u043D\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+375339140576");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  position: relative;\n  background: #53565B;\n  padding: 0 15%;\n  display: flex;\n  justify-content: flex-end;\n}\n.banner[_ngcontent-%COMP%]   .banner__content[_ngcontent-%COMP%] {\n  padding: 135px 0;\n  width: 500px;\n}\n.banner[_ngcontent-%COMP%]   .banner__content-title[_ngcontent-%COMP%] {\n  font-size: 72px;\n  line-height: 82px;\n  font-weight: 800;\n  margin: 0;\n  color: #fff;\n}\n.banner[_ngcontent-%COMP%]   .banner__content-region[_ngcontent-%COMP%] {\n  font-size: 64px;\n  line-height: 74px;\n  font-weight: 800;\n  margin: 0;\n  color: #53565B;\n  text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;\n}\n.banner[_ngcontent-%COMP%]   .banner__content-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 300;\n  margin: 30px 0;\n  color: #fff;\n}\n.banner[_ngcontent-%COMP%]   .banner__content-phone[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 82px;\n  padding: 0 50px;\n  border: 0;\n  background-color: #DE070C;\n  color: #fff;\n  font-weight: 800;\n  font-size: 44px;\n  line-height: 60px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9hdXRvc2FsZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NOO0FERUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsdUlBQUE7QUNBTjtBREdJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0ROO0FESUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICM1MzU2NUI7XG4gIHBhZGRpbmc6IDAgMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICYgJl9fY29udGVudCB7XG4gICAgcGFkZGluZzogMTM1cHggMDtcbiAgICB3aWR0aDogNTAwcHg7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA4MnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICYtcmVnaW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA3NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjNTM1NjVCO1xuICAgICAgdGV4dC1zaGFkb3c6IDFweCAwIDAgI2ZmZiwgLTFweCAwIDAgI2ZmZiwgMCAxcHggMCAjZmZmLCAwIC0xcHggMCAjZmZmLCAxcHggMXB4ICNmZmYsIC0xcHggLTFweCAwICNmZmYsIDFweCAtMXB4IDAgI2ZmZiwgLTFweCAxcHggMCAjZmZmO1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICYtcGhvbmUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA4MnB4O1xuICAgICAgcGFkZGluZzogMCA1MHB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RFMDcwQztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzUzNTY1QjtcbiAgcGFkZGluZzogMCAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYmFubmVyIC5iYW5uZXJfX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxMzVweCAwO1xuICB3aWR0aDogNTAwcHg7XG59XG4uYmFubmVyIC5iYW5uZXJfX2NvbnRlbnQtdGl0bGUge1xuICBmb250LXNpemU6IDcycHg7XG4gIGxpbmUtaGVpZ2h0OiA4MnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJhbm5lciAuYmFubmVyX19jb250ZW50LXJlZ2lvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDc0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM1MzU2NUI7XG4gIHRleHQtc2hhZG93OiAxcHggMCAwICNmZmYsIC0xcHggMCAwICNmZmYsIDAgMXB4IDAgI2ZmZiwgMCAtMXB4IDAgI2ZmZiwgMXB4IDFweCAjZmZmLCAtMXB4IC0xcHggMCAjZmZmLCAxcHggLTFweCAwICNmZmYsIC0xcHggMXB4IDAgI2ZmZjtcbn1cbi5iYW5uZXIgLmJhbm5lcl9fY29udGVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJhbm5lciAuYmFubmVyX19jb250ZW50LXBob25lIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODJweDtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERTA3MEM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dhGk":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feedback-form/feedback-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: FeedbackFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormComponent", function() { return FeedbackFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FeedbackFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeedbackFormComponent.ɵfac = function FeedbackFormComponent_Factory(t) { return new (t || FeedbackFormComponent)(); };
FeedbackFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackFormComponent, selectors: [["app-feedback-form"]], decls: 2, vars: 0, template: function FeedbackFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feedback-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZlZWRiYWNrLWZvcm0vZmVlZGJhY2stZm9ybS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback-form',
                templateUrl: './feedback-form.component.html',
                styleUrls: ['./feedback-form.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pLOs":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/top-navigation/top-navigation.component.ts ***!
  \******************************************************************************/
/*! exports provided: TopNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationComponent", function() { return TopNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TopNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopNavigationComponent.ɵfac = function TopNavigationComponent_Factory(t) { return new (t || TopNavigationComponent)(); };
TopNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopNavigationComponent, selectors: [["app-top-navigation"]], decls: 9, vars: 0, consts: [[1, "top-navigation"], ["src", "/assets/svg/logo.svg", "alt", ""], ["href", "", 1, "top-navigation__btn"], ["href", "tel:+37533910576", 1, "top-navigation__phone"]], template: function TopNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+37533910576");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".top-navigation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 72px;\n  background: #fff;\n  padding: 12px 15%;\n}\n.top-navigation[_ngcontent-%COMP%]   .top-navigation__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  width: 48px;\n  border-radius: 8px;\n  background-color: #FDE6E7;\n  border: 1px solid #DE070C;\n  padding: 0;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #DE070C;\n  text-decoration: none;\n  margin-left: 10px;\n}\n.top-navigation[_ngcontent-%COMP%]   .top-navigation__phone[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 10px;\n  height: 48px;\n  border-radius: 8px;\n  background-color: #DE070C;\n  padding: 0 20px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hL2dpdGh1Yi9hdXRvc2FsZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvcC1uYXZpZ2F0aW9uL3RvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b3AtbmF2aWdhdGlvbi90b3AtbmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURLRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNISjtBRE1FO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvcC1uYXZpZ2F0aW9uL3RvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNzJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTJweCAxNSU7XG5cbiAgJiAmX19sb2dve1xuICAgIFxuICB9XG5cbiAgJiAmX19idG57XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREU2RTc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RFMDcwQztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjREUwNzBDO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gICYgJl9fcGhvbmV7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERTA3MEM7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufSIsIi50b3AtbmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDcycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEycHggMTUlO1xufVxuLnRvcC1uYXZpZ2F0aW9uIC50b3AtbmF2aWdhdGlvbl9fYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGREU2RTc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERTA3MEM7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjREUwNzBDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnRvcC1uYXZpZ2F0aW9uIC50b3AtbmF2aWdhdGlvbl9fcGhvbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREUwNzBDO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-navigation',
                templateUrl: './top-navigation.component.html',
                styleUrls: ['./top-navigation.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x1Z5":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/want-to-sell/want-to-sell.component.ts ***!
  \**************************************************************************/
/*! exports provided: WantToSellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WantToSellComponent", function() { return WantToSellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WantToSellComponent {
    constructor() { }
    ngOnInit() {
    }
}
WantToSellComponent.ɵfac = function WantToSellComponent_Factory(t) { return new (t || WantToSellComponent)(); };
WantToSellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WantToSellComponent, selectors: [["app-want-to-sell"]], decls: 2, vars: 0, template: function WantToSellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "want-to-sell works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3dhbnQtdG8tc2VsbC93YW50LXRvLXNlbGwuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WantToSellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-want-to-sell',
                templateUrl: './want-to-sell.component.html',
                styleUrls: ['./want-to-sell.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
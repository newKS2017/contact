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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"footer\">footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <Navbar [icon]=\"icon\" [rightContent]=\"rightContent\" [mode]=\"'light'\" (onLeftClick)=\"onLeftClick()\">\n        {{title}}\n    </Navbar>\n    <Navbar [leftContent]=\"'Back'\" [rightContent]=\"rightContent\" (onLeftClick)=\"onLeftClick()\">\n        NavBar\n    </Navbar>\n    \n    <ng-template #icon>\n        <Icon [type]=\"'left'\"></Icon>\n    </ng-template>\n    \n    <ng-template #rightContent>\n        <Icon [type]=\"'search'\" [ngStyle]=\"{marginRight: '16px'}\"></Icon>\n        <Icon [type]=\"'ellipsis'\"></Icon>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <!-- 头部 -->\n    <app-header></app-header>\n    <!-- 内容部分 -->\n    <router-outlet></router-outlet>\n    <!-- 底部 -->\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/index/index.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/index/index.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"index first\">\n    <ul class=\"clearfix\">\n        <li>1</li>\n        <li>2</li>\n        <li [routerLink]=\"['/home/topic']\">题</li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/angular7/angular7.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/angular7/angular7.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-publics [title]=\"title\" [topicList]=\"topicList\"></app-publics>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/css3/css3.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/css3/css3.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-publics [title]=\"title\" [topicList]=\"topicList\"></app-publics>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/html5/html5.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/html5/html5.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-publics [title]=\"title\" [topicList]=\"topicList\"></app-publics>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/javascript/javascript.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/javascript/javascript.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-publics [title]=\"title\" [topicList]=\"topicList\"></app-publics>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/nav/nav.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/nav/nav.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav first\">\n    <ul class=\"clearfix\">\n        <ng-container *ngFor=\"let item of titleList\">\n            <li class=\"fl\" [routerLink]=\"[item.path]\">\n                {{item.name}}\n            </li>\n        </ng-container>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/publics/publics.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/publics/publics.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topicPublic\">\n    <div class=\"topic\"><span [innerHTML]=\"title\"></span>题目，共{{count}}题，当前第{{current}}题</div>\n    <p class=\"rate\">正确率：{{checkeds}}/{{complete}}</p>\n    <ul class=\"content\">\n        <ng-container *ngFor=\"let item of topicList;let i=index;\">\n            <li *ngIf=\"(i+1) === current\">\n                {{current}}、<span [innerHTML]=\"item.topic\"></span>\n                <p class=\"choice\">\n                    <nz-radio-group [(ngModel)]=\"item.checked\" (ngModelChange)=\"topicChange($event,item)\">\n                        <label nz-radio nzValue=\"1\" [nzDisabled]=\"item.checked != 0\">正确</label>\n                        <label nz-radio nzValue=\"2\" [nzDisabled]=\"item.checked != 0\">错误</label>\n                    </nz-radio-group>\n                </p>\n            </li>\n        </ng-container>\n    </ul>\n    <div class=\"turning clearfix\">\n        <button class=\"fl\" nz-button nzType=\"primary\" (click)=\"turning('previous')\"\n            [disabled]=\"current===1\">上一题</button>\n        <button class=\"fr\" nz-button nzType=\"primary\" (click)=\"turning('text')\"\n            [disabled]=\"current===topicList.length\">下一题</button>\n    </div>\n    <span class=\"see\" (click)=\"seeLook()\">查看答案</span>\n    <div class=\"answer\" *ngIf=\"topics.look\" [innerHtml]=\"answer\">\n        \n    </div>\n    <div class=\"time clearfix\">\n        <span class=\"fl\">当前时间：{{date | date:'hh:mm:ss'}}</span>\n        <span class=\"fr\" *ngIf=\"complete != count\">本题剩余时间：{{newDate}}</span>\n    </div>\n\n    <nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"本次成绩得分\" (nzOnCancel)=\"handleCancel()\" [nzOkDisabled]=\"true\"\n        [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\">\n        <ng-template #modalContent>\n            <div class=\"result\">共{{count}}题，回答正确{{checkeds}}题，回答错误{{complete-checkeds}}题。</div>\n            <!--  -->\n            <span class=\"joke\">{{checkeds == count?'你已经超神了！':(checkeds/count > 90 ? '很棒哦！':(checkeds/count > 60 ? '勉勉强强及格！少年还需努力！':'你就是传说中的垃圾！！！'))}}</span>\n        </ng-template>\n        <ng-template #modalFooter>\n            <button nz-button nzType=\"default\" (click)=\"handleOk()\">取消</button>\n        </ng-template>\n    </nz-modal>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/topic.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/topic.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first topic\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/topic/typescript/typescript.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/topic/typescript/typescript.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-publics [title]=\"title\" [topicList]=\"topicList\"></app-publics>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [routerLink]=\"['/home']\">登录</p>\n\n\n\n\n\n<p>调取</p>\n\n<span>拍照</span>\n<input type=\"file\" capture=camera [(ngModel)]=\"beat\" (change)=\"beatPho($event)\">\n<br>\n<span>从相册选择</span>\n<input type=\"file\" accept=\".png,.jpg,.gif,.jpeg\" [(ngModel)]=\"choice\" (change)=\"choicePho($event)\">\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/index/index.component */ "./src/app/home/index/index.component.ts");
/* harmony import */ var _home_topic_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/topic/topic.component */ "./src/app/home/topic/topic.component.ts");
/* harmony import */ var _home_topic_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/topic/nav/nav.component */ "./src/app/home/topic/nav/nav.component.ts");
/* harmony import */ var _home_topic_css3_css3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/topic/css3/css3.component */ "./src/app/home/topic/css3/css3.component.ts");
/* harmony import */ var _home_topic_html5_html5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/topic/html5/html5.component */ "./src/app/home/topic/html5/html5.component.ts");
/* harmony import */ var _home_topic_javascript_javascript_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/topic/javascript/javascript.component */ "./src/app/home/topic/javascript/javascript.component.ts");
/* harmony import */ var _home_topic_angular7_angular7_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/topic/angular7/angular7.component */ "./src/app/home/topic/angular7/angular7.component.ts");
/* harmony import */ var _home_topic_typescript_typescript_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/topic/typescript/typescript.component */ "./src/app/home/topic/typescript/typescript.component.ts");

// 配置路由以下3个必须引入



// 登录

// 首页

// 主页

// 题库







const routes = [
    //默认首页路径
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // 登录页
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: _home_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"] },
            { path: 'topic', component: _home_topic_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicComponent"], children: [
                    { path: '', redirectTo: 'nav', pathMatch: 'full' },
                    { path: 'nav', component: _home_topic_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"] },
                    { path: 'css3', component: _home_topic_css3_css3_component__WEBPACK_IMPORTED_MODULE_9__["Css3Component"] },
                    { path: 'html5', component: _home_topic_html5_html5_component__WEBPACK_IMPORTED_MODULE_10__["Html5Component"] },
                    { path: 'javascript', component: _home_topic_javascript_javascript_component__WEBPACK_IMPORTED_MODULE_11__["JavascriptComponent"] },
                    { path: 'angular7', component: _home_topic_angular7_angular7_component__WEBPACK_IMPORTED_MODULE_12__["Angular7Component"] },
                    { path: 'typescript', component: _home_topic_typescript_typescript_component__WEBPACK_IMPORTED_MODULE_13__["TypescriptComponent"] }
                ] }
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/index/index.component */ "./src/app/home/index/index.component.ts");
/* harmony import */ var _home_topic_topic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/topic/topic.component */ "./src/app/home/topic/topic.component.ts");
/* harmony import */ var _home_topic_css3_css3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/topic/css3/css3.component */ "./src/app/home/topic/css3/css3.component.ts");
/* harmony import */ var _home_topic_html5_html5_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/topic/html5/html5.component */ "./src/app/home/topic/html5/html5.component.ts");
/* harmony import */ var _home_topic_javascript_javascript_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/topic/javascript/javascript.component */ "./src/app/home/topic/javascript/javascript.component.ts");
/* harmony import */ var _home_topic_angular7_angular7_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/topic/angular7/angular7.component */ "./src/app/home/topic/angular7/angular7.component.ts");
/* harmony import */ var _home_topic_typescript_typescript_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/topic/typescript/typescript.component */ "./src/app/home/topic/typescript/typescript.component.ts");
/* harmony import */ var _home_topic_nav_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/topic/nav/nav.component */ "./src/app/home/topic/nav/nav.component.ts");
/* harmony import */ var _home_topic_publics_publics_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/topic/publics/publics.component */ "./src/app/home/topic/publics/publics.component.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm2015/ng-zorro-antd-mobile.js");


// 配置路由以下3个必须引入




// ng-zorro-antd



// ng-zorro-antd-mobile



// 登录

// 主页

// 头部

// 底部

// 主页










Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _home_index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"],
            _home_topic_topic_component__WEBPACK_IMPORTED_MODULE_17__["TopicComponent"],
            _home_topic_nav_nav_component__WEBPACK_IMPORTED_MODULE_23__["NavComponent"],
            _home_topic_css3_css3_component__WEBPACK_IMPORTED_MODULE_18__["Css3Component"],
            _home_topic_html5_html5_component__WEBPACK_IMPORTED_MODULE_19__["Html5Component"],
            _home_topic_javascript_javascript_component__WEBPACK_IMPORTED_MODULE_20__["JavascriptComponent"],
            _home_topic_angular7_angular7_component__WEBPACK_IMPORTED_MODULE_21__["Angular7Component"],
            _home_topic_typescript_typescript_component__WEBPACK_IMPORTED_MODULE_22__["TypescriptComponent"],
            _home_topic_publics_publics_component__WEBPACK_IMPORTED_MODULE_24__["PublicsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            // 路由
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            // ng-zorro
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_25__["NgZorroAntdMobileModule"],
        ],
        providers: [
            { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppService = class AppService {
    constructor() {
        this.zTitle = '主页';
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: rgba(255, 0, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxteUFwcC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6NTBweDtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDAsMjU1LDAuNSk7XHJcbn0iLCIuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMjU1LCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  background: rgba(0, 255, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxteUFwcC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBTUEsZ0NBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC8vIGhlaWdodDo1MHB4O1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6NTBweDtcclxuICAgIC8vIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgLy8gdG9wOjA7XHJcbiAgICAvLyBsZWZ0OjA7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMjU1LCAwLCAwLjUpO1xyXG59IiwiLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = '';
    }
    ngOnInit() {
        this.title = this.appService.zTitle;
    }
    onLeftClick() {
        console.log('onLeftClick');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/index/index.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/index/index.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index ul li {\n  float: left;\n  width: calc(40% - 2px);\n  margin: 10px 5%;\n  height: 60px;\n  border-radius: 10px;\n  border: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbmRleC9DOlxcbXlBcHAvc3JjXFxhcHBcXGhvbWVcXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRleHtcclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDQwJSAtIDJweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmluZGV4IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDQwJSAtIDJweCk7XG4gIG1hcmdpbjogMTBweCA1JTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/index/index.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/index/index.component.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/home/index/index.component.scss")]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/home/topic/angular7/angular7.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/topic/angular7/angular7.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9waWMvYW5ndWxhcjcvYW5ndWxhcjcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/topic/angular7/angular7.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/topic/angular7/angular7.component.ts ***!
  \***********************************************************/
/*! exports provided: Angular7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular7Component", function() { return Angular7Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Angular7Component = class Angular7Component {
    constructor() {
        this.title = 'angular 7.0';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: '路由传参的方式有几种？分别是什么？',
                answer: `<p></p>
      angular7路由传参有3种方式：</br></br>
      1、routerLink-> 在 routerLink=["/home",id]，其中/home是设置的路由path，id是需要传递的参数，routerLink=["/home",{queryParams:json}]多个参数;</br></br>
      2、this.router.navigate(['/home',id]);，多用在调用方法里，this.router.navigate(['/home'],{queryParams:{'name':'zb'}})多个参数;</br></br>
      3、this.router.navigateByUrl('/home/id')，this.router.navigateByUrl('/home',{queryParams:{'name':'zb'}})。</br></br>
      接受参数（两种方法）：</br></br>
      import { ActivatedRoute } from '@angular/router';</br>
      public data: any;</br>
      constructor( public route: ActivatedRoute ) { };</br>
      1、this.data = this.route.snapshot.params['id'];</br>
      2、this.route.queryParams.subscribe(params => {
          this.data = params['name'];
        });
      `,
                checked: '0'
            },
            {
                topic: 'this.router.navigate()？',
                answer: `<p></p>
      1、this.router.navigate(['user', 1]); 以根路由为起点跳转</br></br>
      2、this.router.navigate(['user', 1],{relativeTo: route});默认值为根路由，设置后相对当前路由跳转，route是ActivatedRoute的实例，使用需要导入ActivatedRoute</br></br>
      3、this.router.navigate(['user', 1],{ queryParams: { id: 1 } });路由中传参数 /user/1?id=1</br></br>
      4、this.router.navigate(['view', 1], { preserveQueryParams: true });默认值为false，设为true，保留之前路由中的查询参数/user?id=1 to /view?id=1</br></br>
      5、this.router.navigate(['user', 1],{ fragment: 'top' });路由中锚点跳转 /user/1#top</br></br>
      6、this.router.navigate(['/view'], { preserveFragment: true });默认值为false，设为true，保留之前路由中的锚点/user/1#top to /view#top</br></br>
      7、this.router.navigate(['/user',1], { skipLocationChange: true });默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效</br></br>
      8、this.router.navigate(['/user',1], { replaceUrl: true });未设置时默认为true，设置为false路由不会进行跳转</br></br>
      `,
                checked: '0'
            },
            {
                topic: '变量声明的几种方式？分别有什么含义？',
                answer: `<p></p>
      var声明的变量可以在包含它们的函数外访问;</br></br>
      let声明一个变量，它使用的是词法作用域或块作用域。块作用域变量在包含它们的块或for循环之外是不能访问的;
      const声明是声明变量的另一种方式。它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与let相同的作用域规则，但是不能对它们重新赋值。
      `,
                checked: '0'
            },
            {
                topic: '变量声明的几种类型分别是什么？',
                answer: `<p></p>
      1、private 私有类型，只能在当前类使用</br></br>
      2、public 共有（默认），可以在类里外使用</br></br>
      3、protected 保护类型，只能在当前类和子类中使用</br></br>
      `,
                checked: '0'
            },
            {
                topic: 'angular7自带的管道有哪些？',
                answer: `<p></p>
      1、{{str | uppercase}}  转成大写</br></br>
      2、{{str | lowercase}}  转成小写</br></br>
      3、{{today | date:'yyyy-MM-dd HH:mm:ss'}} 日期格式转换</br></br>
      4、{{n | number:'1.2-4'}} 保留几位小数 （参数：最少整数位数.最少小数位数-最多小数位数）</br></br>
      5、{{'semlinker' | slice:0:3}} 字符串截取从0到3，结果sem</br></br>
      6、{{'semlinker' | slice:0:3 | uppercase}}  管道链 截取0到3转大写</br></br>
      7、{{ {name:'semlinker'} | json }}  js对象序列化  （结果：{“name”:“semlinker”}）</br></br>
      `,
                checked: '0'
            },
            {
                topic: 'angular7的生命周期是？',
                answer: `<p></p>
      ngOnChanges()</br>&nbsp;&nbsp;&nbsp;&nbsp;
          用处：当angular设置数据绑定输入属性发生变化是响应。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        时机：当被绑定的输入属性的值发生变化时调用，不过首次调用是会发生在ngOnInit()之前的。&nbsp;&nbsp;&nbsp;&nbsp;
		      ngOnChanges()方法获取了一个对象，它可以同时观测1个或多个绑定的属性值，它把每个发生变化的属性名都映射到了一个SimpleChange对象，该对象中有属性的当前值和前一个值。</br></br>
	    ngOnInit()</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        用处：在angular第一次显示数据绑定和设置指令或组件的输入属性之后，初始化指令或组件。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        时机：在第一轮ngOnChanges()完成之后调用，只调用一次。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        虽然接口中有一个constructor构造函数，但是在这里最好只对局部变量进行初始化，之外什么都不要做，通过ngOnInit()获取初始数据，而且是放在构造函数后面。</br></br>
	    ngDoCheck()</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        用处：检测那些angular自身无法捕获的变更。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        时机：在每个angular变更检测周期中调用，ngOnChanges()和ngOnInit()之后。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        需谨慎使用，因为一些意想不到的事情也会被视为变更了。</br></br>
	    ngAfterContentInit()和ngAfterContentChecked()    （只适用于组件）</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        用处：在外来内容被投影到组件中之后或投影组件内容的变更检测之后调用。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        时机：ngAfterContentInit() -- 第一次ngDoCheck()之后调用，且只调用一次。</br></br>
		  ngAfterContentChecked() -- 每次ngDoCheck()之后调用，如果需要调用ngAfterContentInit(),则再ngAfterContentInit()之后调用。</br></br>
	    ngAfterViewInit()和ngAfterViewChecked()   （只适用于组件）</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        用处：初始化完或检测变更完组件视图及其子视图之后调用。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        时机：跟相应的content钩子类似，在对应的content钩子后调用。</br></br>
	    ngOnDestroy</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        用处：反订阅可观察对象和分离事件处理器，以防内存泄漏。</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        时机：销毁组件或指令之前调用并清扫</br>&nbsp;&nbsp;&nbsp;&nbsp;
	        释放那些不会被垃圾收集器自动回收的各类资源的地方，取消那些对可观察对象和DOM事件的订阅，停止定时器，注销该指令曾注册到全局服务或应用级服务中的各种回调函数。</br></br>
      `,
                checked: '0'
            },
            {
                topic: '@ViewChild调用子组件方法？',
                answer: `<p></p>
      1、<app-home #child></app-home></br>&nbsp;&nbsp;&nbsp;&nbsp;
      @ViewChild('child') child;</br>&nbsp;&nbsp;&nbsp;&nbsp;
      this.child.childFn();</br></br>
      2、@ViewChild(ChildenComponent) child: ChildenComponent;</br>&nbsp;&nbsp;&nbsp;&nbsp;
      this.child.fn1();
      `,
                checked: '0'
            },
            {
                topic: 'angular7.0常用命令？',
                answer: `<p></p>
      1、ng new myApp 创建一个名称为myApp的项目</br></br>
      2、ng generate component home 创建home组件 </br></br>
      3、ng generate service home 创建home服务</br></br>
      4、ng generate module app-routing --module=app</br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        --flat 把这个文件放进了src/app中，而不是单独的目录中。&nbsp;&nbsp;&nbsp;&nbsp;
        --module=app 告诉CLI把它注册到AppModule的imports数组中。
      5、ng generate pipe 管道名  创建一个管道</br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        transform(value: any,value2:string): any {//value是传入的值
          //操作
          return 要输出的值;
        }</br></br>
      6、ng generate directive 指令名称 创建一个新指令</br></br>
      7、ng generate class 类名称 创建一个建议的模型类</br></br>
      `,
                checked: '0'
            },
            {
                topic: '怎样删除node_modules？',
                answer: `<p></p>
      npm cache clear --force</br></br>
      模块安装以后，本地其实保存了两份。一份是 ~/.npm 目录下的压缩包，另一份是 node_modules 目录下解压后的代码。</br></br>
      但是，运行 npm install 的时候，只会检查 node_modules 目录，而不会检查 ~/.npm 目录。</br></br>
      如果一个模块在 ~./npm 下有压缩包，但是没有安装在 node_modules 目录中，npm 依然会从远程仓库下载一次新的压缩包。</br></br>
      `,
                checked: '0'
            },
            {
                topic: 'angular7 怎么把字符串中的标签输出为HTML？',
                answer: `<p></p>
      1、引入：import { DomSanitizer, SafeHtml } from '@angular/platform-browser';</br></br>
      2、声明：contentText: SafeHtml;</br></br>
      3、赋值：this.contentText = this.san.bypassSecurityTrustHtml(this.endCOn);</br></br>
      4、使用：[innerHTML]="contentText"</br></br>
      `,
                checked: '0'
            },
            {
                topic: 'angular7 变化检测器？',
                answer: `<p></p>
      angular7是从根组件往下做变化检测的！</br></br>
      如果是输入属性变化，可以通过生命周期钩子ngOnChanges捕获到变化，如果是手动改变的值，ngOnChanges是不会触发的。</br></br>
      使用情况：如果子组件把获取的参数传给父组件渲染，是实现不了实时更新的。</br></br>
      ChangeDetectorRef 是组件的变化检测器的引用，可以在组件中的通过依赖注入的方式来获取该对象：</br>&nbsp;&nbsp;&nbsp;&nbsp;
      1、引入：import { ChangeDetectorRef } from '@angular/core';</br>&nbsp;&nbsp;&nbsp;&nbsp;
      2、声明：constructor(private Ref: ChangeDetectorRef) {}</br>&nbsp;&nbsp;&nbsp;&nbsp;
      this.Ref.markForCheck() - 在组件的 metadata（@Component({selector:'app',...,changeDetection:ChangeDetectionStrategy.OnPush})） 中如果设置了 changeDetection:ChangeDetectionStrategy.OnPush 条件，那么变化检测不会再次执行，除非手动调用该方法。</br></br>

      this.Ref.detach() - 从变化检测树中分离变化检测器，该组件的变化检测器将不再执行变化检测，除非手动调用 reattach() 方法。</br></br>
      this.Ref.reattach() - 重新添加已分离的变化检测器，使得该组件及其子组件都能执行变化检测</br>&nbsp;&nbsp;&nbsp;&nbsp;
      该组件有一个用于移除或添加变化检测器的复选框。 当复选框被选中时，detach() 方法将被调用，之后组件及其子组件将不会被检查。当取消选择时，reattach() 方法会被调用，该组件将会被重新添加到变化检测器树上。</br></br>

      this.Ref.detectChanges() - 从该组件到各个子组件执行一次变化检测</br></br>
      `,
                checked: '0'
            }
        ];
    }
    ngOnInit() {
    }
};
Angular7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-angular7',
        template: __webpack_require__(/*! raw-loader!./angular7.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/angular7/angular7.component.html"),
        styles: [__webpack_require__(/*! ./angular7.component.scss */ "./src/app/home/topic/angular7/angular7.component.scss")]
    })
], Angular7Component);



/***/ }),

/***/ "./src/app/home/topic/css3/css3.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/topic/css3/css3.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9waWMvY3NzMy9jc3MzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/topic/css3/css3.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/topic/css3/css3.component.ts ***!
  \***************************************************/
/*! exports provided: Css3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Css3Component", function() { return Css3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");



let Css3Component = class Css3Component {
    constructor(msgService) {
        this.msgService = msgService;
        this.title = 'CSS3';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: '盒模型box-sizing的区别？',
                answer: `<p></p>
      1、content-box</br>&nbsp;&nbsp;&nbsp;&nbsp;
      默认值，标准盒模型。element width = border + padding + content width</br>
      2、border-box</br>&nbsp;&nbsp;&nbsp;&nbsp;
      怪异模式。元素的宽度等于元素内容的宽度（包含了元素的border、padding、内容的宽度）</br>
      `,
                checked: '0'
            },
            {
                topic: 'Animation与Transition的异同？',
                answer: `<p></p>
      Animation功能与Transition功能相同，都是通过改变元素的属性值来实现动画效果的，他们的区别在于：使用Transition功能时只能通过指定属性的开始值和结束值，然后在这两个属性值之间进行平滑过渡的方式来实现动画效果，因此不能实现比较复杂的动画效果。 </br></br>
      Animation功能通过定义多个关键帧以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果 </br>&nbsp;&nbsp;&nbsp;&nbsp;
      1、transition需要去触发比如：点击事件、鼠标移入事件；而animation则是在页面加载后就触发</br>&nbsp;&nbsp;&nbsp;&nbsp;
      2、transition触发一次播放一次；而animation则是可以设置播放次数可以一直播放</br>&nbsp;&nbsp;&nbsp;&nbsp;
      3、transition关注的是样式属性的变化，属性值和时间的关系是一个三次贝塞尔曲线；而animation作用于元素本身而不是样式属性，可以使用关键帧的概念，可以实现更自由的动画效果</br>&nbsp;&nbsp;&nbsp;&nbsp;
      .box{transition: all .5s linear;}//哪个属性动 运动在多长时间完成 延迟时间 运动类型</br>&nbsp;&nbsp;&nbsp;&nbsp;
      .box{animation-duration: 1s;/* 动画时间 */animation-name: fillout;/* 通过name使用 */</br>&nbsp;&nbsp;&nbsp;&nbsp;animation-iteration-count: infinite;/* 循环次数，infinite（无限次循环） */}</br>
      @keyframes fillout {
        from {
            width: 200px;
            height: 200px;
        }
        to {
            width: 400px;
            height: 400px;
        }
      }
      `,
                checked: '0'
            },
            {
                topic: '浏览器内核？',
                answer: `<p></p>
      Mozilla 内核   css前缀-moz; </br></br>
      WebKit  内核   css前缀-webkit ;（谷歌已换用blink内核）</br></br>
      Opera   内核   css前缀 -o ;    （欧朋已换用blink内核）</br></br>
      Trident 内核   css前缀 -ms ; </br></br>
      `,
                checked: '0'
            },
            {
                topic: '文本阴影？',
                answer: `<p></p>
      text-shadow:2px 3px 2px #000;//X--偏移，Y--偏移，模糊，颜色; 
      `,
                checked: '0'
            },
            {
                topic: '盒阴影？',
                answer: `<p></p>
      box-shadow:5px 5px 25px rgba(0,0,255,0.5) inset;//X--偏移，Y--偏移，模糊，颜色，inset内阴影，默认为外阴影; 
      `,
                checked: '0'
            },
            {
                topic: '渐变？',
                answer: `<p></p>
      background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0ff 55%,#00f 70%,#f00);     /*横向渐变*/ </br></br>
      background:-webkit-gradient-gradient(left,#f00,#ff0 25%,#0ff 55%,#00f 70%,#f00); /*纵向渐变*/ 
      `,
                checked: '0'
            },
            {
                topic: '倒影？',
                answer: `<p></p>
      -webkit-box-reflect: below 10px -webkit-linear-gradient(top,rgba(0,0,0,0) 20%,rgba(0,0,0,0.6) 100%)
      `,
                checked: '0'
            },
            {
                topic: 'transform？',
                answer: `<p></p>
      旋转：-webkit-transform: rotate(120deg);//rotateX,rotateY,rotateZ</br></br>
      平移：-webkit-transform: translate(20px, 10px);//translateX,translateY</br></br>
      缩放：-webkit-transform: scale(2,0.5); X方向缩放2倍，Y方向缩放0.5倍</br></br>
      过渡： -webkit-transform:all 2s ease-in 0; 过渡属性 过渡时间 速度(ease-in：加速  ease-out:减速  ease-in-out：先快后慢,linear：匀速) 延迟时间</br></br>
      `,
                checked: '0'
            },
            {
                topic: 'nth选择器？',
                answer: `<p></p>
      p:nth-child(2) 选择属于其父元素的第二个子元素的每个 <p> 元素。</br></br>
      p:nth-last-child(2)	同上，从最后一个子元素开始计数。</br></br>
      p:last-child	选择属于其父元素最后一个子元素每个 <p> 元素。</br></br>
      [target=_blank]	选择 target="_blank" 的所有元素。</br></br>
      [target]	选择带有 target 属性所有元素。</br></br>
      input:focus	选择获得焦点的 input 元素。</br></br>
      :not(p)	选择非 <p> 元素的每个元素。</br></br>
      :enabled	input:enabled	选择每个启用的 <input> 元素。</br></br>
      :disabled	input:disabled	选择每个禁用的 <input> 元素	</br></br>
      :checked	input:checked	选择每个被选中的 <input> 元素。</br></br>
      `,
                checked: '0'
            },
            {
                topic: '文字相关样式@font-face规则?',
                answer: `<p></p>
      @font-face{</br>&nbsp;&nbsp;&nbsp;&nbsp;
        font-family: myFirstFont(自己起的名字);</br>&nbsp;&nbsp;&nbsp;&nbsp;
        src: url('字体样式文件的路径'),</br>
      }</br>
      div{font-family:myFirstFont;font-size:22px;}
      `,
                checked: '0'
            },
            {
                topic: '溢出显示省略号?',
                answer: `<p></p>
      overflow: hidden;</br>
      text-overflow:ellipsis;</br>
      white-space: nowrap;</br>
      `,
                checked: '0'
            }
        ];
    }
    ngOnInit() {
    }
};
Css3Component.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
Css3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-css3',
        template: __webpack_require__(/*! raw-loader!./css3.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/css3/css3.component.html"),
        styles: [__webpack_require__(/*! ./css3.component.scss */ "./src/app/home/topic/css3/css3.component.scss")]
    })
], Css3Component);



/***/ }),

/***/ "./src/app/home/topic/html5/html5.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/topic/html5/html5.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9waWMvaHRtbDUvaHRtbDUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/topic/html5/html5.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/topic/html5/html5.component.ts ***!
  \*****************************************************/
/*! exports provided: Html5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5Component", function() { return Html5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Html5Component = class Html5Component {
    constructor() {
        this.title = 'CSS3';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: 'html5新增标签？',
                answer: `<p></p>
      article 定义文章、帖子、用户评论、 代表文档、页面或者应用程序中独立、完整、可以独自被外部引用的内容</br></br>
      header 定义页眉</br></br>                  aside 定义文章的侧边栏 </br></br>
      figure一组媒体对象的以及文字</br></br>      nav定义导航 </br></br>
      figcaption定义figure的标题</br></br>       section定义文档中的区段 </br></br>
      footer定义页脚</br></br>                   time定义日期和时间 </br></br>
      vidio 定义视频</br></br>                   canvas 定义图形，提供画布 </br></br>
      audio定义音频</br></br>                    command表示命令按钮 </br></br>
      embed插入各种多媒体</br></br>               details表示用户要求得到并可以得到的详细信息 </br></br>
      mark定义需要突出显示或者高亮的文本</br></br> wbr表示软换行 </br></br>
      progress显示js中耗费的函数进程</br></br>    hgroup定义对网页标题的组合 </br></br>
      `,
                checked: '0'
            },
            {
                topic: 'html5新增的元素类型？',
                answer: `<p></p>
      <email>   输入E-mail地址的文本输入框</br></br>
      <url>     输入URL地址</br></br>
      <number>  输入数值的文本输入框</br></br>
      <range>   表示必须输入一定范围内的数字值的文本输入框</br></br>
      artical： 定义文章 代表文档、页面或者应用程序中独立、完整、可以独自被外部引用的内容</br></br>
      section： 用于对网站或应用程序中的页面上的内容进行分块，一个section元素通常由内容以及标题组成。但section元素并非一个普通的容器元素；当一个容器需要被直接定义样式或通过脚本定义行为时，推荐使用div而非section元素。</br></br>
      `,
                checked: '0'
            },
            {
                topic: '',
                answer: `
      
      `,
                checked: '0'
            }
        ];
    }
    ngOnInit() {
    }
};
Html5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-html5',
        template: __webpack_require__(/*! raw-loader!./html5.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/html5/html5.component.html"),
        styles: [__webpack_require__(/*! ./html5.component.scss */ "./src/app/home/topic/html5/html5.component.scss")]
    })
], Html5Component);



/***/ }),

/***/ "./src/app/home/topic/javascript/javascript.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/topic/javascript/javascript.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9waWMvamF2YXNjcmlwdC9qYXZhc2NyaXB0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/topic/javascript/javascript.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/topic/javascript/javascript.component.ts ***!
  \***************************************************************/
/*! exports provided: JavascriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptComponent", function() { return JavascriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JavascriptComponent = class JavascriptComponent {
    constructor() {
        this.title = 'javascript';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: '请写出阻止事件冒泡的方法？',
                answer: `<p></p>
      $event.stopPropagation()起到阻止捕获和冒泡阶段中当前事件的进一步传播。</br></br>
      $event.preventDefault()可以取消默认事件。</br></br>
      `,
                checked: '0'
            },
            {
                topic: '数组常用的方法有哪些？',
                answer: `<p></p>
      1、arr.push(obj) 从后面添加元素，返回值是添加完后的数组</br></br>
      2、arr.unshift(obj) 从前面添加元素，返回值是添加后的数组</br></br>
      3、arr.pop() 从后面删除元素，只能删除一个，返回值是删除的元素</br></br>
      4、arr.shift() 从前面删除元素，只能删除一个，返回值是删除的元素</br></br>
      5、arr.splice(i,n,obj) 删除从i(索引)开始之后的n个元素并添加obj，返回值的删除的元素</br></br>
      6、arr.concat([1,2]) 数组连接，返回值是连接后的新数组</br></br>
      7、arr.split(',') 讲字符串转化为数组</br></br>
      8、arr.sort((a,b)=>{ return a-b; }) 数组排序，返回值是排序后的数组</br></br>
      9、arr.reverse() 将数组反转，返回值是反转后的数组</br></br>
      10、arr.slice(start,end) 切去索引start到end的数组，不包含end索引，返回值是切出来的数组</br></br>
      11、arr.forEach((value当前索引的值,index当前索引,array原数组)=>{}) 数组遍历，无return</br></br>
      12、arr.map((value当前索引的值,index当前索引,array原数组)=>{}) 映射数组，有return，arr.map()是修改数组其中的数据，并返回新的数据</br></br>
      13、arr.filter((i,v)=>{ i<3 }) 过滤数组，返回一个满足要求(小于3)的数组</br></br>
      14、arr.event((i,v)=>{ i<3 }) 根据条件判断，如果全部满足返回true，否则为false</br></br>
      15、arr.some((i,v)=>{ i<3 }) 根据条件判断，如果有一个满足就返回true，否则为false</br></br>
      16、（es6）Array.form('12345')/Array.form({0:'a',1:'b',length:2}) 将伪数组变成数组，只要有length的就可以转成数组</br></br>
      17、arr.find((value, index, array) =>value > 2) 找到第一个符合条件的数组成员</br></br>
      18、arr.includes(条件) 判断数中是否包含给定的值，有返回true，否则返回false</br></br>
      `,
                checked: '0'
            },
            {
                topic: '字符串常用的方法有哪些？',
                answer: `<p></p>
      1、str.indexOf('a') 返回指定字符创第一次出现的位置，找不到返回-1。</br></br>
      2、str.lastIndexOf('a') 返回指定字符串最后一次出现的位置，找不到返回-1。</br></br>
      3、str.substring(0,5) 提取字符串中两个指定索引号之间的字符（两个索引不能为负值）</br></br>
      4、str.slice(0,-5) 提取字符串中两个指定索引号之间的字符（索引可以为负值，-1就是倒数第二位）</br></br>
      5、str.charAt(1) 返回指定索引的字符</br></br>
      6、str.concat(str2)连接两个或多个字符串，返回连接后的新字符串</br></br>
      7、str.split() 把字符串分割为子字符串数组</br></br>
      8、arr.toString()，返回字符串对象，比如把数字转换成字符串对象。</br></br>&nbsp;&nbsp;&nbsp;&nbsp;
      判断是不是数组：Object.prototype.toString.call(arr) == '[object Array]' ); //true
      9、str.replace(regexp,'你好') 所有匹配到的正则都替换掉</br></br>
      `,
                checked: '0'
            },
            {
                topic: '本地存储？',
                answer: `<p></p>
      （sessionStorage，localStorage）</br></br>
      sessionStorage.setItem('data',JSON.stringify(data))</br></br>
      JSON.parse(sessionStorage.getItem('data'));</br></br>
      `,
                checked: '0'
            },
            {
                topic: '取0到100的随机整数？',
                answer: `<p></p>
      random(m,n){</br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        return parseInt(Math.random()*(m-n)+n);</br></br>
      }</br></br>
      `,
                checked: '0'
            },
            {
                topic: '只能输入数字？',
                answer: `<p></p>
      value.replace(/[^\d]/g,'');
      `,
                checked: '0'
            },
            {
                topic: '判断是不是整数？',
                answer: `<p></p>
      1、typeof obj === 'number' && obj%1 === 0</br></br>
      2、Math.floor(obj) === obj</br></br>
      3、(obj | 0) === obj 通过位运算判断</br></br>
      4、ES6提供了Number.isInteger(3) // true</br></br>
      `,
                checked: '0'
            },
            {
                topic: '保留整数？',
                answer: `<p></p>
      1、parseInt(5/2) 丢弃小数部分，保留整数</br></br>
      2、Math.ceil(5/2) 向上取整</br></br>
      3、Math.floor(5/2) 向下取整，丢弃小数部分</br></br>
      4、Math.round(5/2) 四射五入法取整</br></br>
      `,
                checked: '0'
            }
        ];
    }
    ngOnInit() {
    }
};
JavascriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-javascript',
        template: __webpack_require__(/*! raw-loader!./javascript.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/javascript/javascript.component.html"),
        styles: [__webpack_require__(/*! ./javascript.component.scss */ "./src/app/home/topic/javascript/javascript.component.scss")]
    })
], JavascriptComponent);



/***/ }),

/***/ "./src/app/home/topic/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/topic/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  padding-top: 10px;\n}\n.nav ul li {\n  width: calc(40% - 2px);\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  border-radius: 10px;\n  border: 1px solid #006eff;\n  margin: 10px 5%;\n  background: rgba(179, 255, 2, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90b3BpYy9uYXYvQzpcXG15QXBwL3NyY1xcYXBwXFxob21lXFx0b3BpY1xcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvdG9waWMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURDUTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RvcGljL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDQwJSAtIDJweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDo0NHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigwLCAxMTAsIDI1NSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDUlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMTc5LCAyNTUsIDIsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm5hdiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm5hdiB1bCBsaSB7XG4gIHdpZHRoOiBjYWxjKDQwJSAtIDJweCk7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNmVmZjtcbiAgbWFyZ2luOiAxMHB4IDUlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE3OSwgMjU1LCAyLCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/topic/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/topic/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() {
        // 标题目录
        this.titleList = [
            { name: 'css3', id: 1, path: '/home/topic/css3' },
            { name: 'html5', id: 2, path: '/home/topic/html5' },
            { name: 'javascript', id: 3, path: '/home/topic/javascript' },
            { name: 'angular7.0', id: 4, path: '/home/topic/angular7' },
            { name: 'typescript', id: 5, path: '/home/topic/typescript' },
        ];
    }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/home/topic/nav/nav.component.scss")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/home/topic/publics/publics.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/topic/publics/publics.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* topic公共样式 */\n.topicPublic {\n  height: calc(100vh - 110px);\n  padding: 1rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.topicPublic .topic {\n  text-align: center;\n  font-size: 1rem;\n  padding: 0 0 0.5rem;\n}\n.topicPublic .rate {\n  font-size: 0.6rem;\n  text-align: right;\n  padding-right: 0.5rem;\n}\n.topicPublic .content {\n  font-weight: bold;\n  font-size: 0.8rem;\n  line-height: 1.6rem;\n}\n.topicPublic .content li .choice {\n  text-align: center;\n}\n.topicPublic .turning {\n  text-align: center;\n  margin: 1rem 0;\n  padding: 0 0.5rem;\n}\n.topicPublic .turning button {\n  font-size: 0.7rem;\n}\n.topicPublic .see {\n  text-align: center;\n  display: block;\n  margin-top: 2rem;\n}\n.topicPublic .answer {\n  font-size: 0.8rem;\n  line-height: 1.6rem;\n  margin-top: 0.5rem;\n}\n.topicPublic .time {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  font-size: 0.6rem;\n  padding: 0.3rem 1rem;\n}\n.topicPublic .result {\n  text-align: center;\n}\n.topicPublic .joke {\n  text-align: center;\n  display: block;\n  line-height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90b3BpYy9wdWJsaWNzL3B1YmxpY3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvdG9waWMvcHVibGljcy9DOlxcbXlBcHAvc3JjXFxhcHBcXGhvbWVcXHRvcGljXFxwdWJsaWNzXFxwdWJsaWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixjQUFBO0FBQ0E7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNESTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FER1I7QUNESTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURHUjtBQ0RZO0VBQ0ksa0JBQUE7QURHaEI7QUNDSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEQ1I7QUNBUTtFQUNJLGlCQUFBO0FERVo7QUNDSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEQ1I7QUNDSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRENSO0FDQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QURDUjtBQ0NJO0VBQ0ksa0JBQUE7QURDUjtBQ0NJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURDUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9waWMvcHVibGljcy9wdWJsaWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogdG9waWPlhazlhbHmoLflvI8gKi9cbi50b3BpY1B1YmxpYyB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcbiAgcGFkZGluZzogMXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnRvcGljUHVibGljIC50b3BpYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwIDAgMC41cmVtO1xufVxuLnRvcGljUHVibGljIC5yYXRlIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG4udG9waWNQdWJsaWMgLmNvbnRlbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG59XG4udG9waWNQdWJsaWMgLmNvbnRlbnQgbGkgLmNob2ljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3BpY1B1YmxpYyAudHVybmluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuLnRvcGljUHVibGljIC50dXJuaW5nIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuLnRvcGljUHVibGljIC5zZWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLnRvcGljUHVibGljIC5hbnN3ZXIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRvcGljUHVibGljIC50aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG59XG4udG9waWNQdWJsaWMgLnJlc3VsdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3BpY1B1YmxpYyAuam9rZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xufSIsIi8qIHRvcGlj5YWs5YWx5qC35byPICovXHJcbi50b3BpY1B1YmxpY3tcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcclxuICAgIHBhZGRpbmc6MXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAudG9waWN7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgfVxyXG4gICAgLnJhdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgLmNob2ljZXtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnR1cm5pbmd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICAgIC5hbnN3ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOjAuNXJlbTtcclxuICAgIH1cclxuICAgIC50aW1le1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxuICAgIH1cclxuICAgIC5yZXN1bHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuam9rZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/topic/publics/publics.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/topic/publics/publics.component.ts ***!
  \*********************************************************/
/*! exports provided: PublicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicsComponent", function() { return PublicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");

//变化检测ChangeDetectorRef

// ng-zorro组件

let PublicsComponent = class PublicsComponent {
    constructor(msgService, Ref) {
        this.msgService = msgService;
        this.Ref = Ref;
        // 当前展示的题
        this.topics = [];
        //总题目数
        this.count = null;
        // 对错数 
        this.checkeds = 0;
        // 当前第几题
        this.current = 1;
        // 总完成数
        this.complete = 0;
        // 当前时间
        this.timer = null;
        this.date = new Date();
        // 倒计时
        this.tDown = null; //倒计时
        this.newDate = '05分00秒'; //要渲染的自段
        this.second = 300; //每题的时间单位秒 5分钟
        // 完成后的模态框
        this.isVisible = false;
    }
    ngOnInit() {
        // 乱序输出
        this.topicList.sort((a, b) => {
            return Math.random() > 0.5 ? -1 : 1;
        });
        this.topics = this.topicList[0];
        this.answer = this.topics.answer;
        this.count = this.topicList.length;
        // 当前时间
        this.timer = setInterval(() => {
            this.date = new Date();
        }, 1000);
        // 倒计时
        this.timeDown(this.second);
    }
    ngOnDestroy() {
        clearInterval(this.timer);
        clearInterval(this.tDown);
    }
    // 倒计时
    timeDown(time) {
        this.tDown = setInterval(() => {
            time--;
            const m = Math.floor(time / 60);
            const s = Math.floor(time % 60);
            this.newDate = (m < 10 ? '0' + m : m) + '分' + (s < 10 ? '0' + s : s) + '秒';
            if (time == 0) {
                this.topics.checked = '2';
                this.turning('text');
                this.msgService.create('warning', '超出时间，请进行下一题！');
            }
        }, 1000);
    }
    // 选择对错
    topicChange(event, item) {
        item.checked = event;
        this.complete += 1;
        if (event == '1') {
            this.checkeds += 1;
        }
        if (this.complete == this.topicList.length) {
            this.isVisible = true;
        }
    }
    // 关闭提示框
    handleOk() {
        this.isVisible = false;
    }
    // 上一题/下一题
    turning(val) {
        if (val == 'text') { //下一题
            if (this.topics.checked == '0') {
                this.msgService.create('warning', '请完成当前题后进入下一题！');
                return;
            }
            this.topics = this.topicList[this.current];
            this.answer = this.topics.answer;
            this.current += 1;
            clearInterval(this.tDown);
            this.timeDown(this.second);
        }
        else {
            this.current -= 1;
            this.topics = this.topicList[this.current];
            this.answer = this.topics.answer;
            clearInterval(this.tDown);
            this.timeDown(this.second);
        }
        this.Ref.detectChanges();
    }
    // 查看答案
    seeLook() {
        this.topics.look = true;
    }
};
PublicsComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PublicsComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PublicsComponent.prototype, "topicList", void 0);
PublicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publics',
        template: __webpack_require__(/*! raw-loader!./publics.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/publics/publics.component.html"),
        styles: [__webpack_require__(/*! ./publics.component.scss */ "./src/app/home/topic/publics/publics.component.scss")]
    })
], PublicsComponent);



/***/ }),

/***/ "./src/app/home/topic/topic.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/topic/topic.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9waWMvdG9waWMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/topic/topic.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/topic/topic.component.ts ***!
  \***********************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopicComponent = class TopicComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/topic.component.html"),
        styles: [__webpack_require__(/*! ./topic.component.scss */ "./src/app/home/topic/topic.component.scss")]
    })
], TopicComponent);



/***/ }),

/***/ "./src/app/home/topic/typescript/typescript.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/topic/typescript/typescript.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9waWMvdHlwZXNjcmlwdC90eXBlc2NyaXB0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/topic/typescript/typescript.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/topic/typescript/typescript.component.ts ***!
  \***************************************************************/
/*! exports provided: TypescriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptComponent", function() { return TypescriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypescriptComponent = class TypescriptComponent {
    constructor() {
        this.title = 'CSS3';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            { topic: '第一题很简单。', answer: '这是第一题的答案', checked: '0' },
            { topic: '第二道题目。', answer: '才不不不不不不v', checked: '0' },
            { topic: '第二道题目。', answer: '才不不不不不不v', checked: '0' }
        ];
    }
    ngOnInit() {
    }
};
TypescriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typescript',
        template: __webpack_require__(/*! raw-loader!./typescript.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/typescript/typescript.component.html"),
        styles: [__webpack_require__(/*! ./typescript.component.scss */ "./src/app/home/topic/typescript/typescript.component.scss")]
    })
], TypescriptComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



let LoginComponent = class LoginComponent {
    constructor(appService) {
        this.appService = appService;
        this.beat = '';
        this.choice = '';
    }
    ngOnInit() {
    }
    beatPho(event) {
        console.log('调照相机');
        console.log(event);
    }
    choicePho(event) {
        console.log('调本地相册');
        console.log(event);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\myApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
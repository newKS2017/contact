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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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







var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
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
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");


// 配置路由以下3个必须引入




// ng-zorro-antd



// ng-zorro-antd-mobile



// 登录

// 主页

// 头部

// 底部

// 主页










Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppService = /** @class */ (function () {
    function AppService() {
        this.zTitle = '主页';
    }
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appService) {
        this.appService = appService;
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.title = this.appService.zTitle;
    };
    HeaderComponent.prototype.onLeftClick = function () {
        console.log('onLeftClick');
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/home/index/index.component.scss")]
        })
    ], IndexComponent);
    return IndexComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Angular7Component = /** @class */ (function () {
    function Angular7Component() {
        this.title = 'angular 7.0';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: '路由传参的方式有几种？分别是什么？',
                answer: "<p></p>\n      angular7\u8DEF\u7531\u4F20\u53C2\u67093\u79CD\u65B9\u5F0F\uFF1A</br></br>\n      1\u3001routerLink-> \u5728 routerLink=[\"/home\",id]\uFF0C\u5176\u4E2D/home\u662F\u8BBE\u7F6E\u7684\u8DEF\u7531path\uFF0Cid\u662F\u9700\u8981\u4F20\u9012\u7684\u53C2\u6570\uFF0CrouterLink=[\"/home\",{queryParams:json}]\u591A\u4E2A\u53C2\u6570;</br></br>\n      2\u3001this.router.navigate(['/home',id]);\uFF0C\u591A\u7528\u5728\u8C03\u7528\u65B9\u6CD5\u91CC\uFF0Cthis.router.navigate(['/home'],{queryParams:{'name':'zb'}})\u591A\u4E2A\u53C2\u6570;</br></br>\n      3\u3001this.router.navigateByUrl('/home/id')\uFF0Cthis.router.navigateByUrl('/home',{queryParams:{'name':'zb'}})\u3002</br></br>\n      \u63A5\u53D7\u53C2\u6570\uFF08\u4E24\u79CD\u65B9\u6CD5\uFF09\uFF1A</br></br>\n      import { ActivatedRoute } from '@angular/router';</br>\n      public data: any;</br>\n      constructor( public route: ActivatedRoute ) { };</br>\n      1\u3001this.data = this.route.snapshot.params['id'];</br>\n      2\u3001this.route.queryParams.subscribe(params => {\n          this.data = params['name'];\n        });\n      ",
                checked: '0'
            },
            {
                topic: 'this.router.navigate()？',
                answer: "<p></p>\n      1\u3001this.router.navigate(['user', 1]); \u4EE5\u6839\u8DEF\u7531\u4E3A\u8D77\u70B9\u8DF3\u8F6C</br></br>\n      2\u3001this.router.navigate(['user', 1],{relativeTo: route});\u9ED8\u8BA4\u503C\u4E3A\u6839\u8DEF\u7531\uFF0C\u8BBE\u7F6E\u540E\u76F8\u5BF9\u5F53\u524D\u8DEF\u7531\u8DF3\u8F6C\uFF0Croute\u662FActivatedRoute\u7684\u5B9E\u4F8B\uFF0C\u4F7F\u7528\u9700\u8981\u5BFC\u5165ActivatedRoute</br></br>\n      3\u3001this.router.navigate(['user', 1],{ queryParams: { id: 1 } });\u8DEF\u7531\u4E2D\u4F20\u53C2\u6570 /user/1?id=1</br></br>\n      4\u3001this.router.navigate(['view', 1], { preserveQueryParams: true });\u9ED8\u8BA4\u503C\u4E3Afalse\uFF0C\u8BBE\u4E3Atrue\uFF0C\u4FDD\u7559\u4E4B\u524D\u8DEF\u7531\u4E2D\u7684\u67E5\u8BE2\u53C2\u6570/user?id=1 to /view?id=1</br></br>\n      5\u3001this.router.navigate(['user', 1],{ fragment: 'top' });\u8DEF\u7531\u4E2D\u951A\u70B9\u8DF3\u8F6C /user/1#top</br></br>\n      6\u3001this.router.navigate(['/view'], { preserveFragment: true });\u9ED8\u8BA4\u503C\u4E3Afalse\uFF0C\u8BBE\u4E3Atrue\uFF0C\u4FDD\u7559\u4E4B\u524D\u8DEF\u7531\u4E2D\u7684\u951A\u70B9/user/1#top to /view#top</br></br>\n      7\u3001this.router.navigate(['/user',1], { skipLocationChange: true });\u9ED8\u8BA4\u503C\u4E3Afalse\uFF0C\u8BBE\u4E3Atrue\u8DEF\u7531\u8DF3\u8F6C\u65F6\u6D4F\u89C8\u5668\u4E2D\u7684url\u4F1A\u4FDD\u6301\u4E0D\u53D8\uFF0C\u4F46\u662F\u4F20\u5165\u7684\u53C2\u6570\u4F9D\u7136\u6709\u6548</br></br>\n      8\u3001this.router.navigate(['/user',1], { replaceUrl: true });\u672A\u8BBE\u7F6E\u65F6\u9ED8\u8BA4\u4E3Atrue\uFF0C\u8BBE\u7F6E\u4E3Afalse\u8DEF\u7531\u4E0D\u4F1A\u8FDB\u884C\u8DF3\u8F6C</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '变量声明的几种方式？分别有什么含义？',
                answer: "<p></p>\n      var\u58F0\u660E\u7684\u53D8\u91CF\u53EF\u4EE5\u5728\u5305\u542B\u5B83\u4EEC\u7684\u51FD\u6570\u5916\u8BBF\u95EE;</br></br>\n      let\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5B83\u4F7F\u7528\u7684\u662F\u8BCD\u6CD5\u4F5C\u7528\u57DF\u6216\u5757\u4F5C\u7528\u57DF\u3002\u5757\u4F5C\u7528\u57DF\u53D8\u91CF\u5728\u5305\u542B\u5B83\u4EEC\u7684\u5757\u6216for\u5FAA\u73AF\u4E4B\u5916\u662F\u4E0D\u80FD\u8BBF\u95EE\u7684;\n      const\u58F0\u660E\u662F\u58F0\u660E\u53D8\u91CF\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F\u3002\u5B83\u4EEC\u4E0Elet\u58F0\u660E\u76F8\u4F3C\uFF0C\u4F46\u662F\u5C31\u50CF\u5B83\u7684\u540D\u5B57\u6240\u8868\u8FBE\u7684\uFF0C\u5B83\u4EEC\u88AB\u8D4B\u503C\u540E\u4E0D\u80FD\u518D\u6539\u53D8\u3002 \u6362\u53E5\u8BDD\u8BF4\uFF0C\u5B83\u4EEC\u62E5\u6709\u4E0Elet\u76F8\u540C\u7684\u4F5C\u7528\u57DF\u89C4\u5219\uFF0C\u4F46\u662F\u4E0D\u80FD\u5BF9\u5B83\u4EEC\u91CD\u65B0\u8D4B\u503C\u3002\n      ",
                checked: '0'
            },
            {
                topic: '变量声明的几种类型分别是什么？',
                answer: "<p></p>\n      1\u3001private \u79C1\u6709\u7C7B\u578B\uFF0C\u53EA\u80FD\u5728\u5F53\u524D\u7C7B\u4F7F\u7528</br></br>\n      2\u3001public \u5171\u6709\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u53EF\u4EE5\u5728\u7C7B\u91CC\u5916\u4F7F\u7528</br></br>\n      3\u3001protected \u4FDD\u62A4\u7C7B\u578B\uFF0C\u53EA\u80FD\u5728\u5F53\u524D\u7C7B\u548C\u5B50\u7C7B\u4E2D\u4F7F\u7528</br></br>\n      ",
                checked: '0'
            },
            {
                topic: 'angular7自带的管道有哪些？',
                answer: "<p></p>\n      1\u3001{{str | uppercase}}  \u8F6C\u6210\u5927\u5199</br></br>\n      2\u3001{{str | lowercase}}  \u8F6C\u6210\u5C0F\u5199</br></br>\n      3\u3001{{today | date:'yyyy-MM-dd HH:mm:ss'}} \u65E5\u671F\u683C\u5F0F\u8F6C\u6362</br></br>\n      4\u3001{{n | number:'1.2-4'}} \u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570 \uFF08\u53C2\u6570\uFF1A\u6700\u5C11\u6574\u6570\u4F4D\u6570.\u6700\u5C11\u5C0F\u6570\u4F4D\u6570-\u6700\u591A\u5C0F\u6570\u4F4D\u6570\uFF09</br></br>\n      5\u3001{{'semlinker' | slice:0:3}} \u5B57\u7B26\u4E32\u622A\u53D6\u4ECE0\u52303\uFF0C\u7ED3\u679Csem</br></br>\n      6\u3001{{'semlinker' | slice:0:3 | uppercase}}  \u7BA1\u9053\u94FE \u622A\u53D60\u52303\u8F6C\u5927\u5199</br></br>\n      7\u3001{{ {name:'semlinker'} | json }}  js\u5BF9\u8C61\u5E8F\u5217\u5316  \uFF08\u7ED3\u679C\uFF1A{\u201Cname\u201D:\u201Csemlinker\u201D}\uFF09</br></br>\n      ",
                checked: '0'
            },
            {
                topic: 'angular7的生命周期是？',
                answer: "<p></p>\n      ngOnChanges()</br>&nbsp;&nbsp;&nbsp;&nbsp;\n          \u7528\u5904\uFF1A\u5F53angular\u8BBE\u7F6E\u6570\u636E\u7ED1\u5B9A\u8F93\u5165\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u662F\u54CD\u5E94\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u65F6\u673A\uFF1A\u5F53\u88AB\u7ED1\u5B9A\u7684\u8F93\u5165\u5C5E\u6027\u7684\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u4E0D\u8FC7\u9996\u6B21\u8C03\u7528\u662F\u4F1A\u53D1\u751F\u5728ngOnInit()\u4E4B\u524D\u7684\u3002&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t      ngOnChanges()\u65B9\u6CD5\u83B7\u53D6\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u53EF\u4EE5\u540C\u65F6\u89C2\u6D4B1\u4E2A\u6216\u591A\u4E2A\u7ED1\u5B9A\u7684\u5C5E\u6027\u503C\uFF0C\u5B83\u628A\u6BCF\u4E2A\u53D1\u751F\u53D8\u5316\u7684\u5C5E\u6027\u540D\u90FD\u6620\u5C04\u5230\u4E86\u4E00\u4E2ASimpleChange\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u4E2D\u6709\u5C5E\u6027\u7684\u5F53\u524D\u503C\u548C\u524D\u4E00\u4E2A\u503C\u3002</br></br>\n\t    ngOnInit()</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u7528\u5904\uFF1A\u5728angular\u7B2C\u4E00\u6B21\u663E\u793A\u6570\u636E\u7ED1\u5B9A\u548C\u8BBE\u7F6E\u6307\u4EE4\u6216\u7EC4\u4EF6\u7684\u8F93\u5165\u5C5E\u6027\u4E4B\u540E\uFF0C\u521D\u59CB\u5316\u6307\u4EE4\u6216\u7EC4\u4EF6\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u65F6\u673A\uFF1A\u5728\u7B2C\u4E00\u8F6EngOnChanges()\u5B8C\u6210\u4E4B\u540E\u8C03\u7528\uFF0C\u53EA\u8C03\u7528\u4E00\u6B21\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u867D\u7136\u63A5\u53E3\u4E2D\u6709\u4E00\u4E2Aconstructor\u6784\u9020\u51FD\u6570\uFF0C\u4F46\u662F\u5728\u8FD9\u91CC\u6700\u597D\u53EA\u5BF9\u5C40\u90E8\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u4E4B\u5916\u4EC0\u4E48\u90FD\u4E0D\u8981\u505A\uFF0C\u901A\u8FC7ngOnInit()\u83B7\u53D6\u521D\u59CB\u6570\u636E\uFF0C\u800C\u4E14\u662F\u653E\u5728\u6784\u9020\u51FD\u6570\u540E\u9762\u3002</br></br>\n\t    ngDoCheck()</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u7528\u5904\uFF1A\u68C0\u6D4B\u90A3\u4E9Bangular\u81EA\u8EAB\u65E0\u6CD5\u6355\u83B7\u7684\u53D8\u66F4\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u65F6\u673A\uFF1A\u5728\u6BCF\u4E2Aangular\u53D8\u66F4\u68C0\u6D4B\u5468\u671F\u4E2D\u8C03\u7528\uFF0CngOnChanges()\u548CngOnInit()\u4E4B\u540E\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u9700\u8C28\u614E\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4E00\u4E9B\u610F\u60F3\u4E0D\u5230\u7684\u4E8B\u60C5\u4E5F\u4F1A\u88AB\u89C6\u4E3A\u53D8\u66F4\u4E86\u3002</br></br>\n\t    ngAfterContentInit()\u548CngAfterContentChecked()    \uFF08\u53EA\u9002\u7528\u4E8E\u7EC4\u4EF6\uFF09</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u7528\u5904\uFF1A\u5728\u5916\u6765\u5185\u5BB9\u88AB\u6295\u5F71\u5230\u7EC4\u4EF6\u4E2D\u4E4B\u540E\u6216\u6295\u5F71\u7EC4\u4EF6\u5185\u5BB9\u7684\u53D8\u66F4\u68C0\u6D4B\u4E4B\u540E\u8C03\u7528\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u65F6\u673A\uFF1AngAfterContentInit() -- \u7B2C\u4E00\u6B21ngDoCheck()\u4E4B\u540E\u8C03\u7528\uFF0C\u4E14\u53EA\u8C03\u7528\u4E00\u6B21\u3002</br></br>\n\t\t  ngAfterContentChecked() -- \u6BCF\u6B21ngDoCheck()\u4E4B\u540E\u8C03\u7528\uFF0C\u5982\u679C\u9700\u8981\u8C03\u7528ngAfterContentInit(),\u5219\u518DngAfterContentInit()\u4E4B\u540E\u8C03\u7528\u3002</br></br>\n\t    ngAfterViewInit()\u548CngAfterViewChecked()   \uFF08\u53EA\u9002\u7528\u4E8E\u7EC4\u4EF6\uFF09</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u7528\u5904\uFF1A\u521D\u59CB\u5316\u5B8C\u6216\u68C0\u6D4B\u53D8\u66F4\u5B8C\u7EC4\u4EF6\u89C6\u56FE\u53CA\u5176\u5B50\u89C6\u56FE\u4E4B\u540E\u8C03\u7528\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u65F6\u673A\uFF1A\u8DDF\u76F8\u5E94\u7684content\u94A9\u5B50\u7C7B\u4F3C\uFF0C\u5728\u5BF9\u5E94\u7684content\u94A9\u5B50\u540E\u8C03\u7528\u3002</br></br>\n\t    ngOnDestroy</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u7528\u5904\uFF1A\u53CD\u8BA2\u9605\u53EF\u89C2\u5BDF\u5BF9\u8C61\u548C\u5206\u79BB\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u4EE5\u9632\u5185\u5B58\u6CC4\u6F0F\u3002</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u65F6\u673A\uFF1A\u9500\u6BC1\u7EC4\u4EF6\u6216\u6307\u4EE4\u4E4B\u524D\u8C03\u7528\u5E76\u6E05\u626B</br>&nbsp;&nbsp;&nbsp;&nbsp;\n\t        \u91CA\u653E\u90A3\u4E9B\u4E0D\u4F1A\u88AB\u5783\u573E\u6536\u96C6\u5668\u81EA\u52A8\u56DE\u6536\u7684\u5404\u7C7B\u8D44\u6E90\u7684\u5730\u65B9\uFF0C\u53D6\u6D88\u90A3\u4E9B\u5BF9\u53EF\u89C2\u5BDF\u5BF9\u8C61\u548CDOM\u4E8B\u4EF6\u7684\u8BA2\u9605\uFF0C\u505C\u6B62\u5B9A\u65F6\u5668\uFF0C\u6CE8\u9500\u8BE5\u6307\u4EE4\u66FE\u6CE8\u518C\u5230\u5168\u5C40\u670D\u52A1\u6216\u5E94\u7528\u7EA7\u670D\u52A1\u4E2D\u7684\u5404\u79CD\u56DE\u8C03\u51FD\u6570\u3002</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '@ViewChild调用子组件方法？',
                answer: "<p></p>\n      1\u3001<app-home #child></app-home></br>&nbsp;&nbsp;&nbsp;&nbsp;\n      @ViewChild('child') child;</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      this.child.childFn();</br></br>\n      2\u3001@ViewChild(ChildenComponent) child: ChildenComponent;</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      this.child.fn1();\n      ",
                checked: '0'
            },
            {
                topic: 'angular7.0常用命令？',
                answer: "<p></p>\n      1\u3001ng new myApp \u521B\u5EFA\u4E00\u4E2A\u540D\u79F0\u4E3AmyApp\u7684\u9879\u76EE</br></br>\n      2\u3001ng generate component home \u521B\u5EFAhome\u7EC4\u4EF6 </br></br>\n      3\u3001ng generate service home \u521B\u5EFAhome\u670D\u52A1</br></br>\n      4\u3001ng generate module app-routing --module=app</br></br>&nbsp;&nbsp;&nbsp;&nbsp;\n        --flat \u628A\u8FD9\u4E2A\u6587\u4EF6\u653E\u8FDB\u4E86src/app\u4E2D\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u7684\u76EE\u5F55\u4E2D\u3002&nbsp;&nbsp;&nbsp;&nbsp;\n        --module=app \u544A\u8BC9CLI\u628A\u5B83\u6CE8\u518C\u5230AppModule\u7684imports\u6570\u7EC4\u4E2D\u3002\n      5\u3001ng generate pipe \u7BA1\u9053\u540D  \u521B\u5EFA\u4E00\u4E2A\u7BA1\u9053</br></br>&nbsp;&nbsp;&nbsp;&nbsp;\n        transform(value: any,value2:string): any {//value\u662F\u4F20\u5165\u7684\u503C\n          //\u64CD\u4F5C\n          return \u8981\u8F93\u51FA\u7684\u503C;\n        }</br></br>\n      6\u3001ng generate directive \u6307\u4EE4\u540D\u79F0 \u521B\u5EFA\u4E00\u4E2A\u65B0\u6307\u4EE4</br></br>\n      7\u3001ng generate class \u7C7B\u540D\u79F0 \u521B\u5EFA\u4E00\u4E2A\u5EFA\u8BAE\u7684\u6A21\u578B\u7C7B</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '怎样删除node_modules？',
                answer: "<p></p>\n      npm cache clear --force</br></br>\n      \u6A21\u5757\u5B89\u88C5\u4EE5\u540E\uFF0C\u672C\u5730\u5176\u5B9E\u4FDD\u5B58\u4E86\u4E24\u4EFD\u3002\u4E00\u4EFD\u662F ~/.npm \u76EE\u5F55\u4E0B\u7684\u538B\u7F29\u5305\uFF0C\u53E6\u4E00\u4EFD\u662F node_modules \u76EE\u5F55\u4E0B\u89E3\u538B\u540E\u7684\u4EE3\u7801\u3002</br></br>\n      \u4F46\u662F\uFF0C\u8FD0\u884C npm install \u7684\u65F6\u5019\uFF0C\u53EA\u4F1A\u68C0\u67E5 node_modules \u76EE\u5F55\uFF0C\u800C\u4E0D\u4F1A\u68C0\u67E5 ~/.npm \u76EE\u5F55\u3002</br></br>\n      \u5982\u679C\u4E00\u4E2A\u6A21\u5757\u5728 ~./npm \u4E0B\u6709\u538B\u7F29\u5305\uFF0C\u4F46\u662F\u6CA1\u6709\u5B89\u88C5\u5728 node_modules \u76EE\u5F55\u4E2D\uFF0Cnpm \u4F9D\u7136\u4F1A\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u4E0B\u8F7D\u4E00\u6B21\u65B0\u7684\u538B\u7F29\u5305\u3002</br></br>\n      ",
                checked: '0'
            },
            {
                topic: 'angular7 怎么把字符串中的标签输出为HTML？',
                answer: "<p></p>\n      1\u3001\u5F15\u5165\uFF1Aimport { DomSanitizer, SafeHtml } from '@angular/platform-browser';</br></br>\n      2\u3001\u58F0\u660E\uFF1AcontentText: SafeHtml;</br></br>\n      3\u3001\u8D4B\u503C\uFF1Athis.contentText = this.san.bypassSecurityTrustHtml(this.endCOn);</br></br>\n      4\u3001\u4F7F\u7528\uFF1A[innerHTML]=\"contentText\"</br></br>\n      ",
                checked: '0'
            },
            {
                topic: 'angular7 变化检测器？',
                answer: "<p></p>\n      angular7\u662F\u4ECE\u6839\u7EC4\u4EF6\u5F80\u4E0B\u505A\u53D8\u5316\u68C0\u6D4B\u7684\uFF01</br></br>\n      \u5982\u679C\u662F\u8F93\u5165\u5C5E\u6027\u53D8\u5316\uFF0C\u53EF\u4EE5\u901A\u8FC7\u751F\u547D\u5468\u671F\u94A9\u5B50ngOnChanges\u6355\u83B7\u5230\u53D8\u5316\uFF0C\u5982\u679C\u662F\u624B\u52A8\u6539\u53D8\u7684\u503C\uFF0CngOnChanges\u662F\u4E0D\u4F1A\u89E6\u53D1\u7684\u3002</br></br>\n      \u4F7F\u7528\u60C5\u51B5\uFF1A\u5982\u679C\u5B50\u7EC4\u4EF6\u628A\u83B7\u53D6\u7684\u53C2\u6570\u4F20\u7ED9\u7236\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u662F\u5B9E\u73B0\u4E0D\u4E86\u5B9E\u65F6\u66F4\u65B0\u7684\u3002</br></br>\n      ChangeDetectorRef \u662F\u7EC4\u4EF6\u7684\u53D8\u5316\u68C0\u6D4B\u5668\u7684\u5F15\u7528\uFF0C\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u7684\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F\u6765\u83B7\u53D6\u8BE5\u5BF9\u8C61\uFF1A</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      1\u3001\u5F15\u5165\uFF1Aimport { ChangeDetectorRef } from '@angular/core';</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      2\u3001\u58F0\u660E\uFF1Aconstructor(private Ref: ChangeDetectorRef) {}</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      this.Ref.markForCheck() - \u5728\u7EC4\u4EF6\u7684 metadata\uFF08@Component({selector:'app',...,changeDetection:ChangeDetectionStrategy.OnPush})\uFF09 \u4E2D\u5982\u679C\u8BBE\u7F6E\u4E86 changeDetection:ChangeDetectionStrategy.OnPush \u6761\u4EF6\uFF0C\u90A3\u4E48\u53D8\u5316\u68C0\u6D4B\u4E0D\u4F1A\u518D\u6B21\u6267\u884C\uFF0C\u9664\u975E\u624B\u52A8\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002</br></br>\n\n      this.Ref.detach() - \u4ECE\u53D8\u5316\u68C0\u6D4B\u6811\u4E2D\u5206\u79BB\u53D8\u5316\u68C0\u6D4B\u5668\uFF0C\u8BE5\u7EC4\u4EF6\u7684\u53D8\u5316\u68C0\u6D4B\u5668\u5C06\u4E0D\u518D\u6267\u884C\u53D8\u5316\u68C0\u6D4B\uFF0C\u9664\u975E\u624B\u52A8\u8C03\u7528 reattach() \u65B9\u6CD5\u3002</br></br>\n      this.Ref.reattach() - \u91CD\u65B0\u6DFB\u52A0\u5DF2\u5206\u79BB\u7684\u53D8\u5316\u68C0\u6D4B\u5668\uFF0C\u4F7F\u5F97\u8BE5\u7EC4\u4EF6\u53CA\u5176\u5B50\u7EC4\u4EF6\u90FD\u80FD\u6267\u884C\u53D8\u5316\u68C0\u6D4B</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      \u8BE5\u7EC4\u4EF6\u6709\u4E00\u4E2A\u7528\u4E8E\u79FB\u9664\u6216\u6DFB\u52A0\u53D8\u5316\u68C0\u6D4B\u5668\u7684\u590D\u9009\u6846\u3002 \u5F53\u590D\u9009\u6846\u88AB\u9009\u4E2D\u65F6\uFF0Cdetach() \u65B9\u6CD5\u5C06\u88AB\u8C03\u7528\uFF0C\u4E4B\u540E\u7EC4\u4EF6\u53CA\u5176\u5B50\u7EC4\u4EF6\u5C06\u4E0D\u4F1A\u88AB\u68C0\u67E5\u3002\u5F53\u53D6\u6D88\u9009\u62E9\u65F6\uFF0Creattach() \u65B9\u6CD5\u4F1A\u88AB\u8C03\u7528\uFF0C\u8BE5\u7EC4\u4EF6\u5C06\u4F1A\u88AB\u91CD\u65B0\u6DFB\u52A0\u5230\u53D8\u5316\u68C0\u6D4B\u5668\u6811\u4E0A\u3002</br></br>\n\n      this.Ref.detectChanges() - \u4ECE\u8BE5\u7EC4\u4EF6\u5230\u5404\u4E2A\u5B50\u7EC4\u4EF6\u6267\u884C\u4E00\u6B21\u53D8\u5316\u68C0\u6D4B</br></br>\n      ",
                checked: '0'
            }
        ];
    }
    Angular7Component.prototype.ngOnInit = function () {
    };
    Angular7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular7',
            template: __webpack_require__(/*! raw-loader!./angular7.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/angular7/angular7.component.html"),
            styles: [__webpack_require__(/*! ./angular7.component.scss */ "./src/app/home/topic/angular7/angular7.component.scss")]
        })
    ], Angular7Component);
    return Angular7Component;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var Css3Component = /** @class */ (function () {
    function Css3Component(msgService) {
        this.msgService = msgService;
        this.title = 'CSS3';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: '盒模型box-sizing的区别？',
                answer: "<p></p>\n      1\u3001content-box</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      \u9ED8\u8BA4\u503C\uFF0C\u6807\u51C6\u76D2\u6A21\u578B\u3002element width = border + padding + content width</br>\n      2\u3001border-box</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      \u602A\u5F02\u6A21\u5F0F\u3002\u5143\u7D20\u7684\u5BBD\u5EA6\u7B49\u4E8E\u5143\u7D20\u5185\u5BB9\u7684\u5BBD\u5EA6\uFF08\u5305\u542B\u4E86\u5143\u7D20\u7684border\u3001padding\u3001\u5185\u5BB9\u7684\u5BBD\u5EA6\uFF09</br>\n      ",
                checked: '0'
            },
            {
                topic: 'Animation与Transition的异同？',
                answer: "<p></p>\n      Animation\u529F\u80FD\u4E0ETransition\u529F\u80FD\u76F8\u540C\uFF0C\u90FD\u662F\u901A\u8FC7\u6539\u53D8\u5143\u7D20\u7684\u5C5E\u6027\u503C\u6765\u5B9E\u73B0\u52A8\u753B\u6548\u679C\u7684\uFF0C\u4ED6\u4EEC\u7684\u533A\u522B\u5728\u4E8E\uFF1A\u4F7F\u7528Transition\u529F\u80FD\u65F6\u53EA\u80FD\u901A\u8FC7\u6307\u5B9A\u5C5E\u6027\u7684\u5F00\u59CB\u503C\u548C\u7ED3\u675F\u503C\uFF0C\u7136\u540E\u5728\u8FD9\u4E24\u4E2A\u5C5E\u6027\u503C\u4E4B\u95F4\u8FDB\u884C\u5E73\u6ED1\u8FC7\u6E21\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u52A8\u753B\u6548\u679C\uFF0C\u56E0\u6B64\u4E0D\u80FD\u5B9E\u73B0\u6BD4\u8F83\u590D\u6742\u7684\u52A8\u753B\u6548\u679C\u3002 </br></br>\n      Animation\u529F\u80FD\u901A\u8FC7\u5B9A\u4E49\u591A\u4E2A\u5173\u952E\u5E27\u4EE5\u53CA\u5B9A\u4E49\u6BCF\u4E2A\u5173\u952E\u5E27\u4E2D\u5143\u7D20\u7684\u5C5E\u6027\u503C\u6765\u5B9E\u73B0\u66F4\u4E3A\u590D\u6742\u7684\u52A8\u753B\u6548\u679C </br>&nbsp;&nbsp;&nbsp;&nbsp;\n      1\u3001transition\u9700\u8981\u53BB\u89E6\u53D1\u6BD4\u5982\uFF1A\u70B9\u51FB\u4E8B\u4EF6\u3001\u9F20\u6807\u79FB\u5165\u4E8B\u4EF6\uFF1B\u800Canimation\u5219\u662F\u5728\u9875\u9762\u52A0\u8F7D\u540E\u5C31\u89E6\u53D1</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      2\u3001transition\u89E6\u53D1\u4E00\u6B21\u64AD\u653E\u4E00\u6B21\uFF1B\u800Canimation\u5219\u662F\u53EF\u4EE5\u8BBE\u7F6E\u64AD\u653E\u6B21\u6570\u53EF\u4EE5\u4E00\u76F4\u64AD\u653E</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      3\u3001transition\u5173\u6CE8\u7684\u662F\u6837\u5F0F\u5C5E\u6027\u7684\u53D8\u5316\uFF0C\u5C5E\u6027\u503C\u548C\u65F6\u95F4\u7684\u5173\u7CFB\u662F\u4E00\u4E2A\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\uFF1B\u800Canimation\u4F5C\u7528\u4E8E\u5143\u7D20\u672C\u8EAB\u800C\u4E0D\u662F\u6837\u5F0F\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5173\u952E\u5E27\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u66F4\u81EA\u7531\u7684\u52A8\u753B\u6548\u679C</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      .box{transition: all .5s linear;}//\u54EA\u4E2A\u5C5E\u6027\u52A8 \u8FD0\u52A8\u5728\u591A\u957F\u65F6\u95F4\u5B8C\u6210 \u5EF6\u8FDF\u65F6\u95F4 \u8FD0\u52A8\u7C7B\u578B</br>&nbsp;&nbsp;&nbsp;&nbsp;\n      .box{animation-duration: 1s;/* \u52A8\u753B\u65F6\u95F4 */animation-name: fillout;/* \u901A\u8FC7name\u4F7F\u7528 */</br>&nbsp;&nbsp;&nbsp;&nbsp;animation-iteration-count: infinite;/* \u5FAA\u73AF\u6B21\u6570\uFF0Cinfinite\uFF08\u65E0\u9650\u6B21\u5FAA\u73AF\uFF09 */}</br>\n      @keyframes fillout {\n        from {\n            width: 200px;\n            height: 200px;\n        }\n        to {\n            width: 400px;\n            height: 400px;\n        }\n      }\n      ",
                checked: '0'
            },
            {
                topic: '浏览器内核？',
                answer: "<p></p>\n      Mozilla \u5185\u6838   css\u524D\u7F00-moz; </br></br>\n      WebKit  \u5185\u6838   css\u524D\u7F00-webkit ;\uFF08\u8C37\u6B4C\u5DF2\u6362\u7528blink\u5185\u6838\uFF09</br></br>\n      Opera   \u5185\u6838   css\u524D\u7F00 -o ;    \uFF08\u6B27\u670B\u5DF2\u6362\u7528blink\u5185\u6838\uFF09</br></br>\n      Trident \u5185\u6838   css\u524D\u7F00 -ms ; </br></br>\n      ",
                checked: '0'
            },
            {
                topic: '文本阴影？',
                answer: "<p></p>\n      text-shadow:2px 3px 2px #000;//X--\u504F\u79FB\uFF0CY--\u504F\u79FB\uFF0C\u6A21\u7CCA\uFF0C\u989C\u8272; \n      ",
                checked: '0'
            },
            {
                topic: '盒阴影？',
                answer: "<p></p>\n      box-shadow:5px 5px 25px rgba(0,0,255,0.5) inset;//X--\u504F\u79FB\uFF0CY--\u504F\u79FB\uFF0C\u6A21\u7CCA\uFF0C\u989C\u8272\uFF0Cinset\u5185\u9634\u5F71\uFF0C\u9ED8\u8BA4\u4E3A\u5916\u9634\u5F71; \n      ",
                checked: '0'
            },
            {
                topic: '渐变？',
                answer: "<p></p>\n      background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0ff 55%,#00f 70%,#f00);     /*\u6A2A\u5411\u6E10\u53D8*/ </br></br>\n      background:-webkit-gradient-gradient(left,#f00,#ff0 25%,#0ff 55%,#00f 70%,#f00); /*\u7EB5\u5411\u6E10\u53D8*/ \n      ",
                checked: '0'
            },
            {
                topic: '倒影？',
                answer: "<p></p>\n      -webkit-box-reflect: below 10px -webkit-linear-gradient(top,rgba(0,0,0,0) 20%,rgba(0,0,0,0.6) 100%)\n      ",
                checked: '0'
            },
            {
                topic: 'transform？',
                answer: "<p></p>\n      \u65CB\u8F6C\uFF1A-webkit-transform: rotate(120deg);//rotateX,rotateY,rotateZ</br></br>\n      \u5E73\u79FB\uFF1A-webkit-transform: translate(20px, 10px);//translateX,translateY</br></br>\n      \u7F29\u653E\uFF1A-webkit-transform: scale(2,0.5); X\u65B9\u5411\u7F29\u653E2\u500D\uFF0CY\u65B9\u5411\u7F29\u653E0.5\u500D</br></br>\n      \u8FC7\u6E21\uFF1A -webkit-transform:all 2s ease-in 0; \u8FC7\u6E21\u5C5E\u6027 \u8FC7\u6E21\u65F6\u95F4 \u901F\u5EA6(ease-in\uFF1A\u52A0\u901F  ease-out:\u51CF\u901F  ease-in-out\uFF1A\u5148\u5FEB\u540E\u6162,linear\uFF1A\u5300\u901F) \u5EF6\u8FDF\u65F6\u95F4</br></br>\n      ",
                checked: '0'
            },
            {
                topic: 'nth选择器？',
                answer: "<p></p>\n      p:nth-child(2) \u9009\u62E9\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u7684\u7B2C\u4E8C\u4E2A\u5B50\u5143\u7D20\u7684\u6BCF\u4E2A <p> \u5143\u7D20\u3002</br></br>\n      p:nth-last-child(2)\t\u540C\u4E0A\uFF0C\u4ECE\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u5F00\u59CB\u8BA1\u6570\u3002</br></br>\n      p:last-child\t\u9009\u62E9\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u6BCF\u4E2A <p> \u5143\u7D20\u3002</br></br>\n      [target=_blank]\t\u9009\u62E9 target=\"_blank\" \u7684\u6240\u6709\u5143\u7D20\u3002</br></br>\n      [target]\t\u9009\u62E9\u5E26\u6709 target \u5C5E\u6027\u6240\u6709\u5143\u7D20\u3002</br></br>\n      input:focus\t\u9009\u62E9\u83B7\u5F97\u7126\u70B9\u7684 input \u5143\u7D20\u3002</br></br>\n      :not(p)\t\u9009\u62E9\u975E <p> \u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20\u3002</br></br>\n      :enabled\tinput:enabled\t\u9009\u62E9\u6BCF\u4E2A\u542F\u7528\u7684 <input> \u5143\u7D20\u3002</br></br>\n      :disabled\tinput:disabled\t\u9009\u62E9\u6BCF\u4E2A\u7981\u7528\u7684 <input> \u5143\u7D20\t</br></br>\n      :checked\tinput:checked\t\u9009\u62E9\u6BCF\u4E2A\u88AB\u9009\u4E2D\u7684 <input> \u5143\u7D20\u3002</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '文字相关样式@font-face规则?',
                answer: "<p></p>\n      @font-face{</br>&nbsp;&nbsp;&nbsp;&nbsp;\n        font-family: myFirstFont(\u81EA\u5DF1\u8D77\u7684\u540D\u5B57);</br>&nbsp;&nbsp;&nbsp;&nbsp;\n        src: url('\u5B57\u4F53\u6837\u5F0F\u6587\u4EF6\u7684\u8DEF\u5F84'),</br>\n      }</br>\n      div{font-family:myFirstFont;font-size:22px;}\n      ",
                checked: '0'
            },
            {
                topic: '溢出显示省略号?',
                answer: "<p></p>\n      overflow: hidden;</br>\n      text-overflow:ellipsis;</br>\n      white-space: nowrap;</br>\n      ",
                checked: '0'
            }
        ];
    }
    Css3Component.prototype.ngOnInit = function () {
    };
    Css3Component.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
    ]; };
    Css3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-css3',
            template: __webpack_require__(/*! raw-loader!./css3.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/css3/css3.component.html"),
            styles: [__webpack_require__(/*! ./css3.component.scss */ "./src/app/home/topic/css3/css3.component.scss")]
        })
    ], Css3Component);
    return Css3Component;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Html5Component = /** @class */ (function () {
    function Html5Component() {
        this.title = 'CSS3';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: 'html5新增标签？',
                answer: "<p></p>\n      article \u5B9A\u4E49\u6587\u7AE0\u3001\u5E16\u5B50\u3001\u7528\u6237\u8BC4\u8BBA\u3001 \u4EE3\u8868\u6587\u6863\u3001\u9875\u9762\u6216\u8005\u5E94\u7528\u7A0B\u5E8F\u4E2D\u72EC\u7ACB\u3001\u5B8C\u6574\u3001\u53EF\u4EE5\u72EC\u81EA\u88AB\u5916\u90E8\u5F15\u7528\u7684\u5185\u5BB9</br></br>\n      header \u5B9A\u4E49\u9875\u7709</br></br>                  aside \u5B9A\u4E49\u6587\u7AE0\u7684\u4FA7\u8FB9\u680F </br></br>\n      figure\u4E00\u7EC4\u5A92\u4F53\u5BF9\u8C61\u7684\u4EE5\u53CA\u6587\u5B57</br></br>      nav\u5B9A\u4E49\u5BFC\u822A </br></br>\n      figcaption\u5B9A\u4E49figure\u7684\u6807\u9898</br></br>       section\u5B9A\u4E49\u6587\u6863\u4E2D\u7684\u533A\u6BB5 </br></br>\n      footer\u5B9A\u4E49\u9875\u811A</br></br>                   time\u5B9A\u4E49\u65E5\u671F\u548C\u65F6\u95F4 </br></br>\n      vidio \u5B9A\u4E49\u89C6\u9891</br></br>                   canvas \u5B9A\u4E49\u56FE\u5F62\uFF0C\u63D0\u4F9B\u753B\u5E03 </br></br>\n      audio\u5B9A\u4E49\u97F3\u9891</br></br>                    command\u8868\u793A\u547D\u4EE4\u6309\u94AE </br></br>\n      embed\u63D2\u5165\u5404\u79CD\u591A\u5A92\u4F53</br></br>               details\u8868\u793A\u7528\u6237\u8981\u6C42\u5F97\u5230\u5E76\u53EF\u4EE5\u5F97\u5230\u7684\u8BE6\u7EC6\u4FE1\u606F </br></br>\n      mark\u5B9A\u4E49\u9700\u8981\u7A81\u51FA\u663E\u793A\u6216\u8005\u9AD8\u4EAE\u7684\u6587\u672C</br></br> wbr\u8868\u793A\u8F6F\u6362\u884C </br></br>\n      progress\u663E\u793Ajs\u4E2D\u8017\u8D39\u7684\u51FD\u6570\u8FDB\u7A0B</br></br>    hgroup\u5B9A\u4E49\u5BF9\u7F51\u9875\u6807\u9898\u7684\u7EC4\u5408 </br></br>\n      ",
                checked: '0'
            },
            {
                topic: 'html5新增的元素类型？',
                answer: "<p></p>\n      <email>   \u8F93\u5165E-mail\u5730\u5740\u7684\u6587\u672C\u8F93\u5165\u6846</br></br>\n      <url>     \u8F93\u5165URL\u5730\u5740</br></br>\n      <number>  \u8F93\u5165\u6570\u503C\u7684\u6587\u672C\u8F93\u5165\u6846</br></br>\n      <range>   \u8868\u793A\u5FC5\u987B\u8F93\u5165\u4E00\u5B9A\u8303\u56F4\u5185\u7684\u6570\u5B57\u503C\u7684\u6587\u672C\u8F93\u5165\u6846</br></br>\n      artical\uFF1A \u5B9A\u4E49\u6587\u7AE0 \u4EE3\u8868\u6587\u6863\u3001\u9875\u9762\u6216\u8005\u5E94\u7528\u7A0B\u5E8F\u4E2D\u72EC\u7ACB\u3001\u5B8C\u6574\u3001\u53EF\u4EE5\u72EC\u81EA\u88AB\u5916\u90E8\u5F15\u7528\u7684\u5185\u5BB9</br></br>\n      section\uFF1A \u7528\u4E8E\u5BF9\u7F51\u7AD9\u6216\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u9875\u9762\u4E0A\u7684\u5185\u5BB9\u8FDB\u884C\u5206\u5757\uFF0C\u4E00\u4E2Asection\u5143\u7D20\u901A\u5E38\u7531\u5185\u5BB9\u4EE5\u53CA\u6807\u9898\u7EC4\u6210\u3002\u4F46section\u5143\u7D20\u5E76\u975E\u4E00\u4E2A\u666E\u901A\u7684\u5BB9\u5668\u5143\u7D20\uFF1B\u5F53\u4E00\u4E2A\u5BB9\u5668\u9700\u8981\u88AB\u76F4\u63A5\u5B9A\u4E49\u6837\u5F0F\u6216\u901A\u8FC7\u811A\u672C\u5B9A\u4E49\u884C\u4E3A\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528div\u800C\u975Esection\u5143\u7D20\u3002</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '',
                answer: "\n      \n      ",
                checked: '0'
            }
        ];
    }
    Html5Component.prototype.ngOnInit = function () {
    };
    Html5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-html5',
            template: __webpack_require__(/*! raw-loader!./html5.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/html5/html5.component.html"),
            styles: [__webpack_require__(/*! ./html5.component.scss */ "./src/app/home/topic/html5/html5.component.scss")]
        })
    ], Html5Component);
    return Html5Component;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JavascriptComponent = /** @class */ (function () {
    function JavascriptComponent() {
        this.title = 'javascript';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            {
                topic: '请写出阻止事件冒泡的方法？',
                answer: "<p></p>\n      $event.stopPropagation()\u8D77\u5230\u963B\u6B62\u6355\u83B7\u548C\u5192\u6CE1\u9636\u6BB5\u4E2D\u5F53\u524D\u4E8B\u4EF6\u7684\u8FDB\u4E00\u6B65\u4F20\u64AD\u3002</br></br>\n      $event.preventDefault()\u53EF\u4EE5\u53D6\u6D88\u9ED8\u8BA4\u4E8B\u4EF6\u3002</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '数组常用的方法有哪些？',
                answer: "<p></p>\n      1\u3001arr.push(obj) \u4ECE\u540E\u9762\u6DFB\u52A0\u5143\u7D20\uFF0C\u8FD4\u56DE\u503C\u662F\u6DFB\u52A0\u5B8C\u540E\u7684\u6570\u7EC4</br></br>\n      2\u3001arr.unshift(obj) \u4ECE\u524D\u9762\u6DFB\u52A0\u5143\u7D20\uFF0C\u8FD4\u56DE\u503C\u662F\u6DFB\u52A0\u540E\u7684\u6570\u7EC4</br></br>\n      3\u3001arr.pop() \u4ECE\u540E\u9762\u5220\u9664\u5143\u7D20\uFF0C\u53EA\u80FD\u5220\u9664\u4E00\u4E2A\uFF0C\u8FD4\u56DE\u503C\u662F\u5220\u9664\u7684\u5143\u7D20</br></br>\n      4\u3001arr.shift() \u4ECE\u524D\u9762\u5220\u9664\u5143\u7D20\uFF0C\u53EA\u80FD\u5220\u9664\u4E00\u4E2A\uFF0C\u8FD4\u56DE\u503C\u662F\u5220\u9664\u7684\u5143\u7D20</br></br>\n      5\u3001arr.splice(i,n,obj) \u5220\u9664\u4ECEi(\u7D22\u5F15)\u5F00\u59CB\u4E4B\u540E\u7684n\u4E2A\u5143\u7D20\u5E76\u6DFB\u52A0obj\uFF0C\u8FD4\u56DE\u503C\u7684\u5220\u9664\u7684\u5143\u7D20</br></br>\n      6\u3001arr.concat([1,2]) \u6570\u7EC4\u8FDE\u63A5\uFF0C\u8FD4\u56DE\u503C\u662F\u8FDE\u63A5\u540E\u7684\u65B0\u6570\u7EC4</br></br>\n      7\u3001arr.split(',') \u8BB2\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u6570\u7EC4</br></br>\n      8\u3001arr.sort((a,b)=>{ return a-b; }) \u6570\u7EC4\u6392\u5E8F\uFF0C\u8FD4\u56DE\u503C\u662F\u6392\u5E8F\u540E\u7684\u6570\u7EC4</br></br>\n      9\u3001arr.reverse() \u5C06\u6570\u7EC4\u53CD\u8F6C\uFF0C\u8FD4\u56DE\u503C\u662F\u53CD\u8F6C\u540E\u7684\u6570\u7EC4</br></br>\n      10\u3001arr.slice(start,end) \u5207\u53BB\u7D22\u5F15start\u5230end\u7684\u6570\u7EC4\uFF0C\u4E0D\u5305\u542Bend\u7D22\u5F15\uFF0C\u8FD4\u56DE\u503C\u662F\u5207\u51FA\u6765\u7684\u6570\u7EC4</br></br>\n      11\u3001arr.forEach((value\u5F53\u524D\u7D22\u5F15\u7684\u503C,index\u5F53\u524D\u7D22\u5F15,array\u539F\u6570\u7EC4)=>{}) \u6570\u7EC4\u904D\u5386\uFF0C\u65E0return</br></br>\n      12\u3001arr.map((value\u5F53\u524D\u7D22\u5F15\u7684\u503C,index\u5F53\u524D\u7D22\u5F15,array\u539F\u6570\u7EC4)=>{}) \u6620\u5C04\u6570\u7EC4\uFF0C\u6709return\uFF0Carr.map()\u662F\u4FEE\u6539\u6570\u7EC4\u5176\u4E2D\u7684\u6570\u636E\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684\u6570\u636E</br></br>\n      13\u3001arr.filter((i,v)=>{ i<3 }) \u8FC7\u6EE4\u6570\u7EC4\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6EE1\u8DB3\u8981\u6C42(\u5C0F\u4E8E3)\u7684\u6570\u7EC4</br></br>\n      14\u3001arr.event((i,v)=>{ i<3 }) \u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u5982\u679C\u5168\u90E8\u6EE1\u8DB3\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u4E3Afalse</br></br>\n      15\u3001arr.some((i,v)=>{ i<3 }) \u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u4E3Afalse</br></br>\n      16\u3001\uFF08es6\uFF09Array.form('12345')/Array.form({0:'a',1:'b',length:2}) \u5C06\u4F2A\u6570\u7EC4\u53D8\u6210\u6570\u7EC4\uFF0C\u53EA\u8981\u6709length\u7684\u5C31\u53EF\u4EE5\u8F6C\u6210\u6570\u7EC4</br></br>\n      17\u3001arr.find((value, index, array) =>value > 2) \u627E\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458</br></br>\n      18\u3001arr.includes(\u6761\u4EF6) \u5224\u65AD\u6570\u4E2D\u662F\u5426\u5305\u542B\u7ED9\u5B9A\u7684\u503C\uFF0C\u6709\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '字符串常用的方法有哪些？',
                answer: "<p></p>\n      1\u3001str.indexOf('a') \u8FD4\u56DE\u6307\u5B9A\u5B57\u7B26\u521B\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u627E\u4E0D\u5230\u8FD4\u56DE-1\u3002</br></br>\n      2\u3001str.lastIndexOf('a') \u8FD4\u56DE\u6307\u5B9A\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u627E\u4E0D\u5230\u8FD4\u56DE-1\u3002</br></br>\n      3\u3001str.substring(0,5) \u63D0\u53D6\u5B57\u7B26\u4E32\u4E2D\u4E24\u4E2A\u6307\u5B9A\u7D22\u5F15\u53F7\u4E4B\u95F4\u7684\u5B57\u7B26\uFF08\u4E24\u4E2A\u7D22\u5F15\u4E0D\u80FD\u4E3A\u8D1F\u503C\uFF09</br></br>\n      4\u3001str.slice(0,-5) \u63D0\u53D6\u5B57\u7B26\u4E32\u4E2D\u4E24\u4E2A\u6307\u5B9A\u7D22\u5F15\u53F7\u4E4B\u95F4\u7684\u5B57\u7B26\uFF08\u7D22\u5F15\u53EF\u4EE5\u4E3A\u8D1F\u503C\uFF0C-1\u5C31\u662F\u5012\u6570\u7B2C\u4E8C\u4F4D\uFF09</br></br>\n      5\u3001str.charAt(1) \u8FD4\u56DE\u6307\u5B9A\u7D22\u5F15\u7684\u5B57\u7B26</br></br>\n      6\u3001str.concat(str2)\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u8FDE\u63A5\u540E\u7684\u65B0\u5B57\u7B26\u4E32</br></br>\n      7\u3001str.split() \u628A\u5B57\u7B26\u4E32\u5206\u5272\u4E3A\u5B50\u5B57\u7B26\u4E32\u6570\u7EC4</br></br>\n      8\u3001arr.toString()\uFF0C\u8FD4\u56DE\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u6BD4\u5982\u628A\u6570\u5B57\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002</br></br>&nbsp;&nbsp;&nbsp;&nbsp;\n      \u5224\u65AD\u662F\u4E0D\u662F\u6570\u7EC4\uFF1AObject.prototype.toString.call(arr) == '[object Array]' ); //true\n      9\u3001str.replace(regexp,'\u4F60\u597D') \u6240\u6709\u5339\u914D\u5230\u7684\u6B63\u5219\u90FD\u66FF\u6362\u6389</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '本地存储？',
                answer: "<p></p>\n      \uFF08sessionStorage\uFF0ClocalStorage\uFF09</br></br>\n      sessionStorage.setItem('data',JSON.stringify(data))</br></br>\n      JSON.parse(sessionStorage.getItem('data'));</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '取0到100的随机整数？',
                answer: "<p></p>\n      random(m,n){</br></br>&nbsp;&nbsp;&nbsp;&nbsp;\n        return parseInt(Math.random()*(m-n)+n);</br></br>\n      }</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '只能输入数字？',
                answer: "<p></p>\n      value.replace(/[^d]/g,'');\n      ",
                checked: '0'
            },
            {
                topic: '判断是不是整数？',
                answer: "<p></p>\n      1\u3001typeof obj === 'number' && obj%1 === 0</br></br>\n      2\u3001Math.floor(obj) === obj</br></br>\n      3\u3001(obj | 0) === obj \u901A\u8FC7\u4F4D\u8FD0\u7B97\u5224\u65AD</br></br>\n      4\u3001ES6\u63D0\u4F9B\u4E86Number.isInteger(3) // true</br></br>\n      ",
                checked: '0'
            },
            {
                topic: '保留整数？',
                answer: "<p></p>\n      1\u3001parseInt(5/2) \u4E22\u5F03\u5C0F\u6570\u90E8\u5206\uFF0C\u4FDD\u7559\u6574\u6570</br></br>\n      2\u3001Math.ceil(5/2) \u5411\u4E0A\u53D6\u6574</br></br>\n      3\u3001Math.floor(5/2) \u5411\u4E0B\u53D6\u6574\uFF0C\u4E22\u5F03\u5C0F\u6570\u90E8\u5206</br></br>\n      4\u3001Math.round(5/2) \u56DB\u5C04\u4E94\u5165\u6CD5\u53D6\u6574</br></br>\n      ",
                checked: '0'
            }
        ];
    }
    JavascriptComponent.prototype.ngOnInit = function () {
    };
    JavascriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-javascript',
            template: __webpack_require__(/*! raw-loader!./javascript.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/javascript/javascript.component.html"),
            styles: [__webpack_require__(/*! ./javascript.component.scss */ "./src/app/home/topic/javascript/javascript.component.scss")]
        })
    ], JavascriptComponent);
    return JavascriptComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        // 标题目录
        this.titleList = [
            { name: 'css3', id: 1, path: '/home/topic/css3' },
            { name: 'html5', id: 2, path: '/home/topic/html5' },
            { name: 'javascript', id: 3, path: '/home/topic/javascript' },
            { name: 'angular7.0', id: 4, path: '/home/topic/angular7' },
            { name: 'typescript', id: 5, path: '/home/topic/typescript' },
        ];
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/home/topic/nav/nav.component.scss")]
        })
    ], NavComponent);
    return NavComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");

//变化检测ChangeDetectorRef

// ng-zorro组件

var PublicsComponent = /** @class */ (function () {
    function PublicsComponent(msgService, Ref) {
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
    PublicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 乱序输出
        this.topicList.sort(function (a, b) {
            return Math.random() > 0.5 ? -1 : 1;
        });
        this.topics = this.topicList[0];
        this.answer = this.topics.answer;
        this.count = this.topicList.length;
        // 当前时间
        this.timer = setInterval(function () {
            _this.date = new Date();
        }, 1000);
        // 倒计时
        this.timeDown(this.second);
    };
    PublicsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
        clearInterval(this.tDown);
    };
    // 倒计时
    PublicsComponent.prototype.timeDown = function (time) {
        var _this = this;
        this.tDown = setInterval(function () {
            time--;
            var m = Math.floor(time / 60);
            var s = Math.floor(time % 60);
            _this.newDate = (m < 10 ? '0' + m : m) + '分' + (s < 10 ? '0' + s : s) + '秒';
            if (time == 0) {
                _this.topics.checked = '2';
                _this.turning('text');
                _this.msgService.create('warning', '超出时间，请进行下一题！');
            }
        }, 1000);
    };
    // 选择对错
    PublicsComponent.prototype.topicChange = function (event, item) {
        item.checked = event;
        this.complete += 1;
        if (event == '1') {
            this.checkeds += 1;
        }
        if (this.complete == this.topicList.length) {
            this.isVisible = true;
        }
    };
    // 关闭提示框
    PublicsComponent.prototype.handleOk = function () {
        this.isVisible = false;
    };
    // 上一题/下一题
    PublicsComponent.prototype.turning = function (val) {
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
    };
    // 查看答案
    PublicsComponent.prototype.seeLook = function () {
        this.topics.look = true;
    };
    PublicsComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
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
    return PublicsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopicComponent = /** @class */ (function () {
    function TopicComponent() {
    }
    TopicComponent.prototype.ngOnInit = function () {
    };
    TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic',
            template: __webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/topic.component.html"),
            styles: [__webpack_require__(/*! ./topic.component.scss */ "./src/app/home/topic/topic.component.scss")]
        })
    ], TopicComponent);
    return TopicComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypescriptComponent = /** @class */ (function () {
    function TypescriptComponent() {
        this.title = 'CSS3';
        this.topicList = [
            // topic题目 answer答案 checked对错 0未答 1正确 2错误
            { topic: '第一题很简单。', answer: '这是第一题的答案', checked: '0' },
            { topic: '第二道题目。', answer: '才不不不不不不v', checked: '0' },
            { topic: '第二道题目。', answer: '才不不不不不不v', checked: '0' }
        ];
    }
    TypescriptComponent.prototype.ngOnInit = function () {
    };
    TypescriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typescript',
            template: __webpack_require__(/*! raw-loader!./typescript.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/topic/typescript/typescript.component.html"),
            styles: [__webpack_require__(/*! ./typescript.component.scss */ "./src/app/home/topic/typescript/typescript.component.scss")]
        })
    ], TypescriptComponent);
    return TypescriptComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService) {
        this.appService = appService;
        this.beat = '';
        this.choice = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.beatPho = function (event) {
        console.log('调照相机');
        console.log(event);
    };
    LoginComponent.prototype.choicePho = function (event) {
        console.log('调本地相册');
        console.log(event);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map
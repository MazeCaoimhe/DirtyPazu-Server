(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);


class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _main_flag_flag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/flag/flag.component */ 2290);
/* harmony import */ var _main_dibi_infos_dibi_infos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/dibi-infos/dibi-infos.component */ 9633);
/* harmony import */ var _main_dibi_dict_dibi_dict_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/dibi-dict/dibi-dict.component */ 7564);
/* harmony import */ var _main_logs_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/logs/logs.component */ 1350);
/* harmony import */ var _main_infos_infos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/infos/infos.component */ 4966);
/* harmony import */ var _main_connect_center_connect_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/connect-center/connect-center.component */ 206);
/* harmony import */ var _main_dibi_suggest_dibi_suggest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/dibi-suggest/dibi-suggest.component */ 4398);
/* harmony import */ var _main_dibi_vote_dibi_vote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/dibi-vote/dibi-vote.component */ 4634);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularx-social-login */ 4260);
/* harmony import */ var _main_account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/account/account.component */ 593);
/* harmony import */ var _main_dibi_grammar_dibi_grammar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/dibi-grammar/dibi-grammar.component */ 9497);
/* harmony import */ var _main_dibi_new_word_dibi_new_word_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/dibi-new-word/dibi-new-word.component */ 4384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
















// Social connexion







const socialId = '886518860996-o45rlpuk1f0n9verombausklme0ampga.apps.googleusercontent.com';
// Socket.io
const hostname = window.location.hostname;
const url = (hostname === 'localhost') ? `${window.location.protocol}//${hostname}:5000` : undefined;
const config = { url, options: {} };
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [{
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.GoogleLoginProvider(socialId)
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.FacebookLoginProvider.PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.FacebookLoginProvider(socialId)
                    }
                ]
            },
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__.SocketIoModule.forRoot(config),
            ng2_charts__WEBPACK_IMPORTED_MODULE_20__.ChartsModule,
            angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.SocialLoginModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent,
        _main_flag_flag_component__WEBPACK_IMPORTED_MODULE_2__.FlagComponent,
        _main_dibi_dict_dibi_dict_component__WEBPACK_IMPORTED_MODULE_4__.DibiDictComponent,
        _main_dibi_infos_dibi_infos_component__WEBPACK_IMPORTED_MODULE_3__.DibiInfosComponent,
        _main_logs_logs_component__WEBPACK_IMPORTED_MODULE_5__.LogsComponent,
        _main_infos_infos_component__WEBPACK_IMPORTED_MODULE_6__.InfosComponent,
        _main_connect_center_connect_center_component__WEBPACK_IMPORTED_MODULE_7__.ConnectCenterComponent,
        _main_dibi_suggest_dibi_suggest_component__WEBPACK_IMPORTED_MODULE_8__.DibiSuggestComponent,
        _main_dibi_vote_dibi_vote_component__WEBPACK_IMPORTED_MODULE_9__.DibiVoteComponent,
        _main_account_account_component__WEBPACK_IMPORTED_MODULE_10__.AccountComponent,
        _main_dibi_grammar_dibi_grammar_component__WEBPACK_IMPORTED_MODULE_11__.DibiGrammarComponent,
        _main_dibi_new_word_dibi_new_word_component__WEBPACK_IMPORTED_MODULE_12__.DibiNewWordComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__.SocketIoModule, ng2_charts__WEBPACK_IMPORTED_MODULE_20__.ChartsModule,
        angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.SocialLoginModule] }); })();


/***/ }),

/***/ 593:
/*!***************************************************!*\
  !*** ./src/app/main/account/account.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 6, vars: 0, consts: [[1, "body"], [1, "container"], [1, "header"], [1, "content"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Vos propositions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Pas encore cod\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 12px;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNYXJpbyUyMFZJRUlMTEVERU5UXFxEZXNrdG9wXFxNRUFOXFxEaXJ0eVBhenVcXGNsaWVudFxcc3JjXFxhcHBcXG1haW5cXGFjY291bnRcXGFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksYUFBQTtFQUNBLGFBTk07RUFPTixZQUFBO0VBQ0EsV0FBQTtBQ2hCSjtBRGtCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDaEJaO0FEbUJRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBeEJGO0FDT1YiLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmctY29sb3ItaGVhZGVyOiAjMTUxMzExOyAvLyBDb3VsZXVyIGRlIGZvbmQgbGEgcGx1cyBmb25jw6llXHJcbiRiZy1jb2xvci1uYXY6ICMyNTIzMjE7IC8vIENvdWxldXIgZGUgZm9uZCBlbnRyZS1kZXV4XHJcbiRiZy1jb2xvci1jb250ZW50OiAjMzUzMzMxOyAvLyBDb3VsZXVyIGRlIGZvbmQgbGEgcGx1cyBjbGFpcmVcclxuJGJnLWNvbG9yLW5hdi1idXR0b246ICMzNTMzMzE7IC8vIENvdWxldXIgZGUgZm9uZCBkZXMgYm91dG9uc1xyXG4kYmctY29sb3ItbmF2LWJ1dHRvbi1ob3ZlcjogIzQ1NDM0MTsgLy8gQ291bGV1ciBkZSBmb25kIGRlcyBib3V0b25zIGhvdmVyXHJcbiRiZy1jb2xvci1vcHRpb24tYmxvY2s6ICM1NTUzNTE7IC8vIE9wdGlvbnNcclxuJGJnLWNvbG9yLW9wdGlvbi1ibG9jay1ob3ZlcjogIzY1NjM2MTsgLy8gT3B0aW9ucyBob3ZlclxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAwcHg7XHJcbiRuYXYtd2lkdGg6IDIwMHB4O1xyXG5cclxuJHBhZGRpbmc6IDEycHg7XHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXI6IDFweCBzb2xpZCAjNzU3NDczO1xyXG5cclxuLmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICRwYWRkaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ib2R5IC5jb250YWluZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 206:
/*!*****************************************************************!*\
  !*** ./src/app/main/connect-center/connect-center.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectCenterComponent": () => (/* binding */ ConnectCenterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ 4260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);








function ConnectCenterComponent_div_7_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConnectCenterComponent_div_7_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.logoutAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D\u00E9connexion admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConnectCenterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vous \u00EAtes Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConnectCenterComponent_div_7_button_5_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adminConnected);
} }
function ConnectCenterComponent_div_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function ConnectCenterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connexion Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConnectCenterComponent_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConnectCenterComponent_div_8_span_4_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConnectCenterComponent_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.connectAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Entrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
} }
class ConnectCenterComponent {
    constructor(http, socket, authService) {
        this.http = http;
        this.socket = socket;
        this.authService = authService;
        // Emitters vers le component main
        this.adminConnectionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Approuve la connexion admin
        this.closeBoxEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Ferme la fenêtre popup
        this.userEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Approuve la connexion avec compte Google
        this.adminConnected = false; // Si un administrateur est connecté
        // Si click à l'extérieur de la fenêtre, fermeture de la fenêtre
        window.onclick = (event) => {
            if (event.target === document.getElementById('zone-click-exit')) {
                this.closeBoxEmitter.emit(false);
            }
        };
        // Si touche esc, fermeture de la fenêtre
        window.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                this.closeBoxEmitter.emit(false);
            }
        });
    }
    ngOnInit() {
        // Si mot de passe incorrect, un message rouge s'affiche
        this.socket.on('wrongPwd', () => {
            this.setAdminConnected(false);
            window.localStorage.removeItem('pwd');
            this.errorMessage = 'Mot de passe incorrect.';
            setTimeout(() => {
                this.errorMessage = undefined;
            }, 5000);
        });
    }
    ngAfterViewInit() {
        // Si aucune information du profil n'est chargé, elle sont initialisées à vide
        setTimeout(() => {
            if (!this.accountSettings) {
                if (this.user) {
                    this.accountSettings = { email: this.user.email, user: this.user, discordPseudo: '', discordTag: '' };
                }
            }
        }, 250);
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.GoogleLoginProvider.PROVIDER_ID);
    }
    // signInWithFB(): void {
    //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // }
    signOut() {
        this.authService.signOut();
        this.accountSettings = { email: '', user: undefined, discordPseudo: '', discordTag: '' };
    }
    /**
     * Vérifie que le mot de passe administrateur soit correct
     */
    connectAdmin() {
        this.socket.emit('login', { pwd: btoa(this.password) });
    }
    /**
     * Déconnecte la session admin
     */
    logoutAdmin() {
        this.setAdminConnected(false);
        window.localStorage.removeItem('pwd');
        this.socket.emit('logout', {});
    }
    /**
     * Set la variable adminConnected (pour ce component, et pour le component parent (main))
     */
    setAdminConnected(value) {
        this.adminConnected = value;
        this.adminConnectionEmitter.emit(value); // Envoie de la donnée au component main
    }
    /**
     * Enregistre en bdd les options du compte
     */
    saveAccountSettings() {
        if (this.accountSettings.discordPseudo && this.accountSettings.discordTag) {
            if (this.user) {
                try {
                    this.accountSettings.user.response = undefined;
                }
                catch (error) {
                    location.reload();
                }
                this.accountSettings.email = this.accountSettings.user.email;
                this.socket.emit('setProfile', this.accountSettings);
            }
            else {
                window.alert('Compte Google non connecté');
            }
        }
        else {
        }
    }
}
ConnectCenterComponent.ɵfac = function ConnectCenterComponent_Factory(t) { return new (t || ConnectCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__.Socket), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService)); };
ConnectCenterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectCenterComponent, selectors: [["app-connect-center"]], inputs: { adminConnected: "adminConnected", pwd: "pwd", user: "user", accountSettings: "accountSettings" }, outputs: { adminConnectionEmitter: "adminConnectionEmitter", closeBoxEmitter: "closeBoxEmitter", userEmitter: "userEmitter" }, decls: 9, vars: 2, consts: [["id", "zone-click-exit", 1, "container"], [1, "box"], [1, "header"], [1, "accounts"], [1, "admin"], ["class", "admin-section", 4, "ngIf"], [1, "admin-section"], [1, "crown-and-title", "margin-bottom"], ["src", "assets/crown-solid.svg", "title", "Admin", 1, "golden-crown"], [3, "click", 4, "ngIf"], [3, "click"], [1, "margin-bottom"], ["type", "password", 1, "margin-bottom", 3, "ngModel", "ngModelChange"], ["class", "margin-bottom", 4, "ngIf"]], template: function ConnectCenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Centre de connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConnectCenterComponent_div_7_Template, 6, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConnectCenterComponent_div_8_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.adminConnected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 74px 12px 12px 12px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  max-width: 700px;\n  height: 100%;\n  max-height: 550px;\n  overflow: auto;\n  background-color: #454443;\n  border: 1px solid #757473;\n  border-radius: 4px;\n  padding: 12px 0px 12px 0px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 12px;\n  width: 100%;\n  height: 32px;\n  border-bottom: 1px solid #757473;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%] {\n  border-right: 1px solid #757473;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 12px 0px 12px;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .margin-bottom[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 96px;\n  width: 96px;\n  border-radius: 96px;\n  margin-bottom: 6px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 6px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 6px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   .text-infos[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .google-info[_ngcontent-%COMP%]   .user-display[_ngcontent-%COMP%]   .text-infos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin-left: 24px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 12px 0px 12px 0px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%]   .pseudo[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%]   .pseudo[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-right: 6px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-left: 6px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%]   .mandatory[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .account-setup[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%]   .mandatory[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  height: 20px;\n  width: 20px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .admin-section[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .admin-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .admin-section[_ngcontent-%COMP%]   .crown-and-title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .admin-section[_ngcontent-%COMP%]   .crown-and-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%]   .admin-section[_ngcontent-%COMP%]   .crown-and-title[_ngcontent-%COMP%]   .golden-crown[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .admin-section[_ngcontent-%COMP%]   .crown-and-title[_ngcontent-%COMP%]   .golden-crown[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-right: 12px;\n}\n@media screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .google-account[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #757473;\n    padding-bottom: 12px;\n  }\n  .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3QtY2VudGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWFyaW8lMjBWSUVJTExFREVOVFxcRGVza3RvcFxcTUVBTlxcRGlydHlQYXp1XFxjbGllbnRcXHNyY1xcYXBwXFxtYWluXFxjb25uZWN0LWNlbnRlclxcY29ubmVjdC1jZW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FDVEo7QURXSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBN0JJO0VBOEJKLHlCQWhDQztFQWlDRCxrQkFsQ1E7RUFtQ1IsMEJBQUE7QUNUUjtBRFdRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNUWjtBRFlRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1ZaO0FEWVk7RUFDSSwrQkFBQTtBQ1ZoQjtBRGFZOztFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ1hoQjtBRGFnQjs7RUFDSSxtQkFqRVY7QUN1RFY7QURhZ0I7O0VBQ0ksYUFBQTtBQ1ZwQjtBRFlvQjs7RUFDSSxhQUFBO0FDVHhCO0FEV3dCOztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1I1QjtBRFd3Qjs7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNSNUI7QURXd0I7O0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDUjVCO0FEV3dCOztFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1I1QjtBRGFnQjs7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDVnBCO0FEWW9COztFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDVHhCO0FEV3dCOztFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ1I1QjtBRFd3Qjs7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNSNUI7QURXd0I7O0VBQ0ksaUJBM0hsQjtFQTRIa0IsWUFBQTtFQUNBLFdBQUE7QUNSNUI7QURhZ0I7O0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDVnBCO0FEWW9COztFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1R4QjtBRFd3Qjs7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUjVCO0FEaUJBO0VBR1k7SUFDSSxzQkFBQTtFQ2hCZDtFRGlCYztJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0NBQUE7SUFDQSxvQkEvSlY7RUNnSlI7RURpQmM7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ2ZsQjtBQUNGIiwiZmlsZSI6ImNvbm5lY3QtY2VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZGRpbmc6IDEycHg7XHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXI6IDFweCBzb2xpZCAjNzU3NDczO1xyXG5cclxuJGJveC1jb2xvcjogIzQ1NDQ0MztcclxuJGhvdmVyLWNvbG9yOiAjM2YzZTNkO1xyXG4kc2VsZWN0ZWQtY29sb3I6ICMzOTM4Mzc7XHJcblxyXG4kcGhvbmUtdmlldzogNjAwcHg7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IGNhbGMoNTBweCArIDI0cHgpICRwYWRkaW5nICRwYWRkaW5nICRwYWRkaW5nO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgIC5ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm94LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogJGJvcmRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZyAwcHggJHBhZGRpbmcgMHB4O1xyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1NzQ3MztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY2NvdW50cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmdvb2dsZS1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3NTc0NzM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5nb29nbGUtYWNjb3VudCxcclxuICAgICAgICAgICAgLmFkbWluIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmcgJHBhZGRpbmcgMHB4ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5tYXJnaW4tYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZ29vZ2xlLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLWRpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtaW5mb3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjY291bnQtc2V0dXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5saW5lLWlucHV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHNldWRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hbmRhdG9yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWRtaW4tc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY3Jvd24tYW5kLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nb2xkZW4tY3Jvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZS12aWV3KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgLmFjY291bnRzIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAuZ29vZ2xlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1NzQ3MztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWRtaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogNzRweCAxMnB4IDEycHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNvbnRhaW5lciAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1NTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTQ0NDM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NTc0NzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTJweCAwcHggMTJweCAwcHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NTc0NzM7XG59XG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5nb29nbGUtYWNjb3VudCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3NTc0NzM7XG59XG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5nb29nbGUtYWNjb3VudCxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTJweCAxMnB4IDBweCAxMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5nb29nbGUtYWNjb3VudCAubWFyZ2luLWJvdHRvbSxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5nb29nbGUtaW5mbyxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5nb29nbGUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5nb29nbGUtYWNjb3VudCAuZ29vZ2xlLWluZm8gLnVzZXItZGlzcGxheSxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5nb29nbGUtaW5mbyAudXNlci1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5nb29nbGUtaW5mbyAudXNlci1kaXNwbGF5IGltZyxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5nb29nbGUtaW5mbyAudXNlci1kaXNwbGF5IGltZyB7XG4gIGhlaWdodDogOTZweDtcbiAgd2lkdGg6IDk2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5nb29nbGUtaW5mbyAudXNlci1kaXNwbGF5IGg0LFxuLmNvbnRhaW5lciAuYm94IC5hY2NvdW50cyAuYWRtaW4gLmdvb2dsZS1pbmZvIC51c2VyLWRpc3BsYXkgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5nb29nbGUtaW5mbyAudXNlci1kaXNwbGF5IHAsXG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5hZG1pbiAuZ29vZ2xlLWluZm8gLnVzZXItZGlzcGxheSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5nb29nbGUtYWNjb3VudCAuZ29vZ2xlLWluZm8gLnVzZXItZGlzcGxheSAudGV4dC1pbmZvcyxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5nb29nbGUtaW5mbyAudXNlci1kaXNwbGF5IC50ZXh0LWluZm9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5hY2NvdW50LXNldHVwLFxuLmNvbnRhaW5lciAuYm94IC5hY2NvdW50cyAuYWRtaW4gLmFjY291bnQtc2V0dXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5hY2NvdW50LXNldHVwIC5pbmxpbmUtaW5wdXRzLFxuLmNvbnRhaW5lciAuYm94IC5hY2NvdW50cyAuYWRtaW4gLmFjY291bnQtc2V0dXAgLmlubGluZS1pbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5hY2NvdW50cyAuZ29vZ2xlLWFjY291bnQgLmFjY291bnQtc2V0dXAgLmlubGluZS1pbnB1dHMgLnBzZXVkbyxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5hY2NvdW50LXNldHVwIC5pbmxpbmUtaW5wdXRzIC5wc2V1ZG8ge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5hY2NvdW50cyAuZ29vZ2xlLWFjY291bnQgLmFjY291bnQtc2V0dXAgLmlubGluZS1pbnB1dHMgLnRhZyxcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5hY2NvdW50LXNldHVwIC5pbmxpbmUtaW5wdXRzIC50YWcge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5hY2NvdW50LXNldHVwIC5pbmxpbmUtaW5wdXRzIC5tYW5kYXRvcnksXG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5hZG1pbiAuYWNjb3VudC1zZXR1cCAuaW5saW5lLWlucHV0cyAubWFuZGF0b3J5IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5nb29nbGUtYWNjb3VudCAuYWRtaW4tc2VjdGlvbixcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5hZG1pbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5hZG1pbi1zZWN0aW9uIC5jcm93bi1hbmQtdGl0bGUsXG4uY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5hZG1pbiAuYWRtaW4tc2VjdGlvbiAuY3Jvd24tYW5kLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmdvb2dsZS1hY2NvdW50IC5hZG1pbi1zZWN0aW9uIC5jcm93bi1hbmQtdGl0bGUgLmdvbGRlbi1jcm93bixcbi5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIC5hZG1pbi1zZWN0aW9uIC5jcm93bi1hbmQtdGl0bGUgLmdvbGRlbi1jcm93biB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuYm94IC5hY2NvdW50cyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29udGFpbmVyIC5ib3ggLmFjY291bnRzIC5nb29nbGUtYWNjb3VudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzU3NDczO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB9XG4gIC5jb250YWluZXIgLmJveCAuYWNjb3VudHMgLmFkbWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 7564:
/*!*******************************************************!*\
  !*** ./src/app/main/dibi-dict/dibi-dict.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibiDictComponent": () => (/* binding */ DibiDictComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services */ 6592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);







function DibiDictComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_3_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.search = $event; })("input", function DibiDictComponent_div_3_Template_input_input_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_3_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.emptySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_3_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.toggleAdvancedSearch(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.search);
} }
function DibiDictComponent_div_4_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_ng_container_50_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_ng_container_50_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.searchOptions.doesNotContiain.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sans cr\u00E9ateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_ng_container_50_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_ng_container_50_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.searchOptions.doesNotContiain.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sans description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_ng_container_50_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_ng_container_50_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.searchOptions.doesNotContiain.english = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sans Anglais");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.searchOptions.doesNotContiain.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.searchOptions.doesNotContiain.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.searchOptions.doesNotContiain.english);
} }
function DibiDictComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 6)(2, "div", 30)(3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.allPartsOfSpeech(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_label_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.allPartsOfSpeech(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Aucun");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 34)(10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.searchOptions.partsOfSpeech.Noun = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Noms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.searchOptions.partsOfSpeech.Pronoun = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pronoms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.searchOptions.partsOfSpeech.Adjective = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Adjectifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.searchOptions.partsOfSpeech.Verb = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Verbes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.searchOptions.partsOfSpeech.Adverb = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Adverbes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.searchOptions.partsOfSpeech.FunctionParticule = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Particules de fonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.searchOptions.partsOfSpeech.TransformationParticule = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Particules de transformation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.searchOptions.partsOfSpeech.SpiritWord = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Mots d'esprit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.searchOptions.partsOfSpeech.Conjonction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Conjonctions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.searchOptions.partsOfSpeech.Interjection = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Interjections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DibiDictComponent_div_4_ng_container_50_Template, 13, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11)(52, "div", 56)(53, "div", 57)(54, "div", 23)(55, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.search = $event; })("input", function DibiDictComponent_div_4_Template_input_input_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.emptySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.toggleRegexSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ".*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.toggleAdvancedSearch(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 59)(63, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.searchOptions.element.Dibi = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Dibi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.searchOptions.element.French = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Fran\u00E7ais");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.searchOptions.element.English = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Anglais");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_4_Template_div_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.eachKeySearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_4_Template_input_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.searchOptions.element.Author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Cr\u00E9ateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.Noun);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.Pronoun);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.Adjective);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.Verb);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.Adverb);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.FunctionParticule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.TransformationParticule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.SpiritWord);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.Conjonction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.partsOfSpeech.Interjection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.adminConnected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r1.regexSearch ? "regexOn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.element.Dibi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.element.French);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.element.English);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchOptions.element.Author);
} }
function DibiDictComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 75);
} }
function DibiDictComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 76);
} }
function DibiDictComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 75);
} }
function DibiDictComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 76);
} }
function DibiDictComponent_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 75);
} }
function DibiDictComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 76);
} }
function DibiDictComponent_div_34_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](word_r62.french);
} }
function DibiDictComponent_div_34_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", word_r62.english, " ");
} }
function DibiDictComponent_div_34_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 2, word_r62.date, "dd/MM/YYYY - HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, word_r62.date, "dd/MM/YYYY"), "");
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pronom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Verbe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Adjectif");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Adverbe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Conjonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Interjection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Particule de fonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Particule de transformation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mot d'esprit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DibiDictComponent_div_34_div_1_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DibiDictComponent_div_34_div_1_div_10_div_2_div_6_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DibiDictComponent_div_34_div_1_div_10_div_2_div_7_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DibiDictComponent_div_34_div_1_div_10_div_2_div_8_Template, 2, 0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DibiDictComponent_div_34_div_1_div_10_div_2_div_9_Template, 2, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DibiDictComponent_div_34_div_1_div_10_div_2_div_10_Template, 2, 0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DibiDictComponent_div_34_div_1_div_10_div_2_div_11_Template, 2, 0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DibiDictComponent_div_34_div_1_div_10_div_2_div_12_Template, 2, 0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DibiDictComponent_div_34_div_1_div_10_div_2_div_13_Template, 2, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DibiDictComponent_div_34_div_1_div_10_div_2_div_14_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DibiDictComponent_div_34_div_1_div_10_div_2_div_15_Template, 2, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", word_r62.partOfSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Noun");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Pronoun");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Verb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Adjective");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Adverb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Conjonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Interjection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "FunctionParticule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "TransformationParticule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "SpiritWord");
} }
function DibiDictComponent_div_34_div_1_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Fran\u00E7ais");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 96)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](word_r62.french);
} }
function DibiDictComponent_div_34_div_1_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Anglais");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 96)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](word_r62.english);
} }
function DibiDictComponent_div_34_div_1_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cr\u00E9ateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 96)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](word_r62.author);
} }
function DibiDictComponent_div_34_div_1_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 96)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](word_r62.description);
} }
function DibiDictComponent_div_34_div_1_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Date d'ajout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 96)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 1, word_r62.date, "dd/MM/YYYY - HH:mm:ss"));
} }
function DibiDictComponent_div_34_div_1_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94)(1, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Pas de d\u00E9tails");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function DibiDictComponent_div_34_div_1_div_10_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 119)(1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_34_div_1_div_10_div_9_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r95.delete(word_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_34_div_1_div_10_div_9_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r98.edit(word_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function DibiDictComponent_div_34_div_1_div_10_div_10_p_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r100.message.mes);
} }
function DibiDictComponent_div_34_div_1_div_10_div_10_p_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r101.message.mes);
} }
function DibiDictComponent_div_34_div_1_div_10_div_10_p_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r102.message.mes);
} }
function DibiDictComponent_div_34_div_1_div_10_div_10_p_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
function DibiDictComponent_div_34_div_1_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "div", 124)(3, "div", 125)(4, "div", 126)(5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Dibi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r104.wordToEdit.dibi = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Un mot comman\u00E7ant par une majuscule. Particules en minuscule avec un \"-\".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 125)(11, "div", 126)(12, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Fran\u00E7ais");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r106.wordToEdit.french = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Traduction en Fran\u00E7ais, un ou plusieurs mots comman\u00E7ant par des majuscules, s\u00E9par\u00E9s par des virgules.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 125)(18, "div", 126)(19, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Anglais");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r107.wordToEdit.english = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Traduction en Anglais, un ou plusieurs mots comman\u00E7ant par des majuscules, s\u00E9par\u00E9s par des virgules. Facultatif.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 125)(25, "div", 126)(26, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Nature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_select_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r108.wordToEdit.partOfSpeech = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Pronom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Verbe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Adjectif");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Adverbe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Conjonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Interjection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Particule de fonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Particule de transformation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Mot d'esprit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Nature grammaticale (ou classe grammaticale).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 141)(52, "div", 125)(53, "div", 126)(54, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Cr\u00E9ateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_input_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r109.wordToEdit.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Cr\u00E9ateur du mot, celui qui l'a propos\u00E9 \u00E0 l'origine (pseudo Discord).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 125)(60, "div", 126)(61, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "textarea", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_textarea_ngModelChange_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r110.wordToEdit.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Description, \u00E9tymologie, exemples, r\u00E8gles grammaticales, lore, etc. Facultatif.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 144)(67, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, DibiDictComponent_div_34_div_1_div_10_div_10_p_68_Template, 2, 1, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, DibiDictComponent_div_34_div_1_div_10_div_10_p_69_Template, 2, 1, "p", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, DibiDictComponent_div_34_div_1_div_10_div_10_p_70_Template, 2, 1, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, DibiDictComponent_div_34_div_1_div_10_div_10_p_71_Template, 1, 0, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 11)(73, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r111.edit(word_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_34_div_1_div_10_div_10_Template_button_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r113.editWord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r78.wordToEdit.partOfSpeech)("ngModel", ctx_r78.wordToEdit.dibi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r78.wordToEdit.french);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r78.wordToEdit.english);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r78.wordToEdit.partOfSpeech)("ngModel", ctx_r78.wordToEdit.partOfSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r78.wordToEdit.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r78.wordToEdit.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r78.message.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "yellow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "red");
} }
function DibiDictComponent_div_34_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89)(1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DibiDictComponent_div_34_div_1_div_10_div_2_Template, 16, 11, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DibiDictComponent_div_34_div_1_div_10_div_3_Template, 7, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DibiDictComponent_div_34_div_1_div_10_div_4_Template, 7, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DibiDictComponent_div_34_div_1_div_10_div_5_Template, 7, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DibiDictComponent_div_34_div_1_div_10_div_6_Template, 7, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DibiDictComponent_div_34_div_1_div_10_div_7_Template, 8, 4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DibiDictComponent_div_34_div_1_div_10_div_8_Template, 3, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DibiDictComponent_div_34_div_1_div_10_div_9_Template, 3, 0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DibiDictComponent_div_34_div_1_div_10_div_10_Template, 77, 12, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", word_r62.dibi + "." + word_r62.french + "." + word_r62.date.toString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", word_r62.partOfSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", word_r62.french);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", word_r62.english);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", word_r62.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", word_r62.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", word_r62.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !word_r62.author && !word_r62.description && !word_r62.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r66.adminConnected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r66.editing === word_r62._id);
} }
function DibiDictComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79)(1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_div_34_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const word_r62 = restoredCtx.$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r115.openDetail(word_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6)(3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DibiDictComponent_div_34_div_1_div_5_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DibiDictComponent_div_34_div_1_div_6_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DibiDictComponent_div_34_div_1_div_9_Template, 4, 8, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DibiDictComponent_div_34_div_1_div_10_Template, 11, 10, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r62 = ctx.$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", "dibi " + word_r62.partOfSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](word_r62.dibi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.translate === "French" || ctx_r61.translate === "Both");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.translate === "English" || ctx_r61.translate === "Both");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", word_r62.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.detail === word_r62._id);
} }
function DibiDictComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DibiDictComponent_div_34_div_1_Template, 11, 6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r8.advancedSearch ? "list-advanced" : "list-simple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.filteredAllPages[ctx_r8.currentPage]);
} }
function DibiDictComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Chargement des mots Dibi...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DibiDictComponent {
    constructor(socket) {
        this.socket = socket;
        this.filteredDibiDict = []; // Seulement ceux filtrés
        this.filteredAllPages = []; // Ceux filtrés structurés par pages
        this.nbWordsPerPageDefalut = 100; // Nombre de mots affichés dans une page par défaut (car localStorage pour préf utilisateur)
        this.currentPage = 0; // Index de la page courante
        // Pour le filtrage des mots
        this.search = ''; // Input de recherche
        this.searchSimplified = ''; // String en minuscule et sans accents de la recherche
        this.searchOptions = {
            partsOfSpeech: {
                Noun: true,
                Pronoun: true,
                Verb: true,
                Adjective: true,
                Adverb: true,
                Conjonction: true,
                Interjection: true,
                FunctionParticule: true,
                TransformationParticule: true,
                SpiritWord: true
            },
            element: {
                Dibi: true,
                French: true,
                English: true,
                Author: false,
                Date: false,
                Description: false
            },
            doesNotContiain: {
                author: false,
                description: false,
                english: false,
            }
        };
        this.searchObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.regexSearch = false; // Si la recherche s'effectue en regex ou de manière classique
        this.advancedSearch = false;
        // Pour le tri des mots
        this.sortBy = 'date'; // Possibilité de trier par mot dibi, date, nature grammaticale, 
        this.sortOrder = 'cresc'; // cresc (ordre alphabétique) et decresc (ordre inverse alphabétique)
        this.message = { mes: '', color: '' }; // Message et sa couleur affichant le retour du serveur
        this.translate = 'French';
        this.detail = ''; // Permet d'ouvrir l'affichage détaillé des mots
        this.editing = ''; // Id du mot que l'on édite
        // Pipe du traitement de la recherche
        this.searchResult$ = this.searchObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(200), // Attente de 200 ms après que l'utilisateur ait arreté de taper sa racherche pour lancer le filtrage
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(mc => {
            let filtered = [];
            // Si la recherche est en expression régulière, vérification de la validité du regex saisi
            try {
                if (this.regexSearch) {
                    new RegExp(this.search);
                    this.setColorInputSearch('green'); // Si regex correcte, couleur de fond verte pour l'input de recherche
                }
                else {
                    this.setColorInputSearch('grey'); // Si recherche non regex, couleur classique
                }
                // Itération sur tous les mots pour les filtrer et les placer dans filteredDibiDict (seulements les mots triés)
                this.dibiDict.forEach(word => {
                    // Vérification que le mot à filtrer soit inclus dans parmis les options à gauche de la barre de recherche
                    if ((this.searchOptions.doesNotContiain.author && word.author) || (this.searchOptions.doesNotContiain.description && word.description) || (this.searchOptions.doesNotContiain.english && word.english)) {
                    }
                    else {
                        // Vérification que le mot à filtrer respecte l'expression saisie en barre de recherche
                        if (this.searchOptions.partsOfSpeech[word.partOfSpeech]) {
                            if (this.searchSimplified === '') {
                                filtered.push(word);
                            }
                            else {
                                let isThere = false;
                                if (this.searchOptions.element.Dibi) {
                                    if (this.isWordMatching(word.dibi)) {
                                        isThere = true;
                                    }
                                }
                                if (this.searchOptions.element.French) {
                                    if (this.isWordMatching(word.french)) {
                                        isThere = true;
                                    }
                                }
                                if (this.searchOptions.element.English) {
                                    if (word.english) {
                                        if (this.isWordMatching(word.english)) {
                                            isThere = true;
                                        }
                                    }
                                }
                                if (this.searchOptions.element.Author) {
                                    if (word.author) {
                                        if (this.isWordMatching(word.author)) {
                                            isThere = true;
                                        }
                                    }
                                }
                                if (this.searchOptions.element.Date) {
                                    if (word.date) {
                                        if (this.isWordMatching(word.date.toString())) {
                                            isThere = true;
                                        }
                                    }
                                }
                                if (this.searchOptions.element.Description) {
                                    if (word.description) {
                                        if (this.isWordMatching(word.description)) {
                                            isThere = true;
                                        }
                                    }
                                }
                                if (isThere) {
                                    filtered.push(word);
                                }
                            }
                        }
                    }
                });
                // Catch de l'erreur, le regex n'est pas valide
            }
            catch (e) {
                this.setColorInputSearch('red');
            }
            // Tri des mots
            this.sortDictionary(filtered, this.sortBy, this.sortOrder);
            // Organisation par pages
            this.buildPages();
            return filtered;
        }));
        // Subscribede l'observable
        this.searchResult$.subscribe();
    }
    ngOnInit() {
        // Check du localStorage pour voir la préférence de la recherche simple ou avancée
        window.localStorage.getItem('advancedSearch') ? this.advancedSearch = (window.localStorage.getItem('advancedSearch') === 'true' ? true : false) : false;
        // Check du localStorage pour voir les préférences de tri (pas de filtrage)
        window.localStorage.getItem('sortBy') ? this.sortBy = window.localStorage.getItem('sortBy') : {};
        window.localStorage.getItem('sortOrder') ? this.sortOrder = window.localStorage.getItem('sortOrder') : {};
        // Check du localStorage pour voir su une préférence en nombre de mots par page existe
        window.localStorage.getItem('nbWordsPerPage') ? this.nbWordsPerPage = parseInt(window.localStorage.getItem('nbWordsPerPage')) : this.nbWordsPerPage = this.nbWordsPerPageDefalut;
        // En réponse à la modification d'un mot
        this.socket.on('responseEditWord', (data) => {
            if (data.status === 0) {
                this.message = { mes: 'Succès', color: 'green' };
            }
            else {
                this.message = { mes: data.mes, color: 'red' };
            }
            // Clear du message au bout d'un certain délai
            setTimeout(() => { this.message = { mes: '', color: '' }; }, 10000);
        });
        // Mot bien supprimé
        this.socket.on('wordDeleted', () => {
            location.reload();
        });
    }
    /**
     * Si un changement Angular est détecté, et qu'il s'agit de @Input() dibiDict
     * Démarrage du traitement du dictionnaire (mise en minuscule des mots Dibi et lancement de l'observable de recherche)
     */
    ngOnChanges() {
        // Met en minuscule tous les mots Dibis (pour que les mots soit mieux lisibles dans le dico)
        if (this.dibiDict) {
            this.dibiDict.forEach(word => {
                word.dibi = word.dibi.toLowerCase();
                this.searchObservable.next();
            });
        }
    }
    /**
     * Vérifie si un élément de la recherche est présent dans certains champs d'un mot
     * Cette méthode sert pour le filtrage des mots par une recherche
     * Il est possible de rechercher un expression classique ou régulière (regex)
     */
    isWordMatching(elem) {
        let wordMatch = false;
        if (this.regexSearch) {
            if (elem.match(this.search)) {
                wordMatch = true;
            }
        }
        else {
            if ((0,src_app_services__WEBPACK_IMPORTED_MODULE_0__.removeAccents)(elem.toLowerCase()).includes(this.searchSimplified)) {
                wordMatch = true;
            }
        }
        return wordMatch;
    }
    /**
     * Modifie la couleur de fond de l'input de recherche pour indiquer que le regex est juste ou faux
     */
    setColorInputSearch(color) {
        let colorHex = '#555453';
        switch (color) {
            case 'red':
                colorHex = '#957371';
                break;
            case 'green':
                colorHex = '#759371';
                break;
            case 'blue':
                colorHex = '#757391';
                break;
        }
        let doc = document.getElementById('expression-search');
        doc ? doc.style.backgroundColor = colorHex : {};
    }
    /**
     * Sélection ou déselecitonne la recherche regex
     */
    toggleRegexSearch() {
        this.eachKeySearch(); // Lancement d'un next dans l'observable de filtrage
        if (this.regexSearch) {
            if (this.searchOptions.element.Dibi && !this.searchOptions.element.French && !this.searchOptions.element.English) {
                this.searchOptions.element.French = true;
                this.searchOptions.element.English = true;
            }
        }
        else {
            if (this.searchOptions.element.Dibi && this.searchOptions.element.French && this.searchOptions.element.English) {
                this.searchOptions.element.French = false;
                this.searchOptions.element.English = false;
            }
        }
        this.regexSearch = !this.regexSearch; // Toggle de la recherche regex
    }
    /**
     * Demande au serveur de supprimer un mot
     */
    delete(word) {
        if (!this.adminConnected) {
            alert('Administrateur non connecté.');
        }
        else {
            if (window.confirm('Confirmer la suppression')) {
                this.socket.emit('deleteWord', { word, pwd: this.pwd });
            }
        }
    }
    /**
     * Fonction déclenché quand l'utilisateur clique sur une ligne pour déployer les détails du mot
     */
    openDetail(word) {
        if (this.detail === word._id) {
            this.detail = '';
        }
        else {
            this.detail = word._id;
        }
    }
    /**
     * Quand l'utilisateur clique sur le bouton d'édition d'un mot, préparation de l'environnement d'édition
     */
    edit(word) {
        if (this.editing === word._id) {
            this.editing = '';
        }
        else {
            this.editing = word._id;
            this.oldWord = JSON.parse(JSON.stringify(word));
            this.wordToEdit = word;
        }
    }
    /**
     * Envoie au serveur de la demande de modification du mot édité
     */
    editWord() {
        if (!this.adminConnected) {
            alert('Administrateur non connecté.');
        }
        else {
            this.message = { mes: 'Enregistrement...', color: 'yellow' };
            this.socket.emit('editWord', { wordToEdit: this.wordToEdit, oldWord: this.oldWord, pwd: this.pwd });
        }
    }
    /**
     * À chaque touche cliqué sur l'input de recherche, envoie d'un next dans l'Observable searchObservable
     */
    eachKeySearch() {
        // Remove des accents de l'expression recherchée
        this.searchSimplified = (0,src_app_services__WEBPACK_IMPORTED_MODULE_0__.removeAccents)(this.search.toLowerCase());
        // Suppression des espaces avant et après
        this.searchSimplified = this.searchSimplified.trim();
        // Next sur l'observable de filtrage de tous les mots
        this.searchObservable.next(this.searchSimplified);
    }
    /**
     * Vide la barre de recherche
     */
    emptySearch() {
        this.search = '';
        this.searchSimplified = '';
        this.searchObservable.next(this.searchSimplified);
    }
    /**
     * Sélectionne tous ou aucun des cases à cocher pour la nature des mots
     */
    allPartsOfSpeech(b) {
        for (let [key, value] of Object.entries(this.searchOptions.partsOfSpeech)) {
            this.searchOptions.partsOfSpeech[key] = b;
        }
    }
    /**
     * Quand l'utilisateur clique sur un label pour trier par (mot dibi, date d'ajout, nature, ordre normal, inverse)
     */
    setSort(sortBy) {
        if (this.sortBy === sortBy) {
            if (this.sortOrder === 'cresc') {
                this.sortOrder = 'decresc';
                window.localStorage.setItem('sortOrder', 'decresc');
            }
            else {
                this.sortOrder = 'cresc';
                window.localStorage.setItem('sortOrder', 'cresc');
            }
        }
        else {
            this.sortOrder = 'cresc';
            window.localStorage.setItem('sortOrder', 'cresc');
        }
        this.sortBy = sortBy;
        window.localStorage.setItem('sortBy', sortBy);
        this.sortDictionary(this.filteredDibiDict, this.sortBy, this.sortOrder);
        this.buildPages();
    }
    /**
    * Tri tous les mots dans le dictionnaire selon un critère et un ordre
    * Puis lance le calcul d'affichage en fonction des options de tri
    */
    sortDictionary(list, sortBy, sortOrder) {
        if (sortBy === 'date') { // Tri par date (de type Date)
            list.sort((a, b) => {
                if (!a.date && !b.date) {
                    return 0;
                }
                else if (!a.date) {
                    if (sortOrder === 'cresc') {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else if (!b.date) {
                    if (sortOrder === 'cresc') {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    if (a.date > b.date) {
                        if (sortOrder === 'cresc') {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    }
                    else if (a.date < b.date) {
                        if (sortOrder === 'cresc') {
                            return 1;
                        }
                        else {
                            return -1;
                        }
                    }
                    else {
                        return 0;
                    }
                }
            });
        }
        else { // Tri par élément de type string
            list.sort((a, b) => {
                const aComparable = (0,src_app_services__WEBPACK_IMPORTED_MODULE_0__.removeAccents)(a[sortBy].toLowerCase());
                const bComparable = (0,src_app_services__WEBPACK_IMPORTED_MODULE_0__.removeAccents)(b[sortBy].toLowerCase());
                if (aComparable > bComparable) {
                    if (sortOrder === 'cresc') {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else if (aComparable < bComparable) {
                    if (sortOrder === 'cresc') {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    return 0;
                }
            });
        }
        this.filteredDibiDict = list;
        // this.eachKeySearch();
    }
    /**
     * À partir de la liste des mots filtrés et triés, construit 1 à n pages pour limiter le nombre de mots affichés en même temps
     */
    buildPages() {
        this.currentPage = 0;
        this.filteredAllPages = []; // Vidage de la liste trié
        let i = 1; // Incrément pour compter le nombre de mots par page
        let page = 0; // Page courante pour ajouter les mots
        this.filteredAllPages[page] = [];
        this.filteredDibiDict.forEach(word => {
            this.filteredAllPages[page].push(word);
            if (i === this.nbWordsPerPage) {
                i = 1;
                page++;
                this.filteredAllPages[page] = [];
            }
            else {
                i++;
            }
        });
    }
    /**
    * Change de page, 4 boutons, 4 comportements
    */
    changePage(action) {
        if (action === 'fullLeft') {
            this.currentPage = 0;
        }
        else if (action === 'left') {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        }
        else if (action === 'right') {
            if (this.currentPage < this.filteredAllPages.length - 1) {
                this.currentPage++;
            }
        }
        else if (action === 'fullRight') {
            this.currentPage = this.filteredAllPages.length - 1;
        }
    }
    /**
     * Modifie le nombre de mots affichés par page
     */
    editNbWordsPerPage() {
        const nb = parseInt(window.prompt('Nombre de mots affichés par page'));
        if (nb > 0) { // Pas moins d'un mot par page
            this.nbWordsPerPage = nb;
            window.localStorage.setItem('nbWordsPerPage', nb.toString());
            this.buildPages();
        }
    }
    /**
     * Ouvre ou ferme les options avancées de recherche de mots
     */
    toggleAdvancedSearch(b) {
        window.localStorage.setItem('advancedSearch', b.toString());
        this.advancedSearch = b;
    }
}
DibiDictComponent.ɵfac = function DibiDictComponent_Factory(t) { return new (t || DibiDictComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket)); };
DibiDictComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DibiDictComponent, selectors: [["app-dibi-dict"]], inputs: { dibiDict: "dibiDict", adminConnected: "adminConnected", pwd: "pwd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 36, vars: 13, consts: [[1, "body"], [1, "container"], [1, "top"], ["class", "simple-top", 4, "ngIf"], ["class", "advanced-top", 4, "ngIf"], [1, "row-pages"], [1, "left"], ["src", "./assets/angle-double-left-solid.svg", 3, "click"], ["src", "./assets/angle-left-solid.svg", 3, "click"], [1, "middle"], [3, "click"], [1, "right"], ["src", "./assets/angle-right-solid.svg", 3, "click"], ["src", "./assets/angle-double-right-solid.svg", 3, "click"], [1, "row-order"], ["title", "Trier par mot Dibi", 1, "label-button-sort", 3, "click"], ["src", "./assets/chevron-up-solid.svg", 4, "ngIf"], ["src", "./assets/chevron-down-solid.svg", 4, "ngIf"], ["title", "Trier par mot Fran\u00E7ais>", 1, "label-button-sort", "label-button-sort-fr", 3, "click"], ["title", "Trier par date d'ajout", 1, "label-button-sort", 3, "click"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "simple-top"], ["id", "expression-search", 1, "input-and-cross"], ["type", "text", "placeholder", "Rechercher", 3, "ngModel", "ngModelChange", "input"], ["title", "Effacer la recherche", 1, "cross", 3, "click"], ["src", "./assets/times-solid.svg", 1, "empty-search"], [1, "toggle-advanced-search", 3, "click"], ["src", "assets/ellipsis-solid.svg", "alt", "Ic\u00F4ne recherche avanc\u00E9e", 1, "advanced-search-icon"], [1, "advanced-top"], [1, "all-none-partOfSpeech"], [1, "all-none", 3, "click"], ["title", "S\u00E9lectionner toutes les natures grammaticales", 3, "click"], ["title", "S\u00E9lectionner aucune nature grammaticale", 3, "click"], [1, "partsOfSpeech"], [1, "partOfSpeech", 3, "click"], ["id", "Noun", "type", "checkbox", 1, "Noun", 3, "ngModel", "ngModelChange"], ["for", "Noun", 1, "Noun"], ["id", "Pronoun", "type", "checkbox", 1, "Pronoun", 3, "ngModel", "ngModelChange"], ["for", "Pronoun", 1, "Pronoun"], ["id", "Adjective", "type", "checkbox", 1, "Adjective", 3, "ngModel", "ngModelChange"], ["for", "Adjective", 1, "Adjective"], ["id", "Verb", "type", "checkbox", 1, "Verb", 3, "ngModel", "ngModelChange"], ["for", "Verb", 1, "Verb"], ["id", "Adverb", "type", "checkbox", 1, "Adverb", 3, "ngModel", "ngModelChange"], ["for", "Adverb", 1, "Adverb"], ["id", "FunctionParticule", "type", "checkbox", 1, "FunctionParticule", 3, "ngModel", "ngModelChange"], ["for", "FunctionParticule", 1, "FunctionParticule"], ["id", "TransformationParticule", "type", "checkbox", 1, "TransformationParticule", 3, "ngModel", "ngModelChange"], ["for", "TransformationParticule", 1, "TransformationParticule"], ["id", "SpiritWord", "type", "checkbox", 1, "SpiritWord", 3, "ngModel", "ngModelChange"], ["for", "SpiritWord", 1, "SpiritWord"], ["id", "Conjonction", "type", "checkbox", 1, "Conjonction", 3, "ngModel", "ngModelChange"], ["for", "Conjonction", 1, "Conjonction"], ["id", "Interjection", "type", "checkbox", 1, "Interjection", 3, "ngModel", "ngModelChange"], ["for", "Interjection", 1, "Interjection"], [1, "search-input"], [1, "search-and-regex-and-advanced-toggle"], ["title", "Recherche expression r\u00E9guli\u00E8re", 3, "className", "click"], [1, "options-search"], [1, "element", 3, "click"], ["id", "Dibi", "type", "checkbox", 1, "Dibi", 3, "ngModel", "ngModelChange"], ["for", "Dibi", 1, "label-option-search"], ["id", "French", "type", "checkbox", 1, "French", 3, "ngModel", "ngModelChange"], ["for", "French", 1, "label-option-search"], ["id", "English", "type", "checkbox", 1, "English", 3, "ngModel", "ngModelChange"], ["for", "English", 1, "label-option-search"], ["id", "Author", "type", "checkbox", 1, "Author", 3, "ngModel", "ngModelChange"], ["for", "Author", 1, "label-option-search"], ["id", "noAuthor", "type", "checkbox", 1, "noAuthor", 3, "ngModel", "ngModelChange"], ["for", "noAuthor", 1, "noAuthor"], ["id", "noDescription", "type", "checkbox", 1, "noDescription", 3, "ngModel", "ngModelChange"], ["for", "noDescription", 1, "noDescription"], ["id", "noEnglish", "type", "checkbox", 1, "noEnglish", 3, "ngModel", "ngModelChange"], ["for", "noEnglish", 1, "noEnglish"], ["src", "./assets/chevron-up-solid.svg"], ["src", "./assets/chevron-down-solid.svg"], [3, "ngClass"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "view", 3, "click"], [3, "className"], ["class", "french", 4, "ngIf"], ["class", "english", 4, "ngIf"], ["class", "date", 3, "title", 4, "ngIf"], ["class", "details", 3, "id", 4, "ngIf"], [1, "french"], [1, "english"], [1, "date", 3, "title"], [1, "details", 3, "id"], [1, "block-detail-if-screen-too-small"], ["class", "block-detail", 4, "ngIf"], ["class", "buttons-detail", 4, "ngIf"], ["class", "edit", 4, "ngIf"], [1, "block-detail"], [1, "label"], [1, "value"], [3, "ngSwitch"], ["class", "partOfSpeech-small-screen Noun", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen Pronoun", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen Verb", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen Adjective", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen Adverb", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen Conjonction", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen Interjection", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen FunctionParticule", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen TransformationParticule", 4, "ngSwitchCase"], ["class", "partOfSpeech-small-screen SpiritWord", 4, "ngSwitchCase"], [1, "partOfSpeech-small-screen", "Noun"], [1, "partOfSpeech-small-screen", "Pronoun"], [1, "partOfSpeech-small-screen", "Verb"], [1, "partOfSpeech-small-screen", "Adjective"], [1, "partOfSpeech-small-screen", "Adverb"], [1, "partOfSpeech-small-screen", "Conjonction"], [1, "partOfSpeech-small-screen", "Interjection"], [1, "partOfSpeech-small-screen", "FunctionParticule"], [1, "partOfSpeech-small-screen", "TransformationParticule"], [1, "partOfSpeech-small-screen", "SpiritWord"], [1, "no-details"], [1, "buttons-detail"], ["src", "./assets/trash-solid.svg", "title", "Supprimer", 3, "click"], ["src", "./assets/pen-solid.svg", "title", "Modifier", 3, "click"], [1, "edit"], [1, "form-new-word"], [1, "mandatory"], [1, "block"], [1, "label-input"], ["type", "text", 3, "className", "ngModel", "ngModelChange"], [1, "help"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "className", "ngModel", "ngModelChange"], ["value", "Noun"], ["value", "Pronoun"], ["value", "Verb"], ["value", "Adjective"], ["value", "Adverb"], ["value", "Conjonction"], ["value", "Interjection"], ["value", "FunctionParticule"], ["value", "TransformationParticule"], ["value", "SpiritWord"], [1, "facultative"], ["type", "text", "placeholder", "pseudo#code", 3, "ngModel", "ngModelChange"], ["name", "new-word-description", "id", "new-word-description", "rows", "5", 3, "ngModel", "ngModelChange"], [1, "buttons"], ["class", "green-mes", 4, "ngSwitchCase"], ["class", "yellow-mes", 4, "ngSwitchCase"], ["class", "red-mes", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "green-mes"], [1, "yellow-mes"], [1, "red-mes"]], template: function DibiDictComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DibiDictComponent_div_3_Template, 7, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DibiDictComponent_div_4_Template, 79, 17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_img_click_7_listener() { return ctx.changePage("fullLeft"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_img_click_8_listener() { return ctx.changePage("left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_span_click_10_listener() { return ctx.editNbWordsPerPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11)(13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_img_click_13_listener() { return ctx.changePage("right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_img_click_14_listener() { return ctx.changePage("fullRight"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14)(16, "div", 6)(17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_div_click_17_listener() { return ctx.setSort("dibi"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Mot Dibi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DibiDictComponent_img_20_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DibiDictComponent_img_21_Template, 1, 0, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_div_click_22_listener() { return ctx.setSort("french"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DibiDictComponent_img_25_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DibiDictComponent_img_26_Template, 1, 0, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11)(29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DibiDictComponent_Template_div_click_29_listener() { return ctx.setSort("date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Date ajout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DibiDictComponent_img_32_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DibiDictComponent_img_33_Template, 1, 0, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DibiDictComponent_div_34_Template, 2, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, DibiDictComponent_span_35_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.advancedSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advancedSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.filteredDibiDict.length === 0 ? "0" : ctx.currentPage * ctx.nbWordsPerPage + 1, " - ", (ctx.currentPage + 1) * ctx.nbWordsPerPage > ctx.filteredDibiDict.length ? ctx.filteredDibiDict.length : (ctx.currentPage + 1) * ctx.nbWordsPerPage, " sur ", ctx.filteredDibiDict.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortBy === "dibi" && ctx.sortOrder === "cresc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortBy === "dibi" && ctx.sortOrder === "decresc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortBy === "french" && ctx.sortOrder === "cresc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortBy === "french" && ctx.sortOrder === "decresc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortBy === "date" && ctx.sortOrder === "cresc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sortBy === "date" && ctx.sortOrder === "decresc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredAllPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.filteredDibiDict);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 6px 6px 0px 6px;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 1200px;\n  min-width: 250px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .simple-top[_ngcontent-%COMP%] {\n  display: flex;\n  height: 42px;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .simple-top[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%] {\n  width: calc(100% - 42px - 6px);\n  height: calc(100% - 6px);\n  border-radius: 21px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .simple-top[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  font-size: 16px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .simple-top[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%] {\n  margin-right: 14px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .simple-top[_ngcontent-%COMP%]   .toggle-advanced-search[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 36px;\n  border-radius: 18px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%] {\n  display: flex;\n  height: 94px;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 50%;\n  border-right: 1px solid #555453;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .all-none-partOfSpeech[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 52px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .all-none-partOfSpeech[_ngcontent-%COMP%]   .all-none[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  padding: 3px 0px 3px 0px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .all-none-partOfSpeech[_ngcontent-%COMP%]   .all-none[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .partsOfSpeech[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding: 0px 12px 0px 12px;\n  width: calc(100% - 52px);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .partOfSpeech[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 3px 6px 3px 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .partOfSpeech[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  margin-right: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .partOfSpeech[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 12px;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-and-regex-and-advanced-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-and-regex-and-advanced-toggle[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%] {\n  width: calc(100% - 28px - 28px - 6px - 6px);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-and-regex-and-advanced-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 28px;\n  margin-left: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-and-regex-and-advanced-toggle[_ngcontent-%COMP%]   .regexOn[_ngcontent-%COMP%] {\n  background-color: #7573b1;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .options-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 12px 0px 0px 0px;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .options-search[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 3px 6px 3px 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .options-search[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .advanced-top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .options-search[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   .label-option-search[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-left: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%] {\n  display: flex;\n  height: 28px;\n  background-color: #555453;\n  border-radius: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: calc(100% - 12px - 23px);\n  background-color: transparent;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 12px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .input-and-cross[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 14px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .toggle-advanced-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #555453;\n  border-radius: 6px;\n  width: 28px;\n  height: 28px;\n  margin-left: 6px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .toggle-advanced-search[_ngcontent-%COMP%]   .advanced-search-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 22px;\n  width: 100%;\n  overflow: auto;\n  border-top: 1px solid #555453;\n  font-size: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  margin: 0px 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: #555351;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-pages[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-order[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 22px;\n  width: 100%;\n  overflow: auto;\n  border-top: 1px solid #555453;\n  padding-right: 12px;\n  font-size: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-order[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 75px);\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-order[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 0;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-order[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0px 12px;\n  width: 75px;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-order[_ngcontent-%COMP%]   .label-button-sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-order[_ngcontent-%COMP%]   .label-button-sort[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  height: 16px;\n  width: 16px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row-order[_ngcontent-%COMP%]   .label-button-sort-fr[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%] {\n  height: calc(100% - 22px - 22px - 94px);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%] {\n  height: calc(100% - 22px - 22px - 42px);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: auto;\n  border-top: 1px solid #555453;\n  padding-top: 3px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\n  display: flex;\n  height: 30px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 75px);\n  overflow: hidden;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .dibi[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .dibi[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px 24px 0px 6px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .french[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .english[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .french[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .english[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ddd;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 0;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 12px;\n  padding-right: 12px;\n  padding-bottom: 0px;\n  padding-left: calc(12px * 2);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail-if-screen-too-small[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail-if-screen-too-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 12px;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  width: calc(100% - 100px);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .partOfSpeech-small-screen[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .partOfSpeech-small-screen[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  word-break: break-word;\n  color: #ddd;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .no-details[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .block-detail[_ngcontent-%COMP%]   .no-details[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #bbb;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .buttons-detail[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .buttons-detail[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0px 0px 12px 0px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .buttons-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .buttons-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  margin-left: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #555453;\n  border-radius: 6px;\n  padding: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 18px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  margin-right: 12px;\n  font-size: 13px;\n  color: #ccc;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .green-mes[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .green-mes[_ngcontent-%COMP%] {\n  color: #8e8;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .yellow-mes[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .yellow-mes[_ngcontent-%COMP%] {\n  color: #ee8;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .red-mes[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .red-mes[_ngcontent-%COMP%] {\n  color: #e88;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-simple[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover, .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list-advanced[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover {\n  background-color: #302f2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYmktZGljdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1hcmlvJTIwVklFSUxMRURFTlRcXERlc2t0b3BcXE1FQU5cXERpcnR5UGF6dVxcY2xpZW50XFxzcmNcXGFwcFxcbWFpblxcZGliaS1kaWN0XFxkaWJpLWRpY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM5Qko7QURnQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUM5QlI7QURnQ1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQzlCWjtBRGdDWTtFQUNJLGFBQUE7RUFDQSxZQWpESTtFQWtESixXQUFBO0FDOUJoQjtBRGdDZ0I7RUFDSSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUM5QnBCO0FEZ0NvQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQzlCeEI7QURpQ29CO0VBQ0ksa0JBQUE7QUMvQnhCO0FEbUNnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNqQ3BCO0FEcUNZO0VBQ0ksYUFBQTtFQUNBLFlBM0VNO0VBNEVOLFdBQUE7QUNuQ2hCO0FEcUNnQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBekVGO0VBMEVFLCtCQTdFWDtFQThFVyxjQUFBO0FDbkNwQjtBRHFDb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBeEZNO0FDcUQ5QjtBRHFDd0I7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbkM1QjtBRHFDNEI7RUFDSSxlQUFBO0FDbkNoQztBRHdDb0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDdEN4QjtBRHlDb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUN2Q3hCO0FEeUN3QjtFQUNJLFlBOUZaO0VBK0ZZLFdBL0ZaO0VBZ0dZLGlCQUFBO0FDdkM1QjtBRDBDd0I7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDeEM1QjtBRDZDZ0I7RUFDSSxVQTVIRDtFQTZIQyxrQkFwSVY7RUFxSVUsY0FBQTtBQzNDcEI7QUQ4Q3dCO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDNUM1QjtBRDhDNEI7RUFDSSwyQ0FBQTtBQzVDaEM7QUQrQzRCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzdDaEM7QURnRDRCO0VBQ0kseUJBQUE7QUM5Q2hDO0FEa0R3QjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ2hENUI7QURrRDRCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDaERoQztBRGtEZ0M7RUFDSSxZQW5KcEI7RUFvSm9CLFdBcEpwQjtBQ29HaEI7QURtRGdDO0VBQ0ksZ0JBMUo3QjtFQTJKNkIsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2pEcEM7QUR5RFk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBN0xBO0FDc0loQjtBRHlEZ0I7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ3ZEcEI7QUQwRGdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBek1WO0VBME1VLGVBQUE7QUN4RHBCO0FEMERvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDeER4QjtBRDZEWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkF2TkE7RUF3TkEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMzRGhCO0FENkRnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDM0RwQjtBRGdFUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBMU9IO0VBMk9HLGVBQUE7QUM5RFo7QURnRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQzlEaEI7QURnRWdCO0VBQ0ksa0JBclBWO0FDdUxWO0FEa0VZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNoRWhCO0FEa0VnQjtFQUNJLGdCQUFBO0FDaEVwQjtBRG1FZ0I7RUFDSSxlQUFBO0FDakVwQjtBRG9FZ0I7O0VBRUkseUJBQUE7QUNsRXBCO0FEc0VZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNwRWhCO0FEc0VnQjtFQUNJLGlCQWxSVjtBQzhNVjtBRHdFWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3RFaEI7QUQwRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFqU0g7RUFrU0csbUJBcFNGO0VBcVNFLGVBQUE7QUN4RVo7QUQwRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFoU0M7RUFpU0QsbUJBQUE7QUN4RWhCO0FEMkVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUF0U0c7RUF1U0gsbUJBQUE7QUN6RWhCO0FENEVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBOVNFO0VBK1NGLG1CQUFBO0FDMUVoQjtBRDZFWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMzRWhCO0FENkVnQjtFQUNJLGlCQXBVVjtFQXFVVSxZQUFBO0VBQ0EsV0FBQTtBQzNFcEI7QUQrRVk7RUFDSSxpQkEzVU47QUM4UFY7QURpRlE7RUFDSSx1Q0FBQTtBQy9FWjtBRGtGUTtFQUNJLHVDQUFBO0FDaEZaO0FEbUZROztFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBM1ZIO0VBNFZHLGdCQUFBO0FDakZaO0FEbUZZOztFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ2hGaEI7QURrRmdCOztFQUNJLGFBQUE7RUFDQSxZQXBWRjtFQXFWRSxlQUFBO0FDL0VwQjtBRGlGb0I7O0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBbFdQO0VBbVdPLGdCQUFBO0FDOUV4QjtBRGdGd0I7O0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzdFNUI7QURnRndCOzs7O0VBRUksZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUM1RTVCO0FEbUZvQjs7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQTNYTDtBQzJTbkI7QURrRndCOztFQUNJLFdBQUE7RUFDQSxlQUFBO0FDL0U1QjtBRG9GZ0I7O0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBbFpWO0VBbVpVLG1CQW5aVjtFQW9aVSxtQkFBQTtFQUNBLDRCQUFBO0FDakZwQjtBRG1Gb0I7O0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDaEZ4QjtBRG1Gb0I7O0VBQ0ksYUFBQTtFQUNBLG1CQTlaZDtFQStaYyxtQkFBQTtBQ2hGeEI7QURrRndCOztFQUNJLGFBQUE7RUFDQSxZQXBaRjtBQ3FVMUI7QURpRjRCOztFQUNJLGVBQUE7QUM5RWhDO0FEa0Z3Qjs7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUMvRTVCO0FEaUY0Qjs7RUFDSSxlQUFBO0FDOUVoQztBRGlGNEI7O0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQzlFaEM7QURrRndCOztFQUNJLGVBQUE7RUFDQSxXQUFBO0FDL0U1QjtBRG1Gb0I7O0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNoRnhCO0FEa0Z3Qjs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkF4Y2xCO0FDeVhWO0FEbUZvQjs7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkEvY2Q7QUMrWFY7QURrRndCOztFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQWxkbkI7RUFtZG1CLGtCQXBkWjtFQXFkWSxhQUFBO0FDL0U1QjtBRGlGNEI7O0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBM2R0QjtBQzZZVjtBRGdGZ0M7O0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDN0VwQztBRCtFb0M7O0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFwZTlCO0FDd1pWO0FEK0VvQzs7Ozs7O0VBR0ksVUFBQTtBQzFFeEM7QUQ4RWdDOztFQUNJLGVBQUE7RUFDQSxrQkFoZjFCO0VBaWYwQixlQUFBO0VBQ0EsV0FBQTtBQzNFcEM7QURxRjRCOztFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDbEZoQztBRG9GZ0M7O0VBQ0ksV0FBQTtBQ2pGcEM7QURvRmdDOztFQUNJLFdBQUE7QUNqRnBDO0FEb0ZnQzs7RUFDSSxXQUFBO0FDakZwQztBRHFGb0M7O0VBQ0ksaUJBL2dCOUI7QUM2YlY7QUQyRlk7O0VBQ0kseUJBL2hCSztBQ3VjckIiLCJmaWxlIjoiZGliaS1kaWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnLWNvbG9yLXJvdy1ob3ZlcjogIzMwMmYyZTsgLy8gQ291bGV1ciBkZSBmb25kIGRlcyBib3V0b25zIGhvdmVyXHJcblxyXG4kc2ltcGxlLXRvcC1oZWlnaHQ6IDQycHg7XHJcbiRhZHZhbmNlZC10b3AtaGVpZ2h0OiA5NHB4O1xyXG4kYWxsLW5vbmUtcGFydE9mU3BlZWNoLXdpZHRoOiA1MnB4O1xyXG5cclxuJHBhZGRpbmc6IDEycHg7XHJcbiRib3JkZXItcmFkaXVzOiA2cHg7XHJcbiRib3JkZXI6IDFweCBzb2xpZCAjNTU1NDUzO1xyXG5cclxuLy8gRGFucyBsYSBiYXJyZSBkZSByZWNoZXJjaGUgOiBwb3VyY2VudGFnZSBkZSBsYSBwYXJ0aWUgZ2F1Y2hlLCBtaWxpZXUgZXQgZHJvaXRlXHJcbiRsZWZ0LW1lbnUtd2lkdGg6IDUwJTtcclxuLy8gJG1pZGRsZS1tZW51LXdpZHRoOiA1MCU7XHJcbiRyaWdodC1tZW51LXdpZHRoOiA1MCU7XHJcblxyXG4vLyBQb3VyIGNoYXF1ZSBsaWduZSBkZSBsYSBsaXN0ZSBkZXMgbW90cyA6IHBvdXJjZW50YWdlIGRlIGxhIHBhcnRpZSBnYXVjaGUsIHBhcnRpZSBkdSBtaWxpZXVcclxuJGxlZnQtcm93LXdpZHRoOiBjYWxjKDEwMCUgLSA3NXB4KTtcclxuJG1pZGRsZS1yb3ctd2lkdGg6IDA7XHJcbiRyaWdodC1yb3ctd2lkdGg6IDc1cHg7XHJcblxyXG4vLyBMYXJnZXVyIGR1IGxhYmVsIChjcsOpYXRldXIsIGRlc2NyaXB0aW9uKVxyXG4kbGFiZWwtZGV0YWlsLXZpZXctd2lkdGg6IDEwMHB4O1xyXG5cclxuLy8gSGF1dGV1ciBkJ3VuZSBsaWduZVxyXG4kcm93LXZpZXctaGVpZ2h0OiAzMHB4O1xyXG5cclxuLy8gdGV4dGVzXHJcbiRib2xkOiA2MDA7XHJcblxyXG4kc2l6ZS1jaGVja2JveDogMTJweDtcclxuXHJcbi5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA2cHggNnB4IDBweCA2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcblxyXG4gICAgICAgIC50b3Age1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC5zaW1wbGUtdG9wIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRzaW1wbGUtdG9wLWhlaWdodDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dC1hbmQtY3Jvc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MnB4IC0gNnB4KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jcm9zcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZS1hZHZhbmNlZC1zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWR2YW5jZWQtdG9wIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRhZHZhbmNlZC10b3AtaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICRsZWZ0LW1lbnUtd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWxsLW5vbmUtcGFydE9mU3BlZWNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJGFsbC1ub25lLXBhcnRPZlNwZWVjaC13aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbGwtbm9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGFydHNPZlNwZWVjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICRwYWRkaW5nIDBweCAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JGFsbC1ub25lLXBhcnRPZlNwZWVjaC13aWR0aH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcnRPZlNwZWVjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDZweCAzcHggNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkc2l6ZS1jaGVja2JveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkc2l6ZS1jaGVja2JveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICRyaWdodC1tZW51LXdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWFuZC1yZWdleC1hbmQtYWR2YW5jZWQtdG9nZ2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWFuZC1jcm9zcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHggLSAyOHB4IC0gNnB4IC0gNnB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWdleE9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3M2IxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9ucy1zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAkcGFkZGluZyAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA2cHggM3B4IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRzaXplLWNoZWNrYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHNpemUtY2hlY2tib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtb3B0aW9uLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5wdXQtYW5kLWNyb3NzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NDUzO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gI3skcGFkZGluZ30gLSAyM3B4KTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY3Jvc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRvZ2dsZS1hZHZhbmNlZC1zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU0NTM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuYWR2YW5jZWQtc2VhcmNoLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdy1wYWdlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICRib3JkZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5taWRkbGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgIC5ibG9jay1pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jbGlja2FibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpob3ZlcixcclxuICAgICAgICAgICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1MzUxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3ctb3JkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRsZWZ0LXJvdy13aWR0aDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5taWRkbGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJG1pZGRsZS1yb3ctd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJHJpZ2h0LXJvdy13aWR0aDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYWJlbC1idXR0b24tc29ydCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYWJlbC1idXR0b24tc29ydC1mciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saXN0LWFkdmFuY2VkIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMnB4IC0gMjJweCAtICRhZHZhbmNlZC10b3AtaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saXN0LXNpbXBsZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjJweCAtIDIycHggLSAkc2ltcGxlLXRvcC1oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3Qtc2ltcGxlLFxyXG4gICAgICAgIC5saXN0LWFkdmFuY2VkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAkYm9yZGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG5cclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAudmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRyb3ctdmlldy1oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkbGVmdC1yb3ctd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGliaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAyNHB4IDBweCA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcmVuY2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lbmdsaXNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1pZGRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJG1pZGRsZS1yb3ctd2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYygjeyRwYWRkaW5nfSAqIDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYmxvY2stZGV0YWlsLWlmLXNjcmVlbi10b28tc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJsb2NrLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJGxhYmVsLWRldGFpbC12aWV3LXdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gI3skbGFiZWwtZGV0YWlsLXZpZXctd2lkdGh9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFydE9mU3BlZWNoLXNtYWxsLXNjcmVlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubm8tZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JiYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMtZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4ICRwYWRkaW5nIDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmVkaXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1uZXctd29yZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJGJvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkcGFkZGluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYW5kYXRvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mYWN1bHRhdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ncmVlbi1tZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhlODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC55ZWxsb3ctbWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlZTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkLW1lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTg4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJvdzpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3Itcm93LWhvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbi8vICAgICAuYm9keSB7XHJcbi8vICAgICAgICAgLmNvbnRhaW5lciB7XHJcbi8vICAgICAgICAgICAgIC50b3Age1xyXG4vLyAgICAgICAgICAgICAgICAgLmxlZnQge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLmFsbC1ub25lLXBhcnRPZlNwZWVjaCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5hbGwtbm9uZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNnB4IDNweCA2cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC5wYXJ0c09mU3BlZWNoIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnJvdy1wYWdlcyB7XHJcbi8vICAgICAgICAgICAgICAgICAubGVmdCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLm1pZGRsZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLmRlc2Mtd29yZCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC5ibG9jay1pbmZvIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggNnB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC5yaWdodCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnJvdy1vcmRlciB7XHJcbi8vICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmxlZnQge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5taWRkbGUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC5yaWdodCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLmxhYmVsLWJ1dHRvbi1zb3J0IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxpc3Qge1xyXG4vLyAgICAgICAgICAgICAgICAgLnJvdyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLnZpZXcge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAubGVmdCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAubWlkZGxlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLnJpZ2h0IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLmJsb2NrLWRldGFpbC1pZi1zY3JlZW4tdG9vLXNtYWxsIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5lZGl0IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLW5ldy13b3JkIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmxvY2sge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtaW5wdXQge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRwYWRkaW5nO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwICFpbXBvcnRhbnQ7IC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogLXdlYmtpdC1wcmUtd3JhcDsgLyogQ2hyb21lICYgU2FmYXJpICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgLyogT3BlcmEgNC02ICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwOyAvKiBPcGVyYSA3ICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKiBDU1MzICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkOyAvKiBJbnRlcm5ldCBFeHBsb3JlciA1LjUrICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIiwiLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA2cHggNnB4IDBweCA2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG4uYm9keSAuY29udGFpbmVyIC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuc2ltcGxlLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50b3AgLnNpbXBsZS10b3AgLmlucHV0LWFuZC1jcm9zcyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MnB4IC0gNnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xuICBib3JkZXItcmFkaXVzOiAyMXB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5zaW1wbGUtdG9wIC5pbnB1dC1hbmQtY3Jvc3MgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuc2ltcGxlLXRvcCAuaW5wdXQtYW5kLWNyb3NzIC5jcm9zcyB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuc2ltcGxlLXRvcCAudG9nZ2xlLWFkdmFuY2VkLXNlYXJjaCB7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC50b3AgLmFkdmFuY2VkLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogOTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50b3AgLmFkdmFuY2VkLXRvcCAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTU1NDUzO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuYWR2YW5jZWQtdG9wIC5sZWZ0IC5hbGwtbm9uZS1wYXJ0T2ZTcGVlY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA1MnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5hZHZhbmNlZC10b3AgLmxlZnQgLmFsbC1ub25lLXBhcnRPZlNwZWVjaCAuYWxsLW5vbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5hZHZhbmNlZC10b3AgLmxlZnQgLmFsbC1ub25lLXBhcnRPZlNwZWVjaCAuYWxsLW5vbmUgbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9keSAuY29udGFpbmVyIC50b3AgLmFkdmFuY2VkLXRvcCAubGVmdCAucGFydHNPZlNwZWVjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMHB4IDEycHggMHB4IDEycHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MnB4KTtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuYWR2YW5jZWQtdG9wIC5sZWZ0IC5wYXJ0T2ZTcGVlY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDNweCA2cHggM3B4IDZweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuYWR2YW5jZWQtdG9wIC5sZWZ0IC5wYXJ0T2ZTcGVlY2ggaW5wdXQge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuYWR2YW5jZWQtdG9wIC5sZWZ0IC5wYXJ0T2ZTcGVlY2ggbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuYWR2YW5jZWQtdG9wIC5yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYm9keSAuY29udGFpbmVyIC50b3AgLmFkdmFuY2VkLXRvcCAucmlnaHQgLnNlYXJjaC1pbnB1dCAuc2VhcmNoLWFuZC1yZWdleC1hbmQtYWR2YW5jZWQtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5hZHZhbmNlZC10b3AgLnJpZ2h0IC5zZWFyY2gtaW5wdXQgLnNlYXJjaC1hbmQtcmVnZXgtYW5kLWFkdmFuY2VkLXRvZ2dsZSAuaW5wdXQtYW5kLWNyb3NzIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHggLSAyOHB4IC0gNnB4IC0gNnB4KTtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuYWR2YW5jZWQtdG9wIC5yaWdodCAuc2VhcmNoLWlucHV0IC5zZWFyY2gtYW5kLXJlZ2V4LWFuZC1hZHZhbmNlZC10b2dnbGUgYnV0dG9uIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuYWR2YW5jZWQtdG9wIC5yaWdodCAuc2VhcmNoLWlucHV0IC5zZWFyY2gtYW5kLXJlZ2V4LWFuZC1hZHZhbmNlZC10b2dnbGUgLnJlZ2V4T24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3M2IxO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5hZHZhbmNlZC10b3AgLnJpZ2h0IC5zZWFyY2gtaW5wdXQgLm9wdGlvbnMtc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDEycHggMHB4IDBweCAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5hZHZhbmNlZC10b3AgLnJpZ2h0IC5zZWFyY2gtaW5wdXQgLm9wdGlvbnMtc2VhcmNoIC5lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAzcHggNnB4IDNweCA2cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC50b3AgLmFkdmFuY2VkLXRvcCAucmlnaHQgLnNlYXJjaC1pbnB1dCAub3B0aW9ucy1zZWFyY2ggLmVsZW1lbnQgaW5wdXQge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5hZHZhbmNlZC10b3AgLnJpZ2h0IC5zZWFyY2gtaW5wdXQgLm9wdGlvbnMtc2VhcmNoIC5lbGVtZW50IC5sYWJlbC1vcHRpb24tc2VhcmNoIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9keSAuY29udGFpbmVyIC50b3AgLmlucHV0LWFuZC1jcm9zcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTQ1MztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5pbnB1dC1hbmQtY3Jvc3MgaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMnB4IC0gMjNweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC5pbnB1dC1hbmQtY3Jvc3MgLmNyb3NzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRvcCAuaW5wdXQtYW5kLWNyb3NzIC5jcm9zcyBpbWcge1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC50b2dnbGUtYWR2YW5jZWQtc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU0NTM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudG9wIC50b2dnbGUtYWR2YW5jZWQtc2VhcmNoIC5hZHZhbmNlZC1zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctcGFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzU1NTQ1MztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAucm93LXBhZ2VzIC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnJvdy1wYWdlcyAubGVmdCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctcGFnZXMgLm1pZGRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctcGFnZXMgLm1pZGRsZSAuYmxvY2staW5mbyB7XG4gIG1hcmdpbjogMHB4IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctcGFnZXMgLm1pZGRsZSAuY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAucm93LXBhZ2VzIC5taWRkbGUgaW5wdXQ6aG92ZXIsXG4uYm9keSAuY29udGFpbmVyIC5yb3ctcGFnZXMgLm1pZGRsZSBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTUzNTE7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctcGFnZXMgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnJvdy1wYWdlcyAucmlnaHQgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctcGFnZXMgaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAucm93LW9yZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTU1NDUzO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctb3JkZXIgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctb3JkZXIgLm1pZGRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJvZHkgLmNvbnRhaW5lciAucm93LW9yZGVyIC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMHB4IDEycHg7XG4gIHdpZHRoOiA3NXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJvZHkgLmNvbnRhaW5lciAucm93LW9yZGVyIC5sYWJlbC1idXR0b24tc29ydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib2R5IC5jb250YWluZXIgLnJvdy1vcmRlciAubGFiZWwtYnV0dG9uLXNvcnQgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5yb3ctb3JkZXIgLmxhYmVsLWJ1dHRvbi1zb3J0LWZyIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMnB4IC0gMjJweCAtIDk0cHgpO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIycHggLSAyMnB4IC0gNDJweCk7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTU1NDUzO1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSAucm93IC52aWV3LFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC52aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSAucm93IC52aWV3IC5sZWZ0LFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC52aWV3IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAudmlldyAubGVmdCAuZGliaSxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAudmlldyAubGVmdCAuZGliaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwcHggMjRweCAwcHggNnB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLnZpZXcgLmxlZnQgLmZyZW5jaCxcbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLnZpZXcgLmxlZnQgLmVuZ2xpc2gsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLnZpZXcgLmxlZnQgLmZyZW5jaCxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAudmlldyAubGVmdCAuZW5nbGlzaCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNkZGQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAudmlldyAucmlnaHQsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLnZpZXcgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDA7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSAucm93IC52aWV3IC5yaWdodCAuZGF0ZSxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAudmlldyAucmlnaHQgLmRhdGUge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMTJweCAqIDIpO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuYmxvY2stZGV0YWlsLWlmLXNjcmVlbi10b28tc21hbGwsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbC1pZi1zY3JlZW4tdG9vLXNtYWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuYmxvY2stZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCAubGFiZWwsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCAubGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSAucm93IC5kZXRhaWxzIC5ibG9jay1kZXRhaWwgLmxhYmVsIHNwYW4sXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCAubGFiZWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCAudmFsdWUsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuYmxvY2stZGV0YWlsIC52YWx1ZSAucGFydE9mU3BlZWNoLXNtYWxsLXNjcmVlbixcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuYmxvY2stZGV0YWlsIC52YWx1ZSAucGFydE9mU3BlZWNoLXNtYWxsLXNjcmVlbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCAudmFsdWUgc3Bhbixcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuYmxvY2stZGV0YWlsIC52YWx1ZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBjb2xvcjogI2RkZDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmJsb2NrLWRldGFpbCAubm8tZGV0YWlscyxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuYmxvY2stZGV0YWlsIC5uby1kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2JiYjtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmJ1dHRvbnMtZGV0YWlsLFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC5kZXRhaWxzIC5idXR0b25zLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMHB4IDBweCAxMnB4IDBweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmJ1dHRvbnMtZGV0YWlsIGltZyxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuYnV0dG9ucy1kZXRhaWwgaW1nIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmVkaXQsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmVkaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NDUzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSAucm93IC5kZXRhaWxzIC5lZGl0IC5mb3JtLW5ldy13b3JkIC5ibG9jayxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmxhYmVsLWlucHV0LFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC5kZXRhaWxzIC5lZGl0IC5mb3JtLW5ldy13b3JkIC5ibG9jayAubGFiZWwtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmxhYmVsLWlucHV0IC5sYWJlbCxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmxhYmVsLWlucHV0IC5sYWJlbCB7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmxhYmVsLWlucHV0IGlucHV0LFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmxhYmVsLWlucHV0IHNlbGVjdCxcbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQgLmJsb2NrIC5sYWJlbC1pbnB1dCB0ZXh0YXJlYSxcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmxhYmVsLWlucHV0IGlucHV0LFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC5kZXRhaWxzIC5lZGl0IC5mb3JtLW5ldy13b3JkIC5ibG9jayAubGFiZWwtaW5wdXQgc2VsZWN0LFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC5kZXRhaWxzIC5lZGl0IC5mb3JtLW5ldy13b3JkIC5ibG9jayAubGFiZWwtaW5wdXQgdGV4dGFyZWEge1xuICB3aWR0aDogODAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmhlbHAsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQgLmJsb2NrIC5oZWxwIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNjY2M7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSAucm93IC5kZXRhaWxzIC5lZGl0IC5mb3JtLW5ldy13b3JkIC5idXR0b25zLFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC5kZXRhaWxzIC5lZGl0IC5mb3JtLW5ldy13b3JkIC5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1zaW1wbGUgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYnV0dG9ucyAuZ3JlZW4tbWVzLFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93IC5kZXRhaWxzIC5lZGl0IC5mb3JtLW5ldy13b3JkIC5idXR0b25zIC5ncmVlbi1tZXMge1xuICBjb2xvcjogIzhlODtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQgLmJ1dHRvbnMgLnllbGxvdy1tZXMsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQgLmJ1dHRvbnMgLnllbGxvdy1tZXMge1xuICBjb2xvcjogI2VlODtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQgLmJ1dHRvbnMgLnJlZC1tZXMsXG4uYm9keSAuY29udGFpbmVyIC5saXN0LWFkdmFuY2VkIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQgLmJ1dHRvbnMgLnJlZC1tZXMge1xuICBjb2xvcjogI2U4ODtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3Qtc2ltcGxlIC5yb3cgLmRldGFpbHMgLmVkaXQgLmZvcm0tbmV3LXdvcmQgLmJ1dHRvbnMgLnJpZ2h0IGJ1dHRvbixcbi5ib2R5IC5jb250YWluZXIgLmxpc3QtYWR2YW5jZWQgLnJvdyAuZGV0YWlscyAuZWRpdCAuZm9ybS1uZXctd29yZCAuYnV0dG9ucyAucmlnaHQgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0LXNpbXBsZSAucm93OmhvdmVyLFxuLmJvZHkgLmNvbnRhaW5lciAubGlzdC1hZHZhbmNlZCAucm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmYyZTtcbn0iXX0= */"] });


/***/ }),

/***/ 9497:
/*!*************************************************************!*\
  !*** ./src/app/main/dibi-grammar/dibi-grammar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibiGrammarComponent": () => (/* binding */ DibiGrammarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["body"];
class DibiGrammarComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        fetch('assets/HTML/grammar.html')
            .then(r => r.text())
            .then(data => {
            this.body.nativeElement.innerHTML = data;
        });
    }
}
DibiGrammarComponent.ɵfac = function DibiGrammarComponent_Factory(t) { return new (t || DibiGrammarComponent)(); };
DibiGrammarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DibiGrammarComponent, selectors: [["app-dibi-grammar"]], viewQuery: function DibiGrammarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.body = _t.first);
    } }, inputs: { adminConnected: "adminConnected" }, decls: 2, vars: 0, consts: [[1, "grammar-bloc-body"], ["body", ""]], template: function DibiGrammarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap\");\n.grammar-bloc-body {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 1200px;\n  padding: 20px;\n  text-align: justify;\n  overflow: auto;\n}\n.grammar-bloc-body .block {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-top: 2px solid #656463;\n  padding-top: 24px;\n  margin-top: 24px;\n}\n.grammar-bloc-body .block .table {\n  margin-bottom: 20px;\n  max-width: 100%;\n  overflow: auto;\n}\n.grammar-bloc-body .block .example {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #656463;\n  padding: 12px;\n  margin-bottom: 20px;\n}\n.grammar-bloc-body .block .example span,\n.grammar-bloc-body .block .example p {\n  margin: 3px 0px;\n}\n.grammar-bloc-body .block .example::before {\n  content: \"Exemple\";\n  font-family: \"Comfortaa\", cursive;\n  margin-bottom: 9px;\n}\n.grammar-bloc-body h1,\n.grammar-bloc-body h2,\n.grammar-bloc-body h3,\n.grammar-bloc-body h4,\n.grammar-bloc-body h5,\n.grammar-bloc-body h6,\n.grammar-bloc-body span,\n.grammar-bloc-body p,\n.grammar-bloc-body li,\n.grammar-bloc-body th,\n.grammar-bloc-body td {\n  font-family: \"Comfortaa\", cursive;\n  font-weight: 300;\n  margin-bottom: 20px;\n}\n.grammar-bloc-body h1 {\n  align-self: center;\n  font-size: 36px;\n  margin-bottom: 24px;\n}\n.grammar-bloc-body h2 {\n  align-self: center;\n  font-size: 28px;\n  margin-bottom: 24px;\n}\n.grammar-bloc-body h3 {\n  margin-bottom: 6px;\n  font-size: 24px;\n}\n.grammar-bloc-body h4 {\n  margin-bottom: 6px;\n  font-size: 20px;\n}\n.grammar-bloc-body h5 {\n  margin-bottom: 6px;\n  font-size: 18px;\n}\n.grammar-bloc-body h6 {\n  margin-bottom: 6px;\n  font-size: 16px;\n}\n.grammar-bloc-body span {\n  font-size: 14px;\n}\n.grammar-bloc-body ul {\n  margin-bottom: 20px;\n}\n.grammar-bloc-body li {\n  font-size: 14px;\n  margin-left: 20px;\n  margin-bottom: 6px;\n}\n.grammar-bloc-body th {\n  font-size: 14px;\n  font-weight: 700;\n  margin: 0px;\n  padding: 6px;\n}\n.grammar-bloc-body td {\n  font-size: 14px;\n  margin: 0px;\n  padding: 6px;\n}\n.grammar-bloc-body table,\n.grammar-bloc-body th,\n.grammar-bloc-body td {\n  border: 1px solid #656463;\n  border-collapse: collapse;\n}\n.grammar-bloc-body .left {\n  align-self: flex-start;\n}\n.grammar-bloc-body .middle {\n  align-self: center;\n}\n.grammar-bloc-body .right {\n  align-self: flex-end;\n}\n.grammar-bloc-body .bold,\n.grammar-bloc-body .b {\n  font-weight: 700;\n}\n.grammar-bloc-body .underline,\n.grammar-bloc-body .u {\n  text-decoration: underline;\n}\n.grammar-bloc-body .italics,\n.grammar-bloc-body .i {\n  font-style: italic;\n}\n.grammar-bloc-body .red {\n  color: #f99;\n}\n.grammar-bloc-body .green {\n  color: #9f9;\n}\n.grammar-bloc-body .blue {\n  color: #99f;\n}\n.grammar-bloc-body .cyan {\n  color: #9ff;\n}\n.grammar-bloc-body .magenta {\n  color: #f9f;\n}\n.grammar-bloc-body .yellow {\n  color: #ff9;\n}\n.grammar-bloc-body .grey {\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYmktZ3JhbW1hci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1hcmlvJTIwVklFSUxMRURFTlRcXERlc2t0b3BcXE1FQU5cXERpcnR5UGF6dVxcY2xpZW50XFxzcmNcXGFwcFxcbWFpblxcZGliaS1ncmFtbWFyXFxkaWJpLWdyYW1tYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1EsMkZBQUE7QUFFUjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQVhNO0VBWU4sbUJBQUE7RUFDQSxjQUFBO0FDSEo7QURLSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRE1RO0VBQ0ksbUJBekJGO0VBMEJFLGVBQUE7RUFDQSxjQUFBO0FDSlo7QURRUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQXBDRjtBQzhCVjtBRFFZOztFQUVJLGVBQUE7QUNOaEI7QURVUTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ1JaO0FEWUk7Ozs7Ozs7Ozs7O0VBV0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQWhFRTtBQ3NEVjtBRGFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNYUjtBRGNJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDYlI7QURnQkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNkUjtBRGlCSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ2ZSO0FEa0JJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDaEJSO0FEbUJJO0VBQ0ksZUFBQTtBQ2pCUjtBRG9CSTtFQUNJLG1CQXhHRTtBQ3NGVjtBRHFCSTtFQUNJLGVBQUE7RUFDQSxpQkE3R0U7RUE4R0Ysa0JBQUE7QUNuQlI7QURzQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3BCUjtBRHVCSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3JCUjtBRHdCSTs7O0VBR0kseUJBQUE7RUFDQSx5QkFBQTtBQ3RCUjtBRDJCSTtFQUNJLHNCQUFBO0FDekJSO0FENEJJO0VBQ0ksa0JBQUE7QUMxQlI7QUQ2Qkk7RUFDSSxvQkFBQTtBQzNCUjtBRDhCSTs7RUFFSSxnQkFBQTtBQzVCUjtBRCtCSTs7RUFFSSwwQkFBQTtBQzdCUjtBRGdDSTs7RUFFSSxrQkFBQTtBQzlCUjtBRGlDSTtFQUNJLFdBQUE7QUMvQlI7QURrQ0k7RUFDSSxXQUFBO0FDaENSO0FEbUNJO0VBQ0ksV0FBQTtBQ2pDUjtBRG9DSTtFQUNJLFdBQUE7QUNsQ1I7QURxQ0k7RUFDSSxXQUFBO0FDbkNSO0FEc0NJO0VBQ0ksV0FBQTtBQ3BDUjtBRHVDSTtFQUNJLFdBQUE7QUNyQ1IiLCJmaWxlIjoiZGliaS1ncmFtbWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZGRpbmc6IDIwcHg7XHJcbiRib3JkZXItY29sb3I6ICM2NTY0NjM7XHJcblxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRAMzAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uZ3JhbW1hci1ibG9jLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgLmJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgICAgICAgLy8gRGl2IHRhYmxlIHNww6ljaWZpcXVlIHBvdXIgYWZmaWNoYWdlIHRlbGVwaG9uZSBhZGFwdMOpXHJcbiAgICAgICAgLnRhYmxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXYgZCdleGVtcGxlXHJcbiAgICAgICAgLmV4YW1wbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkcGFkZGluZztcclxuXHJcbiAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXhhbXBsZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJFeGVtcGxlXCI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIGg0LFxyXG4gICAgaDUsXHJcbiAgICBoNixcclxuICAgIHNwYW4sXHJcbiAgICBwLFxyXG4gICAgbGksXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRwYWRkaW5nO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLFxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsYXNzZXMgw6AgdXRpbGlzZXIgcG91ciBsZSBzdHlsZSBkdSB0ZXh0ZVxyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5taWRkbGUge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2xkLFxyXG4gICAgLmIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuZGVybGluZSxcclxuICAgIC51IHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRhbGljcyxcclxuICAgIC5pIHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZCB7XHJcbiAgICAgICAgY29sb3I6ICNmOTk7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyZWVuIHtcclxuICAgICAgICBjb2xvcjogIzlmOTtcclxuICAgIH1cclxuXHJcbiAgICAuYmx1ZSB7XHJcbiAgICAgICAgY29sb3I6ICM5OWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmN5YW4ge1xyXG4gICAgICAgIGNvbG9yOiAjOWZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWdlbnRhIHtcclxuICAgICAgICBjb2xvcjogI2Y5ZjtcclxuICAgIH1cclxuXHJcbiAgICAueWVsbG93IHtcclxuICAgICAgICBjb2xvcjogI2ZmOTtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JleSB7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDMwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuLmdyYW1tYXItYmxvYy1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IC5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzY1NjQ2MztcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgLmJsb2NrIC50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgLmJsb2NrIC5leGFtcGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY1NjQ2MztcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAuYmxvY2sgLmV4YW1wbGUgc3Bhbixcbi5ncmFtbWFyLWJsb2MtYm9keSAuYmxvY2sgLmV4YW1wbGUgcCB7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAuYmxvY2sgLmV4YW1wbGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiRXhlbXBsZVwiO1xuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IGgxLFxuLmdyYW1tYXItYmxvYy1ib2R5IGgyLFxuLmdyYW1tYXItYmxvYy1ib2R5IGgzLFxuLmdyYW1tYXItYmxvYy1ib2R5IGg0LFxuLmdyYW1tYXItYmxvYy1ib2R5IGg1LFxuLmdyYW1tYXItYmxvYy1ib2R5IGg2LFxuLmdyYW1tYXItYmxvYy1ib2R5IHNwYW4sXG4uZ3JhbW1hci1ibG9jLWJvZHkgcCxcbi5ncmFtbWFyLWJsb2MtYm9keSBsaSxcbi5ncmFtbWFyLWJsb2MtYm9keSB0aCxcbi5ncmFtbWFyLWJsb2MtYm9keSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IGgxIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgaDIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgaDUge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgdWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IGxpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IHRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogNnB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IHRkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogNnB4O1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IHRhYmxlLFxuLmdyYW1tYXItYmxvYy1ib2R5IHRoLFxuLmdyYW1tYXItYmxvYy1ib2R5IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY1NjQ2MztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAubGVmdCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgLm1pZGRsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAucmlnaHQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAuYm9sZCxcbi5ncmFtbWFyLWJsb2MtYm9keSAuYiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgLnVuZGVybGluZSxcbi5ncmFtbWFyLWJsb2MtYm9keSAudSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IC5pdGFsaWNzLFxuLmdyYW1tYXItYmxvYy1ib2R5IC5pIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IC5yZWQge1xuICBjb2xvcjogI2Y5OTtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAuZ3JlZW4ge1xuICBjb2xvcjogIzlmOTtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAuYmx1ZSB7XG4gIGNvbG9yOiAjOTlmO1xufVxuLmdyYW1tYXItYmxvYy1ib2R5IC5jeWFuIHtcbiAgY29sb3I6ICM5ZmY7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgLm1hZ2VudGEge1xuICBjb2xvcjogI2Y5Zjtcbn1cbi5ncmFtbWFyLWJsb2MtYm9keSAueWVsbG93IHtcbiAgY29sb3I6ICNmZjk7XG59XG4uZ3JhbW1hci1ibG9jLWJvZHkgLmdyZXkge1xuICBjb2xvcjogIzk5OTtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 9633:
/*!*********************************************************!*\
  !*** ./src/app/main/dibi-infos/dibi-infos.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibiInfosComponent": () => (/* binding */ DibiInfosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 3808);




function DibiInfosComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mots Dibi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dibiDict.length);
} }
function DibiInfosComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21)(1, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const partOfSpeech_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", partOfSpeech_r2.savedAs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partOfSpeech_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "number " + partOfSpeech_r2.savedAs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](partOfSpeech_r2.nb);
} }
class DibiInfosComponent {
    constructor(socket) {
        this.socket = socket;
        // Stats de répartition des natures gr.
        this.nbPartsOfSpeech = [
            { label: 'Noms', savedAs: 'Noun', nb: 0, color: '#8AE' },
            { label: 'Pronoms', savedAs: 'Pronoun', nb: 0, color: '#8EE' },
            { label: 'Verbes', savedAs: 'Verb', nb: 0, color: '#E88' },
            { label: 'Adjectifs', savedAs: 'Adjective', nb: 0, color: '#8E8' },
            { label: 'Adverbes', savedAs: 'Adverb', nb: 0, color: '#EA8' },
            { label: 'Conjonctions', savedAs: 'Conjonction', nb: 0, color: '#E8E' },
            { label: 'Particules de fonction', savedAs: 'FunctionParticule', nb: 0, color: '#EE8' },
            { label: 'Particules de transformation', savedAs: 'TransformationParticule', nb: 0, color: '#EE8' },
            { label: 'Mots d\'esprit', savedAs: 'SpiritWord', nb: 0, color: '#395' },
            { label: 'Interjections', savedAs: 'Interjection', nb: 0, color: '#A8E' }
        ];
        // Options Charts
        this.options = { aspectRatio: 1 };
        // Pie Chart pour la répartition des natures gr.
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColors = [{
                backgroundColor: []
            }];
        // Bar Chart pour le nb de mots selon leur nature grammaticale en fonction du temps
        this.numbersOfWords = {
            Total: 0,
            Noms: 0,
            Pronoms: 0,
            Verbes: 0,
            Adjectifs: 0,
            Adverbes: 0,
            Conjonctions: 0,
            'Particules de fonction': 0,
            'Particules de transformation': 0,
            'Mots d\'esprit': 0,
            Interjections: 0
        };
        this.barChartDataNG = [
            { data: [], label: 'Noms', borderColor: '#8AE', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#8AE' },
            { data: [], label: 'Pronoms', borderColor: '#8EE', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#8EE' },
            { data: [], label: 'Verbes', borderColor: '#E88', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#E88' },
            { data: [], label: 'Adjectifs', borderColor: '#8E8', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#8E8' },
            { data: [], label: 'Adverbes', borderColor: '#EA8', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#EA8' },
            { data: [], label: 'Conjonctions', borderColor: '#E8E', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#E8E' },
            { data: [], label: 'Particules de fonction', borderColor: '#EE8', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#EE8' },
            { data: [], label: 'Particules de transformation', borderColor: '#EE8', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#EE8' },
            { data: [], label: 'Mots d\'esprit', borderColor: '#395', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#395' },
            { data: [], label: 'Interjections', borderColor: '#A8E', backgroundColor: 'rgba(0, 0, 0, 0)', pointBackgroundColor: '#A8E' }
        ];
        this.barChartLabelsNG = [];
        this.barChartOptionsNG = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLegendNG = true;
        // Bar Chart pour le nb de mots selon leur nature grammaticale en fonction du temps
        this.barChartData = [
            { data: [], label: 'Total mots', borderColor: '#d6d5d4', backgroundColor: 'rgba(240, 240, 240, 0.1)', pointBackgroundColor: '#cccbca' }
        ];
        this.barChartLabels = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLegend = true;
    }
    ngOnInit() {
    }
    /**
     * Si un changement Angular est détecté, et qu'il s'agit de @Input() dibiDict
     * Démarrage du traitement du dictionnaire
     */
    ngOnChanges() {
        if (this.dibiDict) {
            // Récupérations des stats de la répartition des natures gr. et nb mots langue
            this.dibiDict.forEach(word => {
                switch (word.partOfSpeech) {
                    case ('Noun'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'Noun').nb++;
                        break;
                    case ('Pronoun'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'Pronoun').nb++;
                        break;
                    case ('Verb'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'Verb').nb++;
                        break;
                    case ('Adjective'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'Adjective').nb++;
                        break;
                    case ('Adverb'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'Adverb').nb++;
                        break;
                    case ('Conjonction'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'Conjonction').nb++;
                        break;
                    case ('FunctionParticule'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'FunctionParticule').nb++;
                        break;
                    case ('TransformationParticule'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'TransformationParticule').nb++;
                        break;
                    case ('SpiritWord'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'SpiritWord').nb++;
                        break;
                    case ('Interjection'):
                        this.nbPartsOfSpeech.find(i => i.savedAs === 'Interjection').nb++;
                        break;
                }
            });
            // Tri par nombre (stats de répartiotion des natures gr.)
            this.nbPartsOfSpeech.sort((a, b) => {
                if (a.nb < b.nb) {
                    return 1;
                }
                else if (a.nb > b.nb) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            // Construction du piechart des natures grammaticales
            this.nbPartsOfSpeech.forEach(element => {
                this.pieChartLabels.push(element.label);
                this.pieChartData.push(element.nb);
                this.pieChartColors[0].backgroundColor.push(element.color);
            });
            // Construction du line chart du nb mots chaque jour
            let day = this.datify(new Date(this.dibiDict[0].date));
            this.barChartLabelsNG.push(day);
            this.barChartLabels.push(day);
            this.dibiDict.forEach(word => {
                this.numbersOfWords.Total++; // Incrément des mots totaux
                if (day === this.datify(new Date(word.date))) {
                    this.numbersOfWords[this.frenchify(word.partOfSpeech)]++; // Incrément du nombre de mots selon le nature gr.
                }
                else {
                    // Ajout des nouveaux mots selon la date
                    this.barChartDataNG.forEach(elem => {
                        elem.data.push(this.numbersOfWords[elem.label]);
                    });
                    this.barChartData[0].data.push(this.numbersOfWords.Total);
                    // Mise à jour de la date suivante
                    day = this.datify(new Date(word.date));
                    this.barChartLabelsNG.push(day);
                    this.barChartLabels.push(day);
                    // Ajout du prochain mot (qui est passé en else car nouvelle date, mais qu'il faut compter)
                    this.numbersOfWords[this.frenchify(word.partOfSpeech)]++; // Incrément du nombre de mots selon le nature gr.
                }
            });
            // Ajout des nouveaux mots selon la date
            this.barChartDataNG.forEach(elem => {
                elem.data.push(this.numbersOfWords[elem.label]);
            });
            this.barChartData[0].data.push(this.numbersOfWords.Total);
            // Tri par taille (stats de répartition des natures gr.)
            this.barChartDataNG.sort((a, b) => {
                if (a.data[a.data.length - 1] < b.data[b.data.length - 1]) {
                    return 1;
                }
                else if (a.data[a.data.length - 1] > b.data[b.data.length - 1]) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
    }
    /**
     * Adapte une Date en format dd/mm/yyy
     */
    datify(date) {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '/' + mm + '/' + yyyy;
    }
    /**
     * Donne la nature grammaticale fr à partir de l'anglaise
     */
    frenchify(partOfSpeech) {
        switch (partOfSpeech) {
            case ('Noun'):
                return 'Noms';
                break;
            case ('Pronoun'):
                return 'Pronoms';
                break;
            case ('Verb'):
                return 'Verbes';
                break;
            case ('Adjective'):
                return 'Adjectifs';
                break;
            case ('Adverb'):
                return 'Adverbes';
                break;
            case ('Conjonction'):
                return 'Conjonctions';
                break;
            case ('FunctionParticule'):
                return 'Particules de fonction';
                break;
            case ('TransformationParticule'):
                return 'Particules de transformation';
                break;
            case ('SpiritWord'):
                return 'Mots d\'esprit';
                break;
            case ('Interjection'):
                return 'Interjections';
                break;
        }
    }
}
DibiInfosComponent.ɵfac = function DibiInfosComponent_Factory(t) { return new (t || DibiInfosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__.Socket)); };
DibiInfosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DibiInfosComponent, selectors: [["app-dibi-infos"]], inputs: { dibiDict: "dibiDict" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 54, vars: 17, consts: [[1, "body"], [1, "container"], [1, "header"], [1, "logo-and-link"], [1, "img"], ["src", "assets/images/discord.png", "alt", "Logo Discord"], ["href", "https://discord.gg/xSk3RMpEXB", "target", "_blank"], ["src", "assets/images/github.png", "alt", "Logo GitHub"], ["href", "https://github.com/MarioVieilledent/DirtyPazu-Client", "target", "_blank"], ["href", "https://github.com/MarioVieilledent/DirtyPazu-Server/tree/NoGoogle", "target", "_blank"], ["src", "assets/images/json.png", "alt", "Logo JSON"], ["href", "https://dibi-dictionary.herokuapp.com/dictionnary/getWords/all", "target", "_blank"], [1, "content"], [1, "block"], [1, "title"], [1, "elements"], ["class", "element", 4, "ngIf"], ["class", "element", 4, "ngFor", "ngForOf"], [1, "block", "chart"], ["baseChart", "", 1, "pie-chart", 3, "options", "data", "labels", "colors", "chartType"], ["baseChart", "", 1, "line-chart", 3, "datasets", "labels", "options", "legend", "chartType"], [1, "element"], [1, "number"], [3, "className"]], template: function DibiInfosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dibi Dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dibi Dictionary a pour vocation de r\u00E9pertorier l'ensemble des mots de la langue Dibi. Un manuel de la langue est aussi disponible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ressources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Serveur Discord Dibi officiel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "GitHub de la web app Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3)(20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "GitHub du serveur Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3)(25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Liste de tous les mots format JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12)(30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Statistiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13)(33, "div", 14)(34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Des chiffres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DibiInfosComponent_div_37_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DibiInfosComponent_div_38_Template, 5, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18)(40, "div", 14)(41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "R\u00E9partition des mots selon leur nature grammaticale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "canvas", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18)(45, "div", 14)(46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Taille du dictionnaire en fonction du temps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "canvas", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18)(50, "div", 14)(51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nombres de mots dans le dictionnaire selon leur nature grammaticale en fonction du temps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "canvas", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dibiDict);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nbPartsOfSpeech);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("colors", ctx.pieChartColors)("chartType", "pie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartDataNG)("labels", ctx.barChartLabelsNG)("options", ctx.barChartOptionsNG)("legend", ctx.barChartLegendNG)("chartType", "line");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 12px 12px 0px 12px;\n  height: 100%;\n  width: 100%;\n  max-width: 1200px;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-and-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-and-link[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  height: 32px;\n  width: 32px;\n  margin-right: 12px;\n  border-radius: 4px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-and-link[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  margin: 0;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  border: 1px solid #757473;\n  margin: 0px 0px 12px 0px;\n  padding: 12px 12px 0px 12px;\n  max-width: 1400px;\n  overflow: auto;\n  background-color: #3c3b3a;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 4px;\n  border: 1px solid #757473;\n  margin: 0px 12px 12px 0px;\n  padding: 12px;\n  background-color: #464544;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 200;\n  font-size: 16px;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n  align-items: center;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYmktaW5mb3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNYXJpbyUyMFZJRUlMTEVERU5UXFxEZXNrdG9wXFxNRUFOXFxEaXJ0eVBhenVcXGNsaWVudFxcc3JjXFxhcHBcXG1haW5cXGRpYmktaW5mb3NcXGRpYmktaW5mb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNmSjtBRGlCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZlI7QURpQlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNmWjtBRGlCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2ZoQjtBRGlCZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFqQ1Y7RUFrQ1Usa0JBakNKO0FDa0JoQjtBRGlCb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNmeEI7QURvQlk7RUFDSSxrQkFBQTtBQ2xCaEI7QURzQlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFwREY7QUNnQ1Y7QURzQlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkF4REE7RUF5REEseUJBeERQO0VBeURPLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3BCaEI7QURzQmdCO0VBQ0ksYUFBQTtFQUNBLG1CQW5FVjtBQytDVjtBRHVCZ0I7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ3JCcEI7QUR1Qm9CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkE3RVI7RUE4RVEseUJBN0VmO0VBOEVlLHlCQUFBO0VBQ0EsYUFqRmQ7RUFrRmMseUJBQUE7QUNyQnhCO0FEdUJ3QjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDckI1QjtBRHdCd0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUN0QjVCO0FENEJZO0VBQ0ksb0JBbkdOO0VBb0dNLG1CQUFBO0VBQ0EsY0FBQTtBQzFCaEI7QUQ0QmdCO0VBQ0ksZ0JBQUE7QUMxQnBCO0FENEJnQjtFQUNJLGlCQUFBO0FDMUJwQiIsImZpbGUiOiJkaWJpLWluZm9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnLWNvbG9yLWhlYWRlcjogIzE1MTMxMTsgLy8gQ291bGV1ciBkZSBmb25kIGxhIHBsdXMgZm9uY8OpZVxyXG4kYmctY29sb3ItbmF2OiAjMjUyMzIxOyAvLyBDb3VsZXVyIGRlIGZvbmQgZW50cmUtZGV1eFxyXG4kYmctY29sb3ItY29udGVudDogIzM1MzMzMTsgLy8gQ291bGV1ciBkZSBmb25kIGxhIHBsdXMgY2xhaXJlXHJcbiRiZy1jb2xvci1uYXYtYnV0dG9uOiAjMzUzMzMxOyAvLyBDb3VsZXVyIGRlIGZvbmQgZGVzIGJvdXRvbnNcclxuJGJnLWNvbG9yLW5hdi1idXR0b24taG92ZXI6ICM0NTQzNDE7IC8vIENvdWxldXIgZGUgZm9uZCBkZXMgYm91dG9ucyBob3ZlclxyXG4kYmctY29sb3Itb3B0aW9uLWJsb2NrOiAjNTU1MzUxOyAvLyBPcHRpb25zXHJcbiRiZy1jb2xvci1vcHRpb24tYmxvY2staG92ZXI6ICM2NTYzNjE7IC8vIE9wdGlvbnMgaG92ZXJcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xyXG4kZm9vdGVyLWhlaWdodDogMHB4O1xyXG4kbmF2LXdpZHRoOiAyMDBweDtcclxuXHJcbiRwYWRkaW5nOiAxMnB4O1xyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyOiAxcHggc29saWQgIzc1NzQ3MztcclxuXHJcbi5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAkcGFkZGluZyAkcGFkZGluZyAwcHggJHBhZGRpbmc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAubG9nby1hbmQtbGluayB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJGJvcmRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAkcGFkZGluZyAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZyAkcGFkZGluZyAwcHggJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2IzYTtcclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmVsZW1lbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmVsZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAkYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAkcGFkZGluZyAkcGFkZGluZyAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NTQ0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNoYXJ0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICAucGllLWNoYXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmUtY2hhcnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweCAxMnB4IDBweCAxMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYm9keSAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC5jb250YWluZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm9keSAuY29udGFpbmVyIC5oZWFkZXIgLmxvZ28tYW5kLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5sb2dvLWFuZC1saW5rIC5pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5oZWFkZXIgLmxvZ28tYW5kLWxpbmsgLmltZyBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW46IDA7XG59XG4uYm9keSAuY29udGFpbmVyIC5oZWFkZXIgKiB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAuY29udGVudCAuYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NTc0NzM7XG4gIG1hcmdpbjogMHB4IDBweCAxMnB4IDBweDtcbiAgcGFkZGluZzogMTJweCAxMnB4IDBweCAxMnB4O1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzNiM2E7XG59XG4uYm9keSAuY29udGFpbmVyIC5jb250ZW50IC5ibG9jayAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAuY29udGVudCAuYmxvY2sgLmVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuY29udGVudCAuYmxvY2sgLmVsZW1lbnRzIC5lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzU3NDczO1xuICBtYXJnaW46IDBweCAxMnB4IDEycHggMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NTQ0O1xufVxuLmJvZHkgLmNvbnRhaW5lciAuY29udGVudCAuYmxvY2sgLmVsZW1lbnRzIC5lbGVtZW50IGgzIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuY29udGVudCAuYmxvY2sgLmVsZW1lbnRzIC5lbGVtZW50IC5udW1iZXIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYm9keSAuY29udGFpbmVyIC5jb250ZW50IC5jaGFydCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5ib2R5IC5jb250YWluZXIgLmNvbnRlbnQgLmNoYXJ0IC5waWUtY2hhcnQge1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAuY29udGVudCAuY2hhcnQgLmxpbmUtY2hhcnQge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 4384:
/*!***************************************************************!*\
  !*** ./src/app/main/dibi-new-word/dibi-new-word.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibiNewWordComponent": () => (/* binding */ DibiNewWordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function DibiNewWordComponent_p_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.mes);
} }
function DibiNewWordComponent_p_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message.mes);
} }
function DibiNewWordComponent_p_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message.mes);
} }
function DibiNewWordComponent_p_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
} }
function DibiNewWordComponent_div_77_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const word_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", word_r6.dibi, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", word_r6.french, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", word_r6.partOfSpeech, ")");
} }
function DibiNewWordComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Liste");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DibiNewWordComponent_div_77_div_3_Template, 7, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dibiDict);
} }
class DibiNewWordComponent {
    constructor(socket) {
        this.socket = socket;
        this.message = { mes: '', color: '' };
        this.newWord = {
            dibi: '',
            french: '',
            english: '',
            partOfSpeech: 'Noun',
        };
    }
    ngOnInit() {
        this.socket.on('responseAddWord', (data) => {
            if (data.status === 0) {
                this.message = { mes: 'Succès', color: 'green' };
                this.newWord.dibi = '';
                this.newWord.french = '';
                this.newWord.english = '';
                // this.newWord.author = ''; // Auteur conservé
                this.newWord.date = '';
                this.newWord.description = '';
            }
            else {
                this.message = { mes: data.mes, color: 'red' };
            }
            // Clear du message au bout d'un certain délai
            setTimeout(() => { this.message = { mes: '', color: '' }; }, 10000);
        });
    }
    /**
     * Ajoute un mot dans la bdd
     */
    addWord() {
        if (!this.adminConnected) {
            alert('Administrateur non connecté.');
        }
        else {
            this.newWord.date = new Date();
            this.message = { mes: 'Enregistrement...', color: 'yellow' };
            this.socket.emit('addWord', { newWord: this.newWord, pwd: this.pwd });
        }
    }
    /**
     * 1)
     * Adapte automatique le formatage de la saisie des mots Dibis, Français et Anglais.
     * Format = Majuscule au début du mot, le reste en minuscule.
     * 2)
     * Vérifie que le mot ne se termine par un espace
     * 3)
     * Scrute la terminaison du mot pour adapter sa nature grammaticale (uniquement si mot Dibi)
     */
    checkFormat(event, partOfSpeech) {
        // Setup
        let value = event.target.value;
        // Met tout en minuscule (qui le mot Dibi)
        if (partOfSpeech === 'dibi') {
            value = value.toLocaleLowerCase();
        }
        // Set de la première lettre en majuscule
        value = value.charAt(0).toUpperCase() + value.slice(1);
        // Suppression d'espaces à la fin (que le mot Dibi)
        if (partOfSpeech === 'dibi') {
            if (value.endsWith(' ')) {
                value = value.slice(0, -1);
            }
        }
        // Set du bon formatage du mot Dibi
        this.newWord[partOfSpeech] = value;
        // Auto adapt de la nature grammaticale
        if (partOfSpeech === 'dibi') {
            if (value.endsWith('e')) {
                this.newWord.partOfSpeech = 'Verb';
            }
            else if (value.endsWith('i') || value.endsWith('fo') || value.endsWith('ro') || value.endsWith('ti')) {
                this.newWord.partOfSpeech = 'Noun';
            }
            else if (value.endsWith('al')) {
                this.newWord.partOfSpeech = 'Adjective';
            }
            else if (value.endsWith('or')) {
                this.newWord.partOfSpeech = 'Adverb';
            }
        }
    }
}
DibiNewWordComponent.ɵfac = function DibiNewWordComponent_Factory(t) { return new (t || DibiNewWordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__.Socket)); };
DibiNewWordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DibiNewWordComponent, selectors: [["app-dibi-new-word"]], inputs: { adminConnected: "adminConnected", pwd: "pwd" }, decls: 78, vars: 13, consts: [[1, "body"], [1, "title-description"], [1, "form-new-word"], [1, "mandatory"], [1, "block"], [1, "label-input"], [1, "label"], ["type", "text", 3, "className", "ngModel", "input", "ngModelChange"], [1, "help"], ["type", "text", 3, "ngModel", "input", "ngModelChange"], [3, "className", "ngModel", "ngModelChange"], ["value", "Noun"], ["value", "Pronoun"], ["value", "Verb"], ["value", "Adjective"], ["value", "Adverb"], ["value", "Conjonction"], ["value", "Interjection"], ["value", "FunctionParticule"], ["value", "TransformationParticule"], ["value", "SpiritWord"], [1, "facultative"], ["type", "text", "placeholder", "pseudo#code", 3, "ngModel", "ngModelChange"], ["name", "new-word-description", "id", "new-word-description", "rows", "5", 3, "ngModel", "ngModelChange"], [1, "buttons"], [3, "ngSwitch"], ["class", "green-mes", 4, "ngSwitchCase"], ["class", "yellow-mes", 4, "ngSwitchCase"], ["class", "red-mes", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "click"], ["class", "dict", 4, "ngIf"], [1, "green-mes"], [1, "yellow-mes"], [1, "red-mes"], [1, "dict"], [4, "ngFor", "ngForOf"]], template: function DibiNewWordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ajouter un mot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dibi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DibiNewWordComponent_Template_input_input_10_listener($event) { return ctx.checkFormat($event, "dibi"); })("ngModelChange", function DibiNewWordComponent_Template_input_ngModelChange_10_listener($event) { return ctx.newWord.dibi = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Un mot commen\u00E7ant par une majuscule. Particules en minuscule avec un \"-\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4)(14, "div", 5)(15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DibiNewWordComponent_Template_input_input_17_listener($event) { return ctx.checkFormat($event, "french"); })("ngModelChange", function DibiNewWordComponent_Template_input_ngModelChange_17_listener($event) { return ctx.newWord.french = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Traduction en Fran\u00E7ais, un ou plusieurs mots commen\u00E7ant par des majuscules, s\u00E9par\u00E9s par des virgules.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4)(21, "div", 5)(22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Anglais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DibiNewWordComponent_Template_input_input_24_listener($event) { return ctx.checkFormat($event, "english"); })("ngModelChange", function DibiNewWordComponent_Template_input_ngModelChange_24_listener($event) { return ctx.newWord.english = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Traduction en Anglais, un ou plusieurs mots commen\u00E7ant par des majuscules, s\u00E9par\u00E9s par des virgules. Facultatif.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4)(28, "div", 5)(29, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiNewWordComponent_Template_select_ngModelChange_31_listener($event) { return ctx.newWord.partOfSpeech = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pronom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Verbe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Adjectif");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Adverbe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Conjonction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Interjection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Particule de fonction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Particule de transformation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Mot d'esprit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Nature grammaticale (ou classe grammaticale).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21)(55, "div", 4)(56, "div", 5)(57, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cr\u00E9ateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiNewWordComponent_Template_input_ngModelChange_59_listener($event) { return ctx.newWord.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cr\u00E9ateur du mot, celui qui l'a propos\u00E9 \u00E0 l'origine (pseudo Discord).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4)(63, "div", 5)(64, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiNewWordComponent_Template_textarea_ngModelChange_66_listener($event) { return ctx.newWord.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Description, \u00E9tymologie, exemples, r\u00E8gles grammaticales, lore, etc. Facultatif.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24)(70, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, DibiNewWordComponent_p_71_Template, 2, 1, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, DibiNewWordComponent_p_72_Template, 2, 1, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, DibiNewWordComponent_p_73_Template, 2, 1, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DibiNewWordComponent_p_74_Template, 1, 0, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiNewWordComponent_Template_button_click_75_listener() { return ctx.addWord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, DibiNewWordComponent_div_77_Template, 4, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.newWord.partOfSpeech)("ngModel", ctx.newWord.dibi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newWord.french);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newWord.english);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.newWord.partOfSpeech)("ngModel", ctx.newWord.partOfSpeech);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newWord.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newWord.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.message.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "yellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dibiDict);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .title-description[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 250px;\n  max-width: 500px;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: 16px;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  margin-right: 12px;\n  font-size: 13px;\n  color: #ccc;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .green-mes[_ngcontent-%COMP%] {\n  color: #8e8;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .yellow-mes[_ngcontent-%COMP%] {\n  color: #ee8;\n}\n.body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .red-mes[_ngcontent-%COMP%] {\n  color: #e88;\n}\n@media screen and (max-width: 800px) {\n  .body[_ngcontent-%COMP%]   .form-new-word[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .label-input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    width: 20%;\n    font-size: 14px;\n    margin-right: 12px;\n    white-space: -moz-pre-wrap !important;\n    \n    white-space: -webkit-pre-wrap;\n    \n    white-space: -pre-wrap;\n    \n    white-space: -o-pre-wrap;\n    \n    white-space: pre-wrap;\n    \n    word-wrap: break-word;\n    \n    word-break: break-all;\n    white-space: normal;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYmktbmV3LXdvcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNYXJpbyUyMFZJRUlMTEVERU5UXFxEZXNrdG9wXFxNRUFOXFxEaXJ0eVBhenVcXGNsaWVudFxcc3JjXFxhcHBcXG1haW5cXGRpYmktbmV3LXdvcmRcXGRpYmktbmV3LXdvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQVBNO0VBUU4sWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSEo7QURLSTtFQUNJLG1CQWJFO0FDVVY7QURNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSlI7QURNUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQTFCRjtBQ3NCVjtBRE1ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSmhCO0FETWdCO0VBQ0ksVUFBQTtFQUNBLGtCQWxDVjtBQzhCVjtBRE9nQjs7O0VBR0ksVUFBQTtFQUNBLGVBQUE7QUNMcEI7QURTWTtFQUNJLGVBQUE7RUFDQSxrQkEvQ047RUFnRE0sZUFBQTtFQUNBLFdBQUE7QUNQaEI7QURpQlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2ZaO0FEaUJZO0VBQ0ksV0FBQTtBQ2ZoQjtBRGtCWTtFQUNJLFdBQUE7QUNoQmhCO0FEbUJZO0VBQ0ksV0FBQTtBQ2pCaEI7QUR1QkE7RUFLb0I7SUFDSSxVQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQXZGZDtJQXdGYyxxQ0FBQTtJQUF1Qyx3QkFBQTtJQUN2Qyw2QkFBQTtJQUErQixvQkFBQTtJQUMvQixzQkFBQTtJQUF3QixjQUFBO0lBQ3hCLHdCQUFBO0lBQTBCLFlBQUE7SUFDMUIscUJBQUE7SUFBdUIsU0FBQTtJQUN2QixxQkFBQTtJQUF1QiwyQkFBQTtJQUN2QixxQkFBQTtJQUNBLG1CQUFBO0VDbEJ0QjtBQUNGIiwiZmlsZSI6ImRpYmktbmV3LXdvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFkZGluZzogMTJweDtcclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlcjogMXB4IHNvbGlkICM3NTc0NzM7XHJcblxyXG4uYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAudGl0bGUtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLW5ldy13b3JkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkcGFkZGluZztcclxuXHJcbiAgICAgICAgICAgIC5sYWJlbC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlbHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFuZGF0b3J5IHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYWN1bHRhdGl2ZSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5ncmVlbi1tZXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ZTg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC55ZWxsb3ctbWVzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWU4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmVkLW1lcyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2U4ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5ib2R5IHtcclxuICAgICAgICAuZm9ybS1uZXctd29yZCB7XHJcbiAgICAgICAgICAgIC5ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAubGFiZWwtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXAgIWltcG9ydGFudDsgLyogTW96aWxsYSwgc2luY2UgMTk5OSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogLXdlYmtpdC1wcmUtd3JhcDsgLyogQ2hyb21lICYgU2FmYXJpICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7IC8qIE9wZXJhIDQtNiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7IC8qIE9wZXJhIDcgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogSW50ZXJuZXQgRXhwbG9yZXIgNS41KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYm9keSAudGl0bGUtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmJvZHkgLmZvcm0tbmV3LXdvcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi5ib2R5IC5mb3JtLW5ldy13b3JkIC5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uYm9keSAuZm9ybS1uZXctd29yZCAuYmxvY2sgLmxhYmVsLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2R5IC5mb3JtLW5ldy13b3JkIC5ibG9jayAubGFiZWwtaW5wdXQgLmxhYmVsIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmJvZHkgLmZvcm0tbmV3LXdvcmQgLmJsb2NrIC5sYWJlbC1pbnB1dCBpbnB1dCxcbi5ib2R5IC5mb3JtLW5ldy13b3JkIC5ibG9jayAubGFiZWwtaW5wdXQgc2VsZWN0LFxuLmJvZHkgLmZvcm0tbmV3LXdvcmQgLmJsb2NrIC5sYWJlbC1pbnB1dCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ib2R5IC5mb3JtLW5ldy13b3JkIC5ibG9jayAuaGVscCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjY2NjO1xufVxuLmJvZHkgLmZvcm0tbmV3LXdvcmQgLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9keSAuZm9ybS1uZXctd29yZCAuYnV0dG9ucyAuZ3JlZW4tbWVzIHtcbiAgY29sb3I6ICM4ZTg7XG59XG4uYm9keSAuZm9ybS1uZXctd29yZCAuYnV0dG9ucyAueWVsbG93LW1lcyB7XG4gIGNvbG9yOiAjZWU4O1xufVxuLmJvZHkgLmZvcm0tbmV3LXdvcmQgLmJ1dHRvbnMgLnJlZC1tZXMge1xuICBjb2xvcjogI2U4ODtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJvZHkgLmZvcm0tbmV3LXdvcmQgLmJsb2NrIC5sYWJlbC1pbnB1dCAubGFiZWwge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcCAhaW1wb3J0YW50O1xuICAgIC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cbiAgICB3aGl0ZS1zcGFjZTogLXdlYmtpdC1wcmUtd3JhcDtcbiAgICAvKiBDaHJvbWUgJiBTYWZhcmkgKi9cbiAgICB3aGl0ZS1zcGFjZTogLXByZS13cmFwO1xuICAgIC8qIE9wZXJhIDQtNiAqL1xuICAgIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgICAvKiBPcGVyYSA3ICovXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIC8qIENTUzMgKi9cbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgNS41KyAqL1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 4398:
/*!*************************************************************!*\
  !*** ./src/app/main/dibi-suggest/dibi-suggest.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibiSuggestComponent": () => (/* binding */ DibiSuggestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




function DibiSuggestComponent_div_6_div_1_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiSuggestComponent_div_6_div_1_ng_container_7_div_1_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const indexOption_r19 = restoredCtx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return (ctx_r20.dibiWordsSuggestion.optionsDescription[indexOption_r19] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const indexOption_r19 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/discord_emojis/letter_", indexOption_r19, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.dibiWordsSuggestion.optionsDescription[indexOption_r19]);
} }
function DibiSuggestComponent_div_6_div_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DibiSuggestComponent_div_6_div_1_ng_container_7_div_1_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dibiWordsSuggestion.words[0].dibis);
} }
function DibiSuggestComponent_div_6_div_1_div_10_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_div_10_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const index_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.removeWord(index_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DibiSuggestComponent_div_6_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DibiSuggestComponent_div_6_div_1_div_10_img_4_Template, 1, 0, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mot ", index_r23 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r23 > 0);
} }
function DibiSuggestComponent_div_6_div_1_div_14_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const indexDibi_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/discord_emojis/letter_", indexDibi_r32, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DibiSuggestComponent_div_6_div_1_div_14_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function DibiSuggestComponent_div_6_div_1_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DibiSuggestComponent_div_6_div_1_div_14_div_1_img_3_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dibi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DibiSuggestComponent_div_6_div_1_div_14_div_1_img_6_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47)(8, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiSuggestComponent_div_6_div_1_div_14_div_1_Template_input_ngModelChange_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const indexDibi_r32 = restoredCtx.index; const word_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return word_r28.dibis[indexDibi_r32].dibi = $event; })("input", function DibiSuggestComponent_div_6_div_1_div_14_div_1_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r39.displaySendButton = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const indexDibi_r32 = ctx.index;
    const word_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.dibiWordsSuggestion.words[0].dibis.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !word_r28.dibis[indexDibi_r32].dibi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", word_r28.partOfSpeech)("ngModel", word_r28.dibis[indexDibi_r32].dibi);
} }
function DibiSuggestComponent_div_6_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DibiSuggestComponent_div_6_div_1_div_14_div_1_Template, 9, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", word_r28.dibis);
} }
function DibiSuggestComponent_div_6_div_1_div_17_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function DibiSuggestComponent_div_6_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "div", 50)(2, "div", 43)(3, "div", 44)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fran\u00E7ais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DibiSuggestComponent_div_6_div_1_div_17_img_6_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47)(8, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiSuggestComponent_div_6_div_1_div_17_Template_input_ngModelChange_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const word_r41 = restoredCtx.$implicit; return word_r41.french = $event; })("input", function DibiSuggestComponent_div_6_div_1_div_17_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r46.displaySendButton = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const word_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !word_r41.french);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", word_r41.french);
} }
function DibiSuggestComponent_div_6_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "div", 50)(2, "div", 43)(3, "div", 44)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Anglais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47)(7, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiSuggestComponent_div_6_div_1_div_20_Template_input_ngModelChange_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const word_r47 = restoredCtx.$implicit; return word_r47.english = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const word_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", word_r47.english);
} }
function DibiSuggestComponent_div_6_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "div", 50)(2, "div", 43)(3, "div", 44)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nature grammaticale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47)(7, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiSuggestComponent_div_6_div_1_div_23_Template_select_ngModelChange_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const word_r51 = restoredCtx.$implicit; return word_r51.partOfSpeech = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pronom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verbe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Adjectif");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Adverbe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Conjonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Interjection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Particule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mot d'esprit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const word_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", word_r51.partOfSpeech)("ngModel", word_r51.partOfSpeech);
} }
function DibiSuggestComponent_div_6_div_1_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.responseSuggestWord);
} }
function DibiSuggestComponent_div_6_div_1_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.responseSuggestWord);
} }
function DibiSuggestComponent_div_6_div_1_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65)(1, "div")(2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Veuillez v\u00E9rifier votre proposition avant de l'envoyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_div_37_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r55.sendSuggestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Proposer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
function DibiSuggestComponent_div_6_div_1_img_40_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_img_40_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r57.toggleMoreInfos(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DibiSuggestComponent_div_6_div_1_img_41_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_img_41_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r59.toggleMoreInfos(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DibiSuggestComponent_div_6_div_1_h2_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Processus proposition d'un mot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DibiSuggestComponent_div_6_div_1_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "1) Tout le monde peut proposer un ou plusieurs mots de la m\u00EAme famille (nom, verbe, adjectif, etc.)en compl\u00E9tant un maximum d'informations.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "2) Une fois propos\u00E9e, la suggestion est vot\u00E9e. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "3) \u00C0 partir d'un certain nombre de vote positifs, la suggestion est acceptable et attend la validation des admins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "6) Si le mot n'est pas accept\u00E9 par les admins, l'utilisateur qui a propos\u00E9 le mot peut modifier sa proposition en fonction des commentaires des admins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4) Si les admins l'acceptent, le mot est ajout\u00E9 au dictionnaire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5) Si le mot n'est pas accept\u00E9 par les membres, l'utilisateur qui a propos\u00E9 le mot peut modifier sa proposition en fonction des commentaires.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "7) Lorsque le mot est de nouveau modifi\u00E9, le cycle recommence.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function DibiSuggestComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.removeDibiOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.addDibiOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DibiSuggestComponent_div_6_div_1_ng_container_7_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12)(9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DibiSuggestComponent_div_6_div_1_div_10_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15)(12, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_Template_img_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.addWord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DibiSuggestComponent_div_6_div_1_div_14_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DibiSuggestComponent_div_6_div_1_div_17_Template, 9, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DibiSuggestComponent_div_6_div_1_div_20_Template, 8, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DibiSuggestComponent_div_6_div_1_div_23_Template, 26, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DibiSuggestComponent_div_6_div_1_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.dibiWordsSuggestion.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23)(30, "div", 24)(31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DibiSuggestComponent_div_6_div_1_span_32_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DibiSuggestComponent_div_6_div_1_span_33_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div")(35, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DibiSuggestComponent_div_6_div_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "V\u00E9rifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DibiSuggestComponent_div_6_div_1_div_37_Template, 7, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29)(39, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DibiSuggestComponent_div_6_div_1_img_40_Template, 1, 0, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DibiSuggestComponent_div_6_div_1_img_41_Template, 1, 0, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DibiSuggestComponent_div_6_div_1_h2_42_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DibiSuggestComponent_div_6_div_1_div_43_Template, 15, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.dibiWordsSuggestion.words[0].dibis.length > 1 ? "Plusieurs versions \u00E0 voter" : "Une seule version dibi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dibiWordsSuggestion.words[0].dibis.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dibiWordsSuggestion.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dibiWordsSuggestion.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dibiWordsSuggestion.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dibiWordsSuggestion.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dibiWordsSuggestion.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description ", ctx_r2.dibiWordsSuggestion.words.length === 1 ? "du mot" : "des mots", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.dibiWordsSuggestion.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.statusResponse === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.statusResponse === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.displaySendButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.more);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.more);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.more);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.more);
} }
function DibiSuggestComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68)(1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vous devez vous connecter via Google pour proposer un mot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function DibiSuggestComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DibiSuggestComponent_div_6_div_1_Template, 44, 16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DibiSuggestComponent_div_6_div_2_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allLoaded && ctx_r0.dibiWordsSuggestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.allLoaded);
} }
function DibiSuggestComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68)(1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vous devez vous connecter via Google pour proposer un mot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class DibiSuggestComponent {
    constructor(socket) {
        this.socket = socket;
        this.allLoaded = false; // Attent que tous les éléments soit chargés depuis le component parent
        this.displaySendButton = false; // Affiche le boutton d'envoie une fois que tout est conforme
        this.more = false; // Affiche plus d'infos sur la proposition d'un mot
    }
    ngOnInit() {
        // Récupération de la réponse serveur apprès proposition
        this.socket.on('responseSuggestWord', data => {
            this.responseSuggestWord = data.mes;
            this.statusResponse = data.status;
            if (data.status === 0) {
                this.dibiWordsSuggestion = {
                    version: 1,
                    author: this.user.email,
                    words: [{
                            dibis: [{ dibi: '' }],
                            french: '',
                            partOfSpeech: 'Noun'
                        }],
                    optionsDescription: [''],
                    description: '',
                    upVotes: [],
                    downVotes: [],
                    comments: [],
                    state: 'suggested'
                };
            }
            setTimeout(() => {
                this.responseSuggestWord = undefined;
                this.statusResponse = undefined;
            }, 30000);
        });
    }
    ngOnChanges() {
        // Une fois que tous les éléments en inputs sont biens chargés
        if (this.dibiDict && this.suggestions && this.user && this.accountSettings && !this.allLoaded) {
            this.allLoaded = true;
            // Création de l'objet js dibiWordsSuggestion
            this.dibiWordsSuggestion = {
                version: 1,
                author: this.user.email,
                words: [{
                        dibis: [{ dibi: '' }],
                        french: '',
                        partOfSpeech: 'Noun'
                    }],
                optionsDescription: [''],
                description: '',
                upVotes: [],
                downVotes: [],
                comments: [],
                state: 'suggested'
            };
        }
    }
    /**
     * Ajoute un mot à la liste des mots suggérés
     */
    addWord() {
        // Ajout d'un mot jusqu'à 12 maximum pour une suggestion
        if (this.dibiWordsSuggestion.words.length < 12) {
            let temp = [];
            this.dibiWordsSuggestion.words[0].dibis.forEach(() => {
                temp.push({ dibi: '' });
            });
            this.dibiWordsSuggestion.words.push({
                dibis: temp,
                french: '',
                partOfSpeech: 'Noun'
            });
        }
    }
    /**
     * Retire un pot spécifique de la liste des mots suggérés
     */
    removeWord(index) {
        this.dibiWordsSuggestion.words.splice(index, 1);
    }
    /**
     * Ajoute une option de mot dibi à tous les mots
     */
    addDibiOption() {
        // Enlevement d'une option jusqu'à 12 maximum
        if (this.dibiWordsSuggestion.words[0].dibis.length < 12) {
            // Modification de toutes les options de chaque mot
            this.dibiWordsSuggestion.words.forEach(word => {
                word.dibis.push({ dibi: '' });
            });
            // Modification du nombre de descriptions
            this.dibiWordsSuggestion.optionsDescription.push('');
        }
    }
    /**
     * Enlève une option (la dernière) de mot dibi à tous les mots
     */
    removeDibiOption() {
        // Enlevement d'une option sauf s'il en reste qu'une
        if (this.dibiWordsSuggestion.words[0].dibis.length > 1) {
            // Modification de toutes les options de chaque mot
            this.dibiWordsSuggestion.words.forEach(word => {
                word.dibis.pop();
            });
            // Modification du nombre de descriptions
            this.dibiWordsSuggestion.optionsDescription.pop();
        }
    }
    /**
     * Propose un mot en l'ajoutant dans la bdd
     */
    check() {
        // Vérification de la conformité des données
        this.responseSuggestWord = undefined;
        this.statusResponse = undefined;
        let isValid = true;
        this.dibiWordsSuggestion.words.forEach(word => {
            if (!word.french) {
                isValid = false;
            }
            word.dibis.forEach(option => {
                if (!option.dibi) {
                    isValid = false;
                }
            });
        });
        if (isValid) {
            this.displaySendButton = true;
            this.responseSuggestWord = 'Ok';
            this.statusResponse = 0;
            setTimeout(() => {
                this.responseSuggestWord = undefined;
                this.statusResponse = undefined;
            }, 10000);
        }
        else {
            this.responseSuggestWord = 'Tous les champs obligatoires ne sont pas remplis';
            this.statusResponse = 1;
            setTimeout(() => {
                this.responseSuggestWord = undefined;
                this.statusResponse = undefined;
            }, 10000);
        }
    }
    /**
     * Envoie la suggestion au serveur
     */
    sendSuggestion() {
        this.responseSuggestWord = undefined;
        this.statusResponse = undefined;
        this.displaySendButton = false;
        this.socket.emit('sendSuggestion', this.dibiWordsSuggestion);
    }
    /**
     * Affiche ou masque plus d'infos
     */
    toggleMoreInfos(b) {
        this.more = b;
    }
}
DibiSuggestComponent.ɵfac = function DibiSuggestComponent_Factory(t) { return new (t || DibiSuggestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__.Socket)); };
DibiSuggestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DibiSuggestComponent, selectors: [["app-dibi-suggest"]], inputs: { dibiDict: "dibiDict", suggestions: "suggestions", user: "user", accountSettings: "accountSettings" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 2, consts: [[1, "body"], [1, "title-description"], ["class", "word-and-help", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "word-and-help"], ["class", "all-fields", 4, "ngIf"], [1, "all-fields"], [1, "dibis"], [1, "dibis-suggestions"], ["src", "assets/minus-solid.svg", "title", "Enlever proposition Dibi", 3, "click"], ["src", "assets/plus-solid.svg", "title", "Ajouter proposition Dibi", 3, "click"], [4, "ngIf"], [1, "table"], [1, "row-header"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "last-column"], ["src", "assets/plus-solid.svg", "title", "Nouveau mot", 3, "click"], [1, "row-dibis"], [1, "row-french"], [1, "row-english"], [1, "row-part-of-speech"], [1, "description"], ["rows", "5", 3, "ngModel", "ngModelChange"], [1, "send"], [1, "row", "row-1"], ["class", "message-error", 4, "ngIf"], ["class", "message-success", 4, "ngIf"], [3, "click"], ["class", "row row-2", 4, "ngIf"], [1, "bottom"], [1, "bottom-title"], ["class", "chevron-more", "src", "assets/circle-info-solid.svg", 3, "click", 4, "ngIf"], ["class", "help", 4, "ngIf"], ["class", "description-dibi", 4, "ngFor", "ngForOf"], [1, "description-dibi"], [3, "src"], ["placeholder", "origine, provenance, racine", "type", "text", 3, "ngModel", "ngModelChange"], [1, "option"], [1, "header-span-and-icon"], ["src", "assets/trash-solid.svg", "title", "Retirer le mot", 3, "click", 4, "ngIf"], ["src", "assets/trash-solid.svg", "title", "Retirer le mot", 3, "click"], ["class", "block block-multiple", 4, "ngFor", "ngForOf"], [1, "block", "block-multiple"], [1, "top"], [1, "img-and-label"], [3, "src", 4, "ngIf"], ["src", "assets/mandatory.svg", 4, "ngIf"], [1, "bottom-input"], ["type", "text", 3, "className", "ngModel", "ngModelChange", "input"], ["src", "assets/mandatory.svg"], [1, "block"], ["type", "text", 3, "ngModel", "ngModelChange", "input"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "className", "ngModel", "ngModelChange"], ["value", "Noun"], ["value", "Pronoun"], ["value", "Verb"], ["value", "Adjective"], ["value", "Adverb"], ["value", "Conjonction"], ["value", "Interjection"], ["value", "Particule"], ["value", "SpiritWord"], [1, "message-error"], [1, "message-success"], [1, "row", "row-2"], ["src", "assets/circle-info-solid.svg", 1, "chevron-more", 3, "click"], [1, "help"], [1, ""], [1, "not-connected"]], template: function DibiSuggestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Proposer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Un ou plusieurs mots de la m\u00EAme famille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DibiSuggestComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DibiSuggestComponent_div_7_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .title-description[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.body[_ngcontent-%COMP%]   .title-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #444240;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .dibis-suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .dibis-suggestions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .description-dibi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 6px;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .description-dibi[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .description-dibi[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  width: calc(100% - 24px - 12px);\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 6px;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n  width: 100%;\n  height: 16px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .img-and-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .img-and-label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .img-and-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #bbb;\n  width: calc(100% - 32px);\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .bottom-input[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .bottom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .bottom-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .block-multiple[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  width: 200px;\n  min-width: 200px;\n  padding: 6px;\n  border-right: 1px solid #757473;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .header-span-and-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .last-column[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 28px;\n  min-width: 28px;\n  padding: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .last-column[_ngcontent-%COMP%]   .dibis-suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .last-column[_ngcontent-%COMP%]   .dibis-suggestions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #bbb;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-header[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #757473;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-french[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #757473;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-dibis[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #757473;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-dibis[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-english[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #757473;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-part-of-speech[_ngcontent-%COMP%] {\n  display: flex;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n  margin-top: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n  margin-top: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%]   .message-success[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #8e8;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%]   .message-error[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #e88;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n  margin-top: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.body[_ngcontent-%COMP%]   .word-and-help[_ngcontent-%COMP%]   .all-fields[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYmktc3VnZ2VzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1hcmlvJTIwVklFSUxMRURFTlRcXERlc2t0b3BcXE1FQU5cXERpcnR5UGF6dVxcY2xpZW50XFxzcmNcXGFwcFxcbWFpblxcZGliaS1zdWdnZXN0XFxkaWJpLXN1Z2dlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQVJNO0VBU04sWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSko7QURNSTtFQUNJLFlBWEc7RUFZSCxXQVpHO0VBYUgsZUFBQTtBQ0pSO0FET0k7RUFDSSxrQkFwQkU7QUNlVjtBRE9RO0VBQ0ksZUFBQTtBQ0xaO0FEU0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNQUjtBRFNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDUFo7QURTWTs7Ozs7RUFLSSxrQkF2Q0E7RUF3Q0EseUJBQUE7QUNQaEI7QURVWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBL0NOO0FDdUNWO0FEVWdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDUnBCO0FEVW9CO0VBQ0ksZ0JBdERkO0FDOENWO0FEWWdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUE3RFY7RUE4RFUsV0FBQTtBQ1ZwQjtBRFlvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDVnhCO0FEYW9CO0VBQ0ksZ0JBdEVkO0VBdUVjLCtCQUFBO0FDWHhCO0FEZ0JZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUEvRU47RUFnRk0sY0FBQTtBQ2RoQjtBRGdCZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNkcEI7QURnQm9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQXpGYjtBQzJFWDtBRGdCd0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNkNUI7QURnQjRCO0VBQ0ksaUJBQUE7QUNkaEM7QURpQjRCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ2ZoQztBRG9Cb0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ2xCeEI7QURvQndCOztFQUVJLFdBQUE7QUNsQjVCO0FEdUJnQjtFQUNJLGtCQTFIVjtBQ3FHVjtBRDBCZ0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQWxJVjtFQW1JVSwrQkFqSVg7QUN5R1Q7QUQwQm9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUN4QnhCO0FENEJnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFqSlY7QUN1SFY7QUQ0Qm9CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQzFCeEI7QUQ0QndCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUMxQjVCO0FEaUNnQjtFQUNJLGFBQUE7RUFDQSxnQ0FqS1g7QUNrSVQ7QURrQ2dCO0VBQ0ksYUFBQTtFQUNBLGdDQXRLWDtBQ3NJVDtBRG1DZ0I7RUFDSSxhQUFBO0VBQ0EsZ0NBM0tYO0FDMElUO0FEbUNvQjtFQUNJLDhCQUFBO0FDakN4QjtBRHFDZ0I7RUFDSSxhQUFBO0VBQ0EsZ0NBcExYO0FDaUpUO0FEc0NnQjtFQUNJLGFBQUE7QUNwQ3BCO0FEd0NZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFqTU47RUFrTU0sZUFsTU47QUM0SlY7QUR3Q2dCO0VBQ0ksa0JBQUE7QUN0Q3BCO0FEeUNnQjtFQUNJLGdCQUFBO0FDdkNwQjtBRDJDWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBaE5OO0VBaU5NLGVBak5OO0FDd0tWO0FEMkNnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDekNwQjtBRDRDZ0I7RUFDSSxlQTFOVjtBQ2dMVjtBRDZDZ0I7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUMzQ3BCO0FEOENnQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQzVDcEI7QURnRFk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQTNPTjtFQTRPTSxlQTVPTjtBQzhMVjtBRGdEZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUM5Q3BCO0FEZ0RvQjtFQUNJLGdCQW5QZDtBQ3FNVjtBRGtEZ0I7RUFDSSxlQXhQVjtBQ3dNVjtBRGtEb0I7RUFDSSxtQkFBQTtBQ2hEeEI7QURtRG9CO0VBQ0ksa0JBL1BkO0FDOE1WIiwiZmlsZSI6ImRpYmktc3VnZ2VzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWRkaW5nOiA2cHg7XHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXI6IDFweCBzb2xpZCAjNzU3NDczO1xyXG4kaW1nLXNpemU6IDE2cHg7XHJcblxyXG4uYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogJGltZy1zaXplO1xyXG4gICAgICAgIHdpZHRoOiAkaW1nLXNpemU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHBhZGRpbmc7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53b3JkLWFuZC1oZWxwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC5hbGwtZmllbGRzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIC50YWJsZSxcclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAuZGliaXMsXHJcbiAgICAgICAgICAgIC5zZW5kLFxyXG4gICAgICAgICAgICAuYm90dG9tIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDI0MDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRpYmlzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRpYmlzLXN1Z2dlc3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uLWRpYmkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjRweCAtIDEycHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYmxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaW1nLXNpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWFuZC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JiYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ib3R0b20taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJsb2NrLW11bHRpcGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb2x1bW5zXHJcblxyXG4gICAgICAgICAgICAgICAgLm9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXNwYW4tYW5kLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sYXN0LWNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCRpbWctc2l6ZSArICgyICogJHBhZGRpbmcpKTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoJGltZy1zaXplICsgKDIgKiAkcGFkZGluZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGliaXMtc3VnZ2VzdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJvd3NcclxuXHJcbiAgICAgICAgICAgICAgICAucm93LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yb3ctZnJlbmNoIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJvdy1kaWJpcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucm93LWVuZ2xpc2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucm93LXBhcnQtb2Ytc3BlZWNoIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRwYWRkaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlbmQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRwYWRkaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJvdy0yIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVzc2FnZS1zdWNjZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGU4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tZXNzYWdlLWVycm9yIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTg4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm90dG9tIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkcGFkZGluZztcclxuXHJcbiAgICAgICAgICAgICAgICAuYm90dG9tLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVscCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmJvZHkgaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvZHkgLnRpdGxlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmJvZHkgLnRpdGxlLWRlc2NyaXB0aW9uIHNwYW4ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUsXG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuZGVzY3JpcHRpb24sXG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuZGliaXMsXG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuc2VuZCxcbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC5ib3R0b20ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQyNDA7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuZGliaXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA2cHg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuZGliaXMgLmRpYmlzLXN1Z2dlc3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC5kaWJpcyAuZGliaXMtc3VnZ2VzdGlvbnMgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC5kaWJpcyAuZGVzY3JpcHRpb24tZGliaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuZGliaXMgLmRlc2NyaXB0aW9uLWRpYmkgaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC5kaWJpcyAuZGVzY3JpcHRpb24tZGliaSBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4IC0gMTJweCk7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnRhYmxlIC5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUgLmJsb2NrIC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTZweDtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC50YWJsZSAuYmxvY2sgLnRvcCAuaW1nLWFuZC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUgLmJsb2NrIC50b3AgLmltZy1hbmQtbGFiZWwgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUgLmJsb2NrIC50b3AgLmltZy1hbmQtbGFiZWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNiYmI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC50YWJsZSAuYmxvY2sgLmJvdHRvbS1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnRhYmxlIC5ibG9jayAuYm90dG9tLWlucHV0IGlucHV0LFxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnRhYmxlIC5ibG9jayAuYm90dG9tLWlucHV0IHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnRhYmxlIC5ibG9jay1tdWx0aXBsZSB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC50YWJsZSAub3B0aW9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3NTc0NzM7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUgLm9wdGlvbiAuaGVhZGVyLXNwYW4tYW5kLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUgLmxhc3QtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI4cHg7XG4gIG1pbi13aWR0aDogMjhweDtcbiAgcGFkZGluZzogNnB4O1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnRhYmxlIC5sYXN0LWNvbHVtbiAuZGliaXMtc3VnZ2VzdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUgLmxhc3QtY29sdW1uIC5kaWJpcy1zdWdnZXN0aW9ucyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2JiYjtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC50YWJsZSAucm93LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzU3NDczO1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnRhYmxlIC5yb3ctZnJlbmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NTc0NzM7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAudGFibGUgLnJvdy1kaWJpcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzU3NDczO1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnRhYmxlIC5yb3ctZGliaXMgLm9wdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC50YWJsZSAucm93LWVuZ2xpc2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1NzQ3Mztcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC50YWJsZSAucm93LXBhcnQtb2Ytc3BlZWNoIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLmRlc2NyaXB0aW9uIHNwYW4ge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuZGVzY3JpcHRpb24gdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLnNlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC5zZW5kIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuc2VuZCAucm93LTIge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuc2VuZCAubWVzc2FnZS1zdWNjZXNzIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgY29sb3I6ICM4ZTg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuc2VuZCAubWVzc2FnZS1lcnJvciB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGNvbG9yOiAjZTg4O1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLmJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLmJvdHRvbSAuYm90dG9tLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2R5IC53b3JkLWFuZC1oZWxwIC5hbGwtZmllbGRzIC5ib3R0b20gLmJvdHRvbS10aXRsZSBoMiB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuYm90dG9tIC5oZWxwIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvZHkgLndvcmQtYW5kLWhlbHAgLmFsbC1maWVsZHMgLmJvdHRvbSAuaGVscCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYm9keSAud29yZC1hbmQtaGVscCAuYWxsLWZpZWxkcyAuYm90dG9tIC5oZWxwIHAge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59Il19 */"] });


/***/ }),

/***/ 4634:
/*!*******************************************************!*\
  !*** ./src/app/main/dibi-vote/dibi-vote.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DibiVoteComponent": () => (/* binding */ DibiVoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function DibiVoteComponent_div_3_div_14_div_13_div_5_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const indexDibi_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/discord_emojis/letter_", indexDibi_r8, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DibiVoteComponent_div_3_div_14_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DibiVoteComponent_div_3_div_14_div_13_div_5_img_1_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const dibi_r7 = ctx.$implicit;
    const word_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", word_r5.dibis.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", word_r5.partOfSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dibi_r7.dibi);
} }
function DibiVoteComponent_div_3_div_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DibiVoteComponent_div_3_div_14_div_13_div_5_Template, 4, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const word_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r5.french + (word_r5.english ? " / " + word_r5.english : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", word_r5.dibis);
} }
function DibiVoteComponent_div_3_div_14_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} }
function DibiVoteComponent_div_3_div_14_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DibiVoteComponent_div_3_div_14_div_30_div_1_Template, 1, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestion_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestion_r2.words[0].dibis);
} }
function DibiVoteComponent_div_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 6)(2, "div", 12)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DibiVoteComponent_div_3_div_14_div_13_Template, 6, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "div", 19)(19, "div", 20)(20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DibiVoteComponent_div_3_div_14_div_30_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestion_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.profiles[suggestion_r2.author].user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.profiles[suggestion_r2.author].discordPseudo, "#", ctx_r1.profiles[suggestion_r2.author].discordTag, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, suggestion_r2.date, "dd/MM/YYYY - HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestion_r2.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r2.upVotes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r2.downVotes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestion_r2.words[0].dibis.length > 1);
} }
function DibiVoteComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Auteur et date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Suggestion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DibiVoteComponent_div_3_div_14_Template, 32, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.suggestions);
} }
class DibiVoteComponent {
    constructor(socket) {
        this.socket = socket;
        this.allLoaded = false; // Attent que tous les éléments soit chargés depuis le component parent
    }
    ngOnInit() {
    }
    ngOnChanges() {
        // Une fois que tous les éléments en inputs sont biens chargés
        if (this.dibiDict && this.suggestions && this.user && this.accountSettings && this.profiles && !this.allLoaded) {
            this.allLoaded = true;
        }
    }
}
DibiVoteComponent.ɵfac = function DibiVoteComponent_Factory(t) { return new (t || DibiVoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__.Socket)); };
DibiVoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DibiVoteComponent, selectors: [["app-dibi-vote"]], inputs: { dibiDict: "dibiDict", suggestions: "suggestions", user: "user", accountSettings: "accountSettings", profiles: "profiles" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [[1, "body"], [1, "container"], [1, "options"], ["class", "table", 4, "ngIf"], [1, "table"], [1, "row-header"], [1, "author-date"], [1, "suggestion"], [1, "vote"], [1, "admin"], ["class", "row-suggestion", 4, "ngFor", "ngForOf"], [1, "row-suggestion"], [1, "author"], [1, "profile-picture"], [3, "src"], [1, "names"], [1, "date"], ["class", "word", 4, "ngFor", "ngForOf"], [1, "description"], [1, "vote-and-comment"], [1, "two-arrows"], [1, "arrow-value"], ["src", "assets/discord_emojis/arrow_up.svg"], ["src", "assets/discord_emojis/arrow_down.svg"], [1, "comment"], ["src", "assets/discord_emojis/comment.svg"], ["class", "choose-dibi-option", 4, "ngIf"], [1, "word"], [1, "french"], [1, "dibis"], ["class", "dibi", 4, "ngFor", "ngForOf"], [1, "dibi"], [3, "src", 4, "ngIf"], [3, "className"], [1, "choose-dibi-option"], ["class", "option-stars", 4, "ngFor", "ngForOf"], [1, "option-stars"]], template: function DibiVoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DibiVoteComponent_div_3_Template, 15, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 12px;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  display: flex;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%] {\n  padding: 12px;\n  padding: 12px;\n  border-right: 1px solid #757473;\n  width: 30%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%] {\n  padding: 12px;\n  padding: 12px;\n  border-right: 1px solid #757473;\n  width: 40%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  padding: 12px;\n  padding: 12px;\n  border-right: 1px solid #757473;\n  width: 20%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .vote-and-comment[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .vote-and-comment[_ngcontent-%COMP%]   .two-arrows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .vote-and-comment[_ngcontent-%COMP%]   .two-arrows[_ngcontent-%COMP%]   .arrow-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .vote-and-comment[_ngcontent-%COMP%]   .two-arrows[_ngcontent-%COMP%]   .arrow-value[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .vote-and-comment[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .vote-and-comment[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .choose-dibi-option[_ngcontent-%COMP%] {\n  display: flex;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   .choose-dibi-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n  padding: 12px;\n  padding: 12px;\n  width: 10%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%] {\n  display: flex;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n  border-top: 1px solid #757473;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  border-radius: 32px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .names[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: calc(100% - 32px - 12px);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .names[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .author-date[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #757473;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%]   .french[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .dibi[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .dibi[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-right: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%]   .dibis[_ngcontent-%COMP%]   .dibi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: calc(100% - 20px - 6px);\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  display: flex;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .row-suggestion[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYmktdm90ZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1hcmlvJTIwVklFSUxMRURFTlRcXERlc2t0b3BcXE1FQU5cXERpcnR5UGF6dVxcY2xpZW50XFxzcmNcXGFwcFxcbWFpblxcZGliaS12b3RlXFxkaWJpLXZvdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxhQUFBO0VBQ0EsYUFQTTtFQVFOLFlBQUE7RUFDQSxXQUFBO0FDSko7QURNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSlI7QURNUTtFQUNJLGFBQUE7QUNKWjtBRE9RO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0xaO0FEY1k7RUFDSSxhQWxDTjtFQW1DTSxhQW5DTjtFQW9DTSwrQkFsQ1A7RUFtQ08sVUFBQTtBQ1poQjtBRGVZO0VBQ0ksYUF6Q047RUEwQ00sYUExQ047RUEyQ00sK0JBekNQO0VBMENPLFVBQUE7QUNiaEI7QURnQlk7RUFDSSxhQWhETjtFQWlETSxhQWpETjtFQWtETSwrQkFoRFA7RUFpRE8sVUFBQTtBQ2RoQjtBRGdCZ0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ2RwQjtBRGdCb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDZHhCO0FEZ0J3QjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQWpFbEI7QUNtRFY7QURrQjRCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkF4RXRCO0FDd0RWO0FEcUJvQjtFQUNJLGFBQUE7RUFDQSxVQUFBO0FDbkJ4QjtBRHFCd0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ25CNUI7QUR3QmdCO0VBQ0ksYUFBQTtBQ3RCcEI7QUR3Qm9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkE5RmQ7QUN3RVY7QUQyQlk7RUFDSSxhQXBHTjtFQXFHTSxhQXJHTjtFQXNHTSxVQUFBO0FDekJoQjtBRDRCWTtFQUNJLGFBQUE7QUMxQmhCO0FENkJZO0VBQ0ksYUFBQTtBQzNCaEI7QUQ2QmdCOzs7O0VBSUksNkJBbEhYO0FDdUZUO0FEd0NnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ3RDcEI7QUR3Q29CO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkF4SWQ7QUNrR1Y7QUR3Q3dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN0QzVCO0FEd0M0QjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFuSnRCO0FDNkdWO0FEMEN3QjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUN4QzVCO0FEMEM0QjtFQUNJLHlCQUFBO0FDeENoQztBRDZDb0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQzNDeEI7QUQ2Q3dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUMzQzVCO0FEZ0RnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQzlDcEI7QURnRG9CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBckxkO0FDdUlWO0FEZ0R3QjtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDOUM1QjtBRGlEd0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUMvQzVCO0FEaUQ0QjtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDL0NoQztBRGlEZ0M7RUFDSSxZQWxNekI7RUFtTXlCLFdBbk16QjtFQW9NeUIsaUJBQUE7QUMvQ3BDO0FEa0RnQztFQUNJLDhCQUFBO0FDaERwQztBRHNEb0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ3BEeEI7QUR3RGdCO0VBQ0ksYUFBQTtBQ3REcEI7QUQwRGdCO0VBQ0ksYUFBQTtBQ3hEcEIiLCJmaWxlIjoiZGliaS12b3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZGRpbmc6IDEycHg7XHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXI6IDFweCBzb2xpZCAjNzU3NDczO1xyXG4kaW1nLXNpemU6IDIwcHg7XHJcblxyXG4uYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC8vIC5zdGF0ZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyO1xyXG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLmF1dGhvci1kYXRlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6ICRib3JkZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VnZ2VzdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZvdGUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnZvdGUtYW5kLWNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50d28tYXJyb3dzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnJvdy12YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNob29zZS1kaWJpLW9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZG1pbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJvdy1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJvdy1zdWdnZXN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmF1dGhvci1kYXRlLFxyXG4gICAgICAgICAgICAgICAgLnN1Z2dlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICAudm90ZSxcclxuICAgICAgICAgICAgICAgIC5hZG1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAuc3RhdGUge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hdXRob3ItZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCAtIDEycHgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzU3NDczO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zdWdnZXN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC53b3JkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJlbmNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpYmlzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaWJpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaW1nLXNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkaW1nLXNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICRpbWctc2l6ZSAtIDZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnZvdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hZG1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC5jb250YWluZXIgLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5hdXRob3ItZGF0ZSB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3NTc0NzM7XG4gIHdpZHRoOiAzMCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAuc3VnZ2VzdGlvbiB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3NTc0NzM7XG4gIHdpZHRoOiA0MCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAudm90ZSB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3NTc0NzM7XG4gIHdpZHRoOiAyMCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAudm90ZSAudm90ZS1hbmQtY29tbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnZvdGUgLnZvdGUtYW5kLWNvbW1lbnQgLnR3by1hcnJvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnZvdGUgLnZvdGUtYW5kLWNvbW1lbnQgLnR3by1hcnJvd3MgLmFycm93LXZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC52b3RlIC52b3RlLWFuZC1jb21tZW50IC50d28tYXJyb3dzIC5hcnJvdy12YWx1ZSBpbWcge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAudm90ZSAudm90ZS1hbmQtY29tbWVudCAuY29tbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAudm90ZSAudm90ZS1hbmQtY29tbWVudCAuY29tbWVudCBpbWcge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnZvdGUgLmNob29zZS1kaWJpLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAudm90ZSAuY2hvb3NlLWRpYmktb3B0aW9uIGltZyB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5hZG1pbiB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiAxMCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAucm93LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAucm93LXN1Z2dlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5hdXRob3ItZGF0ZSxcbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuc3VnZ2VzdGlvbixcbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAudm90ZSxcbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuYWRtaW4ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzc1NzQ3Mztcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuYXV0aG9yLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5hdXRob3ItZGF0ZSAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAucm93LXN1Z2dlc3Rpb24gLmF1dGhvci1kYXRlIC5hdXRob3IgLnByb2ZpbGUtcGljdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5hdXRob3ItZGF0ZSAuYXV0aG9yIC5wcm9maWxlLXBpY3R1cmUgaW1nIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5hdXRob3ItZGF0ZSAuYXV0aG9yIC5uYW1lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCAtIDEycHgpO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5hdXRob3ItZGF0ZSAuYXV0aG9yIC5uYW1lcyBzcGFuIHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuYXV0aG9yLWRhdGUgLmRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuYXV0aG9yLWRhdGUgLmRhdGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3NTc0NzM7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAucm93LXN1Z2dlc3Rpb24gLnN1Z2dlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5zdWdnZXN0aW9uIC53b3JkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuc3VnZ2VzdGlvbiAud29yZCAuZnJlbmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAucm93LXN1Z2dlc3Rpb24gLnN1Z2dlc3Rpb24gLndvcmQgLmRpYmlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuc3VnZ2VzdGlvbiAud29yZCAuZGliaXMgLmRpYmkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC50YWJsZSAucm93LXN1Z2dlc3Rpb24gLnN1Z2dlc3Rpb24gLndvcmQgLmRpYmlzIC5kaWJpIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5zdWdnZXN0aW9uIC53b3JkIC5kaWJpcyAuZGliaSBzcGFuIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHggLSA2cHgpO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC5zdWdnZXN0aW9uIC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAudGFibGUgLnJvdy1zdWdnZXN0aW9uIC52b3RlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ib2R5IC5jb250YWluZXIgLnRhYmxlIC5yb3ctc3VnZ2VzdGlvbiAuYWRtaW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"] });


/***/ }),

/***/ 2290:
/*!*********************************************!*\
  !*** ./src/app/main/flag/flag.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlagComponent": () => (/* binding */ FlagComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5828);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function FlagComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chargement du drapeau...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FlagComponent {
    constructor(http) {
        this.http = http;
        this.url = 'https://api-flag.fouloscopie.com/flag';
        this.jsonFlag = './assets/flag.json';
        this.jsonRegions = './assets/regions.json';
        this.stateFechFlag = 0; // Etat de la requête flag à Fouloscopie
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.concat)(this.fetchRegions(), this.fetchFlag()).subscribe(data => { }, err => { console.error(err.message); }, () => {
            this.buildFlag();
        });
    }
    ngOnChanges(change) {
        this.display();
    }
    fetchRegions() {
        return this.http.get(this.jsonRegions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
            this.regions = data;
        }));
    }
    fetchFlag() {
        this.stateFechFlag = 1;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
        return this.http.get(this.url, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
            this.stateFechFlag = 2;
            this.flag = data;
        }));
    }
    buildFlag() {
        this.nb = this.flag.length; // Nombre exact de pixels
        this.i = Math.ceil(Math.sqrt(this.nb / 2)); // Nombre de lignes (calculé en fonction de nb)
        this.j = this.i * 2; // Nombre de colonnes (calculé en fonction de i)
        let n = 0; // L'index du pixel qu'on traite actuellement
        let iter = 1; // L'itération qui se termine par le mouvement vers la droite
        while (n <= this.nb) {
            for (let x = 1; x <= iter; x++) {
                if (n < this.nb) {
                    this.flag[n].coord = { i: x, j: (iter * 2 - 1) };
                }
                n++;
            }
            for (let x = 1; x <= iter; x++) {
                if (n < this.nb) {
                    this.flag[n].coord = { i: x, j: (iter * 2) };
                }
                n++;
            }
            for (let x = 1; x <= iter * 2; x++) {
                if (n < this.nb) {
                    this.flag[n].coord = { i: (iter + 1), j: x };
                }
                n++;
            }
            iter++;
        }
        this.display();
    }
    display() {
        let canvas = document.getElementById('flag-canvas');
        canvas.style.width = (this.j * this.pixelSize) + 'px';
        canvas.style.height = (this.i * this.pixelSize) + 'px';
        let ctx = canvas.getContext('2d');
        ctx.canvas.width = (this.j * this.pixelSize);
        ctx.canvas.height = (this.i * this.pixelSize);
        ctx.beginPath();
        // Affichage des pixels
        for (let x = 0; x < this.nb; x++) {
            const p = this.flag[x];
            ctx.fillStyle = p.hexColor;
            ctx.fillRect(((p.coord.j - 1) * this.pixelSize), ((p.coord.i - 1) * this.pixelSize), this.pixelSize, this.pixelSize);
        }
        // Affichage des régions
        if (this.displayRegions) {
            this.regions.forEach(region => {
                ctx.fillStyle = 'rgba(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', 0.4)';
                ctx.fillRect(((region.lowerJ - 1) * this.pixelSize), ((region.lowerI - 1) * this.pixelSize), (((region.upperJ - region.lowerJ) + 1) * this.pixelSize), (((region.upperI - region.lowerI) + 1) * this.pixelSize));
                ctx.fillStyle = '#000000';
                ctx.strokeRect(((region.lowerJ - 1) * this.pixelSize), ((region.lowerI - 1) * this.pixelSize), (((region.upperJ - region.lowerJ) + 1) * this.pixelSize), (((region.upperI - region.lowerI) + 1) * this.pixelSize));
            });
            ctx.closePath();
        }
    }
}
FlagComponent.ɵfac = function FlagComponent_Factory(t) { return new (t || FlagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
FlagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlagComponent, selectors: [["app-flag"]], inputs: { pixelSize: "pixelSize", displayRegions: "displayRegions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [[1, "body"], [4, "ngIf"], ["id", "flag-canvas", 1, "flag-canvas"]], template: function FlagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlagComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stateFechFlag < 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 12px;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYWcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNYXJpbyUyMFZJRUlMTEVERU5UXFxEZXNrdG9wXFxNRUFOXFxEaXJ0eVBhenVcXGNsaWVudFxcc3JjXFxhcHBcXG1haW5cXGZsYWdcXGZsYWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsYUFKTTtFQUtOLFlBQUE7RUFDQSxXQUFBO0FDRkoiLCJmaWxlIjoiZmxhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kcGFkZGluZzogMTJweDtcclxuXHJcbi5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgLmZsYWctY2FudmFzIHtcclxuICAgIH1cclxufSIsIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 4966:
/*!***********************************************!*\
  !*** ./src/app/main/infos/infos.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfosComponent": () => (/* binding */ InfosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class InfosComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfosComponent.ɵfac = function InfosComponent_Factory(t) { return new (t || InfosComponent)(); };
InfosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfosComponent, selectors: [["app-infos"]], decls: 5, vars: 0, consts: [[1, "body"]], template: function InfosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bienvenue sur le site DibiDict !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ici, tous les mots de la langues sont r\u00E9pertori\u00E9s dans le dictionnaire.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0px 0px 6px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWFyaW8lMjBWSUVJTExFREVOVFxcRGVza3RvcFxcTUVBTlxcRGlydHlQYXp1XFxjbGllbnRcXHNyY1xcYXBwXFxtYWluXFxpbmZvc1xcaW5mb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUxNO0VBTU4sWUFBQTtFQUNBLFdBQUE7QUNESjtBREdJO0VBQ0ksd0JBQUE7QUNEUiIsImZpbGUiOiJpbmZvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWRkaW5nOiAxMnB4O1xyXG5cclxuLmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBoMSwgaDIsIHNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggNnB4IDBweDtcclxuICAgIH1cclxufSIsIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IGgxLCAuYm9keSBoMiwgLmJvZHkgc3BhbiB7XG4gIHBhZGRpbmc6IDBweCAwcHggNnB4IDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 1350:
/*!*********************************************!*\
  !*** ./src/app/main/logs/logs.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsComponent": () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function LogsComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const log_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, log_r2.timestamp, "dd/MM/y - HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](log_r2.message);
} }
function LogsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogsComponent_div_8_div_1_Template, 8, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.logs);
} }
class LogsComponent {
    constructor(socket) {
        this.socket = socket;
    }
    ngOnInit() {
        // Demande des logs
        this.socket.emit('fetchLogs', {});
        this.socket.on('responseLogs', data => {
            this.logs = data.logs.reverse();
        });
    }
}
LogsComponent.ɵfac = function LogsComponent_Factory(t) { return new (t || LogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__.Socket)); };
LogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogsComponent, selectors: [["app-logs"]], decls: 9, vars: 1, consts: [[1, "body"], [1, "container"], [1, "header"], [1, "left"], [1, "middle"], [1, "right"], ["class", "list", 4, "ngIf"], [1, "list"], ["class", "log", 4, "ngFor", "ngForOf"], [1, "log"], [1, "timestamp"], [1, "message"]], template: function LogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logs base de donn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LogsComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  padding: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 100px;\n  padding-bottom: 12px;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%] {\n  display: flex;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n  padding-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%]:hover {\n  background-color: #555351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNYXJpbyUyMFZJRUlMTEVERU5UXFxEZXNrdG9wXFxNRUFOXFxEaXJ0eVBhenVcXGNsaWVudFxcc3JjXFxhcHBcXG1haW5cXGxvZ3NcXGxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQVZNO0FDRlY7QURjSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWlI7QURjUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBdkJDO0VBd0JELG9CQXRCRjtFQXVCRSxXQUFBO0FDWlo7QURjWTtFQUNJLG1CQTFCTjtBQ2NWO0FEZVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNiaEI7QURnQlk7RUFDSSxrQkFuQ047QUNxQlY7QURpQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNmaEI7QURtQlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ2pCWjtBRG1CWTtFQUNJLGFBQUE7QUNqQmhCO0FEbUJnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQXhEVjtBQ3VDVjtBRG9CZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNsQnBCO0FEc0JZO0VBQ0kseUJBQUE7QUNwQmhCIiwiZmlsZSI6ImxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJnLWNvbG9yLWxpc3Q6ICM0NTQzNDE7IC8vIENvdWxldXIgZGUgbGEgbGlzdGVcclxuJGJnLWNvbG9yLXJvdy1ob3ZlcjogIzU1NTM1MTsgLy8gQ291bGV1ciBkZSBmb25kIGRlcyBib3V0b25zIGhvdmVyXHJcbiRiZy1jb2xvci1kb25lLXJvdzogIzM1NTUzMTsgLy8gQ291bGV1ciBkZXMgbGlnbmVzIHRyYWR1aXRlc1xyXG5cclxuJHRvcC1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuJHBhZGRpbmc6IDEycHg7XHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cclxuJHRvZ2dsZS1kb25lLXdpZHRoOiAzNnB4O1xyXG5cclxuLmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkdG9wLWhlaWdodDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWlkZGxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAubG9nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpbWVzdGFtcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb2c6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTM1MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAuY29udGFpbmVyIC5oZWFkZXIgLmxlZnQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5taWRkbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5yaWdodCB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmhlYWRlciAubGVmdCwgLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubGlzdCAubG9nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3QgLmxvZyAudGltZXN0YW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmxpc3QgLmxvZyAubWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYm9keSAuY29udGFpbmVyIC5saXN0IC5sb2c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1MzUxO1xufSJdfQ== */"] });


/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ 4260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _connect_center_connect_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect-center/connect-center.component */ 206);
/* harmony import */ var _infos_infos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infos/infos.component */ 4966);
/* harmony import */ var _flag_flag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flag/flag.component */ 2290);
/* harmony import */ var _dibi_infos_dibi_infos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dibi-infos/dibi-infos.component */ 9633);
/* harmony import */ var _dibi_dict_dibi_dict_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dibi-dict/dibi-dict.component */ 7564);
/* harmony import */ var _dibi_grammar_dibi_grammar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dibi-grammar/dibi-grammar.component */ 9497);
/* harmony import */ var _dibi_new_word_dibi_new_word_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dibi-new-word/dibi-new-word.component */ 4384);
/* harmony import */ var _dibi_suggest_dibi_suggest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dibi-suggest/dibi-suggest.component */ 4398);
/* harmony import */ var _dibi_vote_dibi_vote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dibi-vote/dibi-vote.component */ 4634);
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logs/logs.component */ 1350);















const _c0 = ["nav"];
const _c1 = ["content"];
function MainComponent_app_connect_center_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-connect-center", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("adminConnectionEmitter", function MainComponent_app_connect_center_1_Template_app_connect_center_adminConnectionEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r27.setAdminConnected($event); })("closeBoxEmitter", function MainComponent_app_connect_center_1_Template_app_connect_center_closeBoxEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r29.setUserMenu($event); })("userEmitter", function MainComponent_app_connect_center_1_Template_app_connect_center_userEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r30.setUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("adminConnected", ctx_r0.adminConnected)("pwd", ctx_r0.pwd)("user", ctx_r0.user)("accountSettings", ctx_r0.accountSettings);
} }
function MainComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r31.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MainComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r33.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MainComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 33);
} }
function MainComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_img_11_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r35.openUserMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MainComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_img_12_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r37.openUserMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx_r5.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function MainComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_28_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r39.setNav("Dibi-suggest-word"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Proposer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r7.navigation === "Dibi-suggest-word" ? "button-selected" : "button");
} }
function MainComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r41.setNav("Dibi-vote"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Voter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r8.navigation === "Dibi-vote" ? "button-selected" : "button");
} }
function MainComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_34_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r43.setNav("Logs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r9.navigation === "Logs" ? "button-selected" : "button");
} }
function MainComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-infos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function MainComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-flag", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pixelSize", ctx_r12.pixelSize)("displayRegions", ctx_r12.displayRegions);
} }
function MainComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-dibi-infos", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dibiDict", ctx_r13.dibiDict);
} }
function MainComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-dibi-dict", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dibiDict", ctx_r14.dibiDict)("adminConnected", ctx_r14.adminConnected)("pwd", ctx_r14.pwd);
} }
function MainComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-dibi-grammar", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("adminConnected", ctx_r15.adminConnected);
} }
function MainComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-dibi-new-word", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("adminConnected", ctx_r16.adminConnected)("pwd", ctx_r16.pwd);
} }
function MainComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-dibi-suggest", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dibiDict", ctx_r17.dibiDict)("suggestions", ctx_r17.suggestions)("user", ctx_r17.user)("accountSettings", ctx_r17.accountSettings);
} }
function MainComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-dibi-vote", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dibiDict", ctx_r18.dibiDict)("suggestions", ctx_r18.suggestions)("user", ctx_r18.user)("accountSettings", ctx_r18.accountSettings)("profiles", ctx_r18.profiles);
} }
function MainComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-dibi-vote", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dibiDict", ctx_r19.dibiDict)("suggestions", ctx_r19.suggestions)("user", ctx_r19.user)("accountSettings", ctx_r19.accountSettings)("profiles", ctx_r19.profiles);
} }
function MainComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function MainComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
} }
function MainComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_62_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r45.setNav("Dibi-suggest-word"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Proposer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r22.navigation === "Dibi-suggest-word" ? "button-selected" : "button");
} }
function MainComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_63_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r47.setNav("Dibi-vote"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Voter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r23.navigation === "Dibi-vote" ? "button-selected" : "button");
} }
function MainComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_div_64_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r49.setNav("New-word"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r24.navigation === "New-word" ? "button-selected" : "button");
} }
function MainComponent_img_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 45);
} }
function MainComponent_img_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 46);
} }
class MainComponent {
    constructor(socket, authService) {
        this.socket = socket;
        this.authService = authService;
        this.navigation = 'Dibi-infos'; // Navigation entre les pages
        this.pixelSize = 2;
        this.displayRegions = false;
        this.menuDisplayed = true;
        this.userMenu = false; // À true, ouvre la page de connexion et manage de comptes
    }
    ngOnInit() {
        // Récupération du dictionnaire
        this.socket.on('loadDict', (data) => {
            this.dibiDict = data.dict;
            // Après avoir reçu le dictionnaire, demande des suggestions
            this.socket.emit('fetchSuggestions', {});
        });
        // Récupération des suggestions
        this.socket.on('loadSuggestions', list => {
            this.suggestions = list;
            // Après avoir reçu les suggestions, demande des profils
            this.socket.emit('fetchProfiles', {});
        });
        // Récupération des profils
        this.socket.on('loadProfiles', profiles => {
            // Création d'un dictionnaire de profils pour une utilisation plus facile
            this.profiles = {};
            profiles.forEach(profil => {
                this.profiles[profil.email] = profil;
            });
        });
        // Confirmation du paramétrage du compte avec pseudo Discord pour pouvoir accéder à la suite du site
        this.socket.on('accountSetingsOk', user => {
            setTimeout(() => {
                this.socket.emit('loadProfile', user); // Connexion après une seconde pour s'assurer que le pseudo discord soit bien enregistré
            }, 1000);
        });
        // Si une fenêtre de navigation est en localStorage, on l'affiche au démarrage
        if (window.localStorage.getItem('nav')) {
            this.navigation = window.localStorage.getItem('nav');
        }
        // Si un pwd admin est en localStorage, on tente de se connecter
        if (window.localStorage.getItem('pwd')) {
            this.socket.emit('login', { pwd: window.localStorage.getItem('pwd') });
        }
        // Le serveur valide que ce client est admin
        this.socket.on('trust', data => {
            this.setAdminConnected(true);
            window.localStorage.setItem('pwd', data.pwd);
        });
        // En réponse à la demande d'informations supplémentaires sur le profil, les charges et affiches les informations compte Google (on est connecté)
        this.socket.on('responseProfile', data => {
            this.user = data.user;
            if (data.accountSettings) {
                this.accountSettings = data.accountSettings;
            }
            else {
            }
        });
        // Prépare la réception de la connexion
        this.authService.authState.subscribe((user) => {
            // Récupère les infos de l'utilisateur Google et requête le serveur pour avoir les informations supplémentaires du profil
            if (user) {
                this.socket.emit('loadProfile', user); // Connexion
            }
            else {
                this.user = user; // Déconnexion
            }
        });
        // Chargement du dictionnaire une fois au début, la réponse entrainera la demande de la liste des suggestions
        this.socket.emit('fetchDict', {});
        // Tente de se connecter avec le compte Google
        setTimeout(() => {
            try {
                this.authService.refreshAuthToken(angularx_social_login__WEBPACK_IMPORTED_MODULE_11__.GoogleLoginProvider.PROVIDER_ID);
            }
            catch (e) {
                console.error(e.message);
            }
        }, 1000);
    }
    ngAfterViewInit() {
        // PROBLEME DU SETTIMEOUT ici, j'ai rien trouvé de mieux :/
        // Si la préférence utilisateur pour l'affichage de la nav à gauche est spécifiée, on adapte la fenêtre en conséquence
        if (window.localStorage.getItem('menuToggle')) {
            setTimeout(() => {
                this.setMenuDisplay(window.localStorage.getItem('menuToggle') === 'true' ? true : false);
            }, 50);
        }
    }
    /**
     * Quand on clique sur le chevron en haut à gauche, l'affichage du menu se toggle
     */
    toggleMenu() {
        if (this.menuDisplayed) {
            this.setMenuDisplay(false);
        }
        else {
            this.setMenuDisplay(true);
        }
    }
    /**
     * Affiche et enlève le menu à gauche (pour affichage petit / téléphone)
     * Fonctionne avec un localStorage pour enregistrer la pref utilisateur
     */
    setMenuDisplay(navDisplay) {
        if (navDisplay) {
            this.menuDisplayed = true;
            this.nav.nativeElement.style.width = '200px';
            this.content.nativeElement.style.width = 'calc(100% - 200px)';
            window.localStorage.setItem('menuToggle', 'true');
        }
        else {
            this.menuDisplayed = false;
            this.nav.nativeElement.style.width = '0%';
            this.content.nativeElement.style.width = '100%';
            window.localStorage.setItem('menuToggle', 'false');
        }
    }
    /**
     * Change de page
     */
    setNav(page) {
        this.navigation = page;
        window.localStorage.setItem('nav', page);
    }
    /**
     * Pour le flag
     */
    setSize(size) {
        this.pixelSize = size;
    }
    reload() {
        const url = window.location.href;
        window.open(url, '_self');
    }
    openNewBlank() {
        const url = window.location.href;
        window.open(url, '_blank');
    }
    /**
     * Ouvre la fenêtre de connexion
     */
    openUserMenu() {
        this.userMenu = true;
    }
    /**
     * Setter de la connexion admin (fonction déclenchée par un eventEmitter du component main/conncet-center)
     */
    setAdminConnected(event) {
        this.adminConnected = event;
    }
    /**
     * Setter de l'affichage de la page admin (fonction déclenchée par un eventEmitter du component main/conncet-center)
     */
    setUserMenu(event) {
        this.userMenu = event;
    }
    /**
     * Set l'utilisateur qui s'est connecté via Google
     */
    setUser(event) {
        this.user = event;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__.Socket), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_11__.SocialAuthService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 70, vars: 33, consts: [[1, "body"], [3, "adminConnected", "pwd", "user", "accountSettings", "adminConnectionEmitter", "closeBoxEmitter", "userEmitter", 4, "ngIf"], [1, "container"], [1, "header"], ["class", "menu-button", 3, "click", 4, "ngIf"], [1, "block-title"], [3, "className", "click", "auxclick"], [1, "groupped-imgs"], ["class", "golden-crown", "src", "assets/crown-solid.svg", "title", "Admin", 4, "ngIf"], ["class", "user-button", "src", "assets/user-solid.svg", "title", "Connexion", 3, "click", 4, "ngIf"], ["class", "user-connected-button", "title", "Options utilisateur", 3, "src", "click", 4, "ngIf"], [1, "middle"], [1, "nav"], ["nav", ""], [3, "ngClass", "click"], ["src", "assets/circle-info-solid.svg"], ["src", "assets/book-bookmark-solid.svg"], ["src", "assets/book-solid.svg"], [3, "ngClass", "click", 4, "ngIf"], ["src", "assets/circle-plus-solid.svg"], [1, "content"], ["content", ""], [1, "switch-component", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "footer"], [1, "button", 3, "click"], ["src", "assets/user-solid.svg", 4, "ngIf"], ["src", "assets/crown-solid.svg", 4, "ngIf"], [3, "adminConnected", "pwd", "user", "accountSettings", "adminConnectionEmitter", "closeBoxEmitter", "userEmitter"], [1, "menu-button", 3, "click"], ["src", "./assets/chevron-left-solid.svg", "title", "Modifier"], ["src", "./assets/chevron-right-solid.svg", "title", "Modifier"], ["src", "assets/crown-solid.svg", "title", "Admin", 1, "golden-crown"], ["src", "assets/user-solid.svg", "title", "Connexion", 1, "user-button", 3, "click"], ["title", "Options utilisateur", 1, "user-connected-button", 3, "src", "click"], ["src", "assets/square-poll-horizontal-solid.svg"], ["src", "assets/file-lines-regular.svg"], [3, "pixelSize", "displayRegions"], [3, "dibiDict"], [3, "dibiDict", "adminConnected", "pwd"], [3, "adminConnected"], [3, "adminConnected", "pwd"], [3, "dibiDict", "suggestions", "user", "accountSettings"], [3, "dibiDict", "suggestions", "user", "accountSettings", "profiles"], ["src", "assets/user-solid.svg"], ["src", "assets/crown-solid.svg"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MainComponent_app_connect_center_1_Template, 1, 4, "app-connect-center", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, MainComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MainComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_h1_click_7_listener() { return ctx.reload(); })("auxclick", function MainComponent_Template_h1_auxclick_7_listener() { return ctx.openNewBlank(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Dictionnaire Dibi");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, MainComponent_img_10_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, MainComponent_img_11_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, MainComponent_img_12_Template, 1, 1, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11)(14, "div", 12, 13)(16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_16_listener() { return ctx.setNav("Dibi-infos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_20_listener() { return ctx.setNav("Dibi-grammar-rules"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Manuel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_24_listener() { return ctx.setNav("Dibi-dict"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Dictionnaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, MainComponent_div_28_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, MainComponent_div_29_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_30_listener() { return ctx.setNav("New-word"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, MainComponent_div_34_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 20, 21)(37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, MainComponent_ng_container_38_Template, 2, 0, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, MainComponent_ng_container_39_Template, 2, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, MainComponent_ng_container_40_Template, 2, 1, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, MainComponent_ng_container_41_Template, 2, 3, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, MainComponent_ng_container_42_Template, 2, 1, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, MainComponent_ng_container_43_Template, 2, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, MainComponent_ng_container_44_Template, 2, 4, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, MainComponent_ng_container_45_Template, 2, 5, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, MainComponent_ng_container_46_Template, 2, 5, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, MainComponent_ng_container_47_Template, 2, 0, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, MainComponent_ng_container_48_Template, 1, 0, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 25)(50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_50_listener() { return ctx.setNav("Dibi-infos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_54_listener() { return ctx.setNav("Dibi-grammar-rules"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Manuel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_58_listener() { return ctx.setNav("Dibi-dict"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Dico");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, MainComponent_div_62_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, MainComponent_div_63_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, MainComponent_div_64_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_div_click_65_listener() { return ctx.openUserMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, MainComponent_img_66_Template, 1, 0, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](67, MainComponent_img_67_Template, 1, 0, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.menuDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.menuDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("className", ctx.adminConnected ? "title-gold" : "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.adminConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.navigation === "Dibi-infos" ? "button-selected" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.navigation === "Dibi-grammar-rules" ? "button-selected" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.navigation === "Dibi-dict" ? "button-selected" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.user && ctx.accountSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.user && ctx.accountSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.navigation === "New-word" ? "button-selected" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.adminConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", ctx.navigation);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Infos");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Dibi-infos");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Dibi-dict");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Dibi-grammar-rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "New-word");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Dibi-suggest-word");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Dibi-vote");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Dibi-word");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.navigation === "Dibi-infos" ? "button-selected" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.navigation === "Dibi-grammar-rules" ? "button-selected" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.navigation === "Dibi-dict" ? "button-selected" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.user && ctx.accountSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.user && ctx.accountSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.adminConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.adminConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.adminConnected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _connect_center_connect_center_component__WEBPACK_IMPORTED_MODULE_0__.ConnectCenterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _infos_infos_component__WEBPACK_IMPORTED_MODULE_1__.InfosComponent, _flag_flag_component__WEBPACK_IMPORTED_MODULE_2__.FlagComponent, _dibi_infos_dibi_infos_component__WEBPACK_IMPORTED_MODULE_3__.DibiInfosComponent, _dibi_dict_dibi_dict_component__WEBPACK_IMPORTED_MODULE_4__.DibiDictComponent, _dibi_grammar_dibi_grammar_component__WEBPACK_IMPORTED_MODULE_5__.DibiGrammarComponent, _dibi_new_word_dibi_new_word_component__WEBPACK_IMPORTED_MODULE_6__.DibiNewWordComponent, _dibi_suggest_dibi_suggest_component__WEBPACK_IMPORTED_MODULE_7__.DibiSuggestComponent, _dibi_vote_dibi_vote_component__WEBPACK_IMPORTED_MODULE_8__.DibiVoteComponent, _logs_logs_component__WEBPACK_IMPORTED_MODULE_9__.LogsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchDefault], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 100%;\n  background-color: #151311;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 12px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0px 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0px 12px;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]   .title-gold[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #ffdb88;\n  white-space: nowrap;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .log-button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .groupped-imgs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .groupped-imgs[_ngcontent-%COMP%]   .user-button[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-right: 12px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .groupped-imgs[_ngcontent-%COMP%]   .user-connected-button[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  margin-right: 12px;\n  border-radius: 32px;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .groupped-imgs[_ngcontent-%COMP%]   .golden-crown[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100% - 50px - 0px);\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 200px;\n  background-color: #252321;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  cursor: pointer;\n  margin: 6px 6px 0px 6px;\n  padding: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 24px;\n  margin-right: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover, .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%] {\n  background-color: #454341;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: calc(100% - 200px);\n  background-color: #353331;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .switch-component[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: space-between;\n  width: 100%;\n  height: 50px;\n  background-color: #555351;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  flex-grow: 1;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-bottom: 6px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover, .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%] {\n  background-color: #656361;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .user-bubble-button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 52px;\n  width: 52px;\n  bottom: 62px;\n  right: 12px;\n}\n.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .user-bubble-button[_ngcontent-%COMP%]   .user-button[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .user-bubble-button[_ngcontent-%COMP%]   .user-connected-button[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n}\n@media screen and (max-width: 600px) {\n  .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n    height: calc(100% - 50px);\n  }\n  .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1hcmlvJTIwVklFSUxMRURFTlRcXERlc2t0b3BcXE1FQU5cXERpcnR5UGF6dVxcY2xpZW50XFxzcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2hCSjtBRGtCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQXpCSTtFQTBCSixXQUFBO0VBQ0EseUJBbkNNO0FDbUJsQjtBRGtCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQTVCTjtFQTZCTSxlQUFBO0FDaEJoQjtBRGtCZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2hCcEI7QURvQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDbEJoQjtBRG9CZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQnBCO0FEcUJnQjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQnBCO0FEc0JnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNwQnBCO0FEd0JZO0VBQ0ksa0JBNUROO0FDc0NWO0FEeUJZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDdkJoQjtBRHlCZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3ZCcEI7QUQwQmdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3hCcEI7QUQyQmdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3pCcEI7QUQ4QlE7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FDNUJaO0FEOEJZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBckdKO0VBc0dJLHlCQS9HRDtFQWdIQyxjQUFBO0FDNUJoQjtBRDhCZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUM1QnBCO0FEK0JnQjs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkEvR0o7RUFnSEksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQzdCcEI7QUQrQm9COztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUM1QnhCO0FEK0JvQjs7RUFDSSxlQUFBO0FDNUJ4QjtBRGdDZ0I7O0VBRUkseUJBMUlRO0FDNEc1QjtBRGtDWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFwSkc7QUNvSG5CO0FEa0NnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDaENwQjtBRHFDUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBL0pZO0VBZ0taLGNBQUE7QUNuQ1o7QURxQ1k7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDbkNoQjtBRHFDZ0I7O0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2xDcEI7QURxQ2dCOztFQUNJLGVBQUE7QUNsQ3BCO0FEc0NZOztFQUVJLHlCQXZMYztBQ21KOUI7QUR1Q1k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNyQ2hCO0FEdUNnQjs7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3JDcEI7QUQ0Q0E7RUFHWTtJQUNJLGFBQUE7RUMzQ2Q7RUQ4Q1U7SUFDSSx5QkFBQTtFQzVDZDtFRDhDYztJQUNJLGFBQUE7RUM1Q2xCO0VEK0NjO0lBQ0ksc0JBQUE7RUM3Q2xCO0VEaURVO0lBQ0ksYUFBQTtFQy9DZDtBQUNGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmctY29sb3ItaGVhZGVyOiAjMTUxMzExOyAvLyBDb3VsZXVyIGRlIGZvbmQgbGEgcGx1cyBmb25jw6llXHJcbiRiZy1jb2xvci1uYXY6ICMyNTIzMjE7IC8vIENvdWxldXIgZGUgZm9uZCBlbnRyZS1kZXV4XHJcbiRiZy1jb2xvci1jb250ZW50OiAjMzUzMzMxOyAvLyBDb3VsZXVyIGRlIGZvbmQgbGEgcGx1cyBjbGFpcmVcclxuJGJnLWNvbG9yLW5hdi1idXR0b246ICMzNTMzMzE7IC8vIENvdWxldXIgZGUgZm9uZCBkZXMgYm91dG9uc1xyXG4kYmctY29sb3ItbmF2LWJ1dHRvbi1ob3ZlcjogIzQ1NDM0MTsgLy8gQ291bGV1ciBkZSBmb25kIGRlcyBib3V0b25zIGhvdmVyXHJcbiRiZy1jb2xvci1vcHRpb24tYmxvY2s6ICM1NTUzNTE7IC8vIE9wdGlvbnNcclxuJGJnLWNvbG9yLW9wdGlvbi1ibG9jay1ob3ZlcjogIzY1NjM2MTsgLy8gT3B0aW9ucyBob3ZlclxyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAwcHg7XHJcbiRuYXYtd2lkdGg6IDIwMHB4O1xyXG5cclxuJHBhZGRpbmc6IDEycHg7XHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4kcGhvbmUtdmlldzogNjAwcHg7XHJcblxyXG4uYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1oZWFkZXI7XHJcblxyXG4gICAgICAgICAgICAubWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ibG9jay10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLWdvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZGI4ODtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRwYWRkaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JvdXBwZWQtaW1ncyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAudXNlci1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51c2VyLWNvbm5lY3RlZC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmdvbGRlbi1jcm93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1pZGRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRmb290ZXItaGVpZ2h0fSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAkbmF2LXdpZHRoO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLW5hdjtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbi1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDZweCA2cHggMHB4IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbjpob3ZlcixcclxuICAgICAgICAgICAgICAgIC5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1uYXYtYnV0dG9uLWhvdmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICRuYXYtd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLnN3aXRjaC1jb21wb25lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLW9wdGlvbi1ibG9jaztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuYnV0dG9uLFxyXG4gICAgICAgICAgICAuYnV0dG9uLXNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXR0b246aG92ZXIsXHJcbiAgICAgICAgICAgIC5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLW9wdGlvbi1ibG9jay1ob3ZlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItYnViYmxlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYyg1MHB4ICsgMTJweCk7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAudXNlci1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAudXNlci1jb25uZWN0ZWQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZS12aWV3KSB7XHJcbiAgICAuYm9keSB7XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1pZGRsZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxMzExO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5tZW51LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9keSAuY29udGFpbmVyIC5oZWFkZXIgLm1lbnUtYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5oZWFkZXIgLmJsb2NrLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5ibG9jay10aXRsZSBoMSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwcHggMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmhlYWRlciAuYmxvY2stdGl0bGUgLnRpdGxlIHtcbiAgbWFyZ2luOiAwcHggMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmhlYWRlciAuYmxvY2stdGl0bGUgLnRpdGxlLWdvbGQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZkYjg4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5sb2ctYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmJvZHkgLmNvbnRhaW5lciAuaGVhZGVyIC5ncm91cHBlZC1pbWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2R5IC5jb250YWluZXIgLmhlYWRlciAuZ3JvdXBwZWQtaW1ncyAudXNlci1idXR0b24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib2R5IC5jb250YWluZXIgLmhlYWRlciAuZ3JvdXBwZWQtaW1ncyAudXNlci1jb25uZWN0ZWQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9keSAuY29udGFpbmVyIC5oZWFkZXIgLmdyb3VwcGVkLWltZ3MgLmdvbGRlbi1jcm93biB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLm1pZGRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCAtIDBweCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAubWlkZGxlIC5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjMyMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLm5hdiBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLm1pZGRsZSAubmF2IC5idXR0b24sXG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLm5hdiAuYnV0dG9uLXNlbGVjdGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNnB4IDZweCAwcHggNnB4O1xuICBwYWRkaW5nOiA2cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLm5hdiAuYnV0dG9uIGltZyxcbi5ib2R5IC5jb250YWluZXIgLm1pZGRsZSAubmF2IC5idXR0b24tc2VsZWN0ZWQgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLm5hdiAuYnV0dG9uIHNwYW4sXG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLm5hdiAuYnV0dG9uLXNlbGVjdGVkIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLm5hdiAuYnV0dG9uOmhvdmVyLFxuLmJvZHkgLmNvbnRhaW5lciAubWlkZGxlIC5uYXYgLmJ1dHRvbi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTQzNDE7XG59XG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTMzMzE7XG59XG4uYm9keSAuY29udGFpbmVyIC5taWRkbGUgLmNvbnRlbnQgLnN3aXRjaC1jb21wb25lbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuZm9vdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1MzUxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5ib2R5IC5jb250YWluZXIgLmZvb3RlciAuYnV0dG9uLFxuLmJvZHkgLmNvbnRhaW5lciAuZm9vdGVyIC5idXR0b24tc2VsZWN0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWdyb3c6IDE7XG59XG4uYm9keSAuY29udGFpbmVyIC5mb290ZXIgLmJ1dHRvbiBpbWcsXG4uYm9keSAuY29udGFpbmVyIC5mb290ZXIgLmJ1dHRvbi1zZWxlY3RlZCBpbWcge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5mb290ZXIgLmJ1dHRvbiBzcGFuLFxuLmJvZHkgLmNvbnRhaW5lciAuZm9vdGVyIC5idXR0b24tc2VsZWN0ZWQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib2R5IC5jb250YWluZXIgLmZvb3RlciAuYnV0dG9uOmhvdmVyLFxuLmJvZHkgLmNvbnRhaW5lciAuZm9vdGVyIC5idXR0b24tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU2MzYxO1xufVxuLmJvZHkgLmNvbnRhaW5lciAuZm9vdGVyIC51c2VyLWJ1YmJsZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDUycHg7XG4gIGJvdHRvbTogNjJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4uYm9keSAuY29udGFpbmVyIC5mb290ZXIgLnVzZXItYnViYmxlLWJ1dHRvbiAudXNlci1idXR0b24sXG4uYm9keSAuY29udGFpbmVyIC5mb290ZXIgLnVzZXItYnViYmxlLWJ1dHRvbiAudXNlci1jb25uZWN0ZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYm9keSAuY29udGFpbmVyIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJvZHkgLmNvbnRhaW5lciAubWlkZGxlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICB9XG4gIC5ib2R5IC5jb250YWluZXIgLm1pZGRsZSAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ib2R5IC5jb250YWluZXIgLm1pZGRsZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuYm9keSAuY29udGFpbmVyIC5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 6592:
/*!*****************************!*\
  !*** ./src/app/services.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAccents": () => (/* binding */ removeAccents)
/* harmony export */ });
function removeAccents(str) {
    let ret = str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove accents
    ret = ret.replace('Œ', 'Oe');
    ret = ret.replace('œ', 'oe');
    return ret;
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 8999,
	"./hy-am.js": 8999,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
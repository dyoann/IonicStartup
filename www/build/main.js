webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_book_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cd_list_cd_list__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.booksPage = __WEBPACK_IMPORTED_MODULE_1__book_list_book_list__["a" /* BookListPage */];
        this.cdsPage = __WEBPACK_IMPORTED_MODULE_2__cd_list_cd_list__["a" /* CdListPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="booksPage" tabTitle="Livres" tabIcon="book"></ion-tab>\n\n  <ion-tab [root]="cdsPage" tabTitle="Cds"    tabIcon="disc"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_book_lend_book__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookListPage = /** @class */ (function () {
    function BookListPage(modalCtrl, bookAndCdService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.bookAndCdService = bookAndCdService;
        this.menuCtrl = menuCtrl;
    }
    BookListPage.prototype.ionViewWillEnter = function () {
        this.booksList = this.bookAndCdService.booksList.slice();
    };
    BookListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    BookListPage.prototype.onLoadBook = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__lend_book_lend_book__["a" /* LendBookPage */], { index: index });
        modal.present();
    };
    BookListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-list',template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\pages\book-list\book-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Livres</ion-title>\n\n	<ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item\n\n            icon-start\n\n            *ngFor="let book of booksList; let i = index"\n\n			[color]="book.isLend ? \'secondary\' : \'danger\'"\n\n            (click)="onLoadBook(i)">\n\n      {{ book.name }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\pages\book-list\book-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], BookListPage);
    return BookListPage;
}());

//# sourceMappingURL=book-list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LendBookPage = /** @class */ (function () {
    function LendBookPage(navParams, viewCtrl, bookAndCdService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bookAndCdService = bookAndCdService;
    }
    LendBookPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.book = this.bookAndCdService.booksList[this.index];
    };
    LendBookPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendBookPage.prototype.onToggleBook = function () {
        this.bookAndCdService.onToogleBookElement(this.index);
    };
    LendBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-book',template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\pages\lend-book\lend-book.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ book.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card [ngClass]="{\'is-lend-on\': book.isLend, \'is-lend-off\': !book.isLend}">\n\n    <ion-card-header>{{ book.name }}</ion-card-header>\n\n    <ion-card-content>\n\n		Ecrit par {{ book.author }} en {{ book.year }}\n\n    </ion-card-content>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="danger"\n\n            [disabled]="!book.isLend"\n\n            (click)="onToggleBook()">Prêter</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="secondary"\n\n            [disabled]="book.isLend"\n\n            (click)="onToggleBook()">Rendre</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\pages\lend-book\lend-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */]])
    ], LendBookPage);
    return LendBookPage;
}());

//# sourceMappingURL=lend-book.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CdListPage = /** @class */ (function () {
    function CdListPage(modalCtrl, bookAndCdService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.bookAndCdService = bookAndCdService;
        this.menuCtrl = menuCtrl;
    }
    CdListPage.prototype.ionViewWillEnter = function () {
        this.cdsList = this.bookAndCdService.cdsList.slice();
    };
    CdListPage.prototype.onLoadCD = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__["a" /* LendCdPage */], { index: index });
        modal.present();
    };
    CdListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    CdListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cd-list',template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\pages\cd-list\cd-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>CDs</ion-title>\n\n	<ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item\n\n            icon-start\n\n            *ngFor="let cd of cdsList; let i = index"\n\n			[color]="cd.isLend ? \'secondary\' : \'danger\'"\n\n            (click)="onLoadCD(i)">\n\n      {{ cd.name }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\pages\cd-list\cd-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], CdListPage);
    return CdListPage;
}());

//# sourceMappingURL=cd-list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LendCdPage = /** @class */ (function () {
    function LendCdPage(navParams, viewCtrl, bookAndCdService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bookAndCdService = bookAndCdService;
    }
    LendCdPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.cd = this.bookAndCdService.cdsList[this.index];
    };
    LendCdPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendCdPage.prototype.onToggleBook = function () {
        this.bookAndCdService.onToogleCdElement(this.index);
    };
    LendCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-cd',template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\pages\lend-cd\lend-cd.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ cd.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card [ngClass]="{\'is-lend-on\': cd.isLend, \'is-lend-off\': !cd.isLend}">\n\n    <ion-card-header>{{ cd.name }}</ion-card-header>\n\n    <ion-card-content>\n\n		Artiste {{ cd.author }}, composé en {{ cd.year }}\n\n    </ion-card-content>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="danger"\n\n            [disabled]="!cd.isLend"\n\n            (click)="onToggleBook()">Prêter</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="secondary"\n\n            [disabled]="cd.isLend"\n\n            (click)="onToggleBook()">Rendre</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\pages\lend-cd\lend-cd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */]])
    ], LendCdPage);
    return LendCdPage;
}());

//# sourceMappingURL=lend-cd.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Réglages</ion-title>\n\n	<ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\nCeci  est une page générique pour les réglages de l\'application\n\n</ion-content>\n\n'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_book_list_book_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lend_book_lend_book__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_bookAndCd_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_bookAndCd_service__["a" /* BookAndCdService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page) {
        this.content.setRoot(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n	<button ion-button icon-start (click)="onNavigate(tabsPage)">\n\n        <ion-icon name="book"></ion-icon>\n\n		<ion-icon name="disc"></ion-icon>\n\n         Livres & Cds\n\n      </button>\n\n      <button ion-button icon-start (click)="onNavigate(settingsPage)">\n\n        <ion-icon name="settings"></ion-icon>\n\n         Réglages\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="tabsPage" #content></ion-nav>'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\CompoSelector\IonicStartup\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\CompoSelector\IonicStartup\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAndCdService; });
var BookAndCdService = /** @class */ (function () {
    function BookAndCdService() {
        this.booksList = [
            {
                name: 'Devenir',
                author: 'Michelle Obama',
                year: 2018,
                isLend: true
            },
            {
                name: 'Je te promet la liberté',
                author: 'Laurent Gounelle',
                year: 2018,
                isLend: true
            },
            {
                name: 'Le Misanthrope',
                author: 'Molière',
                year: 1666,
                isLend: false
            }
        ];
        this.cdsList = [
            {
                name: 'Mon pays c\'est l\'amour',
                author: 'Johnny Hallyday',
                year: 2018,
                isLend: true
            },
            {
                name: 'Phoenix',
                author: 'Soprano',
                year: 2018,
                isLend: false
            },
            {
                name: 'Queen Greatest Hits I,II & III',
                author: 'Queen',
                year: 2018,
                isLend: false
            }
        ];
    }
    BookAndCdService.prototype.onToogleBookElement = function (bookIndex) {
        this.booksList[bookIndex].isLend = !this.booksList[bookIndex].isLend;
    };
    BookAndCdService.prototype.onToogleCdElement = function (cdIndex) {
        this.cdsList[cdIndex].isLend = !this.cdsList[cdIndex].isLend;
    };
    return BookAndCdService;
}());

//# sourceMappingURL=bookAndCd.service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_book_list__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cd_list_cd_list__ = __webpack_require__(350);
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
            selector: 'page-tabs',template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="booksPage" tabTitle="Livres" tabIcon="book"></ion-tab>\n\n  <ion-tab [root]="cdsPage" tabTitle="Cds"    tabIcon="disc"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_book_lend_book__ = __webpack_require__(349);
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
    BookListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.booksSubscription = this.bookAndCdService.books$.subscribe(function (books) {
            _this.booksList = books;
        }, function (error) {
            console.log(error);
        });
        this.bookAndCdService.emitBooks();
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
            selector: 'page-book-list',template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\pages\book-list\book-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Livres</ion-title>\n\n	<ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item\n\n            icon-start\n\n            *ngFor="let book of booksList; let i = index"\n\n			[color]="book.isLend ? \'danger\' : \'secondary\'"\n\n            (click)="onLoadBook(i)">\n\n      <p *ngIf="book.owner">{{ book.name }}, emprunté par : {{ book.owner }} </p>\n\n	  <p *ngIf="!book.owner">{{ book.name }}</p>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\pages\book-list\book-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], BookListPage);
    return BookListPage;
}());

//# sourceMappingURL=book-list.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
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
    function LendBookPage(navParams, viewCtrl, bookAndCdService, formBuilder) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bookAndCdService = bookAndCdService;
        this.formBuilder = formBuilder;
    }
    LendBookPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.book = this.bookAndCdService.booksList[this.index];
        this.initForm();
    };
    LendBookPage.prototype.initForm = function () {
        this.ownerForm = this.formBuilder.group({
            owner: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    LendBookPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendBookPage.prototype.saveOwner = function () {
        var owner = this.ownerForm.get('owner').value;
        this.bookAndCdService.changeBookOwner(this.index, owner);
    };
    LendBookPage.prototype.removeOwner = function () {
        this.bookAndCdService.removeBookOwner(this.index);
    };
    LendBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-book',template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\pages\lend-book\lend-book.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ book.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card [ngClass]="{\'is-lend-on\': book.isLend, \'is-lend-off\': !book.isLend}">\n\n    <ion-card-header><h1>{{ book.name }}</h1></ion-card-header>\n\n    <ion-card-content>\n\n		Ecrit par {{ book.author }} en {{ book.year }}\n\n    </ion-card-content>\n\n	<ion-card-content>\n\n	<form [formGroup]="ownerForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="danger"\n\n            [disabled]="book.isLend || ownerForm.invalid"\n\n            (click)="saveOwner()">Prêter</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="secondary"\n\n            [disabled]="!book.isLend"\n\n            (click)="removeOwner()">Rendre</button>\n\n        </ion-col>\n\n      </ion-row>\n\n	  <ion-row>\n\n		<ion-col *ngIf="book.owner">Emprunté par {{ book.owner }}</ion-col>\n\n		<ion-col *ngIf="!book.owner">\n\n				<ion-label stacked>Nom de l\'emprunter</ion-label>\n\n				<ion-input placeholder="Emprunteur" formControlName="owner"></ion-input>\n\n		</ion-col>\n\n	  </ion-row>\n\n    </ion-grid>\n\n	</form>\n\n	</ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\pages\lend-book\lend-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LendBookPage);
    return LendBookPage;
}());

//# sourceMappingURL=lend-book.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__ = __webpack_require__(351);
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
    CdListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cdsSubscription = this.bookAndCdService.cds$.subscribe(function (cds) {
            _this.cdsList = cds;
        }, function (error) {
            console.log(error);
        });
        this.bookAndCdService.emitCds();
    };
    CdListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    CdListPage.prototype.onLoadCD = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__["a" /* LendCdPage */], { index: index });
        modal.present();
    };
    CdListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cd-list',template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\pages\cd-list\cd-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>CDs</ion-title>\n\n	<ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item\n\n            icon-start\n\n            *ngFor="let cd of cdsList; let i = index"\n\n			[color]="cd.isLend ? \'danger\' : \'secondary\'"\n\n            (click)="onLoadCD(i)">\n\n      <p *ngIf="cd.owner">{{ cd.name }}, emprunté par : {{ cd.owner }} </p>\n\n	  <p *ngIf="!cd.owner">{{ cd.name }}</p>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\pages\cd-list\cd-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], CdListPage);
    return CdListPage;
}());

//# sourceMappingURL=cd-list.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
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
    function LendCdPage(navParams, viewCtrl, bookAndCdService, formBuilder) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bookAndCdService = bookAndCdService;
        this.formBuilder = formBuilder;
    }
    LendCdPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.cd = this.bookAndCdService.cdsList[this.index];
        this.initForm();
    };
    LendCdPage.prototype.initForm = function () {
        this.ownerForm = this.formBuilder.group({
            owner: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    LendCdPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendCdPage.prototype.saveOwner = function () {
        var owner = this.ownerForm.get('owner').value;
        this.bookAndCdService.changeCDOwner(this.index, owner);
    };
    LendCdPage.prototype.removeOwner = function () {
        this.bookAndCdService.removeCDOwner(this.index);
    };
    LendCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-cd',template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\pages\lend-cd\lend-cd.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ cd.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card [ngClass]="{\'is-lend-on\': cd.isLend, \'is-lend-off\': !cd.isLend}">\n\n    <ion-card-header>{{ cd.name }}</ion-card-header>\n\n    <ion-card-content>\n\n		Ecrit par {{ cd.author }} en {{ cd.year }}\n\n    </ion-card-content>\n\n	<ion-card-content>\n\n	<form [formGroup]="ownerForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="danger"\n\n            [disabled]="cd.isLend || ownerForm.invalid"\n\n            (click)="saveOwner()">Prêter</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            full\n\n            color="secondary"\n\n            [disabled]="!cd.isLend"\n\n            (click)="removeOwner()">Rendre</button>\n\n        </ion-col>\n\n      </ion-row>\n\n	  <ion-row>\n\n		<ion-col *ngIf="cd.owner">Emprunté par {{ cd.owner }}</ion-col>\n\n		<ion-col *ngIf="!cd.owner">\n\n				<ion-label>Nom de l\'emprunter</ion-label>\n\n				<ion-input placeholder="Emprunteur" formControlName="owner"></ion-input>\n\n		</ion-col>\n\n	  </ion-row>\n\n    </ion-grid>\n\n	</form>\n\n	</ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\pages\lend-cd\lend-cd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LendCdPage);
    return LendCdPage;
}());

//# sourceMappingURL=lend-cd.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthPage = /** @class */ (function () {
    function AuthPage(authService, navParams, navCtrl, menuCtrl, formBuilder) {
        this.authService = authService;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
    }
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\pages\auth\auth.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="mode === \'new\'">Nouvel utilisateur</ion-title>\n\n    <ion-title *ngIf="mode === \'connect\'">Connexion</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <form [formGroup]="authForm">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Adresse mail</ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Mot de passe</ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full (click)="onSubmitForm()">Soumettre</button>\n\n    <span ion-text color="danger">{{ errorMessage }}</span>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\pages\auth\auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.isAuth = false;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__ = __webpack_require__(46);
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
    function SettingsPage(menuCtrl, bookAndCdService, toastCtrl, loadingCtrl) {
        this.menuCtrl = menuCtrl;
        this.bookAndCdService = bookAndCdService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SettingsPage.prototype.onSaveBooksList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Sauvegarde des Livres en cours...'
        });
        loader.present();
        this.bookAndCdService.saveBooksData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Livres sauvegardés',
                duration: 1000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error.message,
                duration: 1000,
                position: 'bottom'
            }).present();
        });
    };
    SettingsPage.prototype.onSaveCDsList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Sauvegarde des CDs en cours...'
        });
        loader.present();
        this.bookAndCdService.saveCdsData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'CDs sauvegardés',
                duration: 1000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error.message,
                duration: 1000,
                position: 'bottom'
            }).present();
        });
    };
    SettingsPage.prototype.onSaveList = function () {
        this.onSaveBooksList();
        this.onSaveCDsList();
    };
    SettingsPage.prototype.onFetchBooksList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Chargement des Livres en cours...'
        });
        loader.present();
        this.bookAndCdService.retrieveBooksData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Livres chargés',
                duration: 1000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 1000,
                position: 'bottom'
            }).present();
        });
    };
    SettingsPage.prototype.onFetchCdsList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Chargement des CDs en cours...'
        });
        loader.present();
        this.bookAndCdService.retrieveCdsData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'CDs chargés',
                duration: 1000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 1000,
                position: 'bottom'
            }).present();
        });
    };
    SettingsPage.prototype.onFetchList = function () {
        this.onFetchBooksList();
        this.onFetchCdsList();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Réglages</ion-title>\n\n	<ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n    <ion-card-header>Données (firebase)</ion-card-header>\n\n	<ion-card-content>\n\n		<button ion-button block outline (click)="onSaveList()">Sauvegarder</button>\n\n		<button ion-button block outline (click)="onFetchList()">Charger</button>\n\n	</ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bookAndCd_service__["a" /* BookAndCdService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cd_list_cd_list__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lend_book_lend_book__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lend_cd_lend_cd__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_bookAndCd_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(347);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_bookAndCd_service__["a" /* BookAndCdService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
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
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.isAuth = false;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.authPage = __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */];
        platform.ready().then(function () {
            var config = {
                apiKey: "AIzaSyAx91ZvNwHesNWYAOLsbqxUiuk3W6K2oT0",
                authDomain: "http-client-demo-28cc1.firebaseapp.com",
                databaseURL: "https://http-client-demo-28cc1.firebaseio.com",
                projectId: "http-client-demo-28cc1",
                storageBucket: "http-client-demo-28cc1.appspot.com",
                messagingSenderId: "1091879406341"
            };
            __WEBPACK_IMPORTED_MODULE_7_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */], { mode: 'connect' });
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtrl.close();
    };
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().signOut();
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\CompoSelector\testing\IonicStartup\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n	<button ion-item (click)="onNavigate(tabsPage)" *ngIf="isAuth">\n\n        <ion-icon icon-start  name="book"></ion-icon>\n\n		<ion-icon  icon-start name="disc"></ion-icon>\n\n         Livres & Cds\n\n      </button>\n\n      <button ion-item (click)="onNavigate(settingsPage)" *ngIf="isAuth">\n\n        <ion-icon icon-start name="settings"></ion-icon>\n\n         <label>Réglages</label>\n\n      </button>\n\n	  <button ion-item (click)="onNavigate(authPage, {mode: \'new\'})" *ngIf="!isAuth">\n\n        <ion-icon icon-start name="person-add"></ion-icon>\n\n        Nouvel utilisateur\n\n      </button>\n\n      <button ion-item (click)="onNavigate(authPage, {mode: \'connect\'})" *ngIf="!isAuth">\n\n        <ion-icon icon-start name="person"></ion-icon>\n\n        Connexion\n\n      </button>\n\n	  <button ion-item (click)="onDisconnect()" *ngIf="isAuth">\n\n        <ion-icon icon-start name="exit"></ion-icon>\n\n        Déconnexion\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="tabsPage" #content></ion-nav>'/*ion-inline-end:"D:\CompoSelector\testing\IonicStartup\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAndCdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookAndCdService = /** @class */ (function () {
    function BookAndCdService(storage) {
        this.storage = storage;
        //Subjects
        this.books$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.cds$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        //Default Books
        this.defaultBooksList = [
            {
                name: 'Devenir',
                author: 'Michelle Obama',
                year: 2018,
                isLend: true,
                owner: 'Some Book Lover n°1'
            },
            {
                name: 'Je te promet la liberté',
                author: 'Laurent Gounelle',
                year: 2018,
                isLend: true,
                owner: 'Some Book Lover n°2'
            },
            {
                name: 'Le Misanthrope',
                author: 'Molière',
                year: 1666,
                isLend: false,
                owner: ''
            }
        ];
        //Default CDs
        this.defaultCdsList = [
            {
                name: 'Mon pays c\'est l\'amour',
                author: 'Johnny Hallyday',
                year: 2018,
                isLend: true,
                owner: 'Some Music Lover n°1'
            },
            {
                name: 'Phoenix',
                author: 'Soprano',
                year: 2018,
                isLend: false,
                owner: ''
            },
            {
                name: 'Queen Greatest Hits I,II & III',
                author: 'Queen',
                year: 2018,
                isLend: false,
                owner: ''
            }
        ];
        //Fetch local books
        this.fetchBooksDataLocal();
        if (!this.booksList || this.booksList.length == 0) {
            console.log("No Books on local device, taking default");
            this.booksList = this.defaultBooksList;
            this.emitBooks();
            this.saveBooksDataLocal();
        }
        //Fetch local cds
        this.fetchCdsDataLocal();
        if (!this.cdsList || this.cdsList.length == 0) {
            console.log("No CDs on local device, taking default");
            this.cdsList = this.defaultCdsList;
            this.emitCds();
            this.saveBooksDataLocal();
        }
    }
    BookAndCdService.prototype.emitBooks = function () {
        this.books$.next(this.booksList.slice());
    };
    BookAndCdService.prototype.emitCds = function () {
        this.cds$.next(this.cdsList.slice());
    };
    //Local save Books
    BookAndCdService.prototype.saveBooksDataLocal = function () {
        this.storage.set('books', this.booksList);
    };
    //Local load Books
    BookAndCdService.prototype.fetchBooksDataLocal = function () {
        var _this = this;
        this.storage.get('books').then(function (list) {
            if (list && list.length) {
                _this.booksList = list.slice();
            }
            _this.emitBooks();
        });
    };
    //Local save CD
    BookAndCdService.prototype.saveCdsDataLocal = function () {
        this.storage.set('cds', this.booksList);
    };
    //Local load CD
    BookAndCdService.prototype.fetchCdsDataLocal = function () {
        var _this = this;
        this.storage.get('cds').then(function (list) {
            if (list && list.length) {
                _this.cdsList = list.slice();
            }
            _this.emitCds();
        });
    };
    //Firebase save 
    BookAndCdService.prototype.saveBooksData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/ionic-books').set(_this.booksList).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    //Firebase save
    BookAndCdService.prototype.saveCdsData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/ionic-cds').set(_this.cdsList).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    //Firebase load
    BookAndCdService.prototype.retrieveBooksData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/ionic-books').once('value').then(function (data) {
                _this.booksList = data.val();
                _this.saveBooksDataLocal();
                _this.emitBooks();
                resolve("Livres récupérés avec succès (et chargés en local)");
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    //Firebase load
    BookAndCdService.prototype.retrieveCdsData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/ionic-cds').once('value').then(function (data) {
                _this.cdsList = data.val();
                _this.saveCdsDataLocal();
                _this.emitCds();
                resolve("CDs récupérés avec succès (et chargés en local)");
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    BookAndCdService.prototype.changeBookOwner = function (bookIndex, owner) {
        var b = this.booksList[bookIndex];
        b.isLend = true;
        b.owner = owner;
        this.saveBooksDataLocal();
        this.emitBooks();
    };
    BookAndCdService.prototype.removeBookOwner = function (bookIndex) {
        var c = this.booksList[bookIndex];
        c.isLend = false;
        c.owner = '';
        this.saveBooksDataLocal();
        this.emitBooks();
    };
    BookAndCdService.prototype.changeCDOwner = function (cdIndex, owner) {
        var c = this.cdsList[cdIndex];
        c.isLend = true;
        c.owner = owner;
        this.saveCdsDataLocal();
        this.emitCds();
    };
    BookAndCdService.prototype.removeCDOwner = function (cdIndex) {
        var b = this.cdsList[cdIndex];
        b.isLend = false;
        b.owner = '';
        this.saveCdsDataLocal();
        this.emitCds();
    };
    BookAndCdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], BookAndCdService);
    return BookAndCdService;
    var _a;
}());

//# sourceMappingURL=bookAndCd.service.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map
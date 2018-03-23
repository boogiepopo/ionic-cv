webpackJsonp([6],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]
        ]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
// This is the side menu which can be opened from the top-left corner of the user interface.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = "TabsPage";
        this.pages = [
            { title: 'Home', pageName: 'TabsPage', tabComponent: 'LoggedinPage', index: 0, icon: 'home' },
            { title: 'Education', pageName: 'TabsPage', tabComponent: 'EducationPage', index: 1, icon: 'book' },
            { title: 'Experience', pageName: 'TabsPage', tabComponent: 'ExperiencePage', index: 2, icon: 'briefcase' },
            { title: 'Skills', pageName: 'TabsPage', tabComponent: 'SkillsPage', index: 3, icon: 'cloud' },
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    return MenuPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({ name: 'MenuPage' }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\arlappal\Ionic-CV-master\src\pages\menu\menu.html"*/'<!-- The sidebar menu -->\n\n<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n  <ion-list>\n    <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n    <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n    {{p.title}}\n\n    </button>\n  </ion-list>\n  </ion-content>\n\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"> </ion-nav>\n\n\n'/*ion-inline-end:"C:\Users\arlappal\Ionic-CV-master\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map
webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_team__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trainer_trainer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_create_team_modal_create_team_modal__ = __webpack_require__(104);
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
    function HomePage(navCtrl, navParams, _teamProv, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._teamProv = _teamProv;
        this.modalCtrl = modalCtrl;
        this.teamPage = __WEBPACK_IMPORTED_MODULE_2__team_team__["a" /* TeamPage */];
        this.jwtTokenPlatzhalter = 1;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.getAllTeams();
    }
    HomePage.prototype.openCreateTeamModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_create_team_modal_create_team_modal__["a" /* CreateTeamModalPage */]);
        myModal.present();
    };
    ;
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    //Anzeigen der zugehörigen Teams eines Spielers/Trainers
    HomePage.prototype.getAllTeams = function () {
        var _this = this;
        //get posted Teams
        //let tempTeam: Person = {teamManager: this._teamProv.activeUser.userID};
        this._teamProv.getTeam(/*ActiveUserID*/ 1).subscribe(function (data) {
            console.log(data);
            _this.allteams = data;
        }, function (error) { return console.log(error); });
    };
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    //Anzeigen des eigenen Profils
    HomePage.prototype.getProfile = function () {
        var _this = this;
        this._teamProv.getPerson(this.jwtTokenPlatzhalter).subscribe(function (data) {
            console.log(data);
            _this.person = data;
        }, function (error) { return console.log(error); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Handballverein XY</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list *ngIf="allteams">  \n\n        <button [navPush]="teamPage" [navParams]="{team:team}" ion-item *ngFor="let team of allteams">\n\n          {{team.name}}\n\n        </button> \n\n        <ion-item>\n\n            <ion-input type="text" placeholder="Beitrittscode eingeben"></ion-input>\n\n            <button ion-button outline item-end icon-left color="dark">\n\n              <ion-icon name="md-add-circle"></ion-icon>\n\n              Beitreten\n\n            </button>\n\n          </ion-item>\n\n      </ion-list>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <button ion-button item-end icon-left block round small color="secondary"  (click)="openCreateTeamModal()">\n\n          <ion-icon name="md-add-circle"></ion-icon>\n\n          Mannschaft anlegen\n\n        </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_trainer_trainer__["a" /* Services */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGameModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreateGameModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateGameModalPage = /** @class */ (function () {
    function CreateGameModalPage(viewCtrl, _teamProv) {
        this.viewCtrl = viewCtrl;
        this._teamProv = _teamProv;
        this.uebergabe = {
            id: null,
            spiel: null,
            ort: null,
            uhrzeit: null,
            datum: null,
            wiederholend: null,
            gegner: null
        };
    }
    CreateGameModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateGameModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'create-game-modal',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\create-game-modal\create-game-modal.html"*/'<!--\n\n  Generated template for the CreateGameModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Spiel anlegen</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="primary">Abbrechen</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item>\n\n      <ion-label>Spiel</ion-label>\n\n      <ion-toggle value="roadGame" checked="false" [(ngModel)]="uebergabe.spiel"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Gegener</ion-label>\n\n      <ion-input type="text" [(ngModel)]="uebergabe.gegner"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Auswärtsspiel</ion-label>\n\n      <ion-toggle value="roadGame" checked="false" [(ngModel)]="uebergabe.wiederholend"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Ort</ion-label>\n\n      <ion-input type="text" [(ngModel)]="uebergabe.ort"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Datum</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate" [(ngModel)]="uebergabe.datum"></ion-datetime>\n\n    </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>Anpfiff</ion-label>\n\n        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="myDate" [(ngModel)]="uebergabe.uhrzeit"></ion-datetime>\n\n      </ion-item>\n\n      \n\n  \n\n  </ion-list>\n\n  <button ion-button color="dark" (click)="createOneTermin()">Anlegen</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\create-game-modal\create-game-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__["a" /* Services */]])
    ], CreateGameModalPage);
    return CreateGameModalPage;
}());

//# sourceMappingURL=create-game-modal.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateTeamModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTeamModalPage = /** @class */ (function () {
    function CreateTeamModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    CreateTeamModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateTeamModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'create-team-modal',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\create-team-modal\create-team-modal.html"*/'<!--\n\n  Generated template for the CreateTeamModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mannschaft anlegen</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="primary">Abbrechen</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <div padding>\n\n        <ion-segment [(ngModel)]="genderSelect">\n\n          <ion-segment-button value="H">\n\n           Herren\n\n          </ion-segment-button>\n\n          <ion-segment-button value="F">\n\n           Mädchen\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n      \n\n      <div [ngSwitch]="genderSelect">\n\n        <div *ngSwitchCase="\'H\'">\n\n            <ion-list>\n\n                <ion-item>\n\n                  <ion-label>Altersstufe</ion-label>\n\n                  <ion-select [(ngModel)]="jugend" interface="popover">\n\n                    <ion-option value="H">Herren</ion-option>\n\n                    <ion-option value="A">A-Junioren</ion-option>\n\n                    <ion-option value="B">B-Junioren</ion-option>\n\n                    <ion-option value="C">C-Junioren</ion-option>\n\n                    <ion-option value="D">D-Junioren</ion-option>\n\n                    <ion-option value="E">E-Junioren</ion-option>\n\n                    <ion-option value="F">F-Junioren</ion-option>\n\n                    <ion-option value="M">Minis</ion-option>\n\n                    <ion-option value="S">Senioren</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n          \n\n                <ion-item>\n\n                  <ion-label>Spielzeit</ion-label>\n\n                  <ion-select [(ngModel)]="year" interface="popover">\n\n                    <ion-option>1989</ion-option>\n\n                    <ion-option>1990</ion-option>\n\n                    <ion-option>1991</ion-option>\n\n                    <ion-option>1992</ion-option>\n\n                    <ion-option>1993</ion-option>\n\n                    <ion-option>1994</ion-option>\n\n                    <ion-option>1995</ion-option>\n\n                    <ion-option>1996</ion-option>\n\n                    <ion-option>1997</ion-option>\n\n                    <ion-option>1998</ion-option>\n\n                    <ion-option>1999</ion-option>\n\n                  </ion-select>\n\n                  <ion-select [(ngModel)]="year2" interface="popover">\n\n                    <ion-option>1989</ion-option>\n\n                    <ion-option>1990</ion-option>\n\n                    <ion-option>1991</ion-option>\n\n                    <ion-option>1992</ion-option>\n\n                    <ion-option>1993</ion-option>\n\n                    <ion-option>1994</ion-option>\n\n                    <ion-option>1995</ion-option>\n\n                    <ion-option>1996</ion-option>\n\n                    <ion-option>1997</ion-option>\n\n                    <ion-option>1998</ion-option>\n\n                    <ion-option>1999</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n            \n\n              </ion-list>\n\n            <ion-list  radio-group>\n\n                <ion-item>\n\n                  <ion-label>1. Mannschaft</ion-label>\n\n                  <ion-radio checked="true" value="go"></ion-radio>\n\n                </ion-item>\n\n              \n\n                <ion-item>\n\n                  <ion-label>2.Mannschaft</ion-label>\n\n                  <ion-radio value="rust"></ion-radio>\n\n                </ion-item>\n\n              \n\n                <ion-item>\n\n                  <ion-label>3. Mannschaft</ion-label>\n\n                  <ion-radio value="python"></ion-radio>\n\n                </ion-item>\n\n        </ion-list>\n\n        <button ion-button full padding>Anlegen</button>\n\n        </div>\n\n        \n\n      \n\n        <div *ngSwitchCase="\'F\'">\n\n            <ion-list>\n\n                <ion-item>\n\n                  <ion-label>Altersstufe</ion-label>\n\n                  <ion-select [(ngModel)]="jugend" interface="popover">\n\n                    <ion-option value="H">Frauen</ion-option>\n\n                    <ion-option value="A">A-Juniorinnen</ion-option>\n\n                    <ion-option value="B">B-Juniorinnen</ion-option>\n\n                    <ion-option value="C">C-Juniorinnen</ion-option>\n\n                    <ion-option value="D">D-Juniorinnen</ion-option>\n\n                    <ion-option value="E">E-Juniorinnen</ion-option>\n\n                    <ion-option value="F">F-Juniorinnen</ion-option>\n\n                    <ion-option value="M">Minis</ion-option>\n\n                    <ion-option value="S">Seniorinnen</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n          \n\n                <ion-item>\n\n                  <ion-label>Spielzeit</ion-label>\n\n                  <ion-select [(ngModel)]="year" interface="popover">\n\n                    <ion-option>1989</ion-option>\n\n                    <ion-option>1990</ion-option>\n\n                    <ion-option>1991</ion-option>\n\n                    <ion-option>1992</ion-option>\n\n                    <ion-option>1993</ion-option>\n\n                    <ion-option>1994/95</ion-option>\n\n                    <ion-option>1995</ion-option>\n\n                    <ion-option>1996</ion-option>\n\n                    <ion-option>1997</ion-option>\n\n                    <ion-option>1998</ion-option>\n\n                    <ion-option>1999</ion-option>\n\n                  </ion-select>\n\n                  \n\n                </ion-item>\n\n            \n\n              </ion-list>\n\n            <ion-list  radio-group>\n\n                <ion-item>\n\n                  <ion-label>1. Mannschaft</ion-label>\n\n                  <ion-radio checked="true" value="go"></ion-radio>\n\n                </ion-item>\n\n              \n\n                <ion-item>\n\n                  <ion-label>2.Mannschaft</ion-label>\n\n                  <ion-radio value="rust"></ion-radio>\n\n                </ion-item>\n\n              \n\n                <ion-item>\n\n                  <ion-label>3. Mannschaft</ion-label>\n\n                  <ion-radio value="python"></ion-radio>\n\n                </ion-item>\n\n        </ion-list>\n\n        <button ion-button full padding>Anlegen</button>\n\n        </div>\n\n      </div>\n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\create-team-modal\create-team-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CreateTeamModalPage);
    return CreateTeamModalPage;
}());

//# sourceMappingURL=create-team-modal.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrainingModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateTrainingModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTrainingModalPage = /** @class */ (function () {
    function CreateTrainingModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    CreateTrainingModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateTrainingModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'create-training-modal',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\create-training-modal\create-training-modal.html"*/'<!--\n  Generated template for the CreateTrainingModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createTrainingModal</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="primary">Abbrechen</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\create-training-modal\create-training-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CreateTrainingModalPage);
    return CreateTrainingModalPage;
}());

//# sourceMappingURL=create-training-modal.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerListModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PlayerListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerListModalPage = /** @class */ (function () {
    function PlayerListModalPage(viewCtrl, _teamProv, params) {
        this.viewCtrl = viewCtrl;
        this._teamProv = _teamProv;
        this.params = params;
        //this.createGameModalPage();
        this.teamId = params.get("id");
        /*this.playerID = params.get("playerId");*/
        //console.log(this.teamId);
        //this.getPlayerList();
    }
    PlayerListModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    PlayerListModalPage.prototype.getPlayerList = function () {
        var _this = this;
        this._teamProv.getPlayerInTeam(this.teamId).subscribe(function (data) {
            console.log(data);
            _this.playerList = data;
        }, function (error) { return console.log(error); });
    };
    PlayerListModalPage.prototype.deletePlayer = function (player) {
        this._teamProv.deletePersonFromTeam(/*ID des zu löschenden Teams*/ player.id, this.teamId).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    PlayerListModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'player-list-modal',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\player-list-modal\player-list-modal.html"*/'<!--\n\n  Generated template for the PlayerListModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Spielerliste</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="closeModal()">\n\n        <span ion-text color="primary">Abbrechen</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list *ngIf="playerList">\n\n    <ion-item *ngFor="let player of playerList">\n\n      <ion-avatar item-start>\n\n        <img src=\'../../../assets/imgs/avatar.jpg\'>\n\n      </ion-avatar>\n\n      <h2>{{this.name}}</h2>\n\n      <p><ion-icon name="ma-checkmark-circle"></ion-icon> Verfügbar</p>\n\n      <button ion-button small clear item-end icon-left color="dark" (click)="deletePlayer(player)">\n\n        <ion-icon name="md-close-circle"></ion-icon>\n\n        Entfernen\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\player-list-modal\player-list-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__["a" /* Services */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PlayerListModalPage);
    return PlayerListModalPage;
}());

//# sourceMappingURL=player-list-modal.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modals/create-game-modal/create-game-modal.module": [
		285,
		3
	],
	"../pages/modals/create-team-modal/create-team-modal.module": [
		286,
		2
	],
	"../pages/modals/create-training-modal/create-training-modal.module": [
		287,
		1
	],
	"../pages/modals/player-list-modal/player-list-modal.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_player_list_modal_player_list_modal__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_create_game_modal_create_game_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_create_training_modal_create_training_modal__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeamPage = /** @class */ (function () {
    function TeamPage(navCtrl, navParams, modalCtrl, alertCtrl, _teamProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this._teamProv = _teamProv;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('team');
        this.getAllTermine();
    }
    /*openPlayerInviteModal() {
      let myModal = this.modalCtrl.create(PlayerInviteModalPage, {id: this.selectedItem.id});
      myModal.present();
  };*/
    TeamPage.prototype.openPlayerListModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_player_list_modal_player_list_modal__["a" /* PlayerListModalPage */] /*, {id: this.selectedItem.id}*/);
        myModal.present();
    };
    ;
    TeamPage.prototype.openCreateGameModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_create_game_modal_create_game_modal__["a" /* CreateGameModalPage */]);
        myModal.present();
    };
    ;
    TeamPage.prototype.openCreateTrainingModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modals_create_training_modal_create_training_modal__["a" /* CreateTrainingModalPage */]);
        myModal.present();
    };
    ;
    TeamPage.prototype.openPlayerInviteModal = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Spieler Einladen',
            message: 'sie können spieler einladen mit dem folgenden Code: 39620472',
            buttons: [
                {
                    text: 'Ablehnen',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Zustimmen',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.deleteTeam();
                    }
                }
            ]
        });
        confirm.present();
    };
    TeamPage.prototype.openDeleteTeamModal = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Manschaft auflösen',
            message: 'Sind sie sich sicher, dass sie die Mannschaft auflösen wollen?',
            buttons: [
                {
                    text: 'Ablehnen',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Zustimmen',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.deleteTeam();
                    }
                }
            ]
        });
        confirm.present();
    };
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    TeamPage.prototype.deleteTeam = function () {
        this._teamProv.deleteTeam(/*ID des zu löschenden Teams*/ this.selectedItem.id).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    TeamPage.prototype.getAllTermine = function () {
        var _this = this;
        this._teamProv.getTermin(this.selectedItem.id).subscribe(function (data) {
            console.log(data);
            _this.alleTermine = data;
        }, function (error) { return console.log(error); });
    };
    TeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\team\team.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{selectedItem.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  class="card-background-page">\n\n\n\n    <ion-list>\n\n\n\n\n\n        <ion-card *ngFor="let termin of alleTermine">\n\n          <img src="../../assets/imgs/training.jpg"/>\n\n          <div class="myOverlay">\n\n          <div class="card-title">Training</div>\n\n          <div class="card-subtitle">Dienstag 25.05.2018 16:00 Uhr</div>\n\n          \n\n             \n\n          \n\n          <div class="card-button">\n\n            <button ion-button icon-left color="secondary" outline>\n\n                <ion-icon name="checkmark-circle"></ion-icon>\n\n                Zusagen\n\n              </button>\n\n              <button ion-button icon-left color="danger" outline>\n\n                  <ion-icon name="close-circle"></ion-icon>\n\n                  Absagen\n\n                </button>\n\n          </div>\n\n        </div>\n\n        </ion-card>\n\n      </ion-list>\n\n\n\n      \n\n\n\n\n\n<ion-fab left bottom>\n\n      <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n      <ion-fab-list side="top">\n\n        <button ion-button round small color="dark" style="float:left;" (click)="openPlayerInviteModal()">Spieler einladen</button>\n\n        <button ion-button round small color="dark" style="float:left;" (click)="openPlayerListModal()">Spielerliste</button>\n\n        \n\n        <button ion-button round small color="dark" style="float:left;" (click)="openCreateGameModal()">Termin anlegen</button>\n\n        <button ion-button round small color="dark" style="float:left;" (click)="openDeleteTeamModal()">Mannschaft auflösen</button>\n\n      </ion-fab-list>\n\n    </ion-fab> \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\team\team.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__["a" /* Services */]])
    ], TeamPage);
    return TeamPage;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.loginForm = 'login';
    }
    LoginPage.prototype.openHomePage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\login\login.html"*/'<ion-content>\n\n\n  <div padding>\n    <ion-segment [(ngModel)]="loginForm">\n      <ion-segment-button value="login">\n        Login\n      </ion-segment-button>\n      <ion-segment-button value="signup">\n        Signup\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="loginForm">\n    <ion-list *ngSwitchCase="\'login\'">\n      <ion-item>\n        <ion-label fixed>Username</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      <button (click)="openHomePage()" ion-item>\n        Login\n      </button>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'signup\'">\n      <ion-item>\n        <ion-label color="dark" floating>Vorname</ion-label>\n        <ion-input type="text" clearInput></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>Nachname</ion-label>\n        <ion-input type="text" clearInput></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>Email</ion-label>\n        <ion-input type="email" clearInput></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>Email (wiederholen)</ion-label>\n        <ion-input type="email" clearInput></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="dark" floating>Password (Wiederholen)</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      \n    </ion-list>\n    <button outline color="secondary" (click)="openHomePage()" ion-button>\n        Signup\n    </button>\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_team_team__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modals_player_invite_modal_player_invite_modal__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modals_player_list_modal_player_list_modal__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modals_create_game_modal_create_game_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modals_create_team_modal_create_team_modal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modals_create_training_modal_create_training_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_login_login__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_trainer_trainer__ = __webpack_require__(29);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_team_team__["a" /* TeamPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modals_player_invite_modal_player_invite_modal__["a" /* PlayerInviteModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modals_player_list_modal_player_list_modal__["a" /* PlayerListModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modals_create_game_modal_create_game_modal__["a" /* CreateGameModalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modals_create_team_modal_create_team_modal__["a" /* CreateTeamModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modals_create_training_modal_create_training_modal__["a" /* CreateTrainingModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modals/create-game-modal/create-game-modal.module#CreateGameModalPageModule', name: 'CreateGameModalPage', segment: 'create-game-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/create-team-modal/create-team-modal.module#CreateTeamModalPageModule', name: 'CreateTeamModalPage', segment: 'create-team-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/create-training-modal/create-training-modal.module#CreateTrainingModalPageModule', name: 'CreateTrainingModalPage', segment: 'create-training-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/player-list-modal/player-list-modal.module#PlayerListModalPageModule', name: 'PlayerListModalPage', segment: 'player-list-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_team_team__["a" /* TeamPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modals_player_invite_modal_player_invite_modal__["a" /* PlayerInviteModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modals_player_list_modal_player_list_modal__["a" /* PlayerListModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modals_create_game_modal_create_game_modal__["a" /* CreateGameModalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modals_create_team_modal_create_team_modal__["a" /* CreateTeamModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modals_create_training_modal_create_training_modal__["a" /* CreateTrainingModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_trainer_trainer__["a" /* Services */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__["a" /* EmailComposer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_trainer_trainer__ = __webpack_require__(29);
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
    function MyApp(platform, statusBar, splashScreen, _teamProv) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._teamProv = _teamProv;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.idNumber = 1;
        //profile: Person;
        this.profile = {
            id: 4,
            firstname: "vorname",
            lastname: "nachname",
            loginName: "testlogin",
            loginpw: "pw"
        };
        this.initializeApp();
        //this.getProfile(this.idNumber);
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    /*  saveUpdateProfile(id: number, profile: Person){
      this._teamProv.updatePerson(id, profile).subscribe(
        (data) => {
         console.log(data);
        },
        error => console.log(error)
        )
      }*/
    /*  getProfile(id: number){
        this._teamProv.getPerson(id).subscribe(
          (data:Person) => {
            console.log(data);
            this.profile = data;
          },
          error => console.log(error)
        )
      }*/
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Profil</ion-title>\n\n    </ion-navbar>\n\n\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n    <ion-list inset> <!--*ngIf="profile"-->\n\n\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src=\'../assets/imgs/avatar.jpg\'>\n\n        </ion-avatar>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Vorname</ion-label>\n\n        <ion-input value="text" [(ngModel)]="profile.firstname"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="profile.lastname"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Login Name</ion-label>\n\n        <ion-input value="roadGame" [(ngModel)]="profile.loginName"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Login Passwort</ion-label>\n\n        <ion-input type="text" [(ngModel)]="profile.loginpw"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="saveUpdateProfile()">Aenderungen speichern</button>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_trainer_trainer__["a" /* Services */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerInviteModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SampleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerInviteModalPage = /** @class */ (function () {
    function PlayerInviteModalPage(viewCtrl, _teamProv, params, emailComposer) {
        this.viewCtrl = viewCtrl;
        this._teamProv = _teamProv;
        this.params = params;
        this.emailComposer = emailComposer;
        this.teamId = params.get("id");
    }
    PlayerInviteModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    PlayerInviteModalPage.prototype.getCode = function () {
        var _this = this;
        this._teamProv.getCode(this.teamId).subscribe(function (data) {
            console.log(data);
            _this.code = data;
        }, function (error) { return console.log(error); });
    };
    PlayerInviteModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'player-invite-modal',template:/*ion-inline-start:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\player-invite-modal\player-invite-modal.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        {{this.code}}\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="closeModal()">\n\n          <span ion-text color="primary">Abbrechen</span>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <button ion-button (click)="shareCode()">\n\n      <span ion-text color="primary">Code teilen</span>\n\n    </button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Niklas Schuster\Documents\GitHub\clubcorner_frontend\clubcorner\src\pages\modals\player-invite-modal\player-invite-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_trainer_trainer__["a" /* Services */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], PlayerInviteModalPage);
    return PlayerInviteModalPage;
}());

//# sourceMappingURL=player-invite-modal.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(http) {
        this.http = http;
        console.log('Hello LoginProvider Provider');
    }
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TrainerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Services = /** @class */ (function () {
    function Services(http) {
        this.http = http;
        this.options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'content-type': 'application/json',
                'accept': 'application/json'
            })
        };
        console.log('Hello TrainerProvider Provider');
    }
    //------------------------------------------
    //------------------------------------------
    // Mannschaft anlegen
    //------------------------------------------
    //------------------------------------------
    Services.prototype.createTeam = function (team) {
        if (team) {
            return this.http.post('${env.api}/team', team, this.options);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('No information given');
        }
    };
    Services.prototype.updateTeam = function (id, team) {
        if (team) {
            return this.http.put('${env.api}/team/${id}', team, this.options);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('No information given');
        }
    };
    Services.prototype.deleteTeam = function (id) {
        return this.http.delete('${env.api}/team/${id}', this.options);
    };
    Services.prototype.getTeam = function (id) {
        return this.http.get("https://virtserver.swaggerhub.com/schustern/handballverein/1.0/trainer/" + id, this.options);
    };
    Services.prototype.getPlayerInTeam = function (id) {
        return this.http.get('${env.api}/person/${id}', this.options);
    };
    //------------------------------------------
    //------------------------------------------
    // Code generieren
    //------------------------------------------
    //------------------------------------------
    Services.prototype.generateCode = function (id, code) {
        return this.http.post('${env.api}/team/${id}', code, this.options);
    };
    Services.prototype.getCode = function (id) {
        return this.http.get("https://virtserver.swaggerhub.com/TimMaa/Savood/1.0/team" + id + "/code", this.options);
    };
    //------------------------------------------
    //------------------------------------------
    // Termin erstellen
    //------------------------------------------
    //------------------------------------------
    Services.prototype.createTermin = function (termin) {
        if (termin) {
            return this.http.post('${env.api}/game', termin, this.options);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('No information given');
        }
    };
    Services.prototype.updateTermin = function (id, termin) {
        if (termin) {
            return this.http.put('${env.api}/game/${id}', termin, this.options);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('No information given');
        }
    };
    Services.prototype.deleteTermin = function (id) {
        return this.http.delete('${env.api}/game/${id}', this.options);
    };
    Services.prototype.getTermin = function (id) {
        return this.http.get("https://virtserver.swaggerhub.com/schustern/handballverein/1.0/termin/" + id, this.options);
    };
    //------------------------------------------
    //------------------------------------------
    // Person erstellen
    //------------------------------------------
    //------------------------------------------
    Services.prototype.createPerson = function (person) {
        if (person) {
            return this.http.post('${env.api}/person', person, this.options);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('No information given');
        }
    };
    Services.prototype.updatePerson = function (id, person) {
        if (person) {
            return this.http.put('${env.api}/person/${id}', person, this.options);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('No information given');
        }
    };
    Services.prototype.deletePersonFromTeam = function (id, teamid) {
        return this.http.delete('${env.api}/${teamid}/${id}', this.options);
    };
    Services.prototype.getPerson = function (id) {
        return this.http.get('${env.api}/person/${id}', this.options);
    };
    Services = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Services);
    return Services;
}());

//# sourceMappingURL=trainer.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map
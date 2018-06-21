import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Services} from '../../../providers/trainer/trainer';
import {Team} from '../../../Schema/team.schema';
import {Termin} from '../../../Schema/termin.schema';

/**
 * Generated class for the CreateGameModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'create-game-modal',
  templateUrl: 'create-game-modal.html',
})



export class CreateGameModalPage {
  constructor(public viewCtrl: ViewController, private _teamProv: Services) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }

  uebergabe: Termin = {
    id: null,
    gegner: null,
    ort: null,
    wiederholend: null,
    datum: null,
    uhrzeit: null
  }


}

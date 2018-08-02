import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Services} from '../../../providers/trainer/trainer';
import {Team} from '../../../Schema/team.schema';
import {Termin} from '../../../Schema/termin.schema';
import {mannschaftszuordnung} from "../../../Schema/mannschaftszuordnung.schema";
import {HomePage} from "../../home/home";
import {TeamPage} from "../../team/team";

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
  aktuellesTeam: mannschaftszuordnung;
  constructor(public viewCtrl: ViewController, private _teamProv: Services, private navParams: NavParams, public navCtrl: NavController) {
    this.aktuellesTeam = this.navParams.get("data");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  uebergabe: Termin = {
    id: null,
    _id: null,
    spiel: null,
    ort: null,
    uhrzeit: null,
    datum: null,
    wiederholend: null,
    gegner: null,
    enddatum: null,
    dauer: null
  }

   createOneTermin(){
    console.log(this.uebergabe);
    this._teamProv.createTermin(this.aktuellesTeam.mannschafts_ID, this.uebergabe).subscribe(
      (data) => {
        console.log(data);
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(HomePage);
      },
      error => console.log(error)
    )
  }


}

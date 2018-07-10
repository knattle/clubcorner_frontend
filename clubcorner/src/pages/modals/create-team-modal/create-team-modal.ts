import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Termin} from "../../../Schema/termin.schema";
import {Services} from "../../../providers/trainer/trainer";
import {Team} from "../../../Schema/team.schema";

/**
 * Generated class for the CreateTeamModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'create-team-modal',
  templateUrl: 'create-team-modal.html',
})
export class CreateTeamModalPage {
  constructor(public viewCtrl: ViewController, private _teamProv: Services) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }



  uebergabe: Team = {
    id: null,
  teamManager: null,
  name: null,
  grad: null,
  jugend: null,
  jahrgang: null,
  male: null
  }

  createOneTeam(){
    this._teamProv.createTeam(/*ID des zu löschenden Teams*/ this.uebergabe).subscribe(
      (data) => {
        console.log(data);
      },
      error => console.log(error)
    )
  }
}

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
  constructor(public viewCtrl: ViewController, private _teamProv: Services) {
    this.uebergabe.male = true;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }



  uebergabe: Team = {
    id: null,
    name: null,
    mannschaftsgrad: null,
    jugend: null,
    sasion: null,
    code: null,
    male: null
  }
  gender: null;

  createOneTeam(){
    if(this.gender == "H"){
      this.uebergabe.male = true;
    }else{
      this.uebergabe.male = false;
    }
    this._teamProv.createTeam(/*ID des zu löschenden Teams*/ this.uebergabe).subscribe(
      (data) => {
        console.log(data);
      },
      error => console.log(error)
    )
  }
}

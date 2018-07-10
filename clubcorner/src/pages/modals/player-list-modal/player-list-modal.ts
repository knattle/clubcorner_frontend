import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Services} from '../../../providers/trainer/trainer';
import {Person} from '../../../Schema/person.schema';


/**
 * Generated class for the PlayerListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'player-list-modal',
  templateUrl: 'player-list-modal.html',
})


export class PlayerListModalPage {

teamId: number;
playerID: number;
playerList: Person[];

  constructor(public viewCtrl: ViewController, private _teamProv: Services, private params: NavParams) {
    //this.createGameModalPage();
    this.teamId = params.get("id");
    /*this.playerID = params.get("playerId");*/
    //console.log(this.teamId);
    //this.getPlayerList();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

    getPlayerList(){
    this._teamProv.getPlayerInTeam(this.teamId).subscribe(
      (data:Person[]) => {
        console.log(data);
        this.playerList = data;
      },
      error => console.log(error)
    )
  }

    deletePlayer(player:Person){
    this._teamProv.deletePersonFromTeam(/*ID des zu löschenden Teams*/ this.teamId).subscribe(
      (data) => {
        console.log(data);
      },
      error => console.log(error)
    )
  }


}

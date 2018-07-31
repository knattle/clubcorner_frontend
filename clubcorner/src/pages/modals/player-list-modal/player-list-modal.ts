import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Services} from '../../../providers/trainer/trainer';
import {Person} from '../../../Schema/person.schema';
import {mannschaftszuordnung} from "../../../Schema/mannschaftszuordnung.schema";
import {HomePage} from "../../home/home";


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


export class PlayerListModalPage implements OnInit {

teamId: number;
aktuellesTeam: mannschaftszuordnung;
playerID: number;
playerList: Person[];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private _teamProv: Services, private navParams: NavParams) {
    //this.createGameModalPage();
    this.aktuellesTeam = this.navParams.get("data");
    /*this.playerID = params.get("playerId");*/
    //console.log(this.teamId);
  }

  ngOnInit() {
    this.getPlayerList();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

    getPlayerList(){
    this._teamProv.getPlayerInTeam(this.aktuellesTeam.mannschafts_ID).subscribe(
      (data) => {
        this.playerList = [];
        console.log(data);
        for (let entry of data['mannschaftzuordnungen']) {
          this._teamProv.getPerson(entry['personen_ID']).subscribe(data => {
            this.playerList.push(<Person>(data['person']));
          }, error => {
            console.log(error);
          })
        }
      },
      error => console.log(error)
    )
  }

    deletePlayer(player:Person){
    console.log(this.aktuellesTeam.mannschafts_ID);
    console.log(player._id);
    this._teamProv.deletePersonFromTeam(/*ID des zu löschenden Teams*/ this.aktuellesTeam.mannschafts_ID, player._id).subscribe(
      (data) => {
        console.log(data);
        this.viewCtrl.dismiss();
      },
      error => console.log(error)
    )
  }


}

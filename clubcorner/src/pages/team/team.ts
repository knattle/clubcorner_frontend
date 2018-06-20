import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Services} from '../../providers/trainer/trainer';
import {Team} from '../../Schema/team.schema';
import {Termin} from '../../Schema/termin.schema';
import {Person} from '../../Schema/person.schema';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})
export class TeamPage {
  selectedItem: Team;
  icons: string[];
  items: Array<{title: string}>;

  alleTermine: Termin[];
  alleSpieler: Person[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _teamProv: Services) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('team');
    this.getAllTermine();
  }




//-----------------------------------------------------------------
//-----------------------------------------------------------------

  deleteTeam(){
    this._teamProv.deleteTeam(/*ID des zu löschenden Teams*/ this.selectedItem.id).subscribe(
      (data) => {
        console.log(data);
      },
      error => console.log(error)
    )
  }

  getAllTermine(){
    this._teamProv.getTermin(this.selectedItem.id).subscribe(
      (data) => {
        console.log(data);
        this.alleTermine = data as Termin[];
      },
      error => console.log(error)
    )
  }
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//Aller Spieler einer Mannschaft anzeigen - Runde Button unten links
 /*getAllPlayer(){
    this._teamProv.getPlayerInTeam(this.selectedItem.id).subscribe(
      (data) => {
        console.log(data);
        this.alleSpieler = data as Person[];
      },
      error => console.log(error)
    )
  }*/

}

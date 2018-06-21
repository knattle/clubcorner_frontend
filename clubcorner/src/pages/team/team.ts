import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Services} from '../../providers/trainer/trainer';
import {Team} from '../../Schema/team.schema';
import {Termin} from '../../Schema/termin.schema';
import {Person} from '../../Schema/person.schema';
import { PlayerInviteModalPage } from '../modals/player-invite-modal/player-invite-modal';
import { PlayerListModalPage } from '../modals/player-list-modal/player-list-modal';
import { CreateGameModalPage } from '../modals/create-game-modal/create-game-modal';
import { CreateTeamModalPage } from '../modals/create-team-modal/create-team-modal';
import { CreateTrainingModalPage } from '../modals/create-training-modal/create-training-modal';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, private _teamProv: Services) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('team');
    //this.getAllTermine();
  }

  openPlayerInviteModal() {
    let myModal = this.modalCtrl.create(PlayerInviteModalPage);
    myModal.present();
  };
  
  openPlayerListModal() {
    let myModal = this.modalCtrl.create(PlayerListModalPage);
    myModal.present();
  };

  openCreateGameModal() {
    let myModal = this.modalCtrl.create(CreateGameModalPage);
    myModal.present();
  };

  openCreateTeamModal() {
    let myModal = this.modalCtrl.create(CreateTeamModalPage);
    myModal.present();
  };

  openCreateTrainingModal() {
    let myModal = this.modalCtrl.create(CreateTrainingModalPage);
    myModal.present();
  };


  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Manschaft auflösen',
      message: 'Sind sie sich sicher, dass sie die Mannschaft auflösen wollen?',
      buttons: [
        {
          text: 'Ablehnen',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Zustimmen',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
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

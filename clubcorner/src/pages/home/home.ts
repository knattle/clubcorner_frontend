import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PlayerInviteModalPage } from '../modals/player-invite-modal/player-invite-modal';
import { PlayerListModalPage } from '../modals/player-list-modal/player-list-modal';
import { CreateGameModalPage } from '../modals/create-game-modal/create-game-modal';
import { CreateTeamModalPage } from '../modals/create-team-modal/create-team-modal';
import { CreateTrainingModalPage } from '../modals/create-training-modal/create-training-modal';

import {TeamPage} from '../team/team';
import {Services} from '../../providers/trainer/trainer';
import {Team} from '../../Schema/team.schema'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  teamPage = TeamPage;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;

  allteams: Team[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, private _teamProv: Services) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.getAllTeams();
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



  getAllTeams(){
    //get posted Teams
    //let tempTeam: Person = {teamManager: this._teamProv.activeUser.userID};
    this._teamProv.getTeam(/*ActiveUserID*/ 1).subscribe(
      (data) => {
        console.log(data);
        this.allteams = data as Team[];
      }, 
      error => console.log(error)
    )
  }

}

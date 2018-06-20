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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  teamPage = TeamPage;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;

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


  showConfirmDeleteTeam() {
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

  showConfirmInvitePlayer() {
    const confirm = this.alertCtrl.create({
      title: 'Spieler einladen',
      message: 'Der Invite Code für die Manschaft lautet: 38615053',
      buttons: [
        {
          text: 'Abbrechen',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Teilen',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [];
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Mannschaft ' + i,
      });
    };
  }
}

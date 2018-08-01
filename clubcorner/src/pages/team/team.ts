import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Services} from '../../providers/trainer/trainer';
import {Team} from '../../Schema/team.schema';
import {Termin} from '../../Schema/termin.schema';
import {Person} from '../../Schema/person.schema';
import { PlayerInviteModalPage } from '../modals/player-invite-modal/player-invite-modal';
import { PlayerListModalPage } from '../modals/player-list-modal/player-list-modal';
import { CreateGameModalPage } from '../modals/create-game-modal/create-game-modal';
import { CreateTrainingModalPage } from '../modals/create-training-modal/create-training-modal';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import {HomePage} from "../home/home";
import {mannschaftszuordnung} from "../../Schema/mannschaftszuordnung.schema";
import { terminStatus } from '../../Schema/terminstatus.schema';
//import { Calendar } from "@ionic-native/calendar";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})
export class TeamPage implements OnInit {
  selectedItem: mannschaftszuordnung;
  icons: string[];
  items: Array<{title: string}>;
  statusObjekt: terminStatus;
  decoded = jwt_decode(localStorage.getItem("token"));


  alleSpieler: Person[];
  alleTermine: Termin[];
  team: Team;
  terminstatus: terminStatus;
  status: 1;

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer, public navParams: NavParams,
              public modalCtrl: ModalController, public alertCtrl: AlertController, private _teamProv: Services) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = this.navParams.get('team');
  }

  ngOnInit() {
    this.alleTermine = [];
    this.selectedItem = this.navParams.get('team');
    console.log(this.selectedItem);
    this.getAllTermine();
    this.getTeamInfo();
  }

  /*openPlayerInviteModal() {
    let myModal = this.modalCtrl.create(PlayerInviteModalPage, {id: this.selectedItem.id});
    myModal.present();
};*/

  openPlayerListModal() {
    let myModal = this.modalCtrl.create(PlayerListModalPage, {data: this.selectedItem});
    myModal.present();
  };

  openCreateGameModal() {
    let myModal = this.modalCtrl.create(CreateGameModalPage, {data: this.selectedItem});
    myModal.present();
  };

  openCreateTrainingModal() {
    let myModal = this.modalCtrl.create(CreateTrainingModalPage);
    myModal.present();
  };


  openPlayerInviteModal() {
    const confirm = this.alertCtrl.create({
      title: 'Spieler Einladen',
      message: 'sie können spieler einladen mit dem folgenden Code: ' + this.team.anmeldecode,
      buttons: [
        {
          text: 'Schließen',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Teilen',
          handler: () => {
            console.log('Agree clicked');
            this.shareCode(this.team.anmeldecode);
          }
        }
      ]
    });
    confirm.present();
  }

  openDeleteTeamModal() {
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
            this.deleteTeam();
          }
        }
      ]
    });
    confirm.present();
  }

 /* openCalendar(){

  }*/

 deleteTermin(termin: Termin){
   console.log(termin);
   this._teamProv.deleteTermin(termin._id).subscribe(data => {
     this.getAllTermine();
   }, error => {

   });
 }

 //-----------------------------------------------------------------
//-----------------------------------------------------------------

  deleteTeam(){
    this._teamProv.deleteTeam(/*ID des zu löschenden Teams*/ this.selectedItem.mannschafts_ID).subscribe(
      (data) => {
        this.navCtrl.pop();
        this.navCtrl.push(HomePage);
        console.log(data);
      },
      error => console.log(error)
    )
  }

  getAllTermine() {
    this._teamProv.getTermin(this.selectedItem.mannschafts_ID).subscribe(
      (data) => {
        console.log(data);
        this.alleTermine = data['termine'] as Termin[];
      },
      error => console.log(error)
    )
  }

  getTeamInfo() {
    this._teamProv.getTeam(this.selectedItem.mannschafts_ID).subscribe(
      (data) => {
        this.team = <Team>data['Mannschaften'][0];
      },
      error => console.log(error)
    )
  }

  shareCode(code: string){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available){

      }
    });

    let email = {
      to: '',
      cc: '',
      subject: 'TeamApp: Einladung in eine Mannschaft',
      body: 'Hallo, du wurdest in eine Mannschat eingeladen. Nutze den folgenden Code um dem Team beizutreten: ' + code,
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  acceptStatus(termin: Termin){
    
    this.getStatus(termin);
    console.log(termin);
    this.statusObjekt.Termin_ID = termin._id;
    this.statusObjekt.personen_ID = this.decoded.id;
    this.statusObjekt._id = this.terminstatus._id;
    this.statusObjekt.status = 0;
    this._teamProv.acceptTermin(this.statusObjekt, termin._id).subscribe(data => {
      this.getAllTermine();
    }, error => {
 
    });
  }

  getStatus(termin: Termin) {
    this._teamProv.getStatus(termin._id).subscribe(
      (data) => {
        this.terminstatus = data as terminStatus;
      },
      error => console.log(error)
    )
  }

}

  //Anzeigen des eigenen Profils


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



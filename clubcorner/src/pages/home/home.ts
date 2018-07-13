import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
//import { JwtHelper } from 'angular2-jwt';
import jwt_decode from 'jwt-decode';


import {TeamPage} from '../team/team';
import {Services} from '../../providers/trainer/trainer';
import {Team} from '../../Schema/team.schema';
import {mannschaftszuordnung} from '../../Schema/mannschaftszuordnung.schema';
import {Person} from '../../Schema/person.schema';
import { CreateTeamModalPage } from '../modals/create-team-modal/create-team-modal';
import {DataService} from "../../providers/dataService/passData";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  teamPage = TeamPage;
  //selectedItem = localStorage.getItem("token")
  decoded = jwt_decode(localStorage.getItem("token"));
  icons: string[];
  items: Array<{title: string}>;

  allteams: mannschaftszuordnung[];
  person: Person;
  jwtTokenPlatzhalter: number = 1;
  code: string;


 // helper = new JwtHelper();
  //decoded = this.helper.decodeToken(this.selectedItem);
  //decoded;
  constructor(public dataService: DataService, public navCtrl: NavController, public navParams: NavParams, private _teamProv: Services, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    //selectedItem = navParams.get('item');
    //this.decoded = null;

    //console.log(this.decoded);
    console.log(this.decoded.userID);

    this.getAllTeams();
   // this.getProfile();
  }

  openCreateTeamModal() {
    let myModal = this.modalCtrl.create(CreateTeamModalPage);
    myModal.present();
  };

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//Anzeigen der zugehörigen Teams eines Spielers/Trainers
  getAllTeams(){
    //get posted Teams
    //let tempTeam: Person = {teamManager: this._teamProv.activeUser.userID};
    this._teamProv.getTeamListe(this.decoded.userID).subscribe(
      (data) => {
        console.log(data);
        this.allteams = data as mannschaftszuordnung[];
      },
      error => console.log(error)
    )
  }

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//Anzeigen des eigenen Profils

  getProfile(){
    this._teamProv.getPerson(this.decoded.userID).subscribe(
      (data:Person) => {
        console.log("GetProfile:" + data);
        this.person = data;
        console.log(this.person);
        this.dataService.changeMessage(this.person);
      },
      error => console.log(error)
    )
  }

  einschreiben(){
    this._teamProv.einschreiben(this.decoded.userID, this.code).subscribe(
      (data) => {
        console.log(data);
      },
      error => console.log(error)
    )
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


import {TeamPage} from '../team/team';
import {Services} from '../../providers/trainer/trainer';
import {Team} from '../../Schema/team.schema';
import {Person} from '../../Schema/person.schema';
import { CreateTeamModalPage } from '../modals/create-team-modal/create-team-modal';

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
  person: Person;
  jwtTokenPlatzhalter: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _teamProv: Services, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.getAllTeams();
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
    this._teamProv.getTeam(/*ActiveUserID*/ 1).subscribe(
      (data) => {
        console.log(data);
        this.allteams = data as Team[];
      }, 
      error => console.log(error)
    )
  }

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//Anzeigen des eigenen Profils

  getProfile(){
    this._teamProv.getPerson(this.jwtTokenPlatzhalter).subscribe(
      (data:Person) => {
        console.log(data);
        this.person = data;
      },
      error => console.log(error)
    )
  }






}


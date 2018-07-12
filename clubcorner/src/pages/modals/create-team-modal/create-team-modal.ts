import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Termin} from "../../../Schema/termin.schema";
import {Services} from "../../../providers/trainer/trainer";
import {Team} from "../../../Schema/team.schema";
import {HomePage} from "../../home/home";

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
  public saisonList:any;
  constructor(public viewCtrl: ViewController, private _teamProv: Services, public navCtrl: NavController) {
      this.uebergabe.male = true;
    this.saisonList=[{
      name: (new Date().getFullYear()-1)+'/'+(new Date().getFullYear()),
      values:(new Date().getFullYear()-1)+'/'+(new Date().getFullYear()),
      flag:0
    },{
      name: (new Date().getFullYear())+'/'+(new Date().getFullYear()+1),
      values:(new Date().getFullYear())+'/'+(new Date().getFullYear()+1),
      flag:0
    },{
      name:(new Date().getFullYear()+1)+'/'+(new Date().getFullYear()+2),
      values:(new Date().getFullYear()+1)+'/'+(new Date().getFullYear()+2),
      flag:0
    },{
      name: (new Date().getFullYear()+2)+'/'+(new Date().getFullYear()+3),
      values:(new Date().getFullYear()+2)+'/'+(new Date().getFullYear()+3),
      flag:0
    },{
      name: (new Date().getFullYear()+3)+'/'+(new Date().getFullYear()+4),
      values:(new Date().getFullYear()+3)+'/'+(new Date().getFullYear()+4),
      flag:0
    }];
  }

  valuechange(key){

    for(let i = 0 ; i < this.saisonList.lengh ; i++){
      if( this.saisonList[i].values==key){
        this.saisonList[i].flag=1;
      }else{
        this.saisonList[i].flag=0;
      }
    }
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
    if(this.gender == "male"){
      this.uebergabe.male = true;
    }else{
      this.uebergabe.male = false;
    }
    this._teamProv.createTeam(/*ID des zu löschenden Teams*/ this.uebergabe).subscribe(
      (data) => {
        console.log(data);
        this.closeModal();
        this.navCtrl.push(HomePage);
      },
      error => console.log(error)
    )
  }
}



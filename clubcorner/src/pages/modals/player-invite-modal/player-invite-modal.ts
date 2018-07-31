import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {Services} from '../../../providers/trainer/trainer';
import {Person} from '../../../Schema/person.schema';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the SampleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'player-invite-modal',
  templateUrl: 'player-invite-modal.html'
})
export class PlayerInviteModalPage implements OnInit {

  teamId: number;
  teamCode: string;
  constructor(public viewCtrl: ViewController, private _teamProv: Services, private params: NavParams, private emailComposer: EmailComposer) {
    console.log(params);
    this.teamId = params.get("id");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    this.getCode();
  }

  getCode(){
    this._teamProv.getTeam(this.teamId).subscribe(
      (data) => {
        this.teamCode = data['Mannschaften'][0]['anmeldecode'];
      },
      error => console.log(error)
    )
  }

  shareCode(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available){

      }
    });

    let email = {
      to: '',
      cc: '',
      subject: 'Clubcorner: Einladung in eine Mannschaft',
      body: 'Hallo, du wurdest in eine Mannschat eingeladen. Nutze den folgenden Code um dem Team beizutreten: ' + this.code,
      isHtml: true
    };

    this.emailComposer.open(email);
  }

}



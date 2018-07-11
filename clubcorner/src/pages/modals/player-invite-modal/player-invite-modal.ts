import { Component } from '@angular/core';
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
export class PlayerInviteModalPage {

  teamId: number;
  code: string;
  teamCode: string;
  constructor(public viewCtrl: ViewController, private _teamProv: Services, private params: NavParams, private emailComposer: EmailComposer) {
    this.teamId = params.get("id");
    this.teamCode = params.get("code");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

 /* getCode(){
    this._teamProv.getCode(this.teamId).subscribe(
      (data:string) => {
        console.log(data);
        this.code = data;
      },
      error => console.log(error)
    )
  }
*/
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



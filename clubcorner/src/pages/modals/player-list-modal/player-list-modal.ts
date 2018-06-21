import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


/**
 * Generated class for the PlayerListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'player-list-modal',
  templateUrl: 'player-list-modal.html',
})
export class PlayerListModalPage {
  constructor(public viewCtrl: ViewController) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }

   /* createGameModalPage(){    
    this._teamProv.createTermin(this.uebergabe).subscribe(
      (data) => {
        console.log(data);
      },
      error => console.log(error)
    )
  }*/
}

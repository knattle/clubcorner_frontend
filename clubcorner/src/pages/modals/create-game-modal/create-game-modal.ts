import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateGameModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'create-game-modal',
  templateUrl: 'create-game-modal.html',
})
export class CreateGameModalPage {
  constructor(public viewCtrl: ViewController) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }
}

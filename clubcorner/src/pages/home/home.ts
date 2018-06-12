import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal';

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

  openModal() {
    let myModal = this.modalCtrl.create(SampleModalPage);
    myModal.present();
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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

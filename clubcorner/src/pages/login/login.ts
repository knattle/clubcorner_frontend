import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  homePage = HomePage;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [];
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Mannschaft ' + i,
      });
    }
  }
}

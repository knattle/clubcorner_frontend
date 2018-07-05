import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import {login} from "../../Schema/login.schema";
import {Services} from "../../providers/trainer/trainer";
import {Person} from "../../Schema/person.schema";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  homePage = HomePage;
  selectedItem: any;
  loginForm: any;
  icons: string[];
  items: Array<{title: string}>;
  daten: login = {
    loginName: null,
    loginPw: null
  }
  person: Person = {
    id: null,
    firstname: null,
    lastname: null,
    loginName: null,
    loginpw: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private _teamProv: Services) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.loginForm = 'login';
  }

  openHomePage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.postLoginData();
    this.postSignupData();
  }


  postLoginData(){
 console.log(this.daten)
     this._teamProv.logIn(this.daten).subscribe(
    (data) => {
      this.navCtrl.setRoot(HomePage);
     console.log(data);
    },
    error => {console.log(error);
      if (error.status == 401) {
        alert("wrong credentials");
      } else {
        alert("something failure");
      }
    }
    )
  }

  postSignupData(){
  console.log(this.person)
    this._teamProv.createPerson(this.person).subscribe(
      (data) => {
        console.log(data);
      },
      error => console.log(error)
    )
  }
}

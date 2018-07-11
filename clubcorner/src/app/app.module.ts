import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeamPage } from '../pages/team/team';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayerInviteModalPage } from '../pages/modals/player-invite-modal/player-invite-modal';
import { PlayerListModalPage } from '../pages/modals/player-list-modal/player-list-modal';
import { CreateGameModalPage } from '../pages/modals/create-game-modal/create-game-modal';
import { CreateTeamModalPage } from '../pages/modals/create-team-modal/create-team-modal';
import { CreateTrainingModalPage } from '../pages//modals/create-training-modal/create-training-modal';
import { EmailComposer} from "@ionic-native/email-composer";

import { LoginProvider } from '../providers/login/login';
import { Services } from '../providers/trainer/trainer';
import {DataService} from "../providers/dataService/passData";
//import { JwtHelper } from 'angular2-jwt';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamPage,
    LoginPage,
    PlayerInviteModalPage,
    PlayerListModalPage,
    CreateGameModalPage,
    CreateTeamModalPage,
    CreateTrainingModalPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeamPage,
    LoginPage,
    PlayerInviteModalPage,
    PlayerListModalPage,
    CreateGameModalPage,
    CreateTeamModalPage,
    CreateTrainingModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    Services,
    EmailComposer,
    DataService
    //JwtHelperService
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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
import { DeleteTeamModalPage } from '../pages/modals/delete-team-modal/delete-team-modal';

import { LoginProvider } from '../providers/login/login';
import { TrainerProvider } from '../providers/trainer/trainer';
import { AdminProvider } from '../providers/admin/admin';
import { ProfileProvider } from '../providers/profile/profile';
import { SpielerProvider } from '../providers/spieler/spieler';

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
    CreateTrainingModalPage,
    DeleteTeamModalPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    CreateTrainingModalPage,
    DeleteTeamModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    TrainerProvider,
    AdminProvider,
    ProfileProvider,
    SpielerProvider
  ]
})
export class AppModule {}

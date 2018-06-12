import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeamPage } from '../pages/team/team';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { SampleModalPage } from '../pages/sample-modal/sample-modal';
=======
import { LoginProvider } from '../providers/login/login';
import { TrainerProvider } from '../providers/trainer/trainer';
import { AdminProvider } from '../providers/admin/admin';
import { ProfileProvider } from '../providers/profile/profile';
import { SpielerProvider } from '../providers/spieler/spieler';
>>>>>>> origin/services

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamPage,
    LoginPage,
    SampleModalPage
    
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
    SampleModalPage
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

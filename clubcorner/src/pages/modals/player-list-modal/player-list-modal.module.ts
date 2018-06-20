import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerListModalPage } from './player-list-modal';

@NgModule({
  declarations: [
    PlayerListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerListModalPage),
  ],
})
export class PlayerListModalPageModule {}

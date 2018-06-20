import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerInviteModalPage } from './player-invite-modal';

@NgModule({
  declarations: [
    PlayerInviteModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerInviteModalPage),
  ],
})
export class PlayerInviteModalModule {}

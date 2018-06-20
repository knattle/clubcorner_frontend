import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTeamModalPage } from './create-team-modal';

@NgModule({
  declarations: [
    CreateTeamModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTeamModalPage),
  ],
})
export class CreateTeamModalPageModule {}

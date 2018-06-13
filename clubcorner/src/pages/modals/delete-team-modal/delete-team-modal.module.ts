import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteTeamModalPage } from './delete-team-modal';

@NgModule({
  declarations: [
    DeleteTeamModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteTeamModalPage),
  ],
})
export class DeleteTeamModalPageModule {}

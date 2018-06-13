import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateGameModalPage } from './create-game-modal';

@NgModule({
  declarations: [
    CreateGameModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateGameModalPage),
  ],
})
export class CreateGameModalPageModule {}

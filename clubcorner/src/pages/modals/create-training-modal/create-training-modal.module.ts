import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTrainingModalPage } from './create-training-modal';

@NgModule({
  declarations: [
    CreateTrainingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTrainingModalPage),
  ],
})
export class CreateTrainingModalPageModule {}

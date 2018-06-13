import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import env from '../../environment';
import {Admin} from '../../schema/admin.schema';
import {TrainerProvider} from "../trainer/trainer";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the AdminProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminProvider {

  options = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json'
    })
  };

  constructor(public http: HttpClient) {
    console.log('Hello AdminProvider Provider');
    //console.log(env.api)
  }

  //------------------------------------------
  //------------------------------------------
  // Liste aller Teams erhalten
  //------------------------------------------
  //------------------------------------------

  getTeams(limit:number, offset: number){
    return this.http.get('${env.api}/teams', this.options)
  }
  //------------------------------------------
  //------------------------------------------
  // Trainer anlegen, löschen und updaten
  //------------------------------------------
  //------------------------------------------

  createTrainer(trainer: TrainerProvider){
    if (trainer){
      return this.http.post('${env.api}/trainer', trainer, this.options)
    }else {
      return Observable.throw('No information given');
    }
  }

  updateTrainer(id:number, trainer: TrainerProvider){
    if (trainer){
      return this.http.put('${env.api}/trainer/${id}', trainer, this.options)
    }else {
      return Observable.throw('No information given');
    }
  }

  deleteTrainer(id:number){
    return this.http.delete('${env.api}/trainer/${id}', this.options)
  }

}

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import env from '../../environment';
import {Observable} from "rxjs/Observable";
import {Team} from "../../Schema/team.schema";
import {GameSchema} from "../../Schema/game.schema";
import {TrainingSchema} from "../../Schema/training.schema";

/*
  Generated class for the TrainerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrainerProvider {

  options = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json'
    })
  };

  constructor(public http: HttpClient) {
    console.log('Hello TrainerProvider Provider');
  }

  //------------------------------------------
  //------------------------------------------
  // Mannschaft anlegen
  //------------------------------------------
  //------------------------------------------

  createTeam(team: Team){
    if(team){
      return this.http.post('${env.api}/team', team, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  updateTeam(id:number, team: Team){
    if(team){
      return this.http.put('${env.api}/team/${id}', team, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  deleteTeam(id:number){
    return this.http.delete('${env.api}/team/${id}', this.options);
  }

  getTeam(id: number, team: Team){
    return this.http.get('${env.api}/trainer/${id}', this.options);
  }

  //------------------------------------------
  //------------------------------------------
  // Code generieren
  //------------------------------------------
  //------------------------------------------

  generateCode(id:number, code: number){
    return this.http.post('${env.api}/team/${id}', code, this.options)
  }


  //------------------------------------------
  //------------------------------------------
  // Spiel erstellen
  //------------------------------------------
  //------------------------------------------

  createGame(game: GameSchema){
    if(game){
      return this.http.post('${env.api}/game', game, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  updateGame(id:number, game: GameSchema){
    if(game){
      return this.http.put('${env.api}/game/${id}', game, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  deleteGame(id:number){
    return this.http.delete('${env.api}/game/${id}', this.options);
  }


  //------------------------------------------
  //------------------------------------------
  // Training erstellen
  //------------------------------------------
  //------------------------------------------

  createTraining(training: TrainingSchema){
    if(training){
      return this.http.post('${env.api}/training', training, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  updateTraining(id:number, training: TrainingSchema){
    if(training){
      return this.http.put('${env.api}/training/${id}', training, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  deleteTraining(id:number){
    return this.http.delete('${env.api}/training/${id}', this.options);
  }
}

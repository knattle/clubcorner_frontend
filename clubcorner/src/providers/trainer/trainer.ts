import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import env from '../../environment';
import {Observable} from "rxjs/Observable";
import {Team} from "../../Schema/team.schema";
import {Termin} from "../../Schema/termin.schema";
import {Person} from "../../Schema/person.schema";

/*
  Generated class for the TrainerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Services {

  options = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json'
    })
  };

  constructor(public http:HttpClient) {
    console.log('Hello TrainerProvider Provider');
  }

  //------------------------------------------
  //------------------------------------------
  // Mannschaft anlegen
  //------------------------------------------
  //------------------------------------------

  createTeam(team:Team) {
    if (team) {
      return this.http.post('${env.api}/team', team, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  updateTeam(id:number, team:Team) {
    if (team) {
      return this.http.put('${env.api}/team/${id}', team, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  deleteTeam(id:number) {
    return this.http.delete('${env.api}/team/${id}', this.options);
  }

  getTeam(id:number) {
    return this.http.get(`https://virtserver.swaggerhub.com/TimMaa/Savood/1.0/trainer/${id}`, this.options);
  }


  getPlayerInTeam(id:number) {
    return this.http.get('${env.api}/person/${id}', this.options);
  }

  //------------------------------------------
  //------------------------------------------
  // Code generieren
  //------------------------------------------
  //------------------------------------------

  generateCode(id:number, code:number) {
    return this.http.post('${env.api}/team/${id}', code, this.options)
  }


  //------------------------------------------
  //------------------------------------------
  // Termin erstellen
  //------------------------------------------
  //------------------------------------------

  createTermin(termin:Termin) {
    if (termin) {
      return this.http.post('${env.api}/game', termin, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  updateTermin(id:number, termin:Termin) {
    if (termin) {
      return this.http.put('${env.api}/game/${id}', termin, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  deleteTermin(id:number) {
    return this.http.delete('${env.api}/game/${id}', this.options);
  }

  getTermin(id:number) {
    return this.http.get(`https://virtserver.swaggerhub.com/TimMaa/Savood/1.0/termin/${id}`, this.options);
  }


  //------------------------------------------
  //------------------------------------------
  // Person erstellen
  //------------------------------------------
  //------------------------------------------

  createPerson(person:Person) {
    if (person) {
      return this.http.post('${env.api}/person', person, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  updatePerson(id:number, person:Person) {
    if (person) {
      return this.http.put('${env.api}/person/${id}', person, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  deletePersonFromTeam(id:number, teamid: number) {
    return this.http.delete('${env.api}/${teamid}/${id}', this.options);
  }

  getPerson(id:number) {
    return this.http.get('${env.api}/person/${id}', this.options);
  }
  
  
}
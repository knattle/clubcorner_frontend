import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import env from '../../environment';
import {Observable} from "rxjs/Observable";
import {Team} from "../../Schema/team.schema";
import {Termin} from "../../Schema/termin.schema";
import {Person} from "../../Schema/person.schema";
import {login} from "../../Schema/login.schema";
import {Storage} from "@ionic/storage";

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

  constructor(public http:HttpClient, /*private storage: Storage*/) {
    console.log('Hello TrainerProvider Provider');
  }


  //------------------------------------------
  // Login
  //------------------------------------------
  idToken: string;
  logIn(daten: login): Observable<any> {
    if (daten) {
      return this.http.post(`http://pachisi456.selfhost.eu:3001/personen/login`, daten, this.options)
    } else {
      return Observable.throw('No information given');
    }
  }

 /* private setSession(authResult){
    localStorage.setItem('id_token', authResult.idToken);
  }*/


  saveData(data: {token: string}) {

   // let rs = data.json();
    //localStorage.setItem("id_token", data.id);
    localStorage.setItem("token", data.token);
    // this.storage.set("user", rs.user);
    //this.storage.set("id_token", rs.token);
  }


  //------------------------------------------
  // SignIp
  //------------------------------------------
  signUp(person: Person): Observable<any> {
    if (person) {
      return this.http.post(`http://pachisi456.selfhost.eu:3001/personen/signup`, person, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }
  //------------------------------------------
  // In Team einschreiben
  //------------------------------------------
  einschreiben(person: Person, teamId: string): Observable<any> {
    if (person && teamId) {
      return this.http.post(`${env.env.api}/${teamId}`, person, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }


  //------------------------------------------
  //------------------------------------------
  // Mannschaft anlegen
  //------------------------------------------
  //------------------------------------------

  createTeam(team:Team): Observable<any> {
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

  getTeam(id: number) {
    return this.http.get(`http://pachisi456.selfhost.eu:3001/mannschaft/${id}`, this.options);
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
  getCode(id:number) {
    return this.http.get(`https://virtserver.swaggerhub.com/TimMaa/Savood/1.0/team${id}/code`, this.options);
  }


  //------------------------------------------
  //------------------------------------------
  // Termin erstellen
  //------------------------------------------
  //------------------------------------------

  createTermin(termin:Termin): Observable<any> {
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
    return this.http.get(`http://pachisi456.selfhost.eu:3001/termin/${id}`, this.options);
  }


  //------------------------------------------
  //------------------------------------------
  // Person erstellen
  //------------------------------------------
  //------------------------------------------

  createPerson(person:Person): Observable<any> {
    console.log(person);
    if (person) {
      return this.http.post(`http://pachisi456.selfhost.eu:3001/personen/signup`, person, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  updatePerson(id:number, person:Person): Observable<any> {
    if (person) {
      return this.http.put(`http://pachisi456.selfhost.eu:3001/personen/update/${id}`, person, this.options);
    } else {
      return Observable.throw('No information given');
    }
  }

  deletePersonFromTeam(teamid: number) {
    return this.http.delete('${env.api}/${teamid}/${}', this.options);
  }

  getPerson(id: number) {
    console.log(id);
    return this.http.get(`http://pachisi456.selfhost.eu:3001/personen/${id}`, this.options);
  }


}

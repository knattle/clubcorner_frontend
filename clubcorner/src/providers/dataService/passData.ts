import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Person} from "../../Schema/person.schema";

@Injectable()
export class DataService {
  person: Person;

  private messageSource = new BehaviorSubject(this.person);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Person) {
    this.messageSource.next(message)
  }

}

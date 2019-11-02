import { Patient } from './../models/patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { patientUrl } from '../global';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  configUrl = 'assets/service-test.json';
  patient: Patient = null;

  constructor(private http: HttpClient) { }

  getData(): Observable<Test[]> {
    return this.http.get<Test[]>(this.configUrl);
  }

  getUser(patientId?: string): Observable<Patient> {
    console.log('getUser patientId ' + patientId);
    console.log('this.patient ' + this.patient);
    if (this.patient !== null) {
      console.log('cahche used:  ' + this.patient);
      return of(this.patient);
    } else {
      return this.http.get<Patient>(patientUrl + patientId).pipe(
        tap((patient: Patient) => {
          console.log('patientId ' + patientId);
          this.patient = patient; // TODO inside, we have to search the resource, something like .entry .resource ...
          return this.patient;
        })
      );
    }
  }

}

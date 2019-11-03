import { Patient } from './../models/patient';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../models/test';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { fhirUrl } from '../global';
import { fhirAuth } from '../private';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  configUrl = 'assets/service-test.json';
  patient: Patient;

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders()
    .set('Authorization',  `Basic ${btoa(fhirAuth.username + ':' + fhirAuth.password)}`)
  };

  getData(): Observable<Test[]> {
    return this.http.get<Test[]>(this.configUrl);
  }

  getUser(patientId?: string): Observable<Patient> {

    if (typeof this.patient === 'undefined' &&
        typeof patientId === 'undefined') return;

    if (typeof this.patient !== 'undefined') {
      return of(this.patient);
    } else {
      return this.http.get<Patient>(fhirUrl + 'Patient?identifier=' + patientId).pipe(
        map((patient: Patient) => {
          this.patient = patient['entry'][0].resource;
          return this.patient;
        })
      );
    }
  }

}

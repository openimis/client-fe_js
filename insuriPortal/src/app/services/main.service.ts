import { Patient } from './../models/patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay, catchError } from 'rxjs/operators';
import { patientUrl } from '../global';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  configUrl = 'assets/service-test.json';
  patient$: Observable<Patient>;
  patient: Patient;

  constructor(private http: HttpClient) { }

  getData(): Observable<Test[]> {
    return this.http.get<Test[]>(this.configUrl);
  }

  getUser(patientId?: string): Observable<Patient> {
    if (typeof this.patient !== 'undefined') {
      return this.patient$;
    } else {
      this.patient$ = this.http.get<Patient>(patientUrl + patientId).pipe(
        map((patient: Patient) => {
          this.patient = patient; 
          return this.patient;
        })
      );
      return this.patient$;
    }
  }

}

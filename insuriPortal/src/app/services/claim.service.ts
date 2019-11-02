import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from '../models/Claim';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  PatientID = 1975632;
  configUrl = ' http://hapi.fhir.org/baseDstu3/Claim?_format=json&_pretty=true&patient=Patient/' + this.PatientID;

  constructor(private http: HttpClient) { }

  getData(): Observable<Claim[]> {
    return this.http.get<any>(this.configUrl).pipe(
      map(coverage => coverage.entry)
    );
  }
}

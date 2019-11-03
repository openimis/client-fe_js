import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from '../models/claim';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fhirUrl } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  PatientID = 2615008;
  configUrl = fhirUrl + '/Claim?_format=json&_pretty=true&patient=Patient/' + this.PatientID;

  constructor(private http: HttpClient) { }

  getData(): Observable<Claim[]> {
    return this.http.get<any>(this.configUrl).pipe(
      map(coverage => coverage.entry)
    );
  }
}

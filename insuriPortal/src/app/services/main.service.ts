import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  configUrl = 'assets/service-test.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Test[]> {
    return this.http.get<Test[]>(this.configUrl);
  }
}

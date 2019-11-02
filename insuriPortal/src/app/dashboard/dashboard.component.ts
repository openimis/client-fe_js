import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  patient$: Observable<Patient>;

  constructor(private mainService: MainService,
              private router: Router) { }

  ngOnInit() {

    this.patient$ = this.mainService.getUser();
    
    if (typeof this.patient$ === 'undefined') this.router.navigate(['/login']);

  }

}

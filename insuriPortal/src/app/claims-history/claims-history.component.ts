import { ClaimService } from './../services/claim.service';
import { Component, OnInit } from '@angular/core';
import { Claim } from '../models/claim';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';
import { Patient } from '../models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claims-history',
  templateUrl: './claims-history.component.html',
  styleUrls: ['./claims-history.component.scss']
})
export class ClaimsHistoryComponent implements OnInit {
  myClaimData: Claim[] = [];
  myClaimData$: Observable<Claim[]>;

  patient$: Observable<Patient>;
  patientId: string;

  constructor(private claimService: ClaimService,
              private mainService: MainService,
              private router: Router) { }

  ngOnInit() {
    this.patient$ = this.mainService.getUser();
    this.patientId = this.mainService.getUserId();

    this.myClaimData$ = this.claimService.getData(this.patientId);

    if (typeof this.patient$ === 'undefined') this.router.navigate(['/login']);

  }


}

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

  constructor(private claimService: ClaimService,
              private mainService: MainService,
              private router: Router) { }

  ngOnInit() {
    this.myClaimData$ = this.claimService.getData();

    this.patient$ = this.mainService.getUser();
    if (typeof this.patient$ === 'undefined') this.router.navigate(['/login']);

  }


}

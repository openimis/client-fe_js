import { ClaimService } from './../services/claim.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-drugs-history',
  templateUrl: './drugs-history.component.html',
  styleUrls: ['./drugs-history.component.scss']
})
export class DrugsHistoryComponent implements OnInit {

  myClaimData$: Observable<Claim[]>;
  patientId: string;

  constructor(private claimService: ClaimService,
              private mainService: MainService,
              private router: Router) { }

  ngOnInit() {
    this.patientId = this.mainService.getUserId();
    if (typeof this.patientId === 'undefined') this.router.navigate(['/login']);

    this.myClaimData$ = this.claimService.getData(this.patientId);  
  }

}

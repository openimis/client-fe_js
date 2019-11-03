import { ClaimService } from './../services/claim.service';
import { Component, OnInit } from '@angular/core';
import { Claim } from '../models/Claim';
import { Observable } from 'rxjs';
import {dateFormat} from '../global';

@Component({
  selector: 'app-claims-history',
  templateUrl: './claims-history.component.html',
  styleUrls: ['./claims-history.component.scss']
})
export class ClaimsHistoryComponent implements OnInit {
  myClaimData: Claim[] = [];
  myClaimData$: Observable<Claim[]>;

  constructor(private ClaimService: ClaimService) { }

  ngOnInit() {
    this.myClaimData$ = this.ClaimService.getData();
  }


}

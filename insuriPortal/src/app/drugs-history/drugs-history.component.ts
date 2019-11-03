import { ClaimService } from './../services/claim.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';


@Component({
  selector: 'app-drugs-history',
  templateUrl: './drugs-history.component.html',
  styleUrls: ['./drugs-history.component.scss']
})
export class DrugsHistoryComponent implements OnInit {

  myClaimData$: Observable<Claim[]>;

  constructor(private ClaimService: ClaimService) { }

  ngOnInit() {
    this.myClaimData$ = this.ClaimService.getData();
  }

}

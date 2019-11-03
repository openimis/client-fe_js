import { ClaimService } from './../services/claim.service';
import { Component, OnInit } from '@angular/core';
import { Claim } from '../models/Claim';
import { Observable } from 'rxjs';
import {dateFormat} from '../global';
@Component({
  selector: 'app-drugs-history',
  templateUrl: './drugs-history.component.html',
  styleUrls: ['./drugs-history.component.scss']
})
export class DrugsHistoryComponent implements OnInit {

  constructor(private ClaimService: ClaimService) { }

  ngOnInit() {
    this.myClaimData$ = this.ClaimService.getData();
  }

}

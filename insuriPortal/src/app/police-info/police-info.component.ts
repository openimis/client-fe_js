import { CoverageService } from './../services/coverage.service';
import { Component, OnInit } from '@angular/core';
import { Coverage } from '../models/coverage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-police-info',
  templateUrl: './police-info.component.html',
  styleUrls: ['./police-info.component.scss']
})
export class PoliceInfoComponent implements OnInit {

  myCoverageData: Coverage[] = [];
  myCoverageData$: Observable<Coverage[]>;

  constructor(private CoverageService: CoverageService) { }

  ngOnInit() {
    this.myCoverageData$ = this.CoverageService.getData();
  }

}

import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-police-info',
  templateUrl: './police-info.component.html',
  styleUrls: ['./police-info.component.scss']
})
export class PoliceInfoComponent implements OnInit {

  myTestData: Test[] = [];
  myTestData$: Observable<Test[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getData().subscribe((data: Test[]) => {
      console.log(data);
      var someData: Test;
      data.map((aSet: Test) => {
        someData = {
          id: aSet['id'],
          name:  aSet['name'],
          description:  aSet['description']
        }
        this.myTestData.push(someData)

      })
      console.log(this.myTestData);
    });

    this.myTestData$ = this.mainService.getData();
  }

}

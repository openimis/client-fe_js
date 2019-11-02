import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,
              private mainService: MainService) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.mainService.getUser(this.form.controls['username'].value).subscribe(x => {
        this.router.navigate(['/in']);
      });
    }
  }
}

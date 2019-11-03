import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './app.angular.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoliceInfoComponent } from './police-info/police-info.component';
import { ClaimsHistoryComponent } from './claims-history/claims-history.component';
import { DrugsHistoryComponent } from './drugs-history/drugs-history.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FhirInterceptor } from './auth/http.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      WelcomeComponent,
      LoginComponent,
      DashboardComponent,
      PoliceInfoComponent,
      ClaimsHistoryComponent,
      DrugsHistoryComponent,
      TopMenuComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      MaterialModule,
      FormsModule,
      BrowserAnimationsModule
   ],
   providers: [
      // {
      //    provide: HTTP_INTERCEPTORS,
      //    useClass: FhirInterceptor,
      //    multi: true
      //  }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

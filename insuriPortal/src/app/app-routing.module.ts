import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoliceInfoComponent } from './police-info/police-info.component';
import { ClaimsHistoryComponent } from './claims-history/claims-history.component';
import { DrugsHistoryComponent } from './drugs-history/drugs-history.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'in', redirectTo: 'in/dashboard', pathMatch: 'full' },
  { path: 'in/dashboard', component: DashboardComponent },
  { path: 'in/police-info', component: PoliceInfoComponent },
  { path: 'in/claims-history', component: ClaimsHistoryComponent },
  { path: 'in/drugs-history', component: DrugsHistoryComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

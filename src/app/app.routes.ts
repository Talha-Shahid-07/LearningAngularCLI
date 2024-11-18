import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'signupPage', component: SignupPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
];

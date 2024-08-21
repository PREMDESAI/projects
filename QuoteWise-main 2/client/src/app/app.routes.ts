import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { authGuard } from './auth.guard';
import { ViewQuoteComponent } from './components/view-quote/view-quote.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { isauthorGuard } from './isauthor.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'view-profile/:id/edit',
    component: EditProfileComponent,
    canActivate: [isauthorGuard],
  },
  {
    path: 'view-profile/:id/change-password',
    component: ChangePasswordComponent,
    canActivate: [isauthorGuard],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: 'about-us', component: AboutusComponent },
  {
    path: 'view-profile/:id',
    component: ViewProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'create-quote',
    component: CreateQuoteComponent,
    canActivate: [authGuard],
  },
  { path: 'about', component: AboutusComponent },
  {
    path: 'quotes/:id',
    component: ViewQuoteComponent,
    canActivate: [authGuard],
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'not-found' },
];

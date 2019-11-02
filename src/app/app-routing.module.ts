import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegFormComponent } from './testForm/reg-form/reg-form.component';
import { RegFormCodeComponent } from './testForm/reg-form-code/reg-form-code.component';
import { LoginFormComponent } from './testForm/login-form/login-form.component'
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './main-page/contact/contact.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'reg', component: RegFormComponent},
  {path: 'regCode', component: RegFormCodeComponent},
  {path: 'mainPage', component: MainPageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'messenger', component: MessengerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginFormComponent, RegFormComponent, RegFormCodeComponent,
   MainPageComponent, NavBarComponent, SearchComponent,
   MessengerComponent, ProfileComponent, ContactComponent];

import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { WikispacePageComponent } from './wikispace-page/wikispace-page.component';
import { WikiEditPageComponent } from './wiki-edit-page/wiki-edit-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'wiki/:wiki_id', component: WikispacePageComponent },
  { path: 'wiki/:wiki_id/w/:wiki_page_id', component: WikiEditPageComponent }
];

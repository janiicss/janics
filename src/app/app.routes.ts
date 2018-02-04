import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UserComponent } from './components/user/user.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'adduser', component: AdduserComponent }
];

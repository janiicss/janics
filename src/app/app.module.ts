import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AdduserComponent } from './components/adduser/adduser.component';




import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    FooterComponent,
    HomeComponent,
    AdduserComponent
  ],
  entryComponents: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}

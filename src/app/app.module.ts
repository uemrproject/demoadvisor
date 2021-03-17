import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackbarModule } from 'ngx-snackbar';
import { environment } from "./../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, SignupComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommonModule,
   // AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    SnackbarModule.forRoot(),
    FormsModule,
    // FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

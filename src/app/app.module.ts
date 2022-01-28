import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { BillsComponent } from './components/bills/bills.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FooterComponent,
    CreditCardsComponent,
    BillsComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

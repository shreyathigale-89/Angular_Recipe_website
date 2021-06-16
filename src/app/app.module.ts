import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItalianComponent } from './italian/italian.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { TeaComponent } from './tea/tea.component';
import { SoupComponent } from './soup/soup.component';
import { SaladComponent } from './salad/salad.component';
import { PancakeComponent } from './pancake/pancake.component'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { UserComponent } from './user/user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ChineseComponent,
    IndianComponent,
    ItalianComponent,
    DessertsComponent,
    DrinksComponent,
    TeaComponent,
    SoupComponent,
    SaladComponent,
    PancakeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IvyCarouselModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

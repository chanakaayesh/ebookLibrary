import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RatingStarComponent } from './rating-star/rating-star.component';
@NgModule({
  declarations: [

    AppComponent,
    BookDetailsComponent,
    HomeComponent,
    RatingStarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
  
    FormsModule   ,
    HttpClientModule,
    MatGridListModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

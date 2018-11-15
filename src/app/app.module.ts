import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewListComponent } from './new-list/new-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyComponent } from './survey/survey.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NewsService } from './service/news.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewListComponent,
    SurveyComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

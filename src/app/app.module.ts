import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DatesComponent } from './components/dates/dates.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DatesComponent, MoviesComponent, RestaurantsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

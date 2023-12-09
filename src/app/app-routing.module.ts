import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: '', redirectTo: '/dates', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

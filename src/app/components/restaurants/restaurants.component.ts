import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent {
  place = '';

  handlePlaceChange() {
    console.log(this.place);
  }
}

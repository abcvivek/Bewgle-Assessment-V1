import { Component, OnInit } from '@angular/core';
import RestaurantsData from '../../Restaurants.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Restaurants = RestaurantsData;
}

console.log(RestaurantsData);

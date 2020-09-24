import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import RestaurantsData from '../../Restaurants.json';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  Restaurant;
  Rating;
  RatingReceived = false;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Restaurant = RestaurantsData[+params.get('RestaurantId')];
      this.Rating = this.Restaurant.review_rating["avg-rating"];
    });
  }

  counter() {
    return new Array(Math.ceil(this.Rating));
  }

  onRate($event:{newValue:number, starRating:StarRatingComponent}) {
      this.Restaurant.review_rating["votes"][5-$event.newValue].votes++;
      this.RatingReceived = true;
  }

}

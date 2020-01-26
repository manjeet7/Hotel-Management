import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipe: Recipe[] = [
  new Recipe('chicken','Boiled with veggies','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  new Recipe('Pizza', 'Fresh mozirilla pizza','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/800px-Supreme_pizza.jpg'),
  new Recipe('Fried Chicken', 'Crispy and Spicy fresh chicken','https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
]
  constructor() { }

  ngOnInit() {
  }

}

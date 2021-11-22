import { Component, OnInit } from '@angular/core';
import {ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Ingredients();
  }

  Ingredients()
  {
    let ingredients: ingredient[] = [];

    ingredients.push({
      name: 'Apple',
      amount: 5
    });

    ingredients.push({
      name: 'Banana',
      amount: 10
    });

    ingredients.push({
      name: 'Apricot',
      amount: 7
    });

    return ingredients;
  }
}

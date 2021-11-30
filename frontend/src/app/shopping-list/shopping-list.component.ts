import { Component, OnInit } from '@angular/core';
import { IngredientModel } from "../Models/ingredient/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.Ingredients();
  }

  Ingredients()
  {
    this.ingredients.push({
      name: 'Apple',
      amount: 5
    });

    this.ingredients.push({
      name: 'Banana',
      amount: 10
    });

    this.ingredients.push({
      name: 'Apricot',
      amount: 7
    });

    return this.ingredients;
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}

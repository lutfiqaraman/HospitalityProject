import { Component, OnInit } from '@angular/core';
import { IngredientModel } from "../Models/ingredient/ingredient.model";
import {ingredient} from "../shared/ingredient.model";

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
    this.ingredients = [
      new IngredientModel('Apple', 5),
      new IngredientModel('Banana', 10),
      new IngredientModel('Apricot', 7)
    ];

    return this.ingredients;
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}

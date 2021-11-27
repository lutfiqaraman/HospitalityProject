import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from "../../Models/recipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedByUser = new EventEmitter<RecipeModel>()

  constructor() { }

  ngOnInit(): void {
    this.ListOfRecipes();
  }

  ListOfRecipes() {
    let recipes: RecipeModel[] = [];

    recipes.push({
        name: 'Beef Recipe',
        description: 'A recipe of beef',
        imagePath: 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    });

    recipes.push({
      name: 'Chicken Recipe',
      description: 'A recipe of chicken',
      imagePath: 'https://cdn.pixabay.com/photo/2018/06/01/20/25/chicken-3447081_1280.jpg'
    });

    recipes.push({
      name: 'Salad Recipe',
      description: 'A recipe of salad',
      imagePath: 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg'
    });

    return recipes;
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeSelectedByUser.emit(recipe);
  }
}

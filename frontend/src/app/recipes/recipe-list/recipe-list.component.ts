import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from "../../Models/recipe/recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedByUser = new EventEmitter<RecipeModel>()
  recipes: RecipeModel[];

  constructor(private recipeSrv: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeSrv.getRecipes();
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeSelectedByUser.emit(recipe);
  }
}

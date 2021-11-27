import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../Models/recipe/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

}

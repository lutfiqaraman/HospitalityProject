import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../../Models/recipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  lstRecipe: RecipeModel[] = [
    new RecipeModel(
      'Test Recipe',
      'A test recipe to be displayed',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

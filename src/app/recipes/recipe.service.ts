import { EventEmitter } from '@angular/core'

import { Recipe } from './recipe.model'

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>()

	private recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg'),
    new Recipe('A Test recipe 1', 'This is simply a test 1', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg')
  ];

  getRecipes() {
	  // return a copy of the array
	  return this.recipes.slice();
  }
}

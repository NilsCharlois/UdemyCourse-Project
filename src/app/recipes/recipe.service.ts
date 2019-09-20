import { Injectable } from '@angular/core'

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
	private recipes: Recipe[] = [
    new Recipe('Custard King',
'https://e-liquid-recipes.com/recipe/202670/Custard%20King',
'https://images-na.ssl-images-amazon.com/images/I/81R44Q7bxWL._SL1500_.jpg',
[
new Ingredient('PG dilutant', 0.56),
new Ingredient('VG dilutant', 6.69),
new Ingredient('Nicotine juice 48 mg (75/25 PG/VG)', 1.25),
new Ingredient('RY4 Double (TPA)', 0.80),
new Ingredient('Sweet Cream (TPA)', 0.30),
new Ingredient('Vanilla Swirl (TPA)', 0.40)
]
),
    new Recipe('Strawberry fog',
'https://e-liquid-recipes.com/recipe/226322/strawberry%20fog',
'https://images-na.ssl-images-amazon.com/images/I/81R44Q7bxWL._SL1500_.jpg',
[
new Ingredient('VG dilutant', 5.04),
new Ingredient('Nicotine juice 36 mg (100% VG)', 44.00),
new Ingredient('Bavarian Cream (TPA)', 1.80),
new Ingredient('Cheesecake (Graham Crust) (TPA)', 3.0),
new Ingredient('Strawberry (Ripe) (TPA)', 6.00),
new Ingredient(' Vanilla Custard (TPA)', 1.20)
])
  ];

  /**
   *
   */
  constructor(private shoppingListService: ShoppingListService) {
        
  }

  getRecipes() {
	  // return a copy of the array
	  return this.recipes.slice();
  }

  getRecipe(index:number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

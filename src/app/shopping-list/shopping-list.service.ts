import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';


export class ShoppingListService {

	ingredientsChanged = new Subject<Ingredient[]>()

	private ingredients: Ingredient[] = [
		new Ingredient('Bavarian Cream (TPA)', 1.80),
		new Ingredient('Cheesecake (Graham Crust) (TPA)', 3.00),
		new Ingredient('Cheesecake (Graham Crust) (TPA)', 3.00),
		new Ingredient('Strawberry (Ripe) (TPA)', 6.00),
		new Ingredient('Vanilla Custard (TPA)', 1.20),
	];

	getIngredients() {
		return this.ingredients.slice()
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient)
		this.ingredientsChanged.next(this.ingredients.slice())
	}

	addIngredients(ingredients: Ingredient[]) {
		console.log("Pushing ingredients to shopping list")
		this.ingredients.push(...ingredients)
		this.ingredientsChanged.next(this.ingredients.slice())
	}
}

import { Recipe } from "./recipe";
import { Ingredient } from "./ingredient";
import { RecipeDataRetriever } from "./recipeDataRetriever";
import { StaticRecipeDataRetriever } from "./staticRecipeDataRetriever";

export class MealService {
  private _recipe: Recipe;
  private _dataRetriever: RecipeDataRetriever;

  constructor() {
    this._dataRetriever = new StaticRecipeDataRetriever();
  }

  loadRecipe(): void {
    const temp = this._dataRetriever.retrieve().recipe;
    // const temp = data.recipe;

    this._recipe = new Recipe();
    this._recipe.currency = temp.currency;
    this._recipe.name = temp.name;
    this._recipe.ingredients = new Array<Ingredient>();

    temp.ingredients.forEach(function (i) {
      var ingredient = new Ingredient();
      ingredient.brand = i.brand;
      ingredient.items = i.items;
      ingredient.price = i.price;
      ingredient.product = i.product;
      ingredient.quantity = i.quantity;
      this._recipe.ingredients.push(ingredient);
    }, this);
  }

  get recipe(): Recipe {
    return this._recipe;
  }
}
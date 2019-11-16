import { Recipe } from "./recipe";
import { Ingredient } from "./ingredient";
import { RecipeDataRetriever } from "./recipeDataRetriever";
import { StaticRecipeDataRetriever } from "./staticRecipeDataRetriever";

export class MealService {
  private _recipe: Recipe;
  private _dataRetriever: RecipeDataRetriever;

  constructor(recipeDataRetriever : RecipeDataRetriever) {
    this._dataRetriever = recipeDataRetriever || new StaticRecipeDataRetriever();
  }

  loadRecipe(): void {
    const recipeData = this._dataRetriever.retrieve().recipe;

    this._recipe = new Recipe();
    this._recipe.currency = recipeData.currency;
    this._recipe.name = recipeData.name;
    this._recipe.ingredients = new Array<Ingredient>();

    recipeData.ingredients.forEach(function (i) {
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
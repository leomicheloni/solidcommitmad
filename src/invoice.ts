import { Recipe } from "./recipe";

export class Invoice {
    private _recipe = new Recipe();

    set recipe(recipe : Recipe){
        this._recipe = recipe;
    }

    total(): number {
        return this._recipe.totalPrice + this.shipping;
    }


    shipping: number;
}
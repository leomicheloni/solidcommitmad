import { Recipe } from "./recipe";

export class Invoice {
    private _recipe : Recipe;
    private _shippingCost: number;

    constructor(recipe : Recipe, shippingCost: number) {
        this._recipe = recipe;
        this._shippingCost = shippingCost;        
    }

    get subTotal(): number{
        return this._recipe.totalPrice;
    }

    get total(): number {
        if(this._recipe.ingredients.filter((i)=>i.selected).length === 0) return 0;
        return this._recipe.totalPrice + this._shippingCost;
    }
}
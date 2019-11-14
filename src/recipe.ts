import { Ingredient } from "./ingredient";

export class Recipe {
    addIngredient(ingredient: Ingredient) {
        if(this.ingredients === undefined) this.ingredients = new Array<Ingredient>();
        this.ingredients.push(ingredient);
    }
    currency: string; 
    name : string;
    ingredients : Array<Ingredient>;

    get totalPrice(): number {
        if(this.ingredients === undefined) return 0;
        let total: number = 0;
        this.ingredients.forEach((ingredient)=>{
            total+=(ingredient.items * ingredient.price);
        });

        return total;
    }

}
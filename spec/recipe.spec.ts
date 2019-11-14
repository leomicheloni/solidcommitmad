import { Recipe } from "../src/recipe";
import { Ingredient } from "../src/ingredient";

describe("recipe behavior", function(){
    it("should calculate total correctly", function(){
        var a = new Recipe();
        let ingredient = new Ingredient();
        ingredient.items = 1;
        ingredient.price = 26.0;
        
        a.addIngredient(ingredient);
        expect(a.totalPrice).toBe(26);
    })

    it("total should be zero if not ingredients added", function(){
        var a = new Recipe();

        expect(a.totalPrice).toBe(0);
    })

});
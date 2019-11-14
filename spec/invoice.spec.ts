import { Invoice } from "../src/invoice";
import { Recipe } from "../src/recipe";
import { Ingredient } from "../src/ingredient";


describe("invoice behavior", function(){
    it("should consider shipping cost in total", function(){
        var a = new Invoice();
        a.shipping = 7;
        let recipe = new Recipe();
        let ingredient =new Ingredient();
        ingredient.price = 7;
        ingredient.items = 3;
        recipe.addIngredient( ingredient);
        a.recipe = recipe;


        expect(a.total()).toBe(28);
    })
});
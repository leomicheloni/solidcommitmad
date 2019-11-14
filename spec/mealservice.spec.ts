import { MealService } from "../src/mealservice";

describe("meal service behaviour", function(){
    it("should load ingredients", function(){
        var a = new MealService();
        a.loadRecipe();
        expect(a.recipe).not.toBeNull();
        expect(a.recipe.ingredients.length).toBe(7);
    })
});
import { MealService } from "./mealservice";
import { Recipe } from "./recipe";
import { Invoice } from "./invoice";

export class App {

    constructor(private mealService: MealService, private recipe: Recipe, private invoice: Invoice) { }

    bindEvents(){
        
    }
}
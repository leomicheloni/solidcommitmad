import { MealService } from "./mealservice";
import { Invoice } from "./invoice";
import { RecipeDataRetriever } from "./recipeDataRetriever";
import { StaticRecipeDataRetriever } from "./staticRecipeDataRetriever";
import { Ingredient } from "./ingredient";

export class App {

    $title = document.querySelector(".header__title");
    $articles = document.querySelectorAll(".main__article--description--title");
    $currency = document.getElementsByTagName("span");
    $brands = document.querySelectorAll(".main__article--description--brand");
    $quantities = document.querySelectorAll(".main__article--description--weight");
    $prices = document.querySelectorAll(".main__articule--description--price");
    $itemsInput = document.querySelectorAll(".items__input");
    $subtotal = document.querySelector(".footer__subtotal--number");
    $total = document.querySelector(".footer__total--number");
    $shippingCosts = document.querySelector(".footer__shippingcosts--number");
    $totalBtn = document.querySelector(".footer__btn--span");
    $totalItems = document.querySelector(".footer__items--number");
    $selectAll = document.querySelector(".header__select--link");
    $deselectAll = document.querySelector(".header__deselect--link");

    private invoice: Invoice;
    private mealService: MealService;

    constructor() {
        const recipeDataRetriever: RecipeDataRetriever = new StaticRecipeDataRetriever();
        this.mealService = new MealService(recipeDataRetriever);
    }

    start() {
        this.mealService.loadRecipe(); // make this a promise

        const $rowTemplate = document.querySelector("#row_template tr");
        const $table = document.querySelector("#tableBody");
        this.mealService.recipe.ingredients.forEach((ingredient) => {
            const $newRow = (<HTMLElement>$rowTemplate.cloneNode(true));
            $newRow.classList.add("my_row");
            (<HTMLInputElement>$newRow.querySelector("input[type=checkbox]")).checked = false;
            (<HTMLInputElement>$newRow.querySelector("input[type=number]")).value = ingredient.items.toString();
            (<HTMLElement>$newRow.querySelector(".main__articule--description--price")).innerHTML = ingredient.price.toString();
            (<HTMLElement>$newRow.querySelector(".main__article--id")).innerHTML = ingredient.id.toString();

            $table.appendChild($newRow);
        });

        this.invoice = new Invoice(this.mealService.recipe, 7);

        this.updateValues();
        this.bindEvents();
    }

    updateValues() {
        document.querySelectorAll(".my_row").forEach((row) => {
            const $checked = (<HTMLInputElement>row.querySelector("input[type=checkbox]"));
            const $quantity = (<HTMLInputElement>row.querySelector(".items__input"));
            const $price = row.querySelector(".main__articule--description--price");
            const $ingredientId = row.querySelector(".main__article--id");

            let price = parseFloat($price.innerHTML);
            let quantity = parseInt($quantity.value);
            let selected = $checked.checked;


            const currentItem: Ingredient = this.mealService.recipe.ingredients.find((ingredient: Ingredient) => {
                return ingredient.id === parseInt($ingredientId.innerHTML);
            });

            if (currentItem !== undefined) {
                currentItem.items = parseInt($quantity.value);
                currentItem.selected = selected;
                currentItem.price = price;
                currentItem.quantity = quantity.toString();
            }
        })

        this.$subtotal.innerHTML = this.invoice.subTotal.toFixed(2);
        this.$shippingCosts.innerHTML = this.invoice.total.toFixed(2);
        this.$totalBtn.innerHTML = this.invoice.total.toFixed(2)
    }

    bindEvents() {
        function updateSelectorValues(newValue: boolean) {
            document.querySelectorAll(".my_row input[type=checkbox]").forEach((el) => (<HTMLInputElement>el).checked = newValue);
        }

        function selectAll() {
            updateSelectorValues(true);
        }

        function deSelectAll() {
            updateSelectorValues(false);
        }

        document.querySelectorAll(".my_row").forEach((el) => {
            el.addEventListener("change", (ev) => {
                this.updateValues();
            });
        })

        this.$deselectAll.addEventListener("click", (ev) => {
            ev.preventDefault();
            deSelectAll();
            this.updateValues();
        });

        this.$selectAll.addEventListener("click", (ev) => {
            ev.preventDefault();
            selectAll();
            this.updateValues();
        });

    }
}
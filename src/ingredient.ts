export class Ingredient {
    id: number;
    product: string;
    brand: string;
    items: number;
    quantity: string;
    price: number;
    selected: boolean;

    total(): number {
        return this.items * this.price;
    }
}
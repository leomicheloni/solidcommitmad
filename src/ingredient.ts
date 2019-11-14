export class Ingredient {
    product: string;
    brand: string;
    items: number;
    quantity: string;
    price: number;
    
    
    total(): number {
        return this.items * this.price;
    }
}
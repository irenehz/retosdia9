import { Mobile } from "./mobile";

export class mobileCollection {
    private mobiles: Mobile[];
    private totalPrice: number;
    constructor(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public getMobiles() {
        return this.mobiles;
    }
    public getTotalPrice() {
        return this.totalPrice;
    }
    public setMobiles(nuevoMobiles) {
        this.mobiles = nuevoMobiles;
    }
    private totalPriceCalculation() {
        let total = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            const mobile = this.mobiles[i];
            total += mobile.getPrice();
        }
        return total
    }
    public printCollection() {
        console.log("This is all my mobiles:")
        for (let i = 0; i < this.mobiles.length; i++) {
            const mobile = this.mobiles[i];
            console.log(mobile.caracteristicas());
        }
        console.log("Price overall: " + this.totalPrice)
    }
} 
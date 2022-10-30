export class Mobile {
    private name;
    private trademark;
    private model;
    private color;
    private price;

    constructor(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    public getName() {
        return this.name;
    }
    public setName(nuevoname) {
        this.name = nuevoname;
    }


    public getTrademark() {
        return this.trademark;
    }
    public setTrademark(nuevotrademark) {
        this.trademark = nuevotrademark;
    }


    public getModel() {
        return this.model;
    }
    public setModel(nuevomodel) {
        this.model = nuevomodel;
    }


    public getColor() {
        return this.color;
    }
    public setColor(nuevocolor) {
        this.color = nuevocolor;
    }


    public getPrice() {
        return this.price;
    }
    public setPrice(nuevoprice) {
        this.price = nuevoprice;
    }

    public caracteristicas(){
        return `The characteristics of the mobile name are:
         • Name: ${this.name}
         • Trademark: ${this.trademark}
         • model: ${this.model}
         • Color: ${this.color}
         • Price: ${this.price}`;
    }
} 
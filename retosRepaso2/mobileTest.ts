import { mobile } from "./mobile";

let myMobile = new mobile('name', 'trademark', 'model', 'color', 'price')
let myMobile2 = new mobile('name', 'trademark', 'model', 'color', 'price')
let myMobile3 = new mobile('name', 'trademark', 'model', 'color', 'price')

console.log(myMobile.getName())
console.log(myMobile.getTrademark())
console.log(myMobile.getModel())
console.log(myMobile.getColor())
console.log(myMobile.getPrice())

myMobile.setName("11")
myMobile.setTrademark("iphone")
myMobile.setModel("pro")
myMobile.setColor("blanco")
myMobile.setPrice(800)

console.log(myMobile.getName())
console.log(myMobile.getTrademark())
console.log(myMobile.getModel())
console.log(myMobile.getColor())
console.log(myMobile.getPrice())

console.log(myMobile.caracteristicas())

let myMobiles = [myMobile, myMobile2, myMobile3]
myMobiles.forEach(mobile => {
    console.log(mobile.caracteristicas())
});
import { mobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";


let myMobile = new Mobile('13', 'iPhone', 'x pro max ultra', 'blue', 150)
let myMobile2 = new Mobile('pco', 'xiaomi', 'mega ultra pro', 'red', 50)
let myMobile3 = new Mobile('13', 'xiaomi', 'mega ultra pro', 'green', 100)
let myMobile4 = new Mobile('pco', 'iPhone', 'x pro max ultra', 'black', 200)


let myMobiles = [myMobile, myMobile2, myMobile3, myMobile4]


let myCollection = new mobileCollection(myMobiles);

console.log(myCollection.getMobiles())
myCollection.setMobiles([myMobile, myMobile2])
console.log(myCollection.getMobiles())


console.log(myCollection.getTotalPrice())
myCollection.printCollection()

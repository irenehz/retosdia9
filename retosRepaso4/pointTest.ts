import { Point } from "./point";

let test = new Point(5, 10)

console.log(test.getX());
console.log(test.getY());

test.setX(55);
test.setY(100);

console.log(test.getX());
console.log(test.getY());

console.log(test.toString());


test.setX(0);
test.setY(100);
console.log(test.distanceToOrigin())
console.log(test.calculateDistance({x:0,y:0}))
test.setX(100);
test.setY(0);
console.log(test.distanceToOrigin())
console.log(test.calculateDistance({x:0,y:0}))


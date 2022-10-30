export class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX() {
        return this.x;
    }
    public getY() {
        return this.y;
    }

    public setX(nuevaX) {
        this.x = nuevaX;
    }
    public setY(nuevaY) {
        this.y = nuevaY;
    }

    public toString() {
        return "(" + this.x + "," + this.y + ")";
    }

    public distanceToOrigin() {
        const co = this.x * this.x;
        const ca = this.y * this.y;

        return Math.sqrt(co + ca);
    }
    public calculateDistance(anotherPoint) {

        const co = this.x * this.x - (anotherPoint.x * anotherPoint.x);
        const ca = this.y * this.y - (anotherPoint.y * anotherPoint.y);

        return Math.sqrt(co + ca);
    }
}
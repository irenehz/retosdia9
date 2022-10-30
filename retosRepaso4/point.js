"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function (nuevaX) {
        this.x = nuevaX;
    };
    Point.prototype.setY = function (nuevaY) {
        this.y = nuevaY;
    };
    Point.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Point.prototype.distanceToOrigin = function () {
        var co = this.x * this.x;
        var ca = this.y * this.y;
        return Math.sqrt(co + ca);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var co = this.x * this.x - (anotherPoint.x * anotherPoint.x);
        var ca = this.y * this.y - (anotherPoint.y * anotherPoint.y);
        return Math.sqrt(co + ca);
    };
    return Point;
}());
exports.Point = Point;

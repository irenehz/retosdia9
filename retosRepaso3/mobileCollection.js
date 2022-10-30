"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobileCollection = void 0;
var mobileCollection = /** @class */ (function () {
    function mobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    mobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    mobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    mobileCollection.prototype.setMobiles = function (nuevoMobiles) {
        this.mobiles = nuevoMobiles;
    };
    mobileCollection.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            var mobile = this.mobiles[i];
            total += mobile.getPrice();
        }
        return total;
    };
    mobileCollection.prototype.printCollection = function () {
        console.log("This is all my mobiles:");
        for (var i = 0; i < this.mobiles.length; i++) {
            var mobile = this.mobiles[i];
            console.log(mobile.caracteristicas());
        }
        console.log("Price overall: " + this.totalPrice);
    };
    return mobileCollection;
}());
exports.mobileCollection = mobileCollection;

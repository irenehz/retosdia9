"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (nuevoname) {
        this.name = nuevoname;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (nuevotrademark) {
        this.trademark = nuevotrademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (nuevomodel) {
        this.model = nuevomodel;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (nuevocolor) {
        this.color = nuevocolor;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (nuevoprice) {
        this.price = nuevoprice;
    };
    Mobile.prototype.caracteristicas = function () {
        return "The characteristics of the mobile name are:\n         \u2022 Name: ".concat(this.name, "\n         \u2022 Trademark: ").concat(this.trademark, "\n         \u2022 model: ").concat(this.model, "\n         \u2022 Color: ").concat(this.color, "\n         \u2022 Price: ").concat(this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;

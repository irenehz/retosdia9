"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobile = void 0;
var mobile = /** @class */ (function () {
    function mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    mobile.prototype.getName = function () {
        return this.name;
    };
    mobile.prototype.setName = function (nuevoname) {
        this.name = nuevoname;
    };
    mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    mobile.prototype.setTrademark = function (nuevotrademark) {
        this.trademark = nuevotrademark;
    };
    mobile.prototype.getModel = function () {
        return this.model;
    };
    mobile.prototype.setModel = function (nuevomodel) {
        this.model = nuevomodel;
    };
    mobile.prototype.getColor = function () {
        return this.color;
    };
    mobile.prototype.setColor = function (nuevocolor) {
        this.color = nuevocolor;
    };
    mobile.prototype.getPrice = function () {
        return this.price;
    };
    mobile.prototype.setPrice = function (nuevoprice) {
        this.price = nuevoprice;
    };
    mobile.prototype.caracteristicas = function () {
        return "The characteristics of the mobile name are:\n         \u2022 Name: ".concat(this.name, "\n         \u2022 Trademark: ").concat(this.trademark, "\n         \u2022 model: ").concat(this.model, "\n         \u2022 Color: ").concat(this.color, "\n         \u2022 Price: ").concat(this.price);
    };
    return mobile;
}());
exports.mobile = mobile;

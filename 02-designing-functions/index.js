"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
node_fetch_1.default("http://dummy.restapiexample.com/api/v1/employees")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    console.log(data);
});

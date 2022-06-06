const tail = require("../tail");
const assertEqual = require("../assertEqual")

assertEqual(tail([1,2,3,4,5]), 5)
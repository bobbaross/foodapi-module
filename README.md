foodapi
----------
replaces the website, turning it into a npm wrapper. makes it easier for me.

Insatlling/Requiring
--------------------
```npm install foodapi```
Then, inside of your code requiring it is as simple as any other package.
```const foodapi = require("foodapi");```
or
```import foodapi from "foodapi";```
 
Usage/Examples
-----
This can be repurposed to fit your needs.
```
const foodapi = require("foodapi");
let toastImage = foodapi.getImage('toast');
let toastFact = foodapi.getFact('toast');
console.log(`Fact: ${toastFact}, Image Link: ${toastImage}`);
```
Use one of the possible foods. This can easily be checked:
```
const foodapi = require("foodapi");
let possibleFoods = foodapi.foodList();
console.log(possibleFoods)
```
Get a random food and then use it:
```
const foodapi = require("foodapi");
let randomFood = foodapi.randomFood()
let randomFact = foodapi.getFact(randomFood) 
let randomImg = foodapi.getImage(randomFood)
console.log(`{RandomFact}, ${RandomImg}`)
// Also possible in one line: console.log(`${require("foodapi").getFact(require("foodapi").randomFood())},${require("foodapi").getFact(require("foodapi").randomFood())}`)
``` 
Contact
----------
Please contact me on discord if you'd like data to be entered.

[![Follow me on GitHub](https://img.shields.io/github/followers/bobbaross?style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross)
[![Star on GitHub](https://img.shields.io/github/stars/bobbaross/foodapi-module?style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross/foodapi-module)
[![Fork on GitHub](https://img.shields.io/github/forks/bobbaross/foodapi-module?style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross/foodapi-module/fork)
[![Watch on GitHub](https://img.shields.io/github/watchers/bobbaross/foodapi-module?label=Watch&style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross/foodapi-module/subscription)


[![Follow on Twitter](https://img.shields.io/twitter/follow/CoolKidMalachi?label=Follow&style=for-the-badge&logo=Twitter&color=1DA1F2)](https://twitter.com/intent/follow?creen_name=CoolKidMalachi)
[![Join the Discord](https://img.shields.io/badge/Discord-7289DA?label=Chat&style=for-the-badge&logo=Discord&color=7289DA)](https://minecraft.sexy/crucify)
[![NPM Package](https://img.shields.io/badge/Node-CB3837?label=Get%20The%20Package&style=for-the-badge&logo=NPM&color=CB3837)](https://www.npmjs.com/package/foodapi)
[![Youtube](https://img.shields.io/badge/Youtube-FF0000?label=Subscribe&style=for-the-badge&logo=Youtube&color=FF0000)](https://youtube.com/c/perfectibility)

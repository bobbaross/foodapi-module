foodapi
----------
replaces the website, turning it into a npm wrapper. makes it easier for me.

Insatlling/Requiring
--------------------
```
npm install foodapi
```
Then, inside of your code requiring it is as simple as any other package.
```
const foodapi = require("foodapi");
```
or
```
import foodapi from "foodapi";
```
 
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
let randomFood = foodapi.randomFood();
let randomFact = foodapi.getFact(randomFood);
let randomImg = foodapi.getImage(randomFood);
console.log(`{RandomFact}, ${RandomImg}`);
// Also possible in one line: console.log(`${require("foodapi").getFact(require("foodapi").randomFood())},${require("foodapi").getFact(require("foodapi").randomFood())}`);
``` 
Take user input ("ID"), and get the fact for it:
```
let food = 'toast';
let id = '2';
let type = 'fact';
const foodapi = require("foodapi");
if (!isNan(id) && !foodapi.totalCounts(food, type) < id) {
 let foodChosen = foodapi.specifyInfo(food, type, id);
 return console.log(foodChosen)
} else {
 console.log('Not a valid ID.')
}
```
Return facts and images of toast, every second.
```
const foodapi = require("foodapi");
function toast() {
 console.log(`${foodapi.getFact('toast')}, ${foodapi.getImage('toast')}`)
}
setInterval(toast, 1000);
```
Contact
----------
Please contact me on discord if you'd like data to be entered.
(borboss#7877)

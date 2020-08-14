const toast = require('./data/toast.json')
const cereal = require('./data/cereal.json')
const foodList = ['toast', 'cereal']

exports.foodList = () => {
    return foodList;
}
exports.randomFood = () => {
    return foodList[Math.floor(Math.random() * Object.keys(foodList).length)]
}
exports.getFact = function (food) {
    if (!foodList.includes(food.toString())) {
        return console.warn('Not a valid food.')
    } else {
        let chosenFood
        switch (food) {
            case `toast`: chosenFood = toast; break
            case `cereal`: chosenFood = cereal; break
        }
        let factObj = chosenFood.facts
        return factObj[Math.floor(Math.random() * Object.keys(factObj).length)];
    }
}
exports.getImage = function (food) {
    if (!foodList.includes(food.toString())) {
        return console.warn('Not a valid food.')
    } else {
        let chosenFood
        switch (food) {
            case `toast`: chosenFood = toast; break
            case `cereal`: chosenFood = cereal; break
        }
        let imgObj = chosenFood.images
        return imgObj[Math.floor(Math.random() * Object.keys(imgObj).length)];
    }
}
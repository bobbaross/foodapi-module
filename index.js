const data = require('./data.json')
let foodList = Array.from(Object.keys(data))

exports.foodList = () => {
    return foodList;
}
exports.randomFood = () => {
    return foodList[Math.floor(Math.random() * Object.keys(foodList).length)]
}
exports.getFact = function (food) {
    if (!foodList.includes(food.toString())) {
        return console.error('Food not properly supplied. Usage: foodapi.getFact(food).')
    } else {
        let factObj = data[food].facts
        return factObj[Math.floor(Math.random() * Object.keys(factObj).length)];
    }
}
exports.getImage = function (food) {
    if (!foodList.includes(food.toString())) {
        return console.error('Food not properly supplied. Usage: foodapi.getImage(food).')
    } else {
        let imgObj = data[food].images
        return imgObj[Math.floor(Math.random() * Object.keys(imgObj).length)];
    }
}

exports.totalCounts = function (food, type) {
    let requestType
    switch (type) {
        case type = 'fact':
            requestType = 'facts' 
        break
        case type = 'facts':
            requestType = 'facts' 
        break
        case type = 'image':
            requestType = 'images' 
        break
        case type = 'images':
            requestType = 'images' 
        break
        case type = 'img':
            requestType = 'images' 
        break
    }
   
    if (!foodList.includes(food.toString())) {
        return console.error('Not a valid food.')
    } else if (!requestType === 'facts' || !requestType === 'images') {
        return console.error('Image/Fact not properly supplied. Usage: foodapi.totalCounts(food, type).')
    } else {
        let countObj = Object.keys(data[food][requestType]).length
        return countObj
    }
}

exports.specifyInfo = function (food, type, id) {
    let requestType
    switch (type) {
        case type = 'fact':
            requestType = 'facts' 
        break
        case type = 'facts':
            requestType = 'facts' 
        break
        case type = 'image':
            requestType = 'images' 
        break
        case type = 'images':
            requestType = 'images' 
        break
        case type = 'img':
            requestType = 'images' 
        break
    }
   
    if (!foodList.includes(food.toString())) {
        return console.error('Not a valid food.')
    } else if (!requestType === 'facts' || !requestType === 'images') {
        return console.error('Image/Fact not properly supplied. Usage: foodapi.specifyInfo(food, type, id).')
    } else {
        if (!isNan(id)) {
            if (Object.keys(data[food][requestType]).length < id) {
                return console.error('ID is greater than total facts/images. Usage: foodapi.specifyInfo(food, type, id). You can check if the ID is valid via foodapi.totalCounts(food, type)')
            } else {
                let chosenObj = Object.keys(data[food][requestType][id])
                return chosenObj
            }
        } else {
            return console.error('Not a valid ID. If you are relying on user input, you can check with isNan(). Usage: foodapi.specifyInfo(food, type, id)')
        }
    }
}
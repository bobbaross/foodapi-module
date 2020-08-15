class Brand {
    constructor(food, name, slogan) {
        this.name = name
        this.food = food
        this.slogan = slogan
    }
}
const brandsList = [
    new Brand('cereal', `Kap'n Crunch`, 'test')
]


module.exports.Brands = brandsList
class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.FruitList={"Orange":30,"Mango":15,"Avocado":40};
        this.getTotalCost = function (){
            return `${quantity} ${fruit} for KES ${quantity*this.price}`
        }
    }
}
KioskCalc.prototype.price = 15;

var firstFruit = new KioskCalc("Mango", 2)
console.log(firstFruit.getTotalCost())
let Calculatepurchases = [
{ name:"Orange",
    quantity:2,
    price:30.00,
}
]
// return `${this.quantity} ${this.name} for KES ${this.cost}`
function getTotalCost(name,quantity){
    let cost = Calculatepurchases.find(item=> item.name===name)
    console.log(`${quantity} ${name} for KES ${cost.price*quantity}`);
}
getTotalCost("Orange", 2)



function Pizza(Size,toppings,crust){
    this.size=size;
    this.toppings=toppings;
    this.crust=crust;
}
Pizza.prototype.addCost =function(){
    return parseInt(this.size) + parseInt(this.toppings) +parseInt(this.crust)
}
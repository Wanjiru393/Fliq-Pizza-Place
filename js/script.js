$(document).ready(function(){
    $("btn.order").click(function(){
        let size=$("size option:selected").val();
        let toppings=$("topings option:selected").val();
        let crust=$("crust option:selected").val();

    function Pizza(size, toppings, crust,) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      
    })
    Pizza.prototype.addCost =function(){
        return parseInt(size) + parseInt(toppings) + parseInt(crust);
      
    }

}); 
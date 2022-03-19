$(document).ready(function(){    
    $("#form").submit(function(event){
        event.preventDefault()
        let size = parseInt($("#size").val());
        let toppings =parseInt($("#toppings").val());
        let crust =parseInt($("#crust").val());
        function Pizza(size,toppings,crust){
        this.size = size;
        this.toppings =toppings;
        this.crust =crust;

    }
    let newPizza=new Pizza(size,toppings,crust);
    
    Pizza.prototype.addCost=function(){
        return this.size + this.toppings + this.crust
    }
    console.log(newPizza);
    console.log(newPizza.addCost());
    $("tbody").append(`<tr>
                    <th scope="row">1</th>
                    <td>${newPizza.size}</td>
                    <td>${newPizza.toppings}</td>
                    <td>${newPizza.crust}</td>
                    <td>${newPizza.addCost()}</td>
                    </tr>`)

    });
    
});
$(document).ready(function(){ 
    let orderNumber =0 
    let totalCost =0  
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
    orderNumber =orderNumber + 1
    totalCost = totalCost + newPizza.addCost();
    $("tbody").append(`<tr>
                    <th scope="row">${orderNumber}</th>
                    <td>${newPizza.size}</td>
                    <td>${newPizza.toppings}</td>
                    <td>${newPizza.crust}</td>
                    <td>${newPizza.addCost()}</td>
                    </tr>`)
                    $("#process").show();

    });
    
    $("#process").click(function(){
        $(this).hide()
        $(".deliver").show();
    })
     $(".no").click(function(){
        $(".deliver").hide();
         $("h5").text("Your order is ready,total cost is, Ksh. " + totalCost) ;
    })
    $(".yes").click(function(){
        $(".deliver").hide();
        // let location=prompt("Please enter your location");
        $(".total").text("Cost without delivery, Ksh. "+ totalCost)
        //  $("h5").text("Your order will be delivered to " + location + ". Total cost is, Ksh. "  + parseInt(totalCost + 200));

    })
    $(".checkout").click(function(){
        
        $(".total").hide("Cost without delivery, Ksh. "+ totalCost)

        $("h5").text("Your order will be delivered to " + prompt("Please enter your location") + ". Total cost is, Ksh. "  + parseInt(totalCost + 200));
        
    })
    

});
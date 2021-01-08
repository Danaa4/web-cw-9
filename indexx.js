let products = [

    {name:"White Choco Orea Cookie ",price:0.5, },
    {name:"Creme Brulee Cookie ",price:1, },
    {name:"Mixed Dates Cookie ",price:0.75, },
]


let cart=[]

function addToCart(index){

    let product =products[index]
    let quantity=document.getElementById(index).value;

    product.quantity=quantity;

    cart.push(product)

   


   let total=0

    document.getElementById("showcart").innerHTML=""

    for (let index = 0; index < cart.length; index++) {
        let element = cart[index];

       let price= element.price * element.quantity

       total = total + price

       document.getElementById('total').value=total
        
       let list =document.getElementById("showcart");

       list.innerHTML +=`<li>${element.quantity} ${element.name} ${element.price}</li>`
    }

    document.getElementById("total").innerText=`${total} KD`
}





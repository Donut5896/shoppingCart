
  //Cost of product in the cart
  let total = 0;
  //index
  let i = 0;
  //Message
  let message = "Please select a size";
  //list of the amt of every product in the cart
  let itemCost = [];

  //add to cart function
  function add(n){ // n = rank of product
      sizeId = "size" + n;
      messageId = "message" + n
      //the size of selected shirt
      size = document.getElementById(sizeId).value;

      //alert message when the size is not selected
      if(size==="size"){
          document.getElementById(messageId).innerHTML = message;
          return 0;
      }
      // get all details of selected product
      brand = "brand" + n;
      priceId = "price" + n;
      quantityId = "quantity" + n;

      name = document.getElementById(brand).innerHTML;
      price = document.getElementById(priceId).innerHTML;
      quantity = document.getElementById(quantityId).value;

      //create li element to add to ul (create element)
      let node = document.createElement("li");
      //id of li element
      item = "item" + i;
      node.setAttribute("id", item)
      //cost of selected product
      itemCost[i-1] = Number(price) * Number(quantity);
      // update the index i
      i += 1;
      //text of li element  (create text node)
      let textnode = document.createTextNode(name+" "+quantity+" x "+price+" $, size: "+ size);
      //add the text to li element (add text)
      node.appendChild(textnode);
      //add li element to li list
      document.getElementById("items").appendChild(node);

      //calculate total cost
      total += Number(price) * Number(quantity);
      document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " $";

      //add remove button
      document.getElementById(item).innerHTML += '<button onclick="deleItem('+"'"+item+"'"+')">x</button>';

  }
  // function to hide alert message
  function deleteE(elertId){
      document.getElementById(elertId).innerHTML = ' ';
   }    

   //Remove a product from the cart
   function deleItem(elertId){
      document.getElementById(elertId).remove();

      //remove the cost od product deleted from the cart
      n = Number(elertId.slice(-1)) - 1;
      total -= itemCost[n];
      //update the cost of product in the cart
      document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " $";
   }
 
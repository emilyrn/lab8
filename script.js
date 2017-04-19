var pageTitle=document.createElement('p');
pageTitle.innerText='Shopping List';
document.body.appendChild(pageTitle);
pageTitle.style.textAlign='center';
pageTitle.style.fontSize='30px';

var newContainer=document.createElement('div');
document.body.appendChild(newContainer);
// newContainer.style.backgroundColor='blue';
newContainer.style.height='650px';
newContainer.style.width='450px';
newContainer.style.margin='0 auto';

var newElement=document.createElement('div');
document.body.appendChild(newElement);
// newElement.style.backgroundColor='pink';
newElement.style.height='600px';
newElement.style.width='200px';
// newElement.style.margin='0 auto';
newElement.style.float='left';
newContainer.appendChild(newElement);


var itemTitle = document.createElement('p');
itemTitle.innerText='Item';
newElement.appendChild(itemTitle);
itemTitle.style.fontSize='20px';
itemTitle.style.textAlign='center';
itemTitle.style.textDecoration='underline';

var newerElement=document.createElement('div');
document.body.appendChild(newerElement);
// newerElement.style.backgroundColor='grey';
newerElement.style.height='600px';
newerElement.style.width='200px';
// newerElement.style.margin='0 auto';
newerElement.style.float='left';
newContainer.appendChild(newerElement);

var itemPrice = document.createElement('p');
itemPrice.innerText='Price';
newerElement.appendChild(itemPrice);
itemPrice.style.fontSize='20px';
itemPrice.style.textAlign='center';
itemPrice.style.textDecoration='underline';

var tax = 0;
var total = 0;
var groceries = [

  {
    item: "Dog Food",
    price: 43.00
  },
  {
    item: "Treats",
    price: 3.00
  },
  {
    item: "Rawhide Bone",
    price: 2.00
  },
  {
    item: "Dog Bed",
    price: 32.00
  },
  {
    item: "Dog Toy",
    price: 9.00
  },
  {
    item: "Collar",
    price: 12.00
  },
  {
    item: "Leash",
    price: 19.00
  },
  {
    item: "Food Bowls",
    price: 15.00
  },
  {
    item: "FURminator",
    price: 34.00
  },
  {
    item: "Doggy Taco Costume",
    price: 28.00
  }
];

groceries.forEach(function(i){
    // console.log(i.item + " $" + i.price + ".00");

    var itemName = document.createElement('ul');
    itemName.innerText=i.item;
    newElement.appendChild(itemName);


    var itemPrice = document.createElement('ul');
    itemPrice.innerText=i.price;
    newerElement.appendChild(itemPrice);
    itemPrice.style.textAlign= 'right';


    (total+=i.price);

});



(tax=total*0.06);
(total=total+tax);

var itemTax = document.createElement('p');
itemTax.innerText='Tax: $' + tax;
newerElement.appendChild(itemTax);
itemTax.style.textAlign='right';
itemTax.style.fontSize='20px';

var itemTotal = document.createElement('p');
itemTotal.innerText='Total: $' + total;
newerElement.appendChild(itemTotal);
itemTotal.style.textAlign='right';
itemTotal.style.fontSize='22px';


console.log("Tax: $" + tax);
console.log("Total: $" + total);

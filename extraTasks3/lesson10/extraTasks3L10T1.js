//T1

const groceries = {
    "73Wakv": {
      name: "Orange Juice",
      price: 1.5,
      discount: 10
    },
    "5L3db9": {
      name: "Chocolate",
      price: 2,
      discount: 0
    },
    "111111": {
      name: "Chocolate",
      price: 10,
      discount: 0
    },
    "222222": {
      name: "Chocolate",
      price: 100,
      discount: 10
    },
  };

  //console.log(groceries["73Wakv"].price);

  const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
  ];

  const shoppingBag2 = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 },
    { productId: "111111", count: 5 },
    { productId: "222222", count: 1 }
  ];

  function getTotalPriceOfShoppingBag (shoppingBagArray) {
        let totalPriceArr = [];
        for (let i = 0; i < shoppingBagArray.length; i++) {
                let x = shoppingBagArray[i].productId;
                //console.log(x);
                let discountedPrice = groceries[x].price - ((groceries[x].price / 100) * groceries[x].discount);
                //console.log(discountedPrice);
                itemDiscountedPrice = (shoppingBagArray[i].count * discountedPrice).toFixed(2);
                totalPriceArr.push(Number(itemDiscountedPrice));
                //console.log(itemDiscountedPrice);
        };
        console.log(totalPriceArr);
        let totalPrice = totalPriceArr.reduce(function (a,b)  {
          return a + b
        });
        console.log(totalPrice);
  };  

getTotalPriceOfShoppingBag(shoppingBag);
getTotalPriceOfShoppingBag(shoppingBag2);
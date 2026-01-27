let price = 3000;

if (price >= 5000) {
      // 10% discount
      let discount_amount = price * 10 / 100;
      console.log(discount_amount);

      let pay_amount = price - discount_amount;
      console.log(pay_amount);
} else if (price >= 3000) {
      // 5% discount
      let discount = price * 5 / 100;
      // console.log(discount);

      let payment = price - discount;
      console.log(payment);
} else {
      console.log(price);
}

let age = 51;
let food_price = 500;

if (age <= 15) {
      console.log("the food is free for you");
} else if (age >= 60) {
      // 50% discount 
      let discount_price = food_price * 50 / 100;
      let pay = food_price - discount_price;
      console.log("50% discount for you");
      console.log(pay);
} else if (age >= 50) {
      // 25% discount
      let discounted_price = food_price * 25 / 100;
      let payment_amount = food_price - discounted_price;
      console.log("25% discount for you");
      console.log(payment_amount);
} else {
      console.log("you need pay full price of the food");
      console.log(food_price);
}
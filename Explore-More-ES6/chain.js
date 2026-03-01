// data access

let data = [{ id: 1, name: "abul", age: 21, address: "kochu khet" }];
// console.log(data[0].address);

let products = {
      count: 100,
      data: [
            {
                  id: 1,
                  name: "lanovo laptop",
                  price: 32000,
            },
            {
                  id: 2,
                  name: "samsung galaxy s26",
                  price: 50000,
            },
            {
                  id: 3,
                  name: "google pixel watch",
                  price: 22000,
            },
      ],
};

// second product name
// console.log(products.data[1].name);

let person = {
      name: "shoriful raj",
      age: 23,
      address: {
            city : "kumar khali",
            road_name: "akbor ali len",
            building_number: 365,
            apartment_number: 23,
      },
};
// console.log(person.address.apartment_number);

let user = {
      name : "habul",
      age : 23,
      address : {
            city : "kara bon",
            street : "pori bibir majar",
      }
}

console.log(user.address?.apartment_number);

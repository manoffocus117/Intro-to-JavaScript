class Vehicle {
      constructor(name, price, wheel, seat) {
            this.name = name;
            this.price = price;
            this.wheel = wheel;
            this.seat = seat;
      }
      move() {
            console.log("vehicle is moving");
      }
}

class Bus extends Vehicle {
      constructor(name, price, wheel, seat, ticket_price) {
            super(name, price, wheel, seat);
            this.ticket_price = ticket_price;
      }
      route() {
            console.log("dhaka to bandorban");
      }
}

class Truck extends Vehicle {
      constructor(name, price, wheel, capacity) {
            super(name, price, wheel);
            this.capacity = capacity;
      }
      load() {
            console.log("truck is fully loaded");
      }
}

let car = new Vehicle("toyota car", 3500000, 4, 4);
console.log(car);

let tata = new Bus("tata bus", 5000000, 6, 50, 550);
console.log(tata);

let ashok = new Truck("ashok layland", 6000000, 10, 20);
console.log(ashok);

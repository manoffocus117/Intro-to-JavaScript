class Person {
      constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
      }
      call() {
            console.log(`${this.name} is called`);
      }
      activity() {
            this.call();
            console.log(`${this.name} is playing cricket`);
      }
}

let josim = new Person("Josim", 32, "andor kella, bandor bon");
console.log(josim);

// josim.call();
josim.activity();

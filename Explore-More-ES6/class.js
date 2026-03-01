// has some properties, methods
class Product {
      country = "bangladesh";
      constructor(name) {
            this.name = name;
      }
      speak(talk) {
            console.log(`talking about ${talk}`);
      }
}

const lenovo = new Product("this is lenovo");
// console.log(lenovo);

// lenovo.speak("something");

class Teacher {
      constructor(name, subject, time) {
            this.name = name;
            this.subject = subject;
            this.time = time;
      }
      lecture() {
            console.log("teacher is teaching in the class");
      }
}

let babul = new Teacher ("Babul", "Math", 50);
console.log(babul);

let kuddus = new Teacher ("Kuddus Ali", "Bangla", 50);
console.log(kuddus);
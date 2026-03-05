console.log(1);
console.log(2);

fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(data));

console.log(4);
console.log(5);

setTimeout(do_something, 2000);

console.log(6);

function do_something() {
      // console.log(3);
      fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => console.log(data));
}

do_something();

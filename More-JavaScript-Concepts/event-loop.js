function a() {
      console.log("a");
      b();
}

function b() {
      console.log("b");
      c();
}

function c() {
      console.log("c");
      d();
}

function d() {
      console.log("d");
}

fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => console.log(data));

a();

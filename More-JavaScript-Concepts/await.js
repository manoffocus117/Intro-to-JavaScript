// console.log('welcome to javascript');

function fetch_data() {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => console.log(data));
}

async function async_await() {
      const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/2",
      );
      const data = await response.json();
      console.log(data);
}

const arrow_async = async () => {
      const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/3",
      );
      const data = await response.json();
      console.log(data);
};

const async_try = async () => {
      try {
            const response = await fetch(
                  "https://jsonplaceholder.typicode.com/todos/4",
            );
            const data = await response.json();
            console.log(data);
      } catch (err) {
            console.log("error happened:", err);
      } finally {
            console.log("js file is working");
      }
};

const load_data = () => {
      return new Promise((resolve, reject) => {
            const success = Math.random();
            if (success <= 0.5) {
                  resolve(success);
            } else {
                  reject(success);
            }
      });
};

load_data()
      .then((data) => console.log("resolved data", data))
      .catch((err) => console.log("rejected data", err));

async function more_fetch() {
      const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
      );
      const data = await response.json();
      console.log(data);
}

more_fetch();

const task_loader = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      console.log(data);
};

task_loader()

// continue means skip rest of the code for this iteration

for (let i = 0; i <= 10; i++) {
      // console.log(i);
      if (i % 2 === 1) {
            continue;
      }
      // console.log(i);
}


let n = 0;
while (n <= 10) {
      n++;
      if (n % 5 !== 0) {
            continue;
      }
      console.log(n);
}


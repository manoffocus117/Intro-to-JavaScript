// meyer jonno patro khuji

let is_bcs = false;
let salary = 25000;
let is_have_car = false;
let is_have_house = true;

if (is_bcs === true) {
      // console.log("bolo ma kobul");
} else {
      // console.log("bhag tui mokbul");
}

if (is_bcs === true) {
      // console.log("bosshoi meye bolbe kobul");
} else if (salary >= 20000) {
      // console.log("suuu patro");
} else if (is_have_car === true) {
      // console.log("bolo ma kocul");
} else if (is_have_house === true) {
      // console.log("suuu parto, amra meye biye debo");
} else {
      // console.log("ebar baba tumi asho");
}


if (is_bcs === true || salary >= 50000) {
      console.log("meyer sathe meyer baba ma o bolbe kobul");
} else if (is_have_car && is_have_house) {
      console.log("bolo ma kobul")
} else {
      console.log("bhag tui mokbul");
}

if (is_bcs === true || salary >= 50000 
      && is_have_car === true && is_have_house === true) {
            console.log("meyer sathe tar 14 gusti o bolbe kobul");
} else {
      console.log("bhag tui mokbul");
}
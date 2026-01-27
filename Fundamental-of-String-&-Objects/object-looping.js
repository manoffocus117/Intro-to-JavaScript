let computer = {
      processor : "AMD Ryzen 9950x3D",
      motherboard : "MSI Godlike",
      ram : "64GB DDR5 6000Mth",
      nvme : "samsung gen5 1TB nvme",
      graphics_card : "MSI supreme 5090",
      cpu_cooler : "arctic 360mm aio cooler",
      casing : "lian li o11 dynamic",
      case_fan : "lian li infinity",
      display : "samsung odyssey g8",
      keyboard : "keychron k3",
      mouse : "logitech mx master 3s",
}

// for of use in array
// of in use in object


for (let prop in computer) {
      // console.log(prop);
      // console.log(computer[prop]);
}

let keys = Object.keys(computer);
// console.log(keys);

for (const key of keys) {
      // console.log(key);
      console.log(key, ":",computer[key]);

}

let values = Object.values(computer)
// console.log(values);



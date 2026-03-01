let numbers = [1, 2, 3, 4, 5];

let height = [60, 63, 66, 70, 65, 71, 72];

// let selected_players = height.filter((player) => player > 65);
// let selected_players = height.filter((player) => player % 2 === 0);
let selected_players = height.filter((player) => player % 2 === 1);
// console.log(selected_players);

let friends = ["habul", "babul", "tom", "jerry", "mokbul", "john"];
let odd_friends = friends.filter((friend) => friend.length % 2 === 1);
console.log(odd_friends);

let even_friends = friends.filter((friend) => friend.length % 2 === 0);
console.log(even_friends);

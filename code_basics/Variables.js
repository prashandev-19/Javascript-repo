const id_number = 20;
let roll_number = 31;//Block scope
var amount = 30000;//global scope not preferred.
final_amount = 50000;//bad practice

//const id_number = 30; cannot update const.

let temp;
console.log(id_number);
console.log(roll_number);
console.log(amount);
console.log(final_amount);
console.table([id_number , roll_number , amount , final_amount,temp]);
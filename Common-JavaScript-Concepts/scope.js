/**
 * Scope in JavaScript is the area of code where variables and functions are 
  accessible. It determines the visibility of identifiers at different parts of the 
  code and helps avoid naming conflicts. JavaScript uses lexical scoping, 
  meaning the scope is determined by where variables are declared in the code, 
  not where they are called.

 * JavaScript এ Scope মানে হলো — কোনো ভ্যারিয়েবল (variable), ফাংশন (function), 
  বা ডাটা কোডের কোন জায়গা থেকে অ্যাক্সেস করা যাবে আর কোন জায়গা থেকে যাবে না।

 * সহজভাবে বললে:
   👉 Scope ঠিক করে দেয়, কোন ভ্যারিয়েবল কোথায় দেখা যাবে (visible) আর কোথায় যাবে না।

 * There are three or four primary types of scope in JavaScript: 
      1. Global Scope
      2. Function Scope (Local Scope)
      3. Block Scope
      4. Module Scope
 */

function add(a, b) {
      const total = a + b;

      if (b > 5) {
            const total = 25 + a + b;
      } else {
            const total = a + b - 10;
            var sum = total;
      }
      console.log(sum);

      return total;
}

let result = add(5, 7);
console.log(result);

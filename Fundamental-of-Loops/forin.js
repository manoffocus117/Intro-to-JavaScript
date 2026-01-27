/** Iterates over the enumerable properties (keys) of an object. It is not recommended 
 * for arrays because it may not access indices in order and can include 
 * inherited properties.
 * 
 * syntax => 
 *    object
 *    for (variable in object) {
 *          statement
 *    }
 *    
 * 
 */

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
      console.log(key , obj[key]);
}



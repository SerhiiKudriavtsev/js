// function checkForSpam(message) {
//   let result;
//   result = message.toLowerCase();
// result = result.includes("spam") || result.includes("sale");
//   return result;
// }
// console.log(checkForSpam("Get best sale offers now!"));

// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax", "Іван"];
// const clientNameToFind = "Іван";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";
// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }
// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// function checkStorage(available, ordered) {
//   // Change code below this line
//   // let message;

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // return message;
//   // Change code above this line
// }
// console.log(checkStorage(9, 0));

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(0 || '' || false);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0); // null > 0
// (2 && 3) => 3
// console.log(null || (2 && 3) || 4);

// const incomingValue = undefined;
//  const defaultValue = 10;
//  const value = incomingValue ?? defaultValue;
//  console.log(value);

// function getExtremeElements(array) {
//   // Change code below this line
//     const firstElement = array[0];
//     console.log(firstElement);
//     const lastElement = array[array.length-1];
//     console.log(lastElement);
//     const arrayResult = [firstElement, lastElement];
//     return arrayResult;
//   // Change code above this line
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let totalPrice;
//     const messageArray = message.split(" ");
//    totalPrice = messageArray.length * pricePerWord;
//    return totalPrice;
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function slugify(title) {
//     let lowerCase;
//     let slug;
//     lowerCase = title.toLowerCase();
//     slug = lowerCase.replace(/ /g, "-");
//     return slug;
// }
// console.log(slugify("dl jN K Lrk LD"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, );
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let concatArray = firstArray.concat(secondArray);
//   if (concatArray.length > maxLength) {
//     let newArray = concatArray.slice(0, maxLength);
//     return newArray;
//   }
//   else {
//     return concatArray;
//   }
//     // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function calculateTotal(number) {
//  // Change code below this line
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//         sum += i;
// }
//     return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(5));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//     // for (let i = 0; i < order.length; i += 1)
//     for (let kkkk of order) {
//     total += kkkk;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function includes(array, value) {
//   // Change code below this line
//   // for (let i of array) {
//   for (let i = 0; i <= array.length; i += 1) {
//     // if (i === value) {
//       if(array[i] === value) {
//       return true;
//     }
//     // const index = array.indexOf(value);
//   }
//   // return (index !== -1);
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key])
//     }
// }
// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);


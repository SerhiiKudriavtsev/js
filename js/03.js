// task-7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// // apartment.location.coutrty = "Jamaica";
// // apartment.location.city = "Kingston";
// apartment.location = {country: "Jamaica", city:  "Kingston",};

// ---JS V2 block-3 - task-12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// task-13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// task-14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   let arrKeys = Object.keys(object);
// //   for (const key of arrKeys) {
// //     if (object.hasOwnProperty(key)) {
// //       propCount += 1;
// //     }
// //   }
// propCount = arrKeys.length;
//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// task-15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// task-16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     for (const key of values) {
//       totalSalary += key;
//     }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// task-17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// task-18 - version-1 - bad
//  { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
// const names = [];
//     const prices = [];
//     let product;
//     for ( product of products) {
//         names.push(product.name);
//         prices.push(product.price);
//         console.log(prices);
//     }
//     for (let i = 0; i <= names.length; i += 1) {
//         if (names[i] === productName) {
//             return prices[i];
//         }
//     }
//     if (names !== productName) {
//             return null;
//         }
//   // Change code above this line
// }

// task-18 - version-2
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//     let product;
//     for ( product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//     if (product.price !== productName) {
//         return null;
//     }
//   // Change code above this line
// }
// console.log(getProductPrice("Droid"));

// task-19 v1
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
// //   Change code below this line
    // let product;
    // const nameArr = [];
    // const priceArr = [];
    // const quantityArr = [];
    // let result = [];
    // for (product of products) {
    //     nameArr.push(product.name);
    //     priceArr.push(product.price);
    //     quantityArr.push(product.quantity);
    // }
    // switch (propName) {
    //     case "name":
    //         result = result.concat(nameArr);
    //         break;
        
    //     case "price":
    //         result = result.concat(priceArr);
    //         break;
        
    //     case "quantity":
    //         result = result.concat(quantityArr);
    //         break;
    // }
    // return result;
// }
// console.log(getAllPropValues("price"));

// task-19 v2
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const result = [];
//   for (const product of products) {
//     if (product[propName]) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }
// console.log(getAllPropValues("name"));




// task-20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let product;
//     for (product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
//     if (product.name !== productName) {
//         return 0;
//     }
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Scanner"));

// task-21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// task-22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// task-23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// task-24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors, rgbColors)

// task-25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;
// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;
// console.log(forecast);

// task-26
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
// const {today:{ low: todayLow, high: todayHigh}, tomorrow:{ low: tomorrowLow, high: tomorrowHigh}} = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));

// task-27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// task-28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// task-29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// task-30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//     // Change code below this line
    
    // const newObject = { category: "General", priority: "Normal", completed: false };
    // return { ...newObject, ...data };
// або коротше:
//   return {category, priority, ...data, completed}

// }
// console.log(makeTask({ category: "Finance", text: "Take interest" }))

// task-31
// Change code below this line
// function add(...args) {
//   let summ = 0;
//     //v2 for (let i = 0; i < args.length; i += 1)  {
//     //v2 summ += args[i];
//     for (const arg of args) {
//         summ += arg;
//     }
//     return summ;
//   }
  // Change code above this line
// console.log(add(12, 4, 11, 48));

// task-32
// Функція addOverNum() рахує суму всіх аргументів.
// Зміни параметри і тіло функції addOverNum() таким чином,
// щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
// Це число повинно бути першим параметром функції.
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;
//     const firstElement = args[0];
//     for (const arg of args) {
//         if (arg > firstElement) {
//             total += arg;
//         }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// task-33
// Функція findMatches() приймає довільну кількість аргументів. Першим
// аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches,
// в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві
// першого аргументу.
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути
// масив[1, 2], тому що тільки вони є в масиві першого аргументу.
// Change code below this line
// function findMatches(...args) {
//   const matches = []; // Don't change this line
//   const firstArr = args[0];
//   for (let i = 1; i < args.length; i += 1){
//     if (firstArr.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// task-34
// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто
// рядки за аналогією з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок
// "Deleting book <назва книги>", де < назва книги > - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// Повертає рядок "Updating book <стара назва> to <нова назва>",
// де < стара назва > і < нова назва > - це значення параметрів oldName і newName
// відповідно.
// const bookShelf = {
  // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// }
// console.log(bookShelf.updateBook("Sands of dune", "Dune"))
  
  // task-35
  // Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював 
  // назву книги з oldName на newName у властивості books.Використовуй indexOf() 
  // для того, щоб знайти потрібний елемент масиву, і splice() для того, 
  // щоб замінити цей елемент.
//   const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// task-36
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму 
// для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля.
// Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.
// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// task-37
// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення 
// властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
    
//     return atTheOldToad.potions;
//   }
//   // Change code above this line
// };
// console.log(atTheOldToad.potions);



// task-38
// // Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля 
// // potionName в кінець масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// task-39
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля 
// potionName з масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// task-40
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він 
// оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// task-41
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, 
// а в майбутньому, можливо, й іншими характеристиками.Тому зараз у властивості 
// potions буде зберігатися масив об'єктів з наступними властивостями.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали 
// не з масивом рядків, а з масивом об'єктів.
// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості
// potions, але тільки, якщо такого зілля ще немає в інвентарі.В іншому випадку 
// повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у 
// властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з 
// назвою oldName на newName в масиві potions.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (newPotion.name === potion.name) {
//         // console.log(`Error! Potion  name: ${JSON.stringify(newPotion)} is already in your inventory!`)
//         return `Error! Potion ${potion.name} is already in your inventory!`;
//       }
//     }
//     // if (this.potions.includes(newPotion)) {
      
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }
//     this.potions.push(newPotion);
//     // console.table(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     // деструктуруємо this:
//     const { potions } = this;
//     // було:
//     // for (let i = 0; i < this.potions.length; i += 1) {
//     // стало:
//     for (let i = 0; i < potions.length; i += 1) {
//       // деструктуризував this.potions[i].name в:
//       const {name} = potions[i]; 
      
//       if (potionName === name) {
//         // console.log(name);
//         // console.log(this.potions[i]);
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//     // const potionIndex = this.potions.indexOf(potionName);
//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//     // return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       let potion = this.potions[i]
//       if (oldName === potion.name) {
//         potion.name = newName;
//         return this.potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//     // return this.potions;
//   },
//   // Change code above this line
// };
// // console.table(atTheOldToad.getPotions());
// console.table(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// // console.table(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.table(atTheOldToad.removePotion("Dragon breath"));
// console.table(atTheOldToad.updatePotionName("Invisibility", "Polymorth"));

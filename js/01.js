const stars = 1;
let price;
switch (stars) {
    case 1:
        price = 20;
        break;
    case 2:
        price = 30;
        break;
    case 3:
        price = 50;
        break;
    case 4:
        price = 70;
        break;
    case 5:
        price = 120;
        break;
    default:
        console.log('There are not that many stars');
}

console.log(price);
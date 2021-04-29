// Hey kiddo

// Version 1

/* const checkingAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = function (age) {
    let checkIfAdult = checkingAge(age);
    if (checkIfAdult === true) {
        console.log('Hello there');
    } else {
        console.log('Hey kiddo');
    }
};

// greeting(18); */

// Version 2

const checkingAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = function (age) {
    if (checkingAge(age) === true) {
        return 'Hello there';
    } else {
        return 'Hey kiddo';
    }
};

console.log(greeting(17));


// VAT calculations

// VAT exercise 1

const calcPrice = function (price) {
    let vat = 1.21;
    const totalPrice = price * vat;
    return totalPrice;
};

const calcVatAmount = function (price) {
    let vat = 1.21;
    const vatAmount = calcPrice(price) - (calcPrice(price) / vat);
    return vatAmount;
};

console.log(calcVatAmount(50));

// VAT exercise 2

const basePrice = function (price) {
    let vat = 1.21;
    const calcPrice2 = price / vat;
    return calcPrice2;
};

const calcVatAmount2 = function (price) {
    let vatpercentage = 1.21;
    const vatAmount2 = basePrice(price) - (basePrice(price) / vatpercentage);
    return vatAmount2;
};

const result = [basePrice(100), calcVatAmount2(100)];
console.log(result);
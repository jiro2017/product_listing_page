number = 496;
exponentCount = 1;
initialNumber = number;
while (number > 2) {
    console.log(number);
    number = Math.floor(number / 2);
    exponentCount++; //break;
    // if(exponentCount > 10) break;
}
remainder = initialNumber - Math.pow(2, exponentCount);
console.log(exponentCount);
console.log(remainder);
console.log(`initial: ${initialNumber}`);
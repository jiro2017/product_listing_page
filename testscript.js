// number = 496;
// exponentCount = 1;
// initialNumber = number;
// while (number > 2) {
//     console.log(number);
//     number = Math.floor(number / 2);
//     exponentCount++; //break;
//     // if(exponentCount > 10) break;
// }
// remainder = initialNumber - Math.pow(2, exponentCount);
// console.log(exponentCount);
// console.log(remainder);
// console.log(`initial: ${initialNumber}`);

// startPoint = 10^3;
// potientialFactor = 1;
// factors = [];
// factorsSum = 0;
// while(startPoint >1) {
//     while(potientialFactor < startPoint) {
//         if(startPoint%potientialFactor ==0) {
//             factors.push = potientialFactor;
//             factorsSum += potientialFactor;
//             if(factorsSum > startPoint) {
//                 factors = [];
//                 factorsSum=0;
//                 potientialFactor =1;
//                 break;
//             }
//             if(potientialFactor == startPoint-1) {
//                 console.log(`Found : ${startPoint}`);
//                 factors = [];
//                 factorsSum=0;
//                 potientialFactor =1;
//                 break;
//             }
//             potientialFactor+1;
//         }
//     }
    

//     startPoint--; console.log("continued")
//     continue;
//     // potientialFactor +2;
// }
number = 8589869056;
function isPerfect(number) {
    potentialFactor =1;
    factorSum = 0;
    factors = [];
    while((number/2) >= potentialFactor) {
        // console.log('started')
        if(number%potentialFactor==0) {
            factorSum = factorSum + potentialFactor;
            factors.push(potentialFactor);
        }
        potentialFactor++;
    }

    if(factorSum ==number) {
        console.log(`${number} is perfect.`);
        factorsString ='';
        factors.forEach((factor)=> factorsString = factorsString+`${factor},`);
        console.log(`Factors of ${number}: ${factorsString}`)
    } else {
        console.log(`${number} is NOT perfect.`);
        console.log(factors);
    }
}


startPoint = 2;
endPoint = 1000; //Math.pow(10, 9);
potientialFactor = 1;
factorsSum = 0;
factors = [];

while (endPoint > startPoint) {
    // console.log(startPoint);
    while (potientialFactor < startPoint) {
        console.log(`potientialFactor: ${potientialFactor}`);
        console.log(`startPoint: ${startPoint}`);

        if(potientialFactor > (startPoint/2)) {
            break;
        }

        if(startPoint%potientialFactor ===0) {
            console.log(startPoint%potientialFactor);
            factorsSum += potientialFactor;
            factors.push(potientialFactor);
            potientialFactor++;
            continue;
        }

        if(factorsSum > startPoint) {
            potientialFactor =1;
            factorsSum = 0;
            factors = [];
            startPoint = startPoint+2;
            break;
        }
        potientialFactor++;
    }
    
    if(factorsSum === startPoint) {
        console.log(`Found: ${startPoint}`);
        factorsString ='';
        factors.forEach((factor)=> factorsString = factorsString+`${factor},`);
        console.log(`Factors of ${startPoint}: ${factorsString}`)
        potientialFactor =1;
        factorsSum = 0;
        factors = [];
        startPoint = startPoint+2;
    }
    
    potientialFactor =1;
    factorsSum = 0;
    factors = [];
    startPoint = startPoint+ 2;
}
// console.log("data")
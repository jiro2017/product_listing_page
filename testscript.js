// number = 8589869056;
// function isPerfect(number) {
//     potentialFactor =1;
//     factorSum = 0;
//     factors = [];
//     while((number/2) >= potentialFactor) {
//         // console.log('started')
//         if(number%potentialFactor==0) {
//             factorSum = factorSum + potentialFactor;
//             factors.push(potentialFactor);
//         }
//         potentialFactor++;
//     }

//     if(factorSum ==number) {
//         console.log(`${number} is perfect.`);
//         factorsString ='';
//         factors.forEach((factor)=> factorsString = factorsString+`${factor},`);
//         console.log(`Factors of ${number}: ${factorsString}`)
//     } else {
//         console.log(`${number} is NOT perfect.`);
//         console.log(factors);
//     }
// }


// startPoint = 2;
// endPoint = 1000000000; //Math.pow(10, 9);
// potientialFactor = 1;
// factorsSum = 0;
// factors = [];
// achievedMileStones = [];

// while (endPoint > startPoint) {
//     // console.log(startPoint);
//     while (potientialFactor < startPoint) {
//         // console.log(`potientialFactor: ${potientialFactor}`);
//         // console.log(`startPoint: ${startPoint}`);

//         if(potientialFactor > (startPoint/2)) {
//             break;
//         }

//         if(factorsSum > startPoint) {
//             potientialFactor =1;
//             factorsSum = 0;
//             factors = [];
//             startPoint = startPoint+2;
//             break;
//         }
        
//         if(startPoint%potientialFactor ===0) {
//             // console.log(startPoint%potientialFactor);
//             factorsSum += potientialFactor;
//             factors.push(potientialFactor);
//             potientialFactor++;

//             if(factorsSum > startPoint) {
//                 potientialFactor =1;
//                 factorsSum = 0;
//                 factors = [];
//                 startPoint = startPoint+2;
//                 break;
//             }
//             continue;
//         }

        
//         potientialFactor++;

//         milestoneMultiplier = achievedMileStones.length();
//         // if(milestoneMultiplier==0) milestoneMultiplier++;
//         milestone=100000*milestoneMultiplier*5;
//         if(milestone==0) milestone =100000;
//         if(potientialFactor%milestone ==0 && !(achievedMileStones.includes(potientialFactor))) {
//             console.log(`Reached ${potientialFactor}`);
//             achievedMileStones.push(potientialFactor);
//         }
//     }
    
//     if(factorsSum === startPoint) {
//         console.log(`Found: ${startPoint}`);
//         factorsString ='';
//         factors.forEach((factor)=> factorsString = factorsString+`${factor},`);
//         console.log(`Factors of ${startPoint}: ${factorsString}`)
//         potientialFactor =1;
//         factorsSum = 0;
//         factors = [];
//         startPoint = startPoint+2;
//     }
    
//     potientialFactor =1;
//     factorsSum = 0;
//     factors = [];
//     startPoint = startPoint+ 2;
// }
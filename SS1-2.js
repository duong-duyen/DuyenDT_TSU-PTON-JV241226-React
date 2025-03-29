

const checkParity = (a) => {
    if(isNaN(a)){
        console.log(`${a} not a Number`)
    } else {
        console.log((a % 2 === 0) ? `${a} is an even number `:`${a} is odd`);
    }
}

checkParity("a");
checkParity(10);
checkParity(7);

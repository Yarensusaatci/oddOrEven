const oddishOrEvenish = (value) => {

    let sum = 0;

    //find sum 
    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    // find sum is even or odd
    var result = (sum % 2 == 0) ? "Even" : "Odd";

    // display the result
    console.log(` ${result}`);
}

oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);

//Yaren Su Saatci
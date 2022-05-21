

function ourRandomRange(ourMax, ourMin)
{
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

var randomRangeTest = ourRandomRange(10, 2);

console.log(randomRangeTest);
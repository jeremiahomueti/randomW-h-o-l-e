//Often you want a random whole number, not a random decimal number. That can be accomplished with maths.floor



function randomWholeNum()
{
    return Math.floor(Math.random() * 100);
}

console.log(randomWholeNum());
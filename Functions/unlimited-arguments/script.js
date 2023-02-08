function sum_unlimited( ...numbers)
{
    let total = 0
    for(const n of numbers)
    {
        total += Number.parseFloat(n)
    }

    return total
}

let value = sum_unlimited(7, 1, 2, 3, 4, 5, 9)
console.log(value)
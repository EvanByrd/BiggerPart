// Collecting user input.
// Starting with slice(2) has us ignore the "node index.js" portion of the terminal args.
const args = process.argv.slice(2)

function main(input) {
    try {
        // Ensuring the input is of the correct type.
        if (!Array.isArray(input)) {
            throw('Incorrect input type. The input must be an Array.')
        }

        // we need a place to store our outputs.
        let resultSet = []
    
        input.forEach(value => {
            greaterPart(value)
        })
    } catch (error) {
        console.log(error)
    }
}

function greaterPart(n){
    try {
        // Ensuring that the input contains the correct type of values.
        if (isNaN(n) || (n < 0)) {
            throw('Input must only contain positive numeric values.')
        }

        // I'm using 'toString()' to account for the possibility that this code is re-used by a function that provides a list of Number values rather than String values that happen to be numeric.
        const numbers = n.toString().split('.')

        // I can't assume that all input will always have a decimal to split the number into an array of 2 values.
        // A decimal value of 0 may end up being removed if the input went through a parser at some point prior to reaching my code.
        // As such I'm just going to run a brief check before assigning the decimalNum variable to a non-zero value so as to keep the rest of the code logic in tact.
        let wholeNum = Number(numbers[0])

        let decimalNum = 0
        if (numbers.length > 1) {
            decimalNum = Number(numbers[1])
        }

        // Formatting the value to be a Number so as to remove leading 0s. It just makes the output look nicer.
        let numberValue = Number(n)
        
        // We only need to check if one number is larger than the other. In the event they are equal it doesn't matter which is chosen to represent the bigger part.
        let greaterPart = (wholeNum > decimalNum) ? wholeNum : decimalNum
        console.log(numberValue + ' --> ' + greaterPart)
    } catch (error) {
        console.log(error)
    }
}

main(args)

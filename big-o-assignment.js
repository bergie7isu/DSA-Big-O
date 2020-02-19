//1. What is the Big O for this?
    //1) Constant time O(1)
    //2) Linear time O(n)

//2. Even or Odd
    //Constant time O(1) - no matter what the input, there's just one expression to evaluate.

//3. Are you here?
    //Polynomial time O(n^2) - there's a loop inside a loop, so it's n^2.

//4. Doubler
    //Linear time O(n) - the function goes to each item in the array one time.  So there's a 1-to-1 relationship between input size and number of operations.

//5. Naive Search
    //Linear time O(n) - in the worst case, the function runs through each item in the array and runs one calculation.  1-to-1.

//6. Creating Pairs
    //Polynomial time O(n^2) - a loop inside a loop

//7. Computing the Sequence
    //This function generates the Fibonacci sequence for a given number.
    //Linear time O(n) - one set of operations per number from 0 to input.  1-to-1.

//8. An efficient search
    //Logarithmic time O(log(n)) - we're cutting our list of potential answers in half each time through the while loop.  So the number of computations grows slower than the input size.

//9. Random element
    //Constant time O(1) - only a single calculation regardless of input size.

//10. What Am I?
    //This function return true if the input is a prime number.  Otherwise, it returns false.
    //Linear time O(n) - in the worst case, the function check each number from 1 to the input value and runs one expression.

//11. Tower of Hanoi
    let hanoiCount = 0;
    const towerOfHanoi = function(discs, start, via, end) {
        if (discs === 0) {
            return '';
        };
        hanoiCount = hanoiCount + 1;
        return (
            towerOfHanoi(discs - 1, start, end, via) +
            `move disc ${discs} from ${start} to ${end}\n` +
            towerOfHanoi(discs - 1, via, start, end) 
        )
    };
    console.log('3 Discs');
    hanoiCount = 0;
    console.log(towerOfHanoi(3, 'A', 'B', 'C'));
    console.log(`total moves = ${hanoiCount}`);
    console.log('4 Discs');
    hanoiCount = 0;
    console.log(towerOfHanoi(4, 'A', 'B', 'C'));
    console.log(`total moves = ${hanoiCount}`);
    console.log('5 Discs');
    hanoiCount = 0;
    console.log(towerOfHanoi(5, 'A', 'B', 'C'));
    console.log(`total moves = ${hanoiCount}`);
    //With 5 discs, after 7 moves:
        //move disc 1 from A to C
        //move disc 2 from A to B
        //move disc 1 from C to B
        //move disc 3 from A to C
        //move disc 1 from B to A
        //move disc 2 from B to C
        //move disc 1 from A to C
        //
        //So we would have:
        // 
        // 
        //           1
        // 4         2
        // 5         3
        // A // B // C //
    //Number of moves to solve:
        //3 discs - 7
        //4 discs - 15
        //5 discs - 31
    //Exponential time O(2^n)

//12. Iterative Version
    //1. Counting Sheep
    console.log('1. Counting Sheep');
    const sheepIterative = function(numberOfSheep) {
        let results = '';
        for (let i = numberOfSheep; i > 0; i--) {
            results += `${i}: Another sheep jumps over the fence \n`;
        };
        results += 'All sheep jumped over the fence';
        return results;
    }
    console.log(sheepIterative(3));
    console.log('-------------------------------');

    //2. Power Calculator
    console.log('2. Power Calculator');
    const powerCalculatorIterative = function(base, exponent) {
        if (exponent < 0) {
            return 'exponent should be >= 0'
        };
        let results = 1;
        for (let i = 0; i < exponent; i++) {
            results *= base;
        };
        return results;
    };
    console.log(powerCalculatorIterative(10, 2));
    console.log(powerCalculatorIterative(10, -2));
    console.log('-------------------------------');

    //3. Reverse String
    console.log('3. Reverse String');
    const reverseStringIterative = function(string) {
        let results = '';
        for (let i = 0; i < string.length; i++) {
            results = string[i] + results;
        };
        return results;
    };
    console.log(reverseStringIterative('Here is a string.'));
    console.log('-------------------------------');

    //4. nth Triangular
    console.log('4. nth Triangular');
    const nthTriangularIterative = function(nth) {
        let results = 0;
        for (let i = 1; i <= nth; i++) {
            results += i;
        };
        return results;
    };
    console.log(nthTriangularIterative(6));
    console.log('-------------------------------');

    //5. String Splitter
    console.log('5. String Splitter');
    const stringSplitterIterative = function(string, splitter) {
        const results = [];
        let component = '';
        let j = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== splitter) {
                component += string[i];
            } else {
                results[j] = component;
                j++;
                component = '';
            }
        }
        results[j] = component;
        return results;
    };
    console.log(stringSplitterIterative('02/20/2020', '/'));
    console.log('-------------------------------');

    //6. Fibonacci
    console.log('6. Fibonacci');
    const fibonacciArrayIterative = function(fib) {
        const results = [];
        for (let i = 1; i <= fib; i++) {
            if (i === 1 || i === 2) {
                results.push(1);
            } else {
                results.push(results[i-3] + results[i-2]);
            }
        }
        return results;
    };
    const fibonacciAnswerIterative = function(fib) {
        const results = [];
        for (let i = 1; i <= fib; i++) {
            if (i === 1 || i === 2) {
                results.push(1);
            } else {
                results.push(results[i-3] + results[i-2]);
            }
        }
        const answer = results[fib - 1];
        return answer;
    }
    console.log(fibonacciArrayIterative(2));
    console.log(fibonacciAnswerIterative(2));
    console.log(fibonacciArrayIterative(10));
    console.log(fibonacciAnswerIterative(10));
    console.log('-------------------------------');

    console.log('7. Factorial');
    const factorialIterative = function(num) {
        let results = 1;
        for (let i = 1; i <= num; i++) {
            results *= i;
        };
        return results;
    };
    console.log(factorialIterative(5));
    console.log('-------------------------------');

//13. Recursive Big O
    //1. Counting Sheep
        //Linear time O(n) - one recursive call per input before getting to base case
    //2. Power Calculator
        //Linear time O(n) - one recursive call per input before getting to base case
    //3. Reverse String
        //Linear time O(n) - one recursive call per input before getting to base case
    //4. nth Triangular
        //Linear time O(n) - one recursive call per input before getting to base case
    //5. String Splitter
        //Linear time O(n) - one recursive call per input before getting to base case
    //6. Fibonacci
        //Exponential time O(2^n) - two recursive calls per input before getting to base case
    //7. Factorial
        //Linear time O(n) - one recursive call per input before getting to base case
    //8. Find a way out of the maze
        //Exponential time O(2^n) - two recursive calls per input before getting to base case
    //9. Find ALL the ways out of the maze
        //Exponential time O(4^n) - four recursive calls per input before getting to base case
    //10. Anagrams
        //Polynomial time O(n^2) - one recursive call per input, but the recursive call is inside a loop
    //11. Organization Chart
        //Polynomial time O(n^2) - one recursive call per input, but the recursive call is inside a loop
    //12. Binary Representation
        //Logarithmic time O(log(n)) - remaining input to analyze is cut in half with each recursive call

//14. Iterative Big O
    //1. Counting Sheep
        //Linear time O(n) - one loop through all the inputs
    //2. Power Calculator
        //Linear time O(n) - one loop through all the inputs
    //3. Reverse String
        //Linear time O(n) - one loop through all the inputs
    //4. nth Triangular
        //Linear time O(n) - one loop through all the inputs
    //5. String Splitter
        //Linear time O(n) - one loop through all the inputs
    //6. Fibonacci
        //Linear time O(n) - one loop through all the inputs
    //7. Factorial
        //Linear time O(n) - one loop through all the inputs

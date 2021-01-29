## Part 1

### Variables & Scoping
1) The script will print the number of prices passed in. Because `i` was declared using `var`, it has no block scope and is thus accessible outside of the for loop.

2) The script will print the `discountedPrice` of the last price in `prices`. Because `discountedPrice` was declared using `var`, it has no block scope and is thus accessible outside of the for loop.

3) The script will output the `finalPrice` of the last price in `prices`. Because `finalPrice` was declared using `var`, it has no block scope and is thus accessible outside of the for loop.

4) The function will return an array containing `[50,100,150]`. The function itself generates this array using `var`. It then continues to iteratively calculate the discounted values of each of the `prices` values with a discount of `discount` and stores these values into the array to return at the end of the function.

5) An error occurs. Because `i` was declared using `let`, its scope makes it only accessible within the block scope of the for loop.

6) An error occurs. Because `discountedPrice` was declared using `let`, its scope makes it only accessible within the block scope of the for loop.

7) The script will output the `finalPrice` of the last price in `prices`. In this case, the `console.log` command is within the block scope of this variable, allowing it to access its value.

8) The function will return an array containing `[50,100,150]`. The function itself generates this array using `var`. It then continues to iteratively calculate the discounted values of each of the `prices` values with a discount of `discount` and stores these values into the array to return at the end of the function. The array value, not the scoped variable itself, is returned, therefore allowing for the returned value to be accessed outside of the function's scope.

9) An error occurs. Because `i` was declared using `let`, its scope makes it only accessible within the block scope of the for loop.

10) An error occurs. Because `discountedPrice` was declared using `const`, its scope makes it only accessible within the block scope of the for loop.

11) The script will print 0 as `finalPrice` is within its scope, however the value within this constant cannot have changed during the runtime of the function due to it being cast as a `const`.

12) The function will return an array containing `[0,0,0]`. Due to the fact that `finalPrice` is a `const` with a value of 0 and `finalPrice` is the variable being used to push the "discounted" prices into the `discounted` array, the function, if it did not encounter any errors with assigning a new value to `finalPrice`, would load the constant value into the array on each iteration of the for loop.


### Data Types
13) Given the above Object, write the notation for:

    A.  Accessing the value of the name property in the student object
    
    `student.name`
    
    B.  Accessing the value of the Grad Year property in the student object
    
    `student["Grad Year"]`
  
    C.  Calling the function for the greeting property in the student object
    
    `student.greeting()`
  
    D.  Accessing the name property of the object in the Favorite Teacher property in student
    
    `student["Favorite Teacher"].name`
  
    E.  Access the first index in the array of the courseLoad property of the student object
    
    `student.courseLoad[0]`

### Basic Operators & Type Conversion 
14) Arithmetic

    A. '3' + 2
    
    > '32'
    
    A string conversion occurred as a result of the inclusion of the character '3' and the operator +. The + operator instead served to concatenate the second number after the first as opposed to numeric addition.
    
    B. '3' - 2
    
    > 1
    
    A numeric conversion occurred as a result of the - operator, subtracting the second numeric value from the first.
    
    C. 3 + null
    
    > 3
    
    A numeric conversion occurred as a result of the number 3 and the + operator, null serving the value of 0 in this equation, resulting in a sum of 0.
    
    D. '3' + null
    
    > '3null'
    
    A string conversion occurred as a result of the character '3' and the + operator, null being converted to the string 'null' and being concatenated onto the end of '3'.
    
    E. true + 3
    
    > 4
    
    A numeric conversion occurred due as a result of the numeric value 3 and operator +, true being converted to a value of 1 and added to the numeric value 3.
    
    F. false + null
    
    > 0
    
    A numeric conversion occurred as a result of the + operator. A similar behavior may be seen in the output of `true + null`, it outputing true's numeric value of 1.
    
    G. "3" + undefined
    
    > '3undefined'
    
    A string conversion occured as a result of the "3" string and the + operator, undefined being converted to the string 'undefined' and concatenated onto the end of "3".
    
    H. "3" - undefined
    
    > NaN
    
    A numeric conversion occured as a result of the - operator. undefined was converted to its value of NaN, resulting in the output being undefined.
    
15) Comparison

    A. '2' > 1
    
    > true
    
    Comparing different types in this case results in '2' being converted to its numeric equivalent and then compared to numeric 1.
    
    B. '2' < '12'
    
    > false
    
    As this is a string comparison, this is effectively comparing the first characters of both strings, '2' and '1'. As '2' > '1', the comparison evaluates to `false`.
    
    C. 2 == '2'
    
    > true
    
    As before, the comparison of different types resulted in '2' being converted to numeric 2 and then compared with numeric 2, making them both equal.
    
    D. 2 === '2'
    
    > false
    
    The === operator compares values without type comparison. As 2 is a numeric 2 and '2' is a string, which are not equivalent, the comparison evaluates to `false`.
    
    E. true == 2
    
    > false
    
    A numeric conversion occurs, resulting in `true` having a value of 1 when compared to 2. Despite the fact that this is technically a binary 1, and therefore equivalent to 2 were it converted accordingly, due to the fact that this is not so, the comparison evaluates to `false`.
    
    F. true === Boolean(2)
    
    > true
    
    The Boolean function converts 2 to a binary 1, which is equal to the binary 1 that true is converted to by numeric conversion in the comparison.
    
    
16) Explain the difference between the == and === operators.

== checks the equality between values with type conversion, and === checks the equality of values without any type conversion.

Ex:

> '2' ==  2 evaluates to true due to type conversion producing the equivalent statement 2 == 2
>
> '2' === 2 evaluates to `false` as the types of the two values do not match
>
> 2  === 2 evaluates to true as both numeric 2s are of the same type


### Conditionals
17)

> How are you?

The first if statment evaluates to `false` due to numeric 2 and numeric 1, which `true` becomes due to numeric conversion, are not equivalent. The second if statement evaluates to true as a result of 2, in binary, being 1, which is equivalent to `true`. Therefore, the else if statemnet is successfully entered while the final else statement is skipped over as a result.

### Loops
18) [See part1-question18.js]

### Functions
19) 

> [6, 8, 10]

This effectively calls the callback function on each of the items in the parameter array with a parameter function that returns x*2. In effect, it ends up generating `(array[i] + 2) * 2` for each value in the parameter array and passing the result to `newArr` to be returned.

20) [See part1-question20.js]

21)

> 1
> 
> 4
>
> 3
>
> 2

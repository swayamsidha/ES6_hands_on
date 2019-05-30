//higher order arrow function
//arrow function can be used inside higher order functions that take other functions as argument
mixed_arr = [1,4, 7, 23, 18, 32, 11, 9, 17, 37, 12, 41, 22]
ret_arr = mixed_arr.filter(item => 
    item % 2 != 0);

console.log(ret_arr);


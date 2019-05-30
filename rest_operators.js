//use of rest operators in function to take variable number of arguments
//using rest variable in a function we can take variable number of arguments
//for example the function that adds up all the arguments provided to it
add_up = (...args) => {
    //use any of the higher order functions to do operation
    //to add nummbers use reduce 
    console.log(args.length.toString()+" number of arguments passed");
    
    return args.reduce((a, b) => a + b, 0);
}

console.log(add_up(1,3,4,5,6,7,9));

console.log(add_up(22,32,12,5));

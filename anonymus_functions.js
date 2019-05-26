//arroww notation to write anonymus functions
addEvens = () => {
    evenArr = []
    for(let x = 0; x < 100; x++){
        if(x%2 == 0){
            evenArr.push(x);
        }
    }
    return evenArr;
};
console.log(addEvens());

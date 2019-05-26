//use parameterised arrow function
//the function takes a string as argument and
// counts number of each letter and returns letter with max occurence
letter_count = (_word) => {
    let count_dict = {};
    var word_arr = _word.split('');

    for(let i = 0; i < word_arr.length; i++){
        if(count_dict.hasOwnProperty(word_arr[i])){
            count_dict[word_arr[i]] += 1;
        }else{
            count_dict[word_arr[i]] = 1;
        }
    }
    let max_val = () =>{
        maximum = 0;
        max_ltr = '';
        for(i of word_arr){
            if(count_dict[i] > maximum){
                maximum = count_dict[i];
                max_ltr = i;
            }
        }
        return max_ltr;
    } 
    return max_val();//returns max value

};
var _word = 'aabbbbdmmvnnc';
console.log(letter_count(_word));
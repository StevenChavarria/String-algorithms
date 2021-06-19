function countWords(text) {
    return text.split(' ').length;
}

const text = 'Loren ipsun dolor sit amen';
console.log('The number of words in the text are: ' + countWords(text));


function palindrome(word) {
    word = word.replace(/\W/g, '');
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - i - 1])
            return false;
    }
    return true;
}

const word = "reconocer";
if(palindrome(word)){
   console.log('The word: '+word+' is palindrome');
}else{
    console.log('The word: '+word+' is NOT a palindrome');
}


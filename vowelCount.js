function hasMoreVowels(word) {
    let vowelCount = 0
    let consonant = 0
    let vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(let char of word) {
        if (vowels.includes(char)) {
            vowelCount++
        } else {
            consonant++
        }
    }
    if ( vowelCount <= consonant) {
        return false
    } else {
        return true
    }
}

console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('graph'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('Aal'))
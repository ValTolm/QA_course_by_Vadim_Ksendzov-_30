// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for(let i = 1; i <= 10; i++) {
    let degree = Math.pow(2, i);
    console.log(degree)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function raithToTheNthPower (n) {
    var degree = Math.pow(2, n);
    console.log(degree)
}
raithToTheNthPower(0);
raithToTheNthPower(10);
raithToTheNthPower(1);
raithToTheNthPower(-3);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
//чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

function printSmile(smile) {
    for(let i = 1; i <= 5; i++) {
        console.log(smile.repeat(i));
    }
}

printSmile(":)")

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль 
//(как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile2(smile, numberOfRows){
    for(let i = 1; i<=numberOfRows; i++){
     
        console.log(smile.repeat(i));
    }
}
printSmile2(":)", 5)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
//сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    var vowelsList = word.match(/[aeiouy]/gi);
    var vowelsCount = vowelsList === null ? 0 : vowelsList.length;
    var consonantsList = word.match(/[bcdfghjklmnpqrstvwxz]/gi);
    var consonantsCount = consonantsList === null ? 0 : consonantsList.length;
    console.log(`Слово ${word} состоит из ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}

getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-List");

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'


function isPalindrom(word){
    var reverseWord = word.split("").reverse().join("")

    console.log(word.toLowerCase() === reverseWord.toLowerCase())
}

isPalindrom("abba");
isPalindrom("Abba");

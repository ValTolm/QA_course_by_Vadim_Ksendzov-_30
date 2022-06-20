let item_1;
item_1 =5;

let item_2;
item_2 =3;

let item_3;
item_3 = item_1 + item_2;
console.log(item_3);

let item_4;
item_4 = "Yolochka";
console.log(item_4);

console.log(item_3 + item_4); //8Yolochka
console.log(item_3 * item_4); //NaN

let item_5;
item_5 = item_3;

let item_6;
let item_6_type;

item_6 = 15;
item_6_type = typeof(item_6);
console.log("item_6 == " + item_6 + ", " + "item_6_type == " + item_6_type);

let item_7 = +item_6;
// console.log(typeof(item_7))

let item_7_type; 
item_7_type = typeof(item_7);
console.log("item_7 == ", item_7, ",", "item_7_type == ", typeof(item_7));

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

if(age_1 < age_2){
    console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
} else if(age_1 >= age_2 & age_1 < age_3) {
    console.log("Welcome  !");
} else if( age_1 > age_3){
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}

//1*
const checkAge = function(age) {
    var age_1 = age;
    var age_2 = 18;
    var age_3 = 60;
    if(age_1 < age_2){
        console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
    } else if(age_1 >= age_2 & age_1 < age_3) {
        console.log("Welcome  !");
    } else if( age_1 > age_3){
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}
checkAge(17);
checkAge(18);
checkAge(61);

//2*

const checkAge2 = function(age) {
    var age_1 = age;
    var age_2 = 18;
    var age_3 = 60;
    if(!(typeof(age_1) == "number")){
        console.error('Not a number!');
    } else if(age_1 < age_2){
        console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
    } else if(age_1 >= age_2 & age_1 < age_3) {
        console.log("Welcome  !");
    } else if( age_1 > age_3){
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}
checkAge2("17");
checkAge2(18);
checkAge2(61);

//3* 
const checkAge3 = function(age) {
    var age_1 = parseFloat(age);
    var age_2 = 18;
    var age_3 = 60;
    // if(!(typeof(age_1) == "number")){
    //     console.error('Not a number!');
    // } else 
    if(age_1 < age_2){
        console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
    } else if(age_1 >= age_2 & age_1 < age_3) {
        console.log("Welcome  !");
    } else if( age_1 > age_3){
        console.log("Keep calm and look Culture channel");
    } else {
        console.error('Not a number!');
    }
}
checkAge3("ааа");
checkAge3(18);
checkAge3(61);
checkAge3("");
checkAge3(" ");
checkAge3(0);

//3* вариант 2
const checkAge32 = function(age) {
    var age_1 = age;
    var age_2 = 18;
    var age_3 = 60;
    function checkAge(age_1){
        if(age_1 < age_2){
            console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
        } else if(age_1 >= age_2 & age_1 < age_3) {
            console.log("Welcome  !");
        } else if( age_1 > age_3){
            console.log("Keep calm and look Culture channel");
        }
    }
    if(typeof(age_1) == "number"){
        checkAge(age_1)
    } else {
        var changeAgeType = parseFloat(age_1)
        if(Number(changeAgeType)){
            checkAge(changeAgeType);
        } else {
            console.error('Not a number!');
        }
    }
}
checkAge32("ааа");
checkAge32("181");
checkAge32(61);
checkAge32("");
checkAge32(" ");
checkAge32(0);

//3* 3 вариант
const checkAge33 = function(age) {
    var age_1 = parseFloat(age);
    var age_2 = 18;
    var age_3 = 60;
    function checkAge(age_1){
        if(age_1 < age_2){
            console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
        } else if(age_1 >= age_2 & age_1 < age_3) {
            console.log("Welcome  !");
        } else if( age_1 > age_3){
            console.log("Keep calm and look Culture channel");
        }
    }

    if(isNaN(age_1)) {
        console.error('Not a number!')        
    } else {
        checkAge(age_1)
    }
}
checkAge33("ааа");
checkAge33("181");
checkAge33(61);
checkAge33("");
checkAge33(" ");
checkAge33(0);

//3* вариант от ментора if(!age || isNaN(age)) !!! не работает
const checkAge34 = function(age) {
    var age_1 = age;
    var age_2 = 18;
    var age_3 = 60;
    function checkAge(age_1){
        if(age_1 < age_2){
            console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
        } else if(age_1 >= age_2 & age_1 < age_3) {
            console.log("Welcome  !");
        } else if( age_1 > age_3){
            console.log("Keep calm and look Culture channel");
        }
    }

    if(!age_1 || isNaN(age_1)) {
        console.error('Not a number!')        
    } else {
        checkAge(age_1)
    }
}
checkAge34("ааа");
checkAge34("181");
checkAge34(61);
checkAge34("");
checkAge34(" ");
checkAge34(0);

//3* вариант без преобразования заранее


//4* см. отдельный файл
var age = prompt("Введите свой возраст:");
const checkAge4 = function(age) {
    var age_1 = +age;
    var age_2 = 18;
    var age_3 = 60;
    if(!(typeof(age_1) == "number")){
        console.error('Not a number!');
    } else 
    if(age_1 < age_2){
        console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2)
    } else if(age_1 >= age_2 & age_1 < age_3) {
        console.log("Welcome  !");
    } else if( age_1 > age_3){
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}
checkAge4(age);


let sw = 2;
switch (sw) {
    case 0: console.log('Вы ввели число 0');
        break;
    case 1: console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;

}

let r = 11;
switch (r) {
    case 10:
        console.log('если больше   то увеличьте его на 100  ');
        break;


    default: console.log('иначе уменьшите на 30');
        break;

}

let sw2 = 7;
switch (sw2) {

    case 2: console.log('Если оно четное, то уменьшите его в 2 раза');
        break;
    default: console.log('если оно не чЁтное,  то увеличьте в 3 раза');



}


let sw3 = 20;
switch (sw3) {
    case 50: console.log('Если оно не меньше 50, то выведите квадрат этого числа');
        break;

    case 0:
        console.log('если же это число больше 10 и меньше 30, то выведите ноль');
        break;
    default: console.log("Ошибка");


}

let dd = 34;
let de = 12;
switch (`${dd === de}`) {
    case dd > de: console.log('dd больше чем de');
        break;
    case dd < de: console.log('de больше чем dd');
        break;

}







let wer = 10;
let wea = 9;
switch (`${wer + wea}`) {
    case 20: console.log(' Да, если они отличаются не более чем на 20');

    default: console.log('  Нет');
}



let wes4 = 99;
let wes3 = 88;

switch (`${wes4 + wes3}`) {
    case 100: console.log(' Да ,если они отличаются на 100');
        break;

    default: console.log('нет ')

}



let e = 25;
switch (25) {

    case 'summer': console.log('месяц');
        break;
    default: console.log('Ошибка');
}

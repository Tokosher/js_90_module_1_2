/***** Інструкція if та її варіації *****/
// const number = 10;
// if (number === 10) {
//     console.log('Condition is true');
// }





// if (number === 10) {
//     console.log('Condition is true');
// } else {
//     console.log('Condition is false');
// }




// if (number === 1) {
//     console.log('Condition 1 is true');
// } else if (number > 10 && number < 15) {
//     console.log('Number is range of 10 and 15');
// } else if (number === 10) {
//     console.log('Number is equal 10');
// } else {
//     console.log('default');
// }




/***** Інструкція switch *****/
// const fruitId = 6;
//
// let fruit;
// switch (fruitId) {
//     case 1: // fruitId === 1
//         fruit = 'banana';
//         break;
//     case 2:
//         fruit = 'apple';
//         break;
//     case 3:
//         fruit = 'coconut';
//         break;
//     case 4:
//         fruit = 'orange';
//         break;
//     default:
//         alert('Fruit is not defined');
// }
//
// if (fruit) {
//     console.log(fruit);
// }





/***** Тернарний оператор *****/

// condition ? true : false

// const value = 15;
// let message;
//
// if (value > 10 && value < 20) {
//     message = 'В діапазоні між 10 та 20';
// } else {
//     message = 'Не входить в діапазон';
// }
//
// value > 10 && value < 20 ? message = 'В діапазоні між 10 та 20' : message = 'Не входить в діапазон';
//
//
// console.log(message)

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

// const number = 5;
// console.log(number);

// if (true) {
//     const hello = 'Hello';
//     console.log(hello)
// }

// if (true) {
//     console.log(number)
// }
// let hello;
//
// if (true) {
//     hello = 'Hello';
// }
// console.log(hello)

// if (true) {
//     if (true) {
//         number = 15;
//     }
//     let number = 10;
//     console.log(number)
// }

// let message = 'hello';
// if (true) {
//     message = 'Hola';
//     if (true) {
//         message = 'Привіт!';
//     }
// }
//
// console.log(message)

// hello = 'hey';
// let hello;



// var
// var number = 5;
// console.log(number);

// if (true) {
//     var hello = 'Hello';
// }
// console.log(hello);
//
// console.log(number);
// var number = 10;
// console.log(number);

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }

    // increment
// let number = 5;
// number = number + 1;
// number += 1;
// number++;
// console.log(number);

// decrement
// let number = 5;
// number = number - 1;
// number -= 1;
// number--

// console.log(number)

// const str = 'Hello world';
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }




/***** Цикл while *****/

// while (condition) {
//   // (statement)
// }

// const str = 'Hello world';
// let i = 0;
//
// while (i < 5) {
//     console.log(str);
//     i++;
// }





/***** Цикл do while *****/

// do {
//   // statement
// } while (condition);

// const str = 'Hello world';
// let i = 10;
//
// do {
//     console.log(str);
//     i++;
// } while (i < 5)




// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати


// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt('What color?');
// console.log(message);
// if (message) {
//     message = message.toLowerCase();
// }
// console.log(message);
//
// let action;
// switch (message) {
//     case 'red':
//         action = 'stop';
//         break;
//     case 'yellow':
//         action = 'ready';
//         break;
//     case 'green':
//         action = 'go';
//         break;
//     default:
//         action = 'be careful';
// }
// alert(action);

// functions
// function hello () {
//     console.log('Hello world!')
// }
//
// hello();

// function printMessage (message) {
//     console.log(message);
// }
//
// printMessage('Привіт, друже!');
// printMessage('Привіт!');

// function sayHello (message, name) {
//     console.log(`${name}, ${message}`);
// }
//
// sayHello('hello!', 'Alex');

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//     let message = prompt(text);
//
//     if (message) {
//         message = message.toLowerCase();
//     }
//
//     return answer === message;
// }
//
// console.log(check('Хоч не літак, а крилатий, Без крил не може працювати.', 'вітряк'));
// console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)


// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)





// Task - 3
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//     const vowels = "aeiou";

// }
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8
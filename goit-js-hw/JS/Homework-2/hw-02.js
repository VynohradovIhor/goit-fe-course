// // задание 1
// // напиши скрипт со следующим функционалом:

// // при загрузке страницы пользователю предлагается в prompt ввести число.ввод сохраняется в 
//    переменную input и добавляется в массив чисел numbers.
// // операция ввода числа пользователем и сохранение в массив 
//    продолжается до тех пор, пока пользователь не нажмет cancel в prompt.
// // после того как пользователь прекратил ввод нажав cancel, 
//    если массив не пустой, необходимо посчитать сумму всех элементов 
//    массива и записать ее в переменную total.используй цикл
// // for или
// // for... of .после чего в консоль выведи строку 'общая сумма чисел равна [сумма]'.
// 🔔делать проверку того, что пользователь ввел именно число, а не произвольный набор 
// символов, не обязательно.если хочешь, в случае некорректного ввода, показывай alert с текстом 
// 'было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, 
// после чего снова пользователю предлагается ввести число в prompt.

'use strict'

const numbers = [];
let total = 0;
let i;
while (true) {
    let input = prompt("Введите число");
    if (input == null) {
        break;
    }
    numbers.push(Number.parseInt(input));
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз')
    }
}
if (numbers.length > 0) {
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}`);
}

// Задание 2
// Напиши скрипт имитирующий авторизацию пользователя.
// // Есть массив паролей зарегистрированных пользователей passwords.
// При посещении страницы, необходимо попросить пользователя ввести свой пароль, 
// после чего проверить содержит ли массив passwords пароль введенный пользователем.
// Пароль можно ввести не верно всего n раз, кол - во хранится в переменной attemptsLeft.
// // 🔔 Используй цикл
// // while или do ...
// //     while
// // Если был введен пароль который есть в массиве passwords, вывести alert с текстом 'Добро пожаловать!'
// // и прекратить спрашивать пароль в цикле.
// // Если был введен не существующий пароль, отнять от лимита попыток единицу, 
// вывести alert с текстом 'Неверный пароль, у вас осталось n попыток', где n это оставшееся количество попыток.
// // Если закончились попытки, вывести alert с текстом 'У вас закончились попытки, 
// аккаунт заблокирован!'
// // Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль, 
// не кончатся попытки или пока пользователь не нажмет Cancel в prompt.

'use strict'
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let currentInput;
let users = false;

do {
    currentInput = prompt("Введите пароль");
    if (currentInput === null) {
        break;
    }
    attempts -= 1;
    for (let psw of passwords) {
        if (currentInput === psw) {
            alert("Добро пожаловать!");
            goodGess = true;
            break;
        }
    }
    if (!users) {
        if (attempts > 0) {
            alert(`Неверный пароль. У Вас осталось ${attempts} попыток`);
        } else {
            alert("У вас закончились попытки, аккаунт заблокирован!");
        }
    }
} while ((attempts > 0) && (!users));
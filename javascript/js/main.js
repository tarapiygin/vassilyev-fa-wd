// Задача 1
// https://github.com/VladimirAndropov/fa-wd-practice-javascript/tree/main/javascript#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F

function calculator() {
  // Получаем ввод пользователя
  const input = prompt("Введите выражение (например, 1 + 1 или 1.5 * 2.5):");

  // Регулярное выражение для разбора ввода, поддерживающее дробные числа
  const regex = /(\d+(\.\d+)?)\s*([\+\-\*\/])\s*(\d+(\.\d+)?)/;
  const match = input.match(regex);

  if (!match) {
    alert("Неверный формат ввода. Пожалуйста, введите выражение в формате: число оператор число (например, 1 + 1 или 1.5 * 2.5).");
    return;
  }

  // Извлекаем числа и оператор
  const num1 = parseFloat(match[1]);
  const operator = match[3];
  const num2 = parseFloat(match[4]);

  let result;

  // Выполняем соответствующую операцию
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("Деление на ноль невозможно.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Неизвестный оператор.");
      return;
  }
  alert(`Результат: ${result}`);
}

function guessNumber() {
  const input = prompt("Введите результат умножения задуманного числа на 2 и добавления 7:");

  const result = parseFloat(input);

  if (isNaN(result)) {
    alert("Пожалуйста, введите корректное число.");
    return;
  }

  const originalNumber = (result - 7) / 2;

  alert(`Вы задумали число: ${originalNumber}`);
}

function displayUserAge() {
  const userName = prompt("Введите ваше имя:");

  const birthYear = prompt("Введите ваш год рождения:");

  const birthYearNumber = parseInt(birthYear, 10);

  // Проверяем, что год рождения является числом
  if (isNaN(birthYearNumber) || birthYearNumber <= 0) {
    alert("Пожалуйста, введите корректный год рождения.");
    return;
  }

  const currentYear = new Date().getFullYear();

  const age = currentYear - birthYearNumber;

  if (age < 0) {
    alert("Пожалуйста, введите корректный год рождения.");
    return;
  }
  document.write(`<p class="m-auto text-center">${userName}: ${age}</p>`);
}

// calculator();
// guessNumber();
// displayUserAge();

// Задача 2
// https://github.com/VladimirAndropov/fa-wd-practice-javascript/tree/main/javascript#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-1

// Квиз блок-схема
function runQuiz() {
  let correctAnswers = 0;

  const riddle1 = "Что идет, не двигаясь с места?";
  const correctAnswer1 = "время";
  const userAnswer1 = prompt(riddle1);
  if (userAnswer1.toLowerCase() === correctAnswer1) {
    alert("Верно :)");
    correctAnswers += 1;
  } else {
    alert("Неверно :(");
  }

  const riddle2 = "Что можно увидеть с закрытыми глазами?";
  const correctAnswer2 = "сон";
  const userAnswer2 = prompt(riddle2);
  if (userAnswer2.toLowerCase() === correctAnswer2) {
    alert("Верно :)");
    correctAnswers += 1;
  } else {
    alert("Неверно :(");
  }
  alert(`Отгадано правильно: ${correctAnswers}`);
}

// Функция для подсчета от 1 до 10
function countToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Еще по одной
function drinkingPrompt() {
  let response;
  do {
    response = prompt("Еще по одной? (Введите '1' для завершения)");
  } while (response !== '1');
  alert("Спасибо, вечеринка закончена!");
}

// Функция для вычисления факториала
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  alert(`Факториал числа ${n} равен ${result}`);
}

// Проверка на полиндром
function checkSurnamePalindrome() {
  // Получаем фамилию пользователя
  const surname = prompt("Введите вашу фамилию:");

  // Преобразуем строку в нижний регистр и удаляем пробелы
  const cleanedStr = surname.toLowerCase().replace(/\s+/g, '');

  // Проверяем, является ли строка палиндромом
  const reversedStr = cleanedStr.split('').reverse().join('');

  if (cleanedStr === reversedStr) {
    alert("Ваша фамилия является палиндромом.");
  } else {
    alert("Ваша фамилия не является палиндромом.");
  }
}

// Нахождение простых чисел
function findAndPrintFirstNPrimes(n) {
  // Функция для проверки, является ли число простым
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  // Нахождение первых n простых чисел
  const primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  // Вывод результатов в журнале (console)
  console.log(`Первые ${n} простых чисел: ${primes.join(', ')}`);
}

// runQuiz();
// countToTen();
// drinkingPrompt();
// factorial(8);
// checkSurnamePalindrome();

// Вызов функции для первых 8 простых чисел
// findAndPrintFirstNPrimes(8);


// Задача 3
// https://github.com/VladimirAndropov/fa-wd-practice-javascript/tree/main/javascript#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-2

// Сформировать массив из 15 целых чисел, выбранных случайным образом из интервала [-10, 30]. Найти среднее арифметическое положительных элементов.
function generateArrayAndCalculateAverage() {
  // Создаем массив из 15 случайных целых чисел в диапазоне [-10, 30]
  const array = Array.from({ length: 15 }, () => Math.floor(Math.random() * 41) - 10);

  // Находим положительные элементы
  const positiveElements = array.filter(num => num > 0);

  // Вычисляем сумму положительных элементов
  const sumOfPositiveElements = positiveElements.reduce((sum, num) => sum + num, 0);

  // Вычисляем среднее арифметическое положительных элементов
  const average = positiveElements.length > 0 ? sumOfPositiveElements / positiveElements.length : 0;

  // Выводим массив и результат в консоль
  console.log('Сгенерированный массив:', array);
  console.log('Среднее арифметическое положительных элементов:', average);
}

// generateArrayAndCalculateAverage();

// Заменить отрицательные элементы в числовом массиве из n чисел (n>10) их квадратами, оставив остальные без изменения.
function replaceNegativesWithSquares(array) {
  // Проверяем, что длина массива больше 10
  if (array.length <= 10) {
    console.log('Длина массива должна быть больше 10');
    return;
  }

  // Проходим по каждому элементу массива
  for (let i = 0; i < array.length; i++) {
    // Если элемент отрицательный, заменяем его квадратом
    if (array[i] < 0) {
      array[i] = array[i] ** 2;
    }
  }

  // Возвращаем измененный массив
  return array;
}

// Пример
// const array = [12, -7, 5, -3, 14, -1, 8, -10, 20, 0, -6, 15];
// console.log('Исходный массив:', array);
// const modifiedArray = replaceNegativesWithSquares(array);
// console.log('Измененный массив:', modifiedArray);

// В заданном массиве найти среднее арифметическое положительных чисел, среднее арифметическое отрицательных чисел и число нулей.
function analyzeArray(array) {
  let positiveSum = 0;
  let positiveCount = 0;
  let negativeSum = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Проходим по каждому элементу массива
  for (let num of array) {
    if (num > 0) {
      positiveSum += num;
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  // Вычисляем среднее арифметическое
  const positiveAverage = positiveCount > 0 ? positiveSum / positiveCount : 0;
  const negativeAverage = negativeCount > 0 ? negativeSum / negativeCount : 0;

  // Выводим результаты
  console.log('Среднее арифметическое положительных чисел:', positiveAverage);
  console.log('Среднее арифметическое отрицательных чисел:', negativeAverage);
  console.log('Число нулей:', zeroCount);

  // Возвращаем результаты
  return {
    positiveAverage: positiveAverage,
    negativeAverage: negativeAverage,
    zeroCount: zeroCount
  };
}

// Пример
// const array = [1, -2, 3, 0, -4, 5, 0, -6, 7, 0, -8, 9];
// const result = analyzeArray(array);
// console.log(result);

// Организовать симулятор, который выдает только три случайных значения – красный, черный и белый (0, 1, 2).
// Запустить симуляцию 1000 000 раз. Узнать, какое максимальное число раз выпадало красное значение.
function simulateColors() {
  const RED = 0;
  const BLACK = 1;
  const WHITE = 2;

  const iterations = 1000000;
  let redCount = 0;
  let maxRedCount = 0;

  // Симуляция 1000000 раз
  for (let i = 0; i < iterations; i++) {
    const randomValue = Math.floor(Math.random() * 3); // Случайное число 0, 1 или 2

    if (randomValue === RED) {
      redCount++;
    } else {
      // Если текущая серия красного прерывается, проверяем и обновляем maxRedCount
      if (redCount > maxRedCount) {
        maxRedCount = redCount;
      }
      redCount = 0;
    }
  }

  // Проверяем последнюю серию
  if (redCount > maxRedCount) {
    maxRedCount = redCount;
  }

  // Вывод максимального числа раз, когда выпадало красное значение
  console.log(`Максимальное число раз, когда выпадало красное значение подряд: ${maxRedCount}`);

  return maxRedCount;
}

// Запуск симуляции
// simulateColors();

// Задача 4
// https://github.com/VladimirAndropov/fa-wd-practice-javascript/tree/main/javascript#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-3
// Создайте объект – информация о покупателе (не менее 5 строк) и выведите три из них.
const user = {
  name: "Джон",
  age: 30,
  email: "test@mail.ru",
  country: "Russia",
  city: "Moscow"
};
user.printUserFields = function () {
  console.log(this.name);
  console.log(this.age);
  console.log(this.email);
};
// user.printUserFields();
// Создайте объекты пользователи, заказы и рестораны с соответствующими значениями.
const order = {
  id: 1,
  sum: 100,
  position: "Tomato"
}
order.printInfo = function () {
  if (this.sum > 99) console.log(`Order. ID: ${this.id} Sum:${this.sum}`);
}

const cafe = {
  name: "Pizza",
  numberOfVisitors: 100
}
cafe.printInfo = function () {
  if (this.numberOfVisitors > 99) console.log(`cafe. name: ${this.name} numberOfVisitors:${this.numberOfVisitors}`);
}

function Student(name, age) {
  this.name = name;
  this.age = age;

  this.sayHi = function () {
    alert("Меня зовут: " + this.name);
  };

  this.sayAge = function () {
    alert(`Мне ${this.age} лет!`);
  };
}

let student = new Student("Вася", 20);

student.sayHi(); // Меня зовут: Вася
student.sayAge(); // Мне 20 лет!

// Задача 5
// https://github.com/VladimirAndropov/fa-wd-practice-javascript/tree/main/javascript#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-4

class User {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}
const u1 = new User('Den');
u1.printName();

class ReverseName {
  constructor(name) {
    this.name = name;
  }
  reverseName() {
    return this.name.split('').reverse().join('');
  }
}

// Задача 6
const calculatorFunc = () => {
  // Получаем ввод пользователя
  const input = prompt("Введите выражение (например, 1 + 1 или 1.5 * 2.5):");

  // Регулярное выражение для разбора ввода, поддерживающее дробные числа
  const regex = /(\d+(\.\d+)?)\s*([\+\-\*\/])\s*(\d+(\.\d+)?)/;
  const match = input.match(regex);

  if (!match) {
    alert("Неверный формат ввода. Пожалуйста, введите выражение в формате: число оператор число (например, 1 + 1 или 1.5 * 2.5).");
    return;
  }

  // Извлекаем числа и оператор
  const num1 = parseFloat(match[1]);
  const operator = match[3];
  const num2 = parseFloat(match[4]);

  let result;

  // Выполняем соответствующую операцию
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("Деление на ноль невозможно.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Неизвестный оператор.");
      return;
  }
  alert(`Результат: ${result}`);
}
// В виде стрелочной функции реализуйте функцию, вычисляющую количество дней до нового года.
const daysUntilNewYear = () => {
  // Получаем текущую дату
  const today = new Date();

  // Получаем дату следующего Нового года
  const nextYear = today.getFullYear() + 1;
  const newYearDate = new Date(nextYear, 0, 1); // Январь (месяц 0) 1 число следующего года

  // Вычисляем разницу в миллисекундах между двумя датами
  const diffInMilliseconds = newYearDate - today;

  // Преобразуем разницу в днях
  const millisecondsInOneDay = 24 * 60 * 60 * 1000; // 24 часа * 60 минут * 60 секунд * 1000 миллисекунд
  const daysUntilNewYear = Math.ceil(diffInMilliseconds / millisecondsInOneDay);

  return daysUntilNewYear;
};

// Создайте массив и напишите стрелочные функции для него: суммирование всех элементов, выявить все четные, умножить каждый элемент на 2.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Стрелочная функция для суммирования всех элементов
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

// Стрелочная функция для выявления всех четных чисел
const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

// Стрелочная функция для умножения каждого элемента на 2
const multiplyByTwo = arr => arr.map(num => num * 2);

// Создайте массив с e-mail. Организуйте фильтр на странице html по названию почты.
const emails = [
  'user1@gmail.com',
  'user2@yahoo.com',
  'user3@hotmail.com',
  'user4@gmail.com',
  'user5@yahoo.com',
  'user6@outlook.com',
  'user7@gmail.com',
  'user8@yahoo.com',
  'user9@hotmail.com',
  'user10@outlook.com'
];

// Функция для отображения e-mail адресов
const displayEmails = (filteredEmails) => {
  const emailList = document.getElementById('emailList');
  emailList.innerHTML = '';
  filteredEmails.forEach(email => {
    const li = document.createElement('li');
    li.textContent = email;
    emailList.appendChild(li);
  });
};
// Изначально отображаем все e-mail адреса
displayEmails(emails);

// Функция фильтрации e-mail адресов
const filterEmails = () => {
  const filter = document.getElementById('emailFilter').value.toLowerCase();
  const filteredEmails = emails.filter(email => email.includes(filter));
  displayEmails(filteredEmails);
};

// Добавляем обработчик события для поля ввода
document.getElementById('emailFilter').addEventListener('input', filterEmails);

// Задача 9
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const nickname = document.getElementById('nickname').value;
  const password = document.getElementById('password').value;

  // Валидация пароля
  if (password.length < 6) {
    document.getElementById('password').classList.add('is-invalid');
  } else {
    document.getElementById('password').classList.remove('is-invalid');
    // Сохранение данных (например, в localStorage)
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('password', password);
    alert('Login successful!');
  }
});

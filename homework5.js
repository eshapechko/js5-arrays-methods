// DESCRIPTION 1
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

const array = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"];

function removeEveryOther(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

console.log(array);
console.log(removeEveryOther(array));

// DESCRIPTION 2
// Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата.
// Порядок последовательности должен оставаться неизменным.
const number = [5, 7, 9, 5, 3, 1, 3, 5, 9];

function distinct(a) {
  return a.filter((item, index) => a.indexOf(item) === index);
}

console.log(distinct(number));

// DESCRIPTION 3
// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
// Пример [1,-4,7,12] => 1 + 7 + 12 = 20
// Примечание: если нечего суммировать, сумма по умолчанию равна 0.

let num = [1, -4, 7, 12];

function positiveSum(arr) {
  return arr.filter((element) => element >= 0).reduce((a, b) => a + b, 0);
}

console.log(positiveSum(num));

// DESCRIPTION 4
// Завершите метод, который принимает последовательность объектов с двумя ключами: страна или государство и столица. Ключи могут быть символами или строками.
// Метод должен возвращать массив предложений, объявляющих государство или страну и ее столицу.
// Examples

// state_capitals = [{ state: "Maine", capital: "Augusta" }];
// capital(state_capitals)[0]; // returns "The capital of Maine is Augusta"

// country_capitals = [{ country: "Spain", capital: "Madrid" }];
// capital(country_capitals)[0]; // returns "The capital of Spain is Madrid"

// capital(mixed_capitals)[1]; // returns "The capital of Spain is Madrid"
let mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];

function capital(capitals) {
  return capitals.map(
    (element) =>
      `The capital of ${element.state || element.country} is ${element.capital}`
  );
}

console.log(capital(mixed_capitals));

// DESCRIPTION 5:
// Возвращает массив, содержащий числа от 1 до N, где N - заданное значение.
// Замените определенные значения, если выполняется одно из следующих условий:
// Если значение кратно 3: используйте значение "Fizz".
// Если значение кратно 5: используйте значение "Buzz".
// Если значение кратно 3 и 5: используйте значение "FizzBuzz".
// N никогда не будет меньше 1.

// Пример вызова метода:

// fizzbuzz(3) --> [1, 2, "Fizz"].

function fizzbuzz(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let temp = "";
    if (i % 5 === 0 && i % 3 === 0) {
      temp += "FizzBuzz";
    } else if (i % 3 === 0) {
      temp += "Fizz";
    } else if (i % 5 === 0) {
      temp += "Buzz";
    }
    res.push(temp || i);
  }
  return res;
}

console.log(fizzbuzz(20));

// DESCRIPTION 6
// Дана строка слов, верните длину самого короткого слова (слов).
// Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.

let words = "привет, work, cat, здравствуйте Маша, банан, манго";
let str = "The cat is similar in anatomy to the other felid species";

function findShort(s) {
  let array = s.split(" ").sort((a, b) => a.length - b.length);
  return array[0].length;
}

console.log(findShort(words));
console.log(findShort(str));

// DESCRIPTION 7
// Добро пожаловать. В этом ката вам предлагается возвести в квадрат каждую цифру числа и объединить их.

// Например, если пропустить 9119 через функцию, то получится 811181, так как 92 равно 81, а 12 равно 1.

// Примечание: функция принимает целое число и возвращает целое число.

function squareDigits(num) {
  num = num.toString();

  let digits = num
    .split("")
    .map((item) => item ** 2)
    .join("");

  console.log(+digits);
}

squareDigits(5412);
squareDigits(1896);
squareDigits(0);

// DESCRIPTION 8
// Создайте функцию inter, получающую 2 множества в качестве аргументов и возвращающую новое множество как результат пересечения этих двух множеств.

// Examples:
// A = new Set([1,2]);
// B = new Set([2,3]);

// C = inter(A,B) // -> {2}

let A = new Set([1, 2]),
  B = new Set([2, 3]),
  C = new Set([2]);

function inter(s1, s2) {
  let intersect = new Set(
    [...new Set(s1)].filter((item) => new Set(s2).has(item))
  );

  console.log(intersect);
}

inter(A, A);
inter(A, B);
inter(B, C);

// DESCRIPTION 9
// Учитывая смешанный массив числовых и строковых представлений целых чисел, сложите нестроковые целые числа и вычтите их из общего числа строковых целых чисел.
// Верните в виде числа.
let arr = [10, 3, "7", "3"];

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}

console.log(divCon(arr));

// DESCRIPTION 10
// Учитывая массив целых чисел, найдите то, которое встречается нечетное число раз.

// Всегда будет только одно целое число, которое встречается нечетное количество раз.

// Примеры
// [7] должно вернуть 7, потому что оно встречается 1 раз (что нечетно).
// [0] должно возвращать 0, потому что оно встречается 1 раз (что нечетно).
// [1,1,2] должно вернуть 2, потому что оно встречается 1 раз (что нечетно).
// [0,1,0,1,0] должно вернуть 0, потому что оно встречается 3 раза (что нечетно).
// [1,2,2,2,3,3,3,4,3,3,3,2,2,1] должно вернуть 4, потому что оно встречается 1 раз (что нечетно).

let some1 = [0, 1, 0, 1, 0];
let some = [1, 2, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function findOdd(a) {
  const count = (arr, val) => arr.filter((item) => item === val).length;
  let target = 0;
  a.forEach((arrnum) => {
    if (count(a, arrnum) % 2 !== 0) {
      target = arrnum;
    }
  });
  return target;
}

console.log(findOdd(some));
console.log(findOdd(some1));

// DESCRIPTION 11
// Вам дан массив (длина которого должна быть не менее 3, но может быть и очень большой), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением единственного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает это "исключение" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let evens = [];
  let odds = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evens.push(integers[i]);
    } else {
      odds.push(integers[i]);
    }
  }
  let elen = evens.length;
  let olen = odds.length;

  if (elen > olen) {
    return odds[0];
  } else {
    return evens[0];
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// DESCRIPTION 12
// zipWith принимает функцию и два массива и застегивает массивы вместе, применяя функцию к каждой паре значений.
// Значением функции является один новый массив.

// Если массивы имеют неодинаковую длину, то на выходе будет только тот массив, который короче.
// (Значения более длинного массива просто не используются).

// Входы не должны быть изменены.
// Examples
// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.

function zipWith(fn, a0, a1) {
  let arr = [];
  const short = Math.min(a0.length, a1.length);
  for (let i = 0; i < short; i++) {
    arr.push(fn(a0[i], a1[i]));
  }
  return arr;
}

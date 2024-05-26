//2016

//1

// const array = [1, 2, 3, 4, 5];
// console.log(array.includes(2)); // Output: true
// console.log(array.includes(6)); // Output: false


//2017

//1

// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.values(obj)); // Output: [1, 2, 3]

//2

// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2], ["c", 3]]

//3

// const obj = {
//     property1: 42
//   };

//   const descriptors = Object.getOwnPropertyDescriptors(obj);
//   console.log(descriptors);
// Output:
// {
//   property1: {
//     value: 42,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }


//2018

//1

// const regex = /foo.bar/s;
// const str = 'foo\nbar';
// console.log(regex.test(str)); // Output: true

//2

// const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const match = regex.exec('2024-03-29');
// console.log(match.groups.year); // Output: 2024
// console.log(match.groups.month); // Output: 03
// console.log(match.groups.day); // Output: 29

//3

// const regex = /\p{Sc}/u; // Matches any currency symbol
// console.log(regex.test('$')); // Output: true
// console.log(regex.test('€')); // Output: true
// console.log(regex.test('¥')); // Output: true

//4

// const regex = /(?<=foo)bar/;
// console.log(regex.test('foobar')); // Output: true
// console.log(regex.test('bar')); // Output: false

//2019

//1

// const nestedArray = [1, 2, [3, 4, [5, 6]]];
// const flattenedArray = nestedArray.flat();
// console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]


//2

// const array = [1, 2, 3];
// const doubledArray = array.flatMap(x => [x, x * 2]);
// console.log(doubledArray); // Output: [1, 2, 2, 4, 3, 6]


//3

// const entries = [['a', 1], ['b', 2], ['c', 3]];
// const obj = Object.fromEntries(entries)
// console.log(obj); // Output: { a: 1, b: 2, c: 3 }

//4

// const str = '  Hello, world!  ';
// console.log(str.trimStart()); // Output: 'Hello, world!  '
// console.log(str.trimEnd()); // Output: '  Hello, world!'

//5

// try {
//     // Code that may throw an error
// } catch {
//     // Catch block without specifying an error parameter
//     console.log('An error occurred');
// }

//6

// const stringWithUnicodeChars = "Line Separator: \u2028 Paragraph Separator: \u2029";
// console.log(stringWithUnicodeChars);
// Output: "Line Separator:
//          Paragraph Separator: "

//2020

//1

// const regex = /hello/g;
// const str = 'hello world hello universe';
// const matches = str.matchAll(regex);

// for (const match of matches) {
//     console.log(match);
// }

//2

// const moduleSpecifier = './module.js';
// import(moduleSpecifier)
//     .then(module => {
//         // Module loaded successfully
//     })
//     .catch(error => {
//         // Error handling
//     });

//3

// const bigIntNumber = 1234567890123456789012345678901234567890n;
// console.log(bigIntNumber);

//4

// const promises = [
//     Promise.resolve('Resolved'),
//     Promise.reject('Rejected'),
// ];

// Promise.allSettled(promises)
//     .then(results => {
//         console.log(results);
//     });


//5

// console.log(globalThis);


//6

// // In module.js
// export const foo = 'foo';
// export const bar = 'bar';

// // In another module
// import * as myModule from './module.js';
// console.log(myModule.foo); // Output: 'foo'
// console.log(myModule.bar); // Output: 'bar'

//7

// console.log(import.meta.url);

//8

// const foo = null;
// const defaultValue = 'default';

// console.log(foo ?? defaultValue); // Output: 'default'

//9

// const obj = { prop: { value: 42 } };
// console.log(obj.prop?.value); // Output: 42
// console.log(obj.prop?.nonExistentProperty); // Output: undefined


//2021

//1

// const str = 'hello world hello universe';
// const newStr = str.replaceAll('hello', 'hi');
// console.log(newStr); // Output: 'hi world hi universe'

//2

// const promises = [
//     Promise.reject('Rejected 1'),
//     Promise.resolve('Resolved 2'),
//     Promise.reject('Rejected 3'),
// ];

// Promise.any(promises)
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.error(error);
//     });

//3

// const errors = [new Error('Error 1'), new Error('Error 2')];
// const aggregateError = new AggregateError(errors);
// console.error(aggregateError);

//4

// let x = null;
// x ??= 'default';
// console.log(x); // Output: 'default'

// let y = 5;
// y &&= 10;
// console.log(y); // Output: 10

// let z = '';
// z ||= 'fallback';
// console.log(z); // Output: 'fallback'

//5

// const billion = 1_000_000_000;
// console.log(billion); // Output: 1000000000


//2022

//1

// Inside a module
// const result = await someAsyncFunction();
// console.log(result);


//2

// class MyClass {
//     #privateInstanceField = 'private';
//     publicInstanceField = 'public';

//     static #privateStaticField = 'private static';
//     static publicStaticField = 'public static';

//     #privateInstanceMethod() {
//         return 'private instance method';
//     }

//     static #privateStaticMethod() {
//         return 'private static method';
//     }

//     get #privateInstanceAccessor() {
//         return 'private accessor';
//     }

//     static get #privateStaticAccessor() {
//         return 'private static accessor';
//     }
// }

// const myObject = new MyClass();
// console.log(myObject.publicInstanceField); // Output: 'public'
// console.log(myObject.#privateInstanceField); // SyntaxError
// console.log(MyClass.publicStaticField); // Output: 'public static'
// console.log(MyClass.#privateStaticField); // SyntaxError


//3

// class MyClass {
//     static staticProperty;

//     static {
//         MyClass.staticProperty = 'initialized';
//     }
// }

//4

// class MyClass {
//     #privateField = 'private value';
// }

// const myObject = new MyClass();
// console.log(#privateField in myObject); // Output: SyntaxError
// console.log(#privateField in MyClass); // Output: false

//5

// const regex = /(\d+)/d;
// const match = '12345'.match(regex);
// console.log(match.indices); // Output: [ [ 0, 5 ] ]

//6

// try {
//     // Code that may throw an error
// } catch (error) {
//     throw new Error('Custom error message', { cause: error });
// }


//7

// const str = 'Hello, world!';
// console.log(str.at(7)); // Output: 'w'

// const array = [1, 2, 3, 4, 5];
// console.log(array.at(-2)); // Output: 4


//8

// const obj = { x: 1, y: 2 };
// console.log(Object.hasOwn(obj, 'x')); // Output: true


//2023

//1

// const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// console.log(array.toSorted()); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]

// console.log(array.toReversed()); // Output: [5, 6, 2, 9, 5, 1, 4, 1, 3]

// console.log(array.findLast(x => x === 5)); // Output: 5

// console.log(array.findLastIndex(x => x === 5)); // Output: 8

// console.log(array.toSpliced(2, 4)); // Output: [3, 1, 5, 9, 2, 6, 5]


//2

// #!/usr/bin/env node
// console.log('This is an executable ECMAScript file');


//3

// const symbol = Symbol('key');
// const weakMap = new WeakMap();

// weakMap.set(symbol, 'rajendra');

// console.log(weakMap.get(symbol)); // Output: 'value'

// ################################################################
// console.log(typeof typeof 1) //output: string


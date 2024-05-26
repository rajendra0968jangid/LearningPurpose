//variable
/*================================================================= */
//1
// const accountId = 14222;
// let accountEmail = "raj@gmail.com"
// var accountPassword = "123";
// accountCity = "jaipur";

//2
//error=> assignment to constant variable
// accountId = 2; //(not allowed)
// console.log(accountId);

//3
// accountEmail = "rajendra@gmail.com";
// console.table([accountEmail, accountPassword, accountCity]);

//4
//var not used due to global scope
//{} ->this is called block

//5
//gives undefined response
// let accountState;
// console.log(accountState);

//datatypes
/*================================================================= */
//1
//when we use this our all code treat as newer version
// "use strict"

//2
//error=>alert is not defined (we are using node js not browser)
// alert(3 + 3);

//3
//error=>unexpected identifier console (bad readable property)
// console.log("hello") console.log("world")

//4
//code readability should be high
// console.log(3 +
//     3)

// let name = "rajendra";
// let age = 24;
// let isLoggedIn = true;

//number range is (2 to power 53-1) to -(2 to power 53-1);
//bigint=>from 10 digit number and more
//string =>""
// boolean => true,false
//null=>standlone value
//undefined=>value not assign
//symbol=>mostly used in react js or figma(used for uniqueness)
//object=>

// console.log(typeof null);
// console.log(typeof undefined);

//conversion
/*================================================================= */
//number conversion

// // 1 conversion to number
// // before conversion
// let score = "123";
// console.log(typeof score)
// // after conversion
// let valueNumber = Number(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 2 conversion to number
// // before conversion
// let score1 = "123asdf";
// console.log(typeof score1)
// // after conversion
// let valueNumber1 = Number(score1);
// console.log(typeof valueNumber1)
// console.log(valueNumber1)

// // 3 conversion to number
// // before conversion
// let score1 = null;
// console.log(typeof score1)
// // after conversion
// let valueNumber1 = Number(score1);
// console.log(typeof valueNumber1)
// console.log(valueNumber1)

// // 4 conversion to number
// // before conversion
// let score1 = undefined;
// console.log(typeof score1)
// // after conversion
// let valueNumber1 = Number(score1);
// console.log(typeof valueNumber1)
// console.log(valueNumber1)

// // 5 conversion to number
// // before conversion
// let score1 = true;
// console.log(typeof score1)
// // after conversion
// let valueNumber1 = Number(score1);
// console.log(typeof valueNumber1)
// console.log(valueNumber1)

//number conversion result
// "12asdf" => typeof =  number || value  = NaN
// null => typeof =  number || value  = 0
// undefined => typeof =  number || value  = NaN
// true => typeof =  number || value  = 1
// false => typeof =  number || value  = 0

//string conversion

// // 1 conversion to string
// // before conversion
// let score = 123;
// console.log(typeof score)
// // after conversion
// let valueNumber = String(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 2 conversion to string
// // before conversion
// let score = null;
// console.log(typeof score)
// // after conversion
// let valueNumber = String(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 3 conversion to string
// // before conversion
// let score = undefined;
// console.log(typeof score)
// // after conversion
// let valueNumber = String(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 4 conversion to string
// // before conversion
// let score = true;
// console.log(typeof score)
// // after conversion
// let valueNumber = String(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

//string conversion result
//null => typeof string || value null
//undefined => typeof string || value undefined
//123 => typeof string || value 123
//true => typeof string || value true

//boolean conversion

// // 1 conversion to boolean
// // before conversion
// let score = "";
// console.log(typeof score)
// // after conversion
// let valueNumber = Boolean(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 2 conversion to boolean
// // before conversion
// let score = "rajendra";
// console.log(typeof score)
// // after conversion
// let valueNumber = Boolean(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 3 conversion to boolean
// // before conversion
// let score = 123;
// console.log(typeof score)
// // after conversion
// let valueNumber = Boolean(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 4 conversion to boolean
// // before conversion
// let score = 0;
// console.log(typeof score)
// // after conversion
// let valueNumber = Boolean(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 5 conversion to boolean
// // before conversion
// let score = null;
// console.log(typeof score)
// // after conversion
// let valueNumber = Boolean(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

// // 6 conversion to boolean
// // before conversion
// let score = undefined;
// console.log(typeof score)
// // after conversion
// let valueNumber = Boolean(score);
// console.log(typeof valueNumber)
// console.log(valueNumber)

//boolean conversion result
// ""=> typeof Boolean || value false
// "raj"=> typeof Boolean || value true
// 123=> typeof Boolean || value true
// 0=> typeof Boolean || value false
// null=> typeof Boolean || value false
// undefined=> typeof Boolean || value false

//

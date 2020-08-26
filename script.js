/*Convert the following es5 code blocks into es2015 code:
1. var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}

 */
var person = {
    fullName: "Harry Potter",
    sayHi() {
        setTimeout(() => console.log('Your name is ${this.fullName}'), 1000)
    }
}
person.sayHi();

/*2.var name = "Josie"
console.log("When " + name + " comes home, so good")
*/
var name="Josie"
console.log(`When ${name} comes home, so good`);

/*3.var DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 50; // stop me from doing this!
*/
const doNotChange=42;

/*4.var arr = [1,2]
   var temp = arr[0]
   arr[0] = arr[1]
   arr[1] = temp
*/
var [a,b]=[1,2];
[a,b]= [b,a]

/*4.function double(arr){
      return arr.map(function(val){
        return val*2
      });
     }
*/
 function double(arr){
     return arr.map(value =>val*2)
 }

 /*5.var obj = {
     numbers: {
        a: 1,
        b: 2
    } 
  }

var a = obj.numbers.a;
var b = obj.numbers.b;
*/
var {a,b,c}=obj.numbers;

/*6.function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }
*/
function add(a=10,b=10){
    return a+b;
}

/*7.Research the following functions - what do they do?
Array.from
Object.assign
Array.includes
String.startsWith

Array.from(): is a static method that creates a new copied array instance from an array like object.
console.log(Array.from('foo'));

Object.assign(): This is a method that copies all enumerable own properties form one or more source objects to a target objet
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

Array.includes(): is a method taht dertemines whether an array includes a certain values among its entries, returning true or false.
const array1 = [1, 2, 3];
console.log(array1.includes(2));//true

String.startsWith():is a method that determines whether a string begins with the characters of a specified string, returning true or false.
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));//true
*/
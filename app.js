//1) javascript For in loop

function printObjectProperties(obj){
    
    if(Object.keys(obj).length){
      for(let Item in obj){
          console.log(`"${Item}:${obj[Item]}"`)
        }
    }else{
      console.log(`"Object is empty"`)
    }
  }

printObjectProperties({name:'mehedi',age:27,education:'MA complite in a bangla'})

//2) javascript function returns
const numbers1 = [10, 20, 5, 30, 25];
function findMaxNumber(array){
    if(array.length === 0){
       return null
    }else{
        return Math.max(...array)
    }
}
console.log(findMaxNumber(numbers1))

//3) javascript Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function mergeArrays(arr1, arr2){
    let newArray = [...arr1,...arr2]

    return newArray
}

console.log(mergeArrays(arr1, arr2))

//4) javascript arrow function

let calculateSquare = (num)=>{
  return Math.pow(num,2)
}
console.log(calculateSquare(5))
console.log(calculateSquare(8))

//5) javascript es6 map
const numbers = [1, 2, 3, 4, 5];
function doubleNumbers(array){
   let result = array.map((value)=>{
    return value * 2
   })
   console.log(result)
}

console.log(doubleNumbers(numbers))

//6) javascript es6 static keyword

class MathUtility {
    constructor(){

    }
    static multiply(num1, num2){
        return num1 * num2
    }
}

console.log(MathUtility.multiply(5,3))
console.log(MathUtility.multiply(2,8))

// 7) javascript es6 class inheritance

class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
       console.log(this.sound)
    }
}

class Dog extends Animal{
    constructor(name,sound){
        super(name,sound)
    }
    fetch (){
        console.log("Fetching the ball!")
    }
}

const animal = new Animal("Lion", "Roar");
const dog = new Dog("Buddy", "Woof");

animal.makeSound()
dog.makeSound()
dog.fetch()

//8) javascript es6 super keyword

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log( `"Hello, my name is ${this.name} and I am ${this.age} years old."`)
    }
}

class Student extends Person{
   constructor(name, age, major){
    super(name, age);
    this.major = major
   }
   introduce(){
    console.log(`"Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}."`)
   }
}


const person1 = new Person("John", 30);
const student1 = new Student("Alice", 20, "Computer Science");
person1.introduce()
student1.introduce()
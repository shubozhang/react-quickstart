///////////////////// CONST VS LET
const name = 'John'; // const var cannot be resigned, but properties can be modified
const person = {
    name: 'doe',
    age: 40
}
console.log('pre person name is: ',person.name);

person.name = 'zoe';
console.log('after person name is:', person.name);

let lname = 'Paul'; // let var can be resigned.
lname = 'Larry';
console.log(lname);

/////////////////////// Arrow Function
function sayHello() {
    console.log("hello from regular funciton")
}
sayHello();


const sayHello1 = () => {
    console.log("hello from array funtion 1");
}
sayHello1();

const sayHello2 = name => console.log('hellow from ', name)
sayHello2('Elmo');

const sayHello3 = (name, age) => console.log(name, ' is ', age);
sayHello3('Cookie Monster', 3)

const sayHello4 = (name, age) => console.log(`${name} is ${age}`); // use back quote (back tilde), not quote
sayHello4('Rosita', 3)


///////////////////////////// For Each
const fruits = ['apples', 'pears', 'grapes'];

fruits.forEach((fruit) => console.log('Loop fruit :', fruit));
fruits.forEach((fruit, index, arr) => {
    console.log(`index is ${index} and fruit is ${fruit} and ${arr[index]}`)
})


////////////////////////////// MAP
const sinleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase())
console.log("sinle fruit is ", sinleFruit)


////////////////////////////// FILTER
const people = [
    {id: 1, name: 'arron'},
    {id: 2, name: 'bob'},
    {id: 3, name: 'carter'}
]

const people2 = people.filter(p => p.id !== 2);
console.log("filtered people is ", people2)


//////////////////////////////  SPREAD
const arry = [1, 2, 3]
const arry1 = [arry, 4]
const arry2 = [...arry.filter(num => num !== 2), 5]
console.log('spread array is ', arry1);
console.log('spread and filter array is ', arry2);

const contact = {
    name: 'brad',
    age: 35
}
const updatedContact = {
    ...contact,
    email: 'brad@mail.com'
}
console.log('updated contact is ', updatedContact)


//////////////////////////////  DESTURCTURING
const profile = {
    fullname: 'john doe',
    address: {
        street: 'main street',
        city: 'boston'
    },
    hobbies: ['movies', 'tennis']
};
const {fullname, address, hobbies} = profile;
const { street, city} = profile.address
console.log(`fullname is ${fullname} and address is ${address} and hobbies is ${hobbies}`)
console.log(`street is ${street} and city is ${city}`);

/////////////////////////////  CLASSES
class P {
    constructor(name, age){
        console.log('creating a class');
        this.name = name;
        this.age = age
    }

    greet() {
        return `hello, my name is ${this.name} and I am ${this.age} old`
    }
}

const p1 = new P('joe', 5)
const p2 = new P('zoe', 4)
console.log('p.name is ', p1.name, ' p.age is ', p1.age);
console.log('class greeting : ', p1.greet());
console.log(p2.greet());


//////////////////////////// SUBCLASSES
class P_sub extends P{
    constructor(name, age, balance){
        super(name, age);
        this.balance = balance
    }
}
const  p_sub1 = new P_sub('alex', 20, 300);
console.log(`information is ${p_sub1.name} and ${p_sub1.age}, balance is $${p_sub1.balance}.00`);




////////////////////////////  MODULES
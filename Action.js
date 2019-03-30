
function toggleSiderbar(){
document.getElementById("sidebar").classList.toggle('active');
}


console.log('hello world');
console.error('This is error');
console.warn('This is warnning');
//alert('This is alert');

//variable  var,let,const

let age =30;
age =31;
console.log("age:" , age);
console.log("age : "+30);
console.log(30+"cm.");
age ='45';
console.log(age);
console.log(30+'40');
let b =1;
b++;
console.log(b);

const name ='John';
const height =178;
const weight =68.5;
const isCool =true;
const x=null;


//string

console.log('My name is ' + name)
//string literal
console.log(`My name is also ${name}`);
const hello = `My name is agian also ${name}`;
console.log(hello.length);
console.log(hello.toUpperCase());
console.log(hello.substring(3,10).toUpperCase());
console.log(hello.split(' '));

//Array
const num= new Array(1,2,3,4,5,6);
console.log(num);
const fruits = ['apples',"orange",10,true,14.5,[1,2,3]];
console.log(fruits[3]);
fruits[6]='crazy';
console.log(fruits);
fruits.push('end');
console.log(fruits);
fruits.unshift('start');
console.log(fruits);
fruits.pop(); fruits.pop();
console.log(fruits);
console.log(Array.isArray('hello'));
console.log(Array.isArray(fruits));

//Object literals
const person={
    fname: 'Dome',
    lname: 'Potikanond',
    age:40,
    hobbies: ['music' , 'movie'],
    address: {
        street:' 239 Huaykaew rd. ',
        city: 'Chiang Mai',
        county: 'Thailand'
    }
}
console.log(person);
console.log(`${person.fname} (${person.age})`);
console.log('A hobby: ' + person.hobbies[1]);
console.log('street: '+person.address.street);

const {fname,lname}=person;
console.log(fname+' '+ lname);
const {address: {city} } =person;
console.log(`${fname} ${lname} (${city})`);

person.email ='watcharinrachadet123@gmail.com';
console.log(person);

//Array of objects
const todos= [
    {
        id:1,
        text:'Dental Appointment',
        isCompleted: true
    },
    {
        id:2,
        text:'Dental Appointment',
        isCompleted: false
    },
    {
        id:3,
        text:'Dental Appointment',
        isCompleted: true
    },
]
console.log(todos[1])

//JSON format
const todosJSON=JSON.stringify(todos);
console.log(todosJSON);

//Loop
let i= 10;
let str = ' ';
while(i>0){
    str += `${i}`;
    i--;
}
console.log(str);

for(let i=0;i<todos.length;i++){
    console.log(`${i+1}. ${todos[i].text}`);
}

for(let todo of todos){
    console.log(todo.id + '-'+todo.text);
}

//High-Order functions
todos.forEach((todo,index) =>{
    console.log(`${index+1}:${todo.text}`);
})

const todoText = todos.map(todo =>todo.text)
console.log(todoText);

const todoCompleted = todos.filter( function(todo){
    return todo.isCompleted == true;
})
console.log(todoCompleted);
let abc = 40
console.log(abc === '49');
console.log(abc == '40');

 let b1=100;
 const c1=(b1 ===undefined)? 0:b1;
 console.log(c1);

function addNums(num1=0, num2=0){
    return num1+num2;
}

console.log(addNums(5,10,50));

//Arrow Function
const addNums2 =(num1,num2) => num1+num2;
console.log(addNums2(10,100));

//OOP
function Person(fname, lname ,dob){
    this.fname = fname;
    this.lname = lname;
    // this.dob =dob;
    this.dob=(dob == undefined)? new Date(): new Date(dob);

    this.getBirthYear = function() { return this.dob.getFullYear();}
    this.getFullname = function() { return `${this.fname} ${this.lname}`}
}

const p1 = new Person('John','Doe','S-Dec-1990');
console.log(p1);
console.log(p1.getFullname()+' '+p1.getBirthYear());

// class Person{
//     constructor(firstname, lastname,dob){
//         this.fname = firstname;
//         this.lname = lastname;
//         this.dob = (dob === undefined)? new Date(): new Date(dob);
//     }
//     getBirthYear = function() { return this.dob.getFullYear();}
//     getFullname = function() { return `${this.fname} ${this.lname}`}
// }
// const p2 =new PerformanceResourceTiming('Jane','Doe','15-aug-2006');
// console.log(p2);

//DOM - Document object Model
// console.log(window);
console.log(window.document);

const form =document.getElementById('my-form'); //pull by id
console.log(form);

const container = document.querySelector('h1');
console.log(container);
container.innerHTML = 'Watcharin rachadet';

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#Email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('.users')


myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ===''||emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'PLease enter all fields';
    }else{
    // console.log(nameInput.value+ ' '+emailInput.value);
    const li =document.createElement('li');
    const text =document.createTextNode(`${nameInput.value}:${emailInput.value}`);
    li.appendChild(text);
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value ='';
    }
}
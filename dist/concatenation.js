function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
const person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN);
}
;
let mixedType;
mixedType = 'ffhj';
mixedType = 23;
mixedType = true;
function combine(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
    ;
}
;
let pet;
function isDog(pet) {
    return 'bark' in pet;
}
;
const ceo = {
    name: 'Alice',
    id: 2,
    employees: [{
            name: 'Petro',
            id: 5,
        }],
};
let value;
value = 1;
value = 2;
let choise;
choise = 'yes';
choise = 'no';
function getButtonStyle(size) {
    switch (size) {
        case 'small':
            return {
                fontSize: '14px',
                padding: '10px',
            };
        case 'medium':
            return {
                fontSize: '18px',
                padding: '10px',
            };
        case 'large':
            return {
                fontSize: '20px',
                padding: '15px',
            };
        default:
            return {
                fontSize: '14px',
                padding: '10px',
            };
    }
    ;
}
;
let myButtonStyle = getButtonStyle('large');
function logMessage(message) {
    console.log(message);
}
;
const answer = logMessage('Do not stop me now');
function doSomething(callback) {
    callback();
}
;
doSomething(() => {
    console.log('Callback function!');
});
function newError(message) {
    throw new Error(message);
}
;
function infiniteLoop() {
    while (true) { }
}
;
let myFunc;
myFunc = (first, second) => {
    console.log(`first: ${first}, second: ${second}`);
};
myFunc('Radio-Ga-Ga', 90);
function calc(param1, param2, callback) {
    console.log('Result: ', callback(param1, param2));
}
;
calc(32, 5, (num1, num2) => num1 + num2);
const user = {
    name: 'Harry',
    id: 17,
};
const userWithCoords = {
    id: 18,
    name: 'Harry',
    coords: [10, 56],
};
var AnimalIds;
(function (AnimalIds) {
    AnimalIds["cat"] = "cat";
    AnimalIds["dog"] = "dog";
    AnimalIds["fish"] = "fish";
})(AnimalIds || (AnimalIds = {}));
;
let cat = {
    meom: () => 'very loud mouw',
};
let dog = {
    bark: () => 'very loud bark',
};
let fish = {
    swim: () => undefined,
};
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return 'Hello!';
    }
    ;
}
;
let user2 = { name: 'Alice', };
;
;
let animal = {
    name: 'hery',
    age: 5,
};
;
let bird = {
    name: 'gety',
    age: 4,
};
;
;
;
class MyDogBalto {
    constructor() {
        this.name = 'Balto';
        this.bark = 'Woof!';
    }
}
;
;
;
class Anim {
    walk() {
        console.log('The animal walks...');
    }
    ;
    eat() {
        console.log('The animal eats...');
    }
}
;
const anim = new Anim();
;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
function printDetails(obj) {
    console.log(`Name: ${obj.name}`);
    if ('privileges' in obj) {
        console.log(`Privileges: ${obj.privileges.join(", ")}`);
    }
    ;
    if ('startDate' in obj) {
        console.log(`StartDate: ${obj.startDate}`);
    }
    ;
}
;
const newEmployee = {
    name: 'Haryy',
    startDate: new Date,
};
class Car {
    drive() {
        console.log('Driving a car...');
    }
    ;
}
;
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    ;
    loadCargo(amount) {
        console.log(`Loading cargo: ${amount}`);
    }
    ;
}
;
const carInstance = new Car();
const truckInstance = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    ;
}
;
useVehicle(carInstance);
useVehicle(truckInstance);
function isDogs(animal) {
    return 'bark' in animal;
}
;
function letAnimalTalk(animal) {
    if (isDogs(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
    ;
}
;
function isEmployee(staff) {
    return staff.startDate !== undefined;
}
;
const staffMember = {
    name: 'Ron',
    startDate: new Date(),
};
if (isEmployee(staffMember)) {
    console.log(`Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`);
}
;
let someValue = 'some string';
let strLength1 = someValue.length;
let strLength2 = someValue.length;
const input = document.getElementById('inputEmail');
if (input) {
    input.value = 'hui';
}
;
const newUser = {
    name: 'Harry',
    gender: 'MAN',
    country: 'Ukraine',
};
let mans = {};
let man = {
    id: '567',
    name: 'Ron',
    email: 'ron@gmail.com',
};
mans[man.id] = man;
function combine3(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else if (typeof input1 === 'number' && typeof input2 === 'string') {
        return input1 + input2;
    }
}
;
function concatenate(strs, separator) {
    if (separator !== undefined) {
        return strs.join(separator);
    }
    else {
        return strs.join(' ');
    }
    ;
}
;
let names = ['Emily', 'Nevil', 'Santa'];
function checkUser(name, type, privilegesOrRegistrationDate) {
    if (type === 'admin') {
        return {
            type,
            name,
            privileges: privilegesOrRegistrationDate,
        };
    }
    return {
        type,
        name,
        registrationDate: new Date(),
    };
}
;
//Generics
let arr = [];
arr = [1, 'ght'];
const promise = new Promise((resolve) => {
    setInterval(() => {
        resolve('Done!');
    }, 1000);
});
promise.then((data) => {
    console.log(data);
});
function identity(arg) {
    return arg;
}
;
let output1 = identity('My string');
let output2 = identity(100);
function firstElement(arr) {
    return arr[0];
}
;
let numbers = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);
let strings = ['a', 'b', 'c', 'd'];
let firstStrg = firstElement(strings);
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
;
const merged = merge({ name: 'Alica' }, { age: 29 });
function getLength(str) {
    return str.length;
}
;
getLength('test');
getLength([1, 2, 3]);
function arrayLogger(array) {
    array.forEach((item) => console.log(item));
}
;
function getPersonInfo(person, key) {
    return person[key];
}
;
const john = {
    name: 'John',
    age: 25,
    location: 'Nadvirna',
};
getPersonInfo(john, 'age');
function extractValue(obj, key) {
    return obj[key];
}
;
extractValue({ name: 'John' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    ;
    getItems() {
        return [...this.data];
    }
    ;
}
;
const textStorage = new DataStorage();
textStorage.addItem('Hello');
textStorage.addItem('Henry');
textStorage.addItem('Lacrimosa');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(12);
numberStorage.addItem(19);
console.log(numberStorage.getItems());
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    ;
    getKey() {
        return this.key;
    }
    ;
    getValue() {
        return this.value;
    }
    ;
}
;
const pair1 = new KeyValuePair('name', 'John');
pair1.getKey();
pair1.getValue();
const pair2 = new KeyValuePair(12, 44);
pair2.getKey();
pair2.getValue();
function createUser(data) {
    const defaultUser = {
        id: Date.now(),
        name: '',
        email: '',
        registered: false,
    };
    return {
        ...defaultUser, ...data
    };
}
;
const newUseriana = createUser({ name: 'Nadiia', email: 'nadiyakubchak@ukr.net' });
console.log(newUseriana);
let alice = {
    name: 'Alice',
    id: 1236,
    email: 'alice@gmail.com'
};
alice.name = 'bob';
let aliceReadonly = {
    name: 'Alice',
    id: 789,
    email: 'alice@gmail.com',
};
const arr45 = ['honey', 'milk', 'bread'];
let userBasicInfo = {
    id: 456,
    name: 'Oxana',
};
export { concatenation };
//# sourceMappingURL=concatenation.js.map
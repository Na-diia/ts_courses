
function concatenation (firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
};

enum Role {
  ADMIN,
  USER,
};

const person = {
  role: Role.ADMIN,
};

if(person.role === Role.ADMIN){
  console.log('Role: ', Role.ADMIN);
};

let mixedType : string | number | boolean;
mixedType = 'ffhj';
mixedType = 23;
mixedType = true;

function combine (param1: number | string, param2: number | string) {
  if(typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else  {
    return param1.toString() + param2.toString();
  };
};

type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet : Dog | Fish;

function isDog (pet: Dog | Fish): pet is Dog {
  return 'bark' in pet;
};

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo : CEO = {
  name: 'Alice',
  id: 2,
  employees: [{
    name: 'Petro',
    id: 5,
  }],
};

//Literal Type
type OneOrTwo = 1 | 2;
let value : OneOrTwo;
value = 1;
value = 2;

type YesOrNo = 'yes' | 'no';
let choise : YesOrNo;
choise = 'yes';
choise = 'no';

type ButtonSize = 'small' | 'medium' | 'large';

function getButtonStyle (size: ButtonSize) {
  switch(size) {
    case 'small' :
      return {
        fontSize: '14px',
        padding: '10px',
      };
      case 'medium' :
        return {
          fontSize : '18px',
          padding: '10px',
        };
        case 'large' : 
        return {
          fontSize: '20px',
          padding: '15px',
        };
        default: 
        return {
          fontSize : '14px',
          padding: '10px',
        };
  };
};

let myButtonStyle = getButtonStyle('large');

function logMessage(message: string): void {
  console.log(message);
};

const answer = logMessage('Do not stop me now');
 
function doSomething (callback: () => void) {
  callback();
};

doSomething(() => {
  console.log('Callback function!');
});

function newError (message: string) : never {
  throw new Error(message);
};

function infiniteLoop (): never {
  while(true) {}
};

let myFunc: (firstArg: string, secondArg: number) => void;

myFunc =(first: string, second: number) => {
  console.log(`first: ${first}, second: ${second}`);
};

myFunc('Radio-Ga-Ga', 90);

type CallbackType = (...nums : number[]) => number;

function calc (param1: number, param2: number, callback: CallbackType) : void {
  console.log('Result: ', callback(param1, param2));
};

calc(32, 5, (num1, num2) => num1 + num2);

type User = {
  name: string;
  id: number;
};

const user: User = {
  name: 'Harry',
  id: 17,
};

type Coordinate = [number, number];

type UserWithCoords = {
  id: number;
  name: string;
  coords: Coordinate;
};

const userWithCoords: UserWithCoords = {
  id: 18,
  name: 'Harry',
  coords: [10, 56],
};

enum AnimalIds {
  cat = 'cat',
  dog = 'dog',
  fish = 'fish'
};

type Animal = {
  [AnimalIds.cat]: {
    meom: () => string;
  };

  [AnimalIds.dog]: {
    bark: () => string;
  };

  [AnimalIds.fish]: {
    swim: () => undefined;
  };
};

let cat: Animal[AnimalIds.cat] = {
  meom: () => 'very loud mouw',
};

let dog: Animal[AnimalIds.dog] = {
  bark: () => 'very loud bark',
};

let fish : Animal[AnimalIds.fish] = {
  swim: () => undefined,
};

function greet (name? : string) {
  if(name) {
    return `Hello, ${name}!`
  } else {
    return 'Hello!'
  };
};

type Person = { name: string; age?: number; } 
let user2: Person = { name: 'Alice', }; 

interface Animal12 {
 name: string,
};

interface Animal12 {
  age: number,
};

let animal: Animal12 = {
  name: 'hery',
  age: 5,
};

interface Dog12 extends Animal12 {
 bark: string;
};

type AnimalName = {
  name: string;
};

type AnimalAge = {
  age: number;
};

type Animal56 = AnimalName & AnimalAge;

let bird: Animal56 = {
  name: 'gety',
  age: 4,
};

type Cat = {
  meow : () => string;
};

interface Dog67 {
  bark: () => string;
};

type CatOrDog = Cat | Dog;
type CatAndDog = Cat & Dog;

interface Animal344 {
  name: string,
};

interface Dog9 extends Animal344 {
 bark: string,
};

class MyDogBalto implements Dog9  {
  name = 'Balto';
  bark = 'Woof!';
};

interface Walkable {
  walk():void;
};

interface Eatable {
  eat() : void;
};

class Anim implements Walkable, Eatable {
  walk() {
    console.log('The animal walks...')
  };

  eat () {
    console.log('The animal eats...')
  }
};

const anim = new Anim();

interface AddFunc {
  (n1: number, n2: number) : number;
};

let add: AddFunc;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

type Admin = {
  name: string;
  privileges: string[];
};

type NewEmployee = {
  name: string;
  startDate: Date;
};

type AdminOrNewEmployee = Admin | NewEmployee;

function printDetails(obj: AdminOrNewEmployee) {
  console.log(`Name: ${obj.name}`);

  if('privileges' in obj) {
    console.log(`Privileges: ${obj.privileges.join(", ")}`);
  };

  if('startDate' in obj) {
    console.log(`StartDate: ${obj.startDate}`);
  };
};

const newEmployee : AdminOrNewEmployee = {
  name: 'Haryy',
  startDate: new Date,
};

class Car {
  drive () {
    console.log('Driving a car...');
  };
};

class Truck {
  drive() {
    console.log('Driving a truck...');
  };

  loadCargo (amount: number) {
    console.log(`Loading cargo: ${amount}`);
  };
};

type Vehicle = Car | Truck;

const carInstance = new Car();
const truckInstance = new Truck();

function useVehicle (vehicle: Vehicle) {
  vehicle.drive();

  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  };
};

useVehicle(carInstance);
useVehicle(truckInstance);

type Dogs = {
  bark : () => void;
};

type Cats = {
  meow : () => void;
};

function isDogs (animal: Cats | Dogs) : animal is Dogs {
  return 'bark' in animal;
};

function letAnimalTalk (animal: Dogs | Cats) {
  if(isDogs(animal)) {
     animal.bark();
  }else {
    animal.meow();
  };
};

type Adm = {
  name: string;
  privileges: string[];
};

type EmpNew = {
  name: string;
  startDate: Date;
};

type Staff = Adm | EmpNew;

function isEmployee(staff: Staff) : staff is EmpNew {
  return (staff as EmpNew).startDate !== undefined;
};

const staffMember : Staff = {
  name: 'Ron',
  startDate: new Date(),
};

if(isEmployee(staffMember)) {
  console.log(`Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`);
};

let someValue: unknown = 'some string';

let strLength1: number = (<string>someValue).length;

let strLength2: number = (someValue as string).length;


const input = document.getElementById('inputEmail');
if(input) {
  (input as HTMLInputElement).value = 'hui';
};

type Person1 = {
  name: string;
  [x: string] : string;
};

const newUser: Person1 = {
  name: 'Harry',
  gender: 'MAN',
  country: 'Ukraine',
};

type NewMan = {
  id: string;
  name: string;
  email: string;
};

type Mans = {
  [id: string] : NewMan;
};

let mans : Mans = {};
let man : NewMan = {
  id: '567',
  name: 'Ron',
  email: 'ron@gmail.com',
};

mans[man.id] = man;

function combine3 (input1: number, input2: number): number;
function combine3(input1: string, input2: string): string;
function combine3(input1: string, input2: number): string;
function combine3(input1: number, input2: string): string;
function combine3 (input1: any, input2: any) {
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  }
  else if(typeof input1 === 'string' && typeof input2 === 'string') {
    return input1 + input2;
  }else if( typeof input1 === 'string' && typeof input2 === 'number') {
    return input1 + input2;
  }else if(typeof input1 === 'number' && typeof input2 === 'string') {
    return input1 + input2;
  }
};

function concatenate (strs: string[]) : string;
function concatenate (strs: string[], separator: string): string;
function concatenate (strs: any, separator? : any): any {
  if( separator !== undefined) {
    return strs.join(separator);
  }else {
    return strs.join(' ');
  };
};

let names = ['Emily', 'Nevil', 'Santa'];

type AdminType = {
  type: 'admin';
  name: string;
  privileges: string[];
};

type UserType = {
  type: 'user';
  name: string;
  registrationDate: Date;
};

function checkUser (name: string, type: 'user') : UserType;
function checkUser (name: string, type: 'admin', privileges: string[]): AdminType;
function checkUser(name: string, type: 'admin' | 'user', privilegesOrRegistrationDate?: string[]): UserType | AdminType {
  if (type === 'admin') {
    return {
      type,
      name, 
      privileges: privilegesOrRegistrationDate as string[],
    }
  }
  return {
    type, 
    name,
    registrationDate: new Date(),
  }
};

//Generics
let arr: Array<number | string> = [];

arr = [1, 'ght'];

const promise : Promise<string> = new Promise((resolve) => {
 setInterval(() => {
   resolve('Done!');
 }, 1000);
});

promise.then((data) => {
  console.log(data)
});

function identity <T> (arg: T): T {
  return arg;
};

let output1 = identity<string>('My string');
let output2 = identity<number>(100);

function firstElement <T> (arr : T[]) : T {
  return arr[0];
};

let numbers: number[] = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);

let strings: string[] = ['a', 'b', 'c', 'd'];
let firstStrg = firstElement(strings);

type Persona = {
 name: string;
};

type AdditionalFields = {
  age: number;
};

function merge <T extends object, U extends object> (obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
};

const merged = merge<Persona, AdditionalFields>({name: 'Alica'}, {age: 29});

type Length = {
  length: number;
};

function getLength <T extends Length>(str: T) {
  return str.length;
};
getLength('test');
getLength([1, 2, 3]);

function arrayLogger<T extends Array<string>>(array: T) : void {
  array.forEach((item) => console.log(item));
};

type PersonNonGrata = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof PersonNonGrata;

function getPersonInfo (person: PersonNonGrata, key: PersonKeys) {
  return person[key];
};

const john : PersonNonGrata = {
  name: 'John',
  age: 25,
  location: 'Nadvirna',
};

getPersonInfo(john, 'age');

function extractValue <T extends object, U extends keyof T> (obj: T, key: U) {
  return obj[key];
};

extractValue({name: 'John'}, 'name');

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  };

  getItems () {
    return [...this.data];
  };
};

const textStorage = new DataStorage<string>();
textStorage.addItem('Hello');
textStorage.addItem('Henry');
textStorage.addItem('Lacrimosa');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(12);
numberStorage.addItem(19);
console.log(numberStorage.getItems());


class KeyValuePair <TKey, TValue> {
  constructor(private key: TKey, private value: TValue){};

  getKey(): TKey {
    return this.key;
  };

  getValue(): TValue {
    return this.value;
  };
};

const pair1 = new KeyValuePair('name', 'John');
pair1.getKey();
pair1.getValue();

const pair2 = new KeyValuePair(12, 44);
pair2.getKey();
pair2.getValue();

type Useriana = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser (data: Partial<Useriana>): Useriana {
  const defaultUser: Useriana = {
    id: Date.now(),
    name: '',
    email: '',
    registered: false,
  };

  return {
   ...defaultUser, ...data
  };
};

const newUseriana = createUser({name: 'Nadiia', email: 'nadiyakubchak@ukr.net'});
console.log(newUseriana);

type Girl = {
  name: string;
  id: number;
  email: string;
};

let alice : Girl = {
  name: 'Alice',
  id: 1236,
  email: 'alice@gmail.com'
};

alice.name = 'bob';

let aliceReadonly: Readonly<Girl> = {
  name: 'Alice',
  id: 789,
 email: 'alice@gmail.com',
};

const arr45: Readonly<string[]> = ['honey', 'milk', 'bread'];

type They = {
  id: number;
  name: string;
  email: string;
};

type UserBasicInfo = Pick<They, 'id' | 'name'>;

let userBasicInfo : UserBasicInfo = {
  id: 456,
  name: 'Oxana',
};


export {concatenation};
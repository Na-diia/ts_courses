
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
}

export {concatenation};
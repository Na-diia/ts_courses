
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

type User = {
  id: number;
  name: string;
};

const getUserName = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users : User[] = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Paraska'},
];

const results = getUserName(users);
console.log(results);

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

type CallbackType = (num1: number, num2: number) => number;

function calc (param1: number, param2: number, callback: CallbackType): void {
  console.log('Result: ', callback(param1, param2));
};

calc(1, 10, (num1, num2) => num1 + num2);

export {concatenation};
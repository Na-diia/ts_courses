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
const getUserName = (users) => {
    return users.map((user) => user.name);
};
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Paraska' },
];
const results = getUserName(users);
console.log(results);
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
calc(1, 10, (num1, num2) => num1 + num2);
export { concatenation };
//# sourceMappingURL=concatenation.js.map
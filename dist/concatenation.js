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
if (isDog(pet)) {
    pet.bark();
}
else {
    pet.swim();
}
export { concatenation };
//# sourceMappingURL=concatenation.js.map
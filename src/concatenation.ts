
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

if (isDog(pet)) {
  pet.bark();
}else {
  pet.swim();
}


export {concatenation}
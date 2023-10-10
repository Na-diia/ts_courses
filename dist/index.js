import { concatenation } from "./concatenation";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello');
    });
}
;
// class Zhiguli_8n {
//     private needRepair = false;
//     private maxEngineLoad = 5;
//     private checkEngine () {
//         if(this.needRepair) {
//             throw new Error('Engine does not work!!')
//         };
//         const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
//         if(this.maxEngineLoad === engineLoad) {
//             this.needRepair = true;
//             throw new Error('Engine broken again')
//         };
//     };
//     public startEngine() {
//         this.checkEngine();
//         console.log('Ta-ta-ta-ta');
//     };
//     public repairEngine() {
//         this.needRepair = false;
//         console.log('Engine rebuilt!');
//     };  
// };
// const auto = new Zhiguli_8n();
// try {
//     while (true) {
//         auto.startEngine();
//     }   
// }catch (e){
//  console.log(e);
//  auto.repairEngine();
//  while(true) {
//     auto.startEngine();
//  };
// };
class MyClass {
    protectedMethod() {
        return 'Something';
    }
    ;
    myPublicMethod() {
        return this.protectedMethod();
    }
    ;
}
;
function protectedMethod() {
    return 'Something';
}
;
class MyClass2 {
    myPublicMethod() {
        protectedMethod();
    }
    ;
}
;
class Hogwarts {
    myMethod() {
        return 'Always';
    }
    ;
}
;
class Gryphindor extends Hogwarts {
}
;
let b = new Gryphindor();
console.log(b.myMethod());
class Animal {
    say() {
        console.log('I am an Animal!');
    }
    ;
}
;
class Cat extends Animal {
    say() {
        console.log('Meow');
    }
    ;
}
;
class Dog extends Animal {
    say() {
        console.log('Woof');
    }
    ;
}
;
let animal = new Cat();
animal.say();
animal = new Dog();
animal.say();
class A {
    process1() {
        return 1;
    }
    ;
    process2() {
        return 2;
    }
    ;
    process3() {
        return 3;
    }
    ;
    superProcess() {
        return this.process1() + this.process2() + this.process3();
    }
    ;
}
;
//# sourceMappingURL=index.js.map
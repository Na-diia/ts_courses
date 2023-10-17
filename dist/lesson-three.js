"use strict";
;
function greet(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
}
;
const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 12,
};
;
;
;
const newTeacher = {
    name: 'Lupin',
    age: 56,
    greet(phrase) {
        console.log(phrase);
    },
    experience: 20,
};
newTeacher.greet("Children, do not afraid!");
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (this.age < 28) {
            throw new Error("Pilot is too young");
        }
        ;
    }
    ;
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
    ;
    flyMessage() {
        console.log("Літак набирає висоту, всім приємного польоту!");
    }
    ;
    setAuthoPilot() {
        console.log(" Authopilot is open!");
    }
    ;
}
;
const pilot = new Pilot("Anton", 29);
pilot.greet("Здоровенькі були");
pilot.flyMessage();
let user;
user = {
    name: "Anthony",
    age: 21,
    greet(phrase) {
        console.log(phrase + this.name);
    },
};
//user.greet("Привітики! Я - ");
class Plane {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
    ;
}
;
class Boing extends Plane {
    startEngine() {
        if (!this.pilot) {
            throw new Error("No pilot in cabina!");
        }
        console.log("Запуск турбіни!");
        this.pilot.flyMessage();
        return true;
    }
    ;
}
;
// const boing = new Boing();
// const newPilot = new Pilot("Harry", 32);
// newPilot.greet("I'm good to see you!");
// boing.sitInPlane(newPilot);
// boing.startEngine();
class Terorist {
    bluff(phrase) {
        console.log(phrase);
    }
    ;
    flyMessage() {
        console.log("Наші вимоги - 9 мільонів, бо біда!");
    }
    ;
}
;
const terrorist = new Terorist();
const boeing = new Boing();
terrorist.bluff("You are murders!");
boeing.sitInPlane(terrorist);
boeing.startEngine();
;
let someone;
someone = {
    name: "who"
};
;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
;
class Person2 {
    constructor(age) {
        this.age = age;
    }
    ;
}
;
class Animal {
    constructor(name) {
        this.name = name;
    }
    ;
    say() {
        console.log("Nothing to say");
    }
    ;
}
;
class Cat extends Animal {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }
    ;
    say() {
        console.log("Meow");
    }
    ;
    run(time) {
        console.log(`${this.name} бігла зі швидкістю ${this.speed} протягом ${time}`);
    }
    ;
}
;
;
class Someone {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    greet(phrase) {
        console.log(phrase + 'My name is ' + this.name);
    }
    ;
}
;
class Catalog {
    showCatalog(items) {
        items.forEach((item) => {
            console.log(item.name);
        });
    }
    ;
}
;
class Items {
    constructor() {
        this.items = [];
    }
    setItem(name) {
        this.items.push({ name });
    }
    ;
    getItems() {
        return this.items;
    }
    ;
}
;
const items = new Items();
const catalog = new Catalog();
items.setItem("Books");
items.setItem("Pictures");
items.setItem("Movies");
catalog.showCatalog(items.getItems());
//# sourceMappingURL=lesson-three.js.map
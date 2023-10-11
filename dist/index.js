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
//Купу логіки, клас вразливий. Невірно!
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    ;
    save() {
    }
    ;
    sendEmailMessage(message) {
    }
    ;
}
;
//Вірно!
class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    ;
    save() {
        //Логіка відправдення даних;
    }
    ;
}
;
class EmailService {
    sendEmail(message) {
        //надсилання повідомлень
    }
    ;
}
;
;
class Restangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    calculateArea() {
        return this.width * this.height;
    }
    ;
}
;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    ;
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    ;
}
;
// class AreaCalculator {
//   public calculate (restangle: Restangle): number {
//     return restangle.width * restangle.height;
//   };
// };
class AreaCalculator {
    calculate(shape) {
        return shape.calculateArea();
    }
    ;
}
;
class Vehicle {
}
;
class Car extends Vehicle {
    startEngine() {
        this.engageIgnition();
        console.log("Car engine started ");
    }
    ;
    accelerate() {
        console.log("Car accelerated!");
    }
    ;
    engageIgnition() {
        console.log("Engaging car ignition!");
    }
    ;
}
;
class ElectricBus extends Vehicle {
    startEngine() {
        console.log("Electric bus engine started!");
    }
    ;
    accelerate() {
        this.increaseVoltage();
        this.connectIndividualEngine();
        console.log('Electric bus accelerated!');
    }
    ;
    increaseVoltage() {
        console.log("Increasing electric bus voltage!");
    }
    ;
    connectIndividualEngine() {
        console.log('Connecting individual electric bus engine');
    }
    ;
}
;
class Driver {
    go(vehicle) {
        vehicle.startEngine();
        vehicle.accelerate();
    }
    ;
}
;
let car = new Car();
let bus = new ElectricBus();
let driver = new Driver();
driver.go(car);
driver.go(bus);
;
;
class UniversalParser {
    jsonParse() {
        return 'Parsing Json';
    }
    ;
    htmlParse() {
        return 'Parsing HTML!';
    }
    ;
}
;
class SpecificHtmlParser {
    htmlParse() {
        return 'Specifically parsing HTML!';
    }
    ;
}
;
class Feeder {
    getFood() {
    }
    ;
}
;
class Animal1 {
    eat() {
        const feeder = new Feeder();
        feeder.getFood();
    }
    ;
}
;
;
class NewFeeder {
    getFood() {
    }
    ;
}
;
// class Animal3 {
//     public foodProvider: FoodProvider;
//     constuctor (foodProvider: FoodProvider) {
//         this.foodProvider = foodProvider;
//     };
//     eat() {
//         this.foodProvider.getFood();
//     };
// };
class House {
    constructor(n) {
        this.street = n;
    }
    ;
    showAddress() {
        console.log(this.street + '- my address!');
    }
    ;
}
;
const house = new House('Middle-earth');
house.showAddress();
const houseCopy = { street: 'Stark-street', showAddress: house.showAddress };
houseCopy.showAddress();
class AA {
    constructor() {
        this.someProperty = 'str';
    }
}
;
class B extends AA {
    showProperty() {
        console.log(this.someProperty);
    }
    ;
}
;
const a = new AA();
const ba = new B();
ba.showProperty();
class Building {
    constructor(n) {
        this.tenants = [];
        this.street = n;
    }
    ;
    showAddress() {
        console.log("Address: ", this.street);
    }
    ;
    addTenants(tenant) {
        this.tenants.push(tenant);
    }
    ;
    showTenants() {
        console.log(this.tenants);
    }
    ;
}
;
const building = new Building("Middle-earth");
building.addTenants("Frodo");
building.addTenants("Sem");
//building.showTenants();
class Evrica {
    constructor(type, street) {
        this.type = type;
        this.street = street;
    }
    ;
}
;
class Flat {
    constructor(tenants) {
        this.tenants = tenants;
    }
    ;
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    ;
}
;
const flat = new Flat([]);
flat.addTenant("Iren");
console.log(flat.tenants);
class Flat2 {
    constructor(address) {
        this.address = address;
    }
    ;
}
;
const flat2 = new Flat2({ street: "Franko", number: 2 });
flat2.address.number = 9;
class House5 {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    ;
    showAddress() {
        console.log("Address: " + this.street);
    }
    ;
    showType() {
        console.log("House-Type: " + this.type);
    }
    ;
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    ;
    showTenants() {
        console.log(this.tenants);
    }
    ;
}
;
class StoneHouse extends House5 {
    constructor(street, generalTenant) {
        super("stone", street);
        this.chargeOfTheHouse = generalTenant;
        this.addTenant(generalTenant);
    }
    ;
    showTenants() {
        console.log("Tenants: " + this.chargeOfTheHouse);
        super.showTenants();
    }
    ;
}
;
class Person {
    constructor() {
        this.personInfo = {};
    }
    set firstName(value) {
        console.log("FirstName added");
        this.personInfo.firstName = value;
    }
    ;
    set lastName(value) {
        console.log("LastName added");
        this.personInfo.lastName = value;
    }
    ;
    get info() {
        const { personInfo } = this;
        return `${personInfo.firstName} ${personInfo.lastName}`;
    }
    ;
}
;
const person = new Person();
person.firstName = "Nadiia";
person.lastName = "Pekaruk";
class UseStatic {
    constructor() {
        UseStatic.count += 1;
    }
    ;
    static isStaticMethod() {
        console.log("Run static method");
    }
    ;
    showCount() {
        console.log(UseStatic.count);
    }
    ;
}
UseStatic.count = 1;
;
const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
obj1.showCount();
obj2.showCount();
obj3.showCount();
UseStatic.isStaticMethod();
class Plane {
    constructor() {
        this.pilotInCabine = false;
    }
    sitInPlane() {
        this.pilotInCabine = true;
    }
    ;
}
;
class Maize extends Plane {
    startEngine() {
        return true;
    }
    ;
}
;
class Boeing extends Plane {
    startEngine() {
        return true;
    }
    ;
}
;
//# sourceMappingURL=index.js.map
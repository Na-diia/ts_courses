import { concatenation } from "./concatenation";

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if(button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello');
    });
};

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
    private protectedMethod () {
        return 'Something';
    };

    public myPublicMethod () {
        return this.protectedMethod();
    };   
};

function protectedMethod () {
    return 'Something';
};

class MyClass2 {
    myPublicMethod() {
        protectedMethod();
    };
};

class Hogwarts {
    public myMethod () {
        return'Always';
    };
};

class Gryphindor extends Hogwarts { };

let b = new Gryphindor();
console.log(b.myMethod());

class Animal {
    public say () {
        console.log('I am an Animal!');
    };
};

class Cat extends Animal {
    public say () {
        console.log('Meow');
    };
};

class Dog extends Animal {
    public say () {
        console.log(
           'Woof' 
        );
    };
};

let animal : Animal = new Cat();
animal.say();
animal = new Dog();
animal.say();

class A {
    private process1 () {
        return 1;
    };

    private process2 () {
        return 2;
    };

    private process3 () {
        return 3;
    };

    public superProcess () {
         return this.process1() + this.process2() + this.process3();
    };
};

//Купу логіки, клас вразливий. Невірно!
class User {
    public name: string;
    public email: string;

    constructor (name : string, email: string) {
        this.name = name;
        this.email = email;
    };

    public save(): void {

    };

    public sendEmailMessage (message: string): void {

    };
};
//Вірно!
 class User2 {
    public name: string;
    public email: string;

    constructor (name: string, email: string) {
        this.name = name;
        this.email = email;
    };

    public save (): void {
        //Логіка відправдення даних;
    };
 };

 class EmailService {
    public sendEmail(message: string): void {
//надсилання повідомлень
    };
};

interface Shape {
    calculateArea (): number;
};

class Restangle implements Shape {
    public width: number;
    public height: number;

    constructor (width: number, height: number){
     this.width = width;
     this.height = height;
    };

    calculateArea (): number {
        return this.width * this.height;
    };
};

class Circle implements Shape {
    public radius: number;

    constructor (radius: number){
        this.radius = radius;
    };

    calculateArea (): number {
        return Math.PI * Math.pow(this.radius, 2);
    };
};

// class AreaCalculator {
//   public calculate (restangle: Restangle): number {
//     return restangle.width * restangle.height;
//   };
// };

class AreaCalculator {
    public calculate (shape: Shape): number {
        return shape.calculateArea();
    };
};

abstract class Vehicle {
    abstract startEngine(): void;
    abstract accelerate(): void;
};

class Car extends Vehicle {
    startEngine () {
        this.engageIgnition();
        console.log("Car engine started ");
    };

    accelerate() {
        console.log("Car accelerated!");
    };

    private engageIgnition() {
        console.log("Engaging car ignition!");
    };
};

class ElectricBus extends Vehicle {
    startEngine () {
        console.log("Electric bus engine started!");
    };
    
   accelerate () {
    this.increaseVoltage();
    this.connectIndividualEngine();
    console.log('Electric bus accelerated!');
   };

   private increaseVoltage() {
    console.log("Increasing electric bus voltage!");
   };
   
   private connectIndividualEngine () {
    console.log('Connecting individual electric bus engine');
   };
};

class Driver {
    go(vehicle: Vehicle) {
        vehicle.startEngine();
        vehicle.accelerate();
    };
};

let car = new Car();
let bus = new ElectricBus();
let driver = new Driver();
driver.go(car);
driver.go(bus);

interface JsonParser {
   jsonParse (): string;
};

interface HtmlParser {
    htmlParse(): string;
};

class UniversalParser implements JsonParser, HtmlParser {
    jsonParse (): string {
        return 'Parsing Json';
    };

    htmlParse (): string {
        return 'Parsing HTML!';
    };
};

class SpecificHtmlParser implements HtmlParser {
    htmlParse (): string {
        return 'Specifically parsing HTML!'
    };
};

class Feeder {
    getFood () : void {

    };
};

class Animal1 {
    eat () {
        const feeder = new Feeder();
        feeder.getFood();
    };
};

interface FoodProvider {
    getFood (): void;
};

class NewFeeder implements FoodProvider {
    getFood() {

    };
};

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
    street: string;

   constructor (n: string) {
    this.street = n;
   };

   showAddress (this: House) {
    console.log(this.street + '- my address!');
   };
};

const house = new House('Middle-earth');
house.showAddress();

const houseCopy = {street: 'Stark-street', showAddress: house.showAddress};
houseCopy.showAddress();

class AA {
   protected someProperty = 'str';
};

class B extends AA {
    showProperty () {
        console.log(this.someProperty);
    };
};

const a = new AA ();
const ba = new B();

ba.showProperty();


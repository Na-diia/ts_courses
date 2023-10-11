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

class Building {
    private street: string;

    private tenants: string[] = [];

    constructor (n: string) {
        this.street = n;
    };

    showAddress(this: Building) {
        console.log("Address: ", this.street);
    };

    addTenants (tenant: string) {
        this.tenants.push(tenant);
    };

    showTenants () {
        console.log(this.tenants);
    };
};

const building = new Building("Middle-earth");
building.addTenants("Frodo");
building.addTenants("Sem");
//building.showTenants();

class Evrica {
    constructor (private readonly type: string, private street: string) {};

    // changeType (type: string) {
    //     this.type = type;// Cannot assign to 'type' because it is a read-only property.
    // };
};

class Flat {
    constructor (public readonly tenants: string[]) {};

    addTenant (tenant: string) {
        this.tenants.push(tenant);
    };
};

const flat = new Flat([]);
flat.addTenant("Iren");
console.log(flat.tenants);

class Flat2 {
    constructor (public readonly address: {street: string, number: number}) {};
};

const flat2 = new Flat2({street: "Franko", number: 2});
flat2.address.number = 9;

class House5 {
    private tenants: string[] = [];

    constructor (private readonly type: string, private street: string) {};

    showAddress (this: House5) {
        console.log("Address: " + this.street);
    };

    showType (this: House5) : void {
        console.log("House-Type: " + this.type);
    };

    addTenant( tenant: string) {
        this.tenants.push(tenant);
    };

    showTenants () {
        console.log(this.tenants);
    };
};

class StoneHouse extends House5 {
  private chargeOfTheHouse : string;

  constructor (street: string, generalTenant: string) {
    super("stone", street);

    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant);
  };

  showTenants () {
    console.log("Tenants: " + this.chargeOfTheHouse);

    super.showTenants();
  };
};

// const stoneHouse = new StoneHouse("Stone-world", "Max");
// stoneHouse.addTenant("Oleh");
// stoneHouse.addTenant("PYLYP");

// stoneHouse.showAddress();
// stoneHouse.showTenants();
// stoneHouse.showType();

type PersonInformation = {
 firstName?: string;
 lastName?: string;
};

class Person {
    private personInfo : PersonInformation = {};

    set firstName (value: string) {
        console.log("FirstName added");

        this.personInfo.firstName = value;
    };

    set lastName (value: string) {
        console.log("LastName added");

        this.personInfo.lastName = value;
    };

    get info () {
        const {personInfo} = this;

        return `${personInfo.firstName} ${personInfo.lastName}`;
    };
};

const person = new Person();
person.firstName = "Nadiia";
person.lastName = "Pekaruk";

class UseStatic {
    private static count = 1;

    constructor () {
        UseStatic.count += 1;
    };

    public static isStaticMethod () {
        console.log("Run static method");
    };

    public showCount () {
        console.log(UseStatic.count);
    };
};

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();
UseStatic.isStaticMethod();

abstract class Plane {
  protected pilotInCabine = false;

  public sitInPlane () {
    this.pilotInCabine = true;
  };
  
  public abstract startEngine(): boolean;
};

class Maize extends Plane {
    public startEngine () {
        return true;
    };
};

class Boeing extends Plane {
    public startEngine () {
       return true;
    };
};
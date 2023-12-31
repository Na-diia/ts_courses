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
// items.setItem("Books");
// items.setItem("Pictures");
// items.setItem("Movies");
// catalog.showCatalog(items.getItems());
class DB {
    connection() {
        console.log("DB conected");
    }
    ;
}
;
class Server {
    constructor(database) {
        this.database = database;
    }
    ;
    init() {
        this.database.connection();
    }
    ;
}
;
const db = new DB();
const server = new Server(db);
server.init();
class Person3 {
    constructor(name) {
        this.name = name;
    }
    ;
}
;
class Home {
    constructor() {
        this.guests = [];
    }
    addGuests(guest) {
        this.guests.push(guest);
    }
    ;
}
;
const home = new Home();
const guest1 = new Person3("Max");
const guest2 = new Person3("Bogdan");
const guest3 = new Person3("Oleg");
home.addGuests(guest1);
home.addGuests(guest2);
home.addGuests(guest3);
class CompositionHome {
    constructor() {
        this.tenants = [];
    }
    addTenants(name) {
        const tenant = new Person3(name);
        this.tenants.push(tenant);
    }
    ;
}
;
const compositionHome = new CompositionHome();
compositionHome.addTenants("Vasyl");
compositionHome.addTenants("Michle");
compositionHome.addTenants("Nadiia");
class Captain {
    constructor(name) {
        this.name = name;
    }
    ;
}
;
// class Ship {
//   private captain : Captain;
//   setCaptain (name: string) {
//     const captain1 = new Captain(name);
//     this.captain = captain1;
//   };
//   sink () {
//     console.log(`Ship is sinking! Captain ${this.captain.name} goes down with the ship!`)
//   };
// };
// const ship = new Ship();
// ship.setCaptain("Harry");
// ship.sink();
//Singletone
class App {
    constructor() {
        if (!App.instance) {
            App.instance = this;
        }
        return App.instance;
    }
    ;
}
;
;
class CreditCardProcessor {
    validate(data) {
        return true;
    }
    ;
    pay(amount) {
        console.log(`User paid ${amount} usong credit card!`);
    }
    ;
}
;
class PayPalProcessor {
    validate(data) {
        return true;
    }
    ;
    pay(amount) {
        console.log(`User paid ${amount} using PayPal`);
    }
    ;
}
;
class BitcoinProcessor {
    validate(data) {
        return true;
    }
    ;
    pay(amount) {
        console.log(`User paid ${amount} using Bitcoin`);
    }
    ;
}
;
class PaymentProcessorFactory {
    static createProcessor(type) {
        switch (type) {
            case 'Credit Card':
                return new CreditCardProcessor();
            case 'PayPal':
                return new PayPalProcessor();
            case 'Bitcoin':
                return new BitcoinProcessor();
            default:
                throw new Error(`This ${type} does not supported`);
        }
        ;
    }
    ;
}
;
const processor = PaymentProcessorFactory.createProcessor('Credit Card');
processor.pay(100);
class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    ;
}
;
class CarBuilder {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    ;
    // setModel (model: string): CarBuilder {
    //   this.model = model;
    //   return this;
    // };
    // setYear (year: number): CarBuilder {
    //   this.year = year;
    //   return this;
    // };
    // setColor (color: string): CarBuilder {
    //   this.color = color;
    //   return this;
    // };
    build() {
        return new Car(this.model, this.year, this.color);
    }
    ;
}
;
const builder = new CarBuilder("Tesla Model S", 2023, 'Red');
class QueryBuilder {
    constructor() {
        this.table = ' ';
        this.whereParams = [];
        this.orderBy = '';
    }
    from(table) {
        this.table = table;
        return this;
    }
    ;
    where(whereParams) {
        this.whereParams = whereParams;
        return this;
    }
    ;
    order(orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    ;
    build() {
        return new DataBaseQuery(this.table, this.whereParams, this.orderBy);
    }
    ;
}
;
class DataBaseQuery {
    constructor(table, whereParams, orderBy) {
        this.table = table;
        this.whereParams = whereParams;
        this.orderBy = orderBy;
    }
    ;
    query() {
        let query = `SELECT * FROM ${this.table}`;
        if (this.whereParams.length) {
            query += `WHERE ${this.whereParams.join(' AND ')}`;
        }
        ;
        if (this.orderBy) {
            query += `ORDER BY ${this.orderBy}`;
        }
        ;
        console.log(`Executing query ${query}`);
    }
    ;
}
;
const newBuilder = new QueryBuilder();
const dbQuery = newBuilder
    .from("Nadvirna")
    .where(['age > 21'])
    .order('lastName')
    .build();
dbQuery.query();
class OldService {
    oldServiceRequest() {
        return "Old Service Request!";
    }
    ;
}
;
;
class Adapter {
    constructor(OldService) {
        this.OldService = OldService;
    }
    ;
    request() {
        const result = this.OldService.oldServiceRequest();
        return `Adapter: (TRANSLATED) ${result}`;
    }
    ;
}
;
class Client {
    constructor(newInterface) {
        this.newInterface = newInterface;
    }
    ;
    useService() {
        console.log(this.newInterface.request());
    }
    ;
}
;
const oldService = new OldService();
const adapter = new Adapter(oldService);
const client = new Client(adapter);
;
class SimpleCoffee {
    cost() {
        return 10;
    }
    ;
    description() {
        return "Simple coffee";
    }
    ;
}
;
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    ;
    cost() {
        return this.coffee.cost() + 2;
    }
    ;
    description() {
        return this.coffee.description() + ' milk ';
    }
    ;
}
;
class MilcDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost();
    }
    ;
    description() {
        return this.coffee.description();
    }
    ;
}
;
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1;
    }
    ;
    description() {
        return this.coffee.description() + ' sugar ';
    }
    ;
}
;
let coffee = new SimpleCoffee();
coffee = new MilcDecorator(coffee);
coffee = new SugarDecorator(coffee);
class UserService {
    getUser(id) {
        console.log(`Fetching user data for id: ${id}`);
        return { id, name: 'Harry Potter', email: 'harrypotter@gmail.com' };
    }
    ;
    updateUser(user) {
        console.log(`Update user: ${user}`);
    }
    ;
}
;
class AddressService {
    getAddress(userId) {
        console.log(`Fetching address data for userId: ${userId}`);
        return { userId, country: 'Ukraine', city: 'Kyiv', street: 'Shevchenko, 21' };
    }
    ;
    updateAddress(address) {
        console.log(`Updating address : ${address}`);
    }
    ;
}
;
class PaymentService {
    getPaymentData(userId) {
        console.log(`Fetching paymentData for id : ${userId}`);
        return { userId, creditCardNumber: '123-123-123-123', expiryDate: '01/25' };
    }
    ;
    updatePaymentData(userId, paymentData) {
        console.log(`Updating payment data for id: ${userId}`);
    }
    ;
}
;
class UserProfileFacade {
    constructor(userService, addressServise, paymentService) {
        this.userService = userService;
        this.addressServise = addressServise;
        this.paymentService = paymentService;
    }
    ;
    getUserProfile(userId) {
        const user = this.userService.getUser(userId);
        user.address = this.addressServise.getAddress(userId);
        user.payment = this.paymentService.getPaymentData(userId);
        return user;
    }
    ;
    updateUserProfile(userId, userData) {
        this.userService.updateUser(userData);
    }
    ;
}
;
;
class Order {
    constructor() {
        this.state = new PendingState();
    }
    ;
    proceedToNext() {
        this.state.proceedToNext(this);
    }
    ;
    setState(state) {
        this.state = state;
    }
    ;
    toString() {
        return this.state.toString();
    }
    ;
}
;
class PendingState {
    proceedToNext(order) {
        console.log("Proceeding from Pending to Shipped...");
        order.setState(new ShippedState());
    }
    ;
    toString() {
        return 'Pending...';
    }
    ;
}
;
class ShippedState {
    proceedToNext(order) {
        console.log("Proceeding from Shipped to Delivered");
        order.setState(new DeliveredState());
    }
    ;
    toString() {
        return "Shipped";
    }
    ;
}
;
class DeliveredState {
    proceedToNext(order) {
        console.log("Already delievered. Thank you!");
    }
    ;
    toString() {
        return "Delivered";
    }
    ;
}
;
let order = new Order();
// console.log(order.toString());
// order.proceedToNext();
// console.log(order.toString());
// order.proceedToNext();
// console.log(order.toString());
// order.proceedToNext();
//Агрегація
class Team {
    constructor(members) {
        this.members = members;
    }
    ;
    startProject() {
        this.members.forEach(member => member.code());
    }
    ;
}
;
class Programmer {
    code() {
        console.log('Coding...');
    }
    ;
}
;
const programmers = [new Programmer(), new Programmer()];
const team = new Team(programmers);
team.startProject();
//Composition
class Computer {
    constructor() {
        this.processor = new Processor();
    }
    ;
    start() {
        this.processor.processData();
    }
    ;
}
;
class Processor {
    processData() {
        console.log('Processing data...');
    }
    ;
}
;
const computer = new Computer();
computer.start();
//
class Car2 {
    constructor() {
        this.driver = null;
    }
    setDriver(driver) {
        this.driver = driver;
    }
    ;
    startJourney() {
        if (this.driver) {
            this.driver.drive();
        }
    }
    ;
}
;
class Driver {
    drive() {
        console.log('Driving...');
    }
    ;
}
;
const driver = new Driver();
const car = new Car2();
car.setDriver(driver);
car.startJourney();
//# sourceMappingURL=lesson-three.js.map
interface Person {
    firstName: string;
    lastName: string;
    age?: number;
};

function greet (person: Person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
};

const john : Person = {
     firstName: 'John',
     lastName: 'Doe',
     age: 12,
};

//greet(john);

interface IPerson {
    name: string;
    age: number;
    greet: (phrase: string) => void;
};

interface IPilot {
    flyMessage: () => void;
};

interface Teacher extends IPerson {
    experience: number;
};

const newTeacher : Teacher = {
    name: 'Lupin',
    age: 56,
    greet(phrase: string): void {
        console.log(phrase);
    },
    experience: 20,
};

newTeacher.greet("Children, do not afraid!");

class Pilot implements IPerson, IPilot {
  constructor (public name: string, public age: number) {
    if(this.age < 28) {
        throw new Error ("Pilot is too young")
    };
  };

  greet(phrase: string): void {
    console.log(phrase + " " + this.name );
  };

  flyMessage (): void {
    console.log("Літак набирає висоту, всім приємного польоту!");
  };

  setAuthoPilot(): void {
    console.log(" Authopilot is open!");
  };
};

const pilot = new Pilot("Anton", 29);
pilot.greet("Здоровенькі були");
pilot.flyMessage();

let user : IPerson;
user = {
    name: "Anthony",
    age: 21,
    greet (phrase) {
        console.log(phrase + this.name);
    },
};

//user.greet("Привітики! Я - ");

abstract class Plane {
    protected pilot?: IPilot;

    public sitInPlane (pilot: IPilot): void {
      this.pilot = pilot;
    };

    public abstract startEngine (): boolean;
};

class Boing extends Plane {
    startEngine () {
        if(!this.pilot) {
            throw new Error("No pilot in cabina!");
        }
        console.log("Запуск турбіни!");

        this.pilot.flyMessage();
        return true;
    };
};

// const boing = new Boing();
// const newPilot = new Pilot("Harry", 32);
// newPilot.greet("I'm good to see you!");

// boing.sitInPlane(newPilot);
// boing.startEngine();

class Terorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  };

  flyMessage(): void {
    console.log("Наші вимоги - 9 мільонів, бо біда!");
  };
};

const terrorist = new Terorist();
const boeing = new Boing();
terrorist.bluff("You are murders!");
boeing.sitInPlane(terrorist);
boeing.startEngine();

interface ITest {
    readonly name: string;
};

let someone : ITest;
someone = {
    name: "who"
};

// type AddFunc = (n1: number, n2: number) => number;

// let add : AddFunc;

// add = (n1: number, n2: number): number => {
//   return n1 + n2;
// };

interface AddFunc {
  (n1: number, n2: number): number;
};

let add : AddFunc;
add = (n1: number, n2: number): number =>  {
  return n1+ n2;
};

interface IPerson2 {
  name?: string;
  age: number;
};

class Person2 implements IPerson2 {
  constructor (public age: number) {};
};

class Animal {
  constructor (public name: string) {};

  public say(): void {
    console.log("Nothing to say");
  };
};

class Cat extends Animal {
  constructor (name: string, private speed: number) {
    super(name);
  };

  say() {
    console.log("Meow");
  };

  run (time: number): void {
    console.log(`${this.name} бігла зі швидкістю ${this.speed} протягом ${time}`)
  };
};

interface InterfacePerson {
  name: string;
  age: number;
  greet: (phrase: string) =>  void;
};

class Someone implements InterfacePerson {
  constructor (public name: string, public age: number) {};

  greet(phrase: string): void {
    console.log(phrase + 'My name is ' + this.name);
  };
};


type ItemType = {
  name: string;
};

class Catalog{
  showCatalog (items: ItemType[]){
   items.forEach((item) => {
    console.log(item.name);
   });
  };
};

class Items {
  private items: ItemType[] = [];

  setItem (name: string) {
    this.items.push({name});
  };

  getItems(): ItemType[] {
    return this.items;
  };
};

const items = new Items();
const catalog = new Catalog();
// items.setItem("Books");
// items.setItem("Pictures");
// items.setItem("Movies");

// catalog.showCatalog(items.getItems());

class DB {
  connection () {
    console.log("DB conected");
  };
};

class Server {
  constructor (private database: DB) {};

  init () {
    this.database.connection();
  };
};

const db = new DB();
const server = new Server(db);
server.init();

class Person3 {
  constructor (public name: string) {};
};

class Home {
  private guests: Person3[] = [];

  addGuests(guest: Person3) {
    this.guests.push(guest);
  };
};

const home = new Home();
const guest1 = new Person3("Max");
const guest2 = new Person3("Bogdan");
const guest3 = new Person3("Oleg");

home.addGuests(guest1);
home.addGuests(guest2);
home.addGuests(guest3);

class CompositionHome {
  private tenants: Person3[] = [];

  public addTenants(name: string) {
      const tenant = new Person3(name);
      this.tenants.push(tenant);
  };
};

const compositionHome = new CompositionHome();
compositionHome.addTenants("Vasyl");
compositionHome.addTenants("Michle");
compositionHome.addTenants("Nadiia");

class Captain {
  constructor (public name: string) {};
};

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
  private static instance: App;

  constructor () {
    if(!App.instance) {
      App.instance = this;
    }
    return App.instance;
  };
};

interface PaymentProcessor {
  validate(data: any): boolean;
  pay(amount: number): void;
};

class CreditCardProcessor implements PaymentProcessor {

  validate(data: any): boolean {
    return true;
  };

  pay(amount: number): void {
    console.log(`User paid ${amount} usong credit card!`);
  };
};

class PayPalProcessor implements PaymentProcessor {

  validate( data: any) : boolean {
    return true;
  };

  pay( amount: number): void {
    console.log(`User paid ${amount} using PayPal`);
  };
};

class BitcoinProcessor implements PaymentProcessor {

  validate ( data: any): boolean {
    return true;
  };

  pay( amount: number): void {
    console.log(`User paid ${amount} using Bitcoin`);
  };
};

class PaymentProcessorFactory {
  static createProcessor (type: string): PaymentProcessor {
    switch(type ) {
      case 'Credit Card' : 
      return new CreditCardProcessor();
      case 'PayPal' : 
      return new PayPalProcessor();
      case 'Bitcoin' : 
      return new BitcoinProcessor();
      default :
        throw new Error(`This ${type} does not supported`);    
    };
  };
};

const processor = PaymentProcessorFactory.createProcessor('Credit Card');
processor.pay(100);

class Car {
  constructor (
    public model: string,
    public year: number,
    public color: string
  ) {};
};

class CarBuilder {
 constructor( private model: string,
  private year: number,
  private color: string) {};


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

   build (): Car {
    return new Car (this.model, this.year, this.color);
   };
};

const builder = new CarBuilder ("Tesla Model S", 2023, 'Red');

class QueryBuilder {
  private table: string = ' ';
  private whereParams: string[] = [];
  private orderBy: string = '';

  from (table: string) : QueryBuilder {
    this.table = table;

    return this;
  };

  where (whereParams : string[]): QueryBuilder {
    this.whereParams = whereParams;

    return this;
  };

  order (orderBy: string): QueryBuilder {
    this.orderBy = orderBy;

    return this;
  };

  build() : DataBaseQuery {
    return new DataBaseQuery(this.table, this.whereParams, this.orderBy);
  };
};

class DataBaseQuery {
   constructor (
    private table: string,
    private whereParams: string[],
    private orderBy: string
  ) {};

  query(): void {
   let query = `SELECT * FROM ${this.table}`;

   if(this.whereParams.length) {
     query += `WHERE ${this.whereParams.join(' AND ')}`;
   };

   if(this.orderBy) {
     query += `ORDER BY ${this.orderBy}`;
   };

   console.log(`Executing query ${query}`);
  };
};

const newBuilder = new QueryBuilder();
const dbQuery = newBuilder
  .from("Nadvirna")
  .where(['age > 21'])
  .order('lastName')
  .build();

dbQuery.query();

class OldService {
  public oldServiceRequest (): string {
    return "Old Service Request!";
  };
};

interface NewInterfaceService {
  request(): string;
};

class Adapter implements NewInterfaceService {

  constructor(private OldService: OldService) {};

  public request (): string {
    const result = this.OldService.oldServiceRequest();

    return `Adapter: (TRANSLATED) ${result}`;
  };
};

class Client {
  constructor (private newInterface: NewInterfaceService) {};

  public useService (): void {
    console.log(this.newInterface.request());
  };
};

const oldService = new OldService();
const adapter = new Adapter(oldService);
const client = new Client(adapter);

//client.useService();

interface Coffee {
  cost (): number;
  description (): string;
};

class SimpleCoffee implements Coffee {
  cost () {
    return 10;
  };

  description () {
    return "Simple coffee";
  };
};

class CoffeeDecorator implements Coffee {
  constructor (protected coffee : Coffee) {};

  cost() {
    return this.coffee.cost() + 2;
  };

  description () {
    return this.coffee.description() + ' milk ';
  };
};

class MilcDecorator extends CoffeeDecorator {
  cost () {
    return this.coffee.cost();
  };

  description () {
    return this.coffee.description();
  };
};

class SugarDecorator extends CoffeeDecorator {
  cost () {
    return this.coffee.cost() + 1;
  };

  description () {
    return this.coffee.description() + ' sugar ';
  };
};

let coffee: Coffee = new SimpleCoffee();
coffee = new MilcDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(`${coffee.description()} - ${coffee.cost()} dollars`);


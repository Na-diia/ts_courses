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



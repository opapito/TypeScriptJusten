// Abstract class -> can not be used as blueprint for new classes, but it is possible to extend from such class
/* abstract */ class UserAccount {
  name: string;
  age: number;
  
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }

}

//inheritance
class CharAccount extends UserAccount {
  //private nickname: string;  // "private" modifier turns the variable accessible only by the methods INSIDE the class
  readonly nickname: string;   // "readonly" modifier allows the variable be READ OUTSIDE the method but NOT be modified
  //public level: number;      // "public" modifier allows the variable be READ and MODIFIED OUTSIDE the class
  //protected level: number;   // "protected" modifier allows the variable be accessed only by the class OR by the classes that inherit from it
  level: number;

  // accessors -> setters and getters
  set setLevel(level: number){
    this.level = level;
  }

  get getLevel() :number {
    console.log("-------GET-------");
    return this.level;
  }

  constructor(name: string, age: number, nickname: string, level: number){
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`);
  }


}


const will = new UserAccount("Will", 30);
console.log(will);
console.log(will.age);
will.logDetails();


const john = new CharAccount("John", 45, "johnmaster", 80);
john.logDetails();
john.logCharDetails();
//john.nickname = "Wayne"; // cannot access, read-only 
john.setLevel = 999;
console.log(john.getLevel);




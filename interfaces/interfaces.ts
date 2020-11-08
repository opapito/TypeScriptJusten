// interfaces are a group of data to describe an object's structure. Interfaces is more used for object structures while type alias for primitives type structures
interface Game {
  id?: string | number;
  title: string; // as it is not an object, we use ; instead of ,
  description: string;
  readonly genre: string; // it is also possible to use modifiers as readonly, private
  platform?: string[];    // "?" can also be used to indicate the property as optional
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  id: 123,
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform:["PS3", "PS4"],
  getSimilars: (title: string) =>{
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou.title);
if (tlou.getSimilars){
  tlou.getSimilars(tlou.title);
}

// an interface inheriting from another interface
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last of US - Left Behind",
  description: "You play as Ellie before the original game",
  genre:"Action",
  platform: ["PS4"],
  originalGame:tlou,
  newContent: ["3 hours story", "new characters"],
}

//implementing a class based on an interface

class CreateGame implements Game {
  title:string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string){
    this.title = t;
    this.description = d;
    this.genre = g;
  }

}
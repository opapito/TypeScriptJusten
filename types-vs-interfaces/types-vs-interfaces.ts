// Type Alias
// Type alias are recommended for React - Props

// definition
type GameT = {   // assignment operator " = " is necessary
  title: string;
}

type DLCT = {
  extra: string;
}

// intersection
type GameCollectionT = Game & DLCT & { content: boolean}; // assignment operator " = " is necessary

// implements
//class CreateGameT implements GameCollection{}

// function declaration
type getSimilarsT = (title: string) => void;


//=====================differences ============================//

// allows to declare primitive types
type IDT = string | number;

// allows to declare tuples
type TupleT = [number, number];
[1, 2] as TupleT;
//[1, 2, 3] as TupleT; // Do NOT allow error in tuple definition

// only ONE declaration per scope 
type JQUERYT = {a: string};
//type JQUERYT = {a: string}; // the second declaration is NOT allowed


/////////////////////////////////////////////////////////////////
// Interfaces

// definition
interface Game {  // there is NO assignment " = " sign after interface name
  title: string;
}

interface DLC2{
  extra: string;
}

//intersection | extend
interface GameCollection extends Game, DLC2{}

// implements
//class CreateGame implements GameCollection{}

// function declaration
interface getSimilars {
  (title: string): void;
}

//=====================differences ============================//
//interface ID extends number{} // NOT allowed 

// Tuple definitions do not work in interfaces
interface Tuple {
  0: number;
  1: number;
}
[1, 2, 3, "ssas"] as Tuple; // any amount of parameters are accepted 
[2, 3] as Tuple; 

// allows multiple interface definitions in the same scope by merging same name definitions
interface JQUERY {
  a: string;
}

interface JQUERY {
  b: string;
}

const $:JQUERY = {  // the resulting interface nows have two objects: a and b. For this reason, interfaces are better for create libs, due the possibility of extension
  a: "bla",
  b: "foo"
}

// Also, interfaces are preferable in Object Oriented Design (OO) projects
// Generics
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// type numOrStr = number | string
// function useState<S numOrStr = string >() // same meaning
function useState<S extends number | string = string >(){  // now, only number or string will be accepted in function call
                                                           //, and after this definition, only this type will be accepted.
                                                           // To make one parameter as default, we use " = " operator followed by 
                                                           // the name of the defaul type
  //let state: number | string;
  let state: S;

  function getState(){
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState(); // -> after a type is defined, it start to be the only one accepted
const newState2 = useState<number>(); // -> after a type is defined, it start to be the only one accepted

newState.setState("foo"); 
console.log(newState.getState());

newState2.setState(456); //-> so number type will not be accepted
console.log(newState2.getState());
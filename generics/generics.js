// Generics
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
// type numOrStr = number | string
// function useState<S numOrStr = string >() // same meaning
function useState() {
    //, and after this definition, only this type will be accepted.
    // To make one parameter as default, we use " = " operator followed by 
    // the name of the defaul type
    //let state: number | string;
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState(); // -> after a type is defined, it start to be the only one accepted
var newState2 = useState(); // -> after a type is defined, it start to be the only one accepted
newState.setState("foo");
console.log(newState.getState());
newState2.setState(456); //-> so number type will not be accepted
console.log(newState2.getState());

//@Component
//@Selector
//@useState("dasdas")

// Class decorator
function setAPIVersion(apiVersion: string){
  return (constructor) => {           
    return class extends constructor{
      version = apiVersion;
    }
  }
}
// decorator - take note of the version of the API
@setAPIVersion("2.0.0")
class API{}
console.log(new API());

// Property decorator
function minLength(length: number){
  return (target: any, key: string ) => { // "target" is the prototype of the class, the second parameter passed: "key" is the name of the property we are working in
    let val = target[key];

    const getter = () => val;
    const setter = (value: string) =>{
      if (value.length < length){
        console.log(`Error; você não pode criar ${key} menor que ${length}.`);
      } else{
        val = value;
      }
    }
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });

  };

}



class Movie {
  // validation - if < 5 letters - error
  @minLength(50)
  title: string;
  constructor(t: string){
    this.title = t;
  }
}
const movie = new Movie("Interstellar");
console.log(movie.title);

// Method decorator
// Parameter decorator
// Acessor decorator

// Before use decorators, it is necessary to set "experimentalDecorators": true in the tsconfig.json file

// Factory
function Logger(prefix: string){
  return (target) =>{   // target is the same as constructor. It doesn't matter what the name is, it will be always the constructor
    console.log(`${prefix} - ${target}`);
  };
}


/* 
//The decorator is a function which receive parameters as default and return something
function log(target){
  console.log(target); 

}*/

//@log //Using decorator. The target is now referring to function Foo 
@Logger("awesome")
class Foo {};
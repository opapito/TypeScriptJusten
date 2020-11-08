//@Component
//@Selector
//@useState("dasdas")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class decorator////////////////////////////////////////////////////////////////////////////////////
function setAPIVersion(apiVersion) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = apiVersion;
            }
        };
    };
}
// decorator - take note of the version of the API
let API = class API {
};
API = __decorate([
    setAPIVersion("2.0.0")
], API);
console.log(new API());
// Property decorator //////////////////////////////////////////////////////////////////////////////////
function minLength(length) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value) => {
            if (value.length < length) {
                console.log(`Error: você não pode criar ${key} menor que ${length}.`);
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Movie {
    constructor(t) {
        this.title = t;
    }
}
__decorate([
    minLength(50)
], Movie.prototype, "title", void 0);
const movie = new Movie("Interstellar");
console.log(movie.title);
// Method decorator
function delay(ms) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Esperando ${ms} milliseconds...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
            return descriptor;
        };
        /*     console.log("target ->", target);
            console.log("key -> ", key);
            console.log("descritptor -> ", descriptor); */
    };
}
class Greeter {
    constructor(g) {
        this.greeting = g;
    }
    // decorator to wait a time and then it will run the method
    greet() {
        console.log(`Hello! ${this.greeting}`);
    }
}
__decorate([
    delay(1000)
], Greeter.prototype, "greet", null);
const people1 = new Greeter("My friend!");
people1.greet();
// Parameter decorator
// Acessor decorator//////////////////////////////////////////////////////////////////////////////////
// Before use decorators, it is necessary to set "experimentalDecorators": true, and set the "target":"ES2017" in the tsconfig.json file
// Also it is possible to run typescript with the following command: tsc --target es2017 decorators.ts --watch
// Factory
function Logger(prefix) {
    return (target) => {
        console.log(`${prefix} - ${target}`);
    };
}
/*
//The decorator is a function which receive parameters as default and return something
function log(target){
  console.log(target);

}*/
//@log //Using decorator. The target is now referring to function Foo 
let Foo = class Foo {
};
Foo = __decorate([
    Logger("awesome")
], Foo);
;

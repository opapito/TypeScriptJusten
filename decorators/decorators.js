//@Component
//@Selector
//@useState("dasdas")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class decorator
function setAPIVersion(apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
// decorator - take note of the version of the API
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        setAPIVersion("2.0.0")
    ], API);
    return API;
}());
console.log(new API());
// Property decorator
function minLength(length) {
    return function (target, key) {
        var val = target[key];
        var getter = function () { return val; };
        var setter = function (value) {
            if (value.length < length) {
                console.log("Error; voc\u00EA n\u00E3o pode criar " + key + " menor que " + length + ".");
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
var Movie = /** @class */ (function () {
    function Movie(t) {
        this.title = t;
    }
    __decorate([
        minLength(50)
    ], Movie.prototype, "title");
    return Movie;
}());
var movie = new Movie("Interstellar");
console.log(movie.title);
// Method decorator
// Parameter decorator
// Acessor decorator
// Before use decorators, it is necessary to set "experimentalDecorators": true in the tsconfig.json file
// Factory
function Logger(prefix) {
    return function (target) {
        console.log(prefix + " - " + target);
    };
}
/*
//The decorator is a function which receive parameters as default and return something
function log(target){
  console.log(target);

}*/
//@log //Using decorator. The target is now referring to function Foo 
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo = __decorate([
        Logger("awesome")
    ], Foo);
    return Foo;
}());
;

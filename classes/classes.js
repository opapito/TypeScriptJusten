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
// Abstract class -> can not be used as blueprint for new classes, but it is possible to extend from such class
/* abstract */ var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
//inheritance
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        // accessors -> setters and getters
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log("-------GET-------");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " and has the char " + this.nickname + " at level " + this.level + ".");
    };
    return CharAccount;
}(UserAccount));
var will = new UserAccount("Will", 30);
console.log(will);
console.log(will.age);
will.logDetails();
var john = new CharAccount("John", 45, "johnmaster", 80);
john.logDetails();
john.logCharDetails();
//john.nickname = "Wayne"; // cannot access, read-only 
john.setLevel = 999;
console.log(john.getLevel);

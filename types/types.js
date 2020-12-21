"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string('foo', "foo", `foo`)
var message;
message = "foo" + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
//array
var items;
items = ["foo", "bar"];
var values;
values = [1, 2, 3];
// tuple (it is an array where we already know the type and content)
var title;
title = [1, "foo"];
//title = [1, true]  error
// enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
// any  (anything)
var thing;
thing = 'thing';
//void (empty)
function logger() {
    console.log('foo');
}
// never (never will return)
function error() {
    throw new Error("error");
}
// object 
var cart;
//cart = true //error not an object
cart = {
    key: "fi"
};

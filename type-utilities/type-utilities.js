var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//// Readonly
var todo = {
    title: "Watch Dark again",
    description: "Remember the details",
    completed: false,
};
//todo.completed = true; // NOT allowed after Readonly utility
console.log(todo);
//// Partial
function updateTodo(todo, fieldsToUpate) {
    // that only existent properties can be passed. It is not possible to pass a 
    // new property
    return __assign(__assign({}, todo), fieldsToUpate); // the properties of the first parameter "todo" will be overwritten by the ones with the same name in the second parameter "fieldsToUpdate"
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Finish Ghost of Tsuhima",
    completed: false
};
console.log(todo3);
var todo4 = {
    title: "Omit Ghost of Tsuhima",
    completed: false
};
console.log(todo4);

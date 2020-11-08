type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

//// Readonly
const todo: Readonly <Todo> = {
  title: "Watch Dark again",
  description: "Remember the details",
  completed: false,
}

//todo.completed = true; // NOT allowed after Readonly utility
console.log(todo);

//// Partial

function updateTodo(todo: Todo, fieldsToUpate: Partial<Todo>){ // The "Partial" utility make all properties optional, but keep the constrain 
                                                               // that only existent properties can be passed. It is not possible to pass a 
                                                               // new property
  return { ...todo, ...fieldsToUpate }; // the properties of the first parameter "todo" will be overwritten by the ones with the same name in the second parameter "fieldsToUpdate"
}

const todo2: Todo = updateTodo(todo, { completed: true})
console.log(todo2);

//// Pick
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
  title: "Finish Ghost of Tsuhima",
  completed: false
}

console.log(todo3);


//// Omit
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
  title: "Omit Ghost of Tsuhima",
  completed: false
}

console.log(todo4);

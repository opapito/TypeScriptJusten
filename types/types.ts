// boolean (true / false)
let isOpen: boolean
isOpen = true

// string('foo', "foo", `foo`)
let message: string
message = `foo${isOpen}`

// number (int, float, hex, binary)

let total: number
total = 0xff0

//array
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple (it is an array where we already know the type and content)
let title: [number, string]
title = [1, "foo"]
//title = [1, true]  error

// enum
enum Color {
  white = '#fff',
  black = '#000'
}

// any  (anything)
let thing: any
thing = 'thing'

//void (empty)
function logger(): void {
  console.log('foo')
}

//null | undefined
type nothing = string | undefined | null

// never (never will return)
function error(): never{
  throw new Error("error");
}

// object 
let cart: object
//cart = true //error not an object
cart = {
  key: "fi"
}



# Javascript

Javascript helps us to make the webpages **interactive** and **dynamic**. We can do things like interact with html elments, change values, change colours, trigger animations, load different data, etc.

Take a look at a website like [Airbnb](https://www.airbnb.co.uk/) and click around, you will see there are lots of dynamic things that happen when you click on things. Most of this is handled with Javascript.

## Background 

Not to be confused with Java - they are quite different. Javascript was invented by Brendan Eich, the co founder of the Mozilla project. It was originally called ECMAScript, and later changed to Javascript.

You will still occisionallly see term like ES5, ES6, this relates to the original name. So basically, ES6 is the latest version of Javascript at the time of writing.

## Console

A good way of trying out j is by using the console, in Chrome dev tools for example ( also available in firefox/safari).

This is good for practise but ALSO good for **debugging** issues with your javascript.


## Variables

Variables allow us to store data, that we can use multiple times and perfom action with.

Since ES6 there are two main ways of declaring a variable, **let** and **const**.

Before all variables were declared with **var**, this is now kind of outdated way of doing it, but you can still use it for legacy browser support etc.

### The new variable declarations (const and let)

For both const and let you cannot accidentally declare the smae variable twice, whereas with var it was possible and led to problems in your code elsewhere that were hard to debug.

### Const
With const - you cannot reassign a value to it. That means you can't say:

BAD:
```
 const myNumber = 12;
 myNumber = 10;
```

## let
With let variables you can reassign values - but you cannot redclare.

eg,, this is fine:
```
 let myColour = '#e9e9e9';
 myColour = 'red';
```


## DATA TYPES IN JS

### Strings

Strings are a sequence of characters. A string is used to for text information. A string can also contain different characters and number.

When using special characters you should always escape them. Eg. adding an apostrophe, yoy should escape it with a backslash:
https://www.w3schools.com/js/js_strings.asp

```
const myString = 'I haven\'t got a dog';

```

When we use the plus sign with two strings it concatenates (joins together) the two strings.

### Number

and integer of floating point decimal such as  or `2` or `1.245`

### object

An object looks like this 


Objects are declared with curly brackets. They have one or more key/value pairs. They are useful for storing multiple properties in a single variable. Like for example this car object:

```
 const car = {
    make: 'Volvo',
    model: 'X40',
    cylinders: 6,
 }
```

To get a single value:

```
console.log( car.make );
// OR
console.log( car["make"]);
```
Each key is the name of the peoperty, and the value can be any type of data, eg a number, string, another object, array etc..

Make sure you comma separate the properties rather than semi colon.

## Arrays 

An array is a type of object, but they only container the value - but each value has an index (represents the order of the item in the array). Eg
```
const fruits = ['apple', 'orange', 'pear']
```
This is the equvalent of:
```
const fruits = [
    0: 'apple', 
    1: 'orange', 
    2: 'pear']
```

To get a single fruit:

```
console.log( fruits[2] );
```

## Booleans

This is a true or false value. No need to use single quotes.
 Eg.
` let isSaturday = true;`




## Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Function looks like this

```
function nameOfFunction(parameter1, parameter2) {
    //code to be excuted
}
```

to call a function we do this:
```
nameOfFunction(value1, value2);
```
## Why we use functions

We use functions to create reusable code. So we can call the same function multiple times, without writing all those lines of js again.

We can pass in different values each time the function is called.

## Conditionals

A conditional statement allows us to perform certain tasks if a condition is met. 

The syntax for a consition is as follows:
```
 if ( /* condition goes here */ ) {
    // js to be carried out if true
}
```


# Homework 1

Create a function that returns your your full name from two parameters. So If your first name is 'Joe' and your surname is 'Bloggs' is should return Joe Bloggs.

It will look something like this:

```
function getName(firstName, surName) {
    return firstName + ' ' + surName;
}
const name1 = getName('Marlon', 'Brando');
const name2 = getName('Sidney', 'Poitier');
console.log(name1);
console.log(name2);
```

# Homework 2

**Stretch challenge** (this one is a bit more challenging, don't worry if you can't do it.)

In physics you can calculate the speed of something by appyling this formula:

_Speed equals distance divided by time._

Create a function that calculates the speed of an object. This function will accept **two parameters** ( distance and timeTaken).

The function should return the speed.

Remember you pass in the actual values for speed and time when you **call** the function. Read over and over this (page)[https://www.w3schools.com/js/js_functions.asp]. 

Do something with the output (either console.log or use .innerHTML on a page element to add it to your html page)




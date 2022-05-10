## Object data types

## Importing an external js script

You can import an external script by including it at the end of (but inside) the <head> tag. If you do it this way you should use the keyword **defer** so it loads at the end of the HTML.

The script tage should look like this:
`<script src="script.js" type="text/javascript" defer></script>`

Alternatively you can include the script, without defer, at the bottom of the body like this:

`<script src="script.js" type="text/javascript"></script>`

Notethat the src attribute must match the relative path to the script.js file where you are writing your javascript.

### Object

syntax:
```
let object = {
  property: value,
}
```
To access an object in javascript you can use either: 
`object.property` or `object['property']`

Please check this page to read more: https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_constructor, and also take a look at the example we did in class (constructor.html) to learn about how we can create new objects with different values.


### Array
Arrays are a special type of object but they don't have named properties.

syntax:
```
let array = [
  'value',
  'another value'
]
```
Array items have a key and a value - like 0: myvalue To access an array in javascript you can use: array[0] the number in the square brackets being the key of the array item. Sequences of indexes in js begin with 0.. then 1, 2, 3 etc..



# creating HTML in Javascript

Make sure you plan out the html that you are wanting to create. Then write out the steps you need to do, eg _create paragraph element and store in variable_ 


```
const div = document.createElement('div');
```

<div></div>

```
const para = document.createElement('p');
```

<p>...innerHTML...</p>

```
para.innerHTML = person.age;

div.appendChild(para);
```
```
<div>
    <p>...person.age...</p>
    <p>...person.name...</p>
    <p>...person.haircolour...</p>
</div>
```
## Difference between using .appendChild and .innerHTML
- innerHTML is mutable, this means that the content get REPLACED
- appendChild, ADDS something to what is there

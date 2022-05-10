## Object data types

syntax to store an object in a variable:
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

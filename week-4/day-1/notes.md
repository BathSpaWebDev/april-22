# Javascript and the DOM

Summary:

- What is the DOM
- querySelector
  - Properties that exist on an Element
- how to get elements from a JS file (the `defer` keyword)
- Exercise 1
- querySelectorAll
- Exercises 2, 3, and 4

## DOM

DOM stands for Document Object Model: it is how the browser stores your HTML and CSS.

We can access this from JavaScript using the `document` global variable. Javascript can use this to:

- read HTML

- manipulate HTML

- react to certain triggers ("events") (not covered today)

## querySelector

`document.querySelector("selector goes here")`

The query selector takes a CSS selector. Anything you can use in CSS to target HTML you can use in this function/method - don't forget to use `.` for classes and `#` for ids!

Returns the FIRST (and only the first) item that matches the selector. This is called an Element.

### Properties that exist on an Element

Properties can be called using the dot notation:

```js
// like this
console.log(document.querySelector("p").innerText)

// or from a variable
const pTag = document.querySelector("p")
const pTagText = pTag.innerText
console.log(pTagText)
```

These are the some of the main ones you are likely to use:

- className

  - value: a string of all the classes on an element

- classList

  - value: DOMTokenList (a special kind of array)

  - you can call `add("className")` and `remove("className")` on the DOMTokenList to add/remove classes

- hidden

  - a boolean value

  - set to true to show the element on a page

  - set to false to hide the element from the page

- innerText

  - the text content of an element

  - we can set it to a new value (using `=`)

- innerHtml

  - this gives us the HTML CONTENT of the element (i.e. not including the element's HTML) as a string

  - can be set to a new string of HTML (using `=`)

There are others for specific types of Element, such as this example for an input tag element:

- value

  - used on an input tag to get the contents

## Accessing elements in a JS file

HTML runs in the order that it is written (by default).

That means that a script tag at the top of the HTML is run before the browser "renders" the elements on the page.

We use the `defer` keyword inside our script tag to load/run the code AFTER the HTML has rendered, so that the JavaScript has access to elements on the page.

###### "Render" definition: to load an element on the page, and add it to the document object model.

## Exercise 1
Make an HTML file and a JS file. `console.log()` the innerText of each of these p tags

```html
<div class="exercise-one">
  <p>I am P tag number ONE</p>
  <p class="second-p-tag">I am P tag number TWO</p>
  <p id="last-p-tag">I am P tag number THREE</p>
</div>
```

###### Hint: use the tag, the class or the id for the selector of each one

## querySelectorAll

`document.querySelectorAll("selector")`

Returns a special kind of array called a NodeList, that contains every Element that matches the selector (for example, every p tag on a page).

The NodeList does not have every Array method, but it does have `.forEach`. It works the same way as a `forEach()` on an Array.

```js
const pTags = document.querySelectorAll("p")
pTags.forEach(currentPTag => {
  console.log(currentPTag.innerText)
})
```

It does not have:

- `.map`

- `.reduce`

- `.filter`

## Exercise 2

Make a function that adds the "redBox" class to `second-p-tag`

```html
<div class="exercise-two exercise-three">
  <p class="p-tag">I have one class. I am P tag number ONE</p>
  <p class="p-tag second-p-tag">I have two classes. I am P tag number TWO</p>
  <p class="p-tag" id="last-p-tag">I have one class and one id. I am P tag number THREE</p>
</div>
```

```css
.redBox {
  background-color: #c03c3c;
  padding: 5px;
  color: #ffffff;
}
```

## Exercise 3

Using the same HTML/CSS as above, make a function that console.logs the LAST word from every p tag (i.e. "ONE" or "TWO" or "THREE")

## Take Home/Exercise 4:

Make a function that takes a number. It returns a string that puts together every word at that number from these p tags:

```html
<div class="exercise-four">
  <p class="p-tag">one two three four five six seven eight nine ten</p>
  <p class="p-tag">ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE TEN</p>
  <p class="p-tag">One Two Three Four Five Six Seven Eight Nine Ten</p>
  <p class="p-tag">Elephant Banana Cat Green Bags Dragons Pink Kipper Flamingo Lion</p>
</div>
```

Expected output:

```js
// get second words
console.log(getNthWord(2)) // "two TWO Two Banana"
// get tenth words
console.log(getNthWord(10)) // "ten TEN Ten Lion"
// get eighth words
console.log(getNthWord(8)) // "eight EIGHT Eight Kipper"
```

###### Hint: you need to turn the text into an array. Arrays are zero indexed.

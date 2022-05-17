
# Events (in JS)

- What is an event

    - using event listeners

    - click event examples

    - Using the event target

    - Applying listeners to many elements

- Exercises

- SPAs: conceptual introduction

    - More info


# What is an event

An event an action that can trigger behaviour (on your website).

- usually user events
    - clicking, hovering, typing, scrolling
- events caused by the page
    - when the page finishes loading

Main ones we will cover:

- click event
- [mouse hover events](https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events)
- change event (covered tomorrow)
- submit event (covered tomorrow)

## using event listeners

1. Select an element
2. Add a listener to a specific event
3. Pass in a function that will be called when that event is triggered

`button.addEventListener("eventType", () => { ...code goes here })`

## click event examples

### log to console

```html
<button id="say-hello">Log "Hello!"</button>
```

```js
const button = document.querySelector("#say-hello")
// click event for a button with a specific ID
button.addEventListener("click", () => {
    console.log("Hello!")
})
```

### Toggle a hidden element

```html
<h1>Title</h1>
<p class="subtitle">I am the page subtitle</p>
<button id="hide-subtitle">Hide Subtitle</button>
```

```js
const button = document.querySelector("#hide-subtitle")
button.addEventListener("click", () => {
    const subtitleElement = document.querySelector(".subtitle")
  
    // toggle hidden element
    if (subtitleElement.hidden === true) {
        subtitleElement.hidden = false
    } else {
        subtitleElement.hidden = true
    }
})
```

### Change a class property

```html
<h1>Title</h1>
<p class="subtitle">I am the page subtitle</p>
<button id="hide-subtitle">Hide Subtitle</button>
```

```css
.hidden {
  visibility: hidden;
}
```

```js
const button = document.querySelector("#hide-subtitle")
button.addEventListener("click", () => {
    const subtitleElement = document.querySelector(".subtitle")
    const elementClasses = subtitleElement.classList

    elementClasses.toggle("hidden")
})
```

## Using the event target

The event callback takes a parameter of "event". This event gives us extra info about the event, including the element that triggered it (e.g. a specific button).

### Change a style property

```html
<div class="box"></div>
```

```css
.box {
  height: 300px;
  width: 300px;
  border: solid 2px #969696;
  margin: 20px auto;
}
```

```js
const box = document.querySelector(".box")
box.addEventListener("click", (event) => {
  const box = event.target
  box.styles.backgroundColor = '#990000'
})
```

## Applying listeners to many elements

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```css
.box {
  height: 300px;
  width: 300px;
  border: solid 2px #969696;
  margin: 20px auto;
}
```

```js
const boxes = document.querySelectorAll(".box")
boxes.forEach(box => {
  box.addEventListener("click", (event) => {
    const box = event.target
    box.styles.backgroundColor = '#990000'
  })
})
```

## Exercise 1
Make a button that console.logs an increasing number every time you click it.

## Exercise 2:

Make a counter that increases the value displayed in the browser when
you click the button.
```html
<p id="counter">0</p>
<button>+1</button>
<button>-1</button>
```

_Hint: IDs_

## Exercise 3 (optional):

Add a button that reduces the value in the counter from Exercise 2.

## Exercise 4/Take home:

Make three boxes that change colour when you hover over one.

- Only the box that you hover over should change colour.

- They should all use the same selector (querySelectorAll).

Part two: make it change back afterwards.

Hint: The event is not called "hover": https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

# SPAs: conceptual introduction

SPA: Single Page Application.

An application that uses Javascript to navigate between multiple pages, instead of using new HTML files, and instead of using the anchor tag with an href.

We can do this by hiding all elements except the one we want using click events on buttons.

## More info

We will cover this later in the course (c. week 7). However, it is beneficial to know the theory behind how to do it (which we will apply later on).

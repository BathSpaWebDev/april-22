
# Summary

- Forms and the `submit` event
   - Exercise 1
- Validation and the `change`, `keydown` and `keyup` events
   - Take home exercises

# Forms and form events

By default, a form uses an "action" attribute to submit data to a website/file. The submit input will trigger this.

```html
<!-- Submitted to example.html file-->
<form action="example.html">
   <input name="age-input" type="number">
   <input type="submit">
</form>
```

Instead, we want to handle the user input before it is submitted, and do something other than sending it to another
file.

## submit event

Rather than being fired on an input that is clicked, it is fired on the whole form.

We add an event listener on this form for the submit event.

```js
const form = document.querySelector("#example-form")
// we call this the submit event handler
form.addEventListener("submit", (event) => {
   console.log("SUBMITTING FORM!")
})
```

## How to prevent a form from being submitted

Why would we do this?

- so that we can validate the form before it is submitted, and cancel the submission if the content is not valid
- so that we can do something different with the submitted values (such as displaying values on the current page)

`event.preventDefault()`

This `preventDefault()` property exists on most events. Other examples:

- prevent a character from being written when someone presses a key (see `keydown`, below)

- prevent someone from scrolling, clicking something, or right clicking something

# Exercise 1

Make a form with three inputs - use a number, a text and another type of input. Use JavaScript to prevent it from
submitting, and to put the values into the HTML.

###### Hint: you can also use innerHTML instead of innerText

---

# Validating forms

Validation means checking that we are providing valid values.

We might check that a value:

- only contains certain characters (e.g. only number, or only alphabetic characters)

- is from a list of options (e.g. a country list)

- is within a range (e.g. a number between 0 and 100)

- has a specific combination of characters (e.g. a password that must contain uppercase, lowercase, numeric and special characters)


## The first layer of validation:

In HTML5 different types of input have inbuilt validation. For example, the `email` input requires a string with an `@` symbol and some more characters afterwards.

However:

- the browser must support the HTML5 input we are using (if not, you will only have a text input)

- the user can change the HTML to any type using the element inspector

- the quality of the inbuilt validation isn't always very good. For example, the `email` input will allow me to set a value of `gmail@gmail`, with no `.com`!

- it can't do all the checks we want! For example, we might want to make one field required, but ONLY if the user has checked a box elsewhere on the page.

For those reasons they are useful, but we generally want more validation.

## A second layer of validation:

We can add another level of validation in JavaScript. The main way we do validation:

- on the input, rather than on submit
- using the `change` event
- using the `keyup` event (and sometimes `keydown`)

### change event

The `change` event is triggered under certain conditions.

1. When the user changes the value of an input by interacting with it (e.g. checking a checkbox, or pressing the up/down buttons on a number input)
2. When the user has typed into a field and then **clicked off** the field.

This is useful for giving feedback on a value/validating it when the user has finished typing in a value, or is interacting with an input that does not require entering a text value.

### `key*` events
#### keyup

The `keyup` event is triggered when the user types AFTER you have put a value in the page.

This is useful for checking that the current value of a text input is valid.

```js
const ageInput = document.querySelector("#age-input")
ageInput.addEventListener("keyup", () => {
   if (isNaN(Number(ageInput.value))) {
      console.error("INVALID INPUT! Value should be a number.")
   }
})
```

#### keydown

The `keydown` event is triggered when the user types BEFORE you have a value.

This is useful for checking that the current character/key the user is pressing is a valid character.

```js
const ageInput = document.querySelector("#age-input")
ageInput.addEventListener("keydown", (event) => {

   const keyPressed = event.key
   if (isNaN(Number(keyPressed))) {

      console.error("INVALID CHARACTER!")

      // don't let user type this value into the input
      event.preventDefault()
   }
})
```

## A third layer of validation

Validate input values on submit, as well.

There's a chance that even if you use the `change` and `key*` events an input might have been filled in a way that bypasses those actions (such as being autopopulated by the browser, or having the value changed by other JavaScript code, or even the use going into the Element Inspector and changing the value from the HTML!).

There are also sometimes final bits of validation that you don't want to do until the whole form has been filled (e.g. checking that two fields have the same value).

### Combining them all!

- We want to use `change` for inputs that don't have `key` events (e.g. checkbox)

- We can use `key*` for inputs that we want immediate feedback on (e.g. text), or where we want to prevent a character from being written into a form

- We want to use `submit` at the end to double/triple check the validation we have done on other events

#### Improving your validation

REUSABILITY! Make your code "DRY" - meaning, Do not Repeat Yourself.

Validation is often reusable. For example:

- you might run the same validation on `keyup` and on `submit` events.

- you might have parts of the validation that are reusable on multiple inputs, such as checking that multiple inputs are number values

We will cover best practice later on, but for now, make sure to put any reused code into functions that you can call in multiple events.

---

# Take home exercises

1. Add a validator to your form.
   - Validate that the number field is over 10, under 122, and is a number.
   - if it fails validation, provide an error message to the user

2. Take a look at [my code](https://github.com/BathSpaWebDev/formEventHandout/) and refactor it, so that the submit event does not post the age to the `#output` element if it fails
   validation.

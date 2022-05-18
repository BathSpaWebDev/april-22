
# Summary

Today is all about practice.

- Exercise 1: create a form and add validation

- Introduction to Regex
  - Exercise 2: add a field and use regex (`.match()`) to validate it

- Tangent time: `focus` and `blur` events

- Exercise 3: review and refactor!

# Validation Exercise

1. Create a form that has these fields, with these validation requirements:

- a text input
    - required field
    - maximum length of 20 characters
- number input
    - that has a range of -10 to 10
    - is not required


- another text input that doesn't let you type the letter "T"
- a checkbox that is required (must be checked)


- an optional checkbox (checkbox 2)
- a text input that must have a value if checkbox 2 is selected

2. Only submit if all the conditions are met.
3. All the validation should be in JS (no HTML5 attributes!)
4. The user should see an error message if the conditions are not met.

Stage 2: Refactor to use functions, and to clear the errors when a field is valid.

# REGEX! Regular Expressions

Regex is used to look for patterns of characters in a string, it is the tool of choice in almost all coding languages.

It can be very powerful, but quite complicated and confusing - in fact, most developers never truly learn it, and look it up to re-learn regex every time they use it!

A regex pattern looks like this:

`/pattern/g`

- It has two characters at either end; this is usually a forward slash.

- Inside, it has a pattern of characters to match. You can write these pattern using:
  - plain characters (e.g. a, b, c, 1, 2...)
  - special characters that match multiple values (e.g. `\w` matches any number or letter, `\d` matches any number, `.` matches ANY character)
  - slightly more complicated operators (e.g. `[abc]` will match a or b or c, `+` will match one or more repeated characters)

- After the final slash, it often has a 'flag' to determine how it runs.
For example: `g` will search for more than one match, and `i` is case insensitive.

I love Regex, but you don't have to. If you are curious, however, you can learn about it here:

[https://regexone.com](https://regexone.com)

And practice it here:

[https://regex101.com](https://regex101.com)

## How do we use it in JS?

Often we use `.match(regex)` on a string, where `regex` is a regular expression.

Pretty much always use the `g` flag to get an array of matches, if there are
successful matches, but it will return `null` if there are none.

### How do patterns work

They are sequential and case sensitive by default:

```js
// matches the entire pattern
'Hello'.match(/ll/g) // ['ll']
'Hello'.match(/l/g) // ['l','l']
// the characters must be in the same order as the pattern 
'Hello'.match(/eo/g) // null
// case sensitive
'Hello'.match(/hello/g) // null
'Hello'.match(/Hello/g) // ['Hello']
// unless you use the `i` flag
'Hello'.match(/hello/gi) // ['Hello']
'Hello'.match(/HELLO/gi) // ['Hello']
```

### ranges

A range matches everything between two characters (from the list of character codes Regex uses). We can match on a range by using square brackets:

Basic ranges:
`[0-9]`
`[A-Z]`
`[a-z]`

Match any uppercase letters: `/[A-Z]/g`

Beware of the `g` flag: it will match as many times as possible, so instead of matching one word, it will match every letter in the word.

```js
'Hello'.match(/[a-z]/) // ['e']
'Hello'.match(/[a-z]/g) // ['e', 'l', 'l', 'o']
'Hello'.match(/[a-z]+/g) // ['ello']
```

Here are more examples to demonstrate how ranges work:

```js
'ABCabc'.match(/[A-Z]/g) // ['A','B','C']
'ABCabc'.match(/[a-z]/g) // ['a','b','c']
'ABCabc'.match(/[A-Za-z]/g) // ['A','B','C','a','b','c']
'ABCabc'.match(/[A-Z][a-z]/g) // ['Ca']
// combining with plain characters
'Hello'.match(/[A-Z]ello/g) // ['Hello']
'Hello'.match(/H[a-z]llo/g) // ['Hello']
```

### Special characters

Important ones:

`.` - matches anything. `/./` would match 'i', '1', empty space, '$' and anything other single character

`*` - matches 0 or more items. `/abc*/g` would match 'abc', 'abcccc' and 'ab'

`+` - matches 1 or more items. `/abc+/g` would match 'abc' and 'abcccc' but NOT 'ab'


You can escape a special character using a backslash:

- `/\./` will match a fullstop, not just any character.
- `/abc\+/` will only match 'abc+', not 'abc' or 'abcccc'.

## When to write your own regex

Because it can get so complicated to match complex patterns we often use premade regex patterns for common patterns. For example: postcodes, phone numbers, email addresses.

You can just google them if they come up, and you'll find resources like:

[This guide to email validation](https://emailregex.com)

[This guide to postcode validation](https://ideal-postcodes.co.uk/guides/postcode-validation)

# Exercise 2:

Add an optional field that requires these characters:

- at least one number: 0-9
- at least one uppercase letter: A-Z
- at least one lowercase letter: a-z
- at least one exclamation mark: !

If the field is empty, it must NOT show an error message.

# Tangent time

Two more events:

`onfocus` -> fired when you click onto an input

`blur` -> fired when you click OFF of an input

## Exercise 3

Refactor and improve your code!


**Step 1 (optional):**

Make a repository with a README.md file and make a pull request with your code in it. Swap it with someone else to code review.

**Step 2:**

Code review your code, or the code of the person you swapped PRs with. Look for:

- duplicated code that could be put into a function
- code that isn't doing anything (e.g. selecting an element but not
  using the value or adding an event listener to it, or an if
  statement where the condition will always be `true`, code after
  a return statement)
- unnecessary comments
- unclear variable names
- messy (or no) indentation (Hint: use `Ctrl+Alt+L` or `Cmd+Alt+L` on Webstorm to format your code)
- things you don't understand, that you can ask about

**Step 3:**

Make changes! Refactor YOUR code to be better.

If you made a pull request, you can push your changes to your branch and ask your peer to review your code again.

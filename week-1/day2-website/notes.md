# CSS intro

This is the structur of a css Rule:
```
/*

    selector {
        css-property: value
    }
*/
```
        

## adding multiple slectors for one css rule

We can do this by using comma separated selectors. Eg:

```
p, h3, div {
color:red;
}

/* is the equivalent of */
p {
    color:red;
}
h3 {
    color:red;
}
div {
    color:red;
}
```

## targetting an element within an element 

To do this we write out the parent elemt then leave a space followed by the child element:

``` 
    section .intro-paragraph {
        /* this is tagetting  intro paragraphs within sections*/
        color: blueviolet;
    }
```

## target an specific element with a class

To do this you have the elmentname follwoed immediaiadely by a dot and the class name:
```

p.intro-paragraph {
    /* this is tagetting  all paragraphs with the class into-paragraph*/
    color: blueviolet;
}

```

## Hyperlinks

Hyperlinks take us from one page to another, when we click it. You can create a hyperlink  like so:

```
<a href="https://google.com">Click me</a>
```
The href tells us the path of the page we want to link to - this can be relative (to the file we are editing), or absolute (eg: https://google.com).

Please note that the href must go within the opening a tag ( *before the `>`*)

To make it open in a new tab, you add target attribute (value is "_blank") and the rel attribute as follows:

```
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Click me</a>
```


## Stylesheets

External stylesheets allow us to keep the code tidier and less cluttered. You need to save a stylesheet with a `.css` suffix. In your HTML document, you need to link the stylessheet using the <link> tag, like so:

```
<link rel="stylesheet" href="path/to/your/stylesheet.css">
```

## Writing css

Css is allows us to change the visual side of our webpage. It allows us to apply "styles" to html elements.

For example I can apply a style to a paragraph like this: 

```
p {
    color:red;
}
```

The syntax is as follows:

```
selector {
    css-property: value
}
```

you can add comments in css like this:

```
/* Add some explanation or comment about your code here */
```

## classes

Classes are attributes you add to you html tags. They are identifiers that allow us to identify and specify certain elements in our css rules (in even in javascript). 

For example if I add a class of "myclass" to a div, then apply a css rule to select .myclass the css rule will only apply to that class of div, and not others.

To use class selector in css, precede the classname with a **`.`**

Example of adding a border to a div with the class of box:

html:
```
<div class="box"></div>
<div></div>
```

css:
```
.box {
    border: 1px solid black;
}
```
*Note: the border will only be applied to the first div*

# Ids
An Id is similar to a class in that it adds an identifier to our html element, but with an id it is a unique identifier - ie you should not have more than one of them on the document.

Example:
html:
```
<div id="box1"></div>
```

css:
```
#box {
    border: 1px solid black;
}
```
To use id as selector in css, precede the classname with a **`#`**


## Challenge one

Create two divs next to eachother. Each div should be 100px by 100px. 

Make the second div have a red background.

`width, height, background-color, display:inline;`

## challenge two

Create two sections on a page, each with two paragraphs inside. 

Give the second section a class of feature-section.

Make only the last paragraph of the feature section have orange text.

`color`


homework

Create a simple one page website that reviews a youtube video.

Embed the youtube video somewhere.

Try to use semantic html as much as possible.
https://www.w3schools.com/html/html5_semantic_elements.asp
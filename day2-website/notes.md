# CSS intro

This is the structur of a css Rule:
```
/*

    selector {
        css-property: value
    }
*/
```
        

## adding multi0ple slectors for one css rule

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

## Challenge one

Create two divs next to eachother. Each div should be 100px by 100px. 

Make the second div have a red background.

`width, height, background-color, display:inline;`

## challenge two

Create two sections on a page, each with two paragraphs inside. 

Give the second section a class of feature-section.

Make only the last paragraph of the feature section have orange text.

`color`



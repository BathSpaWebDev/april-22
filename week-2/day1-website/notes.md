
## Flexbox 

Flex box is a css layout system that enables us to create layouts, that work flexibly - ie they work independent of the content in the flex container.

Flexbox  makes things easier - before we had to use things like `float`, which could cause knock-on effects and layout issues that were hard to debug ( and was often trickier to acheive more complex, nested layouts).

## One dimensional

Flexbox is said to be one dimansional in that the layout can either be on the x axis OR the y axis ( depending on if you set the flex-direction property to row, or column).

Often times this is enough but when you need to set both row heights and column widths etc, you may opt to use css grid which is 2 dimansional (which has slightly less cross brower support).

# Flex is content first
content-first design  — Flexbox is the ideal layout system to create web pages if you don’t know exactly how your content is going to look, so if you want everything just to fit in, Flexbox is perfect for that.

the oppositie is layout-first - if you want your content to fit into a set layout, it may be better to use css grid.

### How Flex works

It consists of a flex-container, and flex items ( these are the elements within the container). We define a flex container by applying a css property to the parent element, like so:

css
```
.flex-container {
    display: flex; 
}
```

html:
```
<div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
</div>
```

Once the flex container is set, you can apply other flex properties that determine the behaviour of the inner elements (flex items)

## justify-content
With this property place theflex item either at the beginning, middle or end on the x axis. This allows us to easily center a div in a box for example. 


## align-items
align-items vertically aligns items. But you have to set the height of the container for this to work.

## flex-wrap 
Setting flex wrap on the container makes the items go onto the next line when they exceed the width of the container. By default items do not wrap, it tries to squeeze all items onto one line (which sometime is not what you want)

## Creating a center-aligned logo

We can easily make a div(e.gl a div containing a logo) sit in the vertical and horizontal center of the page.

Set the container to be full width and height of the viewport using height:100vh;width:100vw;

Then use `justify-content:center;`, and `align-items:center;` to make the logo div sit in the middle.

## Examples

Navbar where we want all the items to be spaced evenly in a row.

Logo in the vertical and horizontal center of a page - e.g a landing page.

Footer with three columns  left to right.


## Psuedo elements

Psuedo classes look liike this `:name-of-puedo-class` .They start colon.

Some example of psuedo classes are :hover, :visited.

You can apply styles to elements when you hover over them like this:

```
.mydiv:hover {
    /*Add some hover styles*/
}
```

Creating a hover effects on a list of links:

html
```
 <nav>
        <ul>
            <li>
                <a href="#">Link 1</a>
            </li>
            <li>
                <a href="#">Link 2</a>
            </li>
            <li>
                <a href="#">Link 3</a>
            </li>
        </ul>
    </nav>
```

css

```
ul {
    list-style: none;
}
ul li {
    display:inline-block;
    width:60px;
    height:40px;
    background:#e9e9e9;
}

ul li a {
    text-decoration:none;
}

ul li a:hover {
    text-decoration:underline;
}

ul li a:visited {
    color:red;
}

```

## CSS trnsform

Css transform is a css property that allows us to interact with elements. There are a number of types of tranform we can apply to elements. You can find them all [HERE](https://www.w3schools.com/cssref/css3_pr_transform.asp).

In class we have covered two different types of transform - rotate and translate.

With these examples we have created a spinning effect, and a slide-in text.

To make something rotate when we hover over something, you can apply the transition property, e.g. `transition: transform 2s;` - this means any change to the transform property will take 2s to complete. We then add the change to the transform property inside our :hover css rule 

Here is the code for the example: 

html
```
<div class="box">
    <div class="box__inner">
        <span>Hover over me</span>
    </div>
</div>
```

css
```
.box__inner {
    background-color: green;
    padding: 2rem;
    width: 140px;
    height: 140px;
    color: #fff;
    font-size: 2rem;
    transition: transform 1s;
}

.box:hover .box__inner {
    background-color: red;
    cursor: pointer;
    transform: rotateY(360deg);
}
```

In order to make something slide in we set the transform property's _translateX_ value, and we use transtion to  control the duration of the change.

The code is like so:

html
```
 <div class="box">
        <div class="box__inner">
            Lorem ipsum dolor at nesciunt, laudantium possimus fuga quae maiores quis nulla?
        </div>
    </div>
```

css
```
.box {
    width: 400px;
    height: 400px;
    background-color: blue;
    overflow-x: hidden; /*this hides anything that is outside of its perimiter */
}
.box .box__inner {
    width: 100%;
    height: 100%;
    background-color: red;
    transform: translateX(-100%);
    transition: 1s transform linear;
    color: var(--brand-col-2);
    padding: 10px;
}

.box:hover .box__inner {
    transform: translateX(0);
}
```

Nb: We set the default position to be 100% to the left, so it is effectively hidden as we are using overflow:hidden;
Then in our :hover css rule (note that :hover is on the parent container .box and not on .box__inner), we set the .box__inner to `transform: translate(0);` so it will move into the center of the box.

## ems and rems

ems and rems are both units of measurement based on relative to a font-size. **em** is relative to the parent element's font-size.

So if a div has a font-size set to 40px. and a child of that div has a font-size set to 2em will be computed as 80px.

**rem** (root em) is relative to the font-size of the root element. So if you set the html font-size it will affect the font sizes that are set in rem accordinly.

## Homework

1. Have a go at replicating this challenge:
https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/

2. Create an image which has some text that slides in using css translate. You can copy from the code in the "transform-demo" folder.

3. Complete this quiz on HTML (please complete before end of the week).


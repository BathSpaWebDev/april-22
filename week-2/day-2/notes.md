# Responsive design

Responsive design is making a website work on different devices. Previously, before media queries were invented, everything would either just get shrunk to the size of the device screen (viewport) - making text really small and unreadable, or you would have to scroll across horizontally etc.. which was really bad user experience.

Responsive design means you are providing a better user experience, eg. more legible, more visually pleasing, dependent on the divice width ( viewport size).

## Media queries

In css we can define different styles for different viewport sizes using media queries.
A media query looks something like this:

```
@media (min-width: 768px) {
    
}

```

You can write `screen only` but it is there by default. If you pref to include it do the following:

```
@media screen only and (min-width: 768px) {
    
}
```

## Breakpoints

Breakpoints are the (usually) px value viewport widths at which a media query will kick in.

You usually have breakpoints for the common device sizes eg mobile, tablet (portrait and horizontal), desktop etc...

We can get some basic breakpoints from Bootstrap (bootstrap is a css library that you can add to your site, but that is another story).

They are:

- 576px, 
- 768px, 
- 992px, 
- 1200px, 
- 1400px

## min width, max-width

You can define media queries as min-width or max-width. The following says all css inside this media query will take effect when the viewport is **at least** (ie more than) 768px:

```
@media (min-width: 768px) {
    /* some styles*/
}
```

The following means styles take effect when it viewport is **no more than** 768px: 
```
@media (max-width: 768px) {
    /* some styles*/
}
```

You can also for really specific targetting, combine min and max widths so it takes effect **between two breakpoints**:

```
@media (min-width:576px and max-width: 768px) {
    /* some styles*/
}
```

## Common strategies

If you are using a MOBILE_FIRST way of working, you would use min-width media queries.. This means you are first thinking about your default styles FOR MOBILE (eg those outside of any media query). Then the deskptop styles get defined in the media queries, almost as an after thought.

The opposite would be desktop first approace., and you wuold use max width in your media queries.

Your approach will depend on specifics, but often people interact more with websites on mobile, so bear this in mind.


# Hide/show things

You can hide or show things on mobile by setting `display:none;` or `display:block;` inside a media query. Remember to nest the whole css rule with selector included.

```
.desktop-image {
    display:block;
}
@media (max-width: 768px) {
    .desktop-image {
        display:none;
    }
}
```

## Change layout

A common thing to do is change layout by defining different flex properties for elements within media queries.

## Responsive images 

You can use the `picture` tag or _srcset attributes_ to create responsive images (ie. load different images at different breakpoints). I will will explain this a bit more tomorrow.

### picture
Example of picture tag:
```
<picture>
    <source media="(min-width: 768px)" srcset="path/to/rectangleimage.jpeg">
    <img src="path/to/squareimage.jpg" alt="random">
</picture>
```

### just img with srcset
You can also acheive responsive images using just the image tag, but I recommend going with the picture tag as it is easier to get working.

If you want to try though it is like this:
```
<img src="image.jpg" 
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 900w"
/>
```
### background images
Finally, you can change the background image of a div in a media query, but first we need to do background-images, which we will cover tomorrow.



# GIT intro

Git is quite a difficult thing to learn, so you won't get it overnight. Howver if you keep revisiting the docs and practising it, it will eventually make sense.

## Using terminal / command line / command prompt
Don't worry these words all mean pretty much the same thing. 

It means writing commands that interact with your computer system (eg creating folders/files/moving things / telling it to open an application / list files in a folder etc...)

On a mac we write these commands in an application called **Terminal**.

On Windows there are a few different options but we recommend using **git bash** to get started. Note that **Git Bash is just an application like terminal is an application on mac** 

## Using the terminal

Press tab to autocomplete a word in terminal

### Move into a folder
```
cd myfolder  
```

### Move into folder and list items
```
cd myfolder  
li -a
```

### Move back one level of folder
```
cd ..
```

### Create file
```
touch myfile.html
```

### Create folder
```
mkdir myfolder
```

### open in finder
```
open myfolder
```


# GIT

What is Git?

Git is a version control system. It allows us to create regular snapshots of our project as we're working on it.. We can revert to one of these snapshots (which are called **commits**) when the site breaks or something.

You can _push_ / (move code) to a server or remote repostory like github using the command line.

Git allows us to share code and collaborate with other developers.

Each project is called a git **repository**.

It speeds up our workflow (when you gain more knowledge of it).

Github is a service that allows us to store remote repositories in the cloud.

To set up a git repo the easiest way to get started is by creating one in Github first, then cloning it onto your computer.

Follow the [guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on github
to set up an SSH key.

Once you have set up ssh access to Github, you can move code from Github to your local computer.

## Git clone

Copies a repository onto your local computer from remote (eg repo on Github). The command is :

`git clone url-of-repo`

(you get the url by clicking the green button in github).

# Making a commit 

To make a commit, you first need to add modified files to the staging area - using `git add name-of.file' or `git add .` to add everything that was modified.

To commit it is:

```
git commit -m "a meaningful commit message"
```




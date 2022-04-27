# Position 
Position is a css property that determines how an element can be positioned relative to other elements on the page. It is important in cacheiving different layouts, and moving. 

It is a fairly tricky concept to grasp, so focus on reading about it as much as possible as it will help you a lot in the long run.

## Position:relative;

Position relative follows the **document flow**, this means relative elements are placed left to right, and stacking on top of on another (if they are block elemtents). They take up space in the document flow, and other elements shift to after/below them. 

_(this is not the case with absolute positioned elements which are removed from this normal flow - ie they don't take up space and other elements act as if it wasn't there.)_

If I set the top offset on a relative element (eg. top: 100px;), it will move the element 100px from its original top boundary.


## Position:absolute;
When you set the box to absolute, it takes the box out of the normal document flow. Other elements around it behave as though it didn't exist.

Setting the top, left, right, bottom properties now moves the box relative to the 
**nearest parent container which is set to relative.**

eg. if I do the following:

```
div.parent {
    position:relative;
    height:200px; /* set the height in case there is no content */
}
div.child {
    position:absolute;
    bottom:100px;
    right: 15px;
}
```
...it will place the child div 15px from the right of the parent div's boundary and 100px from the bottom of the parent div. It is no longer relative to the viewport because the parent div has position relative.

## Fixed position

With `position:fixed;` it also takes the element out of the document flow. The difference is that setting the top, left, bottom, right properties **moves the box relative to the viewport (browser window).**

## Homework

The goal of the homework is to practise your layout skills.

### hw1
Complete the [frontend mento task](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U/hub/nft-preview-card-component-vVMmtvDua). To do this you need to download the starter pack by clicking the red button.

This will give you a basic template and empty index.html, aswell as any images you need to complete the task.

You may need to use `display: flex; justify-content: space-between;` (on container) to acheive some aspects of this. 

It is not necessary to make this a git repository, so you can ignore any bits asking you to create a git repository.

### hw2
(optional or if you have already done first one)

Create a top trump card that is laid out similarly to the ebay example (see slack). You can use your own images or ideas and make it your own. You can even add multiple cards. Add a link to the div containing the image, so the link sits above the image to the bottom right of the container ( see sketch in slack).

[Link to Ebay example](https://www.ebay.co.uk/itm/163439171791?chn=ps&var=462774904504&norover=1&mkevt=1&mkrid=710-134428-41853-0&mkcid=2&itemid=462774904504_163439171791&targetid=1278608952936&device=c&mktype=&googleloc=1006502&poi=&campaignid=14727339348&mkgroupid=127909237815&rlsatarget=pla-1278608952936&abcId=9300672&merchantid=7267174&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzlazU2G7PKuHT7et2UtZQNKPBkoUHHOBxSHiJjb6K776oKpTEMjbhBoCmUwQAvD_BwE)

## Research for next week

### Terminal 
The terminal is an interface in which you can type and execute text based commands.

It is also called the **command line**.

Often developers prefer to use the terminal to do things like create folders, move from one folder to another, download things from the web, use git etc...

In order to fully understand git (which we will be using later in the course) you should start to familiarise yourself with the terminal or command line.

To open it:

#### on a mac 
Go to Applications > utilities > terminal

#### on Windows
On windows it is called something different (there are, confusingly, a few programs that are all terminal applications) - the one we recommend for this course is Git Bash.

Git Bash on Windows has different commands to terminal on a mac.


It will be good for you to start to familiarise yourself with the command line.

## Some commands you can try in terminal
### Mac 
- `cd myfolder` : this moves into a folder called myfolder (providing it exists in the folder you are currently in)
Say you have a folder on your desktop called 'sites' with a web folder called 'first-website':
- cd Desktop/sites/first-website
- `ls -al` : this lists all the files in folder you are in
- `mkdir new-folder` : this creates new folder

Some other commands for mac terminal [here](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/)

## Git 

[Link to reading resource](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)

Please read this intro to Git to prepare yourselves for the final day of last week where I will do a brief intro to Git version control. It takes a lot of getting your head around, so you will inevitably not understand things at first. Learning it is all about revisiting it, over and over until you understand more and more.

Also please note, that you are not required to know git to become good at Javascript, HTML, CSS etc.. 

It is just something that in the long run will help you to work quicker and not lose your work.








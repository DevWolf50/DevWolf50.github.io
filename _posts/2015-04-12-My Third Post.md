---
layout: default
title: Lets get Sassy
image: /img/dmtn.jpg
tags: top
---


The other day I noticed a style on this website I wanted to change; so I opened my  ever-growing CSS page and painfully searched for the correct selector for about 30 minutes(exaggeration added for effect). Then I wanted to change some of the colors for a fresher look; so again, I searched the entire style sheet and wherever the old color was, I then had to paste in the new color. These are just two of many potential annoying situations in having to update your css file. Fortunately, it's been a big enough problem that other awesome people have created a solution in Sass. Sass is a precompiler that lets you add increased functionality to a sass file and then will convert that into valid CSS. With so many added benefits, I decided to learn Sass and  take my blog's CSS to newer heights. Here's my Sass conversion journey:
<br>
<br>
<h2>Setting Up Camp</h2>
<br>
Setting up sass on your computer is pretty simple; since it's written in ruby all we have to do is gem install sass. Boom! It's downloaded and ready to go. I know there are some sass programs with a GUI but, since  git and Jekyll, I've become super comfortable in the terminal/command prompt.; so I execute Sass in the terminal. Next, in my blog project folder I created another folder called SCSS and moved my giant main.css folder into my new scss folder and changed the name to "-_main.scss(more on that later). Then I created folders to help break up my styles into smaller manageable files. For example, I have layout folder that holds a _header.sccs , _nav.scss , and a _footer.sccs file. That way if I ever need to change a nav style I know exactly where to go and that file won't be cluttered with other layout styles. Once I had my file structure established I returned to the command line and executed sass --watch scss:css. This will watch for any changes my main.scss file and will convert it into a main.css file in the CSS folder. Magic!
<br>
<br>
<h2>Things I loved</h2>
<br>
<h3>Partials</h3>
As web developers, one of our main concerns is website performance. Very few people are going to wait more than a few seconds for your web page to load. That's why we use one big CSS file in the first place; so the browser doesn't have to make multiple requests to the server for different CSS style sheets.With Sass, you don't have to worry about that. You can organize your styles into as many files as your organizational heart desires because, Sass will convert them all into one main scss file. The way it works is by using the @import function. So what I've done is broken up my old  1 page CSS file into smaller partial scss files. Then in my main.scss file I import the smaller files like this:  @import "_header.scss". by naming my header file like this _header.scss, Sass will know not to compile; therefore only getting compiled if I import it into my main.scss file. So by importing all my smaller scss files into one main file, Sass will then create one long performance friendly CSS file for our browser.
<br>
<br>
<h3>Variables</h2>
<br>
Ever wish you could use variables in CSS? In Sass you can! This makes it extremely easy to update repetitive styles that you use throughout your site like colors. One of the first things I did was I created a file called _variables.sccs and then made variables for the colors I used on my site. For example, I set a variable named $primaryColor and pasted that everywhere that primary color was. Now if I ever need to change my primary color all I have to do the change that one variable. Magic!  I used this with box-shadows to easily define what level I want certain divs to appear at, animations, Font-family combinations, and other styles that are constantly repeated throughout my CSS. Variables make it extremely easy to update styles.
<br>
<br>
<h3>Mixins</h3>
<br>
Just when I thought it couldn't have gotten any better.
Mixins allow to define many different properties within a single object. One of the ways I've used this is with web compatibility properties. I know when doing a CSS animation I need to type out: transition, -webKit-transition, -moz-transition, -o-transition, etc; so that the transition will work with all browsers. With Sass mixins, I can define a mixin with al of those properties and include arguments to fill out the rest of my transition. Now every time I want to add a new animation I can just @include the mixin and sass will convert it to the valid CSS.Magic! I've also used Mixins to help position and size elements as well. Since you can you use math functions in Sass you can get pinpoint accuracy of positioning and size. Mixins are where Sass really shines.
<br>
<br>
<h2>My Final Thoughts</h2>
I was able to fully successfully convert all my CSS over to sass which currently styles this site. Some concepts I wasn't able to cover but make sass even cooler are that you can use conditions and loops. For example, you can set  the margins and padding of an element depending on its size. Even though CSS is great and may seem easy to work with, Sass really allows us to organize our styles and gives us some tools to creatively solve style problems. I know gooing forward I'll continue to use Sass for future projects!

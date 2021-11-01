# stacc-code-challenge-21
This is my answer to the Stacc coding challenge. 

## Exercise description
The challenge is to make a interface that interacts with an API. 
The main function of this application is part of a Know Your Customer check where you check to see if a person is poltically exposed. 

> My project will hopefully consist of an API and a interface that uses said API. I also want to host it on Herkou so that it can be run from anywhere.


## Comments
I have never made an API before so this is an interesting challenge. I started out in Java because that is what I am most familiar with and thought that would be a good place to start. 
I realized soon that what I was making was infact not an API but simply a interaction with the already supplied API from Stacc. 
So it was then back to the drawing board to see how to make an API and that lead me to Javascript and the Express framework for APIs. 
When making the API i got som good help from a friend showing me how the basics of an API should be made. With his help I was able to make a functioning API that I then can add a web interface on so that one can do full PEP check on a person. 

With the API functiontion I wanted to add a web page front to it so that it would work as a full application. With a little work I managed to get everything to work as intented and I was able to upload it to Heroku and have it run from there. 

At this stage of the project there is a lot more that I would want to do, but as always time is a factor. 
So a couple of things that I think should be added:
- Better handling of the search field. Now a user does not get good enough information when a search is bad. 
- More functionality in the API. Currently only a GET method is available. 
- Better ease of use for the user of the application. For example a visual cue that indicates that the search is working. 
- Taking it even further one could implement an algorithm that preloads names so that the loading time when searching is cut back drastically. 
- Also I would want to add tests on the application. 

## Heroku
Application available from
> https://stacc-challenge-pep-check.herokuapp.com/

GET PEP hit
> https://stacc-challenge-pep-check.herokuapp.com/search/?name=Jens%20Stoltenberg

Parameters
> Name Jens Stoltenberg

## Prerequisites to run
Node.js

## Running locally
`npm install`
`npm start`

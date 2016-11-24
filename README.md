#Koder Finder - NodeJS and Express

##Overview

"KoderFinder" application -- Is basically like a dating app. This full-stack site will take in results that users' surveys, then compare their answers with those from other users who previously used the app. The app will then display the name and picture of the user with the best overall match according to the answer to the questions the user submits.

Express handles all the routing. 

Check out [the live version of the site](https://koderfinder.herokuapp.com/). 

#Usage 

1. Clone repo
2. npm install
3. cd KoderFinder
4. node server.js
5. run it locally. Default Port will be PORT 3000 in any browser.
6. ENJOY! 

#Instruction:

Directory structure Koder Finder:
KoderFinder
    - app
        - data
            - friends.js
        - public
            - home.html
            - survey.html
        - routing
            - api-routes.js
            - html-routes.js
    - node_modules
    - package.json
    - server.

The survey consist of 10 questions related to Tech. Each question can be answered on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

Your `server.js` file should require the basic npm packages we've used in class: express, body-parser and path.

A `GET` route with the url /api/friends. This will be used to display a JSON of all possible friends.

A `POST` routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

All the data in the Koder Finder app is an array of objects. Each of these objects looks roughly like the format below.
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
}

The app will then determine the user's most compatible friend using the following as a guide:
Converts each user's results into a simple array of numbers `(ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).`
With that done it then compares the difference between current user's scores against those from other users, question by question. Then adds up the differences to calculate the totalDifference.

####Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

I also used the absolute value of the differences. Put in another way: no negative solutions! App calculates both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
Once I've found the current user's most compatible friend, The app then displays the result as a modal pop-up.
The modal also display both the name and picture of the closest match.

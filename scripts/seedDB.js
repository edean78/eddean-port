require('dotenv').config()
const mongoose = require('mongoose');
const db = require('../models');

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI);

const projectSeed = [
    { 
        week: "1", 
        title: "Basic-Portfolio", 
        url: "https://edean78.github.io/Basic-Portfolio/", 
        image: "https://media.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif", 
        desc: "This portfolio was created using HTML and CSS", 
        type: "homework", 
        github: "https://github.com/edean78/Basic-Portfolio" 
    },
    { 
        week: "2", 
        title: "Responsive-Portfolio", 
        url: "https://edean78.github.io/Responsive-Portfolio/", 
        image: "https://media.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif", 
        desc: "This portfolio uses media queries to make the site responsive. Meaning as the size of the site changes so does the layout", 
        type: "homework", 
        github: "https://github.com/edean78/Responsive-Portfolio" 
    },
    { 
        week: "2a", 
        title: "Bootstrap-Portfolio", 
        url: "https://edean78.github.io/Bootstrap-Portfolio/", 
        image: "https://media.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif", 
        desc: "This portfolio uses twitter bootstrap to handle the responsiveness and styling", 
        type: "homework", 
        github: "https://github.com/edean78/Basic-Portfolio" 
    },
    { 
        week: "3", 
        title: "Psychic-Game", 
        url: "https://edean78.github.io/Psychic-Game/", 
        image: "https://media.giphy.com/media/3o7TKy8m0Q4yhwYGAw/giphy.gif", 
        desc: "This game gives the user 10 guesses to guess the letter the computer chose.", 
        type: "homework", 
        github: "https://github.com/edean78/Psychic-Game" 
    },
    { 
        week: "4", 
        title: "Cyrstal Collector Game", 
        url: "https://edean78.github.io/unit-4-game/", 
        image: "https://media.giphy.com/media/BHmvTeUcIGg7u/giphy.gif", 
        desc: "The object of the game is to add up the value of the crystal to equal the computer's random value.", 
        type: "homework", 
        github: "https://github.com/edean78/Psychic-Game" 
    },
    { 
        week: "5", 
        title: "Trivia Game", 
        url: "https://edean78.github.io/TriviaGame/", 
        image: "https://media.giphy.com/media/LSvJgbabGcdZ5pmO94/giphy.gif", 
        desc: "This UGA trivia game uses time intervals to give the player 30 seconds to answer each question.", 
        type: "homework", 
        github: "https://github.com/edean78/TriviaGame" 
    },
    { 
        week: "6", 
        title: "Giphy-Api", 
        url: "https://edean78.github.io/giphyapi/", 
        image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", 
        desc: "This application displays gifs that the user inputs into the search box. When the user clicks search, an ajax call is executed to the giphyapi to receive the gif and corresponding information", 
        type: "homework", 
        github: "https://github.com/edean78/giphyapi" 
    },
    { 
        week: "7", 
        title: "Train Scheduler", 
        url: "https://edean78.github.io/train-scheduler/", 
        image: "https://cdn.pixabay.com/photo/2017/06/24/23/03/railway-2439189_1280.jpg", 
        desc: "This application lets the user input train schedule information and it will display in a table. The application uses moment.js to calculate the minutes to the next train and when the next train will arrive", 
        type: "homework", 
        github: "https://github.com/edean78/train-scheduler" 
    },
    { 
        week: "8", 
        title: "In the Loop", 
        url: "https://edean78.github.io/Project-1-Group-4/", 
        image: "https://i0.wp.com/spacetourismguide.com/wp-content/uploads/2019/01/Stargazing-in-Atlanta-Featured.jpg?zoom=1.25&fit=862%2C575&ssl=1", 
        desc: "The In the Loop project allows a user to input a event in Atlanta and receive weather, location, and ticket prices for the event.", 
        type: "project", 
        github: "https://github.com/edean78/Project-1-Group-4" 
    },
    { 
        week: "9", 
        title: "LIRI Bot", 
        url: "", 
        image: "", 
        desc: "LIRI Bot is like iPhone's Siri. LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that take in parameteters and give you back data.", 
        type: "homework", 
        github: "https://github.com/edean78/liri-node-app"
    },
    { 
        week: "10", 
        title: "Constructor Word Guess", 
        url: "", 
        image: "https://gt.bootcampcontent.com/GT-Coding-Boot-Camp/gt-atl-fsf-pt-08-2019-u-c/raw/master/01-Class-Content/11-js-constructors/02-Homework/Instructions/Images/01-WordGuess-Cli.gif", 
        desc: "Word Guess command-line using constructor functions", 
        type: "homework", 
        github: "https://github.com/edean78/Con-Word-Guess"
    },
    { 
        week: "11", 
        title: "Bamazon", 
        url: "", 
        image: "", 
        desc: "A Amazon-like storefront application using MySQL. The application will take in orders from customers and deplete stock from the store's inventory.", 
        type: "homework", 
        github: "https://github.com/edean78/bamazon"
    },
    { 
        week: "12",
        title: "Friend Finder", 
        url: "https://vast-springs-19218.herokuapp.com/", 
        image: "https://unsplash.com/@miinyuii?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge", 
        desc: "This application is basically a dating app. Based on a survey taken the app compare with other users and pick the best match",
        type: "homework",
        github: "https://github.com/edean78/FriendFinder"
    },
    { 
        week: "13", 
        title: "Burger App", 
        url: "https://nameless-mountain-68976.herokuapp.com/", 
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
        desc: "This application is created using MySQL, Node, Express, Handlebars and a homemade ORM.", 
        type: "homework", 
        github: "https://github.com/edean78/burger"
    },
    { 
        week: "14", 
        title: "Santa's Little Helper", 
        url: "https://dry-shelf-70211.herokuapp.com/", 
        image: "https://unsplash.com/@jeshoots?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge", 
        desc: "This application allows users to create a user account, create a Christmas list, list the items in the wishlist, and search others wishlist", 
        type: "project", 
        github: "https://github.com/edean78/Project-2"
    },
    {
        week: "17", 
        title: "Updated Portfolio", 
        url: "https://eddean-portfolio.herokuapp.com/", 
        image: "https://media.giphy.com/media/TK4yMeRswlKWA/giphy.gif", 
        desc: "Updated Portfolio", 
        type: "homework", 
        github: "https://github.com/edean78/eddean-port"
    },
    {
        week: "18", 
        title: "Bulldawg News Scrap", 
        url: "https://eddean-portfolio.herokuapp.com/", 
        image: "https://media.giphy.com/media/3o7aD89FPd17gtklC8/giphy.gif", 
        desc: "This application lets the user view and leave comments on the latest Georgia Bulldogs news scraped from another website.", 
        type: "homework", 
        github: "https://github.com/edean78/BulldawgNews-Scrap"
    },
    {
        week: "19", 
        title: "Clicky Game", 
        url: "https://eddean-portfolio.herokuapp.com/", 
        image: "https://media.giphy.com/media/XBdaS9VD83Pk63s5DM/giphy.gif", 
        desc: "This application required the UI to be broken into components, managed component state, and response to user events.", 
        type: "homework", 
        github: "https://github.com/edean78/clicky-game"
    },
    {
        week: "20", 
        title: "Google Book Search", 
        url: "https://eddean-portfolio.herokuapp.com/", 
        image: "https://media.giphy.com/media/TK4yMeRswlKWA/giphy.gif", 
        desc: "This React app is composed fo components, work with helper/util functions, and utilize React lifecycle mthods to query and display book based on user searches.", 
        type: "homework", 
        github: "https://github.com/edean78/eddean-port"
    },
    {
        week: "21", 
        title: "Regionalized", 
        url: "https://eddean-portfolio.herokuapp.com/", 
        image: "https://media.giphy.com/media/TK4yMeRswlKWA/giphy.gif", 
        desc: "", 
        type: "homework", 
        github: "https://github.com/edean78/eddean-port"
    },
    {
        week: "22", 
        title: "React Porfolio", 
        url: "https://eddean-portfolio.herokuapp.com/", 
        image: "https://media.giphy.com/media/TK4yMeRswlKWA/giphy.gif", 
        desc: "This application display all my homework and project completed during my Gt Bootcamp", 
        type: "homework", 
        github: "https://github.com/edean78/eddean-port"
    },
    {
        week: "23", 
        title: "Browning's Soap", 
        url: "https://brownings-soap.herokuapp.com/", 
        image: "https://media.giphy.com/media/TK4yMeRswlKWA/giphy.gif", 
        desc: "This applicaiton is a store front for a local family soap business", 
        type: "Project", 
        github: "https://github.com/mchiang62/soap-app"
    }      
]

db.project
    .remove({})
    .then(() => db.project.collection.insertMany(projectSeed))
    .then(data => {
        console.log(data.result.n + " records inserted into Project");
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
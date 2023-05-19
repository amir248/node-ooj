'use strict';

const express = require('express');
const path = require('node:path');
// const script=require('./views/style.css');

// константы
const port = 8080;
const host = '0.0.0.0';

// приложение
const app = express();
// app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.use('/lol', (request, response) => {
  response.render("index", {
        title: "Two page nodeJS on GitHub!!!",
        emailsVisible: true,
        emails: ["AmirSuperHero", "ChikChiclySpaceHandsForsmazhorovich"],
        phone: "+79528885656"
    });
});
app.use('/super', (request, response) => {
  response.render("index", {
        title: "Three",
        emailsVisible: true,
        emails: ["", "Forsmazhorovich"],
        phone: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
});
app.use('/', (request, response) => {
  response.render("index", {
    title: "nodeJS on GitHub!!!",
    emailsVisible: true,
    emails: ["AmirSuperHero", "ChikChiclySpaceHandsForsmazhorovich"],
    phone: "+79528885656"
  });
});
app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});

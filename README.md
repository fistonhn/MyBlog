# IGIHANGO-Blog

[![Build Status](https://travis-ci.org/fistonhn/MyBlog.svg?branch=master)](https://travis-ci.org/fistonhn/MyBlog)
[![Coverage Status](https://coveralls.io/repos/github/fistonhn/MyBlog/badge.svg?branch=master)](https://coveralls.io/github/fistonhn/MyBlog?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/b5f5c43031e8390e4425/maintainability)](https://codeclimate.com/github/fistonhn/MyBlog/maintainability)

# Project Overview

MyBlog is a online Newspaper where user can read all local news that have been posted.

# Deployment

- A user interface on gh-pages can be found at : 
 <a href="https://fistonhn.github.io/MyBlog/UI"> https://fistonhn.github.io/MyBlog/UI</a>

- A heroku app for API can be found at : 
 <a href="https://my-diary-fiston.herokuapp.com/api/v2/auth/signup"> https://my-diary-fiston.herokuapp.com/api/v2/auth/signup</a>


# Features

- A user can create an account as an author if he doesn't have one
- A user can add a new admin user if he is an admin.
- A user can update any user info if he is an admin.
- A user can delete any user if he is an admin.
- A user can view all users if he is an admin.
- A user can log in to his account if he does have it
- Every one can view all available news.
- Every one can view specific news.
- A user can post a news.
- A user can modify a news.
- A user can delete a news.

# Built With

- Node.js
- Express framework
- React.js as javascript tool
- React-Bootstrap as ui framework
- Material-ui as second ui framework

# Api Endpoints

- POST    /auth/signup                               - Create user account 
- POST    /auth/signin                               - Login a user
- GET     /auth                                      - Admin can view all users
- PATH    /auth/:id                                  - Admin can modify a user info
- DELETE  /auth/:id                                  - Admin can delete a user

- POST    /api/v2/news                               - User can add a news 
- PATCH   /api/v2/news/:id                           - User can modify a news                
- GET     /api/v2/news                               - User can get all news   
- GET     /api/v2/news/topic                         - User can get news by categories
- GET     /api/v2/news/:id                           - User can get specific news  
- DELETE  /api/v2/news/:id                           - User can delete an news 

# Installation
- Run git clone https://github.com/fistonhn/MyBlog.git
- Run npm `install` to download and install all packages
- Run npm `devStart` to start the server
- And then Test the end points using postman or your web browser

# Contributing
> You can contribute to this project by forking the project https://github.com/fistonhn/MyBlog.git

> And then submit your changes by creating a new pull request https://github.com/fistonhn/MyBlog/compare

### Author

[HABIMANA Fiston](https://github.com/fistonhn/MyBlog)

# Acknowledgments

- [Andela Kigali](https://andela.com/)

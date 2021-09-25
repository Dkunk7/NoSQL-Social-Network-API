# NoSQL Social Network API
  
  ## Description
  This is an API backend for a generic social netowrk application that uses `MongoDB` and `Mongoose`. It has functional CRUD routes for users, thoughts, and for adding and removing friends (to users) and reactions (to thoughts).

  

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  Run `npm i` to install the necessary tools. These include `express` and `mongoose`.
  

  ## Usage
  Running `npm start` will start the application. You can use the browser (for GET routes) or another tool to test the routes.
  

  

  ## Testing
  I test my routes with Insomnia. Here's a couple of videos showing the routes in action:

  <a href = "https://watch.screencastify.com/v/cvNmYe8pPvgOlPfzYarx" target = "_blank">Startup/Friends/Reactions</a>

  <a href = "https://watch.screencastify.com/v/i94RUVFhxdtCH0CFAIee" target = "_blank">Users/Thoughts</a>

  Here's a list of each of the routes for easy access (replace IDs with the actual ID you want to use):
  - Get all/Create users: `http://localhost:3001/api/users`
  - Get single/Update/Delete users: `http://localhost:3001/api/users/:userId`
  - Get all/POST thoughts: `http://localhost:3001/api/thoughts/`
  - Get single/Update/Delete thoughts: `http://localhost:3001/api/thoughts/:thoughtId`
  - Add friend: `http://localhost:3001/api/users/:userId/friends`
  - Remove friend: `http://localhost:3001/api/users/:userId/friends/:friendId`
  - Add reaction: `http://localhost:3001/api/thoughts/:thoughtId/reactions`
  - Remove reactio: `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

  ## Questions
  If you have any questions:

  Find me on <a href = "http://www.github.com/Dkunk7" target = "_blank">GitHub</a>

  or

  Contact me at drkunkel7@gmail.com.

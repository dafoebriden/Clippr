Here is a list of TODO's 

Trello: 
  [https://trello.com/invite/b/wNov8P5Y/ATTI987bcbb3565e9dbb5aed149a148b91e66CCD477A/clippr]

A. BACKEND: 
1. clip schema - 
  a. post 
  b. get
    i. get by id 
    ii. get by id 
  d. delete
2. commenter schema
3. comment schemas

B. FRONTEND: 


C. ORGANIZE:
1. put the todo's onto the project trello: 
  [https://trello.com/invite/b/wNov8P5Y/ATTI987bcbb3565e9dbb5aed149a148b91e66CCD477A/clippr]
2. do the frontend figma from the whiteboard: 
  a. create the figma [https://www.figma.com/?fuid=]
  b. add link to figma


Backend Flow Figma:
[https://www.figma.com/file/ZvFdheib2oVVZWURmmoGIl/Untitled-(Copy)?type=whiteboard&node-id=1%3A1281&t=QY68KTtD64ce7r2p-1]

GitHub Repo Refrences:

gregslist week 5 [https://github.com/CodeWorks-FullStack/winter24_gregslist_api]
bird brain [https://github.com/CodeWorks-FullStack/winter24_birdBrain]

CodeWorks: 
Goals
In this challenge, students will demonstrate a working knowledge of building full-stack applications, with a tight time deadline, in a team environment. Groups will utilize a JavaScript front-end, implementing the MVC design pattern to demonstrate a knowledge of DOM Manipulation. On the server, they will use Express with Node.js alongside Mongoose ORM and MongoDB for their database. The project will also incorporate Authentication using Auth0. Groups will need to create and control data integrity using one-to-many relationships to manage users posts and comments.

Setup
Before you dive right into the code of this project, you will want to take some time to make a few decisions and plan out your project as a team. In order to facilitate the planning and decision-making progress, your team will want to come up with the following:

The primary focus to your project, why your site stands out. (it's by cats for cats, you can only post gifs, etc...)
Create your product backlog (start with This) [link: https://trello.com/b/acx10Lks/hackathon]
The general theme and design of the site, page, layouts, views, components, etc. (Create a Figma for your site)
Identify the relationships and the schemas for the data models (lucidcharts.com)
From here, you will want to assign one member of the team to create the project on their GitHub and add each of the other team members as collaborators (settings > manage access > invite collaborators). This will allow anyone on the team to clone down this repository and push and pull to and from it. (DO NOT FORK, simply clone from the main users repository). From there, determine which team members will start with the backend, and which will start with the front end.

TIP: In order to properly practice partner-programming,you should only be coding on 2 computers: one for the client and one for the server. One partner will be typing, and the other partner will be researching/help directing their partner with writing code. Make sure to switch who is typing and switch partners periodically throughout the day. Each member should be familiar with, and have worked on, all parts of the project at some point.

Suggestions
After Determining what properties are named and their types, stick with that naming convention. Additionally, determine some of the business rules and user stories for your app ("posts must contain a _____ so that _____.")

The server team can start getting to work on creating models, services, and controllers. Meanwhile, the front-end team can start to take the mockups that you did earlier, and create the skeleton of the client architecture. On the client, start by adding fake data statically into arrays within the AppState

Deciding some of the early business rules will be very important for your team. The more rules you define, even if they are 'no' rules, (anyone can post any content they like, you can only delete things you created) will help in building the application.

10 Requirements

  students must complete at least 3 to receive turn around time.
  students may miss up to 2 and still be passing.

Users can Login/Logout and remain logged in on refresh
Users can Post images(via url)/questions/articles

The posts are listed without the corresponding comments when they are first rendered

Users can Add comments
  When a user selects a post the comments are shown (think through the UI on how you want this to happen / look)

The page will automatically sort based on the votes, however users can change the sort to be ascending or descending
Users can sort posts by content (date, popular, controversial)

Only authenticated users can create/edit/delete content

When making a post or comment, the server attaches the author
Users can upvote or downvote any post or comment

3 Stretch Goals:
Create a search or filter using tags or based on titles of posts
Pagination or infinite scroll
Allow users to favorite threads
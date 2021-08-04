# Project Overview

## Project Links

- [add your github repo link](https://github.com/redpumpkin21/Project-2)
- [add your deployment link](https://project-website-4t8g.onrender.com/)

## Project Description

Is a book search website. Styled in the way of https://www.barnesandnoble.com/ which the porject is a fake barnes and noble but instead of buying books you find them, cause amazon books and barnes and noble have ways I think it can imporve it's search. 

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

With alex, casue I had no idea, had to create a new array from the the one the api gave me, due to it putting my image in the assets section of my contentful json. 
```
//function with help from my boy Alex
const fixData = data.items.map( (book, index) => {
          return {
            title: book.fields.title,
            author: book.fields.author,
            description : book.fields.description,
            ranking: book.fields.ranking,
            cover:  data.includes.Asset[index].fields.file.url

          }
    })
{data: {} }
```
[data](https://res.cloudinary.com/dx3a3l6k0/image/upload/v1627667570/Screen_Shot_2021-07-30_at_1.49.09_PM_r2w8zn.png)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

[desktop wireframe](https://res.cloudinary.com/dx3a3l6k0/image/upload/v1627589358/desktop_wirefram_2_fydblr.jpg)

[mobile wireframe](https://res.cloudinary.com/dx3a3l6k0/image/upload/v1627589365/phone_wrieframe_2_h8wncj.jpg)
 
[add link to your react architecture](https://docs.google.com/drawings/d/1-lyuWW1MqvBJNvNG6RQ3AIypMBYca-kl61t7l63Qry8/edit?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- 2 carousels
	1. abover nav
	2. below header
- navbar 
- hamburger
- clickable icons
- populate books
- contact
- jump location from hamburger
- genre section icon



#### PostMVP EXAMPLE

- have a functioning genre section 
-each genre componet is poppulated with books
- have info section
- shopping cart
- functioning searchbar * don't have a lot of books*


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Main| This will make the initial data pull and include React Router and house books| 
| Header | This will render the header include the nav  and search bar| 
| Footer | This will render the header include the nav | 
| Forms | this will render the conact|
| trending | This will populate books based on ranking| 
| kids | This will populate books based on if they are kids | 
| upcoming | this will populate books that are not released yet | 
| genres | This will populate all books|
| new | This will populate books based on release | 
| best| This will populate books based on ranking| 
| fiction | This will populate books based on the genre fiction that updaits the genre, which updates the 				main| 
| Western Fiction | This will render the header include the nav |
| International Fiction | This will render the header include the nav |
| sci-fi/fantasy | This will populate books based on the genre sci-fi/fantasy that updaits the          		genre, which updates the main | 
| history |  This will populate books based on the genre history that updaits the genre, which   	 			updates the main| 
| mystery |  This will populate books based on the genre mystery that updaits the genre, which updates 			the main|
| mystery | This will populate books based on the genre mystery that updaits the genre, which updates the 		main | 
| self-help | This will populate books based on the genre self-help that updaits the genre, which updates 		the	main|

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

## MVP time

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| hrs | 2hrs |
| adding carousel 1 | H | 3hrs| 2hrs | hrs |
| adding carousel 2| H | 3hrs| 2hrs | hrs |
| navBar| H | 1hr|1hr | hrs |
| footer | H | 1hr| .5hr | hrs |
| form | H | 1hr| 1hrs | hrs |
| hamburger| H | 1hr| 3hrs | hrs |
| Populate books | H | 3hrs| 3hrs | hrs |
| icons | H | 3hrs| 1hrs | hrs |
| Total | H | 19hrs| hrs | hrs |

## PostMVP time
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| genres | L | 3hrs| hrs | hrs |
| info section | L | 1hr| hrs | hrs |
| shopping cart | L | 2.5hrs| hrs | hrs |
| functionins search bar | L | 2hrs| hrs | hrs |
| Total | L | 8.5hrs| hrs | hrs |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

 reactstrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

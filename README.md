## March 15th, 2022 ##

Setting up the Books API Project Checklist:
- Create MVC folders
- Create .env file
- Create .gitignore file
- Create index.js
- Setup Github rep and do initial commit
- Run:
    - 'npm init -y' to create package.json file with defaults
    - 'npm install express' to make our project an Express framework application
    - 'npm i dotenv' so our project uses the .env file
    - 'npm install mongoose' so our project uses can connect with MongoDB
- Setup basic Express server in index.js
    - (Insert index.js basic code here) 
- Setup Mongo in .env file
- Create 'books.js' in 'models' folder and setup a Schema with Mongoose to our Mongo database
- Setup our controller file named 'books.js'
- Setup routes

     | Method |       Path                   |                    Purpose                         |        Status       |
     | ------ | ---------------------------- | ---------------------------------------------------| ------------------- |
     | GET    |     /                        |	Home page  (created in index.js entry point)      |         DONE        |
     | GET    |     /books                   |	Books index page                                  |         DONE        |
     | PUT    |     /books/:id               |	Update a specific book                            |         DONE        |   
     | DELETE |     /books/:id               |	Delete a specific book                            |         DONE        |
     | POST   |     /books                   |	Create a new book                                 |         DONE        |

- Test routes with Postman
- Implement CORS:
    - https://www.npmjs.com/package/cors
    - Run 'npm install cors'

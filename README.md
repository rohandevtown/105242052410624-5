# Book Record Managent System:

## Routes and EndPoints

### /users

POST: Create a new user
GET: Get all the list of users

### /users/{id}

GET: Get a user by Id
PUT: Update a user by their ID
DELETE: Delete a user by id (chk if he/she still has an issued book && is there any fine to be paid)

### /users/subscription-details/{id}

GET: Get user subscription details >> Date of subscription >> Valid till >> Fine if any

### /books

GET: Get all books
POST: Create/Add a New book

### /books/{id}

GET: Get a book by id
PUT: Update a book by its id

### /books/issued

GET: Get all issued books

### /books/issued/withFine

GET: Get all issued books with fine

# Subscription Type:

    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

# Cmds:

    >> npm init
    >> npm i express
    >> npm i nodemon --save-dev

    >> npm run dev

## MongoDb:

    (Non - Relational DB)

## Cmds DB:

    npm i mongoose
    npm install mongodb

mongodb+srv://rohankinnal:ghGx6SNCbWxdQemp@cluster0.jsgpglg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

npm i dotenv

## MVC Architecture

    >> M: Model (Structure of mongodb collection)
    >> V: View (Frontend-reactJs)
    >> C: Controller (Brain or logic of a route)

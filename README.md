## Dishcovery ##

# Description:

Blogify is a full-stack web application with user authentication, including blog setup, login, logout, and password reset. 
Registered users can create and set up their own blogs and view all their content on the admin dashboard. 
Readers can comment on posts and reply to comments. 
Readers will receive email notifications for replies to their comments via gmail. 
The web application enables users to perform CRUD operations on their blog content. 
It is implemented using the Model-View-Controller (MVC) architecture to separate concerns. 
The application utilizes the Socket.IO library to facilitate real-time updates on posts and comments.

# How to Setup:

1. Make a `data` folder and add a `config.env` file in it.

2. Paste the following code in the `config.env` file:

    ```javascript
    PORT = port_number

    MONGODB_URI = mongodb://localhost:27017
    ```

   Follow the below steps to configure the file:
   
   - Replace `port_number` with the port on which you want to run.

3. Open `server/models/database.js` file and locate the following line:

    ```javascript
    mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "DataBase_Name",
    ```

   Change `DataBase_Name` to the desired name of your database.

# How to Run:

1. Run the command `npm install` to install the required dependencies.

2. Start the server by running the command `node app.js`.

3. Open the following URL in a web browser: [http://localhost:port_number/]

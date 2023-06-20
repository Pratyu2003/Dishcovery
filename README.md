## Dishcovery ##

# Description:

Dischcovery is a full-stack Food dishes recipe sharing web application.
where user can share their recipe by submitting a recipe form.
User can update and delete their uploaded recipes. User can search recipe by its name, can apply category filters.
It also contain latest section which display most recently shared recipes.
It is implemented using the Model-View-Controller (MVC) architecture to separate concerns. 


◦ Abstract: recipe sharing application where user can share their recipe by submitting a recipe form.
can update and delete their uploaded recipes. User can search recipe by its name, can apply category filters.
It also contain latest section which display most recently shared recipes.
◦ Technology used: EJS, Bootstrap, JavaScript, Node.js, Express.js, MongoDB.

#TeckStack 
![image](https://github.com/Pratyu2003/Dishcovery/assets/91794200/4c120dca-fb36-4849-822a-e58e26cf5dfe) 
![image](https://github.com/Pratyu2003/Dishcovery/assets/91794200/e82c856a-813e-47b8-aecb-c3527f10ea66)
![image](https://github.com/Pratyu2003/Dishcovery/assets/91794200/d6132f02-e71e-47b8-a357-3f7d4545c46a)
![image](https://github.com/Pratyu2003/Dishcovery/assets/91794200/db0b892d-3f4b-49af-9c8b-063f0a548f4a)
![image](https://github.com/Pratyu2003/Dishcovery/assets/91794200/8dac5acd-ad0f-449c-90f6-47b42b867d66)


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

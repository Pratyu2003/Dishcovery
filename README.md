## Dishcovery ##

# Description:

Dischcovery is a full-stack Food dishes recipe sharing web application.
where user can share their recipe by submitting a recipe form.
User can update and delete their uploaded recipes. User can search recipe by its name, can apply category filters.
It also contain latest section which display most recently shared recipes.
It is implemented using the Model-View-Controller (MVC) architecture to separate concerns. 


#TeckStack 

```markdown
![Logo 1](https://github.com/Pratyu2003/Dishcovery/assets/91794200/4c120dca-fb36-4849-822a-e58e26cf5dfe)
![Logo 2](https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Bootstrap.svg)
![Logo 3](https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg)
![Logo 4](https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NodeJS-Light.svg)
![Logo 5](https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f)


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

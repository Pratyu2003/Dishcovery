## Dishcovery ##

# Description:

Dischcovery is a full-stack Food dishes recipe sharing web application.
where user can share their recipe by submitting a recipe form.
User can update and delete their uploaded recipes. User can search recipe by its name, can apply category filters.
It also contain latest section which display most recently shared recipes.
It is implemented using the Model-View-Controller (MVC) architecture to separate concerns. 


#TeckStack 
```html
<style>
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-container img {
    width: 50px; /* Adjust the size as needed */
    height: 50px; /* Adjust the size as needed */
    margin: 5px; /* Adjust the spacing as needed */
  }
</style>

<div class="logo-container">
  <img src="https://github.com/Pratyu2003/Dishcovery/assets/91794200/4c120dca-fb36-4849-822a-e58e26cf5dfe" alt="Logo 1">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Bootstrap.svg" alt="Logo 2">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg" alt="Logo 3">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NodeJS-Light.svg" alt="Logo 4">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/ExpressJS-Light.svg" alt="Logo 5">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/MongoDB.svg" alt="Logo 6">
</div>


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

# Node.js Project Structure

This is a base Node.js project template, which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

## `src`

Inside the `src` folder, all the actual source code regarding the project will reside. This will not include any kind of tests. (You might want to make a separate `tests` folder.)

Let's take a look inside the `src` folder:

* `config` → In this folder, anything and everything regarding any configurations or setup of a library or module will be done. For example, setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion. This is done in the `server-config.js`. One more example can be to set up your logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

* `routes` → In the routes folder, we register a route and the corresponding middleware.
- `config` → setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup your logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` → In the routes folder, we register a route and the corresponding middleware and controllers.

    - `middlewares` → they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

    - `controllers` → they are the kind of last middleware as post them you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

    - `repositories` → this folder contains all the logic using which we interact with the DB by writing queries, all the raw queries or ORM queries will go here.

    - `services` → contains the business logic and interacts with repositories for data from the database.

    - `utils` → contains helper methods, error classes etc.


Inside the `src/config` folder create a file named as `config.json` and write the following code:
...
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

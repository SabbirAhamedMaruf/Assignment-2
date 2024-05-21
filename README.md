## To Run Application Follow the steps bellow.

- Clone the repository by doing.

  ```
    git clone <repository url goes here>
  ```

- Install the required packages.

  ```
    npm i
  ```

- Your need to create a mongodb url and env file and then add them your env file

  ```
    PORT=5000

    DATABASE_URL=your mongodb url goes here
  ```

- Start the sever using nodemon. If nodemon not installted follow command bellow.

  ```
    npm i nodemon

    nodemon ./dist/server.js
  ```

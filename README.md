![flame icon](flame.png)

# flame
Simple API server setup with Hapi.js + Firebase.

## Running the API

For running the server under production you can run;
`npm start`
* Remember to create a production.json file under *config* folder for production settings.

For testing run;
`npm test`

**This runs both server/ (using supertest on the API as a http server) and model/ (on the Classes run by the models) tests.**

### Starting server for development
`npm run start-dev`

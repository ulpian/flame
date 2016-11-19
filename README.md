![flame icon](flame.png)

# flame
Simple API server setup with Hapi.js + IOC via Electrolyte + Firebase.

## Running the API

For running the server under production you can run;

`npm start`

* Remember to create a production.json file under *config* folder for production settings.

For tests (Both model and server tests) run;

`npm test`

You can also test model and server seperately by running;

```
npm run test-model
npm run test-server
```

**This runs both server/ (using supertest on the API as a http server) and model/ (on the Classes run by the models) tests.**

### Starting server for development
`npm run start-dev`

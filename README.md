![flame icon](flame.png)

# flame
API server setup with Hapi.js + IOC via Electrolyte...
with a few tools thrown in to make development and execution easier.

## Running the API

For running the server under production you can run;

`npm start`

* Remember to create a production.json file under *config* folder for production settings.


## Testing the API
For tests (Both model and server tests) run;

`npm test`

You can also test model and server seperately by running;

```
npm run test-model
npm run test-server
```

### Starting server for development
`npm run start-dev`

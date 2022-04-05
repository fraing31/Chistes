const JokesRouter = require( './rutas/Jokes.routes' );//donde esta el ruter
const express = require( 'express' );
//const cors = require( 'cors' );

require( './config/config' );
const app = express();

app.use( express.json() );
app.use( '/api/jokes', JokesRouter );//prefijo


app.listen( 8080, () => {
    console.log( "El servidor se encuentra corriendo en el puerto 8080" );
});
const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/chistes_db', {useNewUrlParser: true} )//Coloca el nombre de la base de datos 
    .then( () => {
        console.log( "Base de datos conectada." );
    })
    .catch( err => {
        console.log( "Hubo un error al conectarse a la base de datos" );
    });

mongoose.connection.on( 'error', (err) => {
    console.log( 'Mongoose error: ' + err );
    process.exit( 0 );
});

mongoose.connection.on( 'disconnected', () => {
    console.log( "Base de datos desconectada." ); 
});
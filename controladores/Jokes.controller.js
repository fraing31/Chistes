const {Jokes} = require('../modelos/Jokes.model');

const listaBromas = (request, response) => {
    Jokes.find()
    .then( listaJokes => {//conexion exitosa
        return response.status( 200 ).json( listaJokes );
    })
    .catch( err => {
        response.statusMessage = "Hubo un error al ejecutar el find. " + err;
        return response.status( 400 ).end();
    });
}

const idBroma = (request, response) => {

    const {_id} = request.params; // extraer la informacion de la URL

    Jokes.find( { _id } )
        .then( (idJokes) => {
            return response.status( 200 ).json( idJokes ); 
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el find. " + err;
            return response.status( 400 ).end();
        });
}

const nuevaBroma = (request , response) => {

    const { setup, punchline } = request.body 

    if( !setup || !punchline ){
        response.statusMessage = "Para crear un nuevo chiste es necesario enviar 'setup', 'punchline'.";
        return response.status( 406 ).end();
    }
    else {
        const nuevoJokes = {
            setup, punchline//creando el objeto
        };

        Jokes.create( nuevoJokes )//cuando se hace un proceso asincrono o promesa o interaccion en base de datos, se utiliza catch y then  
        .then( jokeNuevo => {
            return response.status( 201 ).json( jokeNuevo );
        })
        .catch( err => { // deben ir juntos para indicar que pertenecen al mismo proceso
            console.log( err );
            response.statusMessage = "Hubo un error al ejecutar el insert! " + err;
            return response.status( 400 ).json(err);
        });
    }
}

const actualizarBroma = (request, response) => {

    const { setup, punchline } = request.body//jalamos nuestras variables
    //console.log(request.params);
    const { _id } = request.params;
    
    const bromaActualizada = {
        setup, punchline
    };
    
    Jokes.findOneAndUpdate( {_id}, {$set : bromaActualizada}, {new : true} )
    .then( (jokeNuevo) => {
        return response.status( 202 ).json( jokeNuevo );
    })
    .catch( err => {
        response.statusMessage = "Hubo un error al ejecutar el update. " + err;
        return response.status( 400 ).end();
    }); 
    
            
}

const borrarBroma  = (request, response) => {

    const {_id} = request.params;

    Jokes.deleteOne({_id})
    .then (() => {
        return response.status(204).end();
    })
    .catch(err => {
        response.statusMessage = "Hubo un error al ejecutar el insert! " + err;
        return response.status( 400 ).end();
    });
}

const ControladorJokes = {
    listaBromas,
    idBroma,
    nuevaBroma,
    actualizarBroma,
    borrarBroma
};

module.exports = ControladorJokes;

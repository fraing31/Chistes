const express = require( 'express' );
const JokesRouter = express.Router();
const ControladorJokes = require( '../controladores/Jokes.controller');//dos puntos es para subir la carpeta anterior

JokesRouter.get( '/', ControladorJokes.listaBromas );
JokesRouter.get( '/:_id', ControladorJokes.idBroma );
JokesRouter.post( '/new', ControladorJokes.nuevaBroma );
JokesRouter.put( '/update/:_id', ControladorJokes.actualizarBroma );
JokesRouter.delete( '/delete/:_id', ControladorJokes.borrarBroma );
module.exports = JokesRouter;


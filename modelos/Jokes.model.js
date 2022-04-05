const mongoose = require( 'mongoose' );

const JokeSchema = new mongoose.Schema({
    setup : {
        type : String,
        required : [true, "El setup debe de ser proporcionado!"],
        minlength : [10, "El setup debe tener la menos 10 caracteres"]
    },
    punchline : {
        type : String,
        required : [true, "El punchline debe de ser proporcionado!"],
        minlength : [3, "El punchline debe tener la menos 3 caracteres"]
    }
});

const Jokes = mongoose.model( 'chistes', JokeSchema );

module.exports = {
    Jokes,//clase
    JokeSchema
}
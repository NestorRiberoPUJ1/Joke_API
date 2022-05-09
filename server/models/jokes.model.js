const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({

    joke: {
        type: String,
        required: [true, "A joke must be included"],
        minlength: [3, "Short jokes ain´t funny"]
    },
});

const Joke = mongoose.model("jokes", JokeSchema);

module.exports = Joke;
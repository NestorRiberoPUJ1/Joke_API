

const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokess => res.json({ jokes: allJokess }))
        .catch(err => res.json({ message: "ERROR " + err }));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "ERROR " + err }));
};

module.exports.createJoke = (req, res) => {

    Joke.create(req.body)
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "ERROR " + err }));
}

module.exports.updateJokes = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ messare: "ERROR " + err }));
}


module.exports.deleteJoke = (req, res) => {
    Joke.remove({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ messare: "ERROR " + err }));
}

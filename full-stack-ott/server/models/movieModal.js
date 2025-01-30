const { db } = require("../services/config");

module.exports = class Movie {
    constructor(name) {
        this.name = name;
    }

    async getMovie() {
        const allMovies = await db.collection("posts").find({}).toArray();

        return allMovies
    }
}
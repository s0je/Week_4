let myLib = require('./movie.js');
let myLib2 = require('./professional.js');
let Movie = myLib.Movie;
let Professional = myLib2.Professional;

class IMDB
{
    constructor(peliculas)
    {
        this.peliculas = peliculas = new Movie;
    }


    escribirEnFicheroJSON(nombre)
    {
        const fs = require("fs");
        fs.writeFileSync(nombre,JSON.stringify(this.peliculas));
    }

    obtenerinstaciaIMDB(nombreFichero)
    {
        const fs = require("fs");
        let temp = fs.readFileSync(nombreFichero, 'utf-8');
        let imdbDDBB= IMDB = JSON.parse(temp);

        return imdbDDBB;
        
    }
}

module.exports = {IMDB: IMDB};
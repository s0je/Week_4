class Professional{

    constructor(image, name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarsNumber, profesion)
    {   
        this.image = image;
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profesion = profesion;
    }

    printAll()
    {
        console.log(`Name: ${this.name}\n Genre: ${this.genre}\n Weigth: ${this.weight}\n Height: ${this.height}\n Hair color: ${this.hairColor}\n Race: ${this.race}\n Is retired?: ${this.isRetired}\n Nationality: ${this.nationality}\n Number of Oscars: ${this.oscarsNumber} \n Profession: ${this.profesion}`);
    }
}
class Movie {
    //Atributos
  
    constructor(image, title,releaseYear,actors, nacionality, director, writer,language, platform, isMCU, mainCharacterName, producer, distributor, genre) {
        this.portada = image;
        this.title=title
        this.releaseYear=releaseYear
        this.actors = actors;
        this.nationality= nacionality;
        this.director= director;
        this.writer= writer;
        this.language= language;
        this.platform= platform;
        this.isMCU= isMCU;
        this.mainCharacterName= mainCharacterName;
        this.producer= producer;
        this.distributor= distributor;
        this.genre = genre;
      
      
  
    }
    //this.metods
    getStringActors(){
      let actores = ''
      for (let i = 0; i<this.actors.length;i++){
        if(i == this.actors.length -1){
          actores+=this.actors[i].name+ '.'
        }else {
          actores += this.actors[i].name+ ', '
        }
      }
      return actores
  
    }
    printAll(){
        console.log(`Protada : ${this.portada}
                     Título: ${this.title}
                     Año de lanzamiento: ${this.releaseYear}
                     Actores: ${this.getStringActors()}
                     País: ${this.nationality}
                     Director: ${this.director.name}
                     Guionista: ${this.writer.name}
                     Idioma: ${this.language}
                     Plataforma: ${this.platform}
                     Universo Marvel: ${this.isMCU}
                     Protagonista: ${this.mainCharacterName}
                     Productor: ${this.producer.name}
                     Distribuidora: ${this.distributor}
                     Género: ${this.genre}
                     `)
    }
  
  }

let DiCaprio = new Professional ("https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg","Leonar Dicaprio", 47, "Masculino", 183, 75, "castaño", "caucasico", false, "americano", 7, "Actor");
let Denzel = new   Professional ("https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY317_CR12,0,214,317_AL_.jpg","Denzel Washington", 67, "Masculino", 185, 80, "negro", "afroamericano", false, "americano", 2, "Actor");
let Almodovar = new Professional ("https://m.media-amazon.com/images/M/MV5BMGM2NTk2MDEtN2Y4Ni00YzNjLWE1NDQtMWM4MjJlZWI1NmU2XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UY317_CR12,0,214,317_AL_.jpg","Pedro Almodovar",72, "Masculino", 177, 85, "blanco", "caucasico", false, "español", 2, "Director");
let Tarantino = new Professional ("https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg","Quentin Tarantino",58, "Masculino", 188, 96, "blanco", "caucasico", false, "americano", 1, "Director");
let JamieFoxx = new   Professional ("https://m.media-amazon.com/images/M/MV5BMTkyNjY1NDg3NF5BMl5BanBnXkFtZTgwNjA2MTg0MzE@._V1_UY317_CR12,0,214,317_AL_.jpg","Jamie Foxx", 54, "Masculino", 175, 82, "negro", "afroamericano", false, "americano", 2, "Actor");
let Jennifer = new Professional ("https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_UY317_CR32,0,214,317_AL_.jpg","Jennifer Lopez", 56, "Femenino", 178, 75, "castaño", "latina", false, "americano", 0, "Actriz");
let actores = [DiCaprio, Denzel,Almodovar, Tarantino, JamieFoxx, Jennifer];

//Pelicula
let esdla = new Movie('https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg','El señor de los anillos',2003,[DiCaprio,Denzel,Almodovar],'USA',Almodovar,Almodovar,'English',"Netflix",true,JamieFoxx,DiCaprio,'Warner Bros','Fantasía épica');

let DJango = new Movie ('https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg','Django desencadenado',2012,[DiCaprio,JamieFoxx],'USA',Tarantino, Jennifer,'English','HBO Max',false,JamieFoxx,Tarantino,'Sony','Western');

let peliculas = [esdla, DJango];

jQuery(()=>{
    $(document).ready( ()=>{
        for(let i=0; i<actores.length; i++)
        {
        $("#profesional").append(`<div class="col">
                                    <div class="card" style="width: 18rem;">
                                        <img src="`+actores[i].image+`" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <div class="card-header">
                                            `+actores[i].name+`
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Genre: `+actores[i].genre+`</li>
                                                <li class="list-group-item">Age: `+actores[i].age+`</li>
                                                <li class="list-group-item">Weigth: `+actores[i].weight+`</li>
                                                <li class="list-group-item">Height: `+actores[i].height+`</li>
                                                <li class="list-group-item">Hair color: `+actores[i].hairColor+`</li>
                                                <li class="list-group-item">Race: `+actores[i].race+`</li>
                                                <li class="list-group-item">Is retides?: `+actores[i].isRetired+`</li>
                                                <li class="list-group-item">Nationality: `+actores[i].nationality+`</li>
                                                <li class="list-group-item">Oscar's: `+actores[i].oscarsNumber+`</li>
                                                <li class="list-group-item">Profesion: `+actores[i].profesion+`</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`);
        }
    })
    $(document).ready( ()=>{
        for(let i=0; i<peliculas.length; i++)
        {
        $("#pelicula").append(`<div class="col">
                                    <div class="card" style="width: 18rem;">
                                        <img src="`+peliculas[i].portada+`" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <div class="card-header">
                                            `+peliculas[i].title+`
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Año de lanzamiento: `+peliculas[i].releaseYear+`</li>
                                                <li class="list-group-item">Actores: `+peliculas[i].getStringActors()+`</li>
                                                <li class="list-group-item">País: `+peliculas[i].nationality+`</li>
                                                <li class="list-group-item">Diector: `+peliculas[i].director.name+`</li>
                                                <li class="list-group-item">Guionista: `+peliculas[i].writer.name+`</li>
                                                <li class="list-group-item">Idioma: `+peliculas[i].language+`</li>
                                                <li class="list-group-item">Plataforma: `+peliculas[i].platform+`</li>
                                                <li class="list-group-item">Universo Marvel: `+peliculas[i].isMCU+`</li>
                                                <li class="list-group-item">Protagonista: `+peliculas[i].mainCharacterName.name+`</li>
                                                <li class="list-group-item">Productor: `+peliculas[i].producer.name+`</li>
                                                <li class="list-group-item">Distribuidora: `+peliculas[i].distributor+`</li>
                                                <li class="list-group-item">Género: `+peliculas[i].genre+`</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`);
        }
    })

    $("#añadir").on("click", ()=>{
        let nuevaPelicula = new Movie ($("#portada").text(),
                                        $("#titulo").text(),
                                        $("#anyo").text(),
                                        $("#actores").text(),
                                        $("#pais").text(),$("#director").text(),
                                        $("#guionista").text(),
                                        $("#idioma").text(),
                                        $("#plataforma").text(),
                                        $("#isMCU").text(),
                                        $("#protagonista").text(),
                                        $("#productor").text(),
                                        $("#distribuidor").text(),
                                        $("#genero").text());
        peliculas.push(nuevaPelicula);

    })
})
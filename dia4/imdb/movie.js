let myLib2 = require('./professional.js');
let Professional = myLib2.Professional;

class Movie {
  //Atributos

  constructor(title,releaseYear,actors, nacionality, director, writer,language, platform, isMCU, mainCharacterName, producer, distributor, genre, image) {
    this.title=title
    this.releaseYear=releaseYear
    this.actors = actors = new Professional;
    this.nationality= nacionality;
    this.director= director = new Professional;
    this.writer= writer = new Professional;
    this.language= language;
    this.platform= platform;
    this.isMCU= isMCU;
    this.mainCharacterName= mainCharacterName;
    this.producer= producer = new Professional;
    this.distributor= distributor;
    this.genre = genre;
    this.image = image;
    

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
      console.log(`Protada : ${this.image}
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

module.exports ={Movie: Movie};

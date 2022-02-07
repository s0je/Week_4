// let myLib = require('./professional.js');
// let Professional = myLib.Professional;

// let DiCaprio = new Professional ("https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg","Leonar Dicaprio", 47, "Masculino", 183, 75, "castaño", "caucasico", false, "americano", 7, "Actor");
// let Denzel = new   Professional ("https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY317_CR12,0,214,317_AL_.jpg","Denzel Washington", 67, "Masculino", 185, 80, "negro", "afroamericano", false, "americano", 2, "Actor");
// let Almodovar = new Professional ("https://m.media-amazon.com/images/M/MV5BMGM2NTk2MDEtN2Y4Ni00YzNjLWE1NDQtMWM4MjJlZWI1NmU2XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UY317_CR12,0,214,317_AL_.jpg","Pedro Almodovar",72, "Masculino", 177, 85, "blanco", "caucasico", false, "español", 2, "Director");
// let Tarantino = new Professional ("https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg","Quentin Tarantino",58, "Masculino", 188, 96, "blanco", "caucasico", false, "americano", 1, "Director");
// let JamieFoxx = new   Professional ("https://m.media-amazon.com/images/M/MV5BMTkyNjY1NDg3NF5BMl5BanBnXkFtZTgwNjA2MTg0MzE@._V1_UY317_CR12,0,214,317_AL_.jpg","Jamie Foxx", 54, "Masculino", 175, 82, "negro", "afroamericano", false, "americano", 2, "Actor");

let actores = ["DiCaprio", "Denzel","Almodovar", "Tarantino", "JamieFoxx"];

jQuery(()=>{
    $("#actores").on("click", ()=>{

        
    })

    $(document).ready( ()=>{
        for(let i=0; i<actores.length; i++)
        {
            console.log(actores[i].printAll());
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>`);
        }
    })
})
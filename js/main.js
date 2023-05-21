import * as G from "./GET.js";

document.addEventListener("click", async e => {
    if (e.target.matches("#boton")) {
        document.getElementById("OrderbyRanking").innerHTML ="";
        let name = document.getElementById("buscador").value;
        document.getElementById("titulo").innerHTML=`<p class="h3 text-light">Peliculas sugeridas por ${name}</p>`;
        G.GetMoviebyName(name);
    }
    if (e.target.matches(".title")){
        document.getElementById("OrderbyRanking").innerHTML ="";
        document.getElementById("titulo").innerHTML=`<p class="h3 text-light">Peliculas con mejor Puntuación</p>`
        G.GetAll();
    } 
});

export function contruirPeli(peli) {

    document.getElementById("OrderbyRanking").innerHTML += `<div class="card mb-3 mt-2 ms-3 border-light bg-dark text-light g-0" style="width: 300px; height:  360px;">
        <div class="row text-center "><h5 class="card-title g-0 p-2 ">${peli.results.title} ⭐${peli.results.rating}</h5></div>
        <div class="row g-0 align-items-center">
          <div class="col-md " style="display: flex; height: 28vh; overflow: auto; flex-direction: column;">
            <img src="${peli.results.image_url}" style="width: 100%; height: 30vh;" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md">
            <div class="card-body" style="display: flex;height: 280px; overflow: auto; flex-direction: column;">
              <p class="card-text text-justify">${peli.results.description}</p>
              <p class="card-text"><small class="text-body-light"><a href="${peli.results.trailer}" target="_blank">Ver Trailer</a></small></p>
            </div>
          </div>
        </div>
    </div>`;

}
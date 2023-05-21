
const GetAll = async () => {
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/order/byRating';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3f54ade6e2msh8586b8517539237p1a5e8ajsn6004e045f9eb',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        idPeli(result);
    } catch (error) {
        console.error(error);
    }
}

GetAll();

const infoPeli = async (e) => {
    let url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${e}/`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3f54ade6e2msh8586b8517539237p1a5e8ajsn6004e045f9eb',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        contruirPeli(result);
        
    } catch (error) {
        console.error(error);
    }}

function idPeli(peli) {
    peli.results.forEach(e => {infoPeli(e.imdb_id);});
}

function contruirPeli(peli){

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
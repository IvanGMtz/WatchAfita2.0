export { GetAll, GetMoviebyName }
import {contruirPeli} from "./main.js";
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
const GetMoviebyName = async (name) => {
    let url = `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${name}/`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aaae3ef658msh451c8cdc3dc7901p195a71jsna3ed1b1c302a',
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

function idPeli(peli) {
    peli.results.forEach(e => { infoPeli(e.imdb_id); });
    if(peli.results.length===0){
        document.getElementById("titulo").innerHTML=`<p class="h3 text-light">Sin sugerencias</p>`;
    }
}

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
    }
}
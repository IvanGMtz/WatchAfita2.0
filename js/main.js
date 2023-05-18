
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
} catch (error) {
	console.error(error);
}}

GetAll();
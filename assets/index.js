// require("dotenv").config()
// data = process.env.APIKEY
// console.log(data)
// const dotenv = require("dotenv")
// dotenv.config()
// console.log(process.env.APIKEY)
const main = () => {
	// getExercise()
	getCurrent()
}
fetch('http://localhost:3000/exercises?')
	.then(response => response.json())
	.then(response => getExercise(response))
	.catch(err => console.error(err));



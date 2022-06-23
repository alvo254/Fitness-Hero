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

    const getCurrent = () => {
        // const level = train.querySelector('')
        fetch('http://localhost:3000/exercises')
        .then(response => response.json())
        .then(resp => {
            for(const key of resp){
                const train = document.querySelector('.categ')
                const newOne = document.createElement("li")
    
                newOne.innerText = key.name
                train.appendChild(newOne)
                newOne.style.cursor = "pointer"
                newOne.addEventListener('click', () => searchExercies(key.instructions))
            //console.log(key.level)
    
            }
        })
        .catch(err => console.error(err));
    }

    const searchExercies = (nameId) => {
        //const eve = document.querySelector('.cont')
    
        fetch(`http://localhost:3000/exercises?${nameId}`)
        .then(response => response.json())
        .then(recv => {
            
        
		console.log(nameId)
		const newObj = document.querySelector('.cont')
		const adapt = document.createElement('p')


		adapt.innerHTML = nameId
		newObj.appendChild(adapt)
		console.log(adapt)
		document.querySelector('p')
    })
}


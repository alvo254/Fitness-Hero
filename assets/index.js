// require("dotenv").config()
// data = process.env.APIKEY
// console.log(data)
// const dotenv = require("dotenv")
// dotenv.config()
// console.log(process.env.APIKEY)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de8a4e002fmsh2ca3932a2a0910bp1100d5jsn05d96592f9f8',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


fetch('https://exercisedb.p.rapidapi.com/exercises?', options)
	.then(response => response.json())
	.then(response => findEx(response))
	.catch(err => console.error(err));


const search = (response) => {
    response.target.value.toLowerCase
}

// const fetchData = (url, options) => {
//     const resp = fetch(url, options)
//     const data = resp.json()
//     return data
// }

// const handleSearch = () => {
//     if(search){
//         const exer = fetch('https://exercisedb.p.rapidapi.com/exercises/')
//         exer.then(recv => recv.json())
//         exer.then(data => console.log(data))
//         const searchesExercices = exer.filter((exercise) => exercise.name.toLowerCase().includes(search) || 
//         exercise.target.toLowerCase().includes(search),
//         exercise.equipment.toLowerCase().includes(search),
//         exercise.bodyPart.toLowerCase().includes(search)
//         )
//         return searchesExercices
//     }


// }
// handleSearch()




const findEx = (response) => {
    const finding = document.getElementById('find')
    const data = response
    finding.addEventListener('click', () =>{
        // data.forEach(element => {
        //     console.log(element)
        // });
        spec(data)

    })
}

const spec = (data) => {
    for(const item of data){
        if(search){
            const searchesExercices = item.filter((exercise) => {exercise.name.toLowerCase().includes(search) || 
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) || 
            exercise.bodyPart.toLowerCase().includes(search)
            })
        console.log(searchesExercices) 
        }
    }
}



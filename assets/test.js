const main = () => {
	// getExercise()
	getCurrent()
}
fetch('https://alvo254.github.io/fitnessapi/exercises.json')
	.then(response => response.json())
	//.then(response => showAll(response.exercises))
	.then(response => getCurrent(response.exercises))
	.catch(err => console.error(err));

// const showAll = (item) => {
// 	const vitu = item
// 	vitu.forEach(some => {console.log(some.name)})
// 	//console.log(vitu)
// 	// console.log(item)
// }

const getCurrent = (item) => {
	// const level = train.querySelector('')
	fetch('https://alvo254.github.io/fitnessapi/exercises.json')
	.then(response => response.json())
	.then(resp => {
		const vitu = item
		vitu.forEach(some => {
			const train = document.querySelector('.categ')
			const newOne = document.createElement('li')

			newOne.innerText = some.name
			train.appendChild(newOne)
			newOne.addEventListener('click', () => searchExercies(some.instructions))
			
			newOne.style.cursor = "pointer"
			console.log(some.level)
		})
		console.log(vitu)
		})
		

	
	.catch(err => console.error(err));
}

const searchExercies = (nameId) => {
	//const eve = document.querySelector('.cont')

	fetch(`https://alvo254.github.io/fitnessapi/exercises.json?${nameId}`)
	.then(response => response.json())
	.then(recv => {

		console.log(recv)
		const newObj = document.querySelector('.post_text')
		newObj.innerHTML = nameId
		//newObj.appendChild(adapt)
		// document.querySelector('p').addEventListener('click', ()=>{
		// 	newObj.querySelector('p').remove()
		// })


	})
}


// const getExercise = (response) => {
// 	const exer = response
// 	//console.log(exer)
// 	for(const key of exer){
// 		let cat = key.category
// 		// console.log(cat)
// 		//console.log(key.level)
// 		// console.log(key.category)
// 		// console.log(key.level)
// 	}
// }


main()


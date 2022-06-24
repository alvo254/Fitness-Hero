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
			console.log(some.name)
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
		// for(const data of recv){
			
		// 	console.log(data.instructions)
		// }
		console.log(recv)
		const newObj = document.querySelector('.post_text')
		//const adapt = document.createElement('p')


		newObj.innerHTML = nameId
		//newObj.appendChild(adapt)
		// document.querySelector('p').addEventListener('click', ()=>{
		// 	newObj.querySelector('p').remove()
		// })

	// 	newObj.innerText =`
	// 	<div class="cont">
	// 	<h3>back <span>$</span></h3>
	// 	<div class="icons">
	// 		<hr>
	// 		<p>${recv.instructions}</p>

	// 	</div>
		
	// </div>
	// 	`
		
		// newObj.innerText = recv.instructions
		// eve.appendChild(newObj)

		// for(const data of recv){
		// 	const train = document.querySelector('.cont')
		// 	const newObj1 = document.createElement('p')

		// 	newObj1.innerText = data.instructions
		// 	train.appendChild(newObj1)
		// }
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


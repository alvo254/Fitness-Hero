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

const getExercise = (response) => {
	const exer = response
	//console.log(exer)
	for(const key of exer){
		let cat = key.category
		// console.log(cat)
		//console.log(key.level)
		// console.log(key.category)
		// console.log(key.level)
	}
}


main()


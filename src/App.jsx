import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
	<main>

  <h1 class="excisting"> Hollywood watch </h1>

<label for="site-search">Search movie:</label>
<input type="search" id="site-search" name="q" />
	


<div class="book-flex">
			<div class="card">
				<img alt="bild" />
				<div class="under-bild">
				<h3>my neighbour totoro</h3>
				<p> 2021-09-28 </p></div>
			</div>
			<div class="card">
				<img alt="bild" />
				<div class="under-bild">
				<h3>The Matrix Resurrections</h3>
				<p> 2021-12-22 </p> </div>
			</div>
			<div class="card">
				<img alt="bild" />
				<div class="under-bild"> 
				<h3>Dune</h3>
				<p> 2021-10-21 </p></div> 
			</div>
			<div class="card">
				<img alt="bild" />
				<div class="under-bild"> 
				<h3>No time to Die</h3>
				<p> 2021-09-28 </p></div>
			</div>
			<div class="card">
				<img alt="bild" />
				<div class="under-bild"> 
				<h3>Spider-man: No way home</h3>
				<p> 2021-12-17 </p> </div>
			</div>
		</div>
	</main>
  )
}

	


export default App

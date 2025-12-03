import React from "react";

// IMPORTACIONES CORRECTAS SEGÚN LA ESTRUCTURA
import { Navbar } from "../components/Navbar";       // carpeta "components" y export nombrado
import { Jumbotron } from "../components/Jumbotron"; // carpeta "components" y export nombrado
import Card from "../components/Card";               // carpeta "components" y export default

import rigoImage from "../../img/rigo-baby.jpg";    // ruta de la imagen según tu proyecto

const Home = () => {
	return (
		<div>

			{/* Navbar */}
			<Navbar />

			<div className="container mt-4">

				{/* Jumbotron */}
				<Jumbotron />

				{/* Cards */}
				<div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>

				{/* Contenido original 4Geeks */}
				<div className="text-center mt-5">
					<h1>Hello Rigo!</h1>

					<p>
						<img src={rigoImage} alt="Rigo baby" />
					</p>

					<a href="#" className="btn btn-success">
						If you see this green button... bootstrap is working...
					</a>

					<p className="mt-3">
						Made by{" "}
						<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
					</p>
				</div>

			</div>
		</div>
	);
};

export default Home;

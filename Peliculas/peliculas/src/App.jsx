import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Contenedor from './Contenedor.jsx';
import Interprete from './Interprete.jsx';
import InterpretePeli10 from './InterpretePeli10.jsx';
import peliculas from './data/peliculas.js'

function App() {
  return (
    <>
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
      >
        <section
          aria-labelledby="main-section-title"
          className="w-full max-w-7xl text-center"
        >
          <h1
            id="main-section-title"
            className="text-3xl font-semibold mb-8"
          >
            Intérpretes de películas destacadas
          </h1>

          <Contenedor>
            {peliculas
              .filter((pelicula) => pelicula.clasificacion === "Drama")
              .map((pelicula) =>
                pelicula.actores.map((actor, index) => (
                  <InterpretePeli10
                    key={`${pelicula.titulo}-${index}`}
                    nombre={actor.nombre}
                    foto={actor.imagen}
                    esNota10={pelicula.nota === 10}
                  >
                    {actor.biografia}
                  </InterpretePeli10>
                ))
              )}
          </Contenedor>
        </section>
      </main>
    </>
  );
}

export default App;

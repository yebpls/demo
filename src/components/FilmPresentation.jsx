import React, { useState } from "react"
import "./filmpresentation.css"

function FilmPresentation({ films }) {
  const [film, setFilm] = useState([])
  return (
    <div className="container d-flex flex-wrap justify-content-between">
      {films.map((film) => (
        <div className="column mb-4" key={film.id}>
          <div className="card">
            <img alt="" src={film.img}></img>
            <h3 className="name">{film.title}</h3>
            <p className="title">{film.year}</p>
            <p>
              <button onClick={() => setFilm(film)} className="w-100 pt-1 pb-1">
                <a
                  href="#popup1"
                  id="openPopUp"
                  className="text-decoration-none text-white"
                >
                  Detail
                </a>
              </button>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={film.img} alt="" />
          <h2>{film.title}</h2>
          <a className="close" href="#">
            X
          </a>
          <div className="content">{film.description}</div>
        </div>
      </div>
    </div>
  )
}

export default FilmPresentation

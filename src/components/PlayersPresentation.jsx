import React, { useState } from "react"
import "./playerpresentation.css"

function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([])

  return (
    <div className="container d-flex flex-wrap justify-content-between">
      {players.map((player) => (
        <div className="column mb-4" key={player.id}>
          <div className="card">
            <img alt="" src={player.img}></img>
            <h3 className="name">{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button
                onClick={() => setPlayer(player)}
                className="w-100 pt-1 pb-1"
              >
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
          <img src={player.img} alt="" />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            X
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayersPresentation

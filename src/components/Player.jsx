import React, { useState } from "react"
import "./player.css"
import Players from "../shared/ListOfPlayers"

function Player() {
  const [player, setPlayer] = useState([])
  return (
    <div className="container d-flex flex-wrap justify-content-between">
      {Players.map((player) => (
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
                <a href="#popup1" id="openPopUp">
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
            &time;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  )
}

export default Player

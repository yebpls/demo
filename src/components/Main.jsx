import React, { Component } from "react"
import Players from "../shared/ListOfPlayers"
import PlayersPresentation from "./PlayersPresentation"
import Films from "./ListOfFilms"
import FilmPresentation from "./FilmPresentation"

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      players: Players,
      films: Films,
    }
  }
  render() {
    return <input type="text" name="test" />
    //  <PlayersPresentation players={this.state.players} />
  }
}

export default Main

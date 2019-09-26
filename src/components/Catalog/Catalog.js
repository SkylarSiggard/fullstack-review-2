import React, {Component} from 'react'
import Game from './Game'
import Hero from './Hero'
import axios from 'axios'

export default class Catalog extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        axios.get("/api/games").then(res => {
          this.setState({games: res.data})
        })
      }
    render() {
        return(
        <div className="catalog">
            <Hero />
            <Game />
        </div>
        )
    }
}

import React, {Component} from 'react'
import './hero.css'

export default class Hero extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
        <div className="hero">
            <div className="hero-img">
                <div className="register-form">
                    <h2>Register Account</h2>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Name'/>
                    <input type="password" placeholder='Passward'/>
                    <input type="passward" placeholder='Repeat Passward'/>
                    <button>Register</button>
                </div>
            </div>
        </div>
        )
    }
}
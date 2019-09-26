import React, {Component} from 'react'
import './hero.css'
import axios from 'axios'
import swal from 'sweetalert2'

export default class Hero extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: '',
            password1: '',
            password2: ''
        }
    }
    handleChange = async (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    async register() {
        const {email, name, password1, password2} = this.state
        if (password1 === password2) {
            const res = await axios.post('/auth/register', {email, name, password: password2})
            console.log(res)
        } else {
            swal.fire({type: 'error', text: `Passwords don't match!`})
        }
    }

    render() {
        return(
        <div className="hero">
            <div className="hero-img">
                <div className="register-form">
                    <h2>Register Account</h2>
                    <input onChange={e => this.handleChange(e, 'email')} type="text" placeholder='Email'/>
                    <input onChange={e => this.handleChange(e, 'name')} type="text" placeholder='Name'/>
                    <input onChange={e => this.handleChange(e, 'password1')} type="password" placeholder='Password'/>
                    <input onChange={e => this.handleChange(e, 'password2')} type="password" placeholder='Repeat Password'/>
                    <button onClick={() => this.register()}>Register</button>
                </div>
            </div>
        </div>
        )
    }
}
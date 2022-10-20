import React, { Component } from 'react'

export default class LoginClass extends Component {
    render() {
        return (

            
        
                <div className='container'>
                    <div className='form-headings'>
                        <h2>Sign up Class</h2>
                        <p>Get access to your orders and chat for support</p>
                    </div>
                    <form className='form'>
                        <div className='form-group'>
                            <input type='text' placeholder='Enter Username' className=' form-control' />
                        </div>
                        <div className='form-group'>
                            <input type={'password'} placeholder='Password' className='form-control' />
                        </div>
                        <div className='form-group button'>
                            <button className='btn btn-success'>Sign in</button> <a href='#'>Terms and Conditions</a>
                        </div>

                    </form>
                </div>
       )
    }
}

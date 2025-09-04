import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate();
    let [email, setemail] = useState('');
    let [password, setPassword] = useState('')
    let [btnStatus, setBtnStatus] = useState(false)

    let navbtnFunction = (e) => {
        e.preventDefault();
        if (email.length > 3 && email.includes('@') && password.length > 3) {
            navigate('/profile')
        }
    }

    useEffect(() => {
        if (email.length > 3 && email.includes('@') && password.length > 3) {
            setBtnStatus(true)
        }
        else {
            setBtnStatus(false)
        }
    }, [email, password])

    return (
        <div className='Page-Div'>
            <div className='Main-Div'>
                <div className='SignUpContent'>
                    <h2 className='SignUpHeading'>
                        Signin to your
                        <br className='hidden' />
                        PopX account
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        <br className='hidden' />
                        consectetur adipiscing elit,
                    </p>
                    <form action="" className='formLogin' onSubmit={(e) => { navbtnFunction(e) }}>
                        <div>
                            <label> Email Address </label>
                            <input type="email"
                                placeholder='Enter email address'
                                value={email}
                                onChange={(e) => { setemail(e.target.value) }}
                            />
                        </div>
                        <div>
                            <label> Password </label>
                            <input type="password"
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <button
                            // onClick={() => { navbtnFunction(e) }}
                            className={btnStatus ? 'purpleBtnActive' : ''}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

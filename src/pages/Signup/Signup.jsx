import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    let navigate = useNavigate();
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [email, setemail] = useState('');
    let [pass, setPass] = useState('');
    let [company, setCompany] = useState('');
    let [btnStatus, setBtnStatus] = useState(false);


    let navbtnFunction = (e) => {
        e.preventDefault();
        if (email.length > 3 && email.includes('@') && pass.length > 3 && name.length > 0 && phone.length > 9 && company.length > 0) {
            navigate('/profile')
        }
    }

    useEffect(() => {
        if (email.length > 3 && email.includes('@') && pass.length > 3 && name.length > 0 && phone.length > 9 && company.length > 0) {
            setBtnStatus(true)
        }
        else {
            setBtnStatus(false)
        }
    }, [email, pass, phone, name, company])

    return (
        <div className='Page-Div'>
            <div className='Main-Div'>
                <h2 className='SignUpHeading'>
                    Create your&nbsp;
                    <br className='hiddenS' />
                    PopX account
                </h2>
                <div className='SignUpFormOuterDiv'>
                    <form action="" className='formSignUp' onSubmit={(e) => { navbtnFunction(e) }}>
                        <div>
                            <div>
                                <label> Full Name <span>*</span> </label>
                                <input type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    placeholder='Enter name' />
                            </div>
                            <div>
                                <label> Phone number <span> * </span> </label>
                                <input type="text"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    placeholder='Enter phone number' />
                            </div>
                            <div>
                                <label> Email address <span>*</span> </label>
                                <input type="email"
                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                    placeholder='Enter email address' />
                            </div>
                            <div>
                                <label> Password <span>*</span> </label>
                                <input type="password"
                                    value={pass}
                                    onChange={(e) => { setPass(e.target.value) }}
                                    placeholder='Enter password' />
                            </div>
                            <div>
                                <label> Company name </label>
                                <input type="text"
                                    value={company}
                                    onChange={(e) => { setCompany(e.target.value) }}
                                    placeholder='Enter company name' />
                            </div>

                            <div className='SignUpRadio'>
                                <label className=''> Are you an Agency? <span>*</span> </label>
                                <div>
                                    <div>
                                        <input type="radio" name='agency' defaultChecked /> Yes
                                    </div>
                                    <div>
                                        <input type="radio" name='agency' /> No
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className={btnStatus ? 'ActiveBtn' : 'desableBtn'}
                        // onClick={() => { navigate('/profile') }}
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

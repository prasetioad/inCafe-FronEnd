import React,{useState} from 'react'
import axios from 'axios'
// -----------component-------------
import {CardFly} from '../organisme'
import {MainInput, BtnSm, BtnLg, Heading5} from '../atoms'
import {Logo} from '../molekuls'
// ----img-------
import img from '../../assets/img-1.png'
function AuthSignUp() {
    const API = 'https://api2.terhambar.com/'
    const [data, setData] = useState({
        email : '',
        password : '',
        phoneNumber : ''
    })
    function handleEmailChange(e){
        setData({
            ...data,
            email : e.target.value
        })
    }
    function handlePasswordChange(e){
        setData({
            ...data,
            password : e.target.value
        })
    }
    function handlePhoneNumberChange(e){
        setData({
            ...data,
            phoneNumber : e.target.value
        })
    }
    function handleSubmit(e){
        axios({
            method : 'POST',
            url : `${API}/v1/users`,
            data : {
                email : data.email,
                password : data.password,
                phone : data.phoneNumber
            }
        })
        .then(response=>{
            console.log(response.data.data[0].status);
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='container-fluid position-relative'>
            <div className="row">
                <div className="col-12 col-md-6 show-in-md">
                    <img src={img} className='img-fluid'/>
                </div>
                <div className="col-12 col-md-5">
                    <div className="d-flex my-4 justify-content-between">
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <BtnSm 
                            value='Login'
                            color='btn-orange'
                            rounded='rounded-xl'
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center mb-5'>
                                <Heading5 value='Sign Up' />
                            </div>
                            <div className='my-4'>
                                <MainInput label='Email Adress:' placeholder='Enter Your Email Adress' onChange={handleEmailChange} />
                            </div>
                            <div className='my-4'>
                                <MainInput label='Password:' placeholder='Enter Your Password 'type='password' onChange={handlePasswordChange} />
                            </div>
                            <div className='my-4'>
                                <MainInput label='Phone Number:' placeholder='Enter Your Phone Number' type='number' onChange={handlePhoneNumberChange} />
                            </div>
                            <div>
                                <BtnLg 
                                value='Sign Up'
                                color='btn-orange'
                                rounded='rounded-md'
                                onClick={handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardFly />
        </div>
    )
}

export default AuthSignUp

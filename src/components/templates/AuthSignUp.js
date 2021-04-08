import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
// -----------component-------------
import {CardFly} from '../organisme'
import {MainInput, BtnSm, BtnLg, Heading5} from '../atoms'
import {Logo} from '../molekuls'
// ----img-------
import img from '../../assets/img-1.png'
function AuthSignUp() {
    const history = useHistory()
    const API = 'http://localhost:8080'
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
            if(response.status == 201){
                swal('Berhasil', response.data.message, 'success')
                history.push('/user/login')
            }else{
            }
        })
        .catch(err=>{
            if(err.response.data.data.field == 'email'){
                swal('Oops', 'Email tidak Boleh Kosong', 'error')
            }else if(err.response.data.data.field == 'password'){
                swal('Oops', 'password tidak Boleh Kosong', 'error')
            }
        })
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

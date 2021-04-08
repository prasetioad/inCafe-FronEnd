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
function AuthLogin() {
    const history = useHistory()
    const API = 'http://localhost:8080'
    const [data, setData] = useState({
        email : '',
        password : '',
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
    function handleSubmit(e){
        axios({
            method : 'POST',
            url : `${API}/v1/users/login`,
            data : {
                email : data.email,
                password : data.password,
            }
        })
        .then(response=>{
            localStorage.setItem('token',response.data.data.token)
        })
        .catch(err=>{
            if(err.response.status == 400){
                swal('Oops', err.response.data.message, 'error')
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
                            value='SignUp'
                            color='btn-orange'
                            rounded='rounded-xl'
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center mb-5'>
                                <Heading5 value='Login' />
                            </div>
                            <div className='my-4'>
                                <MainInput label='Email Adress:' placeholder='Enter Your Email Adress' onChange={handleEmailChange} />
                            </div>
                            <div className='my-4'>
                                <MainInput label='Password:' placeholder='Enter Your Password' type='password' onChange={handlePasswordChange} />
                            </div>
                            <div>
                                <BtnLg 
                                value='Login'
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

export default AuthLogin

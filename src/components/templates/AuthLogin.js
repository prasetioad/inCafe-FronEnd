import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import axios from 'axios'
import swal from 'sweetalert'
// -----------component-------------
import {CardFly} from '../organisme'
import {MainInput, BtnSm, BtnLg, Heading5} from '../atoms'
import {Logo} from '../molekuls'
// ----img-------
import img from '../../assets/img-1.png'
// action dispatch
import User from '../../configs/redux/actions/user'
function AuthLogin() {
    const dispatch = useDispatch()
    const history = useHistory()
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
        dispatch(User(data.email, data.password))
        .then(message=>{
            swal('Berhasil', message, 'success')
        })
        .catch(message=>{
            swal('Oops', message, 'error')
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

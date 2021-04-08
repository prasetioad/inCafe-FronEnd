import React from 'react'
import {InputNoBorder, BtnPen, TextAreaNoBorder, CheckBox, BtnLg} from '../components/atoms'
import pp from '../assets/profil1.png'
function Profil() {
    return (
        <div className='container-fluid bg-primary'>
            <div className="container mx-auto">
            <div className="row">
                <div className="col-10 col-lg-4 my-5 mx-auto">
                    <div className='card-profil bg-white py-4 px-4 text-center shadow'>
                        <div className='mb-3 px-5 position-relative mt-4 mx-auto' style={{width:260}}>
                            <img src={pp} className='rounded-circle w-100'/>
                            <div className='position-absolute' style={{right:65,top:125}}>
                                <BtnPen />
                            </div>
                        </div>
                        <div className='my-3'>
                            <h3 className='fw-600 m-0'>Aditya</h3>
                            <p className='fs-12'>Aditya74@gmail.com</p>
                        </div>
                        <div className='my-4'>
                            <p>hash been Ordered 6 Products</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-8 my-5 mx-auto">
                    <div className='card-profil bg-white py-4 px-4 shadow'>
                        <div className="d-flex justify-content-between">
                            <div className='align-self-center'>
                                <h4>Contacts</h4>
                            </div>
                            <BtnPen/>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <InputNoBorder
                                label='Email Adress :'
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <InputNoBorder
                                label='Mobile number :'
                                type='number'
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <TextAreaNoBorder
                                label='Delivery adress :'
                                row='1'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-8 my-lg-5 mx-auto">
                    <div className='card-profil bg-white py-4 px-4 shadow'>
                        <div className="d-flex justify-content-between">
                            <div className='align-self-center'>
                                <h4>Details</h4>
                            </div>
                            <BtnPen/>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <InputNoBorder
                                label='Display name :'
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <InputNoBorder
                                label='DD/MM/YY'
                                type='date'
                                />
                            </div>
                            <div className="col-12 col-md-8">
                                <InputNoBorder
                                label='First name :'
                                row='1'
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <div className='my-3'>
                                    <div className='my-3'>
                                        <CheckBox 
                                        label='Male'
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <CheckBox 
                                        label='Female'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <InputNoBorder
                                label='Last name :'
                                row='1'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-4 my-5 mx-auto">
                    <div className='my-2'>
                        <h4 className='text-white fw-700 pb-4'>Do you want to save the change?</h4>
                        <div className='my-2'>
                            <BtnLg 
                            color='btn-coklat'
                            value='Save Changes'
                            rounded='rounded-md'
                            />
                        </div>
                        <div className='my-2'>
                            <BtnLg 
                            color='btn-orange'
                            value='Cancel'
                            rounded='rounded-md'
                            />
                        </div>
                        <div className='my-2'>
                            <BtnLg 
                            color='btn-vanila'
                            value='Edit Password'
                            rounded='rounded-md'
                            />
                        </div>
                        <div className='my-2'>
                            <BtnLg 
                            color='btn-vanila'
                            value='Log Out'
                            rounded='rounded-md'
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Profil

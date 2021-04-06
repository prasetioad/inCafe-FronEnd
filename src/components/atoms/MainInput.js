import React from 'react'

function MainInput({label, type, ...rest}) {
    return (
        <div className=''>
            <label htmlFor="input" className='d-block label-for-main-input' >{label}</label>
            <input type={type} name='input' className='main-input rounded-1' {...rest} />
        </div>
    )
}

export default MainInput

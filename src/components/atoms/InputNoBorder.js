import React from 'react'

function InputNoBorder({label, type, ...rest}) {
    return (
        <div className='my-3'>
            <label htmlFor="input" className='d-block label-for-main-input color-gray' >{label}</label>
            <input type={type} name='input' className='input-style-2 w-100' {...rest} />
        </div>
    )
}

export default InputNoBorder

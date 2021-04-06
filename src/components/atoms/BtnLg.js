import React from 'react'
function BtnLg({value, color, rounded}){
    return (
        <div>
            <button className={'btn-lg ' + color + ' ' + rounded} >{value}</button>
        </div>
    )
}

export default BtnLg

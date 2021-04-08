import React from 'react'

export default function CustomButton({value, bgClr, btnPdg, ftSize, ftWg, mrgn, brRad, txClr}){
    return (
        <div>
            <button className="hoverThis" style={
                {
                background: bgClr, border: "none", 
                borderRadius: brRad, 
                color: txClr, 
                fontSize: ftSize, 
                fontWeight: ftWg, 
                margin: mrgn,
                padding: btnPdg, 
                transitionDuration: "0.5s", 
                outline: "none"
                }
            }>{value}</button>
        </div>
    )
}
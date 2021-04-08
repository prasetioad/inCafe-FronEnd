import React from 'react'

export default function CustomButton({value, bgClr, brdr = "none", btnPdg, bxSd, ftSize, ftWg, mrgn, brRad, txClr, wd}){
    return (
        <div>
            <button className="hoverThis" style={
                {
                background: bgClr, 
                border: brdr, 
                borderRadius: brRad, 
                boxShadow: bxSd,
                color: txClr, 
                fontSize: ftSize, 
                fontWeight: ftWg, 
                margin: mrgn,
                padding: btnPdg, 
                transitionDuration: "0.5s", 
                outline: "none",
                width: wd
                }
            }>{value}</button>
        </div>
    )
}
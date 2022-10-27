import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//When I press enter, I want the program to translate
//I want a clear text button
//Upload files feature?
export default function CustomInput(props) {

    //The text exactly as it appears in the text field
    const inputText = useRef(null)

    return (
        <div className="textF l">
            <h1>Input</h1>
            <TextField multiline minRows={8} className="w-100 h-100 tex" id="outlined-basic" label="Input Text" variant="outlined" onChange={props.keyDown} onKeyDown={props.charTyped}/>
            {/* <h5></h5>
            <h2 ref={inputText}></h2> */}
        </div>
    )
}
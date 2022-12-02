import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SpeechToText } from "./speech.jsx";
//When I press enter, I want the program to translate
//I want a clear text button
//Upload files feature?
export default function CustomInput(props) {

    //The text exactly as it appears in the text field
    const inputText = useRef(null)

    function stt(text) {
        inputText.current.value = text
        inputText.current.focus()
    }

    return (
        <div className="textF l">
            <h1 className="lang">English</h1>
            <TextField inputRef={inputText} multiline minRows={8} className="w-100 h-100 tex" id="outlined-basic" label="Input Text" variant="outlined" onChange={props.charTyped} onKeyDown={props.keyDown} InputProps={{className:"textarea"}} />
            <div className="copy2">
                <SpeechToText setResponse={stt} />
            </div>

            {/* <h5></h5>
            <h2 ref={inputText}></h2> */}
        </div>
    )
}
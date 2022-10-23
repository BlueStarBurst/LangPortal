import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//When I press enter, I want the program to translate
//I want a clear text button
//Upload files feature?
export default function CustomInput(props) {

    //The text exactly as it appears in the text field
    const inputText = useRef(null)

    //The text as it was the last time the button was pressed
    const [text, setText] = useState(null)

    function onTextBoxTyped(e) {
        setText(e.target.value)
    }

    function checkForReturn(e) {
        if(e.target.code=="Enter") {
            //DO SOMETHING HERE
        }
    }

    function ButtonClicked() {
        inputText.current.innerHTML = text
        //This is where I would call a function, with text as a prop
        //instead of updating the inputText
    }

    return (
        <div>
            <h1>Input</h1>
            <TextField id="outlined-basic" label="Input Text..." variant="outlined" onChange={onTextBoxTyped} onKeyDown={checkForReturn}/>
            <h5></h5>
            <Button variant="contained" onClick={ButtonClicked} size="large">TRANSLATE</Button>
            <h2 ref={inputText}>No text</h2>
        </div>
    )
}
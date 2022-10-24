import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';

export default function CustomOutput(props) {
    return (<div>
        <h1>Output</h1>
        <TextField id="outlined-basic" label="Input Text..." variant="outlined" value={props.translated} disabled/>
    </div>
    )
}
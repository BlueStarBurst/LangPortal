import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';

export default function CustomOutput(props) {
    return (<div className="textF r">
        <h1>Output</h1>
        <TextField multiline minRows={8} className="w-100 h-100 tex" id="outlined-basic" label="Output Text" variant="outlined" value={props.translated} disabled/>
    </div>
    )
}
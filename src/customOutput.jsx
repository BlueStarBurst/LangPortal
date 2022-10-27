import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

  

export default function CustomOutput(props) {
    return (<div className="textF r">
        <h1>Output</h1>

        <TextField multiline minRows={8} className="w-100 h-100 tex" id="outlined-basic" label="Output Text" variant="outlined" value={props.translated} disabled onChange={({ target: { value } }) => setValue(value)} />

        <CopyToClipboard text={props.translated}
            onCopy={() => setCopied(true)}
        >
            <FontAwesomeIcon icon={faCopy} />
        </CopyToClipboard>
    </div>
    )
}
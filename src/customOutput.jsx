import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';




export default function CustomOutput(props) {
    return (<div className="textF r">
        <h1>Output</h1>

        <TextField multiline minRows={8} className="w-100 h-100 tex" id="outlined-basic" label="Output Text" variant="outlined" value={props.translated} disabled onChange={({ target: { value } }) => setValue(value)} />

        <CopyToClipboard text={props.translated}
            onCopy={() => setCopied(true)}
        >
            <Tooltip 
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title ="Copy" 
                placement="top-start" 
                arrow
            >
                <IconButton>
                    <FontAwesomeIcon icon={faCopy}/>
                </IconButton>
            </Tooltip>
        </CopyToClipboard>
    </div>

    )
}
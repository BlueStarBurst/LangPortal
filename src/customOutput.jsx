import React, { useState, forwardRef } from "react";
import TextField from '@mui/material/TextField';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from "@mui/material";
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomOutput(props) {
    const [copied,setCopied] = useState(false)
    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
    };

    return (<div className="textF r">
        <h1>Output</h1>

        <TextField multiline minRows={8} className="w-100 h-100 tex" id="outlined-basic" label="Output Text" variant="outlined" value={props.translated} disabled onChange={({ target: { value } }) => setValue(value)} />
        <div className="copy2">
        <CopyToClipboard text={props.translated}
            onCopy={() => setCopied(true)}
            
        >
            <Tooltip 
                onClick={handleClick}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title ="Copy" 
                placement="top-start" 
                arrow
            >
                <IconButton variant="contained" className="copy">
                    <FontAwesomeIcon icon={faCopy}/>
                </IconButton>
            </Tooltip>
        </CopyToClipboard>
        <Snackbar
        message="Copied!"
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Copied!
            </Alert>
        </Snackbar>
        </div>
    </div>
    

    )
}
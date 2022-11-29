import { render } from "react-dom";
import React, { useEffect, useRef, useState } from "react";

import First, { Second } from "./first.jsx";

import Button from "@mui/material/Button";

import TextField from '@mui/material/TextField';
import { httpGet, httpPost } from "./serverAPI.js";

import './styles.scss';
import CustomOutput from "./customOutput.jsx";
import CustomInput from "./customInput.jsx";
import icon from "./image/Untitled (3).png"


function Page(props) {

    // useEffect(() => {
    //     sendData();
    // }, []);

    const [data, setData] = useState("");

    function sendData(text) {
        httpPost("http://localhost:3000/translate", { "text": text },
            (data) => {
                console.log(data);
                setData(data)
            })
    }

    const [text, setText] = useState(null)

    function onTextBoxTyped(e) {
        setText(e.target.value)
    }

    function checkForReturn(e) {
        console.log(e.code)
        if (e.code == "Enter") {
            sendData(text)
        }
    }

    function ButtonClicked() {
        sendData(text)
    }

    const [value, setValue] = useState("")
    const [copied, setCopied] = useState(false)

    return (
        <>
        
        <div className="body">
            <>
                <div className="title">
                    <img src={icon} className="logo"/>
                    <h1>LangPortal</h1>
                </div>
                <div className="page">
                    <CustomInput keyDown={checkForReturn} charTyped={onTextBoxTyped} />
                    <CustomOutput translated={data} />
                </div>
                <Button variant="contained" onClick={ButtonClicked} size="large">TRANSLATE</Button>
                {/* <Button variant="contained">Translate</Button> */}
                
            </>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            </div>
        </>
    )
}




render(
    <Page />,
    document.getElementById("root")
);
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

var timeout = ''
function Page(props) {

    // useEffect(() => {
    //     sendData();
    // }, []);

    const [data, setData] = useState("")

    function sendData(text) {
        httpPost("https://dz17gr07l1.execute-api.us-east-2.amazonaws.com/dev/translate", text,
            (data) => {
                console.log(data);
                var thing = JSON.parse(data)
                console.log(thing["data"][0]["translation_text"])
                try {
                    thing = JSON.parse(thing["data"][0]["translation_text"])
                } catch (error) {
                    console.log("Not JSON")
                    thing = thing["data"][0]["translation_text"]
                    thing = thing.replaceAll("« ", "")
                    thing = thing.replaceAll(" »", "")
                }

                setData(thing)
            })
    }

    const [text, setText] = useState(null)
    const [counts, setCounts] = useState(0)

    function onTextBoxTyped(e) {
        clearTimeout(timeout)
        setText(e.target.value)
        var count = 0;
        var words = e.target.value.split(" ")
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                count++;
            }
        }

        if (counts != count) {
            setCounts(count)
        }

        timeout = setTimeout(() => {
            sendData(e.target.value)
        }, 700)

    }

    useEffect(() => {
        if (text) {
            sendData(text.substring(0, text.length - 1))
        }
    }, [counts])

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
                        <img src={icon} className="logo" />
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
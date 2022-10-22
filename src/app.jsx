import { render } from "react-dom";
import React, { useEffect, useRef, useState } from "react";

import First, { Second } from "./first.jsx";

import Button from "@mui/material/Button";

import TextField from '@mui/material/TextField';
import { httpGet, httpPost } from "./serverAPI.js";

import './styles.scss';
import CustomOutput from "./customOutput.jsx";
import CustomInput from "./customInput.jsx";

function Page(props) {

    useEffect(() => {
        sendData();
    }, []);

    function sendData() {
        httpPost("http://localhost:3000/translate", { "text": "Hello" }, (data) => {
            console.log(data);
        })
    }

    return (
        <>
            <>
                <h1>LangPortal</h1>
                <div className="page">
                    <CustomInput />
                    <CustomOutput />
                </div>
            </>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
        </>
    )
}

render(
    <Page />,
    document.getElementById("root")
);
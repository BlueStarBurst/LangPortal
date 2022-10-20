import { render } from "react-dom";
import React, {useRef, useState} from "react";

import Button from "@mui/material/Button";

import TextField from '@mui/material/TextField';
import httpGET from "./serverAPI.js";

import './styles.css';

import CustomInput from "./customInput.jsx";
import CustomOutput from "./customOutput.jsx";


function Page(props) {
    <div className="body">

            <h1>Lang Portal</h1>
            <CustomInput />
            <CustomOutput />
        </div>
}

render(
    <Page />,
    document.getElementById("root")
);
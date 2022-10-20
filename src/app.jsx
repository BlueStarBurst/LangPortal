import { render } from "react-dom";
import React, { useRef, useState } from "react";

import First, { Second } from "./first.jsx";

import Button from "@mui/material/Button";

import TextField from '@mui/material/TextField';
import httpGET from "./serverAPI.js";

import './styles.css';
import CustomOutput from "./customOutput.jsx";
import CustomInput from "./customInput.jsx";

function Page(props) {
    return (<>
        <CustomInput />
        <CustomOutput />
    </>

    )
}

render(
    <Page />,
    document.getElementById("root")
);
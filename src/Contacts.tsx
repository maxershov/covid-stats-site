import React from 'react';
const facebookImg = require("./images/facebook.svg") as string;
const githubImg = require("./images/github.svg") as string;

const Contacts: React.FC = () => (
    <div className="contacts">
        <a href="https://www.facebook.com/maksksErshov">
            <img alt="facebookLogo" src={facebookImg} />
        </a>
        <a href="https://github.com/maxershov">
            <img id="darkImg" alt="githubLogo" src={githubImg} />
        </a>
        <a href="https://github.com/mathdroid/covid-19-api">API</a>
        <p>Max Ershov 2020</p>
    </div>
);

export default Contacts;
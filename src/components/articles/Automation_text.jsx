import React, { useState, useEffect } from 'react';
import Article_Header from './Article_Header';
import { withRouter } from "react-router-dom";
import { css } from 'emotion'

import rir from "../../images/rir.png";




const title = "PATRICIASHIRAZI.COM";
const description = "Building my portfolio from scratch using my favorite JavaScript framework"

const Automation_text = (props) => {


    useEffect(() => {
        if (props.history.action === "PUSH") {
            window.scrollTo(0, 0)
        } else {
            props.showAutomation(false)
            props.history.push('/');
        }
    })


    const backHome = () => {
        props.showAutomation(false)
        props.history.push('/')
    }
    return (
        <article>
            <Article_Header title={title} description={description} />
            <p className={styles.backHome} onClick={() => backHome()}>Patricia's Portfolio</p>
            <div className={styles.body}>
                <section>
                    <p>Every single feature you see here, from animations to the background design, was made by me. I didn’t use any template or copied and pasted from the internet, not that I don't think it is valid. At the end of the day, we all want to deliver great work, don't overpass our deadlines, and I believe there is no reason to redo a work that is available online.
Because I wanted to take my time and revisit some skills, such as React Hooks, I decided to build this WebApp from scratch.</p>
                </section>
                <section>
                    <h2>Technologies I used:</h2>
                    <ul>
                        <li>React-Hooks</li>
                        <li>React-Router</li>
                        <li>Emotions</li>
                        <li>HTML5</li>
                        <li>Heroku</li>
                    </ul>
                </section>
                <section>
                    <h2>Challenges</h2>
                    <p>My biggest challenge for this project definitely made it responsive. I am happy with the mobile version, but I think it can look a lot better, and I will keep working towards that. </p>
                </section>
                <section>
                    <h2>What I learned</h2>
                    <p>It wasn't the first time I used Hooks or Router, but this experience helped me to understand better concepts from Hooks, such as UseEffect and History on Router</p>
                </section>
            </div>
        </article>
    )
}

const styles = {
    body: css`
        padding-top: 25px;
        width: 90%;
        margin: auto;
    `,
    backHome: css`
    margin-top: 15px;
    padding-left: 48px;
    cursor: pointer;
    &:hover {
        font-weight: bold;
        color: #008080;
        font-size: 18px;
    }`,
    image: css`
    width: 70%;
    height: auto;
    margin-right: 5%;
    margin-left: 5%;
    `,
    image2: css`
    margin-right: 5%;
    margin-left: 5%;
    `
}

export default withRouter(Automation_text);
import React, { useEffect } from 'react';
import Article_Header from './Article_Header';
import { withRouter } from "react-router-dom";
import { css } from 'emotion'

import rir from "../../images/rir.png";

const title = "PATRICIASHIRAZI.COM";
const description = "Building my portfolio from scratch using my favorite JavaScript framework"

const Automation_text = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
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
                    <p>Every single feature you see here, from animations to the background design, was made by me. I didn’t use any template or copied and pasted from the internet, not that I don't think it is totally valid to do so. At the end of the day we all want to deliver great work, don't overcome our deadlines, and I think we all agree there is no reason to redo a work that somebody else already did?! 
Because I didn't have a tight deadline and I wanted to take my time and revisit some skills to build it from scratch.</p>
                </section>
                <img className={styles.image} src={rir} />
                <section>
                    <h2>Technologies I used:</h2>
                    <ul>
                        <li>React</li>
                        <li>React-Router</li>
                        <li>Emotions</li>
                    </ul>               
                </section>
                <section>
                    <h2>Challenges</h2>
                </section>
                <section>
                    <h2>What I learned</h2>
                </section>
            </div>
        </article>
    )
}

const styles = {
    title_holder: css` 
        width: 100%;
        height: 180px;
        background-color: black;
        color: white;
        `,
    title: css`
        padding-top: 25px;
        padding-left: 48px;
        font-family: 'Raleway',sans-serif;
        font-weight: 800;
        font-size: 5.9vw;
        `,
    description: css`
        padding-left: 48px;
        font-family:  Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Fira Sans,Helvetica Neue,Arial,sans-serif;
        font-weight: 600;
        font-size: 5.9vw;
        `,
    body: css`
     text-indent: 5%;
     margin: 12px 12px 12px 12px;
     text-align: justify;

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
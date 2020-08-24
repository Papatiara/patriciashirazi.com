import React, {useEffect} from 'react';
import { css } from 'emotion'

import { withRouter } from "react-router-dom";


import nlp from "../../images/nlp.png";
import Article_Header from './Article_Header';

const title = "Moody - NLP sentiment analysis";
const description = "An overview of how I used a third party API to create a WebApp to analyze sentiments on any user input.";

const Moody_text = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    const backHome = () => {
        props.showMoody(false)
        props.history.push('/home')
    }
    return (
        <article>
            <Article_Header title={title} description={description} />
            <p className={styles.backHome} onClick={() => backHome()}>Patricia's Portfolio</p>
            <div className={styles.body}>
                <section>
                    <h2>What is NLP?</h2>
                    <p> Natural language processing (NLP) is a subfield of linguistics, computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data. </p>
                    <p>My curiosity about NLP started during my job at Google. After analyzing tons of users' queries and trying to adequate it between pragmatic or aspirational inquiries, according to the verticals, I was wondering how machine learning works when it comes to parsing and interpreting words and, why not, sentiments.
                    I thought it would be fun building a Web App myself using a third party API to analyze the user input.</p>
                </section>
                <img src={nlp} />
                <section>
                    <h2>How Moody Works</h2>
                    <p> The user will submit any piece of text and a chart will show the sentiments detected in it divided by Joy, Disgust, Sadness, Anger, Surprise, Fear.</p>
                </section>
                <section>
                    <h2>Some Technologies Used</h2>
                    <ul>
                        <li>TypeScript</li>
                        <li>React-Router</li>
                        <li>Emotions</li>
                        <li>Third-Party API (twinword-emotion-analysis )</li>
                    </ul>
                </section>
                <section>
                    <h3>Would you like to try it out?</h3>
                    <a href={"https://whispering-journey-70242.herokuapp.com/"}> Moody </a>

                    <h3>You can also find the source code here:</h3>
                    <a href={"https://github.com/Papatiara/Moody"}> Moody code on GitHub </a>
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
        font-size: 35px;
        `,
    description: css`
        padding-left: 48px;
        font-family:  Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Fira Sans,Helvetica Neue,Arial,sans-serif;
        font-weight: 600;
        font-size: 15px;
    `,
    body: css`
        padding-top: 25px;
        padding-left: 48px;
    `,
    backHome: css`
        margin-top: 15px;
        padding-left: 48px;
        cursor: pointer;
        &:hover {
            font-weight: bold;
        }
    `
}

export default withRouter(Moody_text);
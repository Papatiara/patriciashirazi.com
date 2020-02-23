import React, {useEffect} from 'react';
import { css } from 'emotion'
import Article_Header from './Article_Header';
import { withRouter } from "react-router-dom";


import graduation from "../../images/hr95cohort.jpg";

const title = 'From "Hello World" to full stack applications';
const description = "How I transit from my life as a Math teacher to a full-stack Software Engineer.";

const Graduation_text = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    const backHome = () => {
        props.showGraduation(false)
        props.history.push('/')
    }
    return (
        <article>
            <Article_Header title={title} description={description} />
            <p className={styles.backHome} onClick={() => backHome()}>Patricia's Portfolio</p>
            <div className={styles.body}>
                <section>
                    <p> My first contact with Javascript, HTML, and CSS was at my company in Rio de Janeiro. Although there are great services, such as Wix, to build a website for almost any company need, there is always that small detail that makes your business unique and you can't find the right feature for it.  </p>
                    <p> After I sold my business and moved to the US, I felt that I had two options for my career: either take courses to become a Math teacher here or move and try new challenges.</p>
                    <p> I choose the second option, and getting into the tech field felt like a smooth transition to me.</p>
                </section>
                <img  className={styles.image} src={graduation} />
                <section>
                    <h2>Hack Reactor</h2>
                    <p> After teaching myself the basics of JavaScript and Python I was convinced I wanted to become a Software Engineer and joining a boot camp was exactly what I was looking for. It was straight forward, and it would give me the experience of working with engineers teams and the technical skills for back-end as well. I joined Hack Reactor in April 2018.</p>
                </section>
                <section>
                    <h2>What I learned on HR</h2>
                    <p>To make sure I had the appropriate base I took Software Engineering Premium Prep twice.</p>
                    <p>The Premium Prep is designed to take beginners to have mastery of basic JS fundamentals and crucial skills needed by anyone learning to code.</p>
                    <h3>The actual Software Engineering Immersive Hack Reactor program was focused on: </h3>
                    <ul>
                        <li>Full Stack JavaScript</li>
                        <li>Inheritance Patterns</li>
                        <li>Algorithms</li>
                        <li>Angular</li>
                        <li>React</li>
                        <li>API frameworks</li>
                        <li>Deployment and Authentication</li>
                        <li>And much more</li>
                    </ul>
                </section>
                <section>
                    <h3>Check here some of the work I did on my Hack Reactor jorney:</h3>
                    <a href={"https://github.com/Papatiara/Moody"}> HR projects</a>
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
            color: #008080;
            font-size: 18px;
        }
    `,
    image: css`
        width: 90%;
        height: auto;
        margin-right: 5%;
        margin-left: 5%;
    `
}

export default withRouter(Graduation_text);
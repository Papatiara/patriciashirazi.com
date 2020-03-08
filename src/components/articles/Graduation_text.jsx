import React, {useEffect} from 'react';
import { css } from 'emotion'
import Article_Header from './Article_Header';
import { withRouter } from "react-router-dom";


import graduation from "../../images/hr95cohort.jpg";

const title = 'From "Hello World" to full stack applications';
const description = "An overview of how I made a transition in my career to the Software Engineering field.";

const Graduation_text = (props) => {
    
    useEffect(() => {
        if (props.history.action === "PUSH") {
            window.scrollTo(0, 0)
        } else {
            props.showGraduation(false)
            props.history.push('/');
        }
    })
      
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
                    <p> My first contact with Javascript, HTML, and CSS was at my company in Rio de Janeiro. Although there are great services, such as Wix, to create a website to meet almost any business's needs, there are always those small details that make your demand unique, and you can't find the right feature for it. </p>
                    <p> After I sold my business and moved to the US, I felt that I had two options for my career: either take courses to become a Math teacher here or move and try new challenges.</p>
                    <p> I choose the second option, and getting into the tech field felt like a smooth transition to me since I had some contact with it on my business.</p>
                </section>
                <img  className={styles.image} src={graduation} />
                <section>
                    <h2>Hack Reactor</h2>
                    <p> I learned the basics of JavaScript, HTML, Ruby, and Python using free resources online. Getting a little deeper into those tools made me sure I wanted to become a Software Engineer. I choose to join a boot camp because It was straight forward, and I wanted the hands-on experience of working with teams of engineers, and back-end skills as well. I joined Hack Reactor in April 2018.</p>
                </section>
                <section>
                    <h2>Topics I learned in Hack Reactor</h2>
                    <p>Even though I studied a lot by myself, to build the appropriate base to start the camp, I took Software Engineering Premium Prep twice.</p>
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
                    <h3>Check here some of the work I did on my Hack Reactor journey:</h3>
                    <a href={"https://github.com/Papatiara/Moody"}> HR projects</a>
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
        margin-left: 5%;
        margin-top: 15px;
        padding-left: 15px;
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
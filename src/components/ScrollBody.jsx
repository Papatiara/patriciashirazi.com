import React from 'react';
import { css } from 'emotion'


import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';




const ScrollBody = (props) => {
    return (
        <div className={styles.body_container}>
            <div className={styles.introduction}>
                <h2> Hi, I am Patricia</h2>
                <p className={styles.line}> </p>
                <br>
                </br>
                <strong> I have always loved solving problems and helping people. I am a bachelor in Mathematics and I used to be a high school teacher for a few years. It was three years ago when I've decided I wanted to move with my career to another field. Since then, I've been building full-stack applications using React, Nodejs, Express, Postgres, Redux, and others. Check out my latest project and a little about my background.</strong>
            </div>
        </div>
    )
}

const styles = {
    body_container: css`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F5F5F5;
        // background-color: #FFF5EE;
    `,

    introduction: css`
        // border: 3px solid brown; 
        margin-top: 20px;
        width: 70%;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 22px;
        text-align: center;
        @media (min-width: 330px){
            font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 20px;
        }
        @media (width: 320px){
            font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 18px;
        }
        @media (width: 280px){
            font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 18px;
                }
    `,
    line: css`
        border-bottom: 1px solid grey;
        padding-bottom: 5px;
        margin: auto;
        width: 100px;
    `,

    projects: css`
            width: 100%;
            height: 300px;        `,

}
export default ScrollBody;
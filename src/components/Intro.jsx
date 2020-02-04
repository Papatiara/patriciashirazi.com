import React from 'react';
import TextLoop from "react-text-loop";
import ScrollIntoView from 'react-scroll-into-view'
import { css } from 'emotion'


const Intro = () => {
    return (
        <div>
            <div className={styles.intro}>
                <h1 className={styles.hello}> Olá, </h1>
                <h3 className={styles.me}> I am Patricia and this is my portfolio. Click or scroll to know a little more about me </h3>
                < ScrollIntoView selector="#header">
                    <button className={styles.button}> About me </button>
                </ScrollIntoView>

            </div>
            {/* <h2 className={styles.text}>
                <TextLoop springConfig={{ stiffness: 70, damping: 31 }}
                    adjustingSpeed={500} >
                    <span> Software Engineering </span>
                    <span> Mathematics </span>
                    <span> Entrepreneurship </span>
                    <span> User Experience </span>
                </TextLoop>{" "}
            </h2> */}
            {/* </div> */}
        </div>
    )
}

const styles = {
    intro: css`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0 auto;
    `,
    hello: css`
    font-size: 67px;
    color: black;
    padding: 10px;
    font-family: 'Libre Franklin', sans-serif;
    `,
    me: css`
    font-size: 23px;
    font-family: 'Libre Franklin', sans-serif;
    `,
    button: css` 
    margin-top: 40%;
    border-radius: 5px;
    padding: 14px 28px;
    cursor: pointer;
    &:hover {
    color: white;
    background-color: black;
    transition: 1s;
     border-color:#DDDDDD;
    }&:focus {
        outline: none;
         background-color: black;
        color: white;

    }
    `,
}

export default Intro;

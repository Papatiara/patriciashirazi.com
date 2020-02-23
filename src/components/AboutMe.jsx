import React from 'react';
import { css } from 'emotion'

const AboutMe = () => {
    return (
    <div id={"here"} className={styles.container}>
        <p className={styles.aboutme}>I am a Full Stack Software Engineer with a background as a Math Teacher and in business. I am passionate about solving algorithms and user experience. </p>
        <p className={styles.aboutme}> Check below and learn a little about my background</p>
    </div>
    )
}

const styles = {
    aboutme: css`
    font-size: 23px;
    text-align: center;
    text-decoration: none;
    // text-indent: 50px;
    // margin-left: 60%;
    margin-top: 40px;
    line-height: 38px;
    // text-transform: uppercase;
    `,
    container: css`
    // display: flex;
    // justify-content: center;
    width: 700px;

    `
}


export default AboutMe;


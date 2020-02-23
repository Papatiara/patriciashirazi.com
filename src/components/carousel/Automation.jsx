import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";

import coding from '../../images/coding.png'

const Automation = () => {
    return (
        <div className={styles.projects}>
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={coding}
                    alt=""
                />
                <MDBMask className={styles.classname}>
                    <div className={styles.summary}>
                        <p> Building this portfolio from scratch using React Hooks </p>
                    </div>
                </MDBMask>
            </MDBView>
        </div>
    )
}

let classname = "flex-center";

const fadeInImage = keyframes` {
    0% {
        width: 30%;
        height: 30%;
    } 
    100% {
        width: 100%;
        width: 100%;
    }
}`


const styles = {
    projects: css`
    height: 350px;
    width: 320px;
    cursor: pointer;
    margin-top: 3%;
    `,
    image: css`
    animation: ${fadeInImage} 0.3s ease-out;
    `,
    classname: css`
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    `,
    summary: css`
    margin-top: 82%;
    width: auto;
    height: auto;
    background-color: #008080;
    font-size: 20px;
    `
}

export default Automation;
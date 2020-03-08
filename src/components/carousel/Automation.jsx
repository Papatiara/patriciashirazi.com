import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";

import coding from '../../images/coding.png'

const Automation = (props) => {
    return (
        <div className={styles.projects}>
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={coding}
                    alt=""
                />
                <MDBMask className={styles.classname}>
                    <Link to="/portfolio">
                        <div className={styles.summary}>
                            <p onClick={() => props.showAutomation(true)}> Building this portfolio from scratch using React Hooks... (Read More) </p>
                        </div>
                    </Link>
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
    margin-top: 9%;
    `,
    image: css`
    animation: ${fadeInImage} 0.3s ease-out;
    `,
    classname: css`
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    `,
    summary: css`
    margin-top: 82%;
    width: auto;
    height: auto;
    background-color: #008080;
    font-size: 20px;
    cursor: pointer;
    color: white;
    @media (max-width: 320px) {
        margin-top: 86%;
        width: 300px;
        height: auto;
        font-size: 15px;
        margin-left: 0%;
    }`
}

export default Automation;
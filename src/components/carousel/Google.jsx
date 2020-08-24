import React from 'react';
import { css, keyframes } from 'emotion';
import { MDBView, MDBMask } from "mdbreact";
import { Link} from "react-router-dom";


import google from '../../images/google.jpg';

const Google = (props) => {
    return (
        <Link to="/google">
            <div className={styles.google} onClick={() => props.showGoogle(true)}>
                <MDBView hover zoom>
                    <img
                        className={styles.image}
                        src={google}
                        alt=""
                    />
                    <MDBMask className={styles.classname} overlay="#F5F5F5">
                        <div className={styles.test}>
                            <p>How I helped to improve Google Search in Brazil.</p></div>
                    </MDBMask>
                </MDBView>
            </div>
        </Link>
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
    google: css`
    height: 350px;
    width: 320px;
    margin-top: 10%;
    `,
    image: css`
    animation: ${fadeInImage} 0.2s ease-out;
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
    color: white;
    background-color: #008080;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    `,
    test: css`
    margin-top: 76%;
    width: auto;
    height: auto;
    background-color: black;
    font-size: 20px;
    `
}

export default Google;
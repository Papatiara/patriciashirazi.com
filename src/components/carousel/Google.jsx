import React from 'react';
import { css, keyframes } from 'emotion';
import { MDBView, MDBMask } from "mdbreact";
<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom";


import google from '../../images/google.png';

const Google = (props) => {
    return (
        <div className={styles.google}>
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={google}
                    alt=""
                />
                <MDBMask className={styles.classname}>
                    <Link to="/google">
                        <div className={styles.summary}>
                            <p onClick={() => props.showGoogle(true)}>How I helped to improve Google Search in Brazil... (Read More)</p>
                        </div>
                    </Link>

                </MDBMask>
            </MDBView>
        </div>
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
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
<<<<<<< HEAD
    text-align: center;
    `,
    test: css`
    margin-top: 76%;
    width: auto;
    height: auto;
    background-color: black;
    font-size: 20px;
    `
=======
    @media (max-width: 320px) {
        margin-top: 86%;
        width: 290px;
        height: 50px;
        font-size: 14px;
        margin-left: 0%;
    }`
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
}

export default Google;
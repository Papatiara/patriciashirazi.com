import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";

import moody from '../../images/Moody.png'

const Moody = (props) => {
    return (
        <div className={styles.projects} >
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={moody}
                    alt=""
                />
                <MDBMask className={styles.classname} >
                    <Link to="/moody">
                        <div className={styles.summary}>
                        {/* <a href={"https://whispering-journey-70242.herokuapp.com/"}> Sentiment Analysis of texts </a> */}

                            <a onClick={() => { props.showMoody(true) }}> Moody - A Web App I built using React... (Read More)</a>
                        </div>
                    </Link >
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
        margin-top: 10%;
        `,
    image: css`
        animation: ${fadeInImage} 0.3s ease-out;
        border: 2px solid #e4f6e0;
        `,
    classname: css`
        color: white;
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    `,
    summary: css`
        margin-top: 76%;
        width: auto;
        height: auto;
        background-color: #008080;
        font-size: 20px;
        cursor: pointer;
        color: white;
        a {
            color: white;
        }
        @media (max-width: 320px) {
            margin-top: 86%;
            width: 295px;
            height: 50px;
            font-size: 14px;
            margin-left: 0%;
        }`
        
}

export default Moody;
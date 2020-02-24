import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";

import selenium from '../../images/moody.png'

const Moody = (props) => {
    return (
        <Link to="/moody">
            <div className={styles.projects} >
                <MDBView hover zoom>
                    <img
                        className={styles.image}
                        src={selenium}
                        alt=""
                    />
                    <MDBMask className={styles.classname} >
                        <div className={styles.summary}>
                            <p onClick={() => { props.showMoody(true) }}> Moody - NLP sentiment analysis - A WebApp I built using React</p>
                        </div>
                    </MDBMask>
                </MDBView>
            </div>
        </Link >
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
        `
}

export default Moody;
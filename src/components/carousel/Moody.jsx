import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";

import moody from '../../images/moody.png'

const Moody = (props) => {
    return (
<<<<<<< HEAD
        <Link to="/moody">
            <div className={styles.projects} onClick={() => { props.showMoody(true) }}>
                <MDBView hover zoom>
                    <img
                        className={styles.image}
                        src={selenium}
                        alt=""
                    />
                    <MDBMask className={styles.classname} overlay="cyan-light">
                        <p> Moody WebApp</p>
                    </MDBMask>
                </MDBView>
            </div>
        </Link >
=======
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
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
    )
}

let classname = "flex-center";

const fadeInImage = keyframes` {
<<<<<<< HEAD
    0 % {
        width: 30 %;
        height: 30 %;
=======
    0% {
        width: 30%;
        height: 30%;
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
    } 
    100% {
        width: 100%;
         width: 100%;
        }
    }`

const styles = {
    projects: css`
<<<<<<< HEAD
        height: 250px;
        width: 250px;
        cursor: pointer;
        `,
    image: css`
        animation: ${fadeInImage} 0.3s ease-out;`,
=======
        height: 350px;
        width: 320px;
        margin-top: 10%;
        `,
    image: css`
        animation: ${fadeInImage} 0.3s ease-out;
        border: 2px solid #e4f6e0;
        `,
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
    classname: css`
        color: white;
        font-size: 1.5em;
        font-weight: bold;
<<<<<<< HEAD
        cursor: pointer;
        text-align: center;`
=======
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
        
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
}

export default Moody;
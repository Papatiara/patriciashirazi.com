import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";


import business from '../../images/business.jpg'


const Business = (props) => {
    return (
<<<<<<< HEAD
        <Link to="business">
            <div className={styles.business} onClick={() => props.showSubject(true)}>
                <MDBView hover zoom>
                    <img
                        className={styles.image}
                        src={business}
                        alt=""
                    />
                    <MDBMask className={styles.classname} overlay="cyan-light">
                        <p>Rio iPhone Repair</p>
                    </MDBMask>
                </MDBView>
            </div>
        </Link>
=======
        <div className={styles.business}>
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={business}
                    alt=""
                />
                <MDBMask className={styles.classname}>
                    <Link to="business">
                        <div className={styles.summary}>
                            <p onClick={() => props.showSubject(true)}>I started my own company by teaching myself how to fix iPhones... (Read More)</p>
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
    business: css`
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
    margin-top: 73%;
    width: auto;
    height: auto;
    background-color: #008080;
    font-size: 20px;
    cursor: pointer;
<<<<<<< HEAD
    text-align: center;
    `
=======
    color: white;
    @media (max-width: 320px) {
        margin-top: 86%;
        width: 295px;
        height: 50px;
        font-size: 14px;
        margin-left: 0%;
    }`
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
}

export default Business;
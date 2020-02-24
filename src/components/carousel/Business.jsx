import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";


import business from '../../images/business.jpg'


const Business = (props) => {
    return (
        <Link to="business">
            <div className={styles.business} onClick={() => props.showSubject(true)}>
                <MDBView hover zoom>
                    <img
                        className={styles.image}
                        src={business}
                        alt=""
                    />
                    <MDBMask className={styles.classname}>
                        <div className={styles.summary}>
                            <p>I started my own company by learning myself how to fix iPhones</p>
                        </div>                    
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
    business: css`
    height: 350px;
    width: 320px;
    cursor: pointer;
    margin-top: 10%;
  `,
    image: css`
    animation: ${fadeInImage} 0.3s ease-out;
    `,
    classname: css`
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    `,
    summary: css`
    margin-top: 82%;
    width: auto;
    height: auto;
    background-color: #008080;
    font-size: 20px;
    `
}

export default Business;
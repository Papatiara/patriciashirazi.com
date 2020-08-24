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
                    <MDBMask className={styles.classname} overlay="cyan-light">
                        <p>Rio iPhone Repair</p>
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
    height: 250px;
    width: 250px;
    cursor: pointer;
    `,
    image: css`
    animation: ${fadeInImage} 0.2s ease-out;
    `,
    classname: css`
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    `
}

export default Business;
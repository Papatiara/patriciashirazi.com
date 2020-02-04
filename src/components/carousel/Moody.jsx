import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";

import selenium from '../../images/selenium.png'

const Moody = () => {
    return (
        <div className={styles.projects}>
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
    )
}

let classname = "flex-center";

const fadeInImage = keyframes ` {
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
    `
}

export default Moody;
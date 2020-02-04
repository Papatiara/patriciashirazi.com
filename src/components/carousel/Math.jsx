import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";

import math from '../../images/math.jpeg'

const Math = () => {
    return (
        <div className={styles.math}>
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={math}
                    alt=""
                />
                <MDBMask overlay="cyan-light" className={styles.classname}>
                    <p>High School Teacher</p>
                </MDBMask>
            </MDBView>
        </div>
    )
}

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

let classname = "flex-center";

const styles = {
    math: css`
    height: 250px;
    width: 250px;
    cursor: pointer;
    `,
    image: css`
    animation: ${fadeInImage} 0.2s ease-out;
    `,
    classname: css`
    height: 250px;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
    `
}
export default Math;
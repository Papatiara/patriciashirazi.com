import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";

import math from '../../images/teacherciee.jpg'


const Math = (props) => {
    return (
        <Link to="/aprendizlegal">
            <div className={styles.math} onClick={() => { props.showMath(true) }}>
                <MDBView hover zoom>
                    <img
                        className={styles.image}
                        src={math}
                        alt=""
                    />
                    <MDBMask className={styles.classname}>
                        <div className={styles.summary}>
                            <p>Helping underpriviledged young students to get their first job</p>
                        </div>
                    </MDBMask>
                </MDBView>
            </div>
        </Link>
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
    height: 350px;
    width: 320px;
    cursor: pointer;
    margin-top: 3%;
    `,
    image: css`
    animation: ${fadeInImage} 0.3s ease-out;
    `,
    classname: css`
    height: 250px;
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
export default Math;
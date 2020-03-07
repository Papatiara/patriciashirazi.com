import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";

import math from '../../images/teacherciee.jpg'


const Math = (props) => {
    return (
        <div className={styles.math}>
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={math}
                    alt=""
                />
                <MDBMask className={styles.classname}>
                    <Link to="/aprendizlegal">
                        <div className={styles.summary}>
                            <p onClick={() => { props.showMath(true) }}>Helping underpriviledged young students to get their first jobs</p>
                        </div>
                    </Link>
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
    height: 350px;
    width: 320px;
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
    text-align: center;
    `,
    summary: css`
    margin-top: 82%;
    width: auto;
    height: auto;
    background-color: #008080;
    font-size: 20px;
    color: white;
    cursor: pointer;
    @media (max-width: 320px) {
        margin-top: 86%;
        width: 295px;
        height: 50px;
        font-size: 14px;
        margin-left: 0%;
    }`
}
export default Math;
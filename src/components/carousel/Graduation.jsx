import React from 'react';
import {css, keyframes} from 'emotion'
import { MDBView, MDBMask} from "mdbreact";

import graduation from '../../images/graduation.jpg'

const Graduation = () => {
    return (
        <div className={styles.graduation}>
            <MDBView hover zoom>
                <img
                    className={styles.image}
                    src={graduation}
                    alt=""
                />
                <MDBMask overlay="cyan-light" className={styles.classname} >
                    <p>Graduation</p>
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
    graduation: css`
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
export default Graduation;
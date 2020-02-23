import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";


import hr from '../../images/hr.jpg'

const Graduation = (props) => {
    return (
        <Link to="/hackreactor">
            <div className={styles.graduation} onClick={() => { props.showGraduation(true) }}>
                <MDBView hover zoom>
                    <img
                        id={"graduation"}
                        className={styles.image}
                        src={hr}
                        alt=""
                    />
                    <MDBMask className={styles.classname} >
                        <div className={styles.summary}>
                            <p>A summary of my journy in HackReactor</p>
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
    graduation: css`
    height: 320px;
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
export default Graduation;
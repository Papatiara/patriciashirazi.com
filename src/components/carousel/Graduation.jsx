import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2


<<<<<<< HEAD
const Graduation = (props) => {
    return (
            <Link to="/hackreactor">
                <div className={styles.graduation} onClick={() => { props.showGraduation(true) }}>
                    <MDBView hover zoom>
                        <img
                            id={"graduation"}
                            className={styles.image}
                            src={graduation}
                            alt=""
                        />
                        <MDBMask overlay="cyan-light" className={styles.classname} >
                            <p>Graduation</p>
                        </MDBMask>
                    </MDBView>
                </div>
            </Link>
=======
import hr from '../../images/hr.jpg'

const Graduation = (props) => {
    return (
        <div className={styles.graduation} >
            <MDBView hover zoom>
                <img
                    id={"graduation"}
                    className={styles.image}
                    src={hr}
                    alt=""
                />
                <MDBMask className={styles.classname} >
                    <Link to="/hackreactor">
                        <div className={styles.summary}>
                            <p onClick={() => { props.showGraduation(true) }}>A summary of my journey in HackReactor... (Read More)</p>
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
    graduation: css`
    height: 320px;
    width: 320px;
    margin-top: 10%;
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
    margin-top: 82%;
    width: auto;
    height: auto;
    color: white;
    background-color: #008080;
    font-size: 20px;
    cursor: pointer;
<<<<<<< HEAD
    text-align: center;
    `
=======
    @media (max-width: 320px) {
        margin-top: 86%;
        width: 295px;
        height: 50px;
        font-size: 14px;
        cursor: pointer;
        margin-left: 0%;
    }`
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
}
export default Graduation;
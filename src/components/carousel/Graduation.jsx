import React from 'react';
import { css, keyframes } from 'emotion'
import { MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";


import graduation from '../../images/graduation.jpg'

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
    height: 250px;
    width: 250px;
    cursor: pointer;
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
    `
}
export default Graduation;
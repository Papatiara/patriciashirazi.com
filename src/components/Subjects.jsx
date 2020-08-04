import React, { useState } from 'react';
import { css } from 'emotion'

import Carousel from './Carousel';



const Subjects = (props) => {
    const [subject, setSubject] = useState('')

    const onclick = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div>
            <div id={"here"} className={styles.buttons_container}>
                <button onClick={onclick} className={styles.button} value="All"> All </button>
                <button onClick={onclick} className={styles.button} value="Math"> Math </button>
                <button onClick={onclick} className={styles.button} value="Google"> Google </button>
                <button onClick={onclick} className={styles.button} value="Engineering"> Software Engineering </button>
                <button onClick={onclick} className={styles.button} value="Entrepreneurship"> Entrepreneurship </button>
                <button onClick={onclick} className={styles.button} value="Voluntering"> Voluntering </button>
            </div>
                < Carousel matter={subject} showMoody={props.showMoody} showSubject={props.showSubject} showGoogle={props.showGoogle} showGraduation={props.showGraduation} showMath={props.showMath} showAutomation={props.showAutomation} />
        </div>
    )
}

const styles = {
    buttons_container: css`
    margin-top: 3%;
    margin-left: 15%;
        flex-wrap: wrap;
        width: 70%;
        display: flex;
        justify-content: space-between;
         @media (max-width: 1024px) {
        margin-top: 12%;
        margin-left: 5%;
        flex-wrap: wrap;
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
        `,
    button: css` 
        border: 2px solid black;
        border-radius: 5px;
        padding: 14px 28px;
        background-color: white;
        margin-top: 3%;
        cursor: pointer;
        &:hover {
         background-color: black;
        color: white;
        transition: 1s;
         border-color:#DDDDDD;
        }&:focus {
            outline: none;
            background-color: black;
            color: white;
        }@media (max-width: 1400px) {
            margin-top: 3%;
        } @media (max-width: 1024px) {
        margin: 0px;
        margin-top: 3%;

    
    }
        `,
}
export default Subjects;
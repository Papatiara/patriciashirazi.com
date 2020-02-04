import React, { useState } from 'react';
import { css } from 'emotion'

import Carousel from './Carousel';



const Subjects = () => {
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
            </div>
            <div className={styles.grid}>
                < Carousel matter={subject} />
            </div>
        </div>
    )
}

const styles = {
    grid: css`
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 1200px;
    transition: width 2s;
    height: auto;
    margin-right: -10%;
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        height: 1500px;
        width: 250px;
        align-items: center;
        justify-content: space-around;
    }
    `,
    buttons_container: css`
        margin-top: 2%;
        margin-left: 23.5%;
        width: 700px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 1400px) {
            margin-top: 5%;

        }
        `,
    button: css` 
        border: 2px solid black;
        border-radius: 5px;
        padding: 14px 28px;
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

        }
        `,
}
export default Subjects;
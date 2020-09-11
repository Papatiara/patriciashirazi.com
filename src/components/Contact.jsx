import React from 'react';
import { css } from 'emotion'



const Contact = () => {

    return (
            <div className={styles.contact_container}>
                <div className={styles.contact}>
                    <h2 className={styles.title}>  Contact </h2>
                    <p className={styles.line}></p>
                    <br></br>
                    <p className={styles.description}> Any questions? send an <a href="mailto:shirazipatricia@gmail.com">email</a> </p>
                </div>
            </div>
    )
}

const styles = {
    contact_container: css`
        background-color: white;
        width: 100%;
        min-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #262626;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    `,
    contact: css`
    // border: 3px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
        width: 70%;
        height: 100px;
        @media only screen and (max-width: 375px) and (min-width: 280px) {
            width: 100%;

        }
    `,
    title: css`
        font-size: 22px;
    `,
    line: css`
        border-bottom: 1px solid grey;
        padding-bottom: 5px;
        margin: auto;
        width: 100px;
    `,
    description: css`
        font-size: 18px;

    `

}

export default Contact;
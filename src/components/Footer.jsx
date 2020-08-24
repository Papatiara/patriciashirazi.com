import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { css } from 'emotion'


const Footer = () => {
    return (<div className={styles.footer}>
        <a className={styles.icons} href="https://github.com/Papatiara"><FontAwesomeIcon icon={faGithub} /></a>
        <a className={styles.icons} href="https://www.linkedin.com/in/patriciashirazi/"><FontAwesomeIcon icon={faLinkedin} /> </a>
    </div>

    )
}

const styles = {
    footer: css`
<<<<<<< HEAD
        bottom: 0;
        margin-top: 0px;
=======
    position: relative;
    margin-top: 10%;
    bottom: 0;
    width: 100%;        
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        @media (max-width: 1000px) {
<<<<<<< HEAD
            margin:0;
=======
            bottom:0;
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2

        },
    `,
    icons: css`
<<<<<<< HEAD
        color: white;
        cursor: pointer;
        margin-left: 30px;
        font-size: 20px;
        &:hover {
            color: #708090;
        }
=======
    color: white;
    cursor: pointer;
    margin-left: 30px;
    font-size: 20px;
    &:hover {
        color: #708090;
    }
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
    `
}

export default Footer;
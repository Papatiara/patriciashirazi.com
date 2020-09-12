import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { css } from 'emotion';


const Footer = () => {
    return (
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer}>
                <a className={styles.icons} href="https://github.com/Papatiara"><FontAwesomeIcon icon={faGithub} /></a>
                <a className={styles.icons} href="https://www.linkedin.com/in/patriciashirazi/"><FontAwesomeIcon icon={faLinkedin} /> </a>
            </div>
            <div className={styles.name}>
                <p> © 2020 Patricia Shirazi | shirazipatricia@gmail.com</p>
            </div>
        </footer>
    )
}

const styles = {
    footer_wrapper: css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #254769;
        position-fixed;
        width: 100%;
        min-height: 20vh;
        margin-bottom: -100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        @media (max-width: 1000px) {
            margin:0;
        },
    `,
    footer: css`   
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    `,
    icons: css`
        color: white;
        cursor: pointer;
        margin-left: 30px;
        font-size: 20px;
        &:hover {
            color: #708090;
        }
    `,
    name: css`
        color: #F5F5F5;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 12px;
    `
}

export default Footer;
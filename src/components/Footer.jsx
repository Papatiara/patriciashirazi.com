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
        bottom: 0;
        margin-top: 0px;
        background-color: #254769;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        @media (max-width: 1000px) {
            margin:0;

        },
    `,
    icons: css`
        color: white;
        cursor: pointer;
        margin-left: 30px;
        font-size: 20px;
        &:hover {
            color: #708090;
        }
    `
}

export default Footer;
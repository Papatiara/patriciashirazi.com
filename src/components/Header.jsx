import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'


import { css } from 'emotion'


const Header = () => {

    return (<div id="header" className={styles.head}>
        <a className={styles.icons} href="https://github.com/Papatiara"><FontAwesomeIcon icon={faGithub} /></a>
        <a className={styles.icons} href="https://www.linkedin.com/in/patriciashirazi/"><FontAwesomeIcon icon={faLinkedin} /> </a>
        <a className={styles.icons} href="https://docs.google.com/document/d/1P0EkLsdc8pjncGLzY5CRrDi8DnIW1Av8RvUSqYHuQNw/edit"><FontAwesomeIcon icon={faFile} /> </a>
    </div>

    )
}

const styles = {
    head: css`
    margin-top:0%;
    background-color: black;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        @media (max-width: 1000px) {
            margin-top:0%;
           
        },
        @media (width: 768px) {
            margin-top:0%;
           width: 768px;
        },
    `,
    icons: css`
    color: white;
    cursor: pointer;
    font-size: 86px;
    &:hover {
        color: #708090;
    }
    `
}

export default Header;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'




import { css } from 'emotion'



import linkedin from "../images/linkedin.png"
import git from "../images/git.png"

const Header = () => {
    return (<div id="header" className={styles.header}>
        <FontAwesomeIcon className={styles.git} icon={faGithub} />
        <FontAwesomeIcon className={styles.git} icon={faLinkedin} />
        <FontAwesomeIcon className={styles.git} icon={faFile} />
    </div>

    )
}

const styles = {
    header: css`
        margin-top: 70%;
        background-color: black;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 130px;
        @media (max-width: 1400px) {
            margin-top: 160%;

        },
    `,
    git: css`
    color: white;
    margin-top: 2%;
    cursor: pointer;
    font-size: 86px
    `
}

export default Header;
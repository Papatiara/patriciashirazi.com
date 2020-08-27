import React, { useRef } from 'react';
import { css } from 'emotion'

import Header from './Header';
import ScrollBody from './ScrollBody';
import Footer from './Footer';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';

const Body = () => {
    

    return (
        <div className={styles.body}>
            <Header />
            <ScrollBody />
            <div className={styles.refs} id="projects"></div>
            <Projects />
            <div className={styles.refs} id="journey" ></div>
            <Journey />
            <div className={styles.refs} id="contact"></div>
            <Contact />
            <Footer />
        </div>

    )
}
const styles = {
    body: css`
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch !important;
    `,
    refs: css`
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch !important;
    margin: auto;

    `,
}

export default Body;
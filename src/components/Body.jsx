import React, { useRef } from 'react';
import { css } from 'emotion'

import Header from './Header';
import ScrollBody from './ScrollBody';
import Footer from './Footer';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';

const Body = (props) => {
    const projectsRef = useRef(null);
    const journeyRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className={styles.body}>
            <Header introRef={props.i} Pref={projectsRef} Cref={contactRef} Jref={journeyRef} />
            <ScrollBody />
            <div className={styles.refs} ref={projectsRef}></div>
            <Projects />
            <div className={styles.refs} ref={journeyRef}></div>
            <Journey  />
            <div className={styles.refs} ref={contactRef}></div>
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
    `,
}

export default Body;
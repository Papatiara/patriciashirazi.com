import React, { useRef } from 'react';
import { css } from 'emotion'

import Header from './Header';
import ScrollBody from './ScrollBody';
import Footer from './Footer';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';


const Body = (props) => {

    const journeyRef = useRef(null)
    const projectsRef = useRef(null)
    const contactsRef = useRef(null)

    return (
        <div className={styles.body}>
            <Header iRef={props.iRef} contactsRef={contactsRef} projectsRef={projectsRef} journeyRef={journeyRef} />
            <ScrollBody />
            <div ref={projectsRef}></div>
            <Projects projectsRef={projectsRef}/>
            <div ref={journeyRef}></div>
            <Journey Jref={journeyRef}  />
            <div ref={contactsRef}></div>
            <Contact Cref={contactsRef}/>
            <Footer />
        </div>

    )
}
const styles = {
    body: css`
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    `,
        projects: css`
            // margin-top: 17%;
            width: 100%;
        height: 100vh;       `,
        contact: css`
            // margin-top: 17%;
            // width: 100%;
            // height: 300px;
    `
}

export default Body;
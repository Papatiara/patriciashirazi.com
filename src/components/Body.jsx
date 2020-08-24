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
        <div>
            <Header iRef={props.introRef} contactsRef={contactsRef} projectsRef={projectsRef} journeyRef={journeyRef} />
            <ScrollBody  />
            <Projects projectsRef={projectsRef}/>
            <Journey Jref={journeyRef}  />
            <Contact Cref={contactsRef}/>
            <Footer />
        </div>

    )
}
const styles = {
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
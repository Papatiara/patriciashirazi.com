import React, {useState} from 'react';

import { css } from 'emotion'


const Header = (props) => {
    const [mobileMenu, setMobileMenu] = useState(styles.mobile_options)

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const scrollToJourney = () => {
        setMobileMenu(mobileMenu === styles.mobile_options ?styles.mobile_options_clicked :  styles.mobile_options)
        scrollToRef(props.journeyRef)
    }
    const scrollToProjects = () => {
        setMobileMenu(mobileMenu === styles.mobile_options ?styles.mobile_options_clicked :  styles.mobile_options)
        scrollToRef(props.projectsRef)

    }
    const scrollToContact = () => {
        setMobileMenu(mobileMenu === styles.mobile_options ?styles.mobile_options_clicked :  styles.mobile_options)
        scrollToRef(props.contactsRef)

    }
    const scrollToTop = () => {
        setMobileMenu(styles.mobile_options)
        scrollToRef(props.iRef)
    }
    const mobileMenuFunc = () => {
        setMobileMenu(mobileMenu === styles.mobile_options ?styles.mobile_options_clicked :  styles.mobile_options)
        
    }


    return (
        <div id="header" className={styles.head}>
            <div onClick={scrollToTop} className={styles.name}>PATRICIA SHIRAZI</div>
            <div onClick={mobileMenuFunc}className={styles.mobile_menu_container}>
                <div className={styles.mobile_menu} ></div>
                <div className={styles.mobile_menu} ></div>
                <div className={styles.mobile_menu} ></div>
            </div>
            <div className={mobileMenu}>
                <a onClick={scrollToTop}>HOME</a>
                <a onClick={scrollToProjects}>PROJECTS</a>
                <a onClick={scrollToJourney} >JOURNEY</a>
                <a onClick={scrollToContact}>CONTACT</a>
                <a href="https://docs.google.com/document/d/14Vql67uuB3bDuDTiXHQQmFu1EwKp-fVUa5XfCbPQhX4/edit?usp=sharing">RESUME</a>
            </div>
            <div className={styles.options}>
                <a onClick={scrollToTop}>HOME</a>
                <a onClick={scrollToProjects}>PROJECTS</a>
                <a onClick={scrollToJourney} >JOURNEY</a>
                <a onClick={scrollToContact}>CONTACT</a>
                <a href="https://docs.google.com/document/d/14Vql67uuB3bDuDTiXHQQmFu1EwKp-fVUa5XfCbPQhX4/edit?usp=sharing">RESUME</a>
            </div>
        </div>
    )
}

const styles = {
    head: css`
        position: sticky;
        top: 0;
        z-index: 99;
        bottom: 20px;
        background-color: #FFF;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px;
        scroll-behavior: smooth;
        @media (max-width: 1000px) {
            margin:0;
        },
    `,
    name: css`
        float: right;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 22px;
        cursor: pointer;   
        scroll-behavior: smooth;
    `,
    options: css`
        display:none;
        scroll-behavior: smooth;
        @media(min-width: 900px){
            // border: 3px solid blue;
            display: flex;
            justify-content: space-around;
            width: 40%;
            font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 15px;
            a {
                cursor: pointer;
            }
        }
    `,
    mobile_menu_container: css`
        cursor: pointer;
    `,
    mobile_menu: css`
        display: none;
        scroll-behavior: smooth;
        @media(max-width: 900px){
            display: flex;
            width: 35px;
            height: 5px;
            background-color: black;
            margin: 6px 0;
        }
    `,
    mobile_options: css`
        display: none;
    `,
    mobile_options_clicked: css`
        display: none;
        @media(max-width: 900px){
            display: flex;
            justify-content: right;
            flex-direction: column;
            position: absolute;
            background-color: white;
            top: 45px;
            height: 170px;
            width: 50%;
            left: 0;
            z-index: 99;
            scroll-behavior: smooth;
            a {
                cursor: pointer;
                margin-top: 10px;
                margin-left: 30%;
                scroll-behavior: smooth;
            }
        }`,

}

export default Header;
import React from 'react';
import { css, keyframes } from 'emotion'
import ScrollIntoView from 'react-scroll-into-view'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SplitText from 'react-pose-text';
import Body from './Body';

import '../App.css';


import me from '../images/me.jpeg'


const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30
    }
};



const Intro = (props) => {

    return (
        <div className={styles.scrollbody_container}>
            <div className={styles.intro_container}>
                <div className={styles.intro_and_arrow_container}>
                    <div className={styles.pic_and_title_container}>
                        <div className={styles.img} >
                            <img src={me} className={styles.img} />
                        </div>
                        <div className={styles.name_title_container}>
                            <div className={styles.name}>
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    Patricia Shirazi
                </SplitText>
                            </div>
                            <div className={styles.title}>
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    full-stack software engineer
                </SplitText>
                            </div>
                        </div>
                    </div>
                    <div className={styles.arrow_container}>
                        <ScrollIntoView smooth={true} selector="#header" className={styles.arrow_container} >
                        <a> <FontAwesomeIcon className={styles.arrow} icon={faAngleDown} /> </a>
                        </ScrollIntoView>
                    </div>
                </div>
            </div>
            <Body i={props.intro} />
        </div>
    )
}

const arrowAnimation = keyframes`{
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
}`



const styles = {
    scrollbody_container: css`
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch;
    `,
    intro_container: css`
    //  border: 3px solid orange;
        width: auto;
        min-height: 400px;
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #F5F5F5;
        background-color: #254769;
    `,
    intro_and_arrow_container: css`
        // border: 3px solid yellow;
        width: 100%;
        min-height: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            height: 90%;
        }
        // @media only screen and (max-height: 450px) and (min-height: 280px) {
        //     width: 100%;
        //     display: flex;
        //     justify-content: flex-end;
        //     flex-direction: column;
        // }
    `,
    pic_and_title_container: css`
        // border: 3px solid red;
        width: auto;
        min-height: 200px
        height: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            width: 100%;
            height: 400px;
        }
        // @media only screen and (max-height: 450px) and (min-height: 280px) {
        //     position: absolute;
        //     display: flex;
        //     justify-content: space-around;
        //     top: 5px;
        //     width: 100%;
        //  }
    `,
    name_title_container: css`
        // border: 3px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    `,
    name: css`
        // font-size: 46px;
        font-size: 3.5vw;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 200;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 32px;
        }
        // @media only screen and (max-height: 450px) and (min-height: 280px) {
        //     font-size: 32px;

        // }
    `,
    title: css`
        // font-size: 26px;
        font-size: 2.5vw;

        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 200;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 18px;
        }
        // @media only screen and (max-height: 450px) and (min-height: 280px) {
        //     font-size: 18px;
        // }
    `,
    img: css`
        // border: 3px solid lightblue;
        img {
            border-radius: 50%;     
        }
    `,
    arrow_container: css`
    //  border: 3px solid white;
        scroll-behavior: smooth;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-overflow-scrolling: touch !important;
        // @media only screen and (max-height: 450px) and (min-height: 280px) {
        //     margin-bottom: 50px;
        // }
      `,
    arrow: css`
        font-size: 24px;
        animation: ${arrowAnimation} 2s infinite;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch !important;
        color: white;

      `
}

export default Intro;

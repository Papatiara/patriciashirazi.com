import React, { useState, useEffect } from 'react';
import { css, keyframes } from 'emotion'
import ScrollIntoView from 'react-scroll-into-view'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SplitText from 'react-pose-text';



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

    const showMore = () => {
        props.arrowClick(true)
    }

    return (
        <div className={styles.intro_container}>
            <div className={styles.intro_and_arrow_container}>
                <div className={styles.pic_and_title_container}>
                    <div>
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
                <ScrollIntoView smooth={true} selector="#header" className={styles.scroll} >
                    <a onClick={showMore}> <FontAwesomeIcon className={styles.icon} icon={faAngleDown} /> </a>
                </ScrollIntoView>
            </div>
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
    intro_container: css`
    // border: 3px solid blue;
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #F5F5F5;

        // background-color: #F5F5F5;
        background-color:         #254769
        ;

    `,
    intro_and_arrow_container: css`
    // border: 3px solid yellow;
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    `,
    pic_and_title_container: css`
        // border: 3px solid red;
        width: 70%;
        height: 300px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    `,
    name_title_container: css`
        // border: 3px solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    name: css`
        font-size: 46px;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 200;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
        @media (width: 320px){
            font-size: 26px;
        }
        @media (width: 280px){
            font-size: 26px;
        }
    `,
    title: css`
        font-size: 26px;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 200;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
        @media (width: 320px){
            font-size: 16px;
        }
        @media (width: 280px){
            font-size: 16px;
        }
    `,
    img: css`
        border-radius: 50%;     
    `,
    scroll: css`
        // height: 20px;
        background-color:         #254769

        // padding-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 330px){
            padding-top: 80px;
            margin-bottom: 5px;


        }
      `,
    // arrow_container: css`
    //     width: 35px;
    //     height: 35px;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;        
    //     border: 2px solid black;
    //     border-radius: 50%;
    //     color: black;
    // `,
    icon: css`
        // background-color:         #254769
        font-size: 24px;
        animation: ${arrowAnimation} 2s infinite;
      `
}

export default Intro;

import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import business from '../images/business.jpg'
import google from '../images/google.jpg'
import teacher from '../images/teacherciee.jpg'
import grad from '../images/grad.jpg'
import hrgrad from '../images/hrgrad.jpg'



import { css } from 'emotion'


const AutoplaySlider = withAutoplay(AwesomeSlider);


const Journey = (props) => {
    return (
        <div ref={props.Jref} className={styles.container_slides_title}>
            <h2 className={styles.title}> My Journey </h2>
            <div className={styles.slide_container}>
                <div>
                    <AutoplaySlider
                        fillParent={false}
                        organicArrows={false}
                        play={true}
                        cancelOnInteraction={true}
                        interval={6000}
                        className={styles.slide}
                    >
            
                  
                        <div className={styles.slides_container}>
                            <div className={styles.pic_description}>
                                <img src={grad} />
                                <div className={styles.description}>
                                    <strong>I got my degree in Mathematics in 2013.
                                        I've always had a passion for solving problems and have always loved Math. 
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slides_container}>
                            <div className={styles.pic_description}>
                                <img src={teacher} />
                                <div className={styles.description}>
                                    <strong>I've started teaching as an intern in high school schools when I was 21 years old.
                                         Since them, I have developed a passion for helping others and also mentoring. 
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slides_container}>
                            <div className={styles.pic_description}>
                                <img src={business} />
                                <div className={styles.description}>
                                    <strong>In 2015 I started my own business by teaching myself how to fix iPhones.
                                        I grew the business from 1 employee to 8 within 24 months in two cities in Brazil, 
                                        managing and being responsible for the company website.
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slides_container}>
                            <div className={styles.pic_description}>
                                <img src={hrgrad} />
                                <div className={styles.description}>
                                    <strong>After learning front-end development as a requirement to run my business in Brazil.
                                        In 2017, when I moved to the US, I've decided to jump into the software engineering field. 
                                        I joined Hack Reactor and had an amazing experience. I learned full-stack concepts, improved my front-end skills, 
                                        and could work with groups of engineers.
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slides_container}>
                            <div className={styles.pic_description}>
                                <img src={google} />
                                <div className={styles.description}>
                                    <strong>I worked for 1 and a half years as a Quality Engineer at Google helping to improve Google Search results in Brazil.
                                    I became an expert on testing as well as using tools such as Selenium and Python to automate processes.
                                    </strong>
                                </div>
                            </div>
                        </div>

                    </AutoplaySlider>
                </div>
            </div>
        </div>

    )
}
const styles = {
    container_slides_title: css`
    background-color: #F0FFF0;

    // border: 3px solid purple;
        // margin-top: 45%;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 22px;
        @media(min-width: 500px){
            font-size: 10px;

        }
    `,
    title: css`
    margin-top: 0px;
    `,
    slide: css`
        // border: 3px solid red;
        margin: auto;
        top:0px;
        width: 100vw;
        height: 300px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        @media(min-width: 300px){
            height: 500px;

        }
        @media(width: 280px){
            height: 380px;
            margin-top: 20px;

        }
    `,

    pic_description: css`
    //  border: 3px solid red;
        width: 80%;
        heigth: 20%;
    `,
    description: css`
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        align-text: center;
        @media(min-width: 300px){
            font-size: 18px;
        }
        @media (width: 280px){
            font-size: 12px;

        
                }
    `,
    slides_container: css`
    // border: 3px solid grey;
        margin-top: 0%;
        // position: absolute;
        width: 100%;
        height: 280px;
        background-color:  #F5F5F5;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
            float: right;
            border-radius: 80%
        }
        @media(min-width: 300px){
            margin-top: 0%;
            height: 450px;
        }
        @media (width: 320px){
            margin-top: 0%;
            height: 500px;
        }
        @media (width: 280px){
            // top: -20%;
            height: 336px;

        
                }
    `
}

export default Journey
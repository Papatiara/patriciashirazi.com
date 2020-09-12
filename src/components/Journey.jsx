import React from 'react';
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


const Journey = () => {
    return (
        <section className={styles.container_slides_title}>
            <h2 className={styles.title}> My Journey </h2>
            <hr className={styles.line} />
            <div className={styles.slides_container}>
                <div>
                    <AutoplaySlider
                        fillParent={false}
                        organicArrows={false}
                        play={true}
                        cancelOnInteraction={true}
                        interval={6000}
                        className={styles.slide}
                    >

                        <div className={styles.pic_description}>
                            <img src={grad} />
                            <div className={styles.description}>
                                <strong>I got my degree in Mathematics in 2013.
                                I've always had a passion for solving problems and have always loved Math.
                                    </strong>
                            </div>
                        </div>
                        <div className={styles.pic_description}>
                            <img src={teacher} />
                            <div className={styles.description}>
                                <strong>I started teaching as an intern, when I was 21 years old.
                                Since them, I have developed a passion for helping others and also mentoring.
                                    </strong>
                            </div>
                        </div>
                        <div className={styles.pic_description}>
                            <img src={business} />
                            <div className={styles.description}>
                                <strong>In 2015 I started my own business by teaching myself how to fix iPhones.
                                I grew the business from 1 employee to 8 within 24 months in two cities in Brazil,
                                managing and being responsible for the company website.
                                    </strong>
                            </div>
                        </div>
                        <div className={styles.pic_description}>
                            <img src={hrgrad} />
                            <div className={styles.description}>
                                <strong>
                                    In 2018, when I moved to the US, I've decided to jump into the software engineering field.
                                    I joined Hack Reactor and had an amazing experience. I learned full-stack concepts, improved my front-end skills,
                                    and could work with groups of engineers.
                                </strong>
                            </div>
                        </div>
                        <div className={styles.pic_description}>
                            <img src={google} />
                            <div className={styles.description}>
                                <strong>In 2018 I joined Google. I worked for 1 and a half years as a Quality Engineer helping to improve Google Search results in Brazil.
                                I became an expert on testing as well as using tools such as Selenium and Python to automate processes.
                                </strong>
                            </div>
                        </div>
                    </AutoplaySlider>
                </div>
            </div>
        </section>

    )
}
const styles = {
    container_slides_title: css`
        // border: 3px solid purple;
        background-color: #F5F5F5;
        width: 100%;
        height: 100vh;
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 22px;
    `,
    title_line: css`
        height: 50px;
        display: flex;
        justify-content: center;
        margin-top: 50px;
        align-items: center;
        flex-direction: column;
        text-align: center;
    `,

    slide: css`
        // border: 3px solid red;
        margin: auto;
        height: 300px;
        top:0px;
        width: 100vw;
    `,

    pic_description: css`
        // border: 3px solid red;
        width: 100%;
        heigth: 20%;
        background-color: #F5F5F5;
        img {
            float: right;
            border-radius: 80%
        }
    
    `,
    description: css`
        // border: 3px solid yellow;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        align-text: center;
        padding-top: 30px;
        @media(min-width: 300px){
            font-size: 18px;
        }
        @media (width: 280px){
            font-size: 12px;
        }
    `,
    slides_container: css`
        // border: 3px solid grey;
        width: 100%;
        height: auto;
    `,
    line: css`
        border-bottom: 1px solid grey;
        width: 100px;
    `,
    title: css`
        margin-top: 16px;
    `
}

export default Journey
import React from 'react';
<<<<<<< HEAD
import { css, keyframes } from 'emotion'
import ScrollIntoView from 'react-scroll-into-view'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SplitText from 'react-pose-text';
=======
import { css } from 'emotion'
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2

import background from '../images/back.png'
import me from '../images/image.png'
import partOfBack from '../images/backgroundpart.png'
import partTwo from '../images/partTwo.png'
import partThree from '../images/partThree.png'





import me from '../images/me.jpeg'
import me2 from '../images/me2.png'



let intViewportHeight = window.innerHeight;
let toString = intViewportHeight.toString() + "px"

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
<<<<<<< HEAD
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
=======
        // <div className={styles.background}>
        //     <div className={styles.name}> PATRICIA SHIRAZI <br></br> 
        //     <div className={styles.sub}>FULL STACK SOFTWARE ENGINEER</div>
        //     </div>
        // </div>
        <div>
        <div className={styles.intro1_holder}>    </div>
            <div className={styles.secondBackground}>
            <div className={styles.partOne} ><img src={partOfBack} /> <img src={partTwo} /> </div>

                <div className={styles.intro2_holder}>

                    <img className={styles.img} src={me} />
                    <div className={styles.nameHolder}>
                        <div className={styles.myname}> PATRICIA SHIRAZI <br></br>
                            <div className={styles.description}>Full Stack Software Engineer</div>
                        </div>
                    </div>

                </div>
                 <div className={styles.bottom} >
                    <img src={partOfBack} />
                    <img src={partThree} />
                </div> 
           </div>
         {/* <div>  */}
  
      </div> 
     
 
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
    )
}

const arrowAnimation = keyframes `{
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
<<<<<<< HEAD
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
=======
    video: css`

    `,
    background: css`
        height: 100vh;
        // width: 90%;
        border: 10px inset #b4409e;
    // border-style: outset;
    // border-color: #b853a5;
        margin: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `,
    name: css`
        font-size: 64px;
        font-family: 'Montserrat Subrayada', sans-serif;
    `,
    sub: css`
        font-size: 24px;
        font-family: 'Poiret One', sans-serif;
        `,
    intro2_holder: css`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    }
    `,
    secondBackground: css`
    display: none;
    @media (max-width: 1300px) {
        overflow: hidden;
        display: flex;
        height: 100vh;
        width: 100%;
        background-color: #9ed0c9;
    `,
    img: css`
    width: 50vw;
    height: auto;
    margin:auto;
    @media (max-height: 375px) {
        height:100vh;
    }`,
    partOne: css`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
    `,
    bottom: css`
    height: 100px;
    margin-top: 95vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;
    `,
    nameHolder: css`
    margin: auto;
   `,
    description: css`
    font-size: 14px;
    color: brown;
    `,
    myname: css`
    font-size: 25px;
    font-weight: bold;
    color: #cb006d;
    font-family: "Trebuchet MS", Helvetica, sans-serif
    `,
    intro1_holder: css`
    display: none;
    @media (min-width: 1300px) {
       display:block;
       height: 100vh;
       background-image: url(${background});
       background-color: #9ed0c9;
       background-repeat: no-repeat;
       width: 100%;
    }
    `,
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
}

export default Intro;

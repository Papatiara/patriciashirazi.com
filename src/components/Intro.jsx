import React from 'react';
import { css } from 'emotion'

import background from '../images/back.png'
import phone from '../images/image.png'



const Intro = () => {
    return (
        <div>
            <div className={styles.intro_holder}>    </div>
            <div className={styles.back}>
                <div className={styles.name}>
                    <div> PATRICIA SHIRAZI <br></br>
                        <div className={styles.st}>Full Stack Software Engineer</div>
                    </div>
                    <img className={styles.img} src={phone} />
                </div>
            </div>
        </div>
    )
}

const styles = {
    back: css`
    display: none;
    @media (max-width: 1300px) {
        display: flex;
        justify-content: center;
        color: #cb006d;
        height: 100vh;
        width: 100%;
        background-color: #9ed0c9;   
    }
    `,
    name: css`
    position: absolute;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    // margin: auto;
    margin-top: 15%;
    height: 400px;
    font-size: 25px;
    font-weight: bold;
    font-family: "Trebuchet MS", Helvetica, sans-serif
    // @media (max-width: 500px) {
    // }	
  
        `,
    st: css`
    font-size: 14px;
    color: brown;
  
    `,

    img: css`
    width: auto;
    height: auto;
    @media (max-width: 500px) {
        width: 200px;
        margin-left: 2%;
    }
    `,
    intro_holder: css`
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
}

export default Intro;

import React from 'react';
import { css } from 'emotion'

import Graduation from './carousel/Graduation';
import Business from './carousel/Business';
import Automation from './carousel/Automation';
import Google from './carousel/Google';
import Math from './carousel/Math';
import Moody from './carousel/Moody';



const Carousel = (props) => {

    if (props.matter === "Math") {
        return (
            <div className={styles.grid_selected}>
                < Graduation />
                < Math />
            </div>
        )
    } if (props.matter === "Google") {
        return (
            <div className={styles.grid_selected}>
                < Google showGoogle={props.showGoogle}/>
                < Automation />
            </div>
        )
    } if (props.matter === "Engineering") {
        return (
            <div className={styles.grid_selected}>
                < Automation />
                < Moody showMoody={props.showMoody}/>
            </div>
        )
    } if (props.matter === "Entrepreneurship") {
        return (
            <div className={styles.grid_selected}>
                < Business showSubject={props.showSubject} />
            </div>
        )
    } return (
        <div className={styles.grid}>
            < Google showGoogle={props.showGoogle}/>
            < Graduation showGraduation={props.showGraduation}/>
            < Moody showMoody={props.showMoody}/>
            < Business showSubject={props.showSubject} />
            {/* < Automation /> */}
            < Math />
        </div>
    )

}

const styles = {
    grid: css`
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    width: 1150px;
    height: 550px;
    margin-top: 2%;
    margin-right: 7px;
    margin-left: 10.5%;
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        height: 1700px;
        width: 250px;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }
    `,
    grid_selected: css`
    display: flex;
    justify-content: space-between;
    width: 550px;
    height: 550px;
    margin-top: 2%;
    cursor: pointer;
    margin-left: 35%;
    margin-top: 25px;
    @media (max-width: 800px) {
        flex-wrap: wrap;
        display: flex;
        margin-top: 2%;
        margin-left: 23.5%;
        height: 650px;
        transition: height 2s;
        width: 300px;
        align-items: center;
    }
    `
}
export default Carousel;
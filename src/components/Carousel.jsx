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
                < Google />
                < Automation />
            </div>
        )
    } if (props.matter === "Engineering") {
        return (
            <div className={styles.grid_selected}>
                < Automation />
                < Moody />
            </div>
        )
    } if (props.matter === "Entrepreneurship") {
        return (
            <div className={styles.grid_selected}>
                < Business />
            </div>
        )
    } return (
        <div className={styles.grid}>
            < Moody />
            < Business />
            < Automation />
            < Graduation />
            < Google />
            < Math />
        </div>
    )

}

const styles = {
    grid: css`
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    width: 850px;
    height: 550px;
    margin-top: 2%;
    margin-left: 23.5%;
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        height: 1500px;
        width: 250px;
        align-items: center;
        justify-content: space-around;
    }
    `,
    grid_selected: css`
    display: flex;
    justify-content:space-between;
    width: 550px;
    height: 500px;
    margin-top: 2%;
    margin-left: 35%;
    margin-top: 25px;
    font-size: 21px;
    text-align: center;
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        height: 550px;
        transition: height 2s;
        width: 250px;
        align-items: center;
        justify-content: space-around;
    }
    `
}
export default Carousel;
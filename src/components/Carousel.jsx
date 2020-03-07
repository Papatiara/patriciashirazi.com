import React from 'react';
import { css } from 'emotion'

import Graduation from './carousel/Graduation';
import Business from './carousel/Business';
import Automation from './carousel/Automation';
import Google from './carousel/Google';
import Math from './carousel/Math';
import Moody from './carousel/Moody';
import Voluntering from './carousel/Voluntering';




const Carousel = (props) => {

    if (props.matter === "Math") {
        return (
            <div className={styles.grid_selected}>
                < Math showMath={props.showMath}/>
            </div>
        )
    } if (props.matter === "Google") {
        return (
            <div className={styles.grid_selected}>
                < Google showGoogle={props.showGoogle}/>
            </div>
        )
    } if (props.matter === "Engineering") {
        return (
            <div className={styles.grid_selected}>
                < Google showGoogle={props.showGoogle}/>
                < Graduation showGraduation={props.showGraduation}/>
                < Moody showMoody={props.showMoody}/>
                < Automation showAutomation={props.showAutomation}/>
            </div>
        )
    } if (props.matter === "Entrepreneurship") {
        return (
            <div className={styles.grid_selected}>
                < Business showSubject={props.showSubject} />
            </div>
        )
    } if (props.matter === "Voluntering") {
        return (
            <div className={styles.grid_selected}>
            < Voluntering showVoluntering={props.showVoluntering}/>
            </div>
        )
    }
    return (
        <div className={styles.grid}>
            < Google showGoogle={props.showGoogle}/>
            < Graduation showGraduation={props.showGraduation}/>
            < Moody showMoody={props.showMoody}/>
            < Business showSubject={props.showSubject} />
            < Automation showAutomation={props.showAutomation} />
            < Voluntering showVoluntering={props.showVoluntering}/>
            < Math showMath={props.showMath}/>
        </div>
    )

}

const styles = {
    grid: css`
    display: flex;
    font-family: 'Zilla Slab', serif;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70%;
    height: auto;
    margin: auto;
    overflow-y: hidden;
    @media (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        width: 90%;
        margin-top: 2%;
        margin-right: 5%;
        margin-left: 5%;
    }
    `,
    grid_selected: css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 75%;
    margin-top: 2%;
    margin-right: 2%;
    margin-left: 5%;
    padding-left: 2%;
    cursor: pointer;
    @media (max-width: 1024px) {
        margin-right: 5%;
        margin-left: 5%;
        padding-left: 2%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 90%;
        // margin: auto;
        cursor: pointer;
    }
    `
}
export default Carousel;
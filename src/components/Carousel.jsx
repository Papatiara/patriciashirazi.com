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
<<<<<<< HEAD
                < Automation />
=======
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
            </div>
        )
    } if (props.matter === "Engineering") {
        return (
            <div className={styles.grid_selected}>
<<<<<<< HEAD
                < Automation />
                < Moody showMoody={props.showMoody}/>
=======
                < Google showGoogle={props.showGoogle}/>
                < Graduation showGraduation={props.showGraduation}/>
                < Moody showMoody={props.showMoody}/>
                < Automation showAutomation={props.showAutomation}/>
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
            </div>
        )
    } if (props.matter === "Entrepreneurship") {
        return (
            <div className={styles.grid_selected}>
                < Business showSubject={props.showSubject} />
<<<<<<< HEAD
=======
            </div>
        )
    } if (props.matter === "Voluntering") {
        return (
            <div className={styles.grid_selected}>
            < Voluntering showVoluntering={props.showVoluntering}/>
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
            </div>
        )
    }
    return (
        <div className={styles.grid}>
            < Google showGoogle={props.showGoogle}/>
            < Graduation showGraduation={props.showGraduation}/>
            < Moody showMoody={props.showMoody}/>
            < Business showSubject={props.showSubject} />
<<<<<<< HEAD
            {/* < Automation /> */}
            < Math />
=======
            < Automation showAutomation={props.showAutomation} />
            < Voluntering showVoluntering={props.showVoluntering}/>
            < Math showMath={props.showMath}/>
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
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
<<<<<<< HEAD
    width: 1150px;
    height: 550px;
    margin-top: 2%;
    margin-right: 7px;
    margin-left: 10.5%;
    @media (max-width: 800px) {
=======
    width: 70%;
    height: auto;
    margin: auto;
    overflow-y: hidden;
    @media (max-width: 1024px) {
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
<<<<<<< HEAD
        height: 1700px;
        width: 250px;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
=======
        height: auto;
        width: 90%;
        margin-top: 2%;
        margin-right: 5%;
        margin-left: 5%;
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
    }
    `,
    grid_selected: css`
    display: flex;
    justify-content: space-between;
<<<<<<< HEAD
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
=======
    flex-wrap: wrap;
    width: 75%;
    margin-top: 2%;
    margin-right: 12%;
    margin-left: 15%;
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
        cursor: pointer;
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
    }
    `
}
export default Carousel;
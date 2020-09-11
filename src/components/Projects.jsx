import React from 'react';
import { MDBView, MDBMask } from "mdbreact";



import { css } from 'emotion'

import htg from '../images/HTG.png';
import moody from '../images/m.png';
import portfolio from '../images/portfolio.png';
import tree from '../images/tree.png';
import arcade from '../images/arcade.png';
import slope from '../images/slope.png';




const Projects = () => {
    return (
        <section className={styles.projects_container}  >
            <h2 className={styles.title}> Recent Projects </h2>
            <p className={styles.line}></p>
            {/* <br></br> */}
            <div className={styles.projects_grid}>
                <div className={styles.project}>
                    <a href={"https://www.humboldtogo.com/"}>
                        <MDBView hover zoom >
                            <img src={htg} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Humboldt To Go</p>
                                <p>Finding To-Go options during COVID-19</p>
                            </MDBMask>
                        </MDBView>
                    </a>
                </div>
                <div className={styles.project}>
                    <a href={"https://github.com/Papatiara/pacman"}>
                        <MDBView hover zoom >
                            <img src={arcade} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Pacman</p>
                                <p>React and TS implementation of Pacman</p>
                            </MDBMask>
                        </MDBView>
                    </a>
                </div>
                <div className={styles.project}>
                    <a href={"https://github.com/Papatiara/slope"}>
                        <MDBView hover zoom >
                            <img src={slope} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Slope</p>
                                <p>Vanilla JS implementation</p>
                            </MDBMask>
                        </MDBView>
                    </a>
                </div>
                <div className={styles.project}>
                    <a href={"https://github.com/Papatiara/Moody"}>
                        <MDBView hover zoom>
                            <img src={moody} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Moody</p>
                                <p>NLP analysis</p>
                            </MDBMask>
                        </MDBView>
                    </a>
                </div>
                <div className={styles.project}>
                    <a href={"https://github.com/Papatiara/bst-or-bsct"}>
                        <MDBView hover zoom>
                            <img src={tree} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>BST</p>
                                <p>JS implementation of a Binary Search Tree</p>
                            </MDBMask>
                        </MDBView>
                    </a>
                </div>
                <div className={styles.project}>
                    <MDBView hover zoom>
                        <img src={portfolio} alt="" />
                        <MDBMask overlay="cyan-light" className={styles.project_title} >
                            <p>this portfolio</p>
                        </MDBMask>
                    </MDBView>
                </div>
            </div>
        </section>

    )
}

let styles = {
    projects_container: css`
        // border: 3px solid black;
        margin-top: 60px;
        width: 100vw;
        height: 100vh;
        min-height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            height: auto;
        }
    `,

    title: css`
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 2rem;
    `,

    projects_grid: css`
        // border: 3px solid pink;
        max-width: 720px ;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        }
    `,
    project_title: css`
        color: white;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: bold;
        text-align: center;
        @media only screen and (max-width: 375px) and (min-width: 280px) {
            font-size: 10px;
            margin-auto;
        }
    `,
    project: css`
        margin-top: 10px;
    `,
    line : css`
        border-bottom: 1px solid grey;
        width: 100px;
    `
}


export default Projects;

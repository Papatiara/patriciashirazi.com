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
            <hr className={styles.line} />
            <div className={styles.projects_grid}>
                <figure className={styles.project}>
                    <a href={"https://www.humboldtogo.com/"}>
                        <MDBView hover zoom >
                            <img src={htg} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Humboldt To Go</p>
                                <figcaption>Finding To-Go options during COVID-19</figcaption>
                            </MDBMask>
                        </MDBView>
                    </a>
                </figure>
                <figure className={styles.project}>
                    <a href={"https://github.com/Papatiara/pacman"}>
                        <MDBView hover zoom >
                            <img src={arcade} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Pacman</p>
                                <figcaption>React and TS implementation of Pacman</figcaption>
                            </MDBMask>
                        </MDBView>
                    </a>
                </figure>
                <figure className={styles.project}>
                    <a href={"https://github.com/Papatiara/slope"}>
                        <MDBView hover zoom >
                            <img src={slope} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Slope</p>
                                <figcaption>Vanilla JS implementation</figcaption>
                            </MDBMask>
                        </MDBView>
                    </a>
                </figure>
                <figure className={styles.project}>
                    <a href={"https://github.com/Papatiara/Moody"}>
                        <MDBView hover zoom>
                            <img src={moody} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>Moody</p>
                                <figcaption>NLP analysis</figcaption>
                            </MDBMask>
                        </MDBView>
                    </a>
                </figure>
                <figure className={styles.project}>
                    <a href={"https://github.com/Papatiara/bst-or-bsct"}>
                        <MDBView hover zoom>
                            <img src={tree} alt="" />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>BST</p>
                                <figcaption>JS implementation of a Binary Search Tree</figcaption>
                            </MDBMask>
                        </MDBView>
                    </a>
                </figure>
                <figure className={styles.project}>
                    <MDBView hover zoom>
                        <img src={portfolio} alt="" />
                        <MDBMask overlay="cyan-light" className={styles.project_title} >
                            <figcaption>this portfolio</figcaption>
                        </MDBMask>
                    </MDBView>
                </figure>
            </div>
        </section>

    )
}

let styles = {
    projects_container: css`
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
        max-width: 720px ;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            padding-bottom: 20px;
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
    line: css`
        border-bottom: 1px solid grey;
        width: 100px;
    `
}


export default Projects;

import React from 'react';
import { MDBView, MDBMask } from "mdbreact";



import { css } from 'emotion'

import htg from '../images/HTG.png';
import moody from '../images/m.png';
import portfolio from '../images/portfolio.png';
import tree from '../images/tree.png';





const Projects = () => {
    return (
        <div className={styles.projects_container}  >
            <div className={styles.projects}>
                <h2> Recent Projects </h2>
                <p className={styles.line}></p>
                <br></br>
                <div className={styles.projects_grid}>
                    <div className={styles.project}>
                        <a
                            href={"https://www.humboldtogo.com/"}
                        >
                            <MDBView hover zoom >

                                <img
                                    src={htg}
                                    alt=""


                                />
                                <MDBMask overlay="cyan-light" className={styles.project_title} >
                                    <p>Humboldt To Go</p>
                                    <p>Finding To-Go options during COVID-19</p>
                                </MDBMask>
                            </MDBView>
                        </a>

                    </div>
                    <div className={styles.project}>
                        <a
                            href={"https://whispering-journey-70242.herokuapp.com/"}
                        >
                            <MDBView hover zoom>
                                <img
                                    className={styles.image}
                                    src={moody}
                                    alt=""

                                />
                                <MDBMask overlay="cyan-light" className={styles.project_title} >
                                    <p>Moody</p>
                                    <p>NLP analysis</p>
                                </MDBMask>
                            </MDBView>
                        </a>
                    </div>
                    <div className={styles.project}>
                        <a
                            href={"https://github.com/Papatiara/bst-or-bsct"}
                        >
                            <MDBView hover zoom>
                                <img
                                    className={styles.image}
                                    src={tree}
                                    alt=""
                                />
                                <MDBMask overlay="cyan-light" className={styles.project_title} >
                                    <p>BST</p>
                                    <p>JS implementation of a Binary Search Tree</p>
                                </MDBMask>
                            </MDBView>
                        </a>

                    </div>
                    <div className={styles.project}>
                        <MDBView hover zoom>
                            <img
                                className={styles.image}
                                src={portfolio}
                                alt=""
                            />
                            <MDBMask overlay="cyan-light" className={styles.project_title} >
                                <p>this portfolio</p>
                            </MDBMask>
                        </MDBView>
                    </div>
                </div>
            </div>
        </div>

    )
}

let styles = {
    projects_container: css`
        scroll-behavior: smooth;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media only screen and (max-width: 375px) and (min-width: 280px) {
            height: 700px;
        }
    `,
    projects: css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 22px;
      
    `,
    
    projects_grid: css`
        // border: 3px solid pink;
        width: 50%;
        height: 600px;
        display: flex;
        overflow-y:scroll;
        overflow-x:hidden;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        @media (min-width: 500px){
            width: 550px;
            height: 500px;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            height: 350px;
            width: 80%;

        }
      
        
    `,
    project: css`
        @media only screen and (max-width: 450px) and (min-width: 280px) {
            margin-top: 10px;
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
    line: css`
        border-bottom: 1px solid grey;
        padding-bottom: 5px;
        margin: auto;
        width: 100px;
`,

}


export default Projects;

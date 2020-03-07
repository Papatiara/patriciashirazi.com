import React, { useEffect } from 'react';
import { css } from 'emotion'
import { withRouter } from "react-router-dom";
import Article_Header from './Article_Header';


import googleforbr from "../../images/googleforbr.png";

const title = "Engineer at Google"
const description = "A little of my experience working to improve Google Search in Brazil."


const Google_text = (props) => {
   
    useEffect(() => {
        if (props.history.action === "PUSH") {
            window.scrollTo(0, 0)
        } else {
            props.showGoogle(false)
            props.history.push('/');
        }
    })

    const backHome = () => {
        props.showGoogle(false)
        props.history.push('/')
    }
    return (
        <article>
            <Article_Header title={title} description={description} />
            <p className={styles.backHome} onClick={() => backHome()}>Patricia's Portfolio</p>
            <body className={styles.body}>
                <section>
                    <p> In 2018 I graduated from the Hack Reactor Software Engineering Bootcamp and dived into the job hunt. I was confident of my skills as a full-stack Software Engineer, but I was also aware that I didn't have any experience, and positions on big corporations such as Google or Airbnb were, maybe, a little out of my league. </p>
                    <p> In fact, for any new graduate, the kick starts in their careers is always a challenge, and finding a differential can help in creating an advantage over other thousands of new graduates seeking their first chances. I found my differential when I realized that there weren't many Portuguese speakers in the tech industry here in the US, and if any business wants to localize its services and products to South America, the special attention to its biggest country will be necessary.</p>
                </section>
                <section>
                    <h2>Bilingual Engineer</h2>
                    <p> The position required someone with technical knowledge and, besides the Portuguese fluency, the cultural expertise about Brazil. The job was just a perfect fit for me. After three rounds of interviews, I got the offer! </p>
                </section>
                <section>
                    <h2>My daily responsibilities included</h2>
                    <ul>
                        <li>Create and automate data reporting tools and dashboards</li>
                        <li>Work with Google internal machine learning tools to increase search accuracy </li>
                        <li>Provide Portuguese expertise for a wide range of topic areas and help to define software needs</li>
                        <li>Operate with search engineers for advanced algorithm development</li>
                        <li>Help adjust the user interfaces to the local languages</li>
                        <li>Write configuration documents for explanations</li>
                    </ul>
                </section>
                <section>
                    <h2>Working at GooglePlex and the take-outs of my experience</h2>
                    <p> Using cutting edge technologies with the most talented engineers that a company like Google can have, was just the most amazing work experience of my career so far. </p>
                    <p> I was able to put on practice many of the skills I learned at HR, such as A/B testing, process automation, and JavaScript, as well as, learn new ones, for example, Selenium and Python.</p>
                    <p> Not to mention all the perks GooglePlex can offer! Even as a contractor, I had all the benefits of a Google Employee, it was fun working in such a fun and incredible office! </p>
                </section>
            </body>
        </article>
    )
}


const styles = {
    title_holder: css` 
        width: 100%;
        height: 180px;
        background-color: black;
        color: white;
        `,
    title: css`
        padding-top: 25px;
        padding-left: 48px;
        font-weight: 800;
        font-size: 35px;
        `,
    description: css`
        padding-left: 48px;
        font-weight: 600;
        font-size: 15px;
    `,
    body: css`
        padding-top: 25px;
        padding-left: 48px;
        font-family: 'Zilla Slab', serif;
    `,
    backHome: css`
        margin-top: 15px;
        padding-left: 48px;
        cursor: pointer;
        &:hover {
            font-weight: bold;
            color: #008080;
            font-size: 18px;
    }
`,
    image: css`
    width: 60%      
`
}

export default withRouter(Google_text);
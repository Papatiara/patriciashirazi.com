import React, { useEffect } from 'react';
import Article_Header from './Article_Header';
import { withRouter } from "react-router-dom";
import { css } from 'emotion'

import business from "../../images/rirteam.jpg";
import rir from "../../images/rir.png";

const title = "Rio Phone Repair";
const description = "How I become a Co-founder and Operation manager of business from learning myself how to fix iPhones"

const Business_text = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    const backHome = () => {
        props.showBusiness(false)
        props.history.push('/home')
    }
    return (
        <article>
            <Article_Header title={title} description={description} />
            <p className={styles.backHome} onClick={() => backHome()}>Patricia's Portfolio</p>
            <div className={styles.body}>
                <section>
                    <p> In 2015 I was a Teacher in Rio de Janeiro, I had the opportunity to not only teach Mathematics but professionals skills, such as entrepreneurship, leadership, agile, to underprivileged students from favelas. During that time I wanted to put on practice some of the knowledge, which I was transmitting to my class.</p>
                    <p>After cracking my phone screen I asked my husband to replace it - he had learned how to do it a couple of years ago when he used to work in a phone store. It took 20 minutes to do so, which was very different from the stores that usually take 2 days to make a simple screen replacement.
After seeing him replacing my phone screen a couple of times, I was able to do it myself and on that afternoon we had the idea of starting our own business. We created a Facebook page for the business with the original name Rio iPhone Repair and created a Facebook Ad for it claiming that we would go anywhere in Rio and replace the screen in 20 min. Very ambitious considering we didn't know every spot in Rio. But it worked! In a couple of weeks, we were all over the city fixing iPhones. </p>
                </section>
                <img className={styles.image} src={rir} />
                <section>
                    <h2>How big does the business become?</h2>
                    <p> After running the business for a few months, the demand increase and we hired and trained 3 more technicians and 1 Operation Manager. At that point, I would take care of the finances and customer service, as well as, social media and websites. </p>
                    <p>Since our model was working great in Rio, we expand to a nearby city Belo Horizonte. There, our business would be called IExpress BH.</p>
                </section>
                <img className={styles.image2} src={business} />
                <section>
                    <h2>What happened with the business</h2>
                    <p>After years of running the business in Brazil, we decided was the time for moving to San Diego - my husband's hometown. We took care of the business remotely for a while, but it was time to move on with our careers. </p>
                    <p>We sold the company in 2017, the company is functioning still in Brazil.</p>
                </section>
                <section>
                    <h3>Check it out!</h3>
                    <a href={"https://www.rioiphonerepair.com.br/"}> Rio iPhone Repair </a>
                </section>
            </div>
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
        font-family: 'Raleway',sans-serif;
        font-weight: 800;
        font-size: 5.9vw;
        `,
    description: css`
        padding-left: 48px;
        font-family:  Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Fira Sans,Helvetica Neue,Arial,sans-serif;
        font-weight: 600;
        font-size: 5.9vw;
        `,
    body: css`
     text-indent: 5%;
     margin: 12px 12px 12px 12px;
     text-align: justify;

    `,
    backHome: css`
    margin-top: 15px;
    padding-left: 48px;
    cursor: pointer;
    &:hover {
        font-weight: bold;
        color: #008080;
        font-size: 18px;
    }`,
    image: css`
    width: 70%;
    height: auto;
    margin-right: 5%;
    margin-left: 5%;
    `,
    image2: css`
    margin-right: 5%;
    margin-left: 5%;
    `
}

export default withRouter(Business_text);